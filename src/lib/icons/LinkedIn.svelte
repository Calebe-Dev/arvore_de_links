<script lang="ts">
  let { class: className = '' }: { class?: string } = $props();
</script>

<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="1.8"
  stroke-linecap="round"
  stroke-linejoin="round"
  class={className}
  aria-hidden="true"
>
  <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
  <line x1="7.2" y1="10.5" x2="7.2" y2="16.5" />
  <circle cx="7.2" cy="7.2" r="0.6" fill="currentColor" stroke="none" />
  <path d="M11 16.5v-6" />
  <path d="M11 13c0-1.4 1-2.5 2.4-2.5S16 11.6 16 13v3.5" />
</svg>
