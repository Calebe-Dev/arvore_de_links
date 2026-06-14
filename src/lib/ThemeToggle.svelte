<script lang="ts">
  import { theme, toggleTheme } from './theme.svelte';
  import Sun from './icons/Sun.svelte';
  import Moon from './icons/Moon.svelte';
</script>

<button
  type="button"
  onclick={toggleTheme}
  aria-label={theme.mode === 'light' ? 'Ativar tema noturno' : 'Ativar tema diurno'}
  class="glass fixed right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full text-cloud transition-transform duration-200 active:scale-90"
>
  {#if theme.mode === 'light'}
    <Moon class="h-5 w-5" />
  {:else}
    <Sun class="h-5 w-5" />
  {/if}
</button>
