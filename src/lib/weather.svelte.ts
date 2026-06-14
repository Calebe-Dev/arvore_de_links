// WMO weather codes that represent rain, drizzle, rain showers or thunderstorms.
// https://open-meteo.com/en/docs#weathervariables
const RAIN_CODES = new Set([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99]);

export const weather = $state<{ isRaining: boolean; sunrise: Date | null; sunset: Date | null }>({
  isRaining: false,
  sunrise: null,
  sunset: null,
});

const listeners = new Set<() => void>();

export function onWeatherLoaded(listener: () => void): void {
  listeners.add(listener);
}

async function loadWeather(): Promise<void> {
  try {
    // ipwho.is blocks CORS on its free plan, so geo lookup is done via geojs.io instead.
    const geoRes = await fetch('https://get.geojs.io/v1/ip/geo.json');
    const geo = await geoRes.json();
    const latitude = Number(geo?.latitude);
    const longitude = Number(geo?.longitude);
    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) return;

    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=sunrise,sunset&timezone=auto`,
    );
    const data = await weatherRes.json();

    const code = data?.current_weather?.weathercode;
    if (typeof code === 'number') weather.isRaining = RAIN_CODES.has(code);

    const sunrise = data?.daily?.sunrise?.[0];
    const sunset = data?.daily?.sunset?.[0];
    if (typeof sunrise === 'string') weather.sunrise = new Date(sunrise);
    if (typeof sunset === 'string') weather.sunset = new Date(sunset);

    for (const listener of listeners) listener();
  } catch {
    // Weather is a decorative enhancement — keep the default clear/day look on failure.
  }
}

loadWeather();
