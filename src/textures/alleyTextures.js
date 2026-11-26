import * as THREE from 'three';

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

function hash2(ix, iy, seed) {
  let n = Math.imul(ix, 374761393) + Math.imul(iy, 668265263) + Math.imul(seed, 1442695041);
  n = (n ^ (n >>> 13)) | 0;
  n = Math.imul(n, 1274126177);
  return ((n ^ (n >>> 16)) >>> 0) / 4294967295;
}

function smoothstep(t) {
  return t * t * (3 - 2 * t);
}

function clamp01(v) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function valueNoise2D(x, y, period, seed) {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const fx = smoothstep(x - ix);
  const fy = smoothstep(y - iy);
  const wrap = (n) => (period > 0 ? ((n % period) + period) % period : n);
  const x0 = wrap(ix);
  const x1 = wrap(ix + 1);
  const y0 = wrap(iy);
  const y1 = wrap(iy + 1);
  return lerp(
    lerp(hash2(x0, y0, seed), hash2(x1, y0, seed), fx),
    lerp(hash2(x0, y1, seed), hash2(x1, y1, seed), fx),
    fy
  );
}

function fbmTileable(u, v, baseFreq, octaves, seed) {
  let sum = 0;
  let amp = 0.5;
  let norm = 0;
  let freq = baseFreq;
  for (let i = 0; i < octaves; i++) {
    sum += amp * valueNoise2D(u * freq, v * freq, freq, seed + i * 97);
    norm += amp;
    amp *= 0.5;
    freq *= 2;
  }
  return sum / norm;
}

function sampleBilinearGrid(arr, gridSize, u, v) {
  const gx = u * gridSize;
  const gy = v * gridSize;
  const x0 = Math.floor(gx) % gridSize;
  const y0 = Math.floor(gy) % gridSize;
  const x1 = (x0 + 1) % gridSize;
  const y1 = (y0 + 1) % gridSize;
  const fx = gx - Math.floor(gx);
  const fy = gy - Math.floor(gy);
  return lerp(
    lerp(arr[y0 * gridSize + x0], arr[y0 * gridSize + x1], fx),
    lerp(arr[y1 * gridSize + x0], arr[y1 * gridSize + x1], fx),
    fy
  );
}

function makeCanvas(width, height) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return { canvas, ctx: canvas.getContext('2d') };
}

function configureTexture(canvas, { srgb = false, repeat = [1, 1], anisotropy = 8 } = {}) {
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeat[0], repeat[1]);
  tex.generateMipmaps = true;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.anisotropy = anisotropy;
  tex.needsUpdate = true;
  return tex;
}

function heightCanvasToNormalCanvas(heightCanvas, strength = 1.4) {
  const w = heightCanvas.width;
  const h = heightCanvas.height;
  const src = heightCanvas.getContext('2d').getImageData(0, 0, w, h).data;
  const { canvas: normalCanvas, ctx: nCtx } = makeCanvas(w, h);
  const dst = nCtx.createImageData(w, h);

  const sample = (x, y) => src[((((y % h) + h) % h) * w + (((x % w) + w) % w)) * 4] / 255;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const tl = sample(x - 1, y - 1);
      const t = sample(x, y - 1);
      const tr = sample(x + 1, y - 1);
      const l = sample(x - 1, y);
      const r = sample(x + 1, y);
      const bl = sample(x - 1, y + 1);
      const b = sample(x, y + 1);
      const br = sample(x + 1, y + 1);

      const dX = tr + 2 * r + br - (tl + 2 * l + bl);
      const dY = bl + 2 * b + br - (tl + 2 * t + tr);
      let nx = -dX * strength;
      let ny = -dY * strength;
      let nz = 1.0;
      const invLen = 1.0 / Math.hypot(nx, ny, nz);
      const idx = (y * w + x) * 4;
      dst.data[idx] = Math.round((nx * invLen * 0.5 + 0.5) * 255);
      dst.data[idx + 1] = Math.round((ny * invLen * 0.5 + 0.5) * 255);
      dst.data[idx + 2] = Math.round((nz * invLen * 0.5 + 0.5) * 255);
      dst.data[idx + 3] = 255;
    }
  }
  nCtx.putImageData(dst, 0, 0);
  return normalCanvas;
}

/**
 * Coarse wet Japanese road asphalt with crushed stone aggregate, tire wear & tar crack repairs.
 */
export function createAsphaltTextures(maxAnisotropy = 8) {
  const size = 1024;
  const grid = 256;
  const mapC = makeCanvas(size, size);
  const roughC = makeCanvas(size, size);
  const heightC = makeCanvas(size, size);

  const mapImg = mapC.ctx.createImageData(size, size);
  const roughImg = roughC.ctx.createImageData(size, size);
  const heightImg = heightC.ctx.createImageData(size, size);

  const macroArr = new Float32Array(grid * grid);
  for (let y = 0; y < grid; y++) {
    for (let x = 0; x < grid; x++) {
      macroArr[y * grid + x] = fbmTileable(x / grid, y / grid, 4, 4, 101);
    }
  }

  for (let y = 0; y < size; y++) {
    const v = y / size;
    for (let x = 0; x < size; x++) {
      const u = x / size;
      const macro = sampleBilinearGrid(macroArr, grid, u, v);
      const pebble = hash2(x, y, 313);
      const pebble2 = hash2(x >> 1, y >> 1, 719);
      const stone = pebble * 0.6 + pebble2 * 0.4;

      // Crushed dark aggregate speckles
      const speck = pebble > 0.88 ? 16 : pebble < 0.08 ? -10 : 0;
      const base = 24 + macro * 14 + (stone - 0.5) * 18 + speck * 0.5;

      const p = (y * size + x) * 4;
      mapImg.data[p] = clamp01(base / 255) * 255;
      mapImg.data[p + 1] = clamp01((base + 1) / 255) * 255;
      mapImg.data[p + 2] = clamp01((base + 3) / 255) * 255;
      mapImg.data[p + 3] = 255;

      const rv = clamp01(0.46 + (1.0 - macro) * 0.22 + (pebble > 0.85 ? 0.14 : 0)) * 255;
      roughImg.data[p] = rv;
      roughImg.data[p + 1] = rv;
      roughImg.data[p + 2] = rv;
      roughImg.data[p + 3] = 255;

      const hv = clamp01((120 + (stone - 0.5) * 58 + speck * 1.4) / 255) * 255;
      heightImg.data[p] = hv;
      heightImg.data[p + 1] = hv;
      heightImg.data[p + 2] = hv;
      heightImg.data[p + 3] = 255;
    }
  }

  mapC.ctx.putImageData(mapImg, 0, 0);
  roughC.ctx.putImageData(roughImg, 0, 0);
  heightC.ctx.putImageData(heightImg, 0, 0);

  // Faint glossy black tar repair seams
  const rng = mulberry32(404);
  mapC.ctx.strokeStyle = 'rgba(10, 11, 13, 0.72)';
  roughC.ctx.strokeStyle = 'rgb(45, 45, 45)';
  for (let i = 0; i < 6; i++) {
    let cx = 150 + rng() * (size - 300);
    let cy = 150 + rng() * (size - 300);
    mapC.ctx.lineWidth = 3;
    roughC.ctx.lineWidth = 4;
    mapC.ctx.beginPath();
    roughC.ctx.beginPath();
    mapC.ctx.moveTo(cx, cy);
    roughC.ctx.moveTo(cx, cy);
    for (let s = 0; s < 5; s++) {
      cx += (rng() - 0.5) * 55;
      cy += (rng() - 0.5) * 55;
      mapC.ctx.lineTo(cx, cy);
      roughC.ctx.lineTo(cx, cy);
    }
    mapC.ctx.stroke();
    roughC.ctx.stroke();
  }

  const normalCanvas = heightCanvasToNormalCanvas(heightC.canvas, 1.55);
  return {
    map: configureTexture(mapC.canvas, { srgb: true, repeat: [2, 11], anisotropy: maxAnisotropy }),
    roughnessMap: configureTexture(roughC.canvas, { srgb: false, repeat: [2, 11], anisotropy: maxAnisotropy }),
    normalMap: configureTexture(normalCanvas, { srgb: false, repeat: [2, 11], anisotropy: maxAnisotropy }),
  };
}

/**
 * Weathered damp sidewalk concrete for curbs & step aprons.
 */
export function createConcreteCurbTextures(maxAnisotropy = 8) {
  const size = 512;
  const grid = 128;
  const mapC = makeCanvas(size, size);
  const roughC = makeCanvas(size, size);
  const heightC = makeCanvas(size, size);

  const mapImg = mapC.ctx.createImageData(size, size);
  const roughImg = roughC.ctx.createImageData(size, size);
  const heightImg = heightC.ctx.createImageData(size, size);

  const nArr = new Float32Array(grid * grid);
  for (let y = 0; y < grid; y++) {
    for (let x = 0; x < grid; x++) {
      nArr[y * grid + x] = fbmTileable(x / grid, y / grid, 4, 3, 211);
    }
  }

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const n = sampleBilinearGrid(nArr, grid, x / size, y / size);
      const micro = hash2(x, y, 509);
      const pit = micro < 0.04 ? -22 : 0;
      const base = 54 + n * 24 + (micro - 0.5) * 16;

      const p = (y * size + x) * 4;
      mapImg.data[p] = clamp01((base + 2) / 255) * 255;
      mapImg.data[p + 1] = clamp01((base + 2) / 255) * 255;
      mapImg.data[p + 2] = clamp01((base + 4) / 255) * 255;
      mapImg.data[p + 3] = 255;

      const rv = clamp01(0.72 + (1.0 - n) * 0.14) * 255;
      roughImg.data[p] = rv;
      roughImg.data[p + 1] = rv;
      roughImg.data[p + 2] = rv;
      roughImg.data[p + 3] = 255;

      const hv = clamp01((126 + (micro - 0.5) * 38 + pit) / 255) * 255;
      heightImg.data[p] = hv;
      heightImg.data[p + 1] = hv;
      heightImg.data[p + 2] = hv;
      heightImg.data[p + 3] = 255;
    }
  }

  mapC.ctx.putImageData(mapImg, 0, 0);
  roughC.ctx.putImageData(roughImg, 0, 0);
  heightC.ctx.putImageData(heightImg, 0, 0);

  return {
    map: configureTexture(mapC.canvas, { srgb: true, repeat: [1, 1], anisotropy: maxAnisotropy }),
    roughnessMap: configureTexture(roughC.canvas, { srgb: false, repeat: [1, 1], anisotropy: maxAnisotropy }),
    normalMap: configureTexture(heightCanvasToNormalCanvas(heightC.canvas, 1.3), {
      srgb: false,
      repeat: [1, 1],
      anisotropy: maxAnisotropy,
    }),
  };
}

/**
 * Charred dark Japanese cedar timber planks (Yakisugi) for Ramen shopfront.
 */
export function createYakisugiWoodTextures(maxAnisotropy = 8) {
  const size = 512;
  const mapC = makeCanvas(size, size);
  const roughC = makeCanvas(size, size);
  const heightC = makeCanvas(size, size);

  const mapImg = mapC.ctx.createImageData(size, size);
  const roughImg = roughC.ctx.createImageData(size, size);
  const heightImg = heightC.ctx.createImageData(size, size);

  const planks = 8;
  const pw = size / planks;

  for (let y = 0; y < size; y++) {
    const v = y / size;
    for (let x = 0; x < size; x++) {
      const plankIdx = Math.floor(x / pw);
      const localX = x % pw;
      const isSeam = localX < 3;
      const plankTint = hash2(plankIdx, 7, 88);

      const grain = fbmTileable((x / size) * 8.0, v * 0.5, 6, 3, 401 + plankIdx * 13);
      const micro = hash2(x, y, 911);
      const base = isSeam ? 12 : 26 + plankTint * 14 + grain * 18 + (micro - 0.5) * 8;

      const p = (y * size + x) * 4;
      mapImg.data[p] = clamp01((base + 7) / 255) * 255;
      mapImg.data[p + 1] = clamp01((base + 2) / 255) * 255;
      mapImg.data[p + 2] = clamp01((base - 3) / 255) * 255;
      mapImg.data[p + 3] = 255;

      const rv = clamp01(0.76 + (1.0 - grain) * 0.16) * 255;
      roughImg.data[p] = rv;
      roughImg.data[p + 1] = rv;
      roughImg.data[p + 2] = rv;
      roughImg.data[p + 3] = 255;

      const hv = isSeam ? 35 : clamp01((120 + grain * 50 + (micro - 0.5) * 20) / 255) * 255;
      heightImg.data[p] = hv;
      heightImg.data[p + 1] = hv;
      heightImg.data[p + 2] = hv;
      heightImg.data[p + 3] = 255;
    }
  }

  mapC.ctx.putImageData(mapImg, 0, 0);
  roughC.ctx.putImageData(roughImg, 0, 0);
  heightC.ctx.putImageData(heightImg, 0, 0);

  return {
    map: configureTexture(mapC.canvas, { srgb: true, repeat: [1, 1], anisotropy: maxAnisotropy }),
    roughnessMap: configureTexture(roughC.canvas, { srgb: false, repeat: [1, 1], anisotropy: maxAnisotropy }),
    normalMap: configureTexture(heightCanvasToNormalCanvas(heightC.canvas, 1.5), {
      srgb: false,
      repeat: [1, 1],
      anisotropy: maxAnisotropy,
    }),
  };
}

/**
 * Authentic narrow Japanese exterior facade ceramic tiles (45x95mm proportions) with dirty grout.
 */
export function createJapaneseTileTextures(maxAnisotropy = 8, tint = [68, 70, 74]) {
  const size = 512;
  const { canvas: mapCanvas, ctx } = makeCanvas(size, size);
  const roughC = makeCanvas(size, size);
  const heightC = makeCanvas(size, size);
  const rng = mulberry32(3030 + tint[0]);

  ctx.fillStyle = '#181a1d';
  ctx.fillRect(0, 0, size, size);
  roughC.ctx.fillStyle = '#fcfcfc';
  roughC.ctx.fillRect(0, 0, size, size);
  heightC.ctx.fillStyle = '#404040';
  heightC.ctx.fillRect(0, 0, size, size);

  const rows = 20;
  const cols = 10;
  const bh = size / rows;
  const bw = size / cols;

  for (let r = 0; r < rows; r++) {
    const offset = (r % 2) * (bw * 0.5);
    for (let c = -1; c <= cols; c++) {
      const x = c * bw + offset;
      const y = r * bh;
      const jitter = (rng() - 0.5) * 18;
      ctx.fillStyle = `rgb(${Math.round(tint[0] + jitter)}, ${Math.round(tint[1] + jitter)}, ${Math.round(
        tint[2] + jitter
      )})`;
      ctx.fillRect(x + 2, y + 2, bw - 4, bh - 4);

      const rv = 224 + Math.floor(rng() * 27);
      roughC.ctx.fillStyle = `rgb(${rv},${rv},${rv})`;
      roughC.ctx.fillRect(x + 2, y + 2, bw - 4, bh - 4);

      const hv = 148 + Math.floor(rng() * 38);
      heightC.ctx.fillStyle = `rgb(${hv},${hv},${hv})`;
      heightC.ctx.fillRect(x + 2, y + 2, bw - 4, bh - 4);
    }
  }

  // Porous unglazed masonry mineral flecking inside bricks
  for (let i = 0; i < 2400; i++) {
    const fx = rng() * size;
    const fy = rng() * size;
    const dark = rng() > 0.45;
    ctx.fillStyle = dark ? 'rgba(10, 12, 14, 0.22)' : 'rgba(205, 200, 192, 0.1)';
    ctx.fillRect(fx, fy, 1.5 + rng() * 2.0, 1.5);
    heightC.ctx.fillStyle = dark ? 'rgba(65, 65, 65, 0.35)' : 'rgba(215, 215, 215, 0.25)';
    heightC.ctx.fillRect(fx, fy, 1.5, 1.5);
  }

  // Subtle vertical rain grime runs
  for (let i = 0; i < 45; i++) {
    const sx = rng() * size;
    const sy = rng() * size * 0.5;
    const g = ctx.createLinearGradient(0, sy, 0, sy + 140);
    g.addColorStop(0, 'rgba(12, 13, 15, 0.38)');
    g.addColorStop(1, 'rgba(12, 13, 15, 0)');
    ctx.fillStyle = g;
    ctx.fillRect(sx, sy, 6 + rng() * 18, 140);
  }

  // Soften grout transitions slightly so Sobel normals don't flash hard specular bevels
  const softHeight = makeCanvas(size, size);
  softHeight.ctx.filter = 'blur(0.9px)';
  softHeight.ctx.drawImage(heightC.canvas, 0, 0);
  softHeight.ctx.filter = 'none';

  return {
    map: configureTexture(mapCanvas, { srgb: true, repeat: [1, 1], anisotropy: maxAnisotropy }),
    roughnessMap: configureTexture(roughC.canvas, { srgb: false, repeat: [1, 1], anisotropy: maxAnisotropy }),
    normalMap: configureTexture(heightCanvasToNormalCanvas(softHeight.canvas, 0.85), {
      srgb: false,
      repeat: [1, 1],
      anisotropy: maxAnisotropy,
    }),
  };
}

/**
 * Horizontal ribbed galvanized metal storefront roll-up shutter with rust & grime.
 */
export function createCorrugatedShutterTextures(maxAnisotropy = 8) {
  const size = 512;
  const mapC = makeCanvas(size, size);
  const roughC = makeCanvas(size, size);
  const heightC = makeCanvas(size, size);

  const mapImg = mapC.ctx.createImageData(size, size);
  const roughImg = roughC.ctx.createImageData(size, size);
  const heightImg = heightC.ctx.createImageData(size, size);

  const slats = 24;
  for (let y = 0; y < size; y++) {
    const slatPhase = ((y / size) * slats) % 1;
    const ridge = Math.sin(slatPhase * Math.PI * 2);
    for (let x = 0; x < size; x++) {
      const wear = fbmTileable(x / size, y / size, 5, 3, 555);
      const micro = hash2(x, y, 617);
      const base = 62 + ridge * 14 + wear * 20 + (micro - 0.5) * 10;

      const p = (y * size + x) * 4;
      mapImg.data[p] = clamp01((base + wear * 8) / 255) * 255;
      mapImg.data[p + 1] = clamp01((base + wear * 3) / 255) * 255;
      mapImg.data[p + 2] = clamp01((base + 2) / 255) * 255;
      mapImg.data[p + 3] = 255;

      const rv = clamp01(0.48 + wear * 0.28) * 255;
      roughImg.data[p] = rv;
      roughImg.data[p + 1] = rv;
      roughImg.data[p + 2] = rv;
      roughImg.data[p + 3] = 255;

      const hv = clamp01((128 + ridge * 78 + (micro - 0.5) * 16) / 255) * 255;
      heightImg.data[p] = hv;
      heightImg.data[p + 1] = hv;
      heightImg.data[p + 2] = hv;
      heightImg.data[p + 3] = 255;
    }
  }

  mapC.ctx.putImageData(mapImg, 0, 0);
  roughC.ctx.putImageData(roughImg, 0, 0);
  heightC.ctx.putImageData(heightImg, 0, 0);

  return {
    map: configureTexture(mapC.canvas, { srgb: true, repeat: [1, 1], anisotropy: maxAnisotropy }),
    roughnessMap: configureTexture(roughC.canvas, { srgb: false, repeat: [1, 1], anisotropy: maxAnisotropy }),
    normalMap: configureTexture(heightCanvasToNormalCanvas(heightC.canvas, 1.6), {
      srgb: false,
      repeat: [1, 1],
      anisotropy: maxAnisotropy,
    }),
  };
}

/**
 * Oxidized weathered industrial metal for AC units, poles, grates, brackets & vents.
 */
export function createWeatheredMetalTextures(maxAnisotropy = 8) {
  const size = 512;
  const grid = 128;
  const mapC = makeCanvas(size, size);
  const roughC = makeCanvas(size, size);
  const heightC = makeCanvas(size, size);

  const mapImg = mapC.ctx.createImageData(size, size);
  const roughImg = roughC.ctx.createImageData(size, size);
  const heightImg = heightC.ctx.createImageData(size, size);

  const nArr = new Float32Array(grid * grid);
  for (let y = 0; y < grid; y++) {
    for (let x = 0; x < grid; x++) {
      nArr[y * grid + x] = fbmTileable(x / grid, y / grid, 5, 3, 701);
    }
  }

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const wear = sampleBilinearGrid(nArr, grid, x / size, y / size);
      const micro = hash2(x, y, 8111);
      const rust = clamp01((wear - 0.56) / 0.18);
      const base = 48 + wear * 22 + (micro - 0.5) * 14;

      const p = (y * size + x) * 4;
      mapImg.data[p] = clamp01(lerp(base, base + 24, rust) / 255) * 255;
      mapImg.data[p + 1] = clamp01(lerp(base + 2, base + 8, rust) / 255) * 255;
      mapImg.data[p + 2] = clamp01(lerp(base + 5, base - 3, rust) / 255) * 255;
      mapImg.data[p + 3] = 255;

      const rv = clamp01(0.48 + wear * 0.22 + rust * 0.24) * 255;
      roughImg.data[p] = rv;
      roughImg.data[p + 1] = rv;
      roughImg.data[p + 2] = rv;
      roughImg.data[p + 3] = 255;

      const hv = clamp01((126 + (micro - 0.5) * 28 - rust * 18) / 255) * 255;
      heightImg.data[p] = hv;
      heightImg.data[p + 1] = hv;
      heightImg.data[p + 2] = hv;
      heightImg.data[p + 3] = 255;
    }
  }

  mapC.ctx.putImageData(mapImg, 0, 0);
  roughC.ctx.putImageData(roughImg, 0, 0);
  heightC.ctx.putImageData(heightImg, 0, 0);

  return {
    map: configureTexture(mapC.canvas, { srgb: true, repeat: [1, 1], anisotropy: maxAnisotropy }),
    roughnessMap: configureTexture(roughC.canvas, { srgb: false, repeat: [1, 1], anisotropy: maxAnisotropy }),
    normalMap: configureTexture(heightCanvasToNormalCanvas(heightC.canvas, 1.2), {
      srgb: false,
      repeat: [1, 1],
      anisotropy: maxAnisotropy,
    }),
  };
}

/**
 * Warm translucent frosted glass / washi paper texture for Koshi-do shoji doors
 * (3D lattice frames are modeled physically in alleyArchitecture.js).
 */
export function createShojiWindowTexture() {
  const size = 512;
  const { canvas, ctx } = makeCanvas(size, size);
  const emC = makeCanvas(size, size);
  const rng = mulberry32(4409);

  const grad = ctx.createLinearGradient(0, 0, 0, size);
  grad.addColorStop(0, '#8e4b1c');
  grad.addColorStop(0.48, '#c67530');
  grad.addColorStop(1, '#6f3814');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);

  emC.ctx.fillStyle = grad;
  emC.ctx.fillRect(0, 0, size, size);

  // Subtle warm indoor ambiance gradient (no blinding white hotspot!)
  for (const targetCtx of [ctx, emC.ctx]) {
    const lampGlow = targetCtx.createRadialGradient(size * 0.5, size * 0.34, 16, size * 0.5, size * 0.34, size * 0.52);
    lampGlow.addColorStop(0, 'rgba(235, 168, 92, 0.24)');
    lampGlow.addColorStop(0.55, 'rgba(195, 118, 48, 0.12)');
    lampGlow.addColorStop(1, 'rgba(100, 48, 16, 0.0)');
    targetCtx.fillStyle = lampGlow;
    targetCtx.fillRect(0, 0, size, size);
  }

  // Softly blurred interior counter, shelves & bottles silhouette (zero hard lines)
  const blurLayer = makeCanvas(size, size);
  const bCtx = blurLayer.ctx;
  bCtx.filter = 'blur(14px)';
  bCtx.fillStyle = 'rgba(32, 14, 6, 0.42)';
  bCtx.fillRect(0, size * 0.68, size, size * 0.32);
  bCtx.fillStyle = 'rgba(28, 12, 5, 0.32)';
  bCtx.fillRect(size * 0.14, size * 0.2, size * 0.16, size * 0.52);
  bCtx.fillRect(size * 0.66, size * 0.42, size * 0.09, size * 0.28);
  bCtx.fillRect(size * 0.78, size * 0.48, size * 0.07, size * 0.22);
  bCtx.filter = 'none';

  ctx.drawImage(blurLayer.canvas, 0, 0);
  emC.ctx.drawImage(blurLayer.canvas, 0, 0);

  // Organic handmade washi paper fiber mottling
  for (let i = 0; i < 650; i++) {
    const px = rng() * size;
    const py = rng() * size;
    const rw = 4 + rng() * 18;
    const rh = 1 + rng() * 2.5;
    const alpha = 0.03 + rng() * 0.05;
    const col = rng() > 0.5 ? `rgba(255, 224, 175, ${alpha})` : `rgba(60, 28, 12, ${alpha})`;
    ctx.fillStyle = col;
    ctx.fillRect(px, py, rw, rh);
    emC.ctx.fillStyle = col;
    emC.ctx.fillRect(px, py, rw, rh);
  }

  return {
    map: configureTexture(canvas, { srgb: true, repeat: [1, 1] }),
    emissiveMap: configureTexture(emC.canvas, { srgb: true, repeat: [1, 1] }),
  };
}

/**
 * Indigo & cream woven linen Japanese Noren shop curtain ("らーめん"),
 * square 512x512 canvas so circular crest and cloth weave render unstretched.
 */
export function createNorenCurtainTexture(kanji = 'らーめん') {
  const size = 512;
  const { canvas, ctx } = makeCanvas(size, size);
  const rng = mulberry32(1984);

  const foldGrad = ctx.createLinearGradient(0, 0, size, 0);
  foldGrad.addColorStop(0, '#121b29');
  foldGrad.addColorStop(0.28, '#172336');
  foldGrad.addColorStop(0.55, '#131d2d');
  foldGrad.addColorStop(0.82, '#182438');
  foldGrad.addColorStop(1, '#111926');
  ctx.fillStyle = foldGrad;
  ctx.fillRect(0, 0, size, size);

  // Subtle vertical top-to-bottom damp hem darkening
  const hemGrad = ctx.createLinearGradient(0, 0, 0, size);
  hemGrad.addColorStop(0, 'rgba(0,0,0,0.22)');
  hemGrad.addColorStop(0.14, 'rgba(0,0,0,0)');
  hemGrad.addColorStop(0.86, 'rgba(0,0,0,0)');
  hemGrad.addColorStop(1, 'rgba(0,0,0,0.34)');
  ctx.fillStyle = hemGrad;
  ctx.fillRect(0, 0, size, size);

  // Fine woven cotton slub texture
  for (let i = 0; i < 650; i++) {
    ctx.fillStyle = rng() > 0.5 ? 'rgba(255,255,255,0.025)' : 'rgba(0,0,0,0.07)';
    ctx.fillRect(0, rng() * size, size, 1.5);
    ctx.fillRect(rng() * size, 0, 1.5, size);
  }

  // Dyed cream circular crest + brush calligraphy with subtle bleed into weave
  ctx.save();
  ctx.shadowColor = 'rgba(226, 216, 197, 0.25)';
  ctx.shadowBlur = 3;
  ctx.strokeStyle = '#dfd5c0';
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.arc(size * 0.5, size * 0.52, 128, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = '#e2d8c4';
  ctx.font = 'bold 54px "Yu Mincho", "Yu Gothic", serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(kanji, size * 0.5, size * 0.53);
  ctx.restore();

  // Over-weave grain pass so ink looks dyed into linen fibers
  for (let i = 0; i < 320; i++) {
    ctx.fillStyle = 'rgba(18, 28, 44, 0.08)';
    ctx.fillRect(0, rng() * size, size, 1.2);
  }

  return configureTexture(canvas, { srgb: true, repeat: [1, 1] });
}

/**
 * Ribbed paper lantern (Chochin) texture on 2:1 (512x256) canvas matching LatheGeometry
 * circumference so kanji brush strokes stay crisp and unstretched.
 */
export function createLanternTexture(kanji = '麺', warmHex = '#ff9848') {
  const w = 512;
  const h = 256;
  const { canvas, ctx } = makeCanvas(w, h);
  const emC = makeCanvas(w, h);
  const rng = mulberry32(773 + kanji.charCodeAt(0));

  for (const targetCtx of [ctx, emC.ctx]) {
    const g = targetCtx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#8f2912');
    g.addColorStop(0.28, '#d96628');
    g.addColorStop(0.5, warmHex);
    g.addColorStop(0.74, '#d25d22');
    g.addColorStop(1, '#7a200e');
    targetCtx.fillStyle = g;
    targetCtx.fillRect(0, 0, w, h);

    // Inner tungsten bulb core brightness band
    for (const cx of [w * 0.25, w * 0.75]) {
      const core = targetCtx.createRadialGradient(cx, h * 0.5, 10, cx, h * 0.5, 120);
      core.addColorStop(0, 'rgba(255, 232, 185, 0.45)');
      core.addColorStop(1, 'rgba(255, 130, 50, 0)');
      targetCtx.fillStyle = core;
      targetCtx.fillRect(0, 0, w, h);
    }
  }

  // Washi paper grain
  for (let i = 0; i < 400; i++) {
    const px = rng() * w;
    const py = rng() * h;
    const col = rng() > 0.5 ? 'rgba(255,220,170,0.04)' : 'rgba(65,18,8,0.06)';
    ctx.fillStyle = col;
    ctx.fillRect(px, py, 6 + rng() * 14, 1.5);
    emC.ctx.fillStyle = col;
    emC.ctx.fillRect(px, py, 6 + rng() * 14, 1.5);
  }

  // Fine bamboo hoop ribs with subtle underside shading
  for (let y = 14; y < h; y += 16) {
    ctx.strokeStyle = 'rgba(42, 14, 6, 0.48)';
    ctx.lineWidth = 2.0;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();

    emC.ctx.strokeStyle = 'rgba(24, 6, 2, 0.52)';
    emC.ctx.lineWidth = 2.0;
    emC.ctx.beginPath();
    emC.ctx.moveTo(0, y);
    emC.ctx.lineTo(w, y);
    emC.ctx.stroke();
  }

  // Proportionally crisp brush calligraphy on front & back
  for (const cx of [w * 0.25, w * 0.75]) {
    ctx.fillStyle = '#140c08';
    ctx.font = 'bold 92px "Yu Mincho", "Yu Gothic", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(kanji, cx, h * 0.51);

    emC.ctx.fillStyle = '#040100';
    emC.ctx.font = 'bold 92px "Yu Mincho", "Yu Gothic", serif';
    emC.ctx.textAlign = 'center';
    emC.ctx.textBaseline = 'middle';
    emC.ctx.fillText(kanji, cx, h * 0.51);
  }

  return {
    map: configureTexture(canvas, { srgb: true, repeat: [1, 1] }),
    emissiveMap: configureTexture(emC.canvas, { srgb: true, repeat: [1, 1] }),
  };
}

/**
 * Vertical Japanese illuminated acrylic/neon blade signboard.
 */
export function createNeonSignTexture(chars = ['居', '酒', '屋'], subText = '24H', primaryHex = '#4df0ff', bgHex = '#0c1824') {
  const w = 256;
  const h = 512;
  const { canvas, ctx } = makeCanvas(w, h);
  const emC = makeCanvas(w, h);

  ctx.fillStyle = bgHex;
  ctx.fillRect(0, 0, w, h);
  emC.ctx.fillStyle = bgHex;
  emC.ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = primaryHex;
  ctx.lineWidth = 10;
  ctx.strokeRect(12, 12, w - 24, h - 24);
  emC.ctx.strokeStyle = primaryHex;
  emC.ctx.lineWidth = 10;
  emC.ctx.strokeRect(12, 12, w - 24, h - 24);

  ctx.fillStyle = primaryHex;
  emC.ctx.fillStyle = primaryHex;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  emC.ctx.textAlign = 'center';
  emC.ctx.textBaseline = 'middle';
  ctx.font = 'bold 76px "Yu Gothic", "Meiryo", sans-serif';
  emC.ctx.font = 'bold 76px "Yu Gothic", "Meiryo", sans-serif';

  chars.forEach((ch, idx) => {
    const cy = 96 + idx * 102;
    ctx.fillText(ch, w * 0.5, cy);
    emC.ctx.fillText(ch, w * 0.5, cy);
  });

  ctx.font = 'bold 34px monospace';
  emC.ctx.font = 'bold 34px monospace';
  ctx.fillStyle = '#fff3df';
  emC.ctx.fillStyle = '#fff3df';
  ctx.fillText(subText, w * 0.5, h - 56);
  emC.ctx.fillText(subText, w * 0.5, h - 56);

  return {
    map: configureTexture(canvas, { srgb: true, repeat: [1, 1] }),
    emissiveMap: configureTexture(emC.canvas, { srgb: true, repeat: [1, 1] }),
  };
}

/**
 * Circular Japanese cast-iron street manhole cover with geometric relief.
 */
export function createManholeTexture() {
  const size = 512;
  const { canvas, ctx } = makeCanvas(size, size);
  const heightC = makeCanvas(size, size);
  const cx = size / 2;
  const cy = size / 2;

  ctx.fillStyle = '#25282c';
  ctx.fillRect(0, 0, size, size);
  heightC.ctx.fillStyle = '#707070';
  heightC.ctx.fillRect(0, 0, size, size);

  for (const r of [240, 212, 150, 92, 42]) {
    ctx.strokeStyle = '#3c4147';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();

    heightC.ctx.strokeStyle = '#d8d8d8';
    heightC.ctx.lineWidth = 8;
    heightC.ctx.beginPath();
    heightC.ctx.arc(cx, cy, r, 0, Math.PI * 2);
    heightC.ctx.stroke();
  }

  for (let a = 0; a < 16; a++) {
    const ang = (a * Math.PI) / 8;
    ctx.strokeStyle = '#363b41';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(ang) * 92, cy + Math.sin(ang) * 92);
    ctx.lineTo(cx + Math.cos(ang) * 212, cy + Math.sin(ang) * 212);
    ctx.stroke();

    heightC.ctx.strokeStyle = '#c8c8c8';
    heightC.ctx.lineWidth = 6;
    heightC.ctx.beginPath();
    heightC.ctx.moveTo(cx + Math.cos(ang) * 92, cy + Math.sin(ang) * 92);
    heightC.ctx.lineTo(cx + Math.cos(ang) * 212, cy + Math.sin(ang) * 212);
    heightC.ctx.stroke();
  }

  return {
    map: configureTexture(canvas, { srgb: true, repeat: [1, 1] }),
    normalMap: configureTexture(heightCanvasToNormalCanvas(heightC.canvas, 1.8), { srgb: false, repeat: [1, 1] }),
  };
}

/**
 * Vending machine marquee, IC payment panel, and pickup flap textures.
 */
export function createVendingFrontTextures() {
  const m = makeCanvas(512, 128);
  m.ctx.fillStyle = '#182d46';
  m.ctx.fillRect(0, 0, 512, 128);
  m.ctx.fillStyle = '#e8f4ff';
  m.ctx.font = 'bold 46px "Yu Gothic", sans-serif';
  m.ctx.textAlign = 'center';
  m.ctx.fillText('つめたいお飲物 · DRINK', 256, 78);

  const p = makeCanvas(256, 512);
  const pe = makeCanvas(256, 512);
  p.ctx.fillStyle = '#1b2026';
  p.ctx.fillRect(0, 0, 256, 512);
  pe.ctx.fillStyle = '#000000';
  pe.ctx.fillRect(0, 0, 256, 512);

  p.ctx.fillStyle = '#081310';
  p.ctx.fillRect(36, 36, 184, 58);
  p.ctx.fillStyle = '#7effb2';
  p.ctx.font = 'bold 36px monospace';
  p.ctx.textAlign = 'center';
  p.ctx.fillText('¥140', 128, 76);
  pe.ctx.fillStyle = '#68d696';
  pe.ctx.font = 'bold 36px monospace';
  pe.ctx.textAlign = 'center';
  pe.ctx.fillText('¥140', 128, 76);

  p.ctx.fillStyle = '#8cbce0';
  p.ctx.font = 'bold 28px sans-serif';
  p.ctx.fillText('IC', 128, 148);
  p.ctx.fillStyle = '#7ea3b8';
  p.ctx.fillRect(58, 170, 140, 102);
  pe.ctx.fillStyle = '#48687a';
  pe.ctx.fillRect(62, 174, 132, 94);

  p.ctx.fillStyle = '#0b0c0e';
  p.ctx.fillRect(92, 326, 72, 14);
  p.ctx.fillStyle = '#8b2424';
  p.ctx.fillRect(104, 396, 48, 32);

  return {
    marqueeMap: configureTexture(m.canvas, { srgb: true }),
    panelMap: configureTexture(p.canvas, { srgb: true }),
    panelEmissive: configureTexture(pe.canvas, { srgb: true }),
  };
}

export function createSodaCanLabelTexture(brandIndex = 0) {
  const w = 256;
  const h = 256;
  const { canvas, ctx } = makeCanvas(w, h);
  const brands = [
    { top: '#cc1d24', mid: '#e2262e', bot: '#98141a', accent: '#ffffff', title: 'COLA', jp: 'コーラ', vol: '350ml' },
    { top: '#1872c8', mid: '#268be6', bot: '#eef6ff', accent: '#ffffff', title: 'POCARI', jp: 'スポーツ', vol: '350ml' },
    { top: '#2b1c12', mid: '#4b2d18', bot: '#d4a14a', accent: '#f6d178', title: 'BOSS', jp: '微糖珈琲', vol: '185g' },
    { top: '#1c7c40', mid: '#2b9c52', bot: '#12542b', accent: '#e2f7d4', title: 'お〜い', jp: '緑茶', vol: '350ml' },
    { top: '#d89b14', mid: '#f2ba2c', bot: '#c4830c', accent: '#fffbe6', title: 'C-LEMON', jp: 'レモンC', vol: '350ml' },
    { top: '#e2d8c8', mid: '#f0e6d6', bot: '#946238', accent: '#5a3214', title: 'ROYAL', jp: 'ミルク茶', vol: '280g' },
  ];
  const b = brands[brandIndex % brands.length];

  // Crisp bright Japanese commercial beverage wrap gradient
  const grad = ctx.createLinearGradient(0, 18, 0, h - 18);
  grad.addColorStop(0, b.top);
  grad.addColorStop(0.55, b.mid);
  grad.addColorStop(1, b.bot);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Diagonal dynamic Japanese graphic swoosh stripe
  ctx.fillStyle = 'rgba(255, 255, 255, 0.16)';
  ctx.beginPath();
  ctx.moveTo(0, 155);
  ctx.lineTo(w, 95);
  ctx.lineTo(w, 130);
  ctx.lineTo(0, 190);
  ctx.closePath();
  ctx.fill();

  // Metallic brushed aluminum top & bottom can rims
  ctx.fillStyle = '#c8d0d8';
  ctx.fillRect(0, 0, w, 18);
  ctx.fillRect(0, h - 16, w, 16);
  ctx.fillStyle = '#7e8690';
  ctx.fillRect(0, 18, w, 4);
  ctx.fillRect(0, h - 20, w, 4);

  // Crisp compact front-facing brand typography (sized to sit squarely on the visible front arc of the can!)
  ctx.fillStyle = b.accent;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = 'bold 28px "Arial Black", sans-serif';
  ctx.fillText(b.title, w * 0.5, 96);
  ctx.font = 'bold 24px "Yu Gothic", sans-serif';
  ctx.fillText(b.jp, w * 0.5, 140);

  // Small realistic nutrition / volume detail at bottom
  ctx.fillStyle = 'rgba(255, 255, 255, 0.88)';
  ctx.font = 'bold 14px monospace';
  ctx.fillText(b.vol, w * 0.5, 206);

  return configureTexture(canvas, { srgb: true });
}

/**
 * Outdoor AC unit circular fan shroud & louver grille texture.
 */
export function createACGrilleTexture() {
  const size = 256;
  const { canvas, ctx } = makeCanvas(size, size);
  ctx.fillStyle = '#4c5258';
  ctx.fillRect(0, 0, size, size);

  // Dark circular fan cavity + blades silhouette
  ctx.fillStyle = '#121518';
  ctx.beginPath();
  ctx.arc(96, 128, 78, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#202429';
  for (let b = 0; b < 3; b++) {
    ctx.save();
    ctx.translate(96, 128);
    ctx.rotate((b * Math.PI * 2) / 3);
    ctx.beginPath();
    ctx.ellipse(28, 0, 32, 14, 0.35, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  // Horizontal protective wire grille bars
  ctx.strokeStyle = '#33383e';
  ctx.lineWidth = 4;
  for (let y = 52; y <= 204; y += 16) {
    ctx.beginPath();
    ctx.moveTo(18, y);
    ctx.lineTo(174, y);
    ctx.stroke();
  }

  // Right service panel & warning label
  ctx.fillStyle = '#2c3136';
  ctx.fillRect(190, 26, 48, 204);
  ctx.fillStyle = '#b45a28';
  ctx.fillRect(198, 42, 32, 18);

  return configureTexture(canvas, { srgb: true });
}

export function createSteamSpriteTexture() {
  const size = 128;
  const { canvas, ctx } = makeCanvas(size, size);
  ctx.clearRect(0, 0, size, size);
  const lobes = [
    [64, 64, 52, 0.48],
    [48, 56, 36, 0.34],
    [82, 58, 34, 0.3],
    [60, 80, 38, 0.3],
    [68, 44, 30, 0.26],
  ];
  for (const [cx, cy, r, a] of lobes) {
    const g = ctx.createRadialGradient(cx, cy, 2, cx, cy, r);
    g.addColorStop(0, `rgba(232, 240, 248, ${a})`);
    g.addColorStop(0.55, `rgba(218, 228, 240, ${a * 0.42})`);
    g.addColorStop(1, 'rgba(210, 222, 236, 0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
  }
  return configureTexture(canvas, { srgb: true });
}

/**
 * Architectural upper-floor Japanese apartment/office window with dark aluminum mullions
 * and subtle Venetian blinds behind glass.
 */
export function createLitWindowTexture(tintHex = '#2a5678') {
  const w = 256;
  const h = 256;
  const { canvas, ctx } = makeCanvas(w, h);
  const emC = makeCanvas(w, h);

  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, '#14263a');
  g.addColorStop(0.45, tintHex);
  g.addColorStop(1, '#0d1927');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
  emC.ctx.fillStyle = g;
  emC.ctx.fillRect(0, 0, w, h);

  // Soft interior drapes & ceiling glow (zero thin blind bars that Moire-flicker!)
  for (const tCtx of [ctx, emC.ctx]) {
    const drapeL = tCtx.createLinearGradient(12, 0, 82, 0);
    drapeL.addColorStop(0, 'rgba(6, 10, 16, 0.72)');
    drapeL.addColorStop(1, 'rgba(6, 10, 16, 0)');
    tCtx.fillStyle = drapeL;
    tCtx.fillRect(12, 12, 74, h - 24);

    const drapeR = tCtx.createLinearGradient(w - 12, 0, w - 82, 0);
    drapeR.addColorStop(0, 'rgba(6, 10, 16, 0.68)');
    drapeR.addColorStop(1, 'rgba(6, 10, 16, 0)');
    tCtx.fillStyle = drapeR;
    tCtx.fillRect(w - 86, 12, 74, h - 24);
  }

  // Bold dark aluminum outer frame & central sliding mullion
  ctx.strokeStyle = '#11151b';
  ctx.lineWidth = 18;
  ctx.strokeRect(9, 9, w - 18, h - 18);
  ctx.fillStyle = '#12161d';
  ctx.fillRect(w * 0.5 - 8, 8, 16, h - 16);
  ctx.fillRect(8, h * 0.62, w - 16, 12);

  emC.ctx.strokeStyle = '#030406';
  emC.ctx.lineWidth = 18;
  emC.ctx.strokeRect(9, 9, w - 18, h - 18);
  emC.ctx.fillStyle = '#030406';
  emC.ctx.fillRect(w * 0.5 - 8, 8, 16, h - 16);
  emC.ctx.fillRect(8, h * 0.62, w - 16, 12);

  return {
    map: configureTexture(canvas, { srgb: true }),
    emissiveMap: configureTexture(emC.canvas, { srgb: true }),
  };
}

/**
 * Photorealistic 1024x1024 Japanese mid-rise zakkyo commercial facade PBR textures:
 * smooth anti-Moire satin glazing & soft interior drapes so windows never shimmer when moving.
 */
export function createShinjukuBuildingTextures(maxAnisotropy = 8, seed = 101, style = 'office') {
  const size = 1024;
  const { canvas, ctx } = makeCanvas(size, size);
  const emC = makeCanvas(size, size);
  const roughC = makeCanvas(size, size);
  const heightC = makeCanvas(size, size);
  const rng = mulberry32(seed);

  const wallBase = style === 'brick' ? '#1e1b1a' : '#181c22';
  ctx.fillStyle = wallBase;
  ctx.fillRect(0, 0, size, size);
  emC.ctx.fillStyle = '#000000';
  emC.ctx.fillRect(0, 0, size, size);
  roughC.ctx.fillStyle = '#e8e8e8';
  roughC.ctx.fillRect(0, 0, size, size);
  heightC.ctx.fillStyle = '#c8c8c8';
  heightC.ctx.fillRect(0, 0, size, size);

  for (let i = 0; i < 120; i++) {
    const gx = rng() * size;
    const gy = rng() * size;
    const gh = 60 + rng() * 180;
    const g = ctx.createLinearGradient(0, gy, 0, gy + gh);
    g.addColorStop(0, 'rgba(6, 8, 12, 0.32)');
    g.addColorStop(1, 'rgba(6, 8, 12, 0)');
    ctx.fillStyle = g;
    ctx.fillRect(gx, gy, 8 + rng() * 16, gh);
  }

  const rows = 6;
  const cols = 6;
  const cellW = size / cols;
  const cellH = size / rows;

  for (let r = 0; r < rows; r++) {
    const floorRoomCluster = rng();
    for (let c = 0; c < cols; c++) {
      const bayLitProb = floorRoomCluster > 0.5 && c % 3 !== 2 ? 0.42 : 0.08;
      const isLit = rng() < bayLitProb;

      const fx = c * cellW + 16;
      const fy = r * cellH + 26;
      const fw = cellW - 32;
      const fh = cellH - 54;

      ctx.fillStyle = '#0e1116';
      ctx.fillRect(fx, fy, fw, fh);
      heightC.ctx.fillStyle = '#606060';
      heightC.ctx.fillRect(fx, fy, fw, fh);
      roughC.ctx.fillStyle = '#b4b4b4';
      roughC.ctx.fillRect(fx, fy, fw, fh);

      const gx = fx + 8;
      const gy = fy + 8;
      const gw = fw - 16;
      const gh = fh - 16;

      heightC.ctx.fillStyle = '#404040';
      heightC.ctx.fillRect(gx, gy, gw, gh);
      roughC.ctx.fillStyle = '#989898';
      roughC.ctx.fillRect(gx, gy, gw, gh);

      if (isLit) {
        const isWarm = rng() < (style === 'brick' ? 0.68 : 0.44);
        const bright = 0.55 + rng() * 0.38;
        for (const tCtx of [ctx, emC.ctx]) {
          const rg = tCtx.createLinearGradient(0, gy, 0, gy + gh);
          if (isWarm) {
            rg.addColorStop(0, `rgb(${Math.round(210 * bright)}, ${Math.round(154 * bright)}, ${Math.round(92 * bright)})`);
            rg.addColorStop(0.58, `rgb(${Math.round(138 * bright)}, ${Math.round(98 * bright)}, ${Math.round(60 * bright)})`);
            rg.addColorStop(1, `rgb(${Math.round(44 * bright)}, ${Math.round(32 * bright)}, ${Math.round(20 * bright)})`);
          } else {
            rg.addColorStop(0, `rgb(${Math.round(145 * bright)}, ${Math.round(178 * bright)}, ${Math.round(208 * bright)})`);
            rg.addColorStop(0.58, `rgb(${Math.round(88 * bright)}, ${Math.round(116 * bright)}, ${Math.round(144 * bright)})`);
            rg.addColorStop(1, `rgb(${Math.round(26 * bright)}, ${Math.round(36 * bright)}, ${Math.round(48 * bright)})`);
          }
          tCtx.fillStyle = rg;
          tCtx.fillRect(gx, gy, gw, gh);

          const curtainW = gw * (0.18 + rng() * 0.25);
          const cg = tCtx.createLinearGradient(gx, 0, gx + curtainW, 0);
          cg.addColorStop(0, 'rgba(10, 14, 20, 0.58)');
          cg.addColorStop(1, 'rgba(10, 14, 20, 0)');
          tCtx.fillStyle = cg;
          tCtx.fillRect(gx, gy, curtainW, gh);

          tCtx.fillStyle = 'rgba(12, 14, 18, 0.44)';
          tCtx.fillRect(gx, gy + gh * 0.72, gw, gh * 0.28);
        }
      } else {
        const skyRefl = ctx.createLinearGradient(0, gy, 0, gy + gh);
        skyRefl.addColorStop(0, '#132030');
        skyRefl.addColorStop(0.5, '#0b121c');
        skyRefl.addColorStop(1, '#070b11');
        ctx.fillStyle = skyRefl;
        ctx.fillRect(gx, gy, gw, gh);
      }

      // Bold clean center sash mullion (8px wide - zero shimmering!)
      ctx.fillStyle = '#0d1015';
      emC.ctx.fillStyle = '#000000';
      ctx.fillRect(gx + gw * 0.5 - 4, gy, 8, gh);
      emC.ctx.fillRect(gx + gw * 0.5 - 4, gy, 8, gh);
      ctx.fillRect(gx, gy + gh * 0.62, gw, 7);
      emC.ctx.fillRect(gx, gy + gh * 0.62, gw, 7);
    }
  }

  return {
    map: configureTexture(canvas, { srgb: true, repeat: [1, 1], anisotropy: maxAnisotropy }),
    roughnessMap: configureTexture(roughC.canvas, { srgb: false, repeat: [1, 1], anisotropy: maxAnisotropy }),
    normalMap: configureTexture(heightCanvasToNormalCanvas(heightC.canvas, 0.55), {
      srgb: false,
      repeat: [1, 1],
      anisotropy: maxAnisotropy,
    }),
    emissiveMap: configureTexture(emC.canvas, { srgb: true, repeat: [1, 1], anisotropy: maxAnisotropy }),
  };
}

/**
 * Ground-floor 24H Shinjuku Konbini / Cafe storefront fascia + illuminated glass aisle interior.
 */
export function createKonbiniStorefrontTexture() {
  const w = 512;
  const h = 256;
  const { canvas, ctx } = makeCanvas(w, h);
  const emC = makeCanvas(w, h);

  ctx.fillStyle = '#11161c';
  ctx.fillRect(0, 0, w, h);
  emC.ctx.fillStyle = '#030406';
  emC.ctx.fillRect(0, 0, w, h);

  // Top fascia illuminated band (subtle emerald/orange convenience store stripe)
  ctx.fillStyle = '#1c3a32';
  ctx.fillRect(10, 12, w - 20, 48);
  emC.ctx.fillStyle = '#2d6858';
  emC.ctx.fillRect(10, 12, w - 20, 48);

  for (const tCtx of [ctx, emC.ctx]) {
    tCtx.fillStyle = '#d9692b';
    tCtx.fillRect(10, 12, w - 20, 7);
    tCtx.fillStyle = '#2d8c66';
    tCtx.fillRect(10, 52, w - 20, 8);
    tCtx.fillStyle = '#edf4f7';
    tCtx.font = 'bold 24px "Yu Gothic", sans-serif';
    tCtx.textAlign = 'center';
    tCtx.textBaseline = 'middle';
    tCtx.fillText('NIGHT MART', w * 0.26, 36);
    tCtx.fillText('24H · 酒・弁当', w * 0.74, 36);
  }

  // Interior warm-white supermarket ceiling light + blurred shelving silhouettes behind glass
  for (const tCtx of [ctx, emC.ctx]) {
    const interior = tCtx.createLinearGradient(0, 72, 0, h - 10);
    interior.addColorStop(0, '#c8d6df');
    interior.addColorStop(0.55, '#899aa6');
    interior.addColorStop(1, '#39424b');
    tCtx.fillStyle = interior;
    tCtx.fillRect(18, 72, w - 36, h - 82);

    // Shelf aisle dark horizontal bands & vertical magazine rack
    tCtx.fillStyle = 'rgba(18, 22, 28, 0.55)';
    for (const sy of [118, 152, 186, 214]) {
      tCtx.fillRect(28, sy, 260, 12);
    }
    // Fluorescent ceiling tube strips
    tCtx.fillStyle = '#eef6ff';
    tCtx.fillRect(42, 80, 120, 5);
    tCtx.fillRect(210, 80, 120, 5);
  }

  // Dark aluminum glass door frames & mullions
  ctx.fillStyle = '#12161b';
  emC.ctx.fillStyle = '#000000';
  for (const mx of [128, 256, 384]) {
    ctx.fillRect(mx - 4, 72, 8, h - 82);
    emC.ctx.fillRect(mx - 4, 72, 8, h - 82);
  }

  return {
    map: configureTexture(canvas, { srgb: true }),
    emissiveMap: configureTexture(emC.canvas, { srgb: true }),
  };
}

/**
 * Woven straw Komodaru Japanese Sake Barrel texture ("夜雨酒造 · 上撰").
 */
export function createSakeBarrelTexture() {
  const w = 512;
  const h = 256;
  const { canvas, ctx } = makeCanvas(w, h);
  const rng = mulberry32(8123);

  ctx.fillStyle = '#9a835a';
  ctx.fillRect(0, 0, w, h);

  // Woven straw fibers
  for (let i = 0; i < 1200; i++) {
    const x = rng() * w;
    const y = rng() * h;
    ctx.fillStyle = rng() > 0.5 ? 'rgba(62, 46, 24, 0.22)' : 'rgba(220, 198, 152, 0.18)';
    ctx.fillRect(x, y, 2, 10 + rng() * 14);
  }

  // Horizontal straw rope bands top & bottom
  for (const ry of [24, 42, h - 42, h - 24]) {
    ctx.fillStyle = '#6f5938';
    ctx.fillRect(0, ry, w, 10);
    ctx.strokeStyle = 'rgba(35, 24, 12, 0.45)';
    ctx.lineWidth = 2;
    for (let sx = 0; sx < w; sx += 10) {
      ctx.beginPath();
      ctx.moveTo(sx, ry);
      ctx.lineTo(sx + 6, ry + 10);
      ctx.stroke();
    }
  }

  // Cream front crest banner + red/black brewery calligraphy
  for (const cx of [w * 0.25, w * 0.75]) {
    ctx.fillStyle = '#ded4be';
    ctx.fillRect(cx - 72, 60, 144, h - 120);
    ctx.strokeStyle = '#9e2622';
    ctx.lineWidth = 5;
    ctx.strokeRect(cx - 66, 66, 132, h - 132);

    ctx.fillStyle = '#9e2622';
    ctx.beginPath();
    ctx.arc(cx, 96, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#f2e8d4';
    ctx.font = 'bold 18px "Yu Mincho", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('酒', cx, 97);

    ctx.fillStyle = '#181412';
    ctx.font = 'bold 34px "Yu Mincho", "Yu Gothic", serif';
    ctx.fillText('夜雨', cx, 148);
    ctx.font = 'bold 16px "Yu Gothic", sans-serif';
    ctx.fillText('特撰清酒', cx, 178);
  }

  return configureTexture(canvas, { srgb: true });
}

/**
 * Hand-written dark chalkboard ramen shop easel menu ("営業中 OPEN").
 */
export function createChalkboardMenuTexture() {
  const w = 256;
  const h = 384;
  const { canvas, ctx } = makeCanvas(w, h);
  const rng = mulberry32(411);

  ctx.fillStyle = '#171c1b';
  ctx.fillRect(0, 0, w, h);
  // Subtle chalk smudge dust
  for (let i = 0; i < 240; i++) {
    ctx.fillStyle = 'rgba(225, 232, 228, 0.025)';
    ctx.fillRect(rng() * w, rng() * h, 12 + rng() * 24, 3);
  }

  ctx.strokeStyle = 'rgba(232, 212, 168, 0.65)';
  ctx.lineWidth = 3;
  ctx.strokeRect(12, 12, w - 24, h - 24);

  ctx.textAlign = 'center';
  ctx.fillStyle = '#f2b068';
  ctx.font = 'bold 26px "Yu Gothic", sans-serif';
  ctx.fillText('麺屋 夜雨', w * 0.5, 50);

  ctx.fillStyle = '#8be4b8';
  ctx.font = 'bold 16px monospace';
  ctx.fillText('— 営業中 · OPEN —', w * 0.5, 82);

  // Hand-drawn chalk ramen bowl doodle
  ctx.strokeStyle = '#efe5d0';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(w * 0.5, 134, 28, 0, Math.PI, false);
  ctx.closePath();
  ctx.stroke();
  for (const sx of [-12, 0, 12]) {
    ctx.beginPath();
    ctx.moveTo(w * 0.5 + sx, 124);
    ctx.quadraticCurveTo(w * 0.5 + sx + 5, 110, w * 0.5 + sx - 2, 98);
    ctx.stroke();
  }

  const lines = [
    ['醤油ラーメン', '¥850'],
    ['特製味噌', '¥950'],
    ['焼餃子 5ヶ', '¥450'],
    ['生ビール', '¥550'],
  ];
  ctx.font = 'bold 18px "Yu Gothic", sans-serif';
  lines.forEach(([name, price], i) => {
    const y = 204 + i * 38;
    ctx.textAlign = 'left';
    ctx.fillStyle = '#e7dfd0';
    ctx.fillText(name, 26, y);
    ctx.textAlign = 'right';
    ctx.fillStyle = '#f5be78';
    ctx.fillText(price, w - 26, y);
  });

  return configureTexture(canvas, { srgb: true });
}

/**
 * Aged cypress (Hinoki) hanging wooden menu plaque ("お品書き").
 */
export function createWoodMenuSlatTexture(title = '醤油麺', price = '八五〇円') {
  const w = 128;
  const h = 384;
  const { canvas, ctx } = makeCanvas(w, h);
  const g = ctx.createLinearGradient(0, 0, w, 0);
  g.addColorStop(0, '#6e5236');
  g.addColorStop(0.5, '#8a6845');
  g.addColorStop(1, '#5e452d');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = '#24180e';
  ctx.lineWidth = 6;
  ctx.strokeRect(5, 5, w - 10, h - 10);

  ctx.fillStyle = '#18110c';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = 'bold 42px "Yu Mincho", serif';
  [...title].forEach((ch, idx) => {
    ctx.fillText(ch, w * 0.5, 62 + idx * 54);
  });
  ctx.font = 'bold 20px "Yu Mincho", serif';
  ctx.fillStyle = '#3b2414';
  ctx.fillText(price, w * 0.5, h - 38);

  return configureTexture(canvas, { srgb: true });
}

/**
 * Weathered striped canvas shop awning fabric for Izakaya storefront.
 */
export function createAwningStripeTexture() {
  const size = 256;
  const { canvas, ctx } = makeCanvas(size, size);
  const rng = mulberry32(552);

  for (let i = 0; i < 8; i++) {
    ctx.fillStyle = i % 2 === 0 ? '#4e1a1c' : '#9c8f78';
    ctx.fillRect(i * (size / 8), 0, size / 8, size);
  }
  // Rain grime darkening along bottom hem
  const grime = ctx.createLinearGradient(0, 0, 0, size);
  grime.addColorStop(0, 'rgba(10, 8, 8, 0.25)');
  grime.addColorStop(0.75, 'rgba(10, 8, 8, 0.08)');
  grime.addColorStop(1, 'rgba(8, 6, 6, 0.52)');
  ctx.fillStyle = grime;
  ctx.fillRect(0, 0, size, size);

  for (let i = 0; i < 400; i++) {
    ctx.fillStyle = rng() > 0.5 ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.03)';
    ctx.fillRect(0, rng() * size, size, 1.5);
  }
  return configureTexture(canvas, { srgb: true, repeat: [2, 1] });
}

/**
 * Neighborhood Japanese notice board with damp pinned flyers & retro posters.
 */
export function createNoticeBoardTexture() {
  const w = 512;
  const h = 384;
  const { canvas, ctx } = makeCanvas(w, h);
  ctx.fillStyle = '#2d241c';
  ctx.fillRect(0, 0, w, h);

  // Header strip
  ctx.fillStyle = '#1d3228';
  ctx.fillRect(14, 14, w - 28, 42);
  ctx.fillStyle = '#dfe6dc';
  ctx.font = 'bold 22px "Yu Gothic", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('新宿町内会 · 掲示板', w * 0.5, 43);

  const flyers = [
    { x: 30, y: 74, fw: 120, fh: 146, bg: '#d6ccb4', accent: '#9e2b25', text: '秋祭り' },
    { x: 175, y: 82, fw: 138, fh: 132, bg: '#c8d2d8', accent: '#1e4a72', text: '防犯' },
    { x: 338, y: 72, fw: 140, fh: 162, bg: '#dec8a4', accent: '#b8561e', text: '深夜営業' },
    { x: 48, y: 238, fw: 150, fh: 112, bg: '#d8d4ca', accent: '#285e42', text: 'ゴミ収集' },
    { x: 226, y: 234, fw: 235, fh: 120, bg: '#c9c2b2', accent: '#7c2432', text: '生ビール半額' },
  ];
  for (const f of flyers) {
    ctx.save();
    ctx.translate(f.x + f.fw * 0.5, f.y + f.fh * 0.5);
    ctx.rotate((f.x % 7 - 3) * 0.014);
    ctx.fillStyle = f.bg;
    ctx.fillRect(-f.fw * 0.5, -f.fh * 0.5, f.fw, f.fh);
    ctx.fillStyle = f.accent;
    ctx.fillRect(-f.fw * 0.5 + 8, -f.fh * 0.5 + 10, f.fw - 16, 26);
    ctx.fillStyle = '#f2f0ea';
    ctx.font = 'bold 17px "Yu Gothic", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(f.text, 0, -f.fh * 0.5 + 29);
    ctx.fillStyle = 'rgba(20, 22, 26, 0.55)';
    for (let ly = -f.fh * 0.5 + 48; ly < f.fh * 0.5 - 12; ly += 14) {
      ctx.fillRect(-f.fw * 0.5 + 12, ly, f.fw - 28, 4);
    }
    ctx.restore();
  }

  return configureTexture(canvas, { srgb: true });
}

/**
 * Alpha-cutout organic fallen autumn leaf texture (for wet street gutter scatter).
 */
export function createFallenLeafTexture() {
  const size = 128;
  const { canvas, ctx } = makeCanvas(size, size);
  ctx.clearRect(0, 0, size, size);

  ctx.save();
  ctx.translate(size * 0.5, size * 0.52);
  const g = ctx.createLinearGradient(0, -45, 0, 45);
  g.addColorStop(0, '#9e5420');
  g.addColorStop(0.55, '#7a3e18');
  g.addColorStop(1, '#4a2610');
  ctx.fillStyle = g;

  ctx.beginPath();
  ctx.moveTo(0, 44);
  ctx.bezierCurveTo(-42, 20, -44, -22, 0, -48);
  ctx.bezierCurveTo(44, -22, 42, 20, 0, 44);
  ctx.closePath();
  ctx.fill();

  // Central vein & side veins
  ctx.strokeStyle = 'rgba(34, 16, 6, 0.55)';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(0, 50);
  ctx.lineTo(0, -40);
  ctx.stroke();
  ctx.restore();

  return configureTexture(canvas, { srgb: true });
}

/**
 * Alpha-cutout organic drooping bamboo / fern frond texture for potted street plants.
 */
export function createFoliageFrondTexture() {
  const w = 128;
  const h = 256;
  const { canvas, ctx } = makeCanvas(w, h);
  ctx.clearRect(0, 0, w, h);

  // Center stem
  ctx.strokeStyle = '#223820';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h);
  ctx.quadraticCurveTo(w * 0.48, h * 0.5, w * 0.52, 16);
  ctx.stroke();

  // Pairs of narrow lance-shaped Japanese bamboo/fern leaflets
  for (let i = 0; i < 9; i++) {
    const ty = h - 28 - i * 24;
    const scale = 1.0 - Math.abs(i - 3.5) * 0.1;
    for (const side of [-1, 1]) {
      ctx.save();
      ctx.translate(w * 0.5, ty);
      ctx.rotate(side * (0.58 + i * 0.03));
      const lg = ctx.createLinearGradient(0, 0, side * 46 * scale, 0);
      lg.addColorStop(0, '#1c331c');
      lg.addColorStop(0.6, '#2d522a');
      lg.addColorStop(1, '#3c6832');
      ctx.fillStyle = lg;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(side * 24 * scale, -10 * scale, side * 52 * scale, -4 * scale);
      ctx.quadraticCurveTo(side * 24 * scale, 8 * scale, 0, 0);
      ctx.fill();
      ctx.restore();
    }
  }

  return configureTexture(canvas, { srgb: true });
}

/**
 * Alpha-blended organic asphalt hairline crack & damp oil-sheen road patch decal.
 */
export function createRoadCrackDecalTexture() {
  const size = 256;
  const { canvas, ctx } = makeCanvas(size, size);
  ctx.clearRect(0, 0, size, size);

  // Subtle dark wet tar/grime stain around crack
  const stain = ctx.createRadialGradient(128, 128, 8, 128, 128, 110);
  stain.addColorStop(0, 'rgba(6, 8, 12, 0.52)');
  stain.addColorStop(0.6, 'rgba(10, 14, 20, 0.22)');
  stain.addColorStop(1, 'rgba(10, 14, 20, 0)');
  ctx.fillStyle = stain;
  ctx.fillRect(0, 0, size, size);

  // Organic branching crack polyline
  ctx.strokeStyle = 'rgba(4, 5, 7, 0.85)';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(28, 62);
  ctx.lineTo(74, 88);
  ctx.lineTo(118, 124);
  ctx.lineTo(162, 146);
  ctx.lineTo(222, 198);
  ctx.moveTo(118, 124);
  ctx.lineTo(148, 92);
  ctx.lineTo(186, 76);
  ctx.moveTo(162, 146);
  ctx.lineTo(132, 194);
  ctx.stroke();

  return configureTexture(canvas, { srgb: true });
}

/**
 * Photorealistic Japanese Ramen-ya interior back wall (1024x512):
 * aged shikkui plaster with kitchen soot patina, dark timber nageshi rail,
 * subway tile backsplash with dark mortar grout, Showa vintage beer poster,
 * analog wall clock (02:14), framed calligraphy, and uneven hand-calligraphed Tanzaku menu slips.
 */
export function createRamenInteriorBackTexture() {
  const w = 1024;
  const h = 512;
  const { canvas, ctx } = makeCanvas(w, h);
  const rng = mulberry32(9912);

  // Warm aged plaster wall with upper kitchen steam/soot darkening
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, '#5a4d3c');
  g.addColorStop(0.25, '#8c7a60');
  g.addColorStop(0.58, '#9b896d');
  g.addColorStop(1, '#584c3c');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);

  // Authentic plaster trowel mottling, oil vapor patina & subtle water stains
  for (let i = 0; i < 1200; i++) {
    ctx.fillStyle = rng() > 0.48 ? 'rgba(34, 22, 12, 0.055)' : 'rgba(240, 224, 196, 0.035)';
    ctx.fillRect(rng() * w, rng() * h, 14 + rng() * 44, 4 + rng() * 14);
  }

  // Dark aged cedar timber rail (nageshi) running horizontally across upper wall
  ctx.fillStyle = '#2d1e14';
  ctx.fillRect(0, 14, w, 26);
  ctx.fillStyle = 'rgba(0,0,0,0.4)';
  ctx.fillRect(0, 40, w, 7);

  // Lower glazed off-white ceramic kitchen backsplash tiles with dark grout & grease darkening
  const tileTop = Math.floor(h * 0.56);
  ctx.fillStyle = '#2d2620';
  ctx.fillRect(0, tileTop, w, h - tileTop);
  ctx.fillStyle = '#3a2718';
  ctx.fillRect(0, tileTop - 10, w, 12); // wood trim cap above tile
  for (let ty = tileTop + 4; ty < h; ty += 34) {
    const rowOff = ((ty - tileTop) / 34) % 2 === 0 ? 0 : 28;
    for (let tx = -28 + rowOff; tx < w; tx += 58) {
      const shade = 148 + Math.floor(rng() * 22) - Math.floor((ty - tileTop) * 0.14);
      ctx.fillStyle = `rgb(${shade}, ${shade - 9}, ${shade - 22})`;
      ctx.fillRect(tx + 2, ty, 54, 30);
      // Subtle glossy highlight along top edge of each ceramic tile
      ctx.fillStyle = 'rgba(255, 245, 225, 0.08)';
      ctx.fillRect(tx + 3, ty + 1, 52, 4);
    }
  }

  // Row of uneven hand-calligraphed Tanzaku paper menu slips kept strictly in UPPER wall zone (zero shelf overlap!)
  const slips = [
    { t: '醤油拉麺', p: '850', col: '#e3d3a9' },
    { t: '味噌拉麺', p: '950', col: '#d9c493' },
    { t: '叉焼麺', p: '1150', col: '#e6d6af' },
    { t: '味玉子', p: '150', col: '#dec99b' },
    { t: '焼餃子', p: '450', col: '#d4be8e' },
    { t: '生ビール', p: '550', col: '#e4d3a5' },
  ];
  slips.forEach((s, idx) => {
    const sx = 66 + idx * 108;
    const sy = 48 + (idx % 3) * 4;
    ctx.save();
    ctx.translate(sx, sy);
    ctx.rotate(((idx % 3) - 1) * 0.018);
    ctx.fillStyle = 'rgba(18, 10, 5, 0.34)';
    ctx.fillRect(4, 5, 68, 162);
    ctx.fillStyle = s.col;
    ctx.fillRect(0, 0, 68, 162);
    ctx.strokeStyle = 'rgba(128, 78, 38, 0.38)';
    ctx.lineWidth = 2;
    ctx.strokeRect(4, 4, 60, 154);
    ctx.fillStyle = 'rgba(210, 198, 168, 0.55)';
    ctx.fillRect(21, -4, 26, 10);

    ctx.fillStyle = '#1b120c';
    ctx.font = 'bold 26px "Yu Mincho", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const chars = [...s.t];
    const step = chars.length > 3 ? 27 : 34;
    chars.forEach((ch, ci) => {
      ctx.fillText(ch, 34, 28 + ci * step);
    });
    ctx.fillStyle = '#a42820';
    ctx.fillRect(48, 120, 10, 10);
    ctx.fillStyle = '#7c2118';
    ctx.font = 'bold 16px monospace';
    ctx.fillText(`¥${s.p}`, 34, 146);
    ctx.restore();
  });

  // Classic round Showa analog wall clock showing 02:14 placed cleanly left of the corner range hood
  const clx = 762;
  const cly = 114;
  ctx.fillStyle = 'rgba(0,0,0,0.38)';
  ctx.beginPath();
  ctx.arc(clx + 4, cly + 5, 42, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#312015';
  ctx.beginPath();
  ctx.arc(clx, cly, 42, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#e7ddc4';
  ctx.beginPath();
  ctx.arc(clx, cly, 35, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#1e1915';
  ctx.lineWidth = 2;
  for (let hTick = 0; hTick < 12; hTick++) {
    const a = (hTick / 12) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(clx + Math.cos(a) * 26, cly + Math.sin(a) * 26);
    ctx.lineTo(clx + Math.cos(a) * 32, cly + Math.sin(a) * 32);
    ctx.stroke();
  }
  ctx.lineWidth = 3.5;
  ctx.beginPath();
  ctx.moveTo(clx, cly);
  ctx.lineTo(clx + Math.cos(-0.42) * 19, cly + Math.sin(-0.42) * 19);
  ctx.stroke();
  ctx.lineWidth = 2.2;
  ctx.beginPath();
  ctx.moveTo(clx, cly);
  ctx.lineTo(clx + Math.cos(-0.08) * 28, cly + Math.sin(-0.08) * 28);
  ctx.stroke();

  // Framed dark-wood calligraphy plaque ("麺道") right under clock, cleanly above back shelf!
  ctx.fillStyle = '#24170f';
  ctx.fillRect(712, 168, 102, 52);
  ctx.fillStyle = '#ded2b4';
  ctx.fillRect(718, 174, 90, 40);
  ctx.fillStyle = '#1c140e';
  ctx.font = 'bold 26px "Yu Mincho", serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('麺 道', 763, 195);

  // Subtle vertical ambient occlusion vignette toward corners
  const vig = ctx.createLinearGradient(0, 0, w, 0);
  vig.addColorStop(0, 'rgba(10, 6, 3, 0.35)');
  vig.addColorStop(0.12, 'rgba(10, 6, 3, 0)');
  vig.addColorStop(0.88, 'rgba(10, 6, 3, 0)');
  vig.addColorStop(1, 'rgba(10, 6, 3, 0.35)');
  ctx.fillStyle = vig;
  ctx.fillRect(0, 0, w, h);

  return configureTexture(canvas, { srgb: true });
}

/**
 * Detailed overhead ramen bowl texture (rich tonkotsu/shoyu broth, noodles, chashu, egg, narutomaki, scallions).
 */
export function createRamenBowlTopTexture() {
  const size = 256;
  const { canvas, ctx } = makeCanvas(size, size);
  const cx = size / 2;
  const cy = size / 2;

  // Golden-amber ramen broth with subtle oil sheen droplets
  const bg = ctx.createRadialGradient(cx, cy, 12, cx, cy, 124);
  bg.addColorStop(0, '#c97e32');
  bg.addColorStop(0.75, '#8f4d18');
  bg.addColorStop(1, '#542a0c');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, size, size);

  // Swirled golden ramen noodles
  ctx.strokeStyle = '#e5be76';
  ctx.lineWidth = 5;
  for (let i = 0; i < 16; i++) {
    ctx.beginPath();
    ctx.arc(cx + (i % 3 - 1) * 14, cy + ((i * 7) % 3 - 1) * 12, 36 + i * 4, i * 0.4, i * 0.4 + 2.1);
    ctx.stroke();
  }

  // Sliced Chashu braised pork belly
  ctx.fillStyle = '#7c4b32';
  ctx.beginPath();
  ctx.ellipse(cx - 42, cy - 18, 40, 30, -0.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#b48866';
  ctx.beginPath();
  ctx.ellipse(cx - 42, cy - 18, 30, 20, -0.3, 0, Math.PI * 2);
  ctx.fill();

  // Halved Ajitama soft-boiled ramen egg
  ctx.fillStyle = '#f2ead8';
  ctx.beginPath();
  ctx.ellipse(cx + 42, cy - 28, 28, 22, 0.35, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#d96e18';
  ctx.beginPath();
  ctx.arc(cx + 42, cy - 28, 14, 0, Math.PI * 2);
  ctx.fill();

  // Narutomaki white/pink swirl fishcake
  ctx.fillStyle = '#f5f2eb';
  ctx.beginPath();
  ctx.arc(cx + 38, cy + 36, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#e06c84';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(cx + 38, cy + 36, 10, 0, Math.PI * 1.7);
  ctx.stroke();

  // Scattered chopped green scallion rings
  const rng = mulberry32(412);
  for (let i = 0; i < 24; i++) {
    const a = rng() * Math.PI * 2;
    const r = rng() * 68;
    ctx.strokeStyle = rng() > 0.4 ? '#4d8a38' : '#76b354';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(cx + Math.cos(a) * r, cy + Math.sin(a) * r, 5, 0, Math.PI * 2);
    ctx.stroke();
  }

  return configureTexture(canvas, { srgb: true });
}

/**
 * Crumpled polyethylene trash bag normal map for soft natural plastic creases.
 */
export function createTrashBagNormalTexture() {
  const size = 256;
  const hC = makeCanvas(size, size);
  const ctx = hC.ctx;
  const rng = mulberry32(607);
  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, size, size);

  for (let i = 0; i < 45; i++) {
    const x1 = rng() * size;
    const y1 = rng() * size;
    const ang = rng() * Math.PI * 2;
    const len = 35 + rng() * 90;
    const g = ctx.createLinearGradient(x1, y1, x1 + Math.cos(ang) * 20, y1 + Math.sin(ang) * 20);
    g.addColorStop(0, 'rgba(215, 215, 215, 0.25)');
    g.addColorStop(0.5, 'rgba(65, 65, 65, 0.25)');
    g.addColorStop(1, 'rgba(128, 128, 128, 0)');
    ctx.strokeStyle = g;
    ctx.lineWidth = 8 + rng() * 14;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.quadraticCurveTo(
      x1 + Math.cos(ang + 0.4) * len * 0.5,
      y1 + Math.sin(ang + 0.4) * len * 0.5,
      x1 + Math.cos(ang) * len,
      y1 + Math.sin(ang) * len
    );
    ctx.stroke();
  }
  return configureTexture(heightCanvasToNormalCanvas(hC.canvas, 0.9), { srgb: false, repeat: [2, 2] });
}

/**
 * Pure mathematical smooth inverse-square optical flare for streetlamp lenses (ZERO hard circular boundary!).
 */
export function createLampGlareTexture() {
  const size = 256;
  const { canvas, ctx } = makeCanvas(size, size);
  const img = ctx.createImageData(size, size);
  const half = size * 0.5;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = (x - half) / half;
      const dy = (y - half) / half;
      const r = Math.sqrt(dx * dx + dy * dy);
      const edgeFade = Math.max(0, 1 - r);
      const smoothEdge = edgeFade * edgeFade * (3 - 2 * edgeFade);
      // Tight hot optical core + smooth physically realistic inverse-square falloff
      const core = Math.exp(-r * r * 36.0) * 0.9;
      const halo = Math.exp(-r * 5.2) * 0.34 * smoothEdge;
      const val = Math.min(1, core + halo);
      const idx = (y * size + x) * 4;
      img.data[idx] = 255;
      img.data[idx + 1] = 250;
      img.data[idx + 2] = 240;
      img.data[idx + 3] = Math.round(val * 255);
    }
  }
  ctx.putImageData(img, 0, 0);
  return configureTexture(canvas, { srgb: true });
}

/**
 * Strictly DOWNWARD-ONLY rain-mist light scatter texture (zero light above solid lamp hood!).
 */
export function createDownwardLightBeamTexture() {
  const size = 256;
  const { canvas, ctx } = makeCanvas(size, size);
  const img = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) {
    // v = 0 at top (under hood), v = 1 at bottom
    const v = y / (size - 1);
    // Strict zero above v < 0.06, gentle onset under visor, smooth inverse fade downward
    const topClip = Math.min(1, Math.max(0, (v - 0.05) / 0.14));
    const vertFade = Math.pow(Math.max(0, 1 - v), 1.95) * topClip;
    // Beam widens naturally downward into the humid rain air
    const spread = 0.18 + v * 0.44;
    for (let x = 0; x < size; x++) {
      const u = (x / (size - 1)) * 2 - 1;
      const hRatio = Math.abs(u) / spread;
      const horizFade = hRatio >= 1 ? 0 : Math.pow(1 - hRatio * hRatio, 2.2);
      const alpha = Math.min(1, vertFade * horizFade);
      const idx = (y * size + x) * 4;
      img.data[idx] = 255;
      img.data[idx + 1] = 252;
      img.data[idx + 2] = 246;
      img.data[idx + 3] = Math.round(alpha * 255);
    }
  }
  ctx.putImageData(img, 0, 0);
  return configureTexture(canvas, { srgb: true });
}

/**
 * Textured Ramen Shop side wall: aged shikkui plaster + dark cedar wainscoting + vintage wall calendar.
 */
export function createRamenSideWallTexture() {
  const w = 512;
  const h = 512;
  const { canvas, ctx } = makeCanvas(w, h);
  const rng = mulberry32(3104);

  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, '#594b3b');
  g.addColorStop(0.55, '#8c7a60');
  g.addColorStop(1, '#4c3e30');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);

  for (let i = 0; i < 650; i++) {
    ctx.fillStyle = rng() > 0.5 ? 'rgba(30, 18, 10, 0.05)' : 'rgba(240, 224, 198, 0.035)';
    ctx.fillRect(rng() * w, rng() * h, 14 + rng() * 36, 4 + rng() * 12);
  }

  // Dark vertical cedar wainscoting panels along lower 42% of wall
  const waistY = Math.floor(h * 0.58);
  ctx.fillStyle = '#2d1e14';
  ctx.fillRect(0, waistY, w, h - waistY);
  for (let x = 0; x < w; x += 28) {
    ctx.fillStyle = rng() > 0.5 ? 'rgba(68, 45, 28, 0.45)' : 'rgba(20, 12, 7, 0.45)';
    ctx.fillRect(x, waistY + 8, 25, h - waistY - 8);
  }
  ctx.fillStyle = '#3e2a1b';
  ctx.fillRect(0, waistY - 6, w, 10);

  // Vintage Showa-era Japanese draft beer poster hung cleanly on the side wall (never blocked by bottles!)
  ctx.save();
  ctx.translate(64, 96);
  ctx.rotate(-0.012);
  ctx.fillStyle = 'rgba(10, 6, 3, 0.32)';
  ctx.fillRect(4, 5, 110, 152);
  ctx.fillStyle = '#8b241b';
  ctx.fillRect(0, 0, 110, 152);
  ctx.fillStyle = '#e5cfa0';
  ctx.fillRect(7, 7, 96, 138);
  ctx.fillStyle = '#b42b20';
  ctx.beginPath();
  ctx.arc(55, 62, 30, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#e9b23a';
  ctx.beginPath();
  ctx.arc(55, 62, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#241812';
  ctx.font = 'bold 21px "Yu Mincho", serif';
  ctx.textAlign = 'center';
  ctx.fillText('生ビール', 55, 118);
  ctx.fillStyle = '#7e2219';
  ctx.font = 'bold 12px monospace';
  ctx.fillText('COLD DRAFT', 55, 136);
  ctx.restore();

  // Small vintage Japanese paper wall calendar (11月) pinned to plaster
  ctx.fillStyle = 'rgba(0,0,0,0.28)';
  ctx.fillRect(236, 114, 92, 124);
  ctx.fillStyle = '#e5dcc6';
  ctx.fillRect(232, 110, 92, 124);
  ctx.fillStyle = '#8b241c';
  ctx.fillRect(232, 110, 92, 34);
  ctx.fillStyle = '#f2e8d4';
  ctx.font = 'bold 20px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('11月', 278, 134);
  ctx.fillStyle = '#26201a';
  ctx.font = 'bold 11px monospace';
  for (let r = 0; r < 5; r++) {
    ctx.fillText('1  2  3  4  5  6', 278, 162 + r * 14);
  }

  return configureTexture(canvas, { srgb: true });
}

/**
 * Authentic Japanese yellow-black striped utility pole reflective warning wrap ("注意").
 */
export function createPoleHazardTexture() {
  const w = 256;
  const h = 256;
  const { canvas, ctx } = makeCanvas(w, h);
  ctx.fillStyle = '#c89b22';
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = '#181a1c';
  for (let i = -h; i < w + h; i += 48) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i + 24, 0);
    ctx.lineTo(i + 24 - h * 0.55, h);
    ctx.lineTo(i - h * 0.55, h);
    ctx.closePath();
    ctx.fill();
  }
  // Rain grime & scuffing so it looks real, not bright plastic
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, 'rgba(15, 18, 22, 0.35)');
  g.addColorStop(0.5, 'rgba(15, 18, 22, 0.14)');
  g.addColorStop(1, 'rgba(10, 12, 16, 0.45)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);

  return configureTexture(canvas, { srgb: true });
}

/**
 * Classic Japanese enameled blue-and-white Tokyo street block address plaque ("歌舞伎町 1-14").
 */
export function createAddressPlaqueTexture() {
  const w = 128;
  const h = 256;
  const { canvas, ctx } = makeCanvas(w, h);
  ctx.fillStyle = '#1d446c';
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#d4dce4';
  ctx.lineWidth = 6;
  ctx.strokeRect(7, 7, w - 14, h - 14);

  ctx.fillStyle = '#dfe6ee';
  ctx.font = 'bold 26px "Yu Mincho", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ['歌', '舞', '伎', '町'].forEach((ch, idx) => {
    ctx.fillText(ch, w / 2, 44 + idx * 34);
  });
  ctx.font = 'bold 22px monospace';
  ctx.fillText('1-14', w / 2, 206);
  ctx.fillStyle = 'rgba(20, 16, 12, 0.25)';
  ctx.fillRect(0, 0, w, h);
  return configureTexture(canvas, { srgb: true });
}

/**
 * Weathered Tokyo street posters & flyers pasted onto brick walls / utility poles.
 */
export function createStreetPosterTexture(variant = 0) {
  const w = 256;
  const h = 340;
  const { canvas, ctx } = makeCanvas(w, h);
  const rng = mulberry32(7200 + variant * 91);

  const palettes = [
    { bg: '#201815', accent: '#b83226', head: '深夜営業', sub: '焼鳥・地酒 26時迄', price: '¥380〜' },
    { bg: '#16202a', accent: '#d29b2e', head: '新宿横丁', sub: '名代 もつ煮込み', price: '生中 ¥450' },
    { bg: '#dfd3bc', accent: '#98261e', head: 'LIVE', sub: 'SHINJUKU LOFT · 02:00', price: 'DOOR ¥1500' },
  ];
  const p = palettes[variant % palettes.length];
  ctx.fillStyle = p.bg;
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = p.accent;
  ctx.fillRect(14, 16, w - 28, 76);

  ctx.fillStyle = '#f2e8d4';
  ctx.font = 'bold 38px "Yu Mincho", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(p.head, w / 2, 56);

  ctx.fillStyle = variant === 2 ? '#1f1916' : '#e6dac2';
  ctx.font = 'bold 20px sans-serif';
  ctx.fillText(p.sub, w / 2, 164);

  ctx.strokeStyle = p.accent;
  ctx.lineWidth = 4;
  ctx.strokeRect(24, 212, w - 48, 74);
  ctx.fillStyle = variant === 2 ? '#98261e' : '#f0c264';
  ctx.font = 'bold 30px monospace';
  ctx.fillText(p.price, w / 2, 250);

  // Rain streaks, paper folds & corner grime
  for (let i = 0; i < 90; i++) {
    ctx.fillStyle = 'rgba(12, 10, 8, 0.08)';
    ctx.fillRect(rng() * w, rng() * h, 4 + rng() * 14, 18 + rng() * 65);
  }
  return configureTexture(canvas, { srgb: true });
}

/**
 * Japanese emergency red Fire Extinguisher cabinet face ("消火器").
 */
export function createFireBoxTexture() {
  const w = 128;
  const h = 256;
  const { canvas, ctx } = makeCanvas(w, h);
  ctx.fillStyle = '#8b1f1b';
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#5c1210';
  ctx.lineWidth = 6;
  ctx.strokeRect(3, 3, w - 6, h - 6);
  // White signage plate
  ctx.fillStyle = '#dfd8ca';
  ctx.fillRect(20, 24, w - 40, 126);
  ctx.fillStyle = '#9a1e18';
  ctx.font = 'bold 34px "Yu Mincho", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ['消', '火', '器'].forEach((ch, idx) => {
    ctx.fillText(ch, w / 2, 48 + idx * 38);
  });
  // Small glass peek slot + metallic handle
  ctx.fillStyle = '#181414';
  ctx.fillRect(36, 174, 56, 36);
  ctx.fillStyle = '#7c8288';
  ctx.fillRect(94, 182, 10, 26);
  return configureTexture(canvas, { srgb: true });
}

/**
 * Warm backlit Japanese Izakaya standing menu lightbox ("お品書き · 居酒屋").
 */
export function createStandingMenuSignTexture() {
  const w = 256;
  const h = 512;
  const { canvas, ctx } = makeCanvas(w, h);
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#f4d39c');
  bg.addColorStop(0.5, '#e8be7d');
  bg.addColorStop(1, '#c89756');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = '#24150c';
  ctx.lineWidth = 8;
  ctx.strokeRect(10, 10, w - 20, h - 20);
  ctx.fillStyle = '#8f2218';
  ctx.fillRect(22, 24, w - 44, 62);
  ctx.fillStyle = '#f7e9cc';
  ctx.font = 'bold 34px "Yu Mincho", serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('お品書き', w / 2, 56);

  ctx.fillStyle = '#1e120a';
  ctx.font = 'bold 24px "Yu Mincho", serif';
  ctx.textAlign = 'left';
  const rows = [
    ['炭火焼鳥', '¥180'],
    ['牛すじ煮込', '¥520'],
    ['刺身盛合せ', '¥980'],
    ['特製餃子', '¥450'],
    ['地酒一合', '¥650'],
    ['ハイボール', '¥420'],
  ];
  rows.forEach(([name, price], i) => {
    const y = 134 + i * 54;
    ctx.fillText(name, 26, y);
    ctx.textAlign = 'right';
    ctx.fillStyle = '#7e2017';
    ctx.fillText(price, w - 26, y);
    ctx.textAlign = 'left';
    ctx.fillStyle = '#1e120a';
  });

  ctx.fillStyle = '#261810';
  ctx.font = 'bold 18px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('深夜 04:00 迄営業', w / 2, 468);
  return configureTexture(canvas, { srgb: true });
}

/**
 * Weathered faded white Japanese asphalt road marking ("止まれ" STOP stencil).
 */
export function createRoadStopStencilTexture() {
  const w = 256;
  const h = 512;
  const { canvas, ctx } = makeCanvas(w, h);
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = 'rgba(210, 216, 224, 0.52)';
  // Horizontal stop bar at top
  ctx.fillRect(16, 18, w - 32, 34);
  // Vertical Japanese "止 ま れ" stencil lettering
  ctx.font = 'bold 112px "Yu Gothic", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ['止', 'ま', 'れ'].forEach((ch, idx) => {
    ctx.fillText(ch, w / 2, 134 + idx * 136);
  });
  // Tire wear & asphalt grit cutouts so paint looks genuinely weathered
  const rng = mulberry32(4821);
  ctx.globalCompositeOperation = 'destination-out';
  for (let i = 0; i < 420; i++) {
    ctx.fillStyle = `rgba(0,0,0,${0.12 + rng() * 0.35})`;
    ctx.fillRect(rng() * w, rng() * h, 4 + rng() * 24, 3 + rng() * 14);
  }
  ctx.globalCompositeOperation = 'source-over';
  return configureTexture(canvas, { srgb: true });
}

/**
 * Wet corrugated Japanese shipping cardboard box texture with packing tape & kanji stamps.
 */
export function createCardboardTexture() {
  const w = 256;
  const h = 256;
  const { canvas, ctx } = makeCanvas(w, h);
  const rng = mulberry32(8342);
  ctx.fillStyle = '#735a3d';
  ctx.fillRect(0, 0, w, h);
  // Subtle damp rain darkening at bottom half
  const damp = ctx.createLinearGradient(0, 0, 0, h);
  damp.addColorStop(0, 'rgba(30, 20, 12, 0.08)');
  damp.addColorStop(0.65, 'rgba(20, 14, 8, 0.16)');
  damp.addColorStop(1, 'rgba(12, 9, 6, 0.55)');
  ctx.fillStyle = damp;
  ctx.fillRect(0, 0, w, h);
  // Corrugation flute grain
  for (let y = 0; y < h; y += 3) {
    ctx.fillStyle = rng() > 0.5 ? 'rgba(0,0,0,0.06)' : 'rgba(255,235,205,0.03)';
    ctx.fillRect(0, y, w, 1);
  }
  // Brown kraft packing tape strip across top seam
  ctx.fillStyle = 'rgba(138, 108, 68, 0.85)';
  ctx.fillRect(0, 114, w, 26);
  // Black Japanese brewery / beverage shipping stamp
  ctx.strokeStyle = 'rgba(26, 20, 16, 0.72)';
  ctx.lineWidth = 3;
  ctx.strokeRect(24, 34, 118, 56);
  ctx.fillStyle = 'rgba(26, 20, 16, 0.78)';
  ctx.font = 'bold 26px sans-serif';
  ctx.fillText('生ビール', 34, 72);
  ctx.font = 'bold 16px monospace';
  ctx.fillText('350ml x 24', 32, 184);
  return configureTexture(canvas, { srgb: true });
}

/**
 * Soft twin-cone feathered car headlight wash texture on wet asphalt (ZERO hard rectangular edge!).
 */
export function createHeadlightWashTexture() {
  const w = 256;
  const h = 256;
  const { canvas, ctx } = makeCanvas(w, h);
  const img = ctx.createImageData(w, h);
  for (let y = 0; y < h; y++) {
    const v = (y / (h - 1)) * 2 - 1; // -1..+1 across vehicle width (Z)
    for (let x = 0; x < w; x++) {
      const u = x / (w - 1); // 0 = right at front bumper, 1 = far ahead (+X)
      const startFade = Math.min(1, u / 0.08);
      const distFade = Math.pow(Math.max(0, 1 - u), 2.15);
      // Two overlapping soft conical beams originating from left (v=-0.34) & right (v=+0.34) headlights
      const spread = 0.14 + u * 0.42;
      const dL = Math.abs(v + 0.32) / spread;
      const dR = Math.abs(v - 0.32) / spread;
      const beamL = dL >= 1 ? 0 : Math.pow(1 - dL * dL, 2.2);
      const beamR = dR >= 1 ? 0 : Math.pow(1 - dR * dR, 2.2);
      const edgeSafe = Math.max(0, 1 - Math.pow(Math.abs(v), 4));
      const a = Math.min(1, (beamL + beamR) * startFade * distFade * edgeSafe);
      const idx = (y * w + x) * 4;
      img.data[idx] = 255;
      img.data[idx + 1] = 242;
      img.data[idx + 2] = 205;
      img.data[idx + 3] = Math.round(a * 255);
    }
  }
  ctx.putImageData(img, 0, 0);
  return configureTexture(canvas, { srgb: true });
}

/**
 * Authentic Japanese street vending recycling bin front decal ("空き缶・ペットボトル").
 */
export function createRecycleBinFrontTexture() {
  const w = 256;
  const h = 384;
  const { canvas, ctx } = makeCanvas(w, h);
  ctx.fillStyle = '#c4c9ce';
  ctx.fillRect(0, 0, w, h);

  // Subtle weathered metal grime gradient toward ground
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, 'rgba(30, 38, 46, 0.06)');
  g.addColorStop(0.7, 'rgba(20, 26, 34, 0.16)');
  g.addColorStop(1, 'rgba(10, 14, 18, 0.48)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);

  // Blue header band + Japanese recycle text
  ctx.fillStyle = '#1b5d9a';
  ctx.fillRect(14, 24, w - 28, 72);
  ctx.fillStyle = '#f2f6fa';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = 'bold 26px "Yu Gothic", sans-serif';
  ctx.fillText('あきかん・びん', w / 2, 48);
  ctx.font = 'bold 20px "Yu Gothic", sans-serif';
  ctx.fillText('ペットボトル専用', w / 2, 78);

  // Recycle green badge + can/bottle silhouette icons
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(24, 114, w - 48, 152);
  ctx.strokeStyle = '#1b5d9a';
  ctx.lineWidth = 4;
  ctx.strokeRect(24, 114, w - 48, 152);

  // Simple crisp can icon (left) + PET bottle icon (right)
  ctx.fillStyle = '#246638';
  ctx.fillRect(58, 152, 42, 72);
  ctx.fillStyle = '#1b5d9a';
  ctx.fillRect(156, 162, 38, 62);
  ctx.fillRect(166, 138, 18, 26);

  ctx.fillStyle = '#222830';
  ctx.font = 'bold 17px sans-serif';
  ctx.fillText('RECYCLE BOX', w / 2, 246);

  // Service door latch & bottom seam
  ctx.strokeStyle = 'rgba(25, 30, 36, 0.55)';
  ctx.lineWidth = 3;
  ctx.strokeRect(10, 10, w - 20, h - 20);
  ctx.fillStyle = '#363c44';
  ctx.fillRect(w - 34, 296, 14, 28);

  return configureTexture(canvas, { srgb: true });
}

/**
 * Japanese 2F apartment sliding glass balcony patio door ("掃き出し窓").
 */
export function createPatioDoorTexture(warm = false) {
  const w = 256;
  const h = 320;
  const { canvas, ctx } = makeCanvas(w, h);
  // Dark aluminum perimeter sash
  ctx.fillStyle = '#22262b';
  ctx.fillRect(0, 0, w, h);

  // Subtle interior room glow behind frosted/curtained dual glass panels
  for (const px of [12, 132]) {
    const g = ctx.createLinearGradient(px, 14, px, h - 14);
    if (warm) {
      g.addColorStop(0, '#3a2a1e');
      g.addColorStop(0.5, '#68472a');
      g.addColorStop(1, '#261c14');
    } else {
      g.addColorStop(0, '#141e2b');
      g.addColorStop(0.55, '#253952');
      g.addColorStop(1, '#101822');
    }
    ctx.fillStyle = g;
    ctx.fillRect(px, 14, 112, h - 28);

    // Subtle vertical curtain pleats
    for (let cx = px + 8; cx < px + 112; cx += 18) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.14)';
      ctx.fillRect(cx, 14, 7, h - 28);
    }
    // Classic Japanese frosted lower glass band & horizontal aluminum transom bar
    ctx.fillStyle = 'rgba(200, 214, 228, 0.08)';
    ctx.fillRect(px, h * 0.55, 112, h * 0.45 - 14);
    ctx.fillStyle = '#262b31';
    ctx.fillRect(px, h * 0.54, 112, 8);
  }
  // Center vertical sliding sash overlap & silver handle latch
  ctx.fillStyle = '#1b1f24';
  ctx.fillRect(122, 10, 12, h - 20);
  ctx.fillStyle = '#7e8690';
  ctx.fillRect(125, h * 0.5 - 16, 5, 32);

  return configureTexture(canvas, { srgb: true });
}
