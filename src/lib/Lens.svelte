<script lang="ts">
  let { class: className = '' }: { class?: string } = $props();
</script>

<div
  class="relative aspect-square overflow-hidden rounded-full shadow-[0_18px_40px_-12px_rgba(123,90,255,0.55),0_6px_16px_rgba(0,0,0,0.35),inset_0_0_0_2px_rgba(255,255,255,0.55)] {className}"
>
  <div class="prism-gradient absolute inset-0 animate-spin-slow"></div>
  <div
    class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_32%_26%,rgba(255,255,255,0.95),rgba(255,255,255,0)_45%)]"
  ></div>
  <div
    class="pointer-events-none absolute left-[22%] top-[16%] h-[14%] w-[28%] -rotate-[25deg] rounded-full bg-white/70 blur-[2px]"
  ></div>
</div>
