import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isGitHubProjectPreview = process.env.DEPLOY_TARGET === 'github-project';

export default defineConfig({
  site: isGitHubProjectPreview ? 'https://nytransit.github.io' : 'https://merritt.nyc',
  base: isGitHubProjectPreview ? '/merritt-nyc' : '/',
  trailingSlash: 'always',
  output: 'static',
  integrations: [sitemap()],
});
