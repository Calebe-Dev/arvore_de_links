<script lang="ts">
  const drops = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    height: 40 + Math.random() * 50,
    duration: 0.5 + Math.random() * 0.6,
    delay: Math.random() * 2,
    opacity: 0.15 + Math.random() * 0.3,
  }));
</script>

<div class="absolute inset-0 animate-fade-in" aria-hidden="true">
  <div class="absolute inset-0 transition-[background] duration-700" style="background: var(--rain-overlay);"></div>
  {#each drops as drop (drop.id)}
    <span
      class="animate-rain-fall absolute top-[-10%] w-px rounded-full transition-[background] duration-700"
      style="left: {drop.left}%; height: {drop.height}px; opacity: {drop.opacity}; background: var(--rain-color); animation-duration: {drop.duration}s; animation-delay: {-drop.delay}s;"
    ></span>
  {/each}
</div>
