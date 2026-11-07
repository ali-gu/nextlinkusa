import type { NextConfig } from "next";

import { BASE_PATH } from "./src/lib/base-path";

/**
 * Static export for GitHub Pages: every route is written to `out/` as HTML and
 * served straight from the CDN. There is no Node runtime, which is why the
 * site carries no Server Actions or route handlers.
 *
 * Two consequences worth knowing:
 *
 *  - `headers()` has no effect on a static host, so the security headers that
 *    used to live here are gone. The Content-Security-Policy is now a <meta>
 *    tag in the root layout. `frame-ancestors` and HSTS cannot be set by meta
 *    tag and need a real origin server or a proxy such as Cloudflare in front.
 *
 *  - `next/image`'s optimizer is unavailable, so images go through a custom
 *    loader that points at variants pre-built by `npm run assets`. Responsive
 *    `srcset`, lazy loading and WebP all still work — see src/lib/image-loader.
 */
const nextConfig: NextConfig = {
  output: "export",

  // Derived from NEXT_PUBLIC_SITE_URL: "/nextlinkusa" on a GitHub Pages
  // project site, empty once the custom domain is serving from its root.
  basePath: BASE_PATH,
  assetPrefix: BASE_PATH || undefined,

  reactStrictMode: true,
  poweredByHeader: false,

  // GitHub Pages resolves /products/ from products/index.html with no
  // ambiguity; extensionless paths rely on its own fallback behaviour.
  trailingSlash: true,

  // Tailwind v4 runs through its Turbopack loader; without this the @theme
  // block falls through untransformed and no utilities are emitted.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    // Must match the ladder emitted by scripts/build-assets.mjs, or the loader
    // will round a request up to a width that was never generated.
    deviceSizes: [384, 640, 960, 1280, 1600],
    imageSizes: [128, 192, 256],
  },
};

export default nextConfig;
