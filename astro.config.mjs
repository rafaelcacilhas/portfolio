import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'
import smartypants from 'remark-smartypants'
import remarkGfm from 'remark-gfm'
import rehypeExternalLinks from 'rehype-external-links'


// https://astro.build/config
export default defineConfig({
  site: 'https://www.rafaelcacilhas.site',
  integrations: [mdx(), svelte()],
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
})
