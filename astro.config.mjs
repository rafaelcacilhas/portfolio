import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'
import smartypants from 'remark-smartypants'
import remarkGfm from 'remark-gfm'
import rehypeExternalLinks from 'rehype-external-links'
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.rafaelcacilhas.xyz',
  integrations: [mdx(), svelte()],
  output: 'static',
  adapter: vercel(),
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
    extensions:['.svelte'],
    resolve: {
      alias: {
        // Map $lib to the metrodrone's lib folder
        '$lib': '/src/components/metrodrone/src/lib'
      },
    },
    plugins: [
          tailwindcss({
            config: {
              content: [
                './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
                // Add the metrodrone submodule
                './src/components/metrodrone/src/**/*.{svelte,js,ts}',
                './src/components/metrodrone/**/*.{svelte,js,ts}'
              ]
            }
          })
        ]
  }})
