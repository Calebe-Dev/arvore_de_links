<script lang="ts">
  import Lens from './Lens.svelte';
  import LinkCard from './LinkCard.svelte';
  import Arrow from './icons/Arrow.svelte';
  import { links } from './links';

  let { onBack }: { onBack: () => void } = $props();

  const year = new Date().getFullYear();
</script>

<button
  type="button"
  onclick={onBack}
  aria-label="Voltar"
  class="glass fixed left-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full text-cloud transition-transform duration-200 active:scale-90"
>
  <Arrow class="h-5 w-5 rotate-180" />
</button>

<main
  class="fixed inset-0 z-10 mx-auto flex w-full max-w-md flex-col items-center justify-center overflow-y-auto px-6 py-16"
>
  <Lens class="h-24 w-24 animate-float" />

  <h1 class="text-scrim mt-6 text-center text-[32px] font-extrabold tracking-[-0.03em] text-cloud">
    Calebe Araujo
  </h1>

  <p class="text-scrim mt-2 text-center text-[15px] font-medium leading-relaxed text-silver">
    Pense diferente.
  </p>

  <p class="text-scrim mt-2 font-mono text-[11px] uppercase tracking-[0.28em] text-cloud/60">
    Software Developer
  </p>

  <nav class="mt-10 flex w-full flex-col gap-4" aria-label="Redes sociais">
    {#each links as link (link.label)}
      <LinkCard {...link} />
    {/each}
  </nav>

  <footer class="text-scrim mt-16 text-center font-mono text-[11px] tracking-[0.15em] text-cloud/55">
    © {year} Calebe Araujo
  </footer>
</main>
