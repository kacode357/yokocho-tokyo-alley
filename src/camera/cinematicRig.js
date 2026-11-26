import * as THREE from 'three';

export const CLIP_DURATION = 28.0;

const WAYPOINTS = [
  { t: 0.0, pos: [0.0, 1.56, 2.2], look: [0.0, 1.48, -14.0], label: 'ALLEY ENTRANCE' },
  { t: 3.5, pos: [0.35, 1.56, -1.6], look: [-1.4, 1.6, -5.0], label: 'RAMEN SHOP · 麺屋' },
  { t: 6.2, pos: [0.55, 1.54, -4.0], look: [-2.4, 1.45, -4.5], label: 'RAMEN SHOP · 麺屋' },
  { t: 9.5, pos: [-0.25, 1.56, -7.8], look: [0.2, 2.3, -13.5], label: 'NEON ALLEY · 居酒屋' },
  { t: 12.5, pos: [-0.45, 1.56, -10.5], look: [-1.2, 3.2, -12.5], label: 'NEON ALLEY · 居酒屋' },
  { t: 15.2, pos: [-0.35, 1.48, -10.8], look: [2.45, 1.15, -10.8], label: 'VENDING & CRATES' },
  { t: 19.0, pos: [-0.35, 1.54, -18.5], look: [2.3, 1.65, -20.8], label: 'KITCHEN STEAM BAY' },
  { t: 23.0, pos: [0.0, 1.56, -21.8], look: [0.0, 1.7, -38.0], label: 'SHINJUKU INTERSECTION' },
  { t: 28.0, pos: [0.0, 1.56, -24.5], look: [0.0, 1.85, -42.0], label: 'SHINJUKU INTERSECTION' },
];

function smoothstep01(t) {
  const c = Math.max(0, Math.min(1, t));
  return c * c * (3 - 2 * c);
}

/**
 * Smooth 28-second handheld cinematic walk down the rainy Tokyo alley.
 */
export class CinematicRig {
  constructor(camera) {
    this.camera = camera;
    this._pos = new THREE.Vector3();
    this._nextPos = new THREE.Vector3();
    this._look = new THREE.Vector3();
    this._lastStepPhase = 0;
    this._posPoints = WAYPOINTS.map((w) => new THREE.Vector3(...w.pos));
    this._lookPoints = WAYPOINTS.map((w) => new THREE.Vector3(...w.look));
  }

  sampleWaypointParam(timeSec) {
    const t = ((timeSec % CLIP_DURATION) + CLIP_DURATION) % CLIP_DURATION;
    let idx = 0;
    for (let i = 0; i < WAYPOINTS.length - 1; i++) {
      if (t >= WAYPOINTS[i].t && t <= WAYPOINTS[i + 1].t) {
        idx = i;
        break;
      }
    }
    const a = WAYPOINTS[idx];
    const b = WAYPOINTS[Math.min(idx + 1, WAYPOINTS.length - 1)];
    const segLen = Math.max(0.0001, b.t - a.t);
    return {
      idx,
      localU: smoothstep01((t - a.t) / segLen),
      t,
      label: a.label,
    };
  }

  _evalCatmull(points, idx, localU, out) {
    const maxIdx = points.length - 1;
    const p0 = points[Math.max(0, idx - 1)];
    const p1 = points[idx];
    const p2 = points[Math.min(maxIdx, idx + 1)];
    const p3 = points[Math.min(maxIdx, idx + 2)];

    const u = localU;
    const u2 = u * u;
    const u3 = u2 * u;

    out.set(
      0.5 *
        (2 * p1.x +
          (-p0.x + p2.x) * u +
          (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * u2 +
          (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * u3),
      0.5 *
        (2 * p1.y +
          (-p0.y + p2.y) * u +
          (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * u2 +
          (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * u3),
      0.5 *
        (2 * p1.z +
          (-p0.z + p2.z) * u +
          (2 * p0.z - 5 * p1.z + 4 * p2.z - p3.z) * u2 +
          (-p0.z + 3 * p1.z - 3 * p2.z + p3.z) * u3)
    );
    return out;
  }

  update(timeSec, realElapsed) {
    const sample = this.sampleWaypointParam(timeSec);
    this._evalCatmull(this._posPoints, sample.idx, sample.localU, this._pos);
    this._evalCatmull(this._lookPoints, sample.idx, sample.localU, this._look);

    const dtLookahead = 0.08;
    const nextSample = this.sampleWaypointParam(Math.min(CLIP_DURATION - 0.001, sample.t + dtLookahead));
    this._evalCatmull(this._posPoints, nextSample.idx, nextSample.localU, this._nextPos);
    const speed = this._nextPos.distanceTo(this._pos) / dtLookahead;
    const walkWeight = THREE.MathUtils.clamp(speed / 1.4, 0, 1);

    const stepFreq = 1.75;
    const stepPhase = sample.t * stepFreq * Math.PI * 2;
    const stepCycle = Math.floor(sample.t * stepFreq);
    const steppedThisFrame = stepCycle !== this._lastStepPhase && walkWeight > 0.25;
    this._lastStepPhase = stepCycle;

    const bobY = Math.sin(stepPhase) * 0.018 * walkWeight + Math.sin(realElapsed * 1.3) * 0.004;
    const swayX = Math.cos(stepPhase * 0.5) * 0.012 * walkWeight;
    const roll = Math.cos(stepPhase * 0.5) * 0.008 * walkWeight;

    this.camera.position.set(this._pos.x + swayX, this._pos.y + bobY, this._pos.z);
    this.camera.lookAt(this._look);
    this.camera.rotateZ(roll);

    return {
      label: sample.label,
      walkWeight,
      steppedThisFrame,
    };
  }
}
