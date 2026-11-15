// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Cambia esta URL por tu dominio definitivo
  site: 'https://elmuralisto.netlify.app',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  image: { layout: 'constrained' },
  prefetch: { prefetchAll: true },
});
