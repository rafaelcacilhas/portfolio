import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte'; // use this instead of sveltekit

export default defineConfig({
  plugins: [svelte()],
  optimizeDeps: {
    include: ['@threlte/core', '@threlte/extras'],
    extensions: ['.svelte'] // explicitly include svelte files
  },
  ssr: {
    noExternal: ['@threlte/core', '@threlte/extras'] // bundle them
  }
});