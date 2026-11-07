import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "@/app/globals.css";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/seo/json-ld";
import { withBasePath } from "@/lib/base-path";
import { content } from "@/lib/content";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import { site, siteUrl } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#061a33",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${content.home.meta.title}`,
    template: `%s | ${site.name}`,
  },
  description: content.common.meta.defaultDescription,
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  manifest: withBasePath("/manifest.webmanifest"),
  formatDetection: { telephone: false, address: false, email: false },
  icons: {
    icon: [{ url: withBasePath("/icon.png"), type: "image/png", sizes: "512x512" }],
    apple: [{ url: withBasePath("/apple-icon.png"), sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/*
          A static host cannot send response headers, so the policy rides in a
          meta tag. `frame-ancestors` and Strict-Transport-Security are
          header-only and are not enforced here — put Cloudflare or another
          proxy in front if clickjacking protection is required.
        */}
        <meta
          httpEquiv="Content-Security-Policy"
          content={[
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline'",
            "style-src 'self' 'unsafe-inline'",
            "img-src 'self' data: blob:",
            "font-src 'self'",
            "connect-src 'self'",
            "form-action 'self'",
            "base-uri 'self'",
            "object-src 'none'",
            "upgrade-insecure-requests",
          ].join("; ")}
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body className="flex min-h-dvh flex-col bg-white antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy-900 focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          {content.common.actions.skipToContent}
        </a>

        <SiteHeader />

        <main id="main" className="flex-1">
          {children}
        </main>

        <SiteFooter />

        <JsonLd data={[organizationSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
