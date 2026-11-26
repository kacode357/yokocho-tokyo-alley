import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import {
  createAsphaltTextures,
  createConcreteCurbTextures,
  createYakisugiWoodTextures,
  createJapaneseTileTextures,
  createCorrugatedShutterTextures,
  createWeatheredMetalTextures,
  createShojiWindowTexture,
  createNorenCurtainTexture,
  createNeonSignTexture,
  createManholeTexture,
  createLitWindowTexture,
  createShinjukuBuildingTextures,
  createKonbiniStorefrontTexture,
  createRamenInteriorBackTexture,
  createRamenSideWallTexture,
  createRamenBowlTopTexture,
  createPoleHazardTexture,
  createAddressPlaqueTexture,
  createHeadlightWashTexture,
  createLampGlareTexture,
} from '../textures/alleyTextures.js';
import { snapToFloor, scaleBoxUVs, applyAlleyWeathering } from '../utils/placement.js';
import { createWetAsphaltReflector } from './wetAsphaltReflector.js';

/**
 * Builds the Rainy Tokyo Back-Alley ("Yokocho"):
 * - Wet asphalt road + beveled concrete curbs + roadside drain grates + Tokyo manhole
 * - Left facades: L1 Warm Ramen Shop (sliding shoji doors + swaying Noren), L2 Izakaya Bar, L3 Alley Apt
 * - Right facades: R1 Metal Shutter Shop, R2 Vending Alcove + Amber Neon, R3 Kitchen Counter + Steam Hood
 * - 2 concrete utility poles with transformers, cobra-head streetlamps & 18 sagging power lines
 * - Distant Shinjuku neon intersection backdrop
 */
export function buildAlleyArchitecture(scene, maxAnisotropy = 8) {
  const group = new THREE.Group();
  group.name = 'YokochoArchitecture';
  const fineDetailGroup = new THREE.Group();
  fineDetailGroup.name = 'YokochoFineDetail';
  fineDetailGroup.userData.skipReflector = true;
  group.add(fineDetailGroup);

  const asphaltTex = createAsphaltTextures(maxAnisotropy);
  const curbTex = createConcreteCurbTextures(maxAnisotropy);
  const woodTex = createYakisugiWoodTextures(maxAnisotropy);
  const tileDarkTex = createJapaneseTileTextures(maxAnisotropy, [56, 60, 66]);
  const tileBeigeTex = createJapaneseTileTextures(maxAnisotropy, [84, 78, 70]);
  const shutterTex = createCorrugatedShutterTextures(maxAnisotropy);
  const metalTex = createWeatheredMetalTextures(maxAnisotropy);

  const asphaltMat = applyAlleyWeathering(
    new THREE.MeshStandardMaterial({
      map: asphaltTex.map,
      roughnessMap: asphaltTex.roughnessMap,
      normalMap: asphaltTex.normalMap,
      normalScale: new THREE.Vector2(0.95, 0.95),
      roughness: 0.92,
      metalness: 0.05,
    }),
    { gritStrength: 0.12, grimeBottom: 0.0, roughJitter: 0.12 }
  );

  const curbMat = applyAlleyWeathering(
    new THREE.MeshStandardMaterial({
      map: curbTex.map,
      roughnessMap: curbTex.roughnessMap,
      normalMap: curbTex.normalMap,
      normalScale: new THREE.Vector2(0.75, 0.75),
      roughness: 0.95,
      metalness: 0.0,
    }),
    { gritStrength: 0.11, grimeBottom: 0.35, grimeHeight: 0.16, roughJitter: 0.1, minRoughness: 0.82 }
  );

  const yakisugiMat = applyAlleyWeathering(
    new THREE.MeshStandardMaterial({
      map: woodTex.map,
      roughnessMap: woodTex.roughnessMap,
      normalMap: woodTex.normalMap,
      normalScale: new THREE.Vector2(0.9, 0.9),
      roughness: 0.9,
      metalness: 0.0,
    }),
    { gritStrength: 0.1, grimeBottom: 0.42, grimeHeight: 0.55, roughJitter: 0.1, minRoughness: 0.78 }
  );

  const tileDarkMat = applyAlleyWeathering(
    new THREE.MeshStandardMaterial({
      map: tileDarkTex.map,
      roughnessMap: tileDarkTex.roughnessMap,
      normalMap: tileDarkTex.normalMap,
      normalScale: new THREE.Vector2(0.42, 0.42),
      roughness: 0.96,
      metalness: 0.0,
    }),
    { gritStrength: 0.1, grimeBottom: 0.44, grimeHeight: 0.55, roughJitter: 0.08, minRoughness: 0.84 }
  );

  const tileBeigeMat = applyAlleyWeathering(
    new THREE.MeshStandardMaterial({
      map: tileBeigeTex.map,
      roughnessMap: tileBeigeTex.roughnessMap,
      normalMap: tileBeigeTex.normalMap,
      normalScale: new THREE.Vector2(0.42, 0.42),
      roughness: 0.96,
      metalness: 0.0,
    }),
    { gritStrength: 0.1, grimeBottom: 0.44, grimeHeight: 0.55, roughJitter: 0.08, minRoughness: 0.84 }
  );

  const shutterMat = applyAlleyWeathering(
    new THREE.MeshStandardMaterial({
      map: shutterTex.map,
      roughnessMap: shutterTex.roughnessMap,
      normalMap: shutterTex.normalMap,
      normalScale: new THREE.Vector2(0.62, 0.62),
      roughness: 0.74,
      metalness: 0.65,
    }),
    { gritStrength: 0.1, grimeBottom: 0.48, grimeHeight: 0.5, roughJitter: 0.12 }
  );

  const metalMat = applyAlleyWeathering(
    new THREE.MeshStandardMaterial({
      map: metalTex.map,
      roughnessMap: metalTex.roughnessMap,
      normalMap: metalTex.normalMap,
      normalScale: new THREE.Vector2(0.75, 0.75),
      color: 0x626a72,
      roughness: 0.76,
      metalness: 0.74,
    }),
    { gritStrength: 0.1, grimeBottom: 0.4, grimeHeight: 0.48, roughJitter: 0.14 }
  );

  const cableMat = new THREE.MeshStandardMaterial({ color: 0x0e1014, roughness: 0.7, metalness: 0.18 });

  function addBox(w, h, d, x, y, z, mat, { tile = 2.0, castShadow = true, receiveShadow = true, bevel = 0 } = {}) {
    const geo =
      bevel > 0
        ? new RoundedBoxGeometry(w, h, d, 2, bevel)
        : scaleBoxUVs(new THREE.BoxGeometry(w, h, d), w, h, d, tile);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = castShadow;
    mesh.receiveShadow = receiveShadow;
    group.add(mesh);
    return mesh;
  }

  // =========================================================================
  // 1. ROADWAY, BEVELED CURBS, STORM DRAIN GRATES & MANHOLE COVER
  // =========================================================================
  const road = new THREE.Mesh(new THREE.PlaneGeometry(5.2, 36.0), asphaltMat);
  road.rotation.x = -Math.PI / 2;
  road.position.set(0, 0, -13.0);
  road.receiveShadow = true;
  group.add(road);

  // Beveled raised concrete sidewalks (X = ±2.45, width = 0.80 -> inner edge at X = ±2.05, top Y = 0.14)
  addBox(0.8, 0.14, 34.0, -2.45, 0.07, -13.0, curbMat, { bevel: 0.025 });
  addBox(0.8, 0.14, 34.0, 2.45, 0.07, -13.0, curbMat, { bevel: 0.025 });

  // Faded painted street edge lines
  const lineMat = new THREE.MeshStandardMaterial({ color: 0x8d9298, roughness: 0.88, transparent: true, opacity: 0.48 });
  for (const lx of [-1.72, 1.72]) {
    const line = new THREE.Mesh(new THREE.PlaneGeometry(0.08, 30.0), lineMat);
    line.rotation.x = -Math.PI / 2;
    line.position.set(lx, 0.003, -12.5);
    group.add(line);
  }

  // Roadside storm drain grates flush with asphalt (skip in distant puddle reflections)
  for (const gx of [-1.92, 1.92]) {
    for (let gz = -1.5; gz >= -23.5; gz -= 5.5) {
      const grate = new THREE.Mesh(new RoundedBoxGeometry(0.24, 0.015, 0.9, 2, 0.004), metalMat);
      grate.position.set(gx, 0.005, gz);
      fineDetailGroup.add(grate);
    }
  }

  // Japanese circular cast-iron manhole cover
  const manholeTex = createManholeTexture();
  const manhole = new THREE.Mesh(
    new THREE.CylinderGeometry(0.36, 0.36, 0.014, 24),
    new THREE.MeshStandardMaterial({
      map: manholeTex.map,
      normalMap: manholeTex.normalMap,
      roughness: 0.52,
      metalness: 0.78,
    })
  );
  manhole.position.set(0.24, 0.004, -9.4);
  manhole.receiveShadow = true;
  group.add(manhole);

  // =========================================================================
  // 2. LEFT ALLEY FACADES (Main wall plane at X = -2.65)
  // =========================================================================

  // --- L1: Warm Ramen Shop "麺屋 夜雨" (Z = +2.5..-8.5) WITH REAL OPEN INTERIOR ---
  // Split facade cleanly around doorway opening (Z = -3.32..-5.48, Y = 0.14..2.30)
  addBox(0.4, 6.8, 5.82, -2.85, 3.4, -0.41, yakisugiMat, { tile: 2.2 }); // Front left wall (+2.5..-3.32)
  addBox(0.4, 6.8, 3.02, -2.85, 3.4, -6.99, yakisugiMat, { tile: 2.2 }); // Rear left wall (-5.48..-8.5)
  addBox(0.4, 4.5, 2.16, -2.85, 4.55, -4.4, yakisugiMat, { tile: 2.2 }); // Header above doorway
  addBox(0.4, 0.14, 2.16, -2.85, 0.07, -4.4, curbMat, { tile: 2.0 }); // Doorway threshold sill

  // Chamfered timber structural posts along L1
  for (const pz of [1.2, -2.5, -5.9, -8.3]) {
    addBox(0.14, 3.2, 0.14, -2.6, 1.6, pz, yakisugiMat, { bevel: 0.015 });
  }

  // Warm matte Koshi-do Shoji sliding doors with real 3D cedar wood lattice (interactive!)
  const shojiTex = createShojiWindowTexture();
  const shojiMat = new THREE.MeshStandardMaterial({
    map: shojiTex.map,
    emissiveMap: shojiTex.emissiveMap,
    emissive: 0xffa04a,
    emissiveIntensity: 0.56,
    roughness: 0.98,
    metalness: 0.0,
  });
  const cedarTrimMat = new THREE.MeshStandardMaterial({
    map: woodTex.map,
    normalMap: woodTex.normalMap,
    color: 0x3b281c,
    roughness: 0.86,
    metalness: 0.0,
  });
  const hardwareMat = new THREE.MeshStandardMaterial({ color: 0x1d1a18, roughness: 0.45, metalness: 0.78 });

  // Photorealistic Lived-In Tokyo Ramen-ya Interior behind the sliding Shoji doorway (X = -2.65..-5.15, Z = -2.9..-5.9)
  const interiorGroup = new THREE.Group();
  const sideWallTex = createRamenSideWallTexture();
  const sideWallMat = new THREE.MeshStandardMaterial({ map: sideWallTex, roughness: 0.92, metalness: 0.0 });
  const backWallMenuMat = new THREE.MeshStandardMaterial({
    map: createRamenInteriorBackTexture(),
    roughness: 0.86,
    metalness: 0.0,
  });
  const hinokiMat = new THREE.MeshStandardMaterial({
    map: woodTex.map,
    normalMap: woodTex.normalMap,
    color: 0xa67848,
    roughness: 0.56,
    metalness: 0.0,
  });
  const intFloorMat = new THREE.MeshStandardMaterial({
    map: tileDarkTex.map,
    roughnessMap: tileDarkTex.roughnessMap,
    color: 0x3f3730,
    roughness: 0.82,
    metalness: 0.0,
  });
  const stainlessMat = new THREE.MeshStandardMaterial({
    map: metalTex.map,
    color: 0x9aa2aa,
    roughness: 0.34,
    metalness: 0.82,
  });
  const aoShadowMat = new THREE.MeshBasicMaterial({
    color: 0x050302,
    transparent: true,
    opacity: 0.52,
    depthWrite: false,
  });

  // Textured floor, timber-beamed ceiling, hyper-detailed back wall & wainscoted side walls
  const intFloor = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 3.1), intFloorMat);
  intFloor.rotation.x = -Math.PI / 2;
  intFloor.position.set(-3.9, 0.142, -4.4);
  const intCeil = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 3.1), cedarTrimMat);
  intCeil.rotation.x = Math.PI / 2;
  intCeil.position.set(-3.9, 2.58, -4.4);
  const intBackWall = new THREE.Mesh(new THREE.PlaneGeometry(3.1, 2.46), backWallMenuMat);
  intBackWall.rotation.y = Math.PI / 2;
  intBackWall.position.set(-5.12, 1.37, -4.4);
  const intWallN = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 2.46), sideWallMat);
  intWallN.position.set(-3.9, 1.37, -5.92);
  const intWallS = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 2.46), sideWallMat);
  intWallS.rotation.y = Math.PI;
  intWallS.position.set(-3.9, 1.37, -2.88);
  interiorGroup.add(intFloor, intCeil, intBackWall, intWallN, intWallS);

  // Exposed dark cedar ceiling rafters & corner timber posts for real Japanese joinery
  for (const rz of [-3.4, -4.4, -5.4]) {
    const beam = new THREE.Mesh(new THREE.BoxGeometry(2.52, 0.09, 0.1), cedarTrimMat);
    beam.position.set(-3.9, 2.52, rz);
    interiorGroup.add(beam);
  }
  for (const cz of [-2.94, -5.86]) {
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.11, 2.44, 0.11), cedarTrimMat);
    post.position.set(-5.07, 1.36, cz);
    interiorGroup.add(post);
  }

  // Compact Stainless Range Hood ("換気扇") tucked cleanly into far north stove corner (Z=-5.48, ZERO menu overlap!)
  const kHood = new THREE.Mesh(new RoundedBoxGeometry(0.48, 0.28, 0.78, 2, 0.015), stainlessMat);
  kHood.position.set(-4.87, 2.4, -5.48);
  const kHoodBaffle = new THREE.Mesh(
    new THREE.PlaneGeometry(0.7, 0.16),
    new THREE.MeshStandardMaterial({ color: 0x1b1e22, roughness: 0.7, metalness: 0.6 })
  );
  kHoodBaffle.rotation.y = Math.PI / 2;
  kHoodBaffle.rotation.x = 0.25;
  kHoodBaffle.position.set(-4.628, 2.31, -5.48);
  interiorGroup.add(kHood, kHoodBaffle);

  // Seasoned Hinoki Ramen Counter with slatted wood front apron & floor contact AO shadow
  const counterBase = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.82, 2.68), cedarTrimMat);
  counterBase.position.set(-4.15, 0.55, -4.4);
  for (let slatZ = -5.65; slatZ <= -3.15; slatZ += 0.16) {
    const slat = new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.8, 0.032), hardwareMat);
    slat.position.set(-3.87, 0.55, slatZ);
    interiorGroup.add(slat);
  }
  const counterAo = new THREE.Mesh(new THREE.PlaneGeometry(0.82, 2.82), aoShadowMat);
  counterAo.rotation.x = -Math.PI / 2;
  counterAo.position.set(-3.98, 0.145, -4.4);
  const counterTop = new THREE.Mesh(new RoundedBoxGeometry(0.72, 0.058, 2.78, 2, 0.014), hinokiMat);
  counterTop.position.set(-4.08, 0.99, -4.4);
  const counterLip = new THREE.Mesh(new RoundedBoxGeometry(0.18, 0.115, 2.74, 2, 0.01), hinokiMat);
  counterLip.position.set(-4.35, 1.075, -4.4);
  interiorGroup.add(counterBase, counterAo, counterTop, counterLip);

  // 3 Classic Showa Burgundy-Red Vinyl Padded Counter Stools with chrome rim & contact shadows!
  const stoolCushionMat = new THREE.MeshPhysicalMaterial({
    color: 0x6f1e1a,
    roughness: 0.44,
    metalness: 0.04,
    clearcoat: 0.28,
    clearcoatRoughness: 0.35,
  });
  const stoolCushionGeo = new THREE.CylinderGeometry(0.162, 0.166, 0.062, 20);
  const stoolRimGeo = new THREE.CylinderGeometry(0.168, 0.168, 0.016, 20);
  const intStoolLegGeo = new THREE.CylinderGeometry(0.013, 0.011, 0.54, 8);
  const intFootRingGeo = new THREE.TorusGeometry(0.108, 0.009, 6, 18);
  intFootRingGeo.rotateX(Math.PI / 2);
  const stoolShadowGeo = new THREE.CircleGeometry(0.21, 16);
  stoolShadowGeo.rotateX(-Math.PI / 2);
  for (const [sz, xOff] of [
    [-3.64, 0.02],
    [-4.4, -0.03],
    [-5.14, 0.01],
  ]) {
    const sg = new THREE.Group();
    const cushion = new THREE.Mesh(stoolCushionGeo, stoolCushionMat);
    cushion.position.y = 0.565;
    const chromeRim = new THREE.Mesh(stoolRimGeo, stainlessMat);
    chromeRim.position.y = 0.532;
    const footRing = new THREE.Mesh(intFootRingGeo, stainlessMat);
    footRing.position.y = 0.2;
    const aoDisc = new THREE.Mesh(stoolShadowGeo, aoShadowMat);
    aoDisc.position.y = 0.005;
    sg.add(cushion, chromeRim, footRing, aoDisc);
    for (let li = 0; li < 4; li++) {
      const a = (li * Math.PI) / 2 + Math.PI / 4;
      const leg = new THREE.Mesh(intStoolLegGeo, hardwareMat);
      leg.position.set(Math.cos(a) * 0.108, 0.27, Math.sin(a) * 0.108);
      sg.add(leg);
    }
    sg.position.set(-3.45 + xOff, 0.14, sz);
    interiorGroup.add(sg);
  }

  // Detailed Ceramic Ramen Bowls with red spiral rim band, chashu/egg top, ceramic renge spoons & chopsticks
  const intBowlPts = [
    new THREE.Vector2(0.0, 0.0),
    new THREE.Vector2(0.05, 0.0),
    new THREE.Vector2(0.095, 0.05),
    new THREE.Vector2(0.118, 0.098),
    new THREE.Vector2(0.108, 0.098),
    new THREE.Vector2(0.088, 0.05),
  ];
  const intBowlGeo = new THREE.LatheGeometry(intBowlPts, 20);
  const intBowlMat = new THREE.MeshStandardMaterial({ color: 0x1d1f24, roughness: 0.26, metalness: 0.06 });
  const bowlRimMat = new THREE.MeshStandardMaterial({ color: 0x9c261e, roughness: 0.3 });
  const bowlRimGeo = new THREE.TorusGeometry(0.113, 0.006, 8, 22);
  bowlRimGeo.rotateX(Math.PI / 2);
  const ramenTopMat = new THREE.MeshStandardMaterial({ map: createRamenBowlTopTexture(), roughness: 0.22 });
  const chopstickGeo = new THREE.CylinderGeometry(0.0025, 0.0038, 0.23, 6);
  chopstickGeo.rotateX(Math.PI / 2);
  const rengeMat = new THREE.MeshStandardMaterial({ color: 0xe2dcd0, roughness: 0.22 });
  for (const bz of [-3.82, -4.42]) {
    const bowl = new THREE.Mesh(intBowlGeo, intBowlMat);
    bowl.position.set(-3.94, 1.02, bz);
    const rim = new THREE.Mesh(bowlRimGeo, bowlRimMat);
    rim.position.set(-3.94, 1.116, bz);
    const ramenTop = new THREE.Mesh(new THREE.CircleGeometry(0.102, 18), ramenTopMat);
    ramenTop.rotation.x = -Math.PI / 2;
    ramenTop.position.set(-3.94, 1.098, bz);
    // Porcelain soup spoon ("レンゲ") leaning neatly inside bowl
    const spoon = new THREE.Mesh(new THREE.BoxGeometry(0.022, 0.008, 0.13), rengeMat);
    spoon.position.set(-3.99, 1.12, bz - 0.04);
    spoon.rotation.set(0.45, 0.32, 0.15);
    // Pair of bamboo chopsticks resting beside bowl
    for (const cOff of [0, 0.012]) {
      const stick = new THREE.Mesh(chopstickGeo, hinokiMat);
      stick.position.set(-3.84 + cOff, 1.025, bz + 0.15);
      stick.rotation.y = 0.08;
      interiorGroup.add(stick);
    }
    interiorGroup.add(bowl, rim, ramenTop, spoon);
  }

  // Authentic Ramen Counter Condiments: water pitcher, frosted cups, shoyu, rayu, white pepper, tissue box, chopstick box
  const condGeo = new THREE.LatheGeometry(
    [
      new THREE.Vector2(0.0, 0.0),
      new THREE.Vector2(0.022, 0.0),
      new THREE.Vector2(0.024, 0.065),
      new THREE.Vector2(0.01, 0.105),
      new THREE.Vector2(0.013, 0.118),
    ],
    12
  );
  const condRedMat = new THREE.MeshStandardMaterial({ color: 0x8f221a, roughness: 0.26 });
  const condDarkMat = new THREE.MeshStandardMaterial({ color: 0x261a14, roughness: 0.22 });
  const frostedCupMat = new THREE.MeshPhysicalMaterial({
    color: 0xd0dce6,
    roughness: 0.32,
    transmission: 0.45,
    transparent: true,
    opacity: 0.72,
  });
  const hashiBox = new THREE.Mesh(new RoundedBoxGeometry(0.09, 0.075, 0.24, 2, 0.008), cedarTrimMat);
  hashiBox.position.set(-4.35, 1.16, -4.1);
  const shoyuB = new THREE.Mesh(condGeo, condDarkMat);
  shoyuB.position.set(-4.35, 1.132, -3.86);
  const rayuB = new THREE.Mesh(condGeo, condRedMat);
  rayuB.position.set(-4.35, 1.132, -3.77);
  const pepperTin = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.088, 12), stainlessMat);
  pepperTin.position.set(-4.35, 1.175, -3.69);
  // Cold water pitcher ("ピッチャー") + 2 stacked water tumblers on counter lip
  const pitcher = new THREE.Mesh(new THREE.CylinderGeometry(0.056, 0.068, 0.22, 16), stainlessMat);
  pitcher.position.set(-4.34, 1.24, -4.58);
  const cupGeo = new THREE.CylinderGeometry(0.032, 0.025, 0.085, 12);
  for (const [cx, cz] of [
    [-4.34, -4.74],
    [-4.34, -4.83],
  ]) {
    const cup = new THREE.Mesh(cupGeo, frostedCupMat);
    cup.position.set(cx, 1.175, cz);
    interiorGroup.add(cup);
  }
  // Wooden tissue / napkin box
  const napkinBox = new THREE.Mesh(new RoundedBoxGeometry(0.11, 0.065, 0.21, 2, 0.008), hinokiMat);
  napkinBox.position.set(-4.34, 1.165, -5.06);
  interiorGroup.add(hashiBox, shoyuB, rayuB, pepperTin, pitcher, napkinBox);

  // Back Kitchen Stainless Prep Table, Simmering Tonkotsu Stockpot ("寸胴鍋") under corner hood & Rice Cooker
  const prepTable = new THREE.Mesh(new RoundedBoxGeometry(0.52, 0.04, 2.7, 2, 0.008), stainlessMat);
  prepTable.position.set(-4.84, 0.96, -4.4);
  const potMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.17, 0.32, 20), stainlessMat);
  potMesh.position.set(-4.82, 1.14, -5.42);
  const potRim = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.01, 8, 20), hardwareMat);
  potRim.rotation.x = Math.PI / 2;
  potRim.position.set(-4.82, 1.3, -5.42);
  const potLadle = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.4, 6), stainlessMat);
  potLadle.position.set(-4.76, 1.33, -5.35);
  potLadle.rotation.set(0.32, 0, -0.25);
  // Electric Japanese rice cooker ("炊飯器") on left prep table
  const riceCooker = new THREE.Mesh(
    new THREE.CylinderGeometry(0.13, 0.14, 0.21, 16),
    new THREE.MeshStandardMaterial({ color: 0xc8c2b6, roughness: 0.42, metalness: 0.12 })
  );
  riceCooker.position.set(-4.78, 1.09, -3.42);
  interiorGroup.add(prepTable, potMesh, potRim, potLadle, riceCooker);

  // Cleanly positioned Back Kitchen Shelf (Y=1.34, well BELOW all upper wall menu slips & clock — ZERO overlap!)
  const backShelf = new THREE.Mesh(new RoundedBoxGeometry(0.22, 0.032, 1.98, 2, 0.006), cedarTrimMat);
  backShelf.position.set(-4.99, 1.34, -4.08);
  interiorGroup.add(backShelf);

  const sakeBottleGeo = new THREE.LatheGeometry(
    [
      new THREE.Vector2(0.0, 0.0),
      new THREE.Vector2(0.036, 0.0),
      new THREE.Vector2(0.036, 0.145),
      new THREE.Vector2(0.013, 0.2),
      new THREE.Vector2(0.012, 0.26),
      new THREE.Vector2(0.015, 0.27),
    ],
    12
  );
  const sakeGreenMat = new THREE.MeshStandardMaterial({ color: 0x1a4428, roughness: 0.22 });
  const sakeAmberMat = new THREE.MeshStandardMaterial({ color: 0x4f2610, roughness: 0.22 });
  const labelBandGeo = new THREE.CylinderGeometry(0.037, 0.037, 0.072, 12, 1, true);
  const labelPaperMat = new THREE.MeshStandardMaterial({ color: 0xd8ccb4, roughness: 0.85 });
  for (const [bz, isGreen, sc] of [
    [-3.22, true, 1.0],
    [-3.32, false, 0.92],
    [-3.45, true, 1.02],
    [-4.12, false, 0.95],
    [-4.22, true, 1.0],
  ]) {
    const bt = new THREE.Mesh(sakeBottleGeo, isGreen ? sakeGreenMat : sakeAmberMat);
    bt.position.set(-4.98, 1.356, bz);
    bt.scale.setScalar(sc);
    const lbl = new THREE.Mesh(labelBandGeo, labelPaperMat);
    lbl.position.set(-4.98, 1.356 + 0.08 * sc, bz);
    lbl.scale.setScalar(sc);
    interiorGroup.add(bt, lbl);
  }

  // Stack of spare porcelain bowls + folded white oshibori towels cleanly seated on back shelf
  for (let sb = 0; sb < 3; sb++) {
    const spare = new THREE.Mesh(intBowlGeo, intBowlMat);
    spare.position.set(-4.97, 1.356 + sb * 0.03, -4.64);
    interiorGroup.add(spare);
  }
  const towelMat = new THREE.MeshStandardMaterial({ color: 0xd8d2c6, roughness: 0.94 });
  for (let tw = 0; tw < 3; tw++) {
    const towel = new THREE.Mesh(new RoundedBoxGeometry(0.15, 0.024, 0.2, 2, 0.008), towelMat);
    towel.position.set(-4.97, 1.372 + tw * 0.026, -3.76);
    towel.rotation.y = (tw - 1) * 0.06;
    interiorGroup.add(towel);
  }

  // 2 Cozy hanging warm enamel pendant shades centered cleanly forward over the Hinoki counter (zero hood clipping!)
  const intShadePts = [
    new THREE.Vector2(0.02, 0.1),
    new THREE.Vector2(0.048, 0.078),
    new THREE.Vector2(0.155, 0.0),
    new THREE.Vector2(0.165, -0.01),
  ];
  const intShadeGeo = new THREE.LatheGeometry(intShadePts, 16);
  const intShadeMat = new THREE.MeshStandardMaterial({ color: 0x241b15, roughness: 0.52, metalness: 0.25, side: THREE.DoubleSide });
  const intBulbMat = new THREE.MeshBasicMaterial({ color: 0xffd592 });
  for (const lz of [-3.82, -4.68]) {
    const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.45, 6), hardwareMat);
    cord.position.set(-3.86, 2.35, lz);
    const shade = new THREE.Mesh(intShadeGeo, intShadeMat);
    shade.position.set(-3.86, 2.06, lz);
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.032, 10, 10), intBulbMat);
    bulb.position.set(-3.86, 2.07, lz);
    interiorGroup.add(cord, shade, bulb);
  }
  group.add(interiorGroup);

  const shojiHitMeshes = [];
  function buildKoshiShojiDoor() {
    const door = new THREE.Group();
    const w = 1.16;
    const h = 2.16;

    // Frosted glowing backing washi paper plane facing +X toward alley
    const backing = new THREE.Mesh(new THREE.BoxGeometry(0.018, h - 0.08, w - 0.08), shojiMat);
    backing.position.x = -0.008;
    door.add(backing);
    shojiHitMeshes.push(backing);

    // Outer perimeter cedar stiles & top/bottom rails
    const leftStile = new THREE.Mesh(new RoundedBoxGeometry(0.052, h, 0.055, 2, 0.006), cedarTrimMat);
    leftStile.position.z = w * 0.5 - 0.0275;
    const rightStile = leftStile.clone();
    rightStile.position.z = -w * 0.5 + 0.0275;
    const topRail = new THREE.Mesh(new RoundedBoxGeometry(0.052, 0.06, w, 2, 0.006), cedarTrimMat);
    topRail.position.y = h * 0.5 - 0.03;
    const bottomRail = new THREE.Mesh(new RoundedBoxGeometry(0.052, 0.07, w, 2, 0.006), cedarTrimMat);
    bottomRail.position.y = -h * 0.5 + 0.035;
    door.add(leftStile, rightStile, topRail, bottomRail);

    // Lower solid wooden wainscot panel (koshita, bottom 0.58m) + middle rail
    const wainscotH = 0.58;
    const wainscot = new THREE.Mesh(
      new RoundedBoxGeometry(0.038, wainscotH, w - 0.09, 2, 0.005),
      cedarTrimMat
    );
    wainscot.position.set(0.004, -h * 0.5 + 0.06 + wainscotH * 0.5, 0);
    const midRail = new THREE.Mesh(new RoundedBoxGeometry(0.052, 0.048, w - 0.04, 2, 0.005), cedarTrimMat);
    midRail.position.set(0, -h * 0.5 + 0.06 + wainscotH, 0);
    door.add(wainscot, midRail);

    // Real 3D slender vertical Koshi cedar lattice mullions across upper glazed section
    const glazedBottom = -h * 0.5 + 0.08 + wainscotH;
    const glazedTop = h * 0.5 - 0.05;
    const glazedH = glazedTop - glazedBottom;
    const glazedMidY = (glazedBottom + glazedTop) * 0.5;
    const slatGeo = new THREE.BoxGeometry(0.022, glazedH, 0.016);
    for (let z = -w * 0.5 + 0.11; z <= w * 0.5 - 0.10; z += 0.11) {
      const slat = new THREE.Mesh(slatGeo, cedarTrimMat);
      slat.position.set(0.015, glazedMidY, z);
      slat.castShadow = true;
      door.add(slat);
    }

    // 3 real horizontal cross-bars across upper lattice
    const horizGeo = new THREE.BoxGeometry(0.024, 0.022, w - 0.08);
    for (const frac of [0.25, 0.52, 0.78]) {
      const hBar = new THREE.Mesh(horizGeo, cedarTrimMat);
      hBar.position.set(0.016, glazedBottom + glazedH * frac, 0);
      hBar.castShadow = true;
      door.add(hBar);
    }

    // Recessed dark iron sliding door pull handle (hikite)
    const pull = new THREE.Mesh(new RoundedBoxGeometry(0.018, 0.11, 0.038, 2, 0.004), hardwareMat);
    pull.position.set(0.022, -0.14, -w * 0.5 + 0.11);
    door.add(pull);

    return door;
  }

  const shojiDoorLeft = buildKoshiShojiDoor();
  shojiDoorLeft.position.set(-2.59, 1.22, -3.85);
  const shojiDoorRight = buildKoshiShojiDoor();
  shojiDoorRight.position.set(-2.65, 1.22, -4.95);
  group.add(shojiDoorLeft, shojiDoorRight);

  let doorOpen = false;
  let doorSlide = 0;

  // Sloped Kawara-style corrugated rain eave (projecting to X = -2.05, Y = 2.66)
  const l1Eave = addBox(0.7, 0.08, 7.6, -2.35, 2.68, -4.2, metalMat, { bevel: 0.015 });
  l1Eave.rotation.z = -0.22;

  // Dark bamboo hanging pole + iron hooks + 4 draped indigo Noren panels
  const bambooPole = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 2.58, 10), cedarTrimMat);
  bambooPole.rotation.x = Math.PI / 2;
  bambooPole.position.set(-2.14, 2.53, -4.39);
  bambooPole.castShadow = true;
  group.add(bambooPole);
  for (const hz of [-3.22, -5.56]) {
    const hook = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.022, 0.024), hardwareMat);
    hook.position.set(-2.27, 2.53, hz);
    group.add(hook);
  }

  const norenTex = createNorenCurtainTexture('らーめん');
  const norenMat = new THREE.MeshStandardMaterial({
    map: norenTex,
    roughness: 0.96,
    metalness: 0.0,
    side: THREE.DoubleSide,
  });
  const norenPanels = [];
  for (let n = 0; n < 4; n++) {
    const nGeo = new THREE.PlaneGeometry(0.5, 0.58, 6, 8);
    // Subtle natural cloth wave fold across width
    const pos = nGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const px = pos.getX(i);
      const py = pos.getY(i);
      const wave = Math.sin((px / 0.25) * Math.PI * 1.1 + n) * 0.014 * (0.29 - py);
      pos.setZ(i, wave);
    }
    nGeo.computeVertexNormals();
    const noren = new THREE.Mesh(nGeo, norenMat);
    noren.rotation.y = Math.PI / 2;
    noren.position.set(-2.14, 2.24, -3.55 - n * 0.56);
    noren.castShadow = true;
    group.add(noren);

    // Top fabric hanging loops wrapping around the bamboo pole
    for (const lz of [-0.15, 0.15]) {
      const loop = new THREE.Mesh(new THREE.CylinderGeometry(0.019, 0.019, 0.045, 8), norenMat);
      loop.rotation.x = Math.PI / 2;
      loop.position.set(-2.14, 2.535, noren.position.z + lz);
      group.add(loop);
    }
    norenPanels.push(noren);
  }

  // --- L2: Ceramic-Tile Izakaya Bar Building (Z = -8.5..-16.5) ---
  addBox(0.4, 8.2, 8.0, -2.85, 4.1, -12.5, tileDarkMat, { tile: 1.8 });
  // Half-open ribbed metal shutter + recessed doorway shadow
  addBox(0.08, 1.25, 3.2, -2.62, 2.08, -12.2, shutterMat, { tile: 1.5 });
  addBox(0.35, 1.45, 3.1, -2.84, 0.86, -12.2, cableMat, { castShadow: false });
  // Upper floor windows with hollow 4-piece aluminum frames (zero coplanar Z-fighting!)
  const upperWinTex = createLitWindowTexture('#244e6f');
  const upperWinMat = new THREE.MeshStandardMaterial({
    map: upperWinTex.map,
    emissiveMap: upperWinTex.emissiveMap,
    emissive: 0xffffff,
    emissiveIntensity: 0.62,
    roughness: 0.58,
    metalness: 0.08,
  });
  for (const wz of [-10.5, -14.2]) {
    // 4 separate perimeter frame bars around the recessed window (no backing box behind glass)
    addBox(0.08, 0.08, 1.54, -2.6, 5.21, wz, metalMat, { bevel: 0.01 });
    addBox(0.09, 0.09, 1.56, -2.59, 3.59, wz, metalMat, { bevel: 0.01 });
    addBox(0.08, 1.66, 0.08, -2.6, 4.4, wz - 0.73, metalMat, { bevel: 0.01 });
    addBox(0.08, 1.66, 0.08, -2.6, 4.4, wz + 0.73, metalMat, { bevel: 0.01 });
    const win = new THREE.Mesh(new THREE.PlaneGeometry(1.38, 1.54), upperWinMat);
    win.rotation.y = Math.PI / 2;
    win.position.set(-2.59, 4.4, wz);
    group.add(win);
  }

  // Vertical Neon Blade Sign: 居酒屋 24H (cyan/magenta) on bolted steel wall struts (Y = 3.95)
  const neonL2Ctrl = buildBladeNeonSign(
    ['居', '酒', '屋'],
    '24H',
    '#4af2ff',
    '#0b1b29',
    -2.2,
    3.95,
    -12.2,
    1,
    metalMat
  );
  group.add(neonL2Ctrl.group);

  // --- L3: Deep Alley Multi-Story Building (Z = -16.5..-26.5) ---
  addBox(0.4, 9.0, 10.0, -2.85, 4.5, -21.5, tileBeigeMat, { tile: 1.8 });

  // =========================================================================
  // 3. RIGHT ALLEY FACADES (Main wall plane at X = +2.65)
  // =========================================================================

  // --- R1: Closed Corrugated Shutter Storefront (Z = +2.5..-7.5) ---
  addBox(0.4, 7.2, 10.0, 2.85, 3.6, -2.5, tileBeigeMat, { tile: 1.8 });
  addBox(0.1, 2.45, 4.4, 2.62, 1.36, -3.2, shutterMat, { tile: 1.6 });
  addBox(0.24, 2.8, 0.28, 2.6, 1.54, -0.85, curbMat, { bevel: 0.02 });
  addBox(0.24, 2.8, 0.28, 2.6, 1.54, -5.55, curbMat, { bevel: 0.02 });

  // --- R2: Recessed Vending Alcove + Amber Neon Sign "ラーメン 深夜" (Z = -7.5..-15.5) ---
  addBox(0.4, 8.4, 2.8, 2.85, 4.2, -8.9, tileDarkMat, { tile: 1.8 });
  addBox(0.4, 8.4, 2.7, 2.85, 4.2, -14.15, tileDarkMat, { tile: 1.8 });
  addBox(0.4, 5.7, 2.5, 2.85, 5.55, -11.55, tileDarkMat, { tile: 1.8 }); // upper wall above alcove
  addBox(0.4, 2.75, 2.7, 3.32, 1.48, -11.55, tileDarkMat, { tile: 1.8 }); // recessed alcove back wall

  const neonR2 = buildBladeNeonSign(
    ['ラ', 'ー', 'メ', 'ン'],
    '深夜',
    '#ff7d3b',
    '#240b09',
    2.2,
    4.05,
    -10.2,
    -1,
    metalMat
  );
  group.add(neonR2.group);

  // --- R3: Ramen Kitchen Side Counter & Stainless Exhaust Hood (Z = -15.5..-26.5) ---
  addBox(0.4, 8.5, 11.0, 2.85, 4.25, -21.0, tileDarkMat, { tile: 1.8 });
  // Glowing horizontal timber counter window (matte frosted paper -> zero harsh white sunspot!)
  const counterGlass = new THREE.Mesh(
    new THREE.PlaneGeometry(3.8, 0.95),
    new THREE.MeshStandardMaterial({
      map: shojiTex.map,
      emissiveMap: shojiTex.emissiveMap,
      emissive: 0xffa04a,
      emissiveIntensity: 0.54,
      roughness: 0.98,
      metalness: 0.0,
    })
  );
  counterGlass.rotation.y = -Math.PI / 2;
  counterGlass.position.set(2.58, 1.65, -19.2);
  group.add(counterGlass);

  // Outer frame + 2 horizontal bars + vertical Koshi mullions clearly in front of counterGlass
  addBox(0.06, 0.045, 3.88, 2.57, 2.13, -19.2, cedarTrimMat, { bevel: 0.006 });
  addBox(0.06, 0.055, 3.88, 2.57, 1.17, -19.2, cedarTrimMat, { bevel: 0.006 });
  for (const hy of [1.48, 1.82]) {
    addBox(0.028, 0.022, 3.8, 2.555, hy, -19.2, cedarTrimMat);
  }
  for (let kz = -17.35; kz >= -21.05; kz -= 0.34) {
    addBox(0.028, 0.96, 0.022, 2.555, 1.65, kz, cedarTrimMat);
  }

  // Ribbed metal rain awning over R3 counter (Y = 2.68)
  const r3Awning = addBox(0.68, 0.08, 4.6, 2.35, 2.68, -19.2, metalMat, { bevel: 0.015 });
  r3Awning.rotation.z = 0.2;

  // Physically coherent brushed-stainless exhaust hood, welded collar, bolted wall clamps & open louver vent
  const steelHoodMat = new THREE.MeshStandardMaterial({ color: 0x5d656e, roughness: 0.48, metalness: 0.65 });
  const hoodShape = new THREE.Shape();
  hoodShape.moveTo(0, 0);
  hoodShape.lineTo(-0.56, 0);
  hoodShape.lineTo(-0.56, 0.14);
  hoodShape.lineTo(-0.24, 0.48);
  hoodShape.lineTo(0, 0.48);
  hoodShape.closePath();
  const hoodGeo = new THREE.ExtrudeGeometry(hoodShape, { depth: 1.06, bevelEnabled: true, bevelThickness: 0.015, bevelSize: 0.015, bevelSegments: 2 });
  const hoodMesh = new THREE.Mesh(hoodGeo, steelHoodMat);
  hoodMesh.position.set(2.65, 2.02, -23.23);
  hoodMesh.castShadow = true;

  // Recessed dark louvered vent opening facing outward into alley (-X) where steam visibly vents out!
  const louverOpening = new THREE.Mesh(
    new THREE.PlaneGeometry(0.92, 0.11),
    new THREE.MeshBasicMaterial({ color: 0x090b0e })
  );
  louverOpening.rotation.y = -Math.PI / 2;
  louverOpening.position.set(2.072, 2.09, -22.7);
  for (let ly = 2.055; ly <= 2.125; ly += 0.025) {
    const slat = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.008, 0.92), steelHoodMat);
    slat.position.set(2.068, ly, -22.7);
    slat.rotation.z = 0.35;
    group.add(slat);
  }

  // Welded duct collar seated FLUSH into top of hood + vertical galvanized duct + 3 bolted wall clamps
  const ductCollar = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.22, 0.16, 16), steelHoodMat);
  ductCollar.position.set(2.49, 2.52, -22.7);
  const duct = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 3.8, 16), steelHoodMat);
  duct.position.set(2.49, 4.44, -22.7);
  duct.castShadow = true;
  for (const cy of [3.2, 4.6, 6.0]) {
    const clamp = new THREE.Mesh(new THREE.CylinderGeometry(0.175, 0.175, 0.06, 16), hardwareMat);
    clamp.position.set(2.49, cy, -22.7);
    const tie = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.05, 0.08), hardwareMat);
    tie.position.set(2.58, cy, -22.7);
    group.add(clamp, tie);
  }
  group.add(hoodMesh, louverOpening, ductCollar, duct);

  // Rainwater downspouts flush on both sides
  for (const [dx, dz] of [
    [-2.58, -8.45],
    [-2.58, -16.45],
    [2.58, -7.45],
    [2.58, -15.45],
  ]) {
    const spout = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 7.6, 10), metalMat);
    spout.position.set(dx, 3.8, dz);
    group.add(spout);
  }

  // =========================================================================
  // 4. CONCRETE UTILITY POLES, TRANSFORMERS, STREETLAMPS & 18 OVERHEAD CABLES
  // =========================================================================
  const poleConfigs = [
    { x: -1.94, z: -8.65, dirX: 1 },
    { x: 1.94, z: -15.65, dirX: -1 },
  ];
  for (const pc of poleConfigs) {
    const poleGroup = buildUtilityPole(curbMat, metalMat, pc.dirX);
    snapToFloor(poleGroup, pc.x, pc.z, 0.0);
    group.add(poleGroup);
  }

  // 18 crisscrossing sagging overhead power cables (Y = 5.4..6.35)
  const cableSpans = [
    [[-1.94, 5.9, -8.65], [1.94, 5.9, -15.65]],
    [[-1.94, 6.2, -8.65], [1.94, 6.2, -15.65]],
    [[-1.94, 5.7, -8.65], [2.5, 5.3, -6.5]],
    [[-1.94, 6.1, -8.65], [-2.5, 5.4, -2.5]],
    [[-1.94, 6.3, -8.65], [-2.5, 5.8, -16.2]],
    [[1.94, 5.8, -15.65], [-2.5, 5.5, -19.5]],
    [[1.94, 6.15, -15.65], [2.5, 5.6, -21.5]],
    [[-2.5, 5.1, -4.5], [2.5, 5.2, -5.2]],
    [[-2.5, 5.6, -11.5], [2.5, 5.7, -12.8]],
    [[-2.5, 5.2, -18.2], [2.5, 5.3, -17.8]],
    [[-2.5, 5.9, -22.5], [2.5, 5.8, -23.4]],
  ];
  for (const [a, b] of cableSpans) {
    const mid = [
      (a[0] + b[0]) * 0.5,
      Math.min(a[1], b[1]) - 0.42,
      (a[2] + b[2]) * 0.5,
    ];
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(...a),
      new THREE.Vector3(...mid),
      new THREE.Vector3(...b),
    ]);
    fineDetailGroup.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 14, 0.016, 6, false), cableMat));
  }

  // =========================================================================
  // 5. SHINJUKU CROSS-STREET INTERSECTION, STOREFRONTS & ZAKKYO BUILDINGS
  // =========================================================================
  // Wet cross-street asphalt extending horizontally across the alley exit
  const crossRoad = new THREE.Mesh(new THREE.PlaneGeometry(46.0, 18.0), asphaltMat);
  crossRoad.rotation.x = -Math.PI / 2;
  crossRoad.position.set(0, -0.004, -34.0);
  crossRoad.receiveShadow = true;
  group.add(crossRoad);

  // Far cross-street sidewalk curb (Y = 0.14)
  addBox(46.0, 0.14, 4.4, 0, 0.07, -40.5, curbMat, { bevel: 0.025 });

  // Slightly weathered painted white zebra crosswalk stripes (横断歩道)
  const stripeMat = new THREE.MeshStandardMaterial({
    color: 0xa4acb5,
    roughness: 0.84,
    transparent: true,
    opacity: 0.42,
  });
  for (let sx = -2.2; sx <= 2.2; sx += 0.62) {
    const stripe = new THREE.Mesh(new THREE.PlaneGeometry(0.32, 1.65), stripeMat);
    stripe.rotation.x = -Math.PI / 2;
    stripe.position.set(sx, 0.002, -28.8);
    fineDetailGroup.add(stripe);
  }

  // Realistic angled cobra-head steel streetlamps illuminating cross-street wet asphalt
  for (const [lx, dirX, col] of [
    [-5.8, 1, 0x9cd0ff],
    [6.0, -1, 0xffad66],
  ]) {
    const cPole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.11, 6.2, 12), metalMat);
    cPole.position.set(lx, 3.1, -38.6);
    const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.04, 1.35, 8), metalMat);
    arm.rotation.z = dirX * -1.3;
    arm.position.set(lx + dirX * 0.56, 6.22, -38.6);
    const cHead = new THREE.Mesh(new RoundedBoxGeometry(0.46, 0.1, 0.24, 2, 0.025), metalMat);
    cHead.position.set(lx + dirX * 1.15, 6.36, -38.6);
    const cLens = new THREE.Mesh(
      new THREE.PlaneGeometry(0.34, 0.16),
      new THREE.MeshBasicMaterial({ color: col })
    );
    cLens.rotation.x = Math.PI / 2;
    cLens.position.set(lx + dirX * 1.15, 6.305, -38.6);
    group.add(cPole, arm, cHead, cLens);
  }

  // Japanese painted steel pedestrian guardrails along far curb
  const railWhiteMat = new THREE.MeshStandardMaterial({ color: 0x89929c, roughness: 0.62, metalness: 0.42 });
  for (const gxCenter of [-7.5, 7.5]) {
    for (const ry of [0.5, 0.84]) {
      const bar = new THREE.Mesh(new RoundedBoxGeometry(8.6, 0.055, 0.055, 2, 0.01), railWhiteMat);
      bar.position.set(gxCenter, ry, -38.55);
      fineDetailGroup.add(bar);
    }
    for (let px = gxCenter - 4.0; px <= gxCenter + 4.0; px += 2.0) {
      const post = new THREE.Mesh(new RoundedBoxGeometry(0.07, 0.88, 0.07, 2, 0.01), railWhiteMat);
      post.position.set(px, 0.58, -38.55);
      fineDetailGroup.add(post);
    }
  }

  // Pedestrian traffic signal pole on far-right crosswalk corner
  const sigPole = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.07, 3.6, 10), metalMat);
  sigPole.position.set(3.25, 1.94, -38.65);
  const sigBox = new THREE.Mesh(new RoundedBoxGeometry(0.24, 0.56, 0.18, 2, 0.02), metalMat);
  sigBox.position.set(3.25, 3.12, -38.52);
  const sigRed = new THREE.Mesh(
    new THREE.PlaneGeometry(0.14, 0.14),
    new THREE.MeshBasicMaterial({ color: 0xff3b30 })
  );
  sigRed.position.set(3.25, 3.24, -38.425);
  group.add(sigPole, sigBox, sigRed);

  // Realistic 6-7 story Japanese Zakkyo commercial buildings framing far cross-street
  const bldgTexA = createShinjukuBuildingTextures(maxAnisotropy, 101, 'office');
  const bldgTexB = createShinjukuBuildingTextures(maxAnisotropy, 207, 'brick');
  const konbiniTex = createKonbiniStorefrontTexture();

  const zakkyoSpecs = [
    { x: -7.4, z: -44.8, w: 11.2, h: 22.0, d: 8.6, tex: bldgTexA, store: 'konbini', repeat: [1.1, 1.1] },
    { x: 7.7, z: -45.2, w: 11.6, h: 24.5, d: 8.8, tex: bldgTexB, store: 'izakaya', repeat: [1.1, 1.25] },
  ];

  for (const zb of zakkyoSpecs) {
    const bGroup = new THREE.Group();
    const mapTex = zb.tex.map.clone();
    const roughTex = zb.tex.roughnessMap.clone();
    const normTex = zb.tex.normalMap.clone();
    const emTex = zb.tex.emissiveMap.clone();
    for (const t of [mapTex, roughTex, normTex, emTex]) {
      t.needsUpdate = true;
      t.repeat.set(zb.repeat[0], zb.repeat[1]);
    }

    const upperH = zb.h - 3.6;
    const upperBody = new THREE.Mesh(
      new THREE.BoxGeometry(zb.w, upperH, zb.d - 0.16),
      new THREE.MeshStandardMaterial({
        map: mapTex,
        roughnessMap: roughTex,
        normalMap: normTex,
        normalScale: new THREE.Vector2(0.45, 0.45),
        emissiveMap: emTex,
        emissive: 0xffffff,
        emissiveIntensity: 0.62,
        roughness: 0.88,
        metalness: 0.05,
      })
    );
    upperBody.position.set(zb.x, 3.6 + upperH * 0.5, zb.z - 0.08);
    bGroup.add(upperBody);

    // 3D architectural floor slab ledges & balcony railings every 3.4m
    const frontZ = zb.z + zb.d * 0.5;
    for (let ly = 3.6; ly < zb.h - 1.5; ly += 3.4) {
      const ledge = new THREE.Mesh(new RoundedBoxGeometry(zb.w + 0.18, 0.18, 0.52, 2, 0.025), curbMat);
      ledge.position.set(zb.x, ly, frontZ + 0.24);
      const rail = new THREE.Mesh(new THREE.BoxGeometry(zb.w + 0.06, 0.04, 0.04), metalMat);
      rail.position.set(zb.x, ly + 0.75, frontZ + 0.44);
      bGroup.add(ledge, rail);
    }

    // Ground-floor dark concrete arcade piers + clearly offset storefront bay (12cm clear, zero Z-fighting!)
    const groundBack = new THREE.Mesh(new THREE.BoxGeometry(zb.w, 3.46, zb.d - 0.16), curbMat);
    groundBack.position.set(zb.x, 0.14 + 1.73, zb.z - 0.08);
    bGroup.add(groundBack);
    for (const px of [-zb.w * 0.46, 0, zb.w * 0.46]) {
      const pier = new THREE.Mesh(new RoundedBoxGeometry(0.56, 3.46, 0.44, 2, 0.02), curbMat);
      pier.position.set(zb.x + px, 0.14 + 1.73, frontZ + 0.22);
      bGroup.add(pier);
    }

    // Storefront awning + illuminated recessed fascia/shop interior
    const awning = new THREE.Mesh(new RoundedBoxGeometry(zb.w - 0.6, 0.14, 1.05, 2, 0.02), metalMat);
    awning.position.set(zb.x, 3.45, frontZ + 0.52);
    awning.rotation.x = 0.08;
    bGroup.add(awning);

    if (zb.store === 'konbini') {
      const shopFace = new THREE.Mesh(
        new THREE.PlaneGeometry(zb.w - 1.4, 3.05),
        new THREE.MeshStandardMaterial({
          map: konbiniTex.map,
          emissiveMap: konbiniTex.emissiveMap,
          emissive: 0xffffff,
          emissiveIntensity: 0.72,
          roughness: 0.45,
        })
      );
      shopFace.position.set(zb.x, 1.72, frontZ + 0.12);
      bGroup.add(shopFace);
    } else {
      // Closed shutter left bay + warm timber entrance doorway right bay
      const shBay = new THREE.Mesh(new THREE.BoxGeometry(zb.w * 0.44, 2.75, 0.12), shutterMat);
      shBay.position.set(zb.x - zb.w * 0.23, 1.55, frontZ + 0.12);
      const warmBay = new THREE.Mesh(
        new THREE.PlaneGeometry(zb.w * 0.42, 2.6),
        new THREE.MeshStandardMaterial({
          map: shojiTex.map,
          emissiveMap: shojiTex.emissiveMap,
          emissive: 0xff9b48,
          emissiveIntensity: 0.75,
          roughness: 0.55,
        })
      );
      warmBay.position.set(zb.x + zb.w * 0.22, 1.52, frontZ + 0.12);
      bGroup.add(shBay, warmBay);

      // 3D cedar wood mullions clearly proud of right building Izakaya window bay
      const bayCenterX = zb.x + zb.w * 0.22;
      const bayW = zb.w * 0.42;
      for (const fracY of [0.85, 1.52, 2.2]) {
        const hBar = new THREE.Mesh(new THREE.BoxGeometry(bayW, 0.05, 0.045), cedarTrimMat);
        hBar.position.set(bayCenterX, fracY, frontZ + 0.16);
        bGroup.add(hBar);
      }
      for (let mx = bayCenterX - bayW * 0.45; mx <= bayCenterX + bayW * 0.45; mx += bayW * 0.15) {
        const vBar = new THREE.Mesh(new THREE.BoxGeometry(0.04, 2.6, 0.04), cedarTrimMat);
        vBar.position.set(mx, 1.52, frontZ + 0.16);
        bGroup.add(vBar);
      }
    }

    // Rooftop concrete parapet & HVAC box
    const parapet = new THREE.Mesh(new RoundedBoxGeometry(zb.w + 0.25, 0.55, zb.d + 0.25, 2, 0.03), curbMat);
    parapet.position.set(zb.x, zb.h + 0.25, zb.z);
    bGroup.add(parapet);
    group.add(bGroup);
  }

  // Corner-mounted tenant blade signs bolted cleanly onto building side corners
  const farSign1 = buildBladeNeonSign(
    ['新', '宿', '酒'],
    '24H',
    '#ff587a',
    '#1f0912',
    -2.15,
    5.4,
    -40.3,
    1,
    metalMat
  );
  farSign1.group.rotation.y = Math.PI / 2;
  const farSign2 = buildBladeNeonSign(
    ['珈', '琲', '館'],
    'OPEN',
    '#52e5ff',
    '#091822',
    2.25,
    6.2,
    -40.6,
    -1,
    metalMat
  );
  farSign2.group.rotation.y = Math.PI / 2;
  group.add(farSign1.group, farSign2.group);

  // Distant misty Shinjuku high-rise skyline silhouettes receding into night fog (Z = -59..-70)
  const farSkyTex = createShinjukuBuildingTextures(maxAnisotropy, 319, 'office');
  farSkyTex.map.repeat.set(1.25, 2.2);
  farSkyTex.emissiveMap.repeat.set(1.25, 2.2);
  for (const dt of [
    { x: -1.5, z: -61, w: 14, h: 36, d: 10 },
    { x: -14.5, z: -65, w: 12, h: 40, d: 10 },
    { x: 14.0, z: -66, w: 13, h: 42, d: 10 },
  ]) {
    const tower = new THREE.Mesh(
      new THREE.BoxGeometry(dt.w, dt.h, dt.d),
      new THREE.MeshStandardMaterial({
        map: farSkyTex.map,
        emissiveMap: farSkyTex.emissiveMap,
        emissive: 0x9bb8d8,
        emissiveIntensity: 0.34,
        roughness: 0.72,
      })
    );
    tower.position.set(dt.x, dt.h * 0.5, dt.z);
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.1, 4.5, 8), metalMat);
    mast.position.set(dt.x, dt.h + 2.25, dt.z);
    const beacon = new THREE.Mesh(
      new THREE.SphereGeometry(0.18, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0xff2b2b })
    );
    beacon.position.set(dt.x, dt.h + 4.5, dt.z);
    group.add(tower, mast, beacon);
  }

  // =========================================================================
  // 5b. LIVING 2:14 AM TOKYO CROWN TAXI CRUISING ACROSS FAR INTERSECTION
  // =========================================================================
  const taxiGroup = buildTokyoTaxi();
  taxiGroup.position.set(-18, 0, -33.2);
  group.add(taxiGroup);

  // =========================================================================
  // 6. REAL-TIME RAINDROP-RIPPLED WET ASPHALT REFLECTOR
  // =========================================================================
  const wetReflector = createWetAsphaltReflector();
  scene.add(wetReflector.mesh);

  scene.add(group);

  return {
    group,
    wetReflector,
    shojiHitMeshes,
    forceReflectorUpdate() {
      wetReflector.forceRender();
    },
    toggleShojiDoor() {
      doorOpen = !doorOpen;
      return doorOpen;
    },
    toggleMainNeon() {
      return neonL2Ctrl.toggle();
    },
    update(elapsed, dt = 0.016) {
      wetReflector.update(elapsed);

      // Gentle rain-breeze sway on Noren curtains
      for (let i = 0; i < norenPanels.length; i++) {
        norenPanels[i].rotation.z = Math.sin(elapsed * 1.9 + i * 0.8) * 0.06 + 0.04;
      }

      // Smooth two-track Shoji door slide (left leaf slides right in front of right leaf, revealing open interior!)
      const targetSlide = doorOpen ? -1.04 : 0.0;
      doorSlide = THREE.MathUtils.lerp(doorSlide, targetSlide, Math.min(1, dt * 6.0));
      shojiDoorLeft.position.z = -3.85 + doorSlide;

      // Distant Shinjuku avenue night sedan cruising past in far lanes (Z = -35.8 / -37.6)
      const cycle = (elapsed + 4.5) % 24.0;
      if (cycle < 8.5) {
        const u = cycle / 8.5;
        taxiGroup.visible = true;
        taxiGroup.rotation.y = 0;
        taxiGroup.position.set(-24 + u * 48, 0, -35.6);
      } else if (cycle >= 12.0 && cycle < 20.5) {
        const u = (cycle - 12.0) / 8.5;
        taxiGroup.visible = true;
        taxiGroup.rotation.y = Math.PI;
        taxiGroup.position.set(24 - u * 48, 0, -37.2);
      } else {
        taxiGroup.visible = false;
      }
    },
  };
}

function buildTokyoTaxi() {
  const taxi = new THREE.Group();
  // Sleek dark rain-slicked midnight-obsidian Japanese sedan (reads authentically at distance, zero toy look!)
  const bodyMat = new THREE.MeshPhysicalMaterial({
    color: 0x0b0e14,
    roughness: 0.2,
    metalness: 0.65,
    clearcoat: 0.9,
    clearcoatRoughness: 0.14,
  });
  const trimMat = new THREE.MeshStandardMaterial({ color: 0x5c646e, roughness: 0.35, metalness: 0.8 });
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0x0c141d,
    roughness: 0.1,
    metalness: 0.8,
    clearcoat: 0.9,
  });
  const wheelMat = new THREE.MeshStandardMaterial({ color: 0x0d0f12, roughness: 0.88 });
  const headMat = new THREE.MeshBasicMaterial({ color: 0xfff4da });
  const tailMat = new THREE.MeshBasicMaterial({ color: 0xff221c });
  const lanternMat = new THREE.MeshBasicMaterial({ color: 0xffbe38 });
  const glareTex = createLampGlareTexture();
  const washTex = createHeadlightWashTexture();

  // Lower, sleeker aerodynamic Japanese luxury sedan silhouette (Crown / Cedric night profile)
  const carShape = new THREE.Shape();
  carShape.moveTo(-2.22, 0.28);
  carShape.lineTo(2.26, 0.28);
  carShape.lineTo(2.3, 0.56);
  carShape.lineTo(2.08, 0.78);
  carShape.lineTo(1.16, 0.85);
  carShape.lineTo(0.54, 1.32);
  carShape.lineTo(-0.88, 1.32);
  carShape.lineTo(-1.54, 0.86);
  carShape.lineTo(-2.18, 0.82);
  carShape.lineTo(-2.26, 0.54);
  carShape.closePath();
  const bodyGeo = new THREE.ExtrudeGeometry(carShape, {
    depth: 1.62,
    bevelEnabled: true,
    bevelThickness: 0.09,
    bevelSize: 0.06,
    bevelSegments: 3,
  });
  bodyGeo.translate(0, 0, -0.81);
  const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
  taxi.add(bodyMesh);

  // Tinted curved cabin glass greenhouse + slim subtle roof beacon
  const winBox = new THREE.Mesh(new RoundedBoxGeometry(1.75, 0.38, 1.66, 2, 0.05), glassMat);
  winBox.position.set(-0.2, 1.07, 0);
  const roofLamp = new THREE.Mesh(new RoundedBoxGeometry(0.22, 0.09, 0.26, 2, 0.025), lanternMat);
  roofLamp.position.set(-0.1, 1.4, 0);
  taxi.add(winBox, roofLamp);

  // Dark tires + subtle gunmetal alloy rims
  const wheelGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.22, 16);
  wheelGeo.rotateX(Math.PI / 2);
  const hubGeo = new THREE.CylinderGeometry(0.17, 0.17, 0.23, 12);
  hubGeo.rotateX(Math.PI / 2);
  for (const wx of [-1.36, 1.36]) {
    for (const wz of [-0.79, 0.79]) {
      const w = new THREE.Mesh(wheelGeo, wheelMat);
      w.position.set(wx, 0.3, wz);
      const hub = new THREE.Mesh(hubGeo, trimMat);
      hub.position.set(wx, 0.3, wz);
      taxi.add(w, hub);
    }
  }

  // Slim modern LED/Halogen Headlights (+X) & Wrap-around Red Taillights (-X) + optical glare flares
  for (const lz of [-0.58, 0.58]) {
    const hl = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.09, 0.32), headMat);
    hl.position.set(2.26, 0.62, lz);
    const hlGlare = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glareTex,
        color: 0xfff0cc,
        transparent: true,
        opacity: 0.72,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    hlGlare.position.set(2.34, 0.62, lz);
    hlGlare.scale.set(1.05, 0.68, 1);

    const tl = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.09, 0.36), tailMat);
    tl.position.set(-2.24, 0.66, lz);
    const tlGlare = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glareTex,
        color: 0xff2c20,
        transparent: true,
        opacity: 0.65,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    tlGlare.position.set(-2.32, 0.66, lz);
    tlGlare.scale.set(0.85, 0.52, 1);
    taxi.add(hl, hlGlare, tl, tlGlare);
  }

  // Soft feathered twin-cone headlight wash on wet road + soft red brake glow behind rear bumper
  const headWash = new THREE.Mesh(
    new THREE.PlaneGeometry(7.2, 3.5),
    new THREE.MeshBasicMaterial({
      map: washTex,
      transparent: true,
      opacity: 0.19,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
  );
  headWash.rotation.x = -Math.PI / 2;
  headWash.position.set(5.8, 0.022, 0);

  const tailGlow = new THREE.Mesh(
    new THREE.PlaneGeometry(2.6, 2.2),
    new THREE.MeshBasicMaterial({
      map: glareTex,
      color: 0xff2218,
      transparent: true,
      opacity: 0.16,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
  );
  tailGlow.rotation.x = -Math.PI / 2;
  tailGlow.position.set(-3.1, 0.022, 0);
  taxi.add(headWash, tailGlow);

  return taxi;
}

function buildBladeNeonSign(chars, subText, primaryHex, bgHex, x, y, z, mountDirX, metalMat) {
  const g = new THREE.Group();
  g.position.set(x, y, z);

  const tex = createNeonSignTexture(chars, subText, primaryHex, bgHex);
  const faceMat = new THREE.MeshStandardMaterial({
    map: tex.map,
    emissiveMap: tex.emissiveMap,
    emissive: 0xffffff,
    emissiveIntensity: 0.86,
    roughness: 0.85,
    metalness: 0.0,
  });

  const frame = new THREE.Mesh(new RoundedBoxGeometry(0.14, 1.75, 0.56, 2, 0.02), metalMat);
  frame.castShadow = true;
  g.add(frame);

  for (const sx of [-0.072, 0.072]) {
    const face = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 1.66), faceMat);
    face.rotation.y = sx > 0 ? Math.PI / 2 : -Math.PI / 2;
    face.position.x = sx;
    g.add(face);
  }

  // Bolted steel wall struts flush back to building facade
  for (const sy of [-0.55, 0.55]) {
    const strut = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.055, 0.06), metalMat);
    strut.position.set(-mountDirX * 0.28, sy, 0);
    g.add(strut);
  }

  let enabled = true;
  return {
    group: g,
    toggle() {
      enabled = !enabled;
      faceMat.emissiveIntensity = enabled ? 0.86 : 0.05;
      return enabled;
    },
  };
}

function buildUtilityPole(concreteMat, metalMat, armDirX) {
  const pole = new THREE.Group();
  const cableMat = new THREE.MeshStandardMaterial({ color: 0x0f1216, roughness: 0.72, metalness: 0.2 });
  const porcelainMat = new THREE.MeshStandardMaterial({ color: 0x9aa2aa, roughness: 0.35, metalness: 0.08 });

  // Tapered weathered concrete utility pole
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.165, 6.8, 16), concreteMat);
  mast.position.y = 3.4;
  mast.castShadow = true;
  pole.add(mast);

  // Authentic Japanese yellow-black striped reflective safety wrap ("注意") around lower concrete pole
  const hazardSleeve = new THREE.Mesh(
    new THREE.CylinderGeometry(0.156, 0.163, 0.92, 16, 1, true),
    new THREE.MeshStandardMaterial({ map: createPoleHazardTexture(), roughness: 0.56, metalness: 0.1 })
  );
  hazardSleeve.position.y = 1.38;
  pole.add(hazardSleeve);

  // Enameled blue-and-white Tokyo street block address plate ("歌舞伎町 1-14") bolted facing the alley
  const addrPlaque = new THREE.Mesh(
    new THREE.BoxGeometry(0.015, 0.34, 0.15),
    new THREE.MeshStandardMaterial({ map: createAddressPlaqueTexture(), roughness: 0.45, metalness: 0.25 })
  );
  addrPlaque.position.set(armDirX * 0.155, 2.24, 0);
  pole.add(addrPlaque);

  // Steel mounting bands wrapping pole at transformer & lamp arm height
  const bandGeo = new THREE.TorusGeometry(0.132, 0.012, 6, 16);
  bandGeo.rotateX(Math.PI / 2);
  for (const by of [4.42, 4.92, 5.14]) {
    const band = new THREE.Mesh(bandGeo, metalMat);
    band.position.y = by;
    pole.add(band);
  }

  // Two steel cross-arms + white porcelain insulators
  for (const ay of [5.75, 6.25]) {
    const arm = new THREE.Mesh(new RoundedBoxGeometry(0.12, 0.1, 1.38, 2, 0.015), metalMat);
    arm.position.set(0, ay, 0);
    pole.add(arm);
    for (const iz of [-0.52, 0, 0.52]) {
      const ins = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.042, 0.1, 10), porcelainMat);
      ins.position.set(0, ay + 0.095, iz);
      pole.add(ins);
    }
  }

  // Pole-mounted cylindrical transformer with bolted brackets, top bushings & curved high-voltage jumper cables
  const txX = -armDirX * 0.29;
  const tx = new THREE.Mesh(new THREE.CylinderGeometry(0.21, 0.21, 0.72, 16), metalMat);
  tx.position.set(txX, 4.66, 0);
  tx.castShadow = true;
  const txCap = new THREE.Mesh(new THREE.CylinderGeometry(0.225, 0.225, 0.05, 16), metalMat);
  txCap.position.set(txX, 5.03, 0);
  for (const by of [4.42, 4.92]) {
    const brk = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.045, 0.07), metalMat);
    brk.position.set(txX * 0.5, by, 0);
    pole.add(brk);
  }
  for (const bz of [-0.08, 0.08]) {
    const bushing = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.032, 0.14, 8), porcelainMat);
    bushing.position.set(txX, 5.12, bz);
    const jumpCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(txX, 5.18, bz),
      new THREE.Vector3(txX * 0.75, 5.54, bz * 2.2),
      new THREE.Vector3(0, 5.82, bz * 3.5),
    ]);
    const jumper = new THREE.Mesh(new THREE.TubeGeometry(jumpCurve, 10, 0.011, 6, false), cableMat);
    pole.add(bushing, jumper);
  }
  pole.add(tx, txCap);

  // Heavy curved swan-neck aluminum streetlamp arm + sculpted dark cobra hood + recessed downward diffuser lens
  const neckCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 5.12, 0),
    new THREE.Vector3(armDirX * 0.26, 5.42, 0),
    new THREE.Vector3(armDirX * 0.68, 5.57, 0),
    new THREE.Vector3(armDirX * 0.96, 5.53, 0),
  ]);
  const lampArm = new THREE.Mesh(new THREE.TubeGeometry(neckCurve, 14, 0.031, 8, false), metalMat);
  const strutBar = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.44, 6), metalMat);
  strutBar.position.set(armDirX * 0.22, 5.2, 0);
  strutBar.rotation.z = armDirX * -0.92;
  pole.add(lampArm, strutBar);

  // Sculpted downward-shielded cobra streetlamp fixture (zero light spilling upward!)
  const darkHoodMat = new THREE.MeshStandardMaterial({ color: 0x2c323a, roughness: 0.55, metalness: 0.72 });
  const hood = new THREE.Mesh(new RoundedBoxGeometry(0.48, 0.11, 0.24, 3, 0.04), darkHoodMat);
  hood.position.set(armDirX * 0.98, 5.535, 0);
  const visorSkirt = new THREE.Mesh(new THREE.CylinderGeometry(0.145, 0.165, 0.055, 16, 1, true), darkHoodMat);
  visorSkirt.scale.set(1.32, 1.0, 0.85);
  visorSkirt.position.set(armDirX * 0.99, 5.475, 0);
  const diffuserLens = new THREE.Mesh(
    new THREE.CircleGeometry(0.125, 16),
    new THREE.MeshBasicMaterial({ color: 0xffe4b5 })
  );
  diffuserLens.rotation.x = Math.PI / 2;
  diffuserLens.scale.set(1.3, 0.82, 1);
  diffuserLens.position.set(armDirX * 0.99, 5.478, 0);
  pole.add(hood, visorSkirt, diffuserLens);

  return pole;
}
