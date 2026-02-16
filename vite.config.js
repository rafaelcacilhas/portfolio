import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [
    // Add this plugin BEFORE the regular svelte plugin
    {
      name: 'force-threlte-processing',
      enforce: 'pre',
      async transform(code, id) {
        // Only transform .svelte files from @threlte
        if (id.includes('@threlte') && id.endsWith('.svelte')) {
          // Let the regular svelte plugin handle it, but ensure it's included
          return null; // Returning null means "continue with other plugins"
        }
      },
      config() {
        return {
          optimizeDeps: {
            include: ['@threlte/core', '@threlte/extras'],
            exclude: []
          },
          ssr: {
            noExternal: ['@threlte/core', '@threlte/extras']
          }
        };
      }
    }
  ]
});