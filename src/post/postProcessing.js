import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { SMAAPass } from 'three/addons/postprocessing/SMAAPass.js';

/**
 * Merged Cinema Grading + ACESFilmic Tone Mapping + Linear-to-sRGB Output Shader.
 * Saves an entire full-screen RenderTarget pass compared to separate CinemaLens + OutputPass,
 * while handing tone-mapped sRGB pixels directly into SMAAPass for crisp anti-aliasing!
 */
const CinemaOutputShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uExposure: { value: 1.08 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uExposure;
    varying vec2 vUv;

    float hash12(vec2 p) {
      vec3 p3 = fract(vec3(p.xyx) * 0.1031);
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.x + p3.y) * p3.z);
    }

    vec3 acesToneMapping(vec3 x) {
      const float a = 2.51;
      const float b = 0.03;
      const float c = 2.43;
      const float d = 0.59;
      const float e = 0.14;
      return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
    }

    vec3 linearToSRGB(vec3 c) {
      vec3 higher = 1.055 * pow(max(c, 0.0), vec3(1.0 / 2.4)) - 0.055;
      vec3 lower = c * 12.92;
      return mix(lower, higher, step(vec3(0.0031308), c));
    }

    void main() {
      // Subtle edge optical chromatic aberration
      vec2 fromCenter = vUv - 0.5;
      float ca = length(fromCenter) * 0.0010;
      float r = texture2D(tDiffuse, clamp(vUv + vec2(ca, 0.0), 0.0, 1.0)).r;
      float g = texture2D(tDiffuse, vUv).g;
      float b = texture2D(tDiffuse, clamp(vUv - vec2(ca, 0.0), 0.0, 1.0)).b;
      vec3 col = vec3(r, g, b);

      // Subtle rainy cinema color grading in linear HDR
      float luma = dot(col, vec3(0.299, 0.587, 0.114));
      vec3 shadowTint = vec3(0.90, 0.96, 1.08);
      vec3 hiTint = vec3(1.03, 1.0, 0.96);
      col *= mix(shadowTint, hiTint, smoothstep(0.08, 0.65, luma));

      // ACES Filmic tone mapping + sRGB encoding
      col = acesToneMapping(col * uExposure);
      col = linearToSRGB(col);

      // Subtle clean ISO film grain (tuned for sRGB) + soft peripheral vignette
      float grain = (hash12(vUv * vec2(1280.0, 720.0) + fract(uTime * 19.3) * 100.0) - 0.5) * 0.0075;
      col += grain;

      float dist = length(fromCenter * vec2(1.12, 1.0));
      float vignette = smoothstep(0.98, 0.34, dist);
      col *= mix(0.58, 1.0, vignette);

      gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
    }
  `,
};

/**
 * High-FPS, crisp anti-aliased post-processing pipeline:
 * 2x MSAA HalfFloat RT -> RenderPass -> Quarter-Res Bloom -> Merged CinemaOutput -> Post-Tonemap SMAAPass
 */
export function createPostProcessing(renderer, scene, camera) {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const pr = renderer.getPixelRatio();

  const msaaTarget = new THREE.WebGLRenderTarget(
    Math.max(1, Math.floor(width * pr)),
    Math.max(1, Math.floor(height * pr)),
    {
      type: THREE.HalfFloatType,
      samples: 2,
    }
  );
  msaaTarget.texture.name = 'EffectComposer.MSAA2x';

  const composer = new EffectComposer(renderer, msaaTarget);
  composer.setPixelRatio(pr);
  composer.setSize(width, height);

  composer.addPass(new RenderPass(scene, camera));

  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(Math.max(1, Math.floor(width * 0.25)), Math.max(1, Math.floor(height * 0.25))),
    0.18,
    0.42,
    0.95
  );
  composer.addPass(bloomPass);

  const cinemaOutPass = new ShaderPass(CinemaOutputShader);
  composer.addPass(cinemaOutPass);

  const smaaPass = new SMAAPass();
  smaaPass.setSize(Math.max(1, Math.floor(width * pr)), Math.max(1, Math.floor(height * pr)));
  composer.addPass(smaaPass);

  return {
    composer,
    resize(w, h, newPr = renderer.getPixelRatio()) {
      composer.setPixelRatio(newPr);
      composer.setSize(w, h);
    },
    update(elapsed) {
      cinemaOutPass.uniforms.uTime.value = elapsed;
    },
  };
}
