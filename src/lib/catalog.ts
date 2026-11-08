import type { IconName } from "@/components/ui/icon";

/**
 * Slugs and structural metadata. The copy for each entry lives in
 * src/lib/content, keyed by the same slug, so TypeScript fails the build if
 * the two ever drift apart.
 */

/** The seven capabilities from the company profile, in presentation order. */
export const serviceSlugs = [
  "telecom-services",
  "mission-critical-communication",
  "networks",
  "ip-telephony",
  "dc-chargers",
  "fiber-optics",
  "submarine-fiber-networks",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export type ServiceMeta = {
  slug: ServiceSlug;
  icon: IconName;
  image: string;
};

export const services: Record<ServiceSlug, ServiceMeta> = {
  "telecom-services": {
    slug: "telecom-services",
    icon: "telecom",
    image: "/images/telecom-tower.jpg",
  },
  "mission-critical-communication": {
    slug: "mission-critical-communication",
    icon: "paging",
    image: "/images/skyline-wide.jpg",
  },
  networks: {
    slug: "networks",
    icon: "network",
    image: "/images/fiber-optics.jpg",
  },
  "ip-telephony": {
    slug: "ip-telephony",
    icon: "phone",
    image: "/images/riyadh-skyline.jpg",
  },
  "dc-chargers": {
    slug: "dc-chargers",
    icon: "dcPower",
    image: "/images/telecom-tower.jpg",
  },
  "fiber-optics": {
    slug: "fiber-optics",
    icon: "fiber",
    image: "/images/fiber-optics.jpg",
  },
  "submarine-fiber-networks": {
    slug: "submarine-fiber-networks",
    icon: "submarine",
    image: "/images/offshore-cable-ship.jpg",
  },
};

export const serviceList = serviceSlugs.map((slug) => services[slug]);

export const industrySlugs = [
  "utilities-and-substations",
  "oil-and-gas",
  "data-centers",
  "hospitals-and-schools",
  "government-buildings",
] as const;

export type IndustrySlug = (typeof industrySlugs)[number];

export type IndustryMeta = {
  slug: IndustrySlug;
  icon: IconName;
  image: string;
};

export const industries: Record<IndustrySlug, IndustryMeta> = {
  "utilities-and-substations": {
    slug: "utilities-and-substations",
    icon: "substation",
    image: "/images/telecom-tower.jpg",
  },
  "oil-and-gas": {
    slug: "oil-and-gas",
    icon: "oilGas",
    image: "/images/offshore-cable-ship.jpg",
  },
  "data-centers": {
    slug: "data-centers",
    icon: "dataCenter",
    image: "/images/fiber-optics.jpg",
  },
  "hospitals-and-schools": {
    slug: "hospitals-and-schools",
    icon: "health",
    image: "/images/riyadh-skyline.jpg",
  },
  "government-buildings": {
    slug: "government-buildings",
    icon: "government",
    image: "/images/skyline-wide.jpg",
  },
};

export const industryList = industrySlugs.map((slug) => industries[slug]);

/** Delivery stages offered against every service line. */
export const deliveryIds = [
  "design",
  "install",
  "maintenance",
  "spares",
  "support",
] as const;

export type DeliveryId = (typeof deliveryIds)[number];

export const deliveryIcons: Record<DeliveryId, IconName> = {
  design: "quote",
  install: "install",
  maintenance: "maintenance",
  spares: "spares",
  support: "support",
};

/* ------------------------------------------------------------ navigation -- */

/** Every key the content must provide under `common.nav`. */
export type NavKey =
  | "services"
  | "industries"
  | "about"
  | "contact"
  | "quote"
  | ServiceSlug
  | IndustrySlug;

/** The subset that also needs a one-line summary in the flyout. */
export type NavChildKey = ServiceSlug | IndustrySlug;

export type NavItem = {
  key: NavKey;
  href: string;
  children?: Array<{ key: NavChildKey; href: string; icon?: IconName }>;
};

export const primaryNav: NavItem[] = [
  {
    key: "services",
    href: "/services",
    children: serviceList.map((service) => ({
      key: service.slug,
      href: `/services/${service.slug}`,
      icon: service.icon,
    })),
  },
  {
    key: "industries",
    href: "/industries",
    children: industryList.map((industry) => ({
      key: industry.slug,
      href: `/industries/${industry.slug}`,
      icon: industry.icon,
    })),
  },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];

/** Every page that should appear in the sitemap. */
export const staticRoutes = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
  ...serviceSlugs.map((slug) => ({
    path: `/services/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  })),
  { path: "/industries", priority: 0.8, changeFrequency: "monthly" as const },
  ...industrySlugs.map((slug) => ({
    path: `/industries/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  })),
  { path: "/about", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/quote", priority: 0.9, changeFrequency: "yearly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
];
