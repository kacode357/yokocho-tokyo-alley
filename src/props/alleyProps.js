import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import {
  createLanternTexture,
  createVendingFrontTextures,
  createSodaCanLabelTexture,
  createACGrilleTexture,
  createWeatheredMetalTextures,
  createYakisugiWoodTextures,
  createTrashBagNormalTexture,
  createRecycleBinFrontTexture,
} from '../textures/alleyTextures.js';
import { snapToFloor, scaleBoxUVs, applyAlleyWeathering } from '../utils/placement.js';

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Builds beveled, grounded Tokyo alley props:
 * - 5 swaying LatheGeometry Chochin paper lanterns on wall hooks
 * - 4 wall-mounted outdoor AC units on bolted L-brackets + insulated pipes
 * - Stacked slatted plastic beer crates with LatheGeometry glass bottles
 * - Beveled Japanese vending machine (interactive [E]) + recycling bin
 * - Izakaya bar stools, umbrella stand, traffic cone, tied trash bags, breaker & steam valve
 */
export function buildAlleyProps(scene, maxAnisotropy = 8, callbacks = {}) {
  const group = new THREE.Group();
  group.name = 'YokochoProps';

  const interactables = [];
  const lanterns = [];

  const metalTex = createWeatheredMetalTextures(maxAnisotropy);
  const woodTex = createYakisugiWoodTextures(maxAnisotropy);
  const acGrilleTex = createACGrilleTexture();

  const metalMat = applyAlleyWeathering(
    new THREE.MeshStandardMaterial({
      map: metalTex.map,
      roughnessMap: metalTex.roughnessMap,
      normalMap: metalTex.normalMap,
      color: 0x606870,
      roughness: 0.72,
      metalness: 0.78,
    }),
    { gritStrength: 0.1, grimeBottom: 0.4, roughJitter: 0.14 }
  );

  const acBodyMat = applyAlleyWeathering(
    new THREE.MeshStandardMaterial({
      map: metalTex.map,
      roughnessMap: metalTex.roughnessMap,
      color: 0x6b6f6c,
      roughness: 0.84,
      metalness: 0.12,
    }),
    { gritStrength: 0.1, grimeBottom: 0.0, roughJitter: 0.1, minRoughness: 0.72 }
  );

  const woodMat = applyAlleyWeathering(
    new THREE.MeshStandardMaterial({
      map: woodTex.map,
      normalMap: woodTex.normalMap,
      color: 0x806a54,
      roughness: 0.85,
      metalness: 0.05,
    }),
    { gritStrength: 0.1, grimeBottom: 0.4, roughJitter: 0.12 }
  );

  const canMats = Array.from({ length: 6 }, (_, i) => {
    const tex = createSodaCanLabelTexture(i);
    return new THREE.MeshPhysicalMaterial({
      map: tex,
      emissiveMap: tex,
      emissive: 0xffffff,
      emissiveIntensity: 0.22,
      roughness: 0.24,
      metalness: 0.45,
      clearcoat: 0.55,
      clearcoatRoughness: 0.18,
    });
  });

  // =========================================================================
  // 1. SWAYING LATHEGEOMETRY PAPER LANTERNS (CHOCHIN) ON IRON BRACKETS
  // =========================================================================
  const lanternSpecs = [
    { x: -2.02, y: 2.34, z: -1.95, kanji: '麺', color: '#ff8a3d', dirX: 1 },
    { x: -2.02, y: 2.34, z: -2.98, kanji: '酒', color: '#ff9848', dirX: 1 },
    { x: -2.02, y: 2.34, z: -6.25, kanji: '麺', color: '#ff7e36', dirX: 1 },
    { x: 2.02, y: 2.3, z: -17.6, kanji: '焼', color: '#ff8e42', dirX: -1 },
    { x: 2.02, y: 2.3, z: -20.8, kanji: '酒', color: '#ff9e4e', dirX: -1 },
  ];

  for (const spec of lanternSpecs) {
    const lGroup = buildPaperLantern(spec.kanji, spec.color, metalMat, spec.dirX);
    lGroup.position.set(spec.x, spec.y, spec.z);
    group.add(lGroup);
    lanterns.push(lGroup.userData.swingPivot);
  }

  // =========================================================================
  // 2. OUTDOOR AC CONDENSER UNITS ON BOLTED STEEL L-BRACKETS
  // =========================================================================
  const acSpecs = [
    { x: -2.42, y: 2.15, z: -9.8, rotY: Math.PI / 2 },
    { x: -2.42, y: 3.15, z: -14.8, rotY: Math.PI / 2 },
    { x: 2.42, y: 2.15, z: -6.6, rotY: -Math.PI / 2 },
    { x: 2.42, y: 3.05, z: -16.8, rotY: -Math.PI / 2 },
  ];
  for (const ac of acSpecs) {
    const unit = buildACUnit(acBodyMat, metalMat, acGrilleTex);
    unit.position.set(ac.x, ac.y, ac.z);
    unit.rotation.y = ac.rotY;
    group.add(unit);
  }

  // =========================================================================
  // 3. STACKED SLATTED BEER CRATES WITH LATHEGEOMETRY GLASS BOTTLES (Curb Y=0.14)
  // =========================================================================
  const crateRedMat = new THREE.MeshStandardMaterial({ color: 0x5c2020, roughness: 0.82, metalness: 0.0 });
  const crateYellowMat = new THREE.MeshStandardMaterial({ color: 0x765a24, roughness: 0.82, metalness: 0.0 });
  const bottleAmberMat = new THREE.MeshPhysicalMaterial({
    color: 0x361c0b,
    roughness: 0.18,
    metalness: 0.02,
    clearcoat: 0.65,
  });
  const bottleGreenMat = new THREE.MeshPhysicalMaterial({
    color: 0x163620,
    roughness: 0.18,
    metalness: 0.02,
    clearcoat: 0.65,
  });

  const crate1 = buildBeerCrate(crateRedMat, bottleAmberMat);
  crate1.rotation.y = 0.08;
  snapToFloor(crate1, 2.34, -8.85, 0.14);
  group.add(crate1);

  const crate2 = buildBeerCrate(crateYellowMat, bottleGreenMat);
  crate2.rotation.y = -0.14;
  // Stack cleanly directly on top of crate1's bounding box!
  const c1Box = new THREE.Box3().setFromObject(crate1);
  snapToFloor(crate2, 2.33, -8.87, c1Box.max.y);
  group.add(crate2);

  // =========================================================================
  // 4. BEVELED JAPANESE VENDING MACHINE + REAL DROPPING CAN PHYSICS + RECYCLING BIN
  // =========================================================================
  const vmCtrl = buildVendingMachine(metalMat, canMats, group);
  vmCtrl.group.rotation.y = -Math.PI / 2;
  snapToFloor(vmCtrl.group, 2.7, -11.5, 0.14);
  group.add(vmCtrl.group);

  interactables.push({
    id: 'vending',
    mesh: vmCtrl.hitMesh,
    prompt: '[E] Buy Drink (¥140)',
    interact() {
      vmCtrl.dispense();
      callbacks.onVendingDispense?.();
    },
  });

  const bin = buildRecyclingBin(metalMat);
  bin.rotation.y = -Math.PI / 2;
  snapToFloor(bin, 2.42, -12.65, 0.14);
  group.add(bin);

  // =========================================================================
  // 5. GROUNDED STREET PROPS (ALL snapped flush via snapToFloor!)
  // =========================================================================
  // 2 Izakaya wooden stools outside R3 counter
  for (const sz of [-18.7, -19.7]) {
    const stool = buildIzakayaStool(woodMat, metalMat);
    snapToFloor(stool, 2.26, sz, 0.14);
    group.add(stool);
  }

  // Stainless umbrella stand + 3 translucent folded umbrellas outside L1 Ramen Shop
  const umbStand = buildUmbrellaStand(metalMat);
  snapToFloor(umbStand, -2.35, -2.65, 0.14);
  group.add(umbStand);

  // Red/white traffic cone near right curb
  const cone = buildTrafficCone();
  snapToFloor(cone, 1.72, -4.1, 0.0);
  group.add(cone);

  // Varied crumpled Japanese street trash bags huddled casually beside R1 closed shutter
  const bagNormTex = createTrashBagNormalTexture();
  for (const [idx, tx, tz, rot, scale, colHex] of [
    [1, 2.34, -5.22, 0.4, 1.04, 0x181c22],
    [2, 2.27, -5.56, 1.85, 0.94, 0x2a2f36],
    [3, 2.38, -5.84, 2.9, 0.88, 0x15181e],
  ]) {
    const bag = buildTrashBag(idx, bagNormTex, colHex);
    bag.rotation.y = rot;
    bag.scale.setScalar(scale);
    snapToFloor(bag, tx, tz, 0.14);
    group.add(bag);
  }

  // Utility pole breaker box (interactive: toggles main neon sign!)
  const breakerGroup = new THREE.Group();
  const breakerMesh = new THREE.Mesh(new RoundedBoxGeometry(0.24, 0.36, 0.14, 2, 0.015), metalMat);
  breakerMesh.castShadow = true;
  const breakerLed = new THREE.Mesh(
    new THREE.SphereGeometry(0.016, 8, 8),
    new THREE.MeshBasicMaterial({ color: 0x38ff9c })
  );
  breakerLed.position.set(0.07, 0.11, 0.072);
  breakerGroup.add(breakerMesh, breakerLed);
  breakerGroup.position.set(-1.94, 1.48, -8.48);
  group.add(breakerGroup);

  interactables.push({
    id: 'neon-breaker',
    mesh: breakerMesh,
    prompt: '[E] Toggle Izakaya Neon',
    interact() {
      const on = callbacks.onToggleNeon?.();
      breakerLed.material.color.setHex(on ? 0x38ff9c : 0xff4242);
    },
  });

  // Kitchen exhaust steam valve (interactive: triggers pressurized steam burst!)
  const valveGroup = new THREE.Group();
  valveGroup.position.set(2.54, 1.35, -22.7);
  const valvePipe = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.9, 10), metalMat);
  valvePipe.position.y = 0.45;
  const valveWheel = new THREE.Mesh(
    new THREE.TorusGeometry(0.11, 0.016, 8, 18),
    new THREE.MeshStandardMaterial({ color: 0xa42824, roughness: 0.48, metalness: 0.55 })
  );
  valveWheel.rotation.y = Math.PI / 2;
  valveWheel.position.x = -0.06;
  valveGroup.add(valvePipe, valveWheel);
  group.add(valveGroup);

  let valveSpinTarget = 0;
  let valveSpinCurrent = 0;
  interactables.push({
    id: 'steam-valve',
    mesh: valveWheel,
    prompt: '[E] Open Kitchen Steam Valve',
    interact() {
      valveSpinTarget += Math.PI * 2;
      callbacks.onSteamBurst?.();
    },
  });

  scene.add(group);

  return {
    group,
    interactables,
    update(elapsed, dt = 0.016) {
      for (let i = 0; i < lanterns.length; i++) {
        lanterns[i].rotation.z = Math.sin(elapsed * 1.7 + i * 1.1) * 0.045;
        lanterns[i].rotation.x = Math.cos(elapsed * 1.4 + i * 0.7) * 0.03;
      }
      if (Math.abs(valveSpinTarget - valveSpinCurrent) > 0.01) {
        valveSpinCurrent += (valveSpinTarget - valveSpinCurrent) * Math.min(1, dt * 6.0);
        valveWheel.rotation.x = valveSpinCurrent;
      }
      vmCtrl.update(dt);
    },
  };
}

function buildPaperLantern(kanji, warmHex, metalMat, dirX) {
  const root = new THREE.Group();

  // Curved iron wall hook bracket
  const arm = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.03, 0.03), metalMat);
  arm.position.set(-dirX * 0.14, 0.28, 0);
  root.add(arm);

  const swingPivot = new THREE.Group();
  swingPivot.position.set(0, 0.26, 0);

  const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.12, 6), metalMat);
  cord.position.y = -0.06;
  swingPivot.add(cord);

  const lTex = createLanternTexture(kanji, warmHex);
  const pts = [
    new THREE.Vector2(0.06, -0.44),
    new THREE.Vector2(0.13, -0.39),
    new THREE.Vector2(0.16, -0.28),
    new THREE.Vector2(0.13, -0.17),
    new THREE.Vector2(0.06, -0.12),
  ];
  const body = new THREE.Mesh(
    new THREE.LatheGeometry(pts, 20),
    new THREE.MeshStandardMaterial({
      map: lTex.map,
      emissiveMap: lTex.emissiveMap,
      emissive: 0xffffff,
      emissiveIntensity: 1.1,
      roughness: 0.75,
    })
  );
  swingPivot.add(body);

  // Dark lacquered top & bottom wooden rings
  for (const ry of [-0.12, -0.44]) {
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.068, 0.068, 0.025, 16), metalMat);
    cap.position.y = ry;
    swingPivot.add(cap);
  }

  root.add(swingPivot);
  root.userData.swingPivot = swingPivot;
  return root;
}

function buildACUnit(bodyMat, metalMat, grilleTex) {
  const g = new THREE.Group();

  const housing = new THREE.Mesh(new RoundedBoxGeometry(0.84, 0.56, 0.34, 3, 0.025), bodyMat);
  housing.castShadow = true;
  housing.receiveShadow = true;
  g.add(housing);

  const grille = new THREE.Mesh(
    new THREE.PlaneGeometry(0.76, 0.48),
    new THREE.MeshStandardMaterial({ map: grilleTex, roughness: 0.65, metalness: 0.35 })
  );
  grille.position.z = 0.172;
  g.add(grille);

  // Two bolted structural steel L-brackets bracing diagonally BACK into the brick wall (zero protruding legs!)
  for (const bx of [-0.28, 0.28]) {
    const horiz = new THREE.Mesh(new RoundedBoxGeometry(0.045, 0.04, 0.42, 2, 0.006), metalMat);
    horiz.position.set(bx, -0.3, -0.04);
    const vert = new THREE.Mesh(new RoundedBoxGeometry(0.045, 0.44, 0.04, 2, 0.006), metalMat);
    vert.position.set(bx, -0.49, -0.23);
    const diag = new THREE.Mesh(new THREE.BoxGeometry(0.032, 0.032, 0.36), metalMat);
    diag.position.set(bx, -0.44, -0.11);
    diag.rotation.x = -0.82;
    g.add(horiz, vert, diag);
  }

  // Insulated white-taped PVC refrigerant conduit ("化粧カバー") + copper line curving cleanly into wall
  const pipeCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.42, -0.18, 0.0),
    new THREE.Vector3(0.52, -0.22, -0.04),
    new THREE.Vector3(0.54, -0.48, -0.14),
    new THREE.Vector3(0.54, -0.62, -0.2),
  ]);
  g.add(new THREE.Mesh(new THREE.TubeGeometry(pipeCurve, 10, 0.018, 8, false), metalMat));
  const pvcMat = new THREE.MeshStandardMaterial({ color: 0x8e887e, roughness: 0.72, metalness: 0.05 });
  const pvcTrack = new THREE.Mesh(new RoundedBoxGeometry(0.075, 0.96, 0.065, 2, 0.01), pvcMat);
  pvcTrack.position.set(0.54, 0.15, -0.18);
  g.add(pvcTrack);

  return g;
}

function buildBeerCrate(crateMat, bottleMat) {
  const g = new THREE.Group();
  const w = 0.42;
  const h = 0.3;
  const d = 0.34;
  const crownMat = new THREE.MeshStandardMaterial({ color: 0xb69548, roughness: 0.35, metalness: 0.78 });
  const labelMat = new THREE.MeshStandardMaterial({ color: 0xd6cab0, roughness: 0.85 });

  // Base tray + 4 corner posts + slatted side bars
  const base = new THREE.Mesh(new RoundedBoxGeometry(w, 0.03, d, 2, 0.008), crateMat);
  base.position.y = 0.015;
  base.castShadow = true;
  g.add(base);

  for (const px of [-w / 2 + 0.02, w / 2 - 0.02]) {
    for (const pz of [-d / 2 + 0.02, d / 2 - 0.02]) {
      const post = new THREE.Mesh(new RoundedBoxGeometry(0.04, h, 0.04, 2, 0.008), crateMat);
      post.position.set(px, h / 2, pz);
      post.castShadow = true;
      g.add(post);
    }
  }
  for (const sy of [0.1, 0.2, 0.28]) {
    const frontBar = new THREE.Mesh(new THREE.BoxGeometry(w, 0.032, 0.02), crateMat);
    frontBar.position.set(0, sy, d / 2 - 0.01);
    const backBar = frontBar.clone();
    backBar.position.z = -d / 2 + 0.01;
    const leftBar = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.032, d), crateMat);
    leftBar.position.set(-w / 2 + 0.01, sy, 0);
    const rightBar = leftBar.clone();
    rightBar.position.x = w / 2 - 0.01;
    g.add(frontBar, backBar, leftBar, rightBar);
  }
  // White brewery stencil stripe on crate front
  const stencil = new THREE.Mesh(new THREE.PlaneGeometry(0.24, 0.024), labelMat);
  stencil.position.set(0, 0.2, d / 2 + 0.002);
  g.add(stencil);

  // LatheGeometry glass beer bottles with metallic crown caps & paper neck labels (naturally imperfect!)
  const bottlePts = [
    new THREE.Vector2(0.0, 0.0),
    new THREE.Vector2(0.032, 0.0),
    new THREE.Vector2(0.032, 0.14),
    new THREE.Vector2(0.013, 0.21),
    new THREE.Vector2(0.012, 0.27),
    new THREE.Vector2(0.014, 0.28),
  ];
  const bottleGeo = new THREE.LatheGeometry(bottlePts, 12);
  const capGeo = new THREE.CylinderGeometry(0.0145, 0.0145, 0.012, 10);
  const lblGeo = new THREE.CylinderGeometry(0.033, 0.033, 0.065, 10, 1, true);
  for (let bx = -1; bx <= 1; bx++) {
    for (let bz = -1; bz <= 1; bz++) {
      // Leave 1 bottle slot casually empty so it looks used rather than a sterile 3x3 toy block!
      if (bx === 1 && bz === -1) continue;
      const bottle = new THREE.Mesh(bottleGeo, bottleMat);
      bottle.position.set(bx * 0.1, 0.03, bz * 0.09);
      bottle.rotation.z = ((bx + bz) % 2 === 0 ? 1 : -1) * 0.025;
      bottle.castShadow = true;
      const cap = new THREE.Mesh(capGeo, crownMat);
      cap.position.set(bx * 0.1, 0.31, bz * 0.09);
      const lbl = new THREE.Mesh(lblGeo, labelMat);
      lbl.position.set(bx * 0.1, 0.105, bz * 0.09);
      g.add(bottle, cap, lbl);
    }
  }

  return g;
}

function buildVendingMachine(metalMat, canMats, worldParent) {
  const vm = new THREE.Group();
  const frontTex = createVendingFrontTextures();

  // Matte Japanese powder-coated painted steel vending cabinet + dark scuff kickplate
  const vmPaintMat = new THREE.MeshStandardMaterial({
    color: 0x2c3440,
    roughness: 0.72,
    metalness: 0.18,
  });
  const bezelMat = new THREE.MeshStandardMaterial({
    color: 0x161a20,
    roughness: 0.65,
    metalness: 0.32,
  });
  const alumMat = new THREE.MeshStandardMaterial({ color: 0xcbd2da, roughness: 0.25, metalness: 0.88 });

  const body = new THREE.Mesh(new RoundedBoxGeometry(1.22, 2.02, 0.72, 3, 0.03), vmPaintMat);
  body.position.set(0, 1.01, -0.05);
  body.castShadow = true;
  body.receiveShadow = true;
  vm.add(body);

  // Scuffed dark stainless base kickplate
  const kickplate = new THREE.Mesh(new THREE.BoxGeometry(1.23, 0.12, 0.73), bezelMat);
  kickplate.position.set(0, 0.06, -0.05);
  vm.add(kickplate);

  const marquee = new THREE.Mesh(
    new THREE.PlaneGeometry(1.12, 0.24),
    new THREE.MeshStandardMaterial({
      map: frontTex.marqueeMap,
      emissiveMap: frontTex.marqueeMap,
      emissive: 0x9ac6ee,
      emissiveIntensity: 0.54,
      roughness: 0.85,
      metalness: 0.0,
    })
  );
  marquee.position.set(0, 1.84, 0.314);
  vm.add(marquee);

  const panelMat = new THREE.MeshStandardMaterial({
    map: frontTex.panelMap,
    emissiveMap: frontTex.panelEmissive,
    emissive: 0xffffff,
    emissiveIntensity: 0.62,
    roughness: 0.85,
  });
  const sidePanel = new THREE.Mesh(new THREE.PlaneGeometry(0.26, 0.68), panelMat);
  sidePanel.position.set(0.42, 1.18, 0.314);
  vm.add(sidePanel);

  // Beveled dark showcase frame + crisp light-grey interior showcase back so drink cans POP realistically!
  const showcaseFrame = new THREE.Mesh(new RoundedBoxGeometry(0.82, 1.02, 0.03, 2, 0.008), bezelMat);
  showcaseFrame.position.set(-0.14, 1.18, 0.305);
  const showcaseBack = new THREE.Mesh(
    new THREE.PlaneGeometry(0.75, 0.95),
    new THREE.MeshStandardMaterial({
      color: 0x222c38,
      emissive: 0x16202c,
      emissiveIntensity: 0.55,
      roughness: 0.9,
      metalness: 0.0,
    })
  );
  showcaseBack.position.set(-0.14, 1.18, 0.322);
  vm.add(showcaseFrame, showcaseBack);

  // Realistic LatheGeometry Japanese 350ml Aluminum Soda Can (beveled chime + tapered shoulder + pull-tab lid!)
  const realCanBodyGeo = new THREE.CylinderGeometry(0.033, 0.033, 0.098, 18, 1, true);
  const realCanShoulderGeo = new THREE.CylinderGeometry(0.027, 0.033, 0.015, 18);
  const realCanBaseGeo = new THREE.CylinderGeometry(0.033, 0.027, 0.011, 18);
  const realCanLidGeo = new THREE.CircleGeometry(0.027, 16);
  realCanLidGeo.rotateX(-Math.PI / 2);

  function createRealisticCanMesh(matIndex) {
    const cg = new THREE.Group();
    const wrap = new THREE.Mesh(realCanBodyGeo, canMats[matIndex % canMats.length]);
    // Rotate wrap by Math.PI so CylinderGeometry UV u=0.5 (brand logo!) faces +Z straight toward the viewer!
    wrap.rotation.y = Math.PI;
    const shoulder = new THREE.Mesh(realCanShoulderGeo, alumMat);
    shoulder.position.y = 0.056;
    const lid = new THREE.Mesh(realCanLidGeo, alumMat);
    lid.position.y = 0.064;
    const baseRim = new THREE.Mesh(realCanBaseGeo, alumMat);
    baseRim.position.y = -0.054;
    cg.add(wrap, shoulder, lid, baseRim);
    return cg;
  }

  // Realistic 500ml Japanese PET Bottle: glossy translucent liquid body + crisp front-facing middle paper label + cap!
  const petBottlePts = [
    new THREE.Vector2(0.0, 0.0),
    new THREE.Vector2(0.028, 0.0),
    new THREE.Vector2(0.031, 0.018),
    new THREE.Vector2(0.031, 0.112),
    new THREE.Vector2(0.014, 0.148),
    new THREE.Vector2(0.014, 0.168),
    new THREE.Vector2(0.0, 0.168),
  ];
  const petBottleGeo = new THREE.LatheGeometry(petBottlePts, 16);
  const petLabelGeo = new THREE.CylinderGeometry(0.032, 0.032, 0.072, 18, 1, true);
  const petLiquidColors = [0xd4a428, 0xe8dfd0, 0x7c1c16, 0x92c8ee, 0x265c28];
  const capColors = [0xe8a820, 0x2278d8, 0xcc1d24, 0xeef4fa, 0x1c7c40];

  const shelfLedMat = new THREE.MeshBasicMaterial({ color: 0xc2def0 });
  const shelfTrayMat = new THREE.MeshStandardMaterial({ color: 0x2b323b, roughness: 0.65, metalness: 0.25 });
  const coldBtnMat = new THREE.MeshBasicMaterial({ color: 0x2692f0 });
  const hotBtnMat = new THREE.MeshBasicMaterial({ color: 0xe83b2c });
  const btnGeo = new THREE.BoxGeometry(0.088, 0.024, 0.018);

  for (let s = 0; s < 3; s++) {
    const sy = 0.84 + s * 0.285;
    const shelfBar = new THREE.Mesh(new THREE.BoxGeometry(0.73, 0.016, 0.055), shelfTrayMat);
    shelfBar.position.set(-0.14, sy - 0.008, 0.342);
    const led = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.007, 0.015), shelfLedMat);
    led.position.set(-0.14, sy + 0.205, 0.338);
    vm.add(shelfBar, led);
    for (let c = 0; c < 5; c++) {
      const cx = -0.4 + c * 0.13;
      const matIdx = (s * 2 + c) % canMats.length;
      if (s === 2) {
        // Top row: realistic translucent 500ml PET bottles with separate front-facing printed label sleeve & screw cap!
        const petMat = new THREE.MeshPhysicalMaterial({
          color: petLiquidColors[c % petLiquidColors.length],
          roughness: 0.14,
          metalness: 0.05,
          clearcoat: 0.9,
          clearcoatRoughness: 0.12,
        });
        const bottle = new THREE.Mesh(petBottleGeo, petMat);
        bottle.position.set(cx, sy, 0.342);
        const pLabel = new THREE.Mesh(petLabelGeo, canMats[matIdx]);
        pLabel.rotation.y = Math.PI;
        pLabel.position.set(cx, sy + 0.068, 0.342);
        const pCap = new THREE.Mesh(
          new THREE.CylinderGeometry(0.0155, 0.0155, 0.02, 12),
          new THREE.MeshStandardMaterial({ color: capColors[c % capColors.length], roughness: 0.38 })
        );
        pCap.position.set(cx, sy + 0.17, 0.342);
        vm.add(bottle, pLabel, pCap);
      } else {
        // Middle & bottom rows: realistic tapered aluminum Japanese drink cans with labels facing straight forward!
        const can = createRealisticCanMesh(matIdx);
        can.position.set(cx, sy + 0.06, 0.344);
        vm.add(can);
      }
      // Iconic Japanese blue ("つめたい" cold) & red ("あったか〜い" hot) glowing push-buttons under every drink!
      const btn = new THREE.Mesh(btnGeo, s === 0 && c >= 2 ? hotBtnMat : coldBtnMat);
      btn.position.set(cx, sy - 0.036, 0.342);
      vm.add(btn);
    }
  }

  // Subtle clear glass showcase pane (low opacity, faint specular reflection)
  const glassPane = new THREE.Mesh(
    new THREE.PlaneGeometry(0.76, 0.96),
    new THREE.MeshPhysicalMaterial({
      color: 0xdbeeff,
      transparent: true,
      opacity: 0.11,
      roughness: 0.08,
      metalness: 0.1,
      clearcoat: 0.8,
      depthWrite: false,
    })
  );
  glassPane.position.set(-0.14, 1.18, 0.378);
  vm.add(glassPane);

  // Recessed dark pickup compartment + hinged metal flap lip
  const trayFrame = new THREE.Mesh(new RoundedBoxGeometry(0.82, 0.26, 0.05, 2, 0.012), bezelMat);
  trayFrame.position.set(-0.14, 0.32, 0.305);
  const trayCavity = new THREE.Mesh(
    new THREE.PlaneGeometry(0.74, 0.19),
    new THREE.MeshBasicMaterial({ color: 0x050709 })
  );
  trayCavity.position.set(-0.14, 0.32, 0.332);
  const trayLip = new THREE.Mesh(new RoundedBoxGeometry(0.76, 0.028, 0.11, 2, 0.006), bezelMat);
  trayLip.position.set(-0.14, 0.21, 0.35);
  vm.add(trayFrame, trayCavity, trayLip);

  // =========================================================================
  // SPAM-ABLE REAL FALLING / BOUNCING / ROLLING SODA CAN PHYSICS POOL (18 cans!)
  // Every [E] press drops a real 3D aluminum drink can OUT of the chute onto the wet street!
  // =========================================================================
  const MAX_CANS = 18;
  const activeCans = [];
  let canCursor = 0;

  function spawnDroppedCan() {
    const brandIdx = Math.floor(Math.random() * canMats.length);
    let entry;
    if (activeCans.length < MAX_CANS) {
      const mesh = createRealisticCanMesh(brandIdx);
      mesh.castShadow = true;
      worldParent.add(mesh);
      entry = { mesh, vx: 0, vy: 0, vz: 0, rx: 0, rz: 0, settled: false };
      activeCans.push(entry);
    } else {
      entry = activeCans[canCursor % MAX_CANS];
      canCursor++;
      // Swap label material cleanly on recycled can
      entry.mesh.children[0].material = canMats[brandIdx];
    }

    // Spawn inside dark vending pickup chute facing alley (-X) and eject outward so cans tumble onto curb & wet road!
    const zJitter = (Math.random() - 0.5) * 0.32;
    entry.mesh.position.set(2.34, 0.44, -11.36 + zJitter);
    entry.mesh.rotation.set(Math.PI / 2, (Math.random() - 0.5) * 0.6, Math.random() * Math.PI * 2);
    entry.vx = -(0.65 + Math.random() * 0.95);
    entry.vy = 0.35 + Math.random() * 0.45;
    entry.vz = (Math.random() - 0.5) * 0.65;
    entry.rx = (Math.random() - 0.5) * 5.0;
    entry.rz = 6.0 + Math.random() * 7.0;
    entry.settled = false;
  }

  let flashTimer = 0;

  return {
    group: vm,
    hitMesh: body,
    dispense() {
      flashTimer = 0.45;
      panelMat.emissiveIntensity = 1.35;
      spawnDroppedCan();
    },
    update(dt) {
      if (flashTimer > 0) {
        flashTimer -= dt;
        if (flashTimer <= 0) panelMat.emissiveIntensity = 0.62;
      }

      const canRadius = 0.034;
      for (let i = 0; i < activeCans.length; i++) {
        const c = activeCans[i];
        if (c.settled) continue;

        c.vy -= 9.8 * dt;
        c.mesh.position.x += c.vx * dt;
        c.mesh.position.y += c.vy * dt;
        c.mesh.position.z += c.vz * dt;

        // Curb height is Y = 0.14 for X >= 2.04, drops off cleanly onto wet asphalt road Y = 0.0 for X < 2.04!
        const floorY = c.mesh.position.x >= 2.04 ? 0.14 + canRadius : canRadius;
        if (c.mesh.position.y <= floorY) {
          c.mesh.position.y = floorY;
          if (Math.abs(c.vy) > 0.45) {
            c.vy = -c.vy * 0.42;
            c.vx *= 0.84;
            c.vz *= 0.84;
          } else {
            c.vy = 0;
            const drag = Math.exp(-3.4 * dt);
            c.vx *= drag;
            c.vz *= drag;
            c.rz = -c.vx / canRadius;
            // Settle nicely lying flat on its cylindrical side
            c.mesh.rotation.x = THREE.MathUtils.lerp(c.mesh.rotation.x, Math.PI / 2, Math.min(1, dt * 10));
          }
        }

        // Prevent cans rolling past opposite curb
        if (c.mesh.position.x < -1.85) {
          c.mesh.position.x = -1.85;
          c.vx = Math.abs(c.vx) * 0.35;
        }

        c.mesh.rotation.z += c.rz * dt;
        if (c.vy === 0 && Math.hypot(c.vx, c.vz) < 0.025) {
          c.vx = 0;
          c.vz = 0;
          c.rz = 0;
          c.settled = true;
        }
      }
    },
  };
}

function buildRecyclingBin(metalMat) {
  const bin = new THREE.Group();
  const frontTex = createRecycleBinFrontTexture();
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x626b74, roughness: 0.72, metalness: 0.25 });
  const frontFaceMat = new THREE.MeshStandardMaterial({ map: frontTex, roughness: 0.68, metalness: 0.12 });
  const hoodMat = new THREE.MeshStandardMaterial({ color: 0x26547c, roughness: 0.56, metalness: 0.08 });
  const collarMat = new THREE.MeshStandardMaterial({ color: 0xd0d6dc, roughness: 0.42, metalness: 0.15 });
  const darkHoleMat = new THREE.MeshBasicMaterial({ color: 0x050608 });

  // Grounded rubber feet so bin never looks pasted into concrete
  for (const fx of [-0.15, 0.15]) {
    for (const fz of [-0.14, 0.14]) {
      const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.025, 0.03, 8), metalMat);
      foot.position.set(fx, 0.015, fz);
      bin.add(foot);
    }
  }

  // Slim realistic weathered metal street bin cabinet + crisp Japanese "空き缶・ペットボトル" front door graphic
  const body = new THREE.Mesh(new RoundedBoxGeometry(0.4, 0.68, 0.38, 2, 0.015), bodyMat);
  body.position.y = 0.37;
  body.castShadow = true;
  const frontPanel = new THREE.Mesh(new THREE.PlaneGeometry(0.36, 0.62), frontFaceMat);
  frontPanel.position.set(0, 0.37, 0.193);
  bin.add(body, frontPanel);

  // Authentic sloped blue-grey molded plastic rain hood via ExtrudeGeometry!
  const hoodShape = new THREE.Shape();
  hoodShape.moveTo(-0.195, 0);
  hoodShape.lineTo(0.195, 0);
  hoodShape.lineTo(0.195, 0.12);
  hoodShape.lineTo(0.11, 0.24);
  hoodShape.lineTo(-0.195, 0.26);
  hoodShape.closePath();
  const hoodGeo = new THREE.ExtrudeGeometry(hoodShape, {
    depth: 0.42,
    bevelEnabled: true,
    bevelThickness: 0.015,
    bevelSize: 0.012,
    bevelSegments: 2,
  });
  hoodGeo.rotateY(-Math.PI / 2);
  hoodGeo.translate(0.21, 0.7, 0);
  const hood = new THREE.Mesh(hoodGeo, hoodMat);
  hood.castShadow = true;
  bin.add(hood);

  // Dual recessed circular drop-in chutes (left: Cans, right: PET Bottles) cleanly flush with sloped front hood!
  for (const hx of [-0.095, 0.095]) {
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.056, 0.011, 8, 20), collarMat);
    rim.position.set(hx, 0.875, 0.16);
    rim.rotation.x = -0.62;
    const throat = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.052, 0.06, 16), darkHoleMat);
    throat.position.set(hx, 0.86, 0.145);
    throat.rotation.x = Math.PI / 2 - 0.62;
    bin.add(rim, throat);
  }

  return bin;
}

function buildIzakayaStool(woodMat, metalMat) {
  const stool = new THREE.Group();
  const seat = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.045, 18), woodMat);
  seat.position.y = 0.56;
  seat.castShadow = true;
  stool.add(seat);

  for (let i = 0; i < 4; i++) {
    const ang = (i * Math.PI) / 2 + Math.PI / 4;
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.012, 0.56, 8), metalMat);
    leg.position.set(Math.cos(ang) * 0.12, 0.28, Math.sin(ang) * 0.12);
    leg.rotation.z = Math.cos(ang) * 0.08;
    leg.rotation.x = -Math.sin(ang) * 0.08;
    leg.castShadow = true;
    stool.add(leg);
  }
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.008, 6, 18), metalMat);
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.18;
  stool.add(ring);
  return stool;
}

function buildUmbrellaStand(metalMat) {
  const stand = new THREE.Group();
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.012, 8, 18), metalMat);
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.52;
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.03, 18), metalMat);
  base.position.y = 0.015;
  stand.add(ring, base);

  // Tapered folded Japanese vinyl umbrella sleeve + dark ferrule tip + Velcro strap
  const canopyPts = [
    new THREE.Vector2(0.008, 0.06),
    new THREE.Vector2(0.014, 0.22),
    new THREE.Vector2(0.025, 0.42),
    new THREE.Vector2(0.023, 0.56),
    new THREE.Vector2(0.009, 0.62),
  ];
  const canopyGeo = new THREE.LatheGeometry(canopyPts, 12);
  const vinylMat = new THREE.MeshPhysicalMaterial({
    color: 0xd4e6f2,
    roughness: 0.3,
    transparent: true,
    opacity: 0.55,
  });
  const handleMat = new THREE.MeshStandardMaterial({ color: 0xe6e9ed, roughness: 0.38 });
  const darkHandleMat = new THREE.MeshStandardMaterial({ color: 0x1e2228, roughness: 0.45 });
  const strapMat = new THREE.MeshStandardMaterial({ color: 0x1a1d22, roughness: 0.85 });

  // J-shaped curved umbrella handle along CatmullRomCurve3
  const handleCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0.72, 0),
    new THREE.Vector3(0, 0.775, 0.006),
    new THREE.Vector3(0, 0.81, 0.032),
    new THREE.Vector3(0, 0.79, 0.06),
    new THREE.Vector3(0, 0.74, 0.064),
  ]);
  const handleGeo = new THREE.TubeGeometry(handleCurve, 12, 0.009, 8, false);

  for (let i = 0; i < 3; i++) {
    const a = (i * Math.PI * 2) / 3;
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.52, 8), metalMat);
    post.position.set(Math.cos(a) * 0.13, 0.26, Math.sin(a) * 0.13);
    stand.add(post);

    const umb = new THREE.Group();
    const ferrule = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.004, 0.06, 8), metalMat);
    ferrule.position.y = 0.03;
    const canopy = new THREE.Mesh(canopyGeo, vinylMat);
    const strap = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.025, 12), strapMat);
    strap.position.y = 0.42;
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.72, 8), metalMat);
    shaft.position.y = 0.36;
    const handle = new THREE.Mesh(handleGeo, i === 1 ? darkHandleMat : handleMat);
    umb.add(ferrule, canopy, strap, shaft, handle);

    umb.position.set(Math.cos(a + 0.4) * 0.045, 0.025, Math.sin(a + 0.4) * 0.045);
    umb.rotation.set(0.07 * Math.sin(a), a * 0.9, 0.07 * Math.cos(a));
    stand.add(umb);
  }
  return stand;
}

function buildTrafficCone() {
  const g = new THREE.Group();
  const base = new THREE.Mesh(
    new RoundedBoxGeometry(0.34, 0.04, 0.34, 2, 0.012),
    new THREE.MeshStandardMaterial({ color: 0x16181c, roughness: 0.88, metalness: 0.0 })
  );
  base.position.y = 0.02;
  const pts = [
    new THREE.Vector2(0.125, 0.04),
    new THREE.Vector2(0.032, 0.68),
    new THREE.Vector2(0.0, 0.68),
  ];
  const cone = new THREE.Mesh(
    new THREE.LatheGeometry(pts, 20),
    new THREE.MeshStandardMaterial({ color: 0xa8361c, roughness: 0.62, metalness: 0.0 })
  );
  cone.castShadow = true;

  // Dual Japanese reflective white collar sleeves cleanly proud (+4mm) of the cone surface
  const bandMat = new THREE.MeshStandardMaterial({ color: 0xcfd6de, roughness: 0.42, metalness: 0.08 });
  const bandLow = new THREE.Mesh(new THREE.CylinderGeometry(0.086, 0.102, 0.11, 20, 1, true), bandMat);
  bandLow.position.y = 0.26;
  const bandHigh = new THREE.Mesh(new THREE.CylinderGeometry(0.056, 0.072, 0.11, 20, 1, true), bandMat);
  bandHigh.position.y = 0.47;
  g.add(base, cone, bandLow, bandHigh);
  return g;
}

function buildTrashBag(seed = 1, normalMap = null, colorHex = 0x181c22) {
  const g = new THREE.Group();
  const bagMat = new THREE.MeshPhysicalMaterial({
    color: colorHex,
    normalMap,
    normalScale: new THREE.Vector2(0.65, 0.65),
    roughness: 0.54,
    metalness: 0.0,
    clearcoat: 0.16,
    clearcoatRoughness: 0.5,
  });

  const geo = new THREE.SphereGeometry(0.24, 24, 16);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    const ang = Math.atan2(z, x);
    const heightFrac = (y + 0.24) / 0.48;
    // Asymmetric slumped lumpy contents inside each unique bag (not identical round onions!)
    const lump =
      1.0 +
      0.13 * Math.sin(ang * 2.0 + seed * 1.9) * Math.sin(heightFrac * Math.PI) +
      0.08 * Math.cos(ang * 3.0 - seed * 2.4 + y * 5.0);
    const bulge = (1.22 - heightFrac * 0.42) * lump;
    const crease = 1.0 + 0.045 * Math.sin(ang * 7.0 + y * 11.0 + seed);
    const newY = y < -0.12 ? -0.12 + (y + 0.12) * 0.28 : y * (0.84 + 0.08 * (seed % 2));
    pos.setXYZ(i, x * bulge * crease, newY, z * bulge * crease * 0.92);
  }
  geo.computeVertexNormals();
  const body = new THREE.Mesh(geo, bagMat);
  body.position.y = 0.17;
  body.castShadow = true;

  // Compact twisted plastic knot tucked slightly off-center
  const knot = new THREE.Mesh(new THREE.CylinderGeometry(0.036, 0.068, 0.055, 12), bagMat);
  knot.position.set(0.015 * (seed - 2), 0.34, 0.01);
  knot.rotation.z = 0.18 * (seed - 2);
  const ear = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.09, 9), bagMat);
  ear.position.set(0.035 * (seed - 2) + 0.025, 0.38, 0.015);
  ear.rotation.z = -0.65;
  g.add(body, knot, ear);
  return g;
}
