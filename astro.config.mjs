import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://merritt.nyc',
  trailingSlash: 'always',
  output: 'static',
  integrations: [sitemap()],
});
