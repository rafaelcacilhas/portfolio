import { vitePreprocess } from '@astrojs/svelte';

export default {
  preprocess: vitePreprocess() // Already handles TypeScript
};