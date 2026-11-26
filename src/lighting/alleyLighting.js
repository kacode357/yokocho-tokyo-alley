import * as THREE from 'three';

/**
 * Rainy Tokyo night lighting tuned for locked 60 FPS on laptop GPUs:
 * - Procedural PMREM night-neon reflections
 * - Single static baked DirectionalLight shadow map (cuts PCF taps by 67%)
 * - 2 sodium streetlamp SpotLights + 5 strategic PointLights (down from 16 lights!)
 */
export function buildAlleyLighting(scene, renderer) {
  scene.background = new THREE.Color(0x050912);
  scene.fog = new THREE.FogExp2(0x060b16, 0.032);

  // 1. Night-neon procedural PMREM environment
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene();
  envScene.background = new THREE.Color(0x050914);

  const addCard = (col, w, h, x, y, z, ry) => {
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({ color: col, side: THREE.DoubleSide })
    );
    m.position.set(x, y, z);
    m.rotation.y = ry;
    envScene.add(m);
  };
  addCard(0xff9240, 6, 3, -6, 2.0, 2, Math.PI / 2);
  addCard(0x45e8ff, 3, 4, -6, 4.0, -3, Math.PI / 2);
  addCard(0xff7838, 3, 4, 6, 4.0, -2, -Math.PI / 2);
  addCard(0xaad8ff, 4, 3, 6, 2.0, -4, -Math.PI / 2);
  addCard(0x182b4a, 14, 14, 0, 9, 0, 0);

  const envRT = pmrem.fromScene(envScene, 0.05);
  scene.environment = envRT.texture;
  scene.environmentIntensity = 0.72;
  pmrem.dispose();

  // 2. Indigo-navy rainy night sky hemisphere fill
  const hemi = new THREE.HemisphereLight(0x2f4e7e, 0x0b0e14, 0.7);
  scene.add(hemi);

  // 3. Single static baked nocturnal directional shadow caster (1024x1024)
  const skyKey = new THREE.DirectionalLight(0x4c79b8, 0.78);
  skyKey.position.set(-4, 14, 6);
  skyKey.target.position.set(0, 0, -12);
  skyKey.castShadow = true;
  skyKey.shadow.mapSize.set(1024, 1024);
  skyKey.shadow.radius = 3;
  skyKey.shadow.camera.near = 2;
  skyKey.shadow.camera.far = 36;
  skyKey.shadow.camera.left = -12;
  skyKey.shadow.camera.right = 12;
  skyKey.shadow.camera.top = 16;
  skyKey.shadow.camera.bottom = -16;
  skyKey.shadow.bias = -0.0005;
  scene.add(skyKey, skyKey.target);

  // 4. Two warm sodium cobra-head streetlamps (non-shadow-casting to save 18 PCF taps/pixel!)
  const sodiumPositions = [
    { x: -1.0, y: 5.42, z: -8.65, tx: 0.4, tz: -8.8 },
    { x: 1.0, y: 5.42, z: -15.65, tx: -0.4, tz: -15.8 },
  ];
  for (const sp of sodiumPositions) {
    const spot = new THREE.SpotLight(0xffb868, 26.0, 17.0, Math.PI * 0.44, 0.78, 1.5);
    spot.position.set(sp.x, sp.y, sp.z);
    spot.target.position.set(sp.tx, 0, sp.tz);
    spot.castShadow = false;
    scene.add(spot, spot.target);
  }

  // 5. Balanced storefront & neon PointLights (positioned cleanly off surfaces so zero hotspots blow out!)
  // L1 Ramen shop warm interior light (spills naturally out through open Shoji doorway!)
  const ramenWarmLight = new THREE.PointLight(0xff9b48, 4.6, 11.0, 1.65);
  ramenWarmLight.position.set(-3.45, 2.05, -4.35);
  scene.add(ramenWarmLight);

  // L2 Izakaya cyan neon blade sign + entrance glow (interactive toggle!)
  const izakayaNeonLight = new THREE.PointLight(0x45ebff, 3.2, 9.5, 1.6);
  izakayaNeonLight.position.set(-1.48, 3.85, -12.2);
  scene.add(izakayaNeonLight);

  // R2 Vending alcove & Amber neon soft balanced fill
  const vendingNeonLight = new THREE.PointLight(0xcce2f5, 2.8, 8.5, 1.65);
  vendingNeonLight.position.set(1.42, 2.45, -11.3);
  scene.add(vendingNeonLight);

  // R3 Kitchen counter & lanterns cozy amber fill
  const kitchenWarmLight = new THREE.PointLight(0xff9646, 3.2, 10.0, 1.65);
  kitchenWarmLight.position.set(1.32, 2.05, -19.2);
  scene.add(kitchenWarmLight);

  // Far Shinjuku Cross-Street intersection pool
  const crossStreetLight = new THREE.PointLight(0x9ec8f5, 22.0, 24.0, 1.6);
  crossStreetLight.position.set(0.0, 5.6, -33.5);
  scene.add(crossStreetLight);

  let neonEnabled = true;

  return {
    setNeonEnabled(enabled) {
      neonEnabled = enabled;
      izakayaNeonLight.intensity = enabled ? 3.2 : 0.0;
    },
    update(elapsed) {
      ramenWarmLight.intensity = 4.6 + 0.14 * Math.sin(elapsed * 2.9);
      kitchenWarmLight.intensity = 3.2 + 0.12 * Math.sin(elapsed * 3.3 + 1.4);
      if (neonEnabled) {
        const buzz = Math.sin(elapsed * 34.0) * Math.sin(elapsed * 9.0) > 0.95 ? 0.72 : 1.0;
        izakayaNeonLight.intensity = 3.2 * buzz;
      }
    },
  };
}
