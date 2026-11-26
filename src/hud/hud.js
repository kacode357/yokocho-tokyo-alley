/**
 * Drives the clean monochrome cinema HUD with strict dirty-checking & throttled updates
 * so HTML overlays cause zero per-frame CSS layout thrashing.
 */
export function createHudController() {
  const clockEl = document.getElementById('hud-clock');
  const zoneLabelEl = document.getElementById('hud-zone-label');
  const recDotEl = document.getElementById('rec-dot');
  const vuLeftEl = document.getElementById('vu-left');
  const vuRightEl = document.getElementById('vu-right');
  const fpsEl = document.getElementById('hud-fps');

  const SEG_COUNT = 8;
  const leftSegs = [];
  const rightSegs = [];

  for (let i = 0; i < SEG_COUNT; i++) {
    const l = document.createElement('span');
    l.className = 'vu-seg';
    vuLeftEl.appendChild(l);
    leftSegs.push(l);

    const r = document.createElement('span');
    r.className = 'vu-seg';
    vuRightEl.appendChild(r);
    rightSegs.push(r);
  }

  let lastSec = -1;
  let lastLabel = '';
  let lastBlink = null;
  let lastActiveL = -1;
  let lastActiveR = -1;
  let lastVuTime = -1;
  let lastFpsTime = -1;

  return {
    update(timeSec, realElapsed, { walkWeight = 0, label = 'ALLEY ENTRANCE', fps = 60 } = {}) {
      const secOffset = Math.min(28, Math.floor(timeSec));
      if (secOffset !== lastSec) {
        lastSec = secOffset;
        const ss = String(secOffset).padStart(2, '0');
        clockEl.textContent = `2026-11-26 02:14:${ss}`;
      }

      if (label !== lastLabel) {
        lastLabel = label;
        zoneLabelEl.textContent = label;
      }

      const blink = Math.floor(realElapsed * 2) % 2 === 0;
      if (blink !== lastBlink) {
        lastBlink = blink;
        recDotEl.classList.toggle('dim', !blink);
      }

      if (fpsEl && (lastFpsTime < 0 || realElapsed - lastFpsTime >= 0.45)) {
        lastFpsTime = realElapsed;
        fpsEl.textContent = `${Math.max(1, Math.round(fps))} FPS`;
      }

      if (lastVuTime < 0 || realElapsed - lastVuTime >= 0.085) {
        lastVuTime = realElapsed;
        const baseLevel = 0.28 + walkWeight * 0.22;
        const lvlL = Math.min(1, Math.max(0.12, baseLevel + 0.14 * Math.sin(realElapsed * 13.5)));
        const lvlR = Math.min(1, Math.max(0.12, baseLevel + 0.14 * Math.cos(realElapsed * 11.8 + 0.9)));

        const activeL = Math.round(lvlL * SEG_COUNT);
        const activeR = Math.round(lvlR * SEG_COUNT);

        if (activeL !== lastActiveL) {
          lastActiveL = activeL;
          for (let i = 0; i < SEG_COUNT; i++) {
            const on = i < activeL;
            leftSegs[i].className = `vu-seg${on ? ' active' : ''}${on && i >= 6 ? ' hot' : ''}`;
          }
        }
        if (activeR !== lastActiveR) {
          lastActiveR = activeR;
          for (let i = 0; i < SEG_COUNT; i++) {
            const on = i < activeR;
            rightSegs[i].className = `vu-seg${on ? ' active' : ''}${on && i >= 6 ? ' hot' : ''}`;
          }
        }
      }
    },
  };
}
