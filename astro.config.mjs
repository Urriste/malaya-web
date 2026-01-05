// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.malayaweb.com",
  output: 'server',
  adapter: vercel(),
  integrations: [
    tailwind({}),
    sitemap()
  ],
});
