import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";

/** Required by `output: "export"`: metadata routes must opt in to static. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
