import * as THREE from 'three';
import { buildAlleyArchitecture } from './scene/alleyArchitecture.js';
import { buildAlleyProps } from './props/alleyProps.js';
import { buildAlleyDetailProps } from './props/alleyDetailProps.js';
import { buildWeather } from './scene/weather.js';
import { buildAlleyLighting } from './lighting/alleyLighting.js';
import { CinematicRig, CLIP_DURATION } from './camera/cinematicRig.js';
import { FirstPersonController } from './player/firstPersonController.js';
import { createPostProcessing } from './post/postProcessing.js';
import { createHudController } from './hud/hud.js';
import { Soundscape } from './audio/soundscape.js';

// UI elements
const startOverlay = document.getElementById('start-overlay');
const loadStatusEl = document.getElementById('load-status');
const loadLabelEl = document.getElementById('load-label');
const loadPctEl = document.getElementById('load-pct');
const loadBarFillEl = document.getElementById('load-bar-fill');

const btnExplore = document.getElementById('btn-explore');
const btnAutoclip = document.getElementById('btn-autoclip');
const reticleEl = document.getElementById('reticle');
const interactPromptEl = document.getElementById('interact-prompt');
const hudFlashEl = document.getElementById('hud-flash');

const btnPlay = document.getElementById('btn-play');
const timeline = document.getElementById('timeline');
const timeReadout = document.getElementById('time-readout');
const btnCam = document.getElementById('btn-cam');
const btnAudio = document.getElementById('btn-audio');
const btnRecord = document.getElementById('btn-record');

const nextFrame = () =>
  new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

function setLoadProgress(pct, label) {
  if (loadLabelEl) loadLabelEl.textContent = label;
  if (loadPctEl) loadPctEl.textContent = `${pct}%`;
  if (loadBarFillEl) loadBarFillEl.style.width = `${pct}%`;
}

function uploadAllTexturesToGPU(renderer, scene) {
  const seen = new Set();
  const texKeys = ['map', 'normalMap', 'roughnessMap', 'emissiveMap', 'metalnessMap', 'aoMap'];
  scene.traverse((obj) => {
    const mats = Array.isArray(obj.material) ? obj.material : obj.material ? [obj.material] : [];
    for (const mat of mats) {
      for (const k of texKeys) {
        const tex = mat[k];
        if (tex && tex.isTexture && !seen.has(tex)) {
          seen.add(tex);
          renderer.initTexture(tex);
        }
      }
    }
  });
}

const canvas = document.getElementById('c');
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  stencil: false,
  powerPreference: 'high-performance',
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.0));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.shadowMap.autoUpdate = false;
renderer.shadowMap.needsUpdate = true;
renderer.toneMapping = THREE.NoToneMapping;

const scene = new THREE.Scene();
// near=0.18, far=115 maximizes 24-bit depth buffer precision (eliminates distant window Z-fighting!)
const camera = new THREE.PerspectiveCamera(72, window.innerWidth / window.innerHeight, 0.18, 115);
const maxAnisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
const soundscape = new Soundscape();
const hud = createHudController();
const cinematicRig = new CinematicRig(camera);

const state = {
  ready: false,
  clipTime: 0,
  paused: true,
  mode: 'cinematic', // 'cinematic' | 'explore'
  realElapsed: 0,
};

let archCtrl = null;
let lightingCtrl = null;
let weatherCtrl = null;
let propsCtrl = null;
let detailPropsCtrl = null;
let fpsCtrl = null;
let post = null;

let lastFlashText = '';
let lastPromptText = '';
let lastPromptVisible = false;
let emaDt = 1 / 60;
let rollingFps = 60;

function setPaused(paused) {
  state.paused = paused;
  btnPlay.textContent = paused ? 'Play' : 'Pause';
}

function hideStartOverlay() {
  startOverlay.classList.add('hidden');
}

function setMode(mode, { fromCurrentPose = false } = {}) {
  if (!state.ready) return;
  state.mode = mode;
  const isExplore = mode === 'explore';
  document.body.classList.toggle('explore-active', isExplore);
  reticleEl.classList.toggle('hidden', !isExplore);
  btnCam.textContent = isExplore ? 'Auto-Walk' : 'Explore FPS';
  btnCam.classList.toggle('active', isExplore);

  if (isExplore) {
    hideStartOverlay();
    fpsCtrl.enter(fromCurrentPose);
  } else {
    fpsCtrl.exit();
    if (lastPromptVisible) {
      interactPromptEl.classList.add('hidden');
      lastPromptVisible = false;
    }
  }
}

function setTime(t) {
  state.clipTime = ((t % CLIP_DURATION) + CLIP_DURATION) % CLIP_DURATION;
  timeline.value = state.clipTime.toFixed(2);
  timeReadout.textContent = `${state.clipTime.toFixed(1).padStart(4, '0')} / ${CLIP_DURATION.toFixed(1)}s`;
}

function renderFrame(dt) {
  state.realElapsed += dt;

  if (!state.paused && state.mode === 'cinematic') {
    setTime(state.clipTime + dt);
  }

  let walkWeight = 0;
  let label = 'ALLEY ENTRANCE';
  let flashText = 'FLASH: OFF';

  if (state.mode === 'cinematic') {
    const rigState = cinematicRig.update(state.clipTime, state.realElapsed);
    walkWeight = rigState.walkWeight;
    label = rigState.label;
    if (rigState.steppedThisFrame && !state.paused) {
      soundscape.triggerFootstep();
    }
  } else {
    const fpState = fpsCtrl.update(dt);
    walkWeight = fpState.walkWeight;
    label = fpState.label;
    flashText = `FLASH: ${fpState.flashlightOn ? 'ON' : 'OFF'}`;

    const hasPrompt = Boolean(fpState.targetPrompt);
    if (hasPrompt !== lastPromptVisible) {
      interactPromptEl.classList.toggle('hidden', !hasPrompt);
      lastPromptVisible = hasPrompt;
    }
    if (hasPrompt && fpState.targetPrompt !== lastPromptText) {
      interactPromptEl.textContent = fpState.targetPrompt;
      lastPromptText = fpState.targetPrompt;
    }
    if (fpState.steppedThisFrame) {
      soundscape.triggerFootstep();
    }
  }

  if (flashText !== lastFlashText) {
    hudFlashEl.textContent = flashText;
    lastFlashText = flashText;
  }

  archCtrl.update(state.realElapsed, dt);
  propsCtrl.update(state.realElapsed, dt);
  detailPropsCtrl.update(state.realElapsed);
  weatherCtrl.update(dt, camera.position);
  lightingCtrl.update(state.realElapsed);
  soundscape.updateSpatial(camera.position, dt);
  post.update(state.realElapsed);
  hud.update(state.clipTime, state.realElapsed, { walkWeight, label, fps: rollingFps });

  post.composer.render();
}

// Wire controls (strictly gated behind state.ready so nothing runs before preloading finishes)
btnExplore.addEventListener('click', () => {
  if (!state.ready) return;
  soundscape.ensureStarted();
  btnAudio.textContent = 'Audio: On';
  btnAudio.classList.add('active');
  setMode('explore');
});

btnAutoclip.addEventListener('click', () => {
  if (!state.ready) return;
  hideStartOverlay();
  setMode('cinematic');
  setPaused(false);
});

btnPlay.addEventListener('click', () => {
  if (!state.ready) return;
  setPaused(!state.paused);
});

timeline.addEventListener('input', (e) => {
  if (!state.ready) return;
  hideStartOverlay();
  setMode('cinematic');
  setTime(parseFloat(e.target.value));
  archCtrl.forceReflectorUpdate();
});

btnCam.addEventListener('click', () => {
  if (!state.ready) return;
  if (state.mode === 'explore') {
    setMode('cinematic');
  } else {
    soundscape.ensureStarted();
    btnAudio.textContent = 'Audio: On';
    btnAudio.classList.add('active');
    setMode('explore', { fromCurrentPose: true });
  }
});

btnAudio.addEventListener('click', () => {
  if (!state.ready) return;
  const on = soundscape.toggle();
  btnAudio.textContent = `Audio: ${on ? 'On' : 'Off'}`;
  btnAudio.classList.toggle('active', on);
});

document.querySelectorAll('[data-jump]').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (!state.ready) return;
    hideStartOverlay();
    setMode('cinematic');
    setTime(parseFloat(btn.dataset.jump));
    archCtrl.forceReflectorUpdate();
  });
});

let recorder = null;
btnRecord.addEventListener('click', () => {
  if (!state.ready) return;
  if (recorder && recorder.state === 'recording') {
    recorder.stop();
    return;
  }
  hideStartOverlay();
  const stream = renderer.domElement.captureStream(60);
  const mime = MediaRecorder.isTypeSupported('video/webm;codecs=vp9')
    ? 'video/webm;codecs=vp9'
    : 'video/webm';
  const chunks = [];
  recorder = new MediaRecorder(stream, { mimeType: mime, videoBitsPerSecond: 12_000_000 });
  recorder.ondataavailable = (ev) => {
    if (ev.data.size > 0) chunks.push(ev.data);
  };
  recorder.onstop = () => {
    btnRecord.textContent = 'Record Clip';
    btnRecord.classList.remove('recording');
    const blob = new Blob(chunks, { type: 'video/webm' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'yokocho-tokyo-alley.webm';
    a.click();
    URL.revokeObjectURL(url);
  };
  setMode('cinematic');
  setTime(0);
  setPaused(false);
  recorder.start();
  btnRecord.textContent = 'Stop Rec';
  btnRecord.classList.add('recording');
  setTimeout(() => {
    if (recorder && recorder.state === 'recording') recorder.stop();
  }, CLIP_DURATION * 1000);
});

window.addEventListener('keydown', (e) => {
  if (!state.ready) return;
  if (e.code === 'Space' && state.mode === 'cinematic') {
    e.preventDefault();
    hideStartOverlay();
    setPaused(!state.paused);
  } else if (e.code === 'KeyM') {
    btnAudio.click();
  } else if (e.code === 'KeyH') {
    document.body.classList.toggle('ui-hidden');
  } else if (e.code === 'Escape' && state.mode === 'explore') {
    startOverlay.classList.toggle('hidden');
  }
});

window.addEventListener('resize', () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const pr = Math.min(window.devicePixelRatio, 1.0);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(pr);
  renderer.setSize(w, h);
  if (post) post.resize(w, h, pr);
});

Object.assign(window, { renderer, scene, camera });
window.__YOKOCHO__ = {
  setTime(t) {
    if (!state.ready) return;
    hideStartOverlay();
    setMode('cinematic');
    setTime(t);
    archCtrl.forceReflectorUpdate();
    renderFrame(0.016);
  },
  setPaused,
  setMode,
  getState: () => ({
    ready: state.ready,
    clipTime: state.clipTime,
    paused: state.paused,
    mode: state.mode,
    fps: Math.round(rollingFps),
    drawCalls: renderer.info.render.calls,
    triangles: renderer.info.render.triangles,
  }),
};

// Staged async preloader: build, upload VRAM, compile ALL WebGL shaders & warm up before enabling interaction!
async function initializeScene() {
  setLoadProgress(12, 'Building Tokyo alley facades & PBR textures...');
  await nextFrame();
  archCtrl = buildAlleyArchitecture(scene, maxAnisotropy);

  setLoadProgress(42, 'Configuring night lighting & rain shaders...');
  await nextFrame();
  lightingCtrl = buildAlleyLighting(scene, renderer);
  weatherCtrl = buildWeather(scene);

  setLoadProgress(62, 'Placing grounded props & detailed storefronts...');
  await nextFrame();
  propsCtrl = buildAlleyProps(scene, maxAnisotropy, {
    onVendingDispense() {
      soundscape.playVendingDispense();
    },
    onToggleNeon() {
      soundscape.playClick();
      const on = archCtrl.toggleMainNeon();
      lightingCtrl.setNeonEnabled(on);
      return on;
    },
    onSteamBurst() {
      soundscape.playSteamBurst();
      weatherCtrl.triggerSteamBurst();
    },
  });
  detailPropsCtrl = buildAlleyDetailProps(scene, maxAnisotropy);

  const allInteractables = [
    ...propsCtrl.interactables,
    ...archCtrl.shojiHitMeshes.map((mesh, i) => ({
      id: `shoji-${i}`,
      mesh,
      prompt: '[E] Slide Ramen Shop Door',
      interact() {
        const opened = archCtrl.toggleShojiDoor();
        renderer.shadowMap.needsUpdate = true;
        soundscape.playWoodDoor(opened);
      },
    })),
  ];

  fpsCtrl = new FirstPersonController(camera, scene, renderer.domElement, allInteractables, {
    onFlashlightToggle() {
      soundscape.playClick();
    },
  });
  post = createPostProcessing(renderer, scene, camera);

  setLoadProgress(78, 'Uploading textures to GPU memory...');
  await nextFrame();
  uploadAllTexturesToGPU(renderer, scene);

  setLoadProgress(88, 'Compiling WebGL shaders & baking shadows...');
  await nextFrame();
  cinematicRig.update(0.5, 0);
  if (typeof renderer.compileAsync === 'function') {
    await renderer.compileAsync(scene, camera);
  } else {
    renderer.compile(scene, camera);
  }
  renderer.shadowMap.needsUpdate = true;

  // Warm up 3 viewpoints across the alley so Reflector, Bloom, SMAA & all angle-culled materials cache in VRAM
  setLoadProgress(95, 'Warming up reflections & post-processing...');
  await nextFrame();
  for (const sampleT of [0.5, 12.5, 25.5]) {
    setTime(sampleT);
    archCtrl.forceReflectorUpdate();
    renderFrame(0.016);
    await nextFrame();
  }

  // Ready! Reset gently to entrance & unlock interactive controls
  setTime(0.5);
  archCtrl.forceReflectorUpdate();
  renderFrame(0.016);

  state.ready = true;
  setLoadProgress(100, 'Scene ready · Zero-stutter shaders cached');
  if (loadStatusEl) loadStatusEl.classList.add('done');
  btnExplore.disabled = false;
  btnAutoclip.disabled = false;
  setPaused(false);

  const timer = new THREE.Timer();
  timer.connect(document);

  renderer.setAnimationLoop(() => {
    timer.update();
    const dt = Math.min(Math.max(timer.getDelta(), 0.001), 0.1);
    emaDt = emaDt * 0.9 + dt * 0.1;
    rollingFps = 1 / emaDt;
    renderFrame(dt);
  });
}

initializeScene().catch((err) => {
  console.error('Failed to initialize YOKOCHO:', err);
  setLoadProgress(0, 'Initialization error — check console');
});
