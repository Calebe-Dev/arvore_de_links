<script lang="ts">
  let { class: className = '' }: { class?: string } = $props();
</script>

<svg
  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
  stroke-linecap="round" stroke-linejoin="round" class={className} aria-hidden="true"
>
  <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
  <g transform="translate(5.4,5.4) scale(0.55)" stroke-width="3.3">
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </g>
</svg>
