<script lang="ts">
  import Lens from './Lens.svelte';
  import Arrow from './icons/Arrow.svelte';

  let { onContinue }: { onContinue: () => void } = $props();

  $effect(() => {
    const timer = setTimeout(onContinue, 5000);
    return () => clearTimeout(timer);
  });
</script>

<main
  class="fixed inset-0 z-10 mx-auto flex w-full max-w-md flex-col items-center justify-center overflow-y-auto px-6 py-16 text-center"
>
  <Lens class="h-28 w-28 animate-float" />

  <h1 class="text-scrim mt-6 text-center text-[32px] font-extrabold tracking-[-0.03em] text-cloud">
    Calebe Araujo
  </h1>

  <p class="text-scrim mt-2 text-center text-[15px] font-medium leading-relaxed text-silver">
    Pense diferente.
  </p>

  <p class="text-scrim mt-2 font-mono text-[11px] uppercase tracking-[0.28em] text-cloud/60">
    Software Developer
  </p>

  <p class="text-scrim mt-10 text-[17px] font-semibold leading-snug text-cloud">
    Aqui você pode ver um pouco mais sobre mim...
  </p>

  <p class="text-scrim mt-3 max-w-xs text-[15px] leading-relaxed text-silver">
    Gosto de transformar ideias em produtos digitais sólidos, do back-end à interface — sempre com
    atenção aos detalhes, performance e um toque de design.
  </p>

  <button
    type="button"
    onclick={onContinue}
    class="glass group mt-10 flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold text-cloud transition-transform duration-200 active:scale-95"
  >
    Ver links
    <Arrow class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
  </button>
</main>
