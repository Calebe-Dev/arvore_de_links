import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [tailwindcss(), svelte()],
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
  },
})
