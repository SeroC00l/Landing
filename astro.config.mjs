import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://landing-shu.pages.dev',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'es',
    locales: [ 'es', 'en' ],
    routing: {
      prefixDefaultLocale: false
    },
    fallback: {
      en: 'es'
    }
  }
});