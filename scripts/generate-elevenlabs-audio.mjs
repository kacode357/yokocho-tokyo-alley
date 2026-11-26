import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const ENV_PATH = path.join(ROOT, '.env.local');
const OUT_DIR = path.join(ROOT, 'public', 'audio');

function loadApiKey() {
  if (process.env.ELEVENLABS_API_KEY) return process.env.ELEVENLABS_API_KEY.trim();
  if (!fs.existsSync(ENV_PATH)) {
    throw new Error('Missing .env.local with ELEVENLABS_API_KEY');
  }
  const lines = fs.readFileSync(ENV_PATH, 'utf8').split(/\r?\n/);
  for (const line of lines) {
    const m = line.match(/^\s*ELEVENLABS_API_KEY\s*=\s*(.+)\s*$/);
    if (m) return m[1].trim().replace(/^["']|["']$/g, '');
  }
  throw new Error('ELEVENLABS_API_KEY not found in .env.local');
}

const API_KEY = loadApiKey();
fs.mkdirSync(OUT_DIR, { recursive: true });

async function getSubscription() {
  const res = await fetch('https://api.elevenlabs.io/v1/user/subscription', {
    headers: { 'xi-api-key': API_KEY },
  });
  if (!res.ok) {
    console.warn('Could not read subscription info:', res.status, await res.text());
    return null;
  }
  return res.json();
}

async function generateSfx(filename, { text, duration_seconds, loop = false, prompt_influence = 0.45 }) {
  const outPath = path.join(OUT_DIR, filename);
  if (fs.existsSync(outPath) && fs.statSync(outPath).size > 2048) {
    console.log(`[SKIP] ${filename} already exists (${fs.statSync(outPath).size} bytes)`);
    return;
  }
  console.log(`[GEN SFX] ${filename} (${duration_seconds}s, loop=${loop})...`);
  const body = {
    text,
    duration_seconds,
    prompt_influence,
    model_id: 'eleven_text_to_sound_v2',
  };
  if (loop) body.loop = true;

  let res = await fetch('https://api.elevenlabs.io/v1/sound-generation?output_format=mp3_44100_128', {
    method: 'POST',
    headers: {
      'xi-api-key': API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  // Fallback gracefully if v2/loop param isn't accepted on tier
  if (!res.ok) {
    const errText = await res.text();
    console.warn(`  v2/loop retry fallback (${res.status}): ${errText.slice(0, 180)}`);
    res = await fetch('https://api.elevenlabs.io/v1/sound-generation?output_format=mp3_44100_128', {
      method: 'POST',
      headers: {
        'xi-api-key': API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, duration_seconds, prompt_influence }),
    });
  }

  if (!res.ok) {
    throw new Error(`SFX failed for ${filename}: ${res.status} ${await res.text()}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(outPath, buf);
  console.log(`  Saved ${filename} (${(buf.length / 1024).toFixed(1)} KB)`);
}

async function pickVoiceId() {
  const res = await fetch('https://api.elevenlabs.io/v1/voices', {
    headers: { 'xi-api-key': API_KEY },
  });
  if (!res.ok) return 'CwhRBWXzGAHq8TQ4Fs17'; // Roger default
  const data = await res.json();
  const voices = data.voices || [];
  const preferred =
    voices.find((v) => /roger|george|daniel|brian|bill|eric/i.test(v.name)) ||
    voices.find((v) => v.labels?.gender === 'male') ||
    voices[0];
  return preferred?.voice_id || 'CwhRBWXzGAHq8TQ4Fs17';
}

async function generateTts(filename, text) {
  const outPath = path.join(OUT_DIR, filename);
  if (fs.existsSync(outPath) && fs.statSync(outPath).size > 2048) {
    console.log(`[SKIP] ${filename} already exists (${fs.statSync(outPath).size} bytes)`);
    return;
  }
  const voiceId = await pickVoiceId();
  console.log(`[GEN TTS] ${filename} ("${text}", voice=${voiceId})...`);
  const res = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`,
    {
      method: 'POST',
      headers: {
        'xi-api-key': API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text,
        model_id: 'eleven_multilingual_v2',
        voice_settings: {
          stability: 0.55,
          similarity_boost: 0.72,
          style: 0.25,
          use_speaker_boost: true,
        },
      }),
    }
  );
  if (!res.ok) {
    console.warn(`TTS failed for ${filename}: ${res.status} ${await res.text()}`);
    return;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(outPath, buf);
  console.log(`  Saved ${filename} (${(buf.length / 1024).toFixed(1)} KB)`);
}

async function main() {
  const before = await getSubscription();
  if (before) {
    console.log(
      `Credits BEFORE: used=${before.character_count} / limit=${before.character_limit} (remaining=${before.character_limit - before.character_count})`
    );
  }

  // Ultra-lean, credit-saving realistic Tokyo alley audio pack (~680 credits total!)
  await generateSfx('rain-alley.mp3', {
    text: 'Steady midnight rain falling softly in a narrow wet Tokyo back alley, gentle raindrops hitting wet asphalt puddles and metal awnings, subtle distant city night ambiance, no thunder, no voices, seamless loop',
    duration_seconds: 7.5,
    loop: true,
    prompt_influence: 0.5,
  });

  await generateSfx('footstep-wet.mp3', {
    text: 'Four distinct realistic sneaker footsteps walking at steady pace on wet rain-slicked concrete asphalt puddle, crisp shallow water splash per step, close natural recording, quiet background',
    duration_seconds: 2.4,
    loop: false,
    prompt_influence: 0.55,
  });

  await generateSfx('shoji-slide.mp3', {
    text: 'Traditional Japanese wooden shoji lattice sliding door rolling smoothly open on wooden groove track with gentle wooden stop at the end, realistic close foley',
    duration_seconds: 1.4,
    loop: false,
    prompt_influence: 0.55,
  });

  await generateSfx('vending-dispense.mp3', {
    text: 'Japanese street drink vending machine soft electronic button beep followed by a cold aluminum can dropping and clunking into metal pickup chute, realistic foley',
    duration_seconds: 2.0,
    loop: false,
    prompt_influence: 0.55,
  });

  await generateSfx('steam-vent.mp3', {
    text: 'Steady soft warm pressurized steam hissing continuously from a restaurant kitchen metal exhaust vent into cool night air, realistic mechanical ambient loop',
    duration_seconds: 3.5,
    loop: true,
    prompt_influence: 0.5,
  });

  // Only 8 Japanese characters (~8-15 credits!) for authentic ramen shop welcome
  await generateTts('irasshaimase.mp3', 'いらっしゃいませ！');

  const after = await getSubscription();
  if (after) {
    const usedNow = before ? after.character_count - before.character_count : after.character_count;
    console.log(
      `Credits AFTER: used=${after.character_count} / limit=${after.character_limit} (remaining=${after.character_limit - after.character_count}, spent_this_run=${usedNow})`
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
