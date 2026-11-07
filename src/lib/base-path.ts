/**
 * One knob for where the site lives.
 *
 * `NEXT_PUBLIC_SITE_URL` is the full public URL *including any subpath*. A
 * GitHub Pages project site is served from a subdirectory, so the origin and
 * the base path are both derived from it rather than configured twice.
 *
 *   https://ali-gu.github.io/nextlinkusa  →  origin + basePath "/nextlinkusa"
 *   https://www.nextlinkusa.com           →  origin + basePath ""
 *
 * Imported by next.config.ts as well as application code, so it must stay
 * free of path aliases and of any Node-only API.
 */

const DEFAULT_SITE_URL = "https://ali-gu.github.io/nextlinkusa";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL
).replace(/\/$/, "");

const parsed = new URL(SITE_URL);

export const ORIGIN = parsed.origin;

/** "" at a domain root, "/nextlinkusa" on a GitHub Pages project site. */
export const BASE_PATH = parsed.pathname.replace(/\/$/, "");

/**
 * Prefixes a root-relative path with the base path.
 *
 * `next/link` and `next/script` do this themselves. Everything else does not:
 * plain <a href>, the custom image loader, and URLs inside the web manifest
 * all have to go through here or they resolve one level too high.
 */
export function withBasePath(path: string) {
  if (!BASE_PATH || !path.startsWith("/")) return path;
  return `${BASE_PATH}${path}`;
}
