import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'
import smartypants from 'remark-smartypants'
import remarkGfm from 'remark-gfm'
import rehypeExternalLinks from 'rehype-external-links'


// https://astro.build/config
export default defineConfig({
  site: 'https://www.rafaelcacilhas.xyz',
  integrations: [mdx(), svelte({
    include: [ 
      './src/**/*.svelte',
      './src/components/metronome/src/**/*.svelte'  // Include submodule!
    ]
  })],
  markdown: {
    shikiConfig: {
      theme: 'nord',
    },
    remarkPlugins: [remarkGfm, smartypants],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
        },
      ],
    ],
  },

  vite: {
    resolve: {
      alias: {
        // Map $lib to the metrodrone's lib folder
        '$lib': '/src/components/metrodrone/src/lib'
      }
    },
    optimizeDeps: {
      include: [
        'bits-ui',
        'tailwind-merge',
        'clsx',
        'svelte',
        'svelte/store',
        '@lucide/svelte',
        'tailwind-variants',
        'svelte-sonner',
        'mode-watcher',
        '@internationalized/date'
      ]
    },
    ssr: {
      noExternal: [
        'bits-ui',
        'tailwind-merge',
        'clsx',
        '@lucide/svelte',
        'tailwind-variants',
        'svelte-sonner',
        'mode-watcher',
        '@internationalized/date'
      ]
    }
  }})
