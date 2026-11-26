import * as THREE from 'three';
import {
  createSteamSpriteTexture,
  createLampGlareTexture,
  createDownwardLightBeamTexture,
} from '../textures/alleyTextures.js';

/**
 * Rainy Tokyo night atmosphere & weather:
 * - GPU Instanced soft motion-blurred rain streaks (1,400) + soft wet pavement splashes (160)
 * - Volumetric Fresnel-faded streetlamp light cones + lantern mist halos
 * - Drifting low-lying humid alley mist wisps + manhole sewer vapor + R3 kitchen steam
 */
export function buildWeather(scene) {
  // 1. GPU Instanced Velocity-Aligned Soft Rain Streaks (1,400 droplets)
  const rainCount = 1400;
  const basePlane = new THREE.PlaneGeometry(1, 1);
  const rainGeo = new THREE.InstancedBufferGeometry();
  rainGeo.index = basePlane.index;
  rainGeo.attributes.position = basePlane.attributes.position;
  rainGeo.attributes.uv = basePlane.attributes.uv;
  rainGeo.instanceCount = rainCount;

  const seeds = new Float32Array(rainCount * 4);
  const sizes = new Float32Array(rainCount * 2);
  for (let i = 0; i < rainCount; i++) {
    seeds[i * 4] = (Math.random() - 0.5) * 18.0;
    seeds[i * 4 + 1] = Math.random() * 11.0;
    seeds[i * 4 + 2] = (Math.random() - 0.5) * 22.0;
    seeds[i * 4 + 3] = 9.5 + Math.random() * 6.5;

    sizes[i * 2] = 0.0032 + Math.random() * 0.0035;
    sizes[i * 2 + 1] = 0.24 + Math.random() * 0.30;
  }
  rainGeo.setAttribute('aSeed', new THREE.InstancedBufferAttribute(seeds, 4));
  rainGeo.setAttribute('aSize', new THREE.InstancedBufferAttribute(sizes, 2));

  const rainMat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uCameraPos: { value: new THREE.Vector3() },
    },
    vertexShader: /* glsl */ `
      attribute vec4 aSeed;
      attribute vec2 aSize;

      uniform float uTime;
      uniform vec3 uCameraPos;

      varying vec2 vUv;
      varying float vDist;
      varying vec3 vWorldPos;

      void main() {
        vUv = uv;
        vec3 boxSize = vec3(18.0, 11.0, 22.0);
        vec3 halfBox = boxSize * 0.5;
        vec3 windDir = normalize(vec3(0.075, -1.0, 0.025));

        vec3 drift = aSeed.xyz + windDir * (uTime * aSeed.w);
        vec3 rel = mod(drift - uCameraPos + halfBox, boxSize) - halfBox;
        vec3 worldCenter = uCameraPos + rel;

        vec3 toCam = normalize(cameraPosition - worldCenter);
        vec3 sideDir = normalize(cross(windDir, toCam));
        vec3 worldPos = worldCenter + sideDir * (position.x * aSize.x) - windDir * (position.y * aSize.y);

        vWorldPos = worldPos;
        vDist = length(cameraPosition - worldCenter);
        gl_Position = projectionMatrix * viewMatrix * vec4(worldPos, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      varying vec2 vUv;
      varying float vDist;
      varying vec3 vWorldPos;

      float lightHalo(vec3 p, vec3 lightPos, float radius) {
        vec3 d = p - lightPos;
        return exp(-dot(d, d) / (radius * radius));
      }

      void main() {
        float xMask = exp(-pow((vUv.x - 0.5) * 3.8, 2.0));
        float yMask = smoothstep(0.0, 0.16, vUv.y) * smoothstep(1.0, 0.15, vUv.y);
        float groundFade = smoothstep(0.0, 0.22, vWorldPos.y);
        float distFade = smoothstep(0.85, 2.2, vDist) * (1.0 - smoothstep(10.0, 17.5, vDist));

        float shape = xMask * yMask * groundFade * distFade;
        if (shape < 0.004) discard;

        vec3 col = vec3(0.32, 0.38, 0.48) * 0.15;

        float warmPool =
          lightHalo(vWorldPos, vec3(-2.2, 1.8, -4.2), 3.6) * 0.85 +
          lightHalo(vWorldPos, vec3(2.2, 1.8, -19.2), 3.6) * 0.75 +
          lightHalo(vWorldPos, vec3(-1.0, 4.8, -8.65), 4.4) * 0.8 +
          lightHalo(vWorldPos, vec3(1.0, 4.8, -15.65), 4.4) * 0.8;

        float coolPool =
          lightHalo(vWorldPos, vec3(-2.0, 3.9, -12.2), 3.8) * 0.9 +
          lightHalo(vWorldPos, vec3(2.2, 1.5, -11.5), 3.0) * 0.55;

        col += vec3(1.0, 0.68, 0.36) * warmPool * 0.32;
        col += vec3(0.42, 0.86, 1.0) * coolPool * 0.28;

        float alpha = clamp(shape * (0.34 + (warmPool + coolPool) * 0.30), 0.0, 0.52);
        gl_FragColor = vec4(col * alpha, alpha);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
  });

  const rainMesh = new THREE.Mesh(rainGeo, rainMat);
  rainMesh.frustumCulled = false;
  rainMesh.userData.skipGtao = true;
  rainMesh.userData.skipReflector = true;
  rainMesh.renderOrder = 4;
  scene.add(rainMesh);

  // 2. Soft Wet Pavement Micro-Splashes (160)
  const splashCount = 160;
  const splashBase = new THREE.PlaneGeometry(0.055, 0.055);
  splashBase.rotateX(-Math.PI / 2);
  const splashGeo = new THREE.InstancedBufferGeometry();
  splashGeo.index = splashBase.index;
  splashGeo.attributes.position = splashBase.attributes.position;
  splashGeo.attributes.uv = splashBase.attributes.uv;
  splashGeo.instanceCount = splashCount;

  const splashData = new Float32Array(splashCount * 4);
  for (let i = 0; i < splashCount; i++) {
    splashData[i * 4] = (Math.random() - 0.5) * 4.0;
    splashData[i * 4 + 1] = 2.0 - Math.random() * 35.0;
    splashData[i * 4 + 2] = Math.random();
    splashData[i * 4 + 3] = 1.6 + Math.random() * 1.4;
  }
  splashGeo.setAttribute('aSplash', new THREE.InstancedBufferAttribute(splashData, 4));

  const splashMat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    vertexShader: /* glsl */ `
      attribute vec4 aSplash;
      uniform float uTime;
      varying vec2 vUv;
      varying float vCycle;
      varying float vDist;
      void main() {
        vUv = uv;
        vCycle = fract(uTime * aSplash.w + aSplash.z);
        float scale = mix(0.2, 1.05, vCycle);
        vec3 worldPos = vec3(aSplash.x + position.x * scale, 0.014, aSplash.y + position.z * scale);
        vDist = length(cameraPosition - worldPos);
        gl_Position = projectionMatrix * viewMatrix * vec4(worldPos, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      varying vec2 vUv;
      varying float vCycle;
      varying float vDist;
      void main() {
        float r = length(vUv - 0.5) * 2.0;
        float ring = exp(-pow((r - 0.65) * 4.5, 2.0));
        float life = sin(vCycle * 3.14159265) * (1.0 - vCycle * 0.5);
        float distFade = 1.0 - smoothstep(6.0, 18.0, vDist);
        float alpha = ring * life * distFade * 0.065;
        if (alpha < 0.003) discard;
        gl_FragColor = vec4(vec3(0.68, 0.78, 0.92), alpha);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
  });

  const splashMesh = new THREE.Mesh(splashGeo, splashMat);
  splashMesh.frustumCulled = false;
  splashMesh.userData.skipGtao = true;
  splashMesh.userData.skipReflector = true;
  splashMesh.renderOrder = 3;
  scene.add(splashMesh);

  const steamTex = createSteamSpriteTexture();
  const glareTex = createLampGlareTexture();
  const downBeamTex = createDownwardLightBeamTexture();

  // 3. Physically Grounded Streetlamp Optics:
  //    - Tiny smooth inverse-square lens glare strictly on underside glass (NEVER glowing above solid metal hood!)
  //    - Subtle downward-only rain-mist scatter underneath the lamp fixture
  const lampGlowSpecs = [
    { x: -1.0, y: 5.45, z: -8.65, col: 0xffc67c, glare: 0.9, beamW: 1.9, beamH: 2.6, op: 0.095 },
    { x: 1.0, y: 5.45, z: -15.65, col: 0xffc67c, glare: 0.9, beamW: 1.9, beamH: 2.6, op: 0.095 },
    { x: -4.65, y: 6.29, z: -38.6, col: 0x9cd2ff, glare: 1.15, beamW: 2.4, beamH: 3.1, op: 0.11 },
    { x: 4.85, y: 6.29, z: -38.6, col: 0xffb36c, glare: 1.15, beamW: 2.4, beamH: 3.1, op: 0.11 },
  ];
  for (const lg of lampGlowSpecs) {
    // Tight optical glare centered right on the underside glass diffuser
    const lensGlare = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glareTex,
        color: lg.col,
        transparent: true,
        opacity: 0.56,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    lensGlare.position.set(lg.x, lg.y - 0.03, lg.z);
    lensGlare.scale.set(lg.glare, lg.glare * 0.62, 1);
    lensGlare.userData.skipReflector = true;

    // Strictly downward-biased humid rain mist scatter below the hood
    const downScatter = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: downBeamTex,
        color: lg.col,
        transparent: true,
        opacity: lg.op,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    downScatter.position.set(lg.x, lg.y - lg.beamH * 0.48, lg.z);
    downScatter.scale.set(lg.beamW, lg.beamH, 1);
    downScatter.userData.skipReflector = true;
    scene.add(lensGlare, downScatter);
  }

  // 3b. Gentle Live Steam rising inside Ramen Shop from simmering broth stockpot & hot bowls!
  const ramenSteamPuffs = [];
  const ramenSteamOrigins = [
    { x: -4.82, y: 1.34, z: -5.42, s: 0.28, op: 0.09 }, // Big simmering stockpot under corner hood
    { x: -3.94, y: 1.12, z: -3.82, s: 0.14, op: 0.07 }, // Ramen bowl 1
    { x: -3.94, y: 1.12, z: -4.42, s: 0.14, op: 0.07 }, // Ramen bowl 2
  ];
  for (const orig of ramenSteamOrigins) {
    for (let i = 0; i < 4; i++) {
      const sp = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: steamTex,
          color: 0xf4e4ce,
          transparent: true,
          opacity: 0,
          blending: THREE.NormalBlending,
          depthWrite: false,
        })
      );
      sp.material.rotation = Math.random() * Math.PI * 2;
      sp.userData = {
        skipReflector: true,
        orig,
        age: i / 4,
        driftZ: (Math.random() - 0.5) * 0.12,
      };
      scene.add(sp);
      ramenSteamPuffs.push(sp);
    }
  }

  // 4. Subtle Atmospheric Mist Halos around Paper Lanterns (gentle, never washing out neon text!)
  const haloSpecs = [
    { pos: [-2.02, 2.06, -1.95], col: 0xff8c3a, s: 1.05, op: 0.045 },
    { pos: [-2.02, 2.06, -2.98], col: 0xff9444, s: 1.05, op: 0.045 },
    { pos: [-2.02, 2.06, -6.25], col: 0xff8232, s: 1.05, op: 0.045 },
    { pos: [-1.82, 3.95, -12.2], col: 0x38d8ee, s: 1.85, op: 0.04 },
    { pos: [1.82, 4.05, -10.2], col: 0xff7c3c, s: 1.75, op: 0.04 },
    { pos: [2.02, 2.02, -17.6], col: 0xff9244, s: 1.05, op: 0.045 },
    { pos: [2.02, 2.02, -20.8], col: 0xff9a4c, s: 1.05, op: 0.045 },
  ];
  for (const h of haloSpecs) {
    const sp = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: steamTex,
        color: h.col,
        transparent: true,
        opacity: h.op,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    sp.position.set(...h.pos);
    sp.scale.set(h.s, h.s, 1);
    sp.userData.skipReflector = true;
    scene.add(sp);
  }

  // 5. Slow-Drifting Low-Lying Humid Alley Mist Wisps (10)
  const mistWisps = [];
  for (let i = 0; i < 10; i++) {
    const zBase = -2.0 - i * 3.1;
    const isWarmZone = zBase > -8.0 || (zBase < -16.0 && zBase > -23.0);
    const sp = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: steamTex,
        color: isWarmZone ? 0xd9a87c : 0x7b9cc4,
        transparent: true,
        opacity: 0.042,
        blending: THREE.NormalBlending,
        depthWrite: false,
      })
    );
    sp.position.set((Math.random() - 0.5) * 2.2, 0.85 + Math.random() * 1.15, zBase);
    sp.scale.set(3.4 + Math.random() * 1.8, 1.9 + Math.random() * 0.9, 1);
    sp.userData = {
      skipReflector: true,
      baseX: sp.position.x,
      phase: Math.random() * Math.PI * 2,
      speed: 0.22 + Math.random() * 0.18,
    };
    scene.add(sp);
    mistWisps.push(sp);
  }

  // 6. Faint Rising Sewer Vapor from Street Manhole (X=0.24, Z=-9.4)
  const manholePuffs = [];
  for (let i = 0; i < 7; i++) {
    const sp = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: steamTex,
        color: 0xbcd0e6,
        transparent: true,
        opacity: 0.0,
        blending: THREE.NormalBlending,
        depthWrite: false,
      })
    );
    sp.material.rotation = Math.random() * Math.PI * 2;
    sp.userData = {
      skipReflector: true,
      age: i / 7,
      driftX: (Math.random() - 0.5) * 0.35,
      driftZ: (Math.random() - 0.5) * 0.35,
    };
    scene.add(sp);
    manholePuffs.push(sp);
  }

  // 7. Rising Kitchen Exhaust Steam at R3 Hood (X=2.24, Y=2.05, Z=-22.7)
  const steamPuffs = [];
  for (let i = 0; i < 20; i++) {
    const sprite = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: steamTex,
        color: i % 2 === 0 ? 0xdbe5ef : 0xf0dcc8,
        transparent: true,
        opacity: 0.0,
        blending: THREE.NormalBlending,
        depthWrite: false,
      })
    );
    sprite.material.rotation = Math.random() * Math.PI * 2;
    sprite.userData = {
      skipReflector: true,
      age: i / 20,
      driftX: -0.22 - Math.random() * 0.25,
      driftZ: (Math.random() - 0.5) * 0.34,
      rotSpeed: (Math.random() - 0.5) * 0.45,
    };
    scene.add(sprite);
    steamPuffs.push(sprite);
  }

  let burstTimer = 0;
  let elapsedTime = 0;

  return {
    triggerSteamBurst() {
      burstTimer = 3.0;
    },
    update(dt, cameraPos) {
      elapsedTime += dt;
      if (burstTimer > 0) burstTimer = Math.max(0, burstTimer - dt);
      const burstBoost = burstTimer > 0 ? 1.85 : 1.0;

      rainMat.uniforms.uTime.value = elapsedTime;
      rainMat.uniforms.uCameraPos.value.copy(cameraPos);
      splashMat.uniforms.uTime.value = elapsedTime;

      // Gentle sideways humidity mist drift
      for (const m of mistWisps) {
        const d = m.userData;
        m.position.x = d.baseX + Math.sin(elapsedTime * d.speed + d.phase) * 0.55;
      }

      // Faint manhole vapor rising off warm sewer grate
      for (const mp of manholePuffs) {
        const d = mp.userData;
        d.age = (d.age + dt * 0.28) % 1.0;
        const t = d.age;
        mp.position.set(0.24 + d.driftX * t, 0.08 + t * 1.15, -9.4 + d.driftZ * t);
        const s = 0.28 + t * 0.85;
        mp.scale.set(s, s, 1);
        mp.material.opacity = Math.sin(t * Math.PI) * 0.055;
      }

      // Cozy rising steam from Ramen shop broth stockpot & hot bowls
      for (const rp of ramenSteamPuffs) {
        const d = rp.userData;
        d.age = (d.age + dt * 0.42) % 1.0;
        const t = d.age;
        rp.position.set(
          d.orig.x + Math.sin(elapsedTime * 1.8 + d.age * 6.0) * 0.03 * t,
          d.orig.y + t * 0.46,
          d.orig.z + d.driftZ * t
        );
        const s = d.orig.s * (0.7 + t * 1.45);
        rp.scale.set(s, s * 1.15, 1);
        rp.material.opacity = Math.sin(t * Math.PI) * d.orig.op;
      }

      // Physically realistic exhaust steam: vents OUTWARD from open lower louver grille (X=2.04, Y=2.02)
      // clear of the steel canopy overhang BEFORE curling upward into the night air!
      for (const puff of steamPuffs) {
        const d = puff.userData;
        d.age = (d.age + dt * 0.36 * burstBoost) % 1.0;
        const t = d.age;
        puff.material.rotation += d.rotSpeed * dt;
        const pushOut = -0.32 - Math.pow(t, 0.72) * (0.95 + Math.abs(d.driftX) * 1.4);
        const riseUp = Math.pow(t, 1.45) * 2.15;
        puff.position.set(
          2.08 + pushOut * 0.55 + Math.sin(elapsedTime * 1.3 + d.age * 7.0) * 0.1 * t,
          2.02 + riseUp,
          -22.7 + d.driftZ * t * 1.6
        );
        const s = (0.34 + t * 1.65) * (burstBoost > 1 ? 1.25 : 1.0);
        puff.scale.set(s, s * 1.05, s);
        const fade = Math.sin(t * Math.PI) * (1.0 - t * 0.4);
        puff.material.opacity = fade * (burstBoost > 1 ? 0.13 : 0.055);
      }
    },
  };
}
