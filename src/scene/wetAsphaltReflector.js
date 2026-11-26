import * as THREE from 'three';
import { Reflector } from 'three/addons/objects/Reflector.js';

function createBakedPuddleMaskTexture() {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(size, size);

  const hash = (ix, iy, seed) => {
    let n = Math.imul(ix, 374761393) + Math.imul(iy, 668265263) + Math.imul(seed, 1442695041);
    n = (n ^ (n >>> 13)) | 0;
    n = Math.imul(n, 1274126177);
    return ((n ^ (n >>> 16)) >>> 0) / 4294967295;
  };
  const noise2 = (x, y, period, seed) => {
    const ix = Math.floor(x);
    const iy = Math.floor(y);
    let fx = x - ix;
    let fy = y - iy;
    fx = fx * fx * (3 - 2 * fx);
    fy = fy * fy * (3 - 2 * fy);
    const w = (n) => ((n % period) + period) % period;
    const a = hash(w(ix), w(iy), seed);
    const b = hash(w(ix + 1), w(iy), seed);
    const c = hash(w(ix), w(iy + 1), seed);
    const d = hash(w(ix + 1), w(iy + 1), seed);
    return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
  };
  const fbm = (u, v, seed) =>
    noise2(u * 4, v * 4, 4, seed) * 0.55 +
    noise2(u * 8, v * 8, 8, seed + 17) * 0.3 +
    noise2(u * 16, v * 16, 16, seed + 41) * 0.15;

  for (let y = 0; y < size; y++) {
    const v = y / size;
    for (let x = 0; x < size; x++) {
      const u = x / size;
      const wx = fbm(u, v, 11) * 0.16;
      const wy = fbm(u, v, 29) * 0.16;
      const macro = fbm((u + wx) % 1, (v + wy) % 1, 53);
      const detail = noise2(u * 24, v * 24, 24, 97);
      const p = (y * size + x) * 4;
      img.data[p] = Math.round(macro * 255);
      img.data[p + 1] = Math.round(detail * 255);
      img.data[p + 2] = 0;
      img.data[p + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = true;
  tex.needsUpdate = true;
  return tex;
}

/**
 * High-FPS Real-time planar Reflector over the wet Tokyo alley & cross-street asphalt:
 * - Pre-baked tileable organic puddle mask texture (1 texture fetch replaces 36 GLSL hashes/px!)
 * - Disables shadows & skips micro-details/weather during reflection render (~80% faster!)
 * - Animated concentric raindrop ripples + organic curb gutter pooling + zero straight borders
 */
export function createWetAsphaltReflector() {
  const puddleMap = createBakedPuddleMaskTexture();

  const WetAsphaltShader = {
    name: 'WetAsphaltReflectorShader',
    uniforms: {
      color: { value: new THREE.Color(0xc2d0e0) },
      tDiffuse: { value: null },
      uPuddleMap: { value: puddleMap },
      textureMatrix: { value: new THREE.Matrix4() },
      uTime: { value: 0 },
    },
    vertexShader: /* glsl */ `
      uniform mat4 textureMatrix;
      varying vec4 vProjUv;
      varying vec3 vWorldPos;

      void main() {
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPos = worldPos.xyz;
        vProjUv = textureMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 color;
      uniform sampler2D tDiffuse;
      uniform sampler2D uPuddleMap;
      uniform float uTime;

      varying vec4 vProjUv;
      varying vec3 vWorldPos;

      vec2 hash22(vec2 p) {
        vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
        p3 += dot(p3, p3.yzx + 33.33);
        return fract((p3.xx + p3.yz) * p3.zy);
      }

      vec2 rainRippleLayer(vec2 wp, float scale, float speed) {
        vec2 uv = wp * scale;
        vec2 cell = floor(uv);
        vec2 fracUv = fract(uv);
        vec2 rnd = hash22(cell);
        vec2 center = 0.22 + 0.56 * rnd;
        float phase = fract(uTime * speed + rnd.x * 3.7 + rnd.y * 1.9);
        vec2 diff = fracUv - center;
        float dist = length(diff);
        float radius = phase * 0.46;
        float ring = exp(-pow((dist - radius) * 28.0, 2.0)) * (1.0 - phase);
        float wave = sin((dist - radius) * 58.0) * ring;
        vec2 dir = dist > 0.001 ? diff / dist : vec2(0.0);
        return dir * wave;
      }

      void main() {
        vec2 wp = vWorldPos.xz;

        // Single fast texture lookup for organic domain-warped puddles!
        vec2 pSample = texture2D(uPuddleMap, wp * 0.065).rg;
        float macro = pSample.r;
        float detail = pSample.g;

        // Roadside gutter pooling strictly inside alley (Z > -26.5) + far cross-street curb
        float inAlley = smoothstep(-27.4, -24.6, wp.y);
        float alleyGutter = 0.14 * smoothstep(0.95, 1.95, abs(wp.x)) * inAlley;
        float farCurbGutter = 0.12 * smoothstep(-35.8, -38.4, wp.y);
        float field = macro * 0.74 + detail * 0.26 + alleyGutter + farCurbGutter;

        // Organic noise-modulated fade near outer boundaries so zero straight borders ever show
        float edgeFadeX = 1.0 - smoothstep(11.5, 16.2, abs(wp.x) + (macro - 0.5) * 3.0);
        float edgeFadeZ = smoothstep(-39.6, -37.2, wp.y + (macro - 0.5) * 1.6) * (1.0 - smoothstep(1.2, 3.6, wp.y));
        float edgeFade = edgeFadeX * edgeFadeZ;

        float damp = smoothstep(0.36, 0.52, field);
        if (damp * edgeFade < 0.01) {
          discard;
        }

        float sheen = smoothstep(0.42, 0.58, field);
        float puddle = smoothstep(0.49, 0.64, field);

        vec2 ripple = rainRippleLayer(wp, 1.9, 1.2);
        vec4 uv = vProjUv;
        uv.xy += ripple * (0.005 * puddle) * uv.w;

        // Fast 3-tap soft reflection blur on damp asphalt, crisp inside puddles
        float blur = mix(0.014, 0.002, puddle) * uv.w;
        vec3 refl = texture2DProj(tDiffuse, uv).rgb * 0.5;
        refl += texture2DProj(tDiffuse, uv + vec4(blur, blur * 0.5, 0.0, 0.0)).rgb * 0.25;
        refl += texture2DProj(tDiffuse, uv - vec4(blur, blur * 0.5, 0.0, 0.0)).rgb * 0.25;

        vec3 viewDir = normalize(cameraPosition - vWorldPos);
        float ndv = clamp(viewDir.y, 0.0, 1.0);
        float fresnel = mix(0.14, 0.92, pow(1.0 - ndv, 3.8));

        vec3 darkWetAsphalt = vec3(0.014, 0.017, 0.024);
        vec3 waterTint = vec3(0.86, 0.92, 1.0);
        vec3 reflectedCol = refl * color * waterTint * 1.14;

        float reflWeight = clamp(sheen * (0.34 + fresnel * 0.66), 0.0, 0.96);
        vec3 finalColor = mix(darkWetAsphalt, reflectedCol, reflWeight);
        float alpha = clamp(damp * 0.44 + puddle * (0.4 + fresnel * 0.54), 0.0, 0.94) * edgeFade;

        gl_FragColor = vec4(finalColor, alpha);
      }
    `,
  };

  const geo = new THREE.PlaneGeometry(34.0, 44.0);
  const reflector = new Reflector(geo, {
    clipBias: 0.003,
    textureWidth: 320,
    textureHeight: 320,
    color: 0xc2d0e0,
    multisample: 0,
    shader: WetAsphaltShader,
  });

  reflector.rotation.x = -Math.PI / 2;
  reflector.position.set(0, 0.006, -18.0);
  reflector.material.transparent = true;
  reflector.material.depthWrite = false;
  reflector.renderOrder = 1;
  reflector.userData.skipGtao = true;

  let frameCounter = 0;
  let forceNext = true;

  const baseOnBeforeRender = reflector.onBeforeRender;
  reflector.onBeforeRender = function (renderer, scene, camera, geometry, material, group) {
    if (scene.overrideMaterial !== null) return;
    frameCounter++;
    if (!forceNext && frameCounter % 3 !== 0) return;
    forceNext = false;

    const prevShadow = renderer.shadowMap.enabled;
    renderer.shadowMap.enabled = false;

    const hidden = [];
    for (let i = 0; i < scene.children.length; i++) {
      const child = scene.children[i];
      if (!child.visible) continue;
      if (child.userData?.skipReflector) {
        child.visible = false;
        hidden.push(child);
      } else if (child.children && child.children.length > 0) {
        for (let j = 0; j < child.children.length; j++) {
          const sub = child.children[j];
          if (sub.visible && sub.userData?.skipReflector) {
            sub.visible = false;
            hidden.push(sub);
          }
        }
      }
    }
    baseOnBeforeRender.call(this, renderer, scene, camera, geometry, material, group);
    for (let i = 0; i < hidden.length; i++) {
      hidden[i].visible = true;
    }
    renderer.shadowMap.enabled = prevShadow;
  };

  return {
    mesh: reflector,
    forceRender() {
      forceNext = true;
    },
    update(elapsed) {
      reflector.material.uniforms.uTime.value = elapsed;
    },
  };
}
