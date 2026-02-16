import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'
import smartypants from 'remark-smartypants'
import remarkGfm from 'remark-gfm'
import rehypeExternalLinks from 'rehype-external-links'
import vercel from '@astrojs/vercel';

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
  }})
