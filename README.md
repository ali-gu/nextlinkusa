# NextLink USA — marketing site

Static marketing site for NextLink USA, a United States engineering company
delivering telecom and critical infrastructure across the Gulf.

Next.js 16 (App Router, static export) · React 19 · TypeScript · Tailwind CSS v4.
Deployed to GitHub Pages at **https://www.nextlinkusa.com**.

```bash
npm install
npm run dev        # http://localhost:3000, hot reload
npm run build      # writes the static site to out/
npm run preview    # serve out/ exactly as GitHub Pages will
npm run lint
npm run typecheck
npm run assets     # re-derive every image from assets/source/
```

---

## Deploying

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.
It type-checks and lints first, so a broken build never reaches production.

Pages is enabled with **Source: GitHub Actions** and the custom domain is set
to `www.nextlinkusa.com`. DNS lives at Squarespace: apex A/AAAA records point
at GitHub, `www` is a CNAME to `ali-gu.github.io`.

### Where the site lives

`NEXT_PUBLIC_SITE_URL` is the single knob, and it carries the subpath:

| Value | Serves at | `basePath` |
| --- | --- | --- |
| `https://www.nextlinkusa.com` *(current default)* | custom domain root | *(none)* |
| `https://ali-gu.github.io/nextlinkusa` | GitHub project site | `/nextlinkusa` |

`src/lib/base-path.ts` splits that URL into an origin and a base path, and
feeds both `next.config.ts` and the application. Canonical tags, the sitemap,
the web manifest, the image loader and every asset URL follow from it, so
moving the site is a one-value change.

### Moving back to the project-site URL

Only useful for testing without the domain. Set `DEFAULT_SITE_URL` in
`src/lib/base-path.ts` (or `NEXT_PUBLIC_SITE_URL`) to
`https://ali-gu.github.io/nextlinkusa` and clear the custom domain with
`gh api -X DELETE repos/ali-gu/nextlinkusa/pages` followed by a fresh
`POST`. Everything else follows from that one value.

> **`public/CNAME` does not configure the domain.** When Pages publishes from
> a GitHub Actions artifact rather than from a branch, that file is served as
> an ordinary static file and ignored — the domain has to be set on the
> repository, as in step 3. The file is kept because it records the intended
> domain and would take effect under branch-based publishing.

`public/.nojekyll` stops GitHub from hiding the `_next` directory.

---

## Before you go live

Four things are deliberately left unset. Each has a safe fallback, so nothing
is broken right now — but each should be filled in before launch. Put them in
`.env.local` locally, and in the workflow's `env:` block for production builds.

| What | Current behaviour | How to fix |
| --- | --- | --- |
| **Registered address** | Footer and contact page print "Registered office address available on request." | `NEXT_PUBLIC_ADDR_*` |
| **Legal entity name** | Footer and schema say `NextLink USA LLC`. | `NEXT_PUBLIC_LEGAL_NAME` |
| **Company profile PDF** | The download buttons read "Request the Company Profile" and open a pre-addressed email. | Drop the PDF in `public/downloads/` and set `NEXT_PUBLIC_CATALOG_URL` |
| **Technology partner logos** | The trust strip and About page say accreditations publish as each is completed. | Add entries to `site.partners` in `src/lib/site.ts` |

Two further items worth reading before publishing:

- **Service commitments.** `src/lib/content/services.ts` states response times
  (same-day acknowledgement, proposals in 2–5 working days after survey,
  support within 4 working hours, 24/7 available under contract), repeated on
  the contact and quote pages. These are promises — confirm they are ones the
  business will keep.
- **Capability claims.** The seven service pages describe scope, standards and
  deliverables in detail. Read them against what the team can actually staff
  and certify today, particularly hazardous-area competence, offshore
  mobilisation and submarine fiber.

### Environment

```bash
NEXT_PUBLIC_SITE_URL=https://www.nextlinkusa.com   # canonical origin
NEXT_PUBLIC_LEGAL_NAME=NextLink USA LLC            # exact registered entity
NEXT_PUBLIC_CONTACT_EMAIL=tariq.mehmood@nextlinkusa.com

NEXT_PUBLIC_PHONE=+16783920406                     # E.164; this is the default
NEXT_PUBLIC_WHATSAPP=                              # only if it differs from the above

NEXT_PUBLIC_ADDR_STREET=                           # blank → "on request" line
NEXT_PUBLIC_ADDR_CITY=
NEXT_PUBLIC_ADDR_REGION=
NEXT_PUBLIC_ADDR_POSTAL=

NEXT_PUBLIC_CATALOG_URL=                           # /downloads/catalog.pdf
NEXT_PUBLIC_LINKEDIN=
```

Every one of these is read at **build** time, not in the browser, so changing
one means redeploying.

### How enquiries arrive

GitHub Pages has no server, so there is no form to collect submissions. Email
is the only channel: the quote page opens a `mailto:` with a subject and a
structured body template already filled in — company, project, scope and site
conditions — so enquiries arrive usable rather than as "please quote".

The template lives in `src/lib/content/quote.ts` under `channels.email.template`.
If you later want a real form, the site has to move to a host that can run
server code (Vercel, Cloudflare Pages) or post to a third-party form backend.

**The domain has no MX records**, so mail to `contact@nextlinkusa.com` will
bounce until mail hosting is configured. The `v=spf1 -all` TXT record also has
to go, or outbound mail will be rejected.

---

## Structure

```
assets/source/           Original brand files (logo, company-profile cover)
scripts/build-assets.mjs Derives every shipped image from those two files
public/brand/            Logo and icons, plus their WebP ladders (generated)
public/images/           Photography, social card and WebP ladders (generated)
public/downloads/        Company profile PDF goes here
public/CNAME             Custom domain for GitHub Pages
public/.nojekyll         Stops Pages from hiding _next/

src/app/                 Routes — one directory per page, plus sitemap/robots/manifest
src/components/
  layout/                Header, mobile sheet, footer
  sections/              Hero, trust strip, CTA band, card grids
  ui/                    Buttons, cards, spec tables, accordion, icons
  seo/                   JSON-LD renderer
src/lib/
  content/               All site copy, one module per page
  catalog.ts             Slugs, navigation, sitemap routes
  seo.ts                 Metadata and structured-data builders
  site.ts                Company facts — single source of truth
  image-loader.ts        Maps next/image requests to pre-built WebP variants
  image-manifest.json    Generated — widths available per image
```

### Editing copy

Every user-visible string lives in `src/lib/content/`. Changing text never
means touching markup. Products and industries are keyed by slug, and the slugs
come from `src/lib/catalog.ts`, so TypeScript fails the build if the two drift.

### Adding a service line or industry

1. Add the slug to `serviceSlugs` / `industrySlugs` in `src/lib/catalog.ts`,
   with an icon and an image.
2. TypeScript will flag the missing entries. Add copy in
   `src/lib/content/services.ts` (or `industries.ts`) and a nav label plus
   summary in `src/lib/content/common.ts`.

Routing, the sitemap, the navigation flyout, the footer and the structured data
all follow automatically.

### Images

`npm run assets` regenerates `public/brand/` and `public/images/` from the two
files in `assets/source/`. It keys the white background out of the logo, lifts
the ribbon "N" for the favicon, crops the photography out of the
company-profile cover, composites the 1200×630 social card, and emits a WebP
ladder for every raster asset.

Generated images **are committed to the repository** — CI only runs `npm run
build`, never the asset script. Re-run `npm run assets` locally after replacing
a source file and commit the result, including `src/lib/image-manifest.json`.

---

## Performance and SEO

- **Pure static export.** 22 files of HTML with no server behind them; GitHub
  Pages serves them straight from its CDN.
- **Measured first load: ~186 KB gzipped** (176 KB JS + 10 KB CSS). Almost all
  of that is the React 19 and Next 16 runtime — the site's own client code is
  under 15 KB. A further 39 KB `noModule` legacy bundle is emitted but never
  fetched by a modern browser. Page HTML is 19–43 KB gzipped.
- **Two client components, total:** the mobile navigation sheet and the
  spec-text copy button. The desktop navigation flyout is pure CSS
  (`:hover` + `:focus-within`) and every accordion is a native `<details>`, so
  both work with JavaScript disabled.
- **Responsive images without an optimizer.** A static host cannot resize on
  request, so `npm run assets` pre-builds a WebP ladder (128–1728px) and a
  custom loader points `next/image` at it. `srcset`, `sizes` and lazy loading
  all still apply: the home page pulls ~212 KB of imagery on a 390px phone
  against 455 KB if the originals were served unresized.
- **Self-hosted Inter via `next/font`**, preloaded, with size-adjusted fallback
  metrics so there is no layout shift.
- **No third parties.** No analytics, no tag manager, no embedded map, no
  external fonts.
- **Metadata on every page**: unique title and description, canonical URL
  (trailing-slash form, matching what Pages serves), Open Graph and Twitter
  cards, `robots` directives, `sitemap.xml`, `robots.txt` and a web manifest.
- **Structured data**: `Organization`, `WebSite`, `BreadcrumbList`, `Service`,
  `OfferCatalog`, `ItemList`, `CollectionPage` and `FAQPage`.
- **Accessibility**: skip link, one `<h1>` per page, visible focus rings,
  `aria-live` status messages, Escape-to-close and scroll-lock on the mobile
  sheet, and `prefers-reduced-motion` respected throughout.

### Security headers

A static host cannot send response headers, so the Content-Security-Policy
ships as a `<meta>` tag in the root layout. Two protections are header-only and
are therefore **not** in force: `frame-ancestors` (clickjacking) and
`Strict-Transport-Security`. Putting Cloudflare or a similar proxy in front of
the domain would restore both.
