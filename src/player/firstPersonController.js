import * as THREE from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

// Walkable alley bounds & solid obstacle AABBs [minX, maxX, minZ, maxZ]
const ALLEY_BOUNDS = { minX: -1.88, maxX: 1.88, minZ: -25.2, maxZ: 2.8 };
const OBSTACLES = [
  [-2.25, -1.6, -9.0, -8.3], // Left Utility Pole
  [1.6, 2.25, -16.0, -15.3], // Right Utility Pole
  [1.45, 2.0, -4.4, -3.8], // Traffic Cone
];

/**
 * Playable First-Person Rainy Alley Exploration Controller:
 * - Zero-delay crisp WASD movement (instant start/stop, no sluggish ice-skating drift)
 * - PointerLockControls (with safe promise handling + drag-look fallback)
 * - Pre-allocated vectors & throttled interaction raycast for zero GC stalls
 * - F / Right-Click tactical flashlight, C crouch, Shift sprint, E interact
 */
export class FirstPersonController {
  constructor(camera, scene, domElement, interactables, callbacks = {}) {
    this.camera = camera;
    this.domElement = domElement;
    this.interactables = interactables;
    this.callbacks = callbacks;
    this.enabled = false;

    this.controls = new PointerLockControls(camera, domElement);
    this.controls.pointerSpeed = 1.0;

    this.keys = new Set();
    this.crouching = false;
    this.eyeHeight = 1.56;
    this.bobTime = 0;
    this.lastStepCycle = 0;
    this.velocity = new THREE.Vector3();

    // Pre-allocated scratch objects (zero per-frame allocations)
    this._forward = new THREE.Vector3();
    this._right = new THREE.Vector3();
    this._wishDir = new THREE.Vector3();
    this._camDir = new THREE.Vector3();
    this._camRight = new THREE.Vector3();
    this._flashOffset = new THREE.Vector3(0, -0.1, 0);
    this._raycaster = new THREE.Raycaster();
    this._raycaster.far = 3.2;
    this._centerNdc = new THREE.Vector2(0, 0);
    this._hitMeshes = interactables.map((item) => item.mesh);
    this._rayTimer = 0;

    this._dragging = false;
    this._lastMouseX = 0;
    this._lastMouseY = 0;
    this._euler = new THREE.Euler(0, 0, 0, 'YXZ');

    // Tactical Flashlight (non-shadow-casting so static shadows stay crisp & fast)
    this.flashlightOn = false;
    this.flashlight = new THREE.SpotLight(0xedf4ff, 0, 22, Math.PI * 0.24, 0.65, 1.5);
    this.flashlight.castShadow = false;
    this.flashlightTarget = new THREE.Object3D();
    scene.add(this.flashlight, this.flashlightTarget);
    this.flashlight.target = this.flashlightTarget;

    this.currentTarget = null;
    this._bindEvents();
  }

  _bindEvents() {
    window.addEventListener('keydown', (e) => {
      if (!this.enabled) return;
      if (
        e.code === 'ArrowUp' ||
        e.code === 'ArrowDown' ||
        e.code === 'ArrowLeft' ||
        e.code === 'ArrowRight' ||
        e.code === 'Space'
      ) {
        e.preventDefault();
      }
      if (!e.repeat) {
        if (e.code === 'KeyC') {
          this.crouching = !this.crouching;
        } else if (e.code === 'KeyF') {
          this.toggleFlashlight();
        } else if (e.code === 'KeyE') {
          this.interact();
        }
      }
      this.keys.add(e.code);
    });

    window.addEventListener('keyup', (e) => this.keys.delete(e.code));

    const clearInputs = () => {
      this.keys.clear();
      this._dragging = false;
    };
    window.addEventListener('blur', clearInputs);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) clearInputs();
    });

    this.domElement.addEventListener('contextmenu', (e) => {
      if (this.enabled) e.preventDefault();
    });

    this.domElement.addEventListener('mousedown', (e) => {
      if (!this.enabled) return;
      if (e.button === 2) {
        this.toggleFlashlight();
        return;
      }
      if (!this.controls.isLocked && e.button === 0) {
        this._dragging = true;
        this._lastMouseX = e.clientX;
        this._lastMouseY = e.clientY;
        try {
          Promise.resolve(this.domElement.requestPointerLock?.()).catch(() => {});
        } catch {
          // Drag-look fallback remains active if pointer lock is blocked
        }
      }
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.enabled || !this._dragging || this.controls.isLocked) return;
      const dx = e.clientX - this._lastMouseX;
      const dy = e.clientY - this._lastMouseY;
      this._lastMouseX = e.clientX;
      this._lastMouseY = e.clientY;

      this._euler.setFromQuaternion(this.camera.quaternion, 'YXZ');
      this._euler.y -= dx * 0.0032;
      this._euler.x = THREE.MathUtils.clamp(this._euler.x - dy * 0.0032, -Math.PI * 0.44, Math.PI * 0.44);
      this.camera.quaternion.setFromEuler(this._euler);
    });

    window.addEventListener('mouseup', () => {
      this._dragging = false;
    });
  }

  enter(fromCurrentPose = false) {
    this.enabled = true;
    this.keys.clear();
    this.velocity.set(0, 0, 0);
    if (!fromCurrentPose) {
      this.camera.position.set(0.0, 1.56, 1.6);
      this.camera.lookAt(0.0, 1.5, -14.0);
    }
    this._euler.setFromQuaternion(this.camera.quaternion, 'YXZ');
    this._euler.z = 0;
    this.camera.quaternion.setFromEuler(this._euler);

    try {
      Promise.resolve(this.domElement.requestPointerLock?.()).catch(() => {});
    } catch {
      // Safe fallback
    }
  }

  exit() {
    this.enabled = false;
    this._dragging = false;
    this.keys.clear();
    this.velocity.set(0, 0, 0);
    this.flashlight.intensity = 0;
    if (this.controls.isLocked) {
      document.exitPointerLock?.();
    }
  }

  toggleFlashlight() {
    this.flashlightOn = !this.flashlightOn;
    this.flashlight.intensity = this.flashlightOn ? 10.5 : 0;
    this.callbacks.onFlashlightToggle?.(this.flashlightOn);
  }

  interact() {
    if (this.currentTarget) {
      this.currentTarget.interact();
    }
  }

  _isWalkable(x, z) {
    if (x < ALLEY_BOUNDS.minX || x > ALLEY_BOUNDS.maxX || z < ALLEY_BOUNDS.minZ || z > ALLEY_BOUNDS.maxZ) {
      return false;
    }
    for (const [minX, maxX, minZ, maxZ] of OBSTACLES) {
      if (x >= minX && x <= maxX && z >= minZ && z <= maxZ) {
        return false;
      }
    }
    return true;
  }

  _getZoneLabel(z) {
    if (z > -1.5) return 'ALLEY ENTRANCE';
    if (z > -8.0) return 'RAMEN SHOP · 麺屋';
    if (z > -15.5) return 'NEON ALLEY · 居酒屋';
    if (z > -21.5) return 'KITCHEN STEAM BAY';
    return 'SHINJUKU INTERSECTION';
  }

  update(dt) {
    const moveForward =
      (this.keys.has('KeyW') || this.keys.has('ArrowUp') ? 1 : 0) -
      (this.keys.has('KeyS') || this.keys.has('ArrowDown') ? 1 : 0);
    const moveRight =
      (this.keys.has('KeyD') || this.keys.has('ArrowRight') ? 1 : 0) -
      (this.keys.has('KeyA') || this.keys.has('ArrowLeft') ? 1 : 0);

    const sprinting = this.keys.has('ShiftLeft') || this.keys.has('ShiftRight');
    const maxSpeed = this.crouching ? 1.55 : sprinting ? 4.8 : 2.85;

    this.camera.getWorldDirection(this._forward);
    this._forward.y = 0;
    if (this._forward.lengthSq() > 0.0001) this._forward.normalize();
    this._right.crossVectors(this._forward, this.camera.up).normalize();

    this._wishDir.set(0, 0, 0);
    this._wishDir.addScaledVector(this._forward, moveForward);
    this._wishDir.addScaledVector(this._right, moveRight);
    const hasInput = this._wishDir.lengthSq() > 0;
    if (hasInput) this._wishDir.normalize();

    // Instant snappy PC FPS acceleration & crisp brake (zero floaty delay!)
    const rate = hasInput ? 38.0 : 48.0;
    const alpha = 1 - Math.exp(-rate * dt);
    this.velocity.x = THREE.MathUtils.lerp(this.velocity.x, this._wishDir.x * maxSpeed, alpha);
    this.velocity.z = THREE.MathUtils.lerp(this.velocity.z, this._wishDir.z * maxSpeed, alpha);
    if (!hasInput && Math.hypot(this.velocity.x, this.velocity.z) < 0.03) {
      this.velocity.x = 0;
      this.velocity.z = 0;
    }

    const curX = this.camera.position.x;
    const curZ = this.camera.position.z;
    const nextX = curX + this.velocity.x * dt;
    const nextZ = curZ + this.velocity.z * dt;

    if (this._isWalkable(nextX, curZ)) {
      this.camera.position.x = nextX;
    } else {
      this.velocity.x = 0;
    }
    if (this._isWalkable(this.camera.position.x, nextZ)) {
      this.camera.position.z = nextZ;
    } else {
      this.velocity.z = 0;
    }

    const targetEye = this.crouching ? 0.96 : 1.56;
    this.eyeHeight = THREE.MathUtils.lerp(this.eyeHeight, targetEye, 1 - Math.exp(-18.0 * dt));

    const speed = Math.hypot(this.velocity.x, this.velocity.z);
    const walkWeight = THREE.MathUtils.clamp(speed / 2.2, 0, 1);

    let steppedThisFrame = false;
    if (walkWeight > 0.15) {
      const freq = sprinting ? 2.8 : 2.0;
      this.bobTime += dt * freq;
      const cycle = Math.floor(this.bobTime);
      if (cycle !== this.lastStepCycle) {
        this.lastStepCycle = cycle;
        steppedThisFrame = true;
      }
    }

    const bobY = Math.sin(this.bobTime * Math.PI * 2) * 0.016 * walkWeight;
    this.camera.position.y = this.eyeHeight + bobY;

    if (this.flashlightOn) {
      this.camera.getWorldDirection(this._camDir);
      this._camRight.crossVectors(this._camDir, this.camera.up).normalize();
      this.flashlight.position
        .copy(this.camera.position)
        .addScaledVector(this._camRight, 0.12)
        .add(this._flashOffset);
      this.flashlightTarget.position.copy(this.camera.position).addScaledVector(this._camDir, 4.5);
    }

    // Throttled interaction raycast (~12.5 Hz) to avoid per-frame CPU spikes
    this._rayTimer += dt;
    if (this._rayTimer >= 0.08) {
      this._rayTimer = 0;
      this._raycaster.setFromCamera(this._centerNdc, this.camera);
      const hits = this._raycaster.intersectObjects(this._hitMeshes, false);
      if (hits.length > 0) {
        const hitMesh = hits[0].object;
        this.currentTarget = this.interactables.find((item) => item.mesh === hitMesh) || null;
      } else {
        this.currentTarget = null;
      }
    }

    return {
      walkWeight,
      steppedThisFrame,
      label: this._getZoneLabel(this.camera.position.z),
      targetPrompt: this.currentTarget ? this.currentTarget.prompt : '',
      flashlightOn: this.flashlightOn,
    };
  }
}
