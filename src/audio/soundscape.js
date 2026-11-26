/**
 * Real ElevenLabs-powered Rainy Tokyo Night Soundscape (+ seamless procedural fallback):
 * - public/audio/rain-alley.mp3      : 7.5s seamless loop midnight Tokyo rain on wet asphalt
 * - public/audio/steam-vent.mp3      : 3.5s seamless loop spatialized kitchen exhaust hiss
 * - public/audio/footstep-wet.mp3    : 4 distinct wet puddle footsteps sliced from 1 compact clip
 * - public/audio/shoji-slide.mp3     : authentic Japanese wooden Shoji sliding door foley
 * - public/audio/vending-dispense.mp3: Japanese vending button beep + aluminum can drop clunk
 * - public/audio/irasshaimase.mp3    : warm Japanese ramen chef greeting when opening the shop door
 */
const BASE = import.meta.env.BASE_URL || '/';

export class Soundscape {
  constructor() {
    this.enabled = false;
    this.ctx = null;
    this.master = null;
    this.noiseBuffer = null;

    this.buffers = {};
    this.loadingStarted = false;
    this.rainLoopStarted = false;
    this.steamGain = null;
    this.steamBurstBoost = 0;
    this.stepIndex = 0;
    this.fallbackRainGain = null;
  }

  toggle() {
    if (!this.ctx) {
      this._init();
    }
    this.enabled = !this.enabled;
    if (this.ctx.state === 'suspended' && this.enabled) {
      this.ctx.resume();
    }
    this.master.gain.setTargetAtTime(this.enabled ? 0.65 : 0.0, this.ctx.currentTime, 0.1);
    return this.enabled;
  }

  ensureStarted() {
    if (!this.enabled) {
      this.toggle();
    }
  }

  _init() {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AudioCtx();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0;
    this.master.connect(this.ctx.destination);

    // Lightweight procedural noise buffer kept strictly as instant fallback while MP3s decode
    const sr = this.ctx.sampleRate;
    this.noiseBuffer = this.ctx.createBuffer(1, sr * 2, sr);
    const data = this.noiseBuffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    // Gentle fallback rain bed (fades out automatically once real rain-alley.mp3 loads!)
    const rainSrc = this.ctx.createBufferSource();
    rainSrc.buffer = this.noiseBuffer;
    rainSrc.loop = true;
    const rainFilter = this.ctx.createBiquadFilter();
    rainFilter.type = 'bandpass';
    rainFilter.frequency.value = 1150;
    rainFilter.Q.value = 0.55;
    this.fallbackRainGain = this.ctx.createGain();
    this.fallbackRainGain.gain.value = 0.14;
    rainSrc.connect(rainFilter).connect(this.fallbackRainGain).connect(this.master);
    rainSrc.start();

    // Subtle deep urban night sub-rumble that complements rain-alley.mp3 cleanly
    const rumbleSrc = this.ctx.createBufferSource();
    rumbleSrc.buffer = this.noiseBuffer;
    rumbleSrc.loop = true;
    const rumbleFilter = this.ctx.createBiquadFilter();
    rumbleFilter.type = 'lowpass';
    rumbleFilter.frequency.value = 145;
    const rumbleGain = this.ctx.createGain();
    rumbleGain.gain.value = 0.12;
    rumbleSrc.connect(rumbleFilter).connect(rumbleGain).connect(this.master);
    rumbleSrc.start();

    this._loadAllClips();
  }

  async _loadAllClips() {
    if (this.loadingStarted || !this.ctx) return;
    this.loadingStarted = true;

    const files = {
      rain: 'audio/rain-alley.mp3',
      footstep: 'audio/footstep-wet.mp3',
      shoji: 'audio/shoji-slide.mp3',
      vending: 'audio/vending-dispense.mp3',
      steam: 'audio/steam-vent.mp3',
      welcome: 'audio/irasshaimase.mp3',
    };

    await Promise.all(
      Object.entries(files).map(async ([key, rel]) => {
        try {
          const res = await fetch(`${BASE}${rel}`);
          if (!res.ok) return;
          const arr = await res.arrayBuffer();
          this.buffers[key] = await this.ctx.decodeAudioData(arr);

          if (key === 'rain' && !this.rainLoopStarted) {
            this._startRealRainLoop();
          } else if (key === 'steam' && !this.steamGain) {
            this._startRealSteamLoop();
          }
        } catch {
          // Graceful fallback to procedural WebAudio if clip unavailable
        }
      })
    );
  }

  _startRealRainLoop() {
    if (!this.ctx || !this.buffers.rain) return;
    this.rainLoopStarted = true;
    const src = this.ctx.createBufferSource();
    src.buffer = this.buffers.rain;
    src.loop = true;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.58, this.ctx.currentTime + 0.6);
    src.connect(gain).connect(this.master);
    src.start();

    // Crossfade out procedural noise fallback once real ElevenLabs rain is playing
    if (this.fallbackRainGain) {
      this.fallbackRainGain.gain.setTargetAtTime(0.0, this.ctx.currentTime, 0.25);
    }
  }

  _startRealSteamLoop() {
    if (!this.ctx || !this.buffers.steam) return;
    const src = this.ctx.createBufferSource();
    src.buffer = this.buffers.steam;
    src.loop = true;
    const lp = this.ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 3200;
    this.steamGain = this.ctx.createGain();
    this.steamGain.gain.value = 0.02;
    src.connect(lp).connect(this.steamGain).connect(this.master);
    src.start();
  }

  updateSpatial(cameraPos, dt = 0.016) {
    if (!this.enabled || !this.ctx) return;
    if (this.steamBurstBoost > 0) {
      this.steamBurstBoost = Math.max(0, this.steamBurstBoost - dt * 0.45);
    }
    if (this.steamGain && cameraPos) {
      // Kitchen exhaust vent sits at (2.08, 2.02, -22.7)
      const dx = cameraPos.x - 2.08;
      const dy = cameraPos.y - 2.02;
      const dz = cameraPos.z - -22.7;
      const dist = Math.hypot(dx, dy, dz);
      const proximity = Math.max(0, 1.0 - dist / 14.0);
      const targetGain = proximity * proximity * 0.34 + this.steamBurstBoost * 0.42;
      this.steamGain.gain.setTargetAtTime(targetGain, this.ctx.currentTime, 0.08);
    }
  }

  triggerFootstep() {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;

    if (this.buffers.footstep) {
      const buf = this.buffers.footstep;
      const sliceCount = 4;
      const sliceDur = Math.min(0.48, buf.duration / sliceCount);
      const offset = (this.stepIndex % sliceCount) * (buf.duration / sliceCount);
      this.stepIndex++;

      const src = this.ctx.createBufferSource();
      src.buffer = buf;
      src.playbackRate.value = 0.94 + Math.random() * 0.14;
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.32, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + sliceDur);
      src.connect(gain).connect(this.master);
      src.start(now, offset, sliceDur);
      return;
    }

    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(620, now);
    filter.frequency.exponentialRampToValueAtTime(190, now + 0.08);
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
    src.connect(filter).connect(gain).connect(this.master);
    src.start(now, Math.random() * 1.2, 0.1);
  }

  playClick() {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = 'square';
    osc.frequency.setValueAtTime(860, now);
    osc.frequency.exponentialRampToValueAtTime(210, now + 0.035);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.14, now);
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
    osc.connect(g).connect(this.master);
    osc.start(now);
    osc.stop(now + 0.045);
  }

  playWoodDoor(opened = true) {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;

    if (this.buffers.shoji) {
      const src = this.ctx.createBufferSource();
      src.buffer = this.buffers.shoji;
      src.playbackRate.value = opened ? 1.0 : 0.92;
      const g = this.ctx.createGain();
      g.gain.value = 0.58;
      src.connect(g).connect(this.master);
      src.start(now);

      // Warm distant "いらっしゃいませ！" from inside the cozy Ramen shop when sliding open
      if (opened && this.buffers.welcome) {
        const vSrc = this.ctx.createBufferSource();
        vSrc.buffer = this.buffers.welcome;
        const warmFilter = this.ctx.createBiquadFilter();
        warmFilter.type = 'lowpass';
        warmFilter.frequency.value = 2600;
        const vg = this.ctx.createGain();
        vg.gain.value = 0.32;
        vSrc.connect(warmFilter).connect(vg).connect(this.master);
        vSrc.start(now + 0.42);
      }
      return;
    }

    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(320, now);
    filter.Q.value = 2.0;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.24, now);
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    src.connect(filter).connect(g).connect(this.master);
    src.start(now, 0.2, 0.38);
  }

  playVendingDispense() {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;

    if (this.buffers.vending) {
      const src = this.ctx.createBufferSource();
      src.buffer = this.buffers.vending;
      const g = this.ctx.createGain();
      g.gain.value = 0.62;
      src.connect(g).connect(this.master);
      src.start(now);
      return;
    }

    const osc = this.ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.linearRampToValueAtTime(95, now + 0.22);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.14, now);
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.26);
    osc.connect(g).connect(this.master);
    osc.start(now);
    osc.stop(now + 0.28);
  }

  playSteamBurst() {
    if (!this.enabled || !this.ctx) return;
    this.steamBurstBoost = 1.0;

    if (this.buffers.steam) {
      const now = this.ctx.currentTime;
      const src = this.ctx.createBufferSource();
      src.buffer = this.buffers.steam;
      src.playbackRate.value = 1.12;
      const g = this.ctx.createGain();
      g.gain.setValueAtTime(0.01, now);
      g.gain.linearRampToValueAtTime(0.42, now + 0.12);
      g.gain.exponentialRampToValueAtTime(0.001, now + 2.2);
      src.connect(g).connect(this.master);
      src.start(now, 0, 2.3);
      return;
    }

    const now = this.ctx.currentTime;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(1500, now);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.28, now);
    g.gain.exponentialRampToValueAtTime(0.001, now + 1.1);
    src.connect(filter).connect(g).connect(this.master);
    src.start(now, 0.1, 1.2);
  }
}
