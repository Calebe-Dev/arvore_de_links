<script lang="ts">
  import type { Component } from 'svelte';

  let {
    href,
    label,
    meta = '',
    icon: Icon,
    accent = 'from-prism-cyan to-prism-violet',
  }: {
    href: string;
    label: string;
    meta?: string;
    icon: Component<{ class?: string }>;
    accent?: string;
  } = $props();
</script>

<a
  {href}
  target="_blank"
  rel="noreferrer me"
  class="glass group flex items-center gap-4 rounded-4xl px-6 py-4 transition-[transform,background-color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] active:duration-100"
>
  <span
    class="icon-bubble relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl"
  >
    <span
      class="absolute inset-0 bg-linear-to-br {accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100"
    ></span>
    <Icon class="relative h-6 w-6 text-cloud" />
  </span>

  <span class="min-w-0 flex-1 text-left">
    <span class="block truncate text-[17px] font-semibold leading-tight tracking-tight text-cloud"
      >{label}</span
    >
    {#if meta}
      <span class="mt-0.5 block truncate font-mono text-[12px] text-mist">{meta}</span>
    {/if}
  </span>

  <svg
    class="h-4 w-4 shrink-0 text-mist transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-cloud"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M9 6l6 6-6 6" />
  </svg>
</a>
