<script lang="ts">
  let { class: className = '' }: { class?: string } = $props();
</script>

<svg
  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
  stroke-linecap="round" stroke-linejoin="round" class={className} aria-hidden="true"
>
  <path d="M9 6l6 6-6 6" />
</svg>
