import type { IconName } from "@/components/ui/icon";

/**
 * Slugs and structural metadata. The copy for each entry lives in
 * src/lib/content, keyed by the same slug, so TypeScript fails the build if
 * the two ever drift apart.
 */

export const productSlugs = [
  "dc-power-battery-chargers",
  "paging-mass-notification",
  "ups-power-quality",
] as const;

export type ProductSlug = (typeof productSlugs)[number];

export type ProductMeta = {
  slug: ProductSlug;
  icon: IconName;
  image: string;
  /** "expanding" lines are quoted on request while the range is being signed. */
  status: "available" | "expanding";
};

export const products: Record<ProductSlug, ProductMeta> = {
  "dc-power-battery-chargers": {
    slug: "dc-power-battery-chargers",
    icon: "dcPower",
    image: "/images/telecom-tower.jpg",
    status: "available",
  },
  "paging-mass-notification": {
    slug: "paging-mass-notification",
    icon: "paging",
    image: "/images/fiber-optics.jpg",
    status: "available",
  },
  "ups-power-quality": {
    slug: "ups-power-quality",
    icon: "ups",
    image: "/images/riyadh-skyline.jpg",
    status: "expanding",
  },
};

export const productList = productSlugs.map((slug) => products[slug]);

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

export const serviceIds = [
  "sales",
  "installation",
  "maintenance",
  "spares",
  "after-sales",
] as const;

export type ServiceId = (typeof serviceIds)[number];

export const serviceIcons: Record<ServiceId, IconName> = {
  sales: "quote",
  installation: "install",
  maintenance: "maintenance",
  spares: "spares",
  "after-sales": "support",
};

/* ------------------------------------------------------------ navigation -- */

/** Every key the dictionaries must provide under `common.nav`. */
export type NavKey =
  | "products"
  | "industries"
  | "services"
  | "resources"
  | "about"
  | "contact"
  | "quote"
  | ProductSlug
  | IndustrySlug;

/** The subset that also needs a one-line summary in the flyout. */
export type NavChildKey = ProductSlug | IndustrySlug;

export type NavItem = {
  key: NavKey;
  href: string;
  children?: Array<{ key: NavChildKey; href: string; icon?: IconName }>;
};

export const primaryNav: NavItem[] = [
  {
    key: "products",
    href: "/products",
    children: productList.map((product) => ({
      key: product.slug,
      href: `/products/${product.slug}`,
      icon: product.icon,
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
  { key: "services", href: "/services" },
  { key: "resources", href: "/resources" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];

/** Every page that should appear in the sitemap, newest-changing first. */
export const staticRoutes = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" as const },
  { path: "/products", priority: 0.9, changeFrequency: "monthly" as const },
  ...productSlugs.map((slug) => ({
    path: `/products/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  })),
  { path: "/industries", priority: 0.8, changeFrequency: "monthly" as const },
  ...industrySlugs.map((slug) => ({
    path: `/industries/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  })),
  { path: "/services", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/resources", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/quote", priority: 0.9, changeFrequency: "yearly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
];
