import type { Metadata } from "next";

import { site, siteUrl } from "@/lib/site";

export const OG_IMAGE = {
  url: "/images/og-default.jpg",
  width: 1200,
  height: 630,
};

/**
 * `trailingSlash: true` means the export serves /products/ — canonical tags,
 * sitemap entries and schema URLs have to agree or they point at a redirect.
 */
export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  // Files keep their extension; routes get a trailing slash.
  const withSlash = /\.[a-z0-9]+$/i.test(clean) || clean.endsWith("/")
    ? clean
    : `${clean}/`;
  return `${siteUrl}${withSlash}`;
}

/** Canonical URL, robots directives and social cards for one page. */
export function buildMetadata({
  path,
  title,
  description,
  image,
  noIndex,
}: {
  /** Site-root-relative path, e.g. "/products/dc-power-battery-chargers". */
  path: string;
  title: string;
  description: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const canonical = absoluteUrl(path);
  const ogImage = image ?? OG_IMAGE.url;

  return {
    title,
    description,
    alternates: { canonical },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: "website",
      siteName: site.name,
      title,
      description,
      url: canonical,
      locale: "en_US",
      images: [
        {
          url: absoluteUrl(ogImage),
          width: OG_IMAGE.width,
          height: OG_IMAGE.height,
          alt: site.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(ogImage)],
    },
  };
}

/* --------------------------------------------------------- structured data */

const ORG_ID = `${siteUrl}/#organization`;
const SITE_ID = `${siteUrl}/#website`;

export function organizationSchema() {
  const hasPostal = Boolean(site.address.street && site.address.locality);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalName,
    url: absoluteUrl("/"),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/brand/icon-512.png"),
      width: 512,
      height: 512,
    },
    image: absoluteUrl(OG_IMAGE.url),
    slogan: site.tagline,
    foundingDate: String(site.foundedYear),
    email: site.email,
    address: {
      "@type": "PostalAddress",
      ...(hasPostal
        ? {
            streetAddress: site.address.street,
            addressLocality: site.address.locality,
            addressRegion: site.address.region,
            postalCode: site.address.postalCode,
          }
        : {}),
      addressCountry: site.address.country,
    },
    areaServed: [
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Kuwait" },
      { "@type": "Country", name: "Qatar" },
      { "@type": "Country", name: "Bahrain" },
      { "@type": "Country", name: "Oman" },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.email,
        availableLanguage: ["en", "ar"],
        areaServed: ["SA", "AE", "KW", "QA", "BH", "OM", "US"],
      },
      {
        "@type": "ContactPoint",
        contactType: "technical support",
        email: site.email,
        availableLanguage: ["en", "ar"],
      },
    ],
    knowsAbout: [
      "Substation DC power systems",
      "Stationary battery chargers",
      "IEEE 485 battery sizing",
      "Mass notification systems",
      "Public address and general alarm",
      "Hazardous area certified equipment",
      "SABER and SASO conformity",
    ],
    ...(site.social.linkedin ? { sameAs: [site.social.linkedin] } : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    url: absoluteUrl("/"),
    name: site.name,
    inLanguage: "en",
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbSchema(items: Array<{ label: string; href?: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: absoluteUrl(item.href) } : {}),
    })),
  };
}

export function faqSchema(items: ReadonlyArray<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/**
 * Deliberately emitted without `offers`: these pages describe equipment
 * families quoted to specification, and inventing a price to satisfy a rich
 * result would be worse than forgoing the rich result.
 */
export function productSchema({
  name,
  description,
  image,
  url,
  category,
  specs,
}: {
  name: string;
  description: string;
  image: string;
  url: string;
  category: string;
  specs?: ReadonlyArray<{ label: string; value: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: absoluteUrl(image),
    url: absoluteUrl(url),
    category,
    brand: { "@type": "Brand", name: site.name },
    manufacturer: { "@id": ORG_ID },
    ...(specs?.length
      ? {
          additionalProperty: specs.map((spec) => ({
            "@type": "PropertyValue",
            name: spec.label,
            value: spec.value,
          })),
        }
      : {}),
  };
}

export function serviceCatalogSchema({
  name,
  services,
}: {
  name: string;
  services: ReadonlyArray<{ name: string; description: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name,
    provider: { "@id": ORG_ID },
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: { "@id": ORG_ID },
        areaServed: { "@type": "Country", name: "Saudi Arabia" },
      },
    })),
  };
}

export function itemListSchema({
  name,
  items,
}: {
  name: string;
  items: ReadonlyArray<{ name: string; url: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.url),
    })),
  };
}

export function collectionPageSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: absoluteUrl(url),
    inLanguage: "en",
    isPartOf: { "@id": SITE_ID },
  };
}
