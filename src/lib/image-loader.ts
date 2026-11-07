"use client";

import manifest from "@/lib/image-manifest.json";

/**
 * Stands in for the Next image optimizer, which a static export cannot run.
 *
 * `npm run assets` writes a WebP ladder beside each source image and records
 * the available widths in image-manifest.json; this maps a requested width to
 * the smallest generated variant that covers it. `next/image` still builds the
 * srcset, applies `sizes` and lazy-loads — only the resizing moved to build
 * time.
 */

const WIDTHS: Record<string, number[]> = manifest;

export default function imageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  const widths = WIDTHS[src];

  // Anything without a pre-built ladder (an OEM partner logo dropped in later,
  // say) is served as-is rather than pointing at a file that does not exist.
  if (!widths?.length) return src;

  const chosen = widths.find((candidate) => candidate >= width) ?? widths.at(-1)!;
  return src.replace(/\.(jpe?g|png)$/i, `-${chosen}.webp`);
}
