import { weather, onWeatherLoaded } from './weather.svelte';

export type ThemeMode = 'light' | 'dark';
export type ThemeScene = 'day' | 'golden' | 'night' | 'late-night';

const THEME_COLOR: Record<ThemeScene, string> = {
  day: '#eaf6ff',
  golden: '#ffb37a',
  night: '#04070e',
  'late-night': '#05030f',
};

const GOLDEN_BEFORE_SUNSET_MS = 60 * 60_000;
const DUSK_AFTER_SUNSET_MS = 20 * 60_000;
const REFRESH_INTERVAL_MS = 60_000;

// Fallback heuristic, used until real sunrise/sunset data arrives (or if it never does).
function autoMode(hour: number): ThemeMode {
  return hour >= 6 && hour < 20 ? 'light' : 'dark';
}

function sceneFor(mode: ThemeMode, hour: number): ThemeScene {
  if (mode === 'light') return hour >= 17 && hour < 20 ? 'golden' : 'day';
  return hour >= 0 && hour < 6 ? 'late-night' : 'night';
}

// Re-anchors a sunrise/sunset time-of-day onto "now"'s calendar date, so a
// sunrise/sunset fetched earlier (or yesterday) still compares correctly.
function onTodaysDate(time: Date, now: Date): Date {
  const result = new Date(now);
  result.setHours(time.getHours(), time.getMinutes(), time.getSeconds(), 0);
  return result;
}

function modeFromSun(now: Date, sunrise: Date, sunset: Date): ThemeMode {
  const duskEnd = new Date(sunset.getTime() + DUSK_AFTER_SUNSET_MS);
  return now >= sunrise && now < duskEnd ? 'light' : 'dark';
}

function sceneFromSun(mode: ThemeMode, now: Date, sunrise: Date, sunset: Date): ThemeScene {
  if (mode === 'light') {
    const goldenStart = new Date(sunset.getTime() - GOLDEN_BEFORE_SUNSET_MS);
    const duskEnd = new Date(sunset.getTime() + DUSK_AFTER_SUNSET_MS);
    return now >= goldenStart && now < duskEnd ? 'golden' : 'day';
  }
  return now < sunrise ? 'late-night' : 'night';
}

function readStoredMode(): ThemeMode | null {
  const saved = localStorage.getItem('theme-mode');
  return saved === 'light' || saved === 'dark' ? saved : null;
}

function computeScene(storedMode: ThemeMode | null): { mode: ThemeMode; scene: ThemeScene } {
  const now = new Date();
  if (weather.sunrise && weather.sunset) {
    const sunrise = onTodaysDate(weather.sunrise, now);
    const sunset = onTodaysDate(weather.sunset, now);
    const mode = storedMode ?? modeFromSun(now, sunrise, sunset);
    return { mode, scene: sceneFromSun(mode, now, sunrise, sunset) };
  }
  const hour = now.getHours();
  const mode = storedMode ?? autoMode(hour);
  return { mode, scene: sceneFor(mode, hour) };
}

export const theme = $state<{ mode: ThemeMode; scene: ThemeScene }>(computeScene(readStoredMode()));

function applyScene(scene: ThemeScene): void {
  document.documentElement.setAttribute('data-scene', scene);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[scene]);
}

// Keeps the scene in sync with real sun position as time passes during an open session.
export function refreshScene(): void {
  const { mode, scene } = computeScene(readStoredMode());
  theme.mode = mode;
  if (scene !== theme.scene) {
    theme.scene = scene;
    applyScene(scene);
  }
}

export function toggleTheme(): void {
  const nextMode: ThemeMode = theme.mode === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme-mode', nextMode);
  const { scene } = computeScene(nextMode);
  theme.mode = nextMode;
  theme.scene = scene;
  applyScene(scene);
}

onWeatherLoaded(refreshScene);
setInterval(refreshScene, REFRESH_INTERVAL_MS);
