import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

/** Required by `output: "export"`: metadata routes must opt in to static. */
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — power & safety communication equipment`,
    short_name: site.name,
    description:
      "American-made DC power systems, battery chargers, paging and mass notification equipment supplied to Saudi Arabia.",
    start_url: "/en",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#061a33",
    icons: [
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
