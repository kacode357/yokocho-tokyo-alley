import * as THREE from 'three';

/**
 * Grounds any Object3D cleanly onto floorY using its true world bounding box.
 */
export function snapToFloor(object, x, z, floorY = 0) {
  object.position.set(x, 0, z);
  object.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(object);
  if (Number.isFinite(box.min.y)) {
    object.position.y += floorY - box.min.y;
    object.updateMatrixWorld(true);
  }
  return object;
}

/**
 * Scales BoxGeometry UVs proportionally to real-world meters.
 */
export function scaleBoxUVs(geometry, width, height, depth, tileMeters = 2.0) {
  const uv = geometry.attributes.uv;
  const norm = geometry.attributes.normal;

  for (let i = 0; i < uv.count; i++) {
    const nx = Math.abs(norm.getX(i));
    const ny = Math.abs(norm.getY(i));
    const nz = Math.abs(norm.getZ(i));
    let u = uv.getX(i);
    let v = uv.getY(i);

    if (nx > 0.5) {
      u *= depth / tileMeters;
      v *= height / tileMeters;
    } else if (ny > 0.5) {
      u *= width / tileMeters;
      v *= depth / tileMeters;
    } else if (nz > 0.5) {
      u *= width / tileMeters;
      v *= height / tileMeters;
    }
    uv.setXY(i, u, v);
  }

  uv.needsUpdate = true;
  return geometry;
}

/**
 * Ultra-fast WebGL2 world-space micro-grain, wet splash darkening near street/curb base,
 * and specular roughness breakup (uses lightweight 2D noise for ~4x lower fragment ALU cost).
 */
export function applyAlleyWeathering(
  material,
  {
    gritStrength = 0.11,
    grimeBottom = 0.45,
    grimeHeight = 0.48,
    roughJitter = 0.14,
    minRoughness = 0.24,
  } = {}
) {
  const cacheKey = `alley2_${gritStrength}_${grimeBottom}_${grimeHeight}_${roughJitter}_${minRoughness}`;
  material.customProgramCacheKey = () => cacheKey;

  material.onBeforeCompile = (shader) => {
    shader.uniforms.uGritStrength = { value: gritStrength };
    shader.uniforms.uGrimeBottom = { value: grimeBottom };
    shader.uniforms.uGrimeHeight = { value: grimeHeight };
    shader.uniforms.uRoughJitter = { value: roughJitter };
    shader.uniforms.uMinRoughness = { value: minRoughness };

    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        `#include <common>
varying vec3 vAlleyPos;`
      )
      .replace(
        '#include <project_vertex>',
        `#include <project_vertex>
vAlleyPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`
      );

    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
varying vec3 vAlleyPos;
uniform float uGritStrength;
uniform float uGrimeBottom;
uniform float uGrimeHeight;
uniform float uRoughJitter;
uniform float uMinRoughness;

float alleyHash2(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float alleyNoise2(vec2 x) {
  vec2 i = floor(x);
  vec2 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(alleyHash2(i), alleyHash2(i + vec2(1.0, 0.0)), f.x),
    mix(alleyHash2(i + vec2(0.0, 1.0)), alleyHash2(i + vec2(1.0, 1.0)), f.x),
    f.y
  );
}`
      )
      .replace(
        '#include <map_fragment>',
        `#include <map_fragment>
vec2 aUv = vec2(vAlleyPos.x + vAlleyPos.z, vAlleyPos.y);
float wMed = alleyNoise2(aUv * 8.0);
diffuseColor.rgb *= (1.0 + (wMed - 0.5) * 2.0 * uGritStrength);

if (uGrimeBottom > 0.01) {
  float splashMask = smoothstep(0.0, uGrimeHeight, vAlleyPos.y + (wMed - 0.5) * 0.12);
  diffuseColor.rgb *= mix(1.0 - uGrimeBottom, 1.0, splashMask);
}`
      )
      .replace(
        '#include <roughnessmap_fragment>',
        `#include <roughnessmap_fragment>
float rNoise = alleyNoise2(vec2(vAlleyPos.x + vAlleyPos.z, vAlleyPos.y) * 14.0 + vec2(3.1, 7.2)) - 0.5;
roughnessFactor = clamp(roughnessFactor + rNoise * uRoughJitter, uMinRoughness, 0.99);`
      );
  };

  material.needsUpdate = true;
  return material;
}
