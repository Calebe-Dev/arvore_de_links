<script lang="ts">
  import { fade } from 'svelte/transition';
  import LiquidBackground from './lib/LiquidBackground.svelte';
  import ThemeToggle from './lib/ThemeToggle.svelte';
  import IntroScreen from './lib/IntroScreen.svelte';
  import LinksScreen from './lib/LinksScreen.svelte';

  let view = $state<'intro' | 'links'>('intro');

  const reduceMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fadeDuration = reduceMotion ? 0 : 220;
</script>

<LiquidBackground />
<ThemeToggle />

{#if view === 'intro'}
  <div transition:fade={{ duration: fadeDuration }}>
    <IntroScreen onContinue={() => (view = 'links')} />
  </div>
{:else}
  <div transition:fade={{ duration: fadeDuration }}>
    <LinksScreen onBack={() => (view = 'intro')} />
  </div>
{/if}
