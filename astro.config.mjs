// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://forza-box.vercel.app', // Cambia esto por tu dominio real
    integrations: [sitemap()],
});
