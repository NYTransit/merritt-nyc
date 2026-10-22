# MERRITT.NYC

The source for [merritt.nyc](https://merritt.nyc), a small editorial personal site for Brian Merritt.

The site is built with Astro, generates static HTML, and is intended for free hosting on GitHub Pages. It has no backend, database, authentication, analytics, or runtime dependency on Brian's local machine.

## Quick start

Prerequisites: a current Node.js release and npm.

```sh
npm install
npm run dev
```

Astro prints the local preview URL. To validate the production build:

```sh
npm run build
npm run preview
```

The generated site is written to `dist/`.

## Site map

- `/` — homepage
- `/about/` — personal background
- `/projects/` — project index
- `/lab/` — technology projects and experiments
- `/collection/` — collection gallery placeholder
- `/new-york/` — New York photography journal placeholder
- `/elsewhere/` — confirmed public links

## Editing content

### Update the homepage introduction

Edit `src/components/Hero.astro` for the opening copy and `src/pages/index.astro` for the short biography and three interest tiles.

### Replace the hero photograph

Replace `src/assets/images/hero-nyc-placeholder.png`, keeping the same filename, or update the imports in `src/components/Hero.astro` and `src/layouts/BaseLayout.astro`. Use a wide image with enough resolution for a 1,800-pixel desktop rendition. Remove the placeholder caption after the replacement has been approved for public use.

### Add a Lab project

Create a Markdown file in `src/content/projects/` with frontmatter matching this shape:

```md
---
title: Project title
description: One restrained sentence about the project.
category: Lab
year: 2026
status: Draft
order: 5
---

Longer notes can go here when a detail-page template is added.
```

Allowed categories and statuses are defined in `src/content.config.ts`. Drafts currently appear in the index so they remain visibly provisional; remove or change an entry if it should not be public.

### Add a Collection item

The first release deliberately contains no invented inventory. Add approved photographs to `src/assets/images/`, then introduce a collection data file or collection content schema before rendering named items in `src/pages/collection.astro`.

### Add a New York photograph or entry

Add the approved image to `src/assets/images/` and update `src/pages/new-york.astro`. Do not publish exact residence details, private addresses, real-time whereabouts, or identifying family information. Write useful alt text that describes the photograph rather than its filename.

### Update external links

Edit `src/data/links.ts`. Only add confirmed public URLs. The footer and `/elsewhere/` page both read from this file.

## Placeholder images

The four first-edition images are generated editorial placeholders, not personal photographs or documented items from Brian's collection. They are visibly labeled on the site. Their intended role and generation prompts are recorded in `docs/placeholder-images.md`.

Before removing a placeholder label, confirm that the replacement image is licensed or personally owned and deliberately approved for publication.

## GitHub Pages deployment

The workflow at `.github/workflows/deploy.yml` follows the current official Astro GitHub Pages pattern. Every push to `main` builds and deploys the static site.

1. Create a public repository named `merritt-nyc` under the intended GitHub account.
2. Push this project to the repository's `main` branch.
3. In **Settings → Pages**, choose **GitHub Actions** as the deployment source.
4. Verify `merritt.nyc` in the GitHub account's Pages settings before attaching it to the repository.
5. In the repository's Pages settings, set the custom domain to `merritt.nyc`.
6. After DNS resolves and GitHub provisions the certificate, enable **Enforce HTTPS**.

The project includes `public/CNAME`, but the custom-domain value in GitHub Pages settings should also be configured when publishing through GitHub Actions.

## DNS handoff

Do not change DNS until the repository has deployed successfully at its temporary `github.io` address.

Before editing records, export or screenshot the entire current GoDaddy DNS zone. Preserve all email and verification records, especially:

- Google MX records
- SPF TXT records
- DKIM TXT records
- DMARC TXT records
- Google verification records
- unrelated subdomains

For the website, GitHub currently documents four A records for the apex (`@`):

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Optional IPv6 AAAA records:

```text
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

Set `www` as a CNAME to `NYTransit.github.io`. Confirm these values against [GitHub's current custom-domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) at the time of the change.

After propagation, test:

- `https://merritt.nyc`
- `https://www.merritt.nyc`
- inbound mail to the custom domain
- outbound mail and SPF/DKIM/DMARC alignment

## Privacy checklist

Before each content addition, confirm that it does not expose children's names, schools, birthdays, private photographs, schedules, medical or educational details, an exact home address, security-sensitive infrastructure, or private account information.

## Design system

Global tokens, typography, responsive layouts, focus states, and reduced-motion behavior live in `src/styles/global.css`. The site uses system fonts to avoid external font requests.
