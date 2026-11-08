import type { NavChildKey, NavKey } from "@/lib/catalog";

export const common = {
  nav: {
    products: "Products",
    industries: "Industries",
    services: "Services",
    resources: "Resources",
    about: "About",
    contact: "Contact",
    quote: "Request a Quote",

    "dc-power-battery-chargers": "DC power & battery chargers",
    "paging-mass-notification": "Paging & mass notification",
    "ups-power-quality": "UPS & power quality",

    "utilities-and-substations": "Utilities & substations",
    "oil-and-gas": "Oil & gas",
    "data-centers": "Data centers",
    "hospitals-and-schools": "Hospitals & schools",
    "government-buildings": "Government buildings",
  } satisfies Record<NavKey, string>,

  navSummary: {
    "dc-power-battery-chargers":
      "24–220 VDC switchmode and SCR chargers, battery stands and DC distribution.",
    "paging-mass-notification":
      "IP and analogue paging, talk-back and voice evacuation, including Ex-rated field devices.",
    "ups-power-quality":
      "Online double-conversion UPS, harmonic filters and voltage regulation. Range expanding.",

    "utilities-and-substations":
      "Protection, control and SCADA power for 13.8 kV to 380 kV substations.",
    "oil-and-gas": "Hazardous-area PA/GA and DC power for plants, terminals and offshore.",
    "data-centers": "−48 VDC telecom power, 125 VDC control and evacuation messaging.",
    "hospitals-and-schools":
      "Intelligible voice evacuation, lockdown messaging and essential-system DC.",
    "government-buildings":
      "Mass notification and standby power for ministries, campuses and secure facilities.",
  } satisfies Record<NavChildKey, string>,

  actions: {
    requestQuote: "Request a Quote",
    downloadCatalog: "Download Product Catalog",
    requestCatalog: "Request the Product Catalog",
    downloadPrequal: "Prequalification pack available on request",
    email: "Email us",
    learnMore: "Learn more",
    backHome: "Back to home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skipToContent: "Skip to main content",
  },

  labels: {
    products: "Products",
    industries: "Industries",
    services: "Services",
    capabilities: "Capabilities",
    specifications: "Typical specifications",
    standards: "Standards & approvals",
    applications: "Typical applications",
    deliverables: "What you receive",
    relatedIndustries: "Where it is used",
    relatedProducts: "Related products",
    faq: "Frequently asked questions",
    breadcrumb: "Breadcrumb",
    home: "Home",
    status: "Availability",
    statusExpanding: "Range expanding — register interest",
  },

  ctaBand: {
    eyebrow: "Next step",
    title: "Send us a single-line diagram or a specification clause.",
    body: "We will come back with a sized technical offer, a compliance statement and a delivered price — usually within two business days.",
    primary: "Request a Quote",
    secondary: "Email us",
  },

  footer: {
    blurb:
      "A United States company supplying utility-grade DC power systems and safety communication equipment to Saudi Arabia, direct from American manufacturers.",
    columns: {
      products: "Products",
      industries: "Industries",
      company: "Company",
      contact: "Contact",
    },
    prequalCta: "Prequalification pack available on request",
    addressOnRequest: "Registered office address available on request.",
    rights: "All rights reserved.",
    builtNote: "Specifications are indicative and subject to the manufacturer's current datasheet.",
    responseNote: "Enquiries answered in English or Arabic.",
  },

  trust: {
    usCompany: "US-based company",
    directOem: "Direct from US manufacturers",
    saberReady: "IEC & SABER-ready documentation",
    voltage: "230/400 V · 60 Hz variants",
    bilingual: "English & Arabic support",
    partnersTitle: "OEM partners",
    partnersPending:
      "Partner marks are published as distribution agreements are signed. The current manufacturer list is included in the prequalification pack.",
  },

  meta: {
    defaultDescription:
      "NextLink USA supplies American-made DC power systems, battery chargers, paging and mass notification equipment to Saudi Arabia, with 230/400 V 60 Hz variants, SABER-ready documentation and bilingual support.",
    keywordsNote: "DC battery charger Saudi Arabia, substation DC power system, mass notification Saudi Arabia, SABER certified paging system",
  },

  notFound: {
    code: "404",
    title: "We could not find that page.",
    body: "The link may be outdated. Try the product range, or send us what you are looking for and we will point you to the right datasheet.",
  },

  error: {
    title: "Something went wrong.",
    body: "The page failed to load. Please try again, or email us and we will send the information directly.",
    retry: "Try again",
  },
};

export type CommonCopy = typeof common;
