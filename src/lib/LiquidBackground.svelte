<script lang="ts">
  import { theme } from './theme.svelte';
  import { weather } from './weather.svelte';
  import Rain from './Rain.svelte';

  const stars = [
    { id: 1, x: 8, y: 6, size: 3, opacity: 0.8, delay: 0 },
    { id: 2, x: 22, y: 15, size: 2, opacity: 0.6, delay: 0.6 },
    { id: 3, x: 38, y: 5, size: 2, opacity: 0.9, delay: 1.2 },
    { id: 4, x: 52, y: 11, size: 3, opacity: 0.5, delay: 0.3 },
    { id: 5, x: 65, y: 20, size: 2, opacity: 0.7, delay: 1.8 },
    { id: 6, x: 84, y: 24, size: 2, opacity: 0.85, delay: 0.9 },
    { id: 7, x: 92, y: 9, size: 3, opacity: 0.6, delay: 1.5 },
    { id: 8, x: 46, y: 23, size: 2, opacity: 0.7, delay: 2.1 },
  ];
</script>

<div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
  <!-- base sky/water gradient -->
  <div class="absolute inset-0 transition-[background] duration-700" style="background: var(--bg-grad);"></div>

  <!-- aurora / water glow blobs -->
  <div
    class="animate-drift-1 absolute -left-[20%] -top-[28%] h-[60vh] w-[130vw] rounded-full blur-[100px] transition-[background,opacity] duration-700 will-change-transform"
    style="background-image: var(--blob-1); opacity: var(--blob-opacity);"
  ></div>
  <div
    class="animate-drift-2 absolute -right-[25%] top-[2%] h-[50vh] w-[110vw] rounded-full blur-[100px] transition-[background,opacity] duration-700 will-change-transform"
    style="background-image: var(--blob-2); opacity: var(--blob-opacity);"
  ></div>
  <div
    class="animate-drift-3 absolute -left-[25%] bottom-[6%] h-[55vh] w-[120vw] rounded-full blur-[100px] transition-[background,opacity] duration-700 will-change-transform"
    style="background-image: var(--blob-3); opacity: var(--blob-opacity);"
  ></div>
  <div
    class="animate-drift-4 absolute -bottom-[22%] right-[-12%] h-[45vh] w-[85vw] rounded-full blur-[100px] transition-[background,opacity] duration-700 will-change-transform"
    style="background-image: var(--blob-4); opacity: var(--blob-opacity);"
  ></div>

  <!-- sun / moon — position and palette come from the active scene -->
  <div
    class="absolute h-44 w-44 transition-[top,right] duration-700"
    style="top: var(--celestial-top); right: var(--celestial-right);"
  >
    <div
      class="animate-glow-pulse absolute inset-0 rounded-full transition-[background] duration-700 will-change-transform"
      style="background: var(--sun-moon-glow); filter: blur(24px);"
    ></div>

    {#if theme.mode === 'light'}
      <div
        class="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full transition-[background,box-shadow] duration-700"
        style="background: var(--sun-moon-core); box-shadow: var(--sun-moon-shadow);"
      ></div>
    {:else}
      <div
        class="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full transition-[background,box-shadow] duration-700"
        style="background: var(--sun-moon-core); box-shadow: var(--sun-moon-shadow);"
      >
        <div class="absolute left-4 top-5 h-3 w-3 rounded-full bg-[#aebbd2]/40"></div>
        <div class="absolute bottom-4 right-5 h-4 w-4 rounded-full bg-[#aebbd2]/30"></div>
        <div class="absolute left-9 top-11 h-2 w-2 rounded-full bg-[#aebbd2]/40"></div>
      </div>
    {/if}
  </div>

  {#if theme.mode === 'dark'}
    <!-- stars -->
    {#each stars as star (star.id)}
      <div
        class="animate-twinkle absolute rounded-full bg-white"
        style="left: {star.x}%; top: {star.y}%; width: {star.size}px; height: {star.size}px; opacity: {star.opacity}; animation-delay: {star.delay}s;"
      ></div>
    {/each}
  {/if}

  <!-- waves: blurred horizon shapes evoking water -->
  <svg
    class="absolute inset-x-0 bottom-0 h-[50vh] w-full blur-[4px] transition-opacity duration-700"
    style="opacity: var(--wave-opacity);"
    viewBox="0 0 1440 600"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="wave1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="var(--wave-1-from)" stop-opacity="0.45" />
        <stop offset="1" stop-color="var(--wave-1-to)" stop-opacity="0.18" />
      </linearGradient>
      <linearGradient id="wave2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="var(--wave-2-from)" stop-opacity="0.4" />
        <stop offset="1" stop-color="var(--wave-2-to)" stop-opacity="0.14" />
      </linearGradient>
    </defs>
    <path
      d="M0,260 C 220,180 420,340 720,260 C 1020,180 1220,340 1440,260 L1440,600 L0,600 Z"
      fill="url(#wave1)"
    />
    <path
      d="M0,360 C 240,440 480,280 720,360 C 960,440 1200,280 1440,360 L1440,600 L0,600 Z"
      fill="url(#wave2)"
    />
  </svg>

  {#if weather.isRaining}
    <Rain />
  {/if}

  <!-- scrim for text legibility, top + bottom -->
  <div class="absolute inset-0 transition-[background] duration-700" style="background: var(--scrim-grad);"></div>
</div>
