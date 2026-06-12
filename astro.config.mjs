// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: update once hosting is finalized (user/org page vs project page vs custom domain).
  site: 'https://eangius.github.io',
  base: '/',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'], // add 'es', 'fr' here later
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});