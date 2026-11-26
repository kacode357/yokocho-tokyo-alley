import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import {
  createSakeBarrelTexture,
  createChalkboardMenuTexture,
  createWoodMenuSlatTexture,
  createAwningStripeTexture,
  createNoticeBoardTexture,
  createFallenLeafTexture,
  createFoliageFrondTexture,
  createRoadCrackDecalTexture,
  createLanternTexture,
  createYakisugiWoodTextures,
  createWeatheredMetalTextures,
  createPoleHazardTexture,
  createStreetPosterTexture,
  createFireBoxTexture,
  createStandingMenuSignTexture,
  createRoadStopStencilTexture,
  createCardboardTexture,
  createPatioDoorTexture,
} from '../textures/alleyTextures.js';
import { snapToFloor } from '../utils/placement.js';

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
 * High-craft organic ground details & non-boxy Japanese shopfront storytelling props
 * built with LatheGeometry, TubeGeometry, curved canopies & InstancedMesh for locked 60 FPS.
 */
export function buildAlleyDetailProps(scene, maxAnisotropy = 8) {
  const group = new THREE.Group();
  group.name = 'YokochoRichDetails';
  const rng = mulberry32(2026);
  const animatedMiniLanterns = [];

  const woodTex = createYakisugiWoodTextures(maxAnisotropy);
  const metalTex = createWeatheredMetalTextures(maxAnisotropy);

  const darkCedarMat = new THREE.MeshStandardMaterial({
    map: woodTex.map,
    color: 0x453020,
    roughness: 0.88,
    metalness: 0.0,
  });
  const ironMat = new THREE.MeshStandardMaterial({
    map: metalTex.map,
    color: 0x3b4148,
    roughness: 0.62,
    metalness: 0.72,
  });
  const copperMat = new THREE.MeshStandardMaterial({
    color: 0x6c4c3a,
    roughness: 0.48,
    metalness: 0.68,
  });
  const clayTileMat = new THREE.MeshStandardMaterial({
    color: 0x26292e,
    roughness: 0.78,
    metalness: 0.08,
  });
  const ceramicPotMat = new THREE.MeshStandardMaterial({
    color: 0x5c3626,
    roughness: 0.62,
    metalness: 0.04,
  });

  // =========================================================================
  // 1. ORGANIC GROUND DETAILS (InstancedMesh -> ~3 draw calls total!)
  // =========================================================================
  const groundDetailGroup = new THREE.Group();
  groundDetailGroup.userData.skipReflector = true;
  group.add(groundDetailGroup);

  // 1a. 80 Wet Fallen Autumn Leaves along gutters & curb edges (slightly curled!)
  const leafTex = createFallenLeafTexture();
  const leafGeo = new THREE.PlaneGeometry(0.085, 0.085, 2, 2);
  leafGeo.rotateX(-Math.PI / 2);
  const lPos = leafGeo.attributes.position;
  for (let i = 0; i < lPos.count; i++) {
    const lx = lPos.getX(i);
    const lz = lPos.getZ(i);
    lPos.setY(i, (lx * lx + lz * lz) * 3.8);
  }
  leafGeo.computeVertexNormals();

  const leafMat = new THREE.MeshStandardMaterial({
    map: leafTex,
    alphaTest: 0.35,
    roughness: 0.36, // rain-wet leaf sheen
    metalness: 0.0,
    side: THREE.DoubleSide,
  });
  const leafCount = 80;
  const leafInst = new THREE.InstancedMesh(leafGeo, leafMat, leafCount);
  const dummy = new THREE.Object3D();
  const tintCol = new THREE.Color();
  for (let i = 0; i < leafCount; i++) {
    const side = rng() > 0.5 ? 1 : -1;
    const onCurb = rng() < 0.25;
    const x = onCurb ? side * (2.12 + rng() * 0.32) : side * (1.35 + rng() * 0.62);
    const z = 1.8 - rng() * 27.5;
    const y = onCurb ? 0.144 : 0.008;
    const s = 0.75 + rng() * 0.7;
    dummy.position.set(x, y, z);
    dummy.rotation.set((rng() - 0.5) * 0.12, rng() * Math.PI * 2, (rng() - 0.5) * 0.12);
    dummy.scale.set(s, 1, s);
    dummy.updateMatrix();
    leafInst.setMatrixAt(i, dummy.matrix);
    tintCol.setHSL(0.05 + rng() * 0.07, 0.42 + rng() * 0.22, 0.36 + rng() * 0.18);
    leafInst.setColorAt(i, tintCol);
  }
  leafInst.instanceMatrix.needsUpdate = true;
  if (leafInst.instanceColor) leafInst.instanceColor.needsUpdate = true;
  groundDetailGroup.add(leafInst);

  // 1b. 12 Discarded Crushed Aluminum Cans & Paper Cups tucked along curbs
  const debrisGeo = new THREE.CylinderGeometry(0.026, 0.028, 0.095, 10);
  debrisGeo.rotateZ(Math.PI / 2);
  const dPos = debrisGeo.attributes.position;
  for (let i = 0; i < dPos.count; i++) {
    // Slightly dented crushed waist
    const dx = dPos.getX(i);
    if (Math.abs(dx) < 0.025) {
      dPos.setY(i, dPos.getY(i) * 0.62);
    }
  }
  debrisGeo.computeVertexNormals();
  const debrisMat = new THREE.MeshStandardMaterial({ color: 0x9aa4ae, roughness: 0.44, metalness: 0.65 });
  const debrisInst = new THREE.InstancedMesh(debrisGeo, debrisMat, 12);
  const canColors = [0x8c2424, 0x244872, 0x265e42, 0xb89642, 0xbec4ca];
  for (let i = 0; i < 12; i++) {
    const side = i % 2 === 0 ? 1 : -1;
    dummy.position.set(side * (1.76 + rng() * 0.22), 0.025, -1.5 - rng() * 22.0);
    dummy.rotation.set(0, rng() * Math.PI * 2, 0);
    dummy.scale.setScalar(0.85 + rng() * 0.3);
    dummy.updateMatrix();
    debrisInst.setMatrixAt(i, dummy.matrix);
    tintCol.setHex(canColors[i % canColors.length]);
    debrisInst.setColorAt(i, tintCol);
  }
  debrisInst.instanceMatrix.needsUpdate = true;
  if (debrisInst.instanceColor) debrisInst.instanceColor.needsUpdate = true;
  groundDetailGroup.add(debrisInst);

  // 1c. 6 Weathered Hairline Asphalt Cracks & Damp Road Grime Decals flush at Y=0.004
  const crackTex = createRoadCrackDecalTexture();
  const crackMat = new THREE.MeshBasicMaterial({
    map: crackTex,
    transparent: true,
    opacity: 0.65,
    depthWrite: false,
  });
  const crackGeo = new THREE.PlaneGeometry(1.75, 1.75);
  crackGeo.rotateX(-Math.PI / 2);
  for (const [cx, cz, rot] of [
    [-0.4, -2.6, 0.3],
    [0.55, -7.2, 1.9],
    [-0.35, -13.5, 0.9],
    [0.42, -18.6, 2.5],
    [-0.5, -23.4, 1.2],
    [0.15, -31.0, 0.4],
  ]) {
    const decal = new THREE.Mesh(crackGeo, crackMat);
    decal.position.set(cx, 0.004, cz);
    decal.rotation.y = rot;
    groundDetailGroup.add(decal);
  }

  // =========================================================================
  // 2. ORGANIC POTTED STREET PLANTS (Curved LatheGeometry Pots + Arched Fronds)
  // =========================================================================
  const frondTex = createFoliageFrondTexture();
  const frondMat = new THREE.MeshStandardMaterial({
    map: frondTex,
    alphaTest: 0.32,
    roughness: 0.58,
    metalness: 0.0,
    side: THREE.DoubleSide,
  });

  function buildPottedPlant(scale = 1.0) {
    const potGroup = new THREE.Group();
    const potPts = [
      new THREE.Vector2(0.0, 0.0),
      new THREE.Vector2(0.11, 0.0),
      new THREE.Vector2(0.145, 0.14),
      new THREE.Vector2(0.16, 0.27),
      new THREE.Vector2(0.175, 0.295),
      new THREE.Vector2(0.155, 0.305),
      new THREE.Vector2(0.14, 0.26),
    ];
    const pot = new THREE.Mesh(new THREE.LatheGeometry(potPts, 16), ceramicPotMat);
    pot.castShadow = true;
    const soil = new THREE.Mesh(
      new THREE.CircleGeometry(0.14, 12),
      new THREE.MeshStandardMaterial({ color: 0x1a1510, roughness: 0.96 })
    );
    soil.rotation.x = -Math.PI / 2;
    soil.position.y = 0.26;
    potGroup.add(pot, soil);

    // 7 curved drooping bamboo/fern frond blades arching organically outward
    const bladeGeo = new THREE.PlaneGeometry(0.24, 0.54, 1, 5);
    bladeGeo.translate(0, 0.27, 0);
    const bp = bladeGeo.attributes.position;
    for (let i = 0; i < bp.count; i++) {
      const by = bp.getY(i);
      const t = by / 0.54;
      bp.setZ(i, t * t * 0.2); // smooth drooping arc!
    }
    bladeGeo.computeVertexNormals();

    for (let f = 0; f < 7; f++) {
      const ang = (f / 7) * Math.PI * 2 + (f % 2) * 0.25;
      const frond = new THREE.Mesh(bladeGeo, frondMat);
      frond.position.y = 0.25;
      frond.rotation.y = ang;
      frond.rotation.x = 0.18 + (f % 3) * 0.14;
      const sc = 0.82 + (f % 3) * 0.16;
      frond.scale.set(sc, sc, sc);
      potGroup.add(frond);
    }

    potGroup.scale.setScalar(scale);
    return potGroup;
  }

  const plantL1 = buildPottedPlant(1.0);
  snapToFloor(plantL1, -2.32, -6.18, 0.14);
  const plantL2 = buildPottedPlant(0.88);
  snapToFloor(plantL2, -2.35, -10.55, 0.14);
  const plantR3 = buildPottedPlant(0.92);
  snapToFloor(plantR3, 2.34, -17.15, 0.14);
  group.add(plantL1, plantL2, plantR3);

  // =========================================================================
  // 3. PARKED VINTAGE JAPANESE BICYCLE ("ママチャリ") — Curved TubeGeometry Frame!
  // =========================================================================
  const bike = buildJapaneseBicycle(ironMat);
  bike.rotation.y = 0.14;
  bike.rotation.z = -0.09; // naturally leaning toward right wall on kickstand
  snapToFloor(bike, 2.26, -1.75, 0.14);
  group.add(bike);

  // =========================================================================
  // 4. L1 RAMEN SHOP ("麺屋 夜雨") NON-BOXY CRAFT DETAILS
  // =========================================================================
  // 4a. Scalloped Curved Clay Kawara Roof Tile Ribs along L1 rain eave (InstancedMesh!)
  const tileRibGeo = new THREE.CylinderGeometry(0.036, 0.042, 0.72, 8);
  tileRibGeo.rotateZ(Math.PI / 2 - 0.22);
  const tileCount = 36;
  const tileInst = new THREE.InstancedMesh(tileRibGeo, clayTileMat, tileCount);
  for (let i = 0; i < tileCount; i++) {
    const tz = -0.48 - i * 0.21;
    dummy.position.set(-2.34, 2.74, tz);
    dummy.rotation.set(0, 0, 0);
    dummy.scale.set(1, 1, 1);
    dummy.updateMatrix();
    tileInst.setMatrixAt(i, dummy.matrix);
  }
  tileInst.instanceMatrix.needsUpdate = true;
  tileInst.userData.skipReflector = true;
  group.add(tileInst);

  // Curved Half-Cylinder Copper Rain Gutter running along L1 eave edge + curved elbow
  const gutterGeo = new THREE.CylinderGeometry(0.038, 0.038, 7.6, 10, 1, true, Math.PI * 0.5, Math.PI);
  gutterGeo.rotateX(Math.PI / 2);
  const gutter = new THREE.Mesh(gutterGeo, copperMat);
  gutter.position.set(-1.98, 2.57, -4.2);
  group.add(gutter);

  const elbowCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-1.98, 2.56, -8.0),
    new THREE.Vector3(-2.12, 2.46, -8.22),
    new THREE.Vector3(-2.45, 2.38, -8.38),
    new THREE.Vector3(-2.58, 2.22, -8.45),
  ]);
  group.add(new THREE.Mesh(new THREE.TubeGeometry(elbowCurve, 10, 0.026, 8, false), copperMat));

  // 4b. Round Woven Sake Barrel ("菰樽 / Komodaru", LatheGeometry) on cedar stand beside L1 door
  const barrelGroup = new THREE.Group();
  const standPlank = new THREE.Mesh(new RoundedBoxGeometry(0.42, 0.06, 0.42, 2, 0.01), darkCedarMat);
  standPlank.position.y = 0.03;
  const barrelPts = [
    new THREE.Vector2(0.0, 0.06),
    new THREE.Vector2(0.175, 0.06),
    new THREE.Vector2(0.205, 0.24),
    new THREE.Vector2(0.21, 0.34),
    new THREE.Vector2(0.202, 0.44),
    new THREE.Vector2(0.175, 0.56),
    new THREE.Vector2(0.0, 0.56),
  ];
  const barrelMat = new THREE.MeshStandardMaterial({
    map: createSakeBarrelTexture(),
    roughness: 0.92,
    metalness: 0.0,
  });
  const barrelMesh = new THREE.Mesh(new THREE.LatheGeometry(barrelPts, 20), barrelMat);
  barrelMesh.castShadow = true;
  barrelGroup.add(standPlank, barrelMesh);
  snapToFloor(barrelGroup, -2.35, -1.95, 0.14);
  group.add(barrelGroup);

  // 4c. Wooden A-Frame Chalkboard Menu Easel ("立て看板") flush on L1 curb
  const easel = buildMenuEasel(darkCedarMat);
  easel.rotation.y = 1.25; // angled naturally toward walkers entering alley
  snapToFloor(easel, -2.26, -1.15, 0.14);
  group.add(easel);

  // 4d. 3 Hanging Cypress Wooden Menu Plaques ("お品書き") beside Ramen shop doorway
  const menuSpecs = [
    { z: -6.55, title: '醤油麺', price: '八五〇円' },
    { z: -6.78, title: '味噌麺', price: '九五〇円' },
    { z: -7.01, title: '焼餃子', price: '四五〇円' },
  ];
  for (const ms of menuSpecs) {
    const plaque = new THREE.Mesh(
      new RoundedBoxGeometry(0.025, 0.54, 0.17, 2, 0.005),
      new THREE.MeshStandardMaterial({
        map: createWoodMenuSlatTexture(ms.title, ms.price),
        roughness: 0.85,
        metalness: 0.0,
      })
    );
    plaque.position.set(-2.62, 1.82, ms.z);
    group.add(plaque);
  }

  // =========================================================================
  // 5. L2 IZAKAYA BAR ("居酒屋 24H") PROPER CONVEX FABRIC AWNING + FESTIVAL LANTERN STRING
  // =========================================================================
  const awningTex = createAwningStripeTexture();
  const awningMat = new THREE.MeshStandardMaterial({
    map: awningTex,
    roughness: 0.94,
    metalness: 0.0,
    side: THREE.DoubleSide,
  });

  // Explicitly curved convex quarter-arch canopy cleanly ABOVE L2 shutter (wall Y=2.92 -> front lip Y=2.34)
  const awningLen = 3.35;
  const awningProj = 0.68;
  const awningDrop = 0.58;
  const archGeo = new THREE.PlaneGeometry(awningLen, 1.0, 4, 12);
  const ap = archGeo.attributes.position;
  for (let i = 0; i < ap.count; i++) {
    const zPos = ap.getX(i); // along alley Z (-len/2 .. +len/2)
    const t = 0.5 - ap.getY(i); // 0 at top/wall -> 1 at front drip lip
    const ang = t * Math.PI * 0.5;
    const xOut = Math.sin(ang) * awningProj;
    const yUp = Math.cos(ang) * awningDrop;
    ap.setXYZ(i, xOut, yUp, zPos);
  }
  archGeo.computeVertexNormals();
  const curvedCanopy = new THREE.Mesh(archGeo, awningMat);
  curvedCanopy.position.set(-2.64, 2.34, -12.2);
  curvedCanopy.castShadow = true;
  group.add(curvedCanopy);

  // Solid quarter-ellipse fabric end-caps sealing left & right sides of the curved awning
  const endShape = new THREE.Shape();
  endShape.moveTo(0, 0);
  endShape.lineTo(0, awningDrop);
  for (let s = 1; s <= 10; s++) {
    const ang = (s / 10) * Math.PI * 0.5;
    endShape.lineTo(Math.sin(ang) * awningProj, Math.cos(ang) * awningDrop);
  }
  endShape.lineTo(0, 0);
  const endCapGeo = new THREE.ShapeGeometry(endShape);
  for (const ez of [-12.2 - awningLen * 0.5, -12.2 + awningLen * 0.5]) {
    const cap = new THREE.Mesh(endCapGeo, awningMat);
    cap.position.set(-2.64, 2.34, ez);
    group.add(cap);
  }

  // Scalloped hanging valance skirt along front lip (X = -1.96)
  const valanceGeo = new THREE.PlaneGeometry(awningLen, 0.18, 24, 2);
  const vp = valanceGeo.attributes.position;
  for (let i = 0; i < vp.count; i++) {
    if (vp.getY(i) < 0) {
      const vx = vp.getX(i);
      vp.setY(i, -0.09 - Math.abs(Math.sin(vx * 7.5)) * 0.04);
    }
  }
  valanceGeo.computeVertexNormals();
  const valance = new THREE.Mesh(valanceGeo, awningMat);
  valance.rotation.y = Math.PI / 2;
  valance.position.set(-2.64 + awningProj, 2.25, -12.2);
  group.add(valance);

  // Sagging catenary cord + 4 mini red/cream Chochin lanterns strung cleanly under front edge
  const stringCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-2.02, 2.28, -10.7),
    new THREE.Vector3(-1.98, 2.14, -12.2),
    new THREE.Vector3(-2.02, 2.28, -13.7),
  ]);
  group.add(new THREE.Mesh(new THREE.TubeGeometry(stringCurve, 12, 0.007, 6, false), ironMat));

  const miniPts = [
    new THREE.Vector2(0.032, -0.22),
    new THREE.Vector2(0.078, -0.18),
    new THREE.Vector2(0.088, -0.11),
    new THREE.Vector2(0.078, -0.04),
    new THREE.Vector2(0.032, 0.0),
  ];
  const miniGeo = new THREE.LatheGeometry(miniPts, 14);
  const miniChars = ['酒', '焼', '飲', '呑'];
  for (let i = 0; i < 4; i++) {
    const t = 0.18 + i * 0.21;
    const pt = stringCurve.getPoint(t);
    const tex = createLanternTexture(miniChars[i], i % 2 === 0 ? '#ff6a3a' : '#ffd28c');
    const pivot = new THREE.Group();
    pivot.position.copy(pt);
    const lMesh = new THREE.Mesh(
      miniGeo,
      new THREE.MeshStandardMaterial({
        map: tex.map,
        emissiveMap: tex.emissiveMap,
        emissive: 0xffffff,
        emissiveIntensity: 0.78,
        roughness: 0.85,
      })
    );
    pivot.add(lMesh);
    group.add(pivot);
    animatedMiniLanterns.push(pivot);
  }

  // Neighborhood Wooden Notice Board ("新宿町内会 · 掲示板") pinned on L2 brick wall
  const boardGroup = new THREE.Group();
  const boardFrame = new THREE.Mesh(new RoundedBoxGeometry(0.06, 0.86, 1.12, 2, 0.012), darkCedarMat);
  const boardFace = new THREE.Mesh(
    new THREE.PlaneGeometry(1.02, 0.76),
    new THREE.MeshStandardMaterial({ map: createNoticeBoardTexture(), roughness: 0.88 })
  );
  boardFace.rotation.y = Math.PI / 2;
  boardFace.position.x = 0.034;
  // Little pitched rain hood over notice board
  const boardHood = new THREE.Mesh(new RoundedBoxGeometry(0.18, 0.03, 1.18, 2, 0.008), darkCedarMat);
  boardHood.position.set(0.06, 0.45, 0);
  boardHood.rotation.z = -0.22;
  boardGroup.add(boardFrame, boardFace, boardHood);
  boardGroup.position.set(-2.62, 1.72, -14.75);
  group.add(boardGroup);

  // =========================================================================
  // 6. R2 VENDING STEEL RAIN LINTEL & R3 KITCHEN COUNTER CRAFT DETAILS
  // =========================================================================
  // Solid sloped brushed-steel rain lintel with bolted iron side brackets (50cm above vending machine!)
  const lintelMat = new THREE.MeshStandardMaterial({ color: 0x3b424b, roughness: 0.68, metalness: 0.55 });
  const lintelHood = new THREE.Mesh(new RoundedBoxGeometry(0.62, 0.06, 2.75, 2, 0.012), lintelMat);
  lintelHood.position.set(2.38, 2.74, -11.55);
  lintelHood.rotation.z = 0.2;
  group.add(lintelHood);
  for (const bz of [-10.35, -12.75]) {
    const bracket = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.04, 0.04), ironMat);
    bracket.position.set(2.42, 2.58, bz);
    bracket.rotation.z = -0.52;
    group.add(bracket);
  }

  // 2 Hanging Enamel Gooseneck Pendant Lamps under R3 Kitchen Awning (LatheGeometry shades!)
  const shadePts = [
    new THREE.Vector2(0.02, 0.1),
    new THREE.Vector2(0.045, 0.08),
    new THREE.Vector2(0.135, 0.0),
    new THREE.Vector2(0.145, -0.01),
  ];
  const shadeGeo = new THREE.LatheGeometry(shadePts, 16);
  const enamelMat = new THREE.MeshStandardMaterial({ color: 0x1e3830, roughness: 0.42, metalness: 0.35, side: THREE.DoubleSide });
  const bulbMat = new THREE.MeshBasicMaterial({ color: 0xffd796 });

  for (const pz of [-18.3, -20.1]) {
    const pGroup = new THREE.Group();
    const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.24, 6), ironMat);
    cord.position.y = 0.2;
    const shade = new THREE.Mesh(shadeGeo, enamelMat);
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.032, 10, 10), bulbMat);
    bulb.position.y = 0.02;
    pGroup.add(cord, shade, bulb);
    pGroup.position.set(2.22, 2.32, pz);
    group.add(pGroup);
  }

  // Wooden counter serving shelf + LatheGeometry ceramic soy-sauce bottles & bowls under R3 window
  const shelf = new THREE.Mesh(new RoundedBoxGeometry(0.24, 0.045, 3.85, 2, 0.01), darkCedarMat);
  shelf.position.set(2.49, 1.12, -19.2);
  group.add(shelf);

  const bowlPts = [
    new THREE.Vector2(0.0, 0.0),
    new THREE.Vector2(0.045, 0.0),
    new THREE.Vector2(0.075, 0.035),
    new THREE.Vector2(0.095, 0.075),
    new THREE.Vector2(0.088, 0.075),
    new THREE.Vector2(0.068, 0.035),
  ];
  const bowlGeo = new THREE.LatheGeometry(bowlPts, 14);
  const bowlMat = new THREE.MeshStandardMaterial({ color: 0x262930, roughness: 0.35, metalness: 0.05 });
  for (let b = 0; b < 3; b++) {
    const bowl = new THREE.Mesh(bowlGeo, bowlMat);
    bowl.position.set(2.46, 1.142 + b * 0.028, -18.55);
    group.add(bowl);
  }
  const shoyuPts = [
    new THREE.Vector2(0.0, 0.0),
    new THREE.Vector2(0.024, 0.0),
    new THREE.Vector2(0.026, 0.075),
    new THREE.Vector2(0.012, 0.12),
    new THREE.Vector2(0.015, 0.135),
  ];
  const shoyuGeo = new THREE.LatheGeometry(shoyuPts, 12);
  const shoyuMat = new THREE.MeshStandardMaterial({ color: 0x6b2016, roughness: 0.25 });
  for (const sz of [-19.4, -19.52]) {
    const jar = new THREE.Mesh(shoyuGeo, shoyuMat);
    jar.position.set(2.46, 1.142, sz);
    group.add(jar);
  }

  // =========================================================================
  // 7. REAL TOKYO BACK-ALLEY STORYTELLING ("BỐI CẢNH"):
  //    Convex street mirror, Fire box, Standing lit menu sign, Gas meters & conduits,
  //    Weathered street posters, Wet stacked cardboard boxes, 2F apartment balconies,
  //    & faded "止まれ" Japanese asphalt road stop stencil!
  // =========================================================================

  // 7a. Iconic Japanese Orange-Rimmed Convex Street Mirror ("カーブミラー") at Alley Exit (X=-2.18, Z=-24.35)
  const mirrorGroup = new THREE.Group();
  const mirrorPost = new THREE.Mesh(new THREE.CylinderGeometry(0.036, 0.042, 3.35, 10), ironMat);
  mirrorPost.position.y = 1.675;
  const mirrorHazard = new THREE.Mesh(
    new THREE.CylinderGeometry(0.04, 0.043, 0.65, 10, 1, true),
    new THREE.MeshStandardMaterial({ map: createPoleHazardTexture(), roughness: 0.58 })
  );
  mirrorHazard.position.y = 1.15;
  const orangeRimMat = new THREE.MeshStandardMaterial({
    color: 0xc24814,
    roughness: 0.45,
    metalness: 0.15,
    side: THREE.DoubleSide,
  });
  // Unified cleanly rotated mirror head so visor arches strictly OVER THE TOP (never slicing through glass!)
  const mirrorHead = new THREE.Group();
  mirrorHead.position.set(0.18, 3.05, 0.04);
  mirrorHead.rotation.y = 0.56;

  // Solid orange domed back shell facing -Z
  const mirrorBack = new THREE.Mesh(
    new THREE.SphereGeometry(0.32, 20, 12, 0, Math.PI * 2, 0, Math.PI * 0.45),
    orangeRimMat
  );
  mirrorBack.rotation.x = -Math.PI / 2;
  mirrorBack.scale.set(1, 0.35, 1);
  // Crisp orange circular bezel frame around front mirror face
  const mirrorBezel = new THREE.Mesh(new THREE.TorusGeometry(0.315, 0.028, 10, 28), orangeRimMat);
  // Smooth convex reflective mirror glass seated cleanly inside bezel facing +Z
  const mirrorGlass = new THREE.Mesh(
    new THREE.SphereGeometry(0.305, 20, 14, 0, Math.PI * 2, 0, Math.PI * 0.36),
    new THREE.MeshStandardMaterial({ color: 0xa2b0be, roughness: 0.07, metalness: 0.96 })
  );
  mirrorGlass.rotation.x = Math.PI / 2;
  mirrorGlass.position.z = -0.175;
  // Curved orange rain hood visor arching strictly OVER THE UPPER HALF (+Y) forward (+Z)
  const visorGeo = new THREE.CylinderGeometry(0.34, 0.34, 0.15, 22, 1, true, Math.PI / 2, Math.PI);
  visorGeo.rotateX(Math.PI / 2);
  const mirrorVisor = new THREE.Mesh(visorGeo, orangeRimMat);
  mirrorVisor.position.z = 0.06;
  mirrorHead.add(mirrorBack, mirrorBezel, mirrorGlass, mirrorVisor);

  const mirrorArm = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.045, 0.045), ironMat);
  mirrorArm.position.set(0.08, 3.05, 0);
  mirrorGroup.add(mirrorPost, mirrorHazard, mirrorHead, mirrorArm);
  snapToFloor(mirrorGroup, -2.18, -24.35, 0.14);
  group.add(mirrorGroup);

  // 7b. Japanese Red Emergency Fire Extinguisher Cabinet ("消火器") on Right Brick Corner (X=2.56, Z=-7.65)
  const fireBox = new THREE.Mesh(
    new RoundedBoxGeometry(0.2, 0.62, 0.28, 2, 0.012),
    new THREE.MeshStandardMaterial({ color: 0x7b1a16, roughness: 0.52, metalness: 0.32 })
  );
  fireBox.position.set(2.55, 0.48, -7.65);
  const fireFace = new THREE.Mesh(
    new THREE.PlaneGeometry(0.24, 0.56),
    new THREE.MeshStandardMaterial({ map: createFireBoxTexture(), roughness: 0.48 })
  );
  fireFace.rotation.y = -Math.PI / 2;
  fireFace.position.set(2.448, 0.48, -7.65);
  group.add(fireBox, fireFace);

  // 7c. Warm Backlit Standing Izakaya Menu Lightbox ("お品書き") outside L2 Izakaya (X=-2.28, Z=-13.85)
  const menuBox = new THREE.Group();
  const signFrame = new THREE.Mesh(new RoundedBoxGeometry(0.32, 0.92, 0.48, 2, 0.015), darkCedarMat);
  signFrame.position.y = 0.52;
  const signBase = new THREE.Mesh(new RoundedBoxGeometry(0.38, 0.08, 0.54, 2, 0.012), ironMat);
  signBase.position.y = 0.04;
  const standSignTex = createStandingMenuSignTexture();
  const standSignMat = new THREE.MeshStandardMaterial({
    map: standSignTex,
    emissiveMap: standSignTex,
    emissive: 0xffc878,
    emissiveIntensity: 0.48,
    roughness: 0.72,
  });
  for (const sx of [-0.163, 0.163]) {
    const face = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.82), standSignMat);
    face.rotation.y = sx > 0 ? Math.PI / 2 : -Math.PI / 2;
    face.position.set(sx, 0.52, 0);
    menuBox.add(face);
  }
  menuBox.add(signFrame, signBase);
  menuBox.rotation.y = 0.18;
  snapToFloor(menuBox, -2.28, -13.85, 0.14);
  group.add(menuBox);

  // 7d. Wet Corrugated Cardboard Boxes tied with packing twine beside the R1 trash bags
  const cardMat = new THREE.MeshStandardMaterial({ map: createCardboardTexture(), roughness: 0.9, metalness: 0.0 });
  const twineMat = new THREE.MeshStandardMaterial({ color: 0xc8c0b2, roughness: 0.88 });
  const boxStack = new THREE.Group();
  const boxA = new THREE.Mesh(new RoundedBoxGeometry(0.38, 0.28, 0.46, 2, 0.01), cardMat);
  boxA.position.set(0, 0.14, 0);
  const boxB = new THREE.Mesh(new RoundedBoxGeometry(0.34, 0.24, 0.42, 2, 0.01), cardMat);
  boxB.position.set(-0.02, 0.4, 0.03);
  boxB.rotation.y = 0.16;
  const flatStack = new THREE.Mesh(new RoundedBoxGeometry(0.08, 0.54, 0.52, 2, 0.008), cardMat);
  flatStack.position.set(0.22, 0.27, -0.05);
  flatStack.rotation.z = 0.14;
  // White packing twine tying folded boxes
  const twine = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.014, 0.53), twineMat);
  twine.position.set(0.22, 0.27, -0.05);
  twine.rotation.z = 0.14;
  boxStack.add(boxA, boxB, flatStack, twine);
  snapToFloor(boxStack, 2.34, -6.32, 0.14);
  group.add(boxStack);

  // 7e. Weathered Japanese Street Posters & Flyers pasted on brick walls
  const posterSpecs = [
    { x: -2.635, y: 1.56, z: -10.1, rotY: Math.PI / 2, tilt: 0.03, v: 0, w: 0.44, h: 0.58 },
    { x: -2.635, y: 1.48, z: -10.62, rotY: Math.PI / 2, tilt: -0.04, v: 1, w: 0.38, h: 0.5 },
    { x: 2.635, y: 1.58, z: -8.35, rotY: -Math.PI / 2, tilt: -0.02, v: 2, w: 0.42, h: 0.56 },
    { x: -2.635, y: 1.52, z: -19.2, rotY: Math.PI / 2, tilt: 0.025, v: 1, w: 0.46, h: 0.6 },
  ];
  for (const ps of posterSpecs) {
    const pMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(ps.w, ps.h),
      new THREE.MeshStandardMaterial({ map: createStreetPosterTexture(ps.v), roughness: 0.88 })
    );
    pMesh.position.set(ps.x, ps.y, ps.z);
    pMesh.rotation.y = ps.rotY;
    pMesh.rotation.z = ps.tilt;
    group.add(pMesh);
  }

  // 7f. Wall-Mounted Tokyo Gas Meters ("ガスメーター") & Galvanized Steel Electrical Conduits
  const meterGreyMat = new THREE.MeshStandardMaterial({ color: 0x5c6670, roughness: 0.58, metalness: 0.42 });
  for (const [mx, mz, dirX] of [
    [-2.57, -16.4, 1],
    [2.57, -14.2, -1],
  ]) {
    const mBox = new THREE.Mesh(new RoundedBoxGeometry(0.14, 0.24, 0.18, 2, 0.015), meterGreyMat);
    mBox.position.set(mx, 1.42, mz);
    const dial = new THREE.Mesh(
      new THREE.PlaneGeometry(0.09, 0.055),
      new THREE.MeshStandardMaterial({ color: 0xd0d4d8, roughness: 0.5 })
    );
    dial.rotation.y = dirX > 0 ? Math.PI / 2 : -Math.PI / 2;
    dial.position.set(mx + dirX * 0.072, 1.45, mz);
    const conduit = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.016, 3.6, 8), ironMat);
    conduit.position.set(mx + dirX * 0.02, 2.0, mz + 0.14);
    const jBox = new THREE.Mesh(new RoundedBoxGeometry(0.08, 0.12, 0.1, 2, 0.01), ironMat);
    jBox.position.set(mx + dirX * 0.02, 2.45, mz + 0.14);
    group.add(mBox, dial, conduit, jBox);
  }

  // 7g. Second-Floor Tokyo Apartment Balconies ("ベランダ") WITH real sliding glass patio doors ("掃き出し窓")!
  const concreteBalcMat = new THREE.MeshStandardMaterial({ color: 0x3b3f44, roughness: 0.9, metalness: 0.05 });
  const laundryPoleMat = new THREE.MeshStandardMaterial({ color: 0x9ca4ac, roughness: 0.35, metalness: 0.85 });
  const patioWarmTex = createPatioDoorTexture(true);
  const patioCoolTex = createPatioDoorTexture(false);
  const patioWarmMat = new THREE.MeshStandardMaterial({
    map: patioWarmTex,
    emissiveMap: patioWarmTex,
    emissive: 0xffb86e,
    emissiveIntensity: 0.42,
    roughness: 0.48,
  });
  const patioCoolMat = new THREE.MeshStandardMaterial({
    map: patioCoolTex,
    emissiveMap: patioCoolTex,
    emissive: 0x8db8e6,
    emissiveIntensity: 0.36,
    roughness: 0.48,
  });

  // 3 cleanly spaced balconies (ZERO overlap!), each backed by a real recessed sliding glass doorway into the apartment
  for (const [bx, bz, dirX, len, isWarm] of [
    [2.42, -4.6, -1, 2.7, true],
    [-2.42, -17.4, 1, 2.7, false],
    [2.42, -14.2, -1, 2.6, false],
  ]) {
    const slab = new THREE.Mesh(new RoundedBoxGeometry(0.62, 0.13, len, 2, 0.015), concreteBalcMat);
    slab.position.set(bx, 3.55, bz);
    // Side concrete end walls + iron front railing
    const topRail = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.045, len), ironMat);
    topRail.position.set(bx + dirX * 0.27, 4.46, bz);
    const midRail = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.03, len), ironMat);
    midRail.position.set(bx + dirX * 0.27, 3.74, bz);
    for (const endSide of [-1, 1]) {
      const endBar = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.04, 0.04), ironMat);
      endBar.position.set(bx, 4.46, bz + endSide * (len * 0.5 - 0.03));
      const endPost = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.9, 0.04), ironMat);
      endPost.position.set(bx + dirX * 0.27, 4.02, bz + endSide * (len * 0.5 - 0.03));
      group.add(endBar, endPost);
    }
    const laundryPole = new THREE.Mesh(new THREE.CylinderGeometry(0.013, 0.013, len - 0.35, 8), laundryPoleMat);
    laundryPole.rotation.x = Math.PI / 2;
    laundryPole.position.set(bx + dirX * 0.18, 4.86, bz);
    group.add(slab, topRail, midRail, laundryPole);
    for (let pz = bz - len * 0.42; pz <= bz + len * 0.42 + 0.01; pz += 0.36) {
      const baluster = new THREE.Mesh(new THREE.BoxGeometry(0.022, 0.88, 0.022), ironMat);
      baluster.position.set(bx + dirX * 0.27, 4.02, pz);
      group.add(baluster);
    }

    // Real Aluminum Sliding Balcony Patio Door ("掃き出し窓") mounted flush on the brick wall behind the balcony!
    const wallX = dirX > 0 ? -2.63 : 2.63;
    const doorFrame = new THREE.Mesh(new RoundedBoxGeometry(0.08, 2.08, 1.72, 2, 0.01), ironMat);
    doorFrame.position.set(wallX + dirX * 0.02, 4.64, bz);
    const doorGlass = new THREE.Mesh(new THREE.PlaneGeometry(1.62, 1.98), isWarm ? patioWarmMat : patioCoolMat);
    doorGlass.rotation.y = dirX > 0 ? Math.PI / 2 : -Math.PI / 2;
    doorGlass.position.set(wallX + dirX * 0.065, 4.64, bz);
    const doorLintel = new THREE.Mesh(new RoundedBoxGeometry(0.24, 0.12, 1.92, 2, 0.012), concreteBalcMat);
    doorLintel.position.set(wallX + dirX * 0.08, 5.72, bz);
    group.add(doorFrame, doorGlass, doorLintel);
  }

  // 7h. Weathered Japanese Asphalt Road Stop Stencil ("止まれ") right before crosswalk + wet curb grime strips
  const stopStencil = new THREE.Mesh(
    new THREE.PlaneGeometry(1.45, 2.7),
    new THREE.MeshStandardMaterial({
      map: createRoadStopStencilTexture(),
      transparent: true,
      roughness: 0.78,
      depthWrite: false,
    })
  );
  stopStencil.rotation.x = -Math.PI / 2;
  stopStencil.position.set(0.0, 0.004, -25.9);
  group.add(stopStencil);

  // Wet capillary rain-wicking dark damp strips hugging curb edges (kills sterile CG seam between road & curb!)
  const dampCurbMat = new THREE.MeshBasicMaterial({
    color: 0x04060a,
    transparent: true,
    opacity: 0.38,
    depthWrite: false,
  });
  for (const dx of [-1.98, 1.98]) {
    const damp = new THREE.Mesh(new THREE.PlaneGeometry(0.28, 30.0), dampCurbMat);
    damp.rotation.x = -Math.PI / 2;
    damp.position.set(dx, 0.003, -12.5);
    group.add(damp);
  }

  scene.add(group);

  return {
    group,
    update(elapsed) {
      for (let i = 0; i < animatedMiniLanterns.length; i++) {
        animatedMiniLanterns[i].rotation.z = Math.sin(elapsed * 2.1 + i * 1.3) * 0.055;
      }
    },
  };
}

function buildMenuEasel(woodMat) {
  const g = new THREE.Group();
  const boardMat = new THREE.MeshStandardMaterial({
    map: createChalkboardMenuTexture(),
    roughness: 0.88,
    metalness: 0.0,
  });

  // Front A-frame chalkboard leaf (tilted gently)
  const frontLeaf = new THREE.Group();
  frontLeaf.position.set(0, 0.44, 0.11);
  frontLeaf.rotation.x = -0.17;
  const frameF = new THREE.Mesh(new RoundedBoxGeometry(0.46, 0.78, 0.032, 2, 0.008), woodMat);
  const faceF = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.68), boardMat);
  faceF.position.z = 0.018;
  frontLeaf.add(frameF, faceF);

  // Back support A-frame leaf + legs reaching ground flush
  const backLeaf = new THREE.Group();
  backLeaf.position.set(0, 0.44, -0.11);
  backLeaf.rotation.x = 0.17;
  const frameB = new THREE.Mesh(new RoundedBoxGeometry(0.46, 0.78, 0.032, 2, 0.008), woodMat);
  backLeaf.add(frameB);

  g.add(frontLeaf, backLeaf);
  return g;
}

function buildJapaneseBicycle(metalMat) {
  const bike = new THREE.Group();
  const frameMat = new THREE.MeshStandardMaterial({ color: 0x26443a, roughness: 0.44, metalness: 0.55 });
  const tireMat = new THREE.MeshStandardMaterial({ color: 0x141619, roughness: 0.9, metalness: 0.0 });
  const saddleMat = new THREE.MeshStandardMaterial({ color: 0x2a1c14, roughness: 0.75 });
  const spokeMat = new THREE.MeshStandardMaterial({
    color: 0x7d858e,
    roughness: 0.4,
    metalness: 0.8,
    transparent: true,
    opacity: 0.22,
    side: THREE.DoubleSide,
  });

  const wheelRadius = 0.31;
  const tireGeo = new THREE.TorusGeometry(wheelRadius, 0.026, 8, 22);
  const rimGeo = new THREE.TorusGeometry(wheelRadius - 0.022, 0.01, 6, 22);
  const spokeDiscGeo = new THREE.CircleGeometry(wheelRadius - 0.03, 18);
  const hubGeo = new THREE.CylinderGeometry(0.022, 0.022, 0.08, 10);
  hubGeo.rotateX(Math.PI / 2);

  // Front & rear wheels along local Z axis (bike oriented along alley Z)
  for (const wz of [-0.52, 0.52]) {
    const wGroup = new THREE.Group();
    wGroup.position.set(0, wheelRadius + 0.026, wz);
    wGroup.rotation.y = Math.PI / 2;
    wGroup.add(
      new THREE.Mesh(tireGeo, tireMat),
      new THREE.Mesh(rimGeo, metalMat),
      new THREE.Mesh(spokeDiscGeo, spokeMat),
      new THREE.Mesh(hubGeo, metalMat)
    );
    bike.add(wGroup);
  }

  // Curved Mama-chari step-through tubular steel frame (TubeGeometry!)
  const addTube = (pts, r, mat = frameMat) => {
    const curve = new THREE.CatmullRomCurve3(pts.map((p) => new THREE.Vector3(...p)));
    const mesh = new THREE.Mesh(new THREE.TubeGeometry(curve, 12, r, 7, false), mat);
    mesh.castShadow = true;
    bike.add(mesh);
  };

  // Down curved step-through tube + seat tube + rear stays + front fork
  addTube([[0, 0.72, 0.4], [0, 0.46, 0.22], [0, 0.34, -0.02]], 0.016);
  addTube([[0, 0.34, -0.02], [0, 0.76, -0.14]], 0.016);
  addTube([[0, 0.34, -0.02], [0, 0.34, -0.52]], 0.012);
  addTube([[0, 0.68, -0.12], [0, 0.34, -0.52]], 0.012);
  addTube([[0, 0.84, 0.37], [0, 0.34, 0.52]], 0.015);
  // Swept cruiser handlebars
  addTube([[0.24, 0.88, 0.24], [0.14, 0.92, 0.34], [0, 0.92, 0.38], [-0.14, 0.92, 0.34], [-0.24, 0.88, 0.24]], 0.011, metalMat);

  // Curved saddle
  const saddle = new THREE.Mesh(new RoundedBoxGeometry(0.14, 0.055, 0.23, 2, 0.025), saddleMat);
  saddle.position.set(0, 0.81, -0.16);
  bike.add(saddle);

  // Open wire front shopping basket (tapered open cylinder rim + mesh)
  const basketMat = new THREE.MeshStandardMaterial({ color: 0x3b4046, roughness: 0.55, metalness: 0.65, wireframe: true });
  const basket = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.12, 0.21, 10, 3, true), basketMat);
  basket.position.set(0, 0.76, 0.54);
  bike.add(basket);

  // Kickstand down to ground
  addTube([[0.04, 0.32, -0.45], [0.16, 0.01, -0.49]], 0.008, metalMat);

  return bike;
}
