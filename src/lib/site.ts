/**
 * Single source of truth for company facts that appear across the site, the
 * structured data and the quote notifications.
 *
 * Values marked PLACEHOLDER are safe to ship but should be replaced before
 * launch — see README, "Before you go live".
 */

import { SITE_URL, withBasePath } from "@/lib/base-path";

const env = (key: string, fallback = "") => process.env[key]?.trim() || fallback;

/** Full public URL, subpath included. See src/lib/base-path.ts. */
export const siteUrl = SITE_URL;

export const site = {
  name: "NextLink USA",
  /** PLACEHOLDER — set NEXT_PUBLIC_LEGAL_NAME to the exact registered entity. */
  legalName: env("NEXT_PUBLIC_LEGAL_NAME", "NextLink USA LLC"),
  tagline: "Connect · Innovate · Empower",
  url: siteUrl,

  email: env("NEXT_PUBLIC_CONTACT_EMAIL", "tariq.mehmood@nextlinkusa.com"),

  phone: env("NEXT_PUBLIC_PHONE", "+16783920406"),
  /** Defaults to the main line; override only if WhatsApp is a different number. */
  whatsapp: env("NEXT_PUBLIC_WHATSAPP", env("NEXT_PUBLIC_PHONE", "+16783920406")),

  /**
   * Left empty until the registered office is confirmed: the footer and the
   * Organization schema fall back to an "on request" line rather than print a
   * guessed address.
   */
  address: {
    street: env("NEXT_PUBLIC_ADDR_STREET"),
    locality: env("NEXT_PUBLIC_ADDR_CITY"),
    region: env("NEXT_PUBLIC_ADDR_REGION"),
    postalCode: env("NEXT_PUBLIC_ADDR_POSTAL"),
    country: "US",
    countryName: "United States of America",
  },

  /**
   * Partner marks publish automatically once distribution agreements are
   * signed: add `{ name, logo, href }` entries and the trust strip and the
   * About grid pick them up.
   */
  partners: [] as Array<{ name: string; logo: string; href?: string }>,

  /**
   * Point NEXT_PUBLIC_CATALOG_URL at the PDF once it exists (a file under
   * public/downloads/, or a hosted URL). Until then the catalogue call to
   * action asks for it by email rather than linking to a 404.
   */
  catalogUrl: env("NEXT_PUBLIC_CATALOG_URL"),

  foundedYear: 2023,
  social: {
    linkedin: env("NEXT_PUBLIC_LINKEDIN"),
  },
} as const;

export const hasAddress = Boolean(site.address.street && site.address.locality);

/** Digits only — what wa.me expects. */
export const whatsappDigits = site.whatsapp.replace(/\D/g, "");

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${whatsappDigits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function telLink() {
  return `tel:${site.phone.replace(/[^\d+]/g, "")}`;
}

export function mailtoLink(subject?: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return `mailto:${site.email}${query ? `?${query}` : ""}`;
}

/** Prints +16783920406 as +1 678 392 0406. */
export function formatPhone(value: string = site.phone) {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) {
    return `+1 ${digits.slice(1, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
  }
  return value;
}

/**
 * Resolves the "product catalog" call to action: a real download once a file
 * is configured, an email request before that.
 */
export const catalog = {
  get available() {
    return Boolean(site.catalogUrl);
  },
  get href() {
    // A configured catalogue is a file under public/, so it needs the prefix.
    return site.catalogUrl
      ? withBasePath(site.catalogUrl)
      : mailtoLink("Product catalogue request");
  },
};
