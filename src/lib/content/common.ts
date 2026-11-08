import type { NavChildKey, NavKey } from "@/lib/catalog";

export const common = {
  nav: {
    services: "Services",
    industries: "Industries",
    about: "About",
    contact: "Contact",
    quote: "Request a Quote",

    "telecom-services": "Telecom services",
    "mission-critical-communication": "Mission-critical communication",
    networks: "Networks",
    "ip-telephony": "IP telephony",
    "dc-chargers": "DC chargers",
    "fiber-optics": "Fiber optics",
    "submarine-fiber-networks": "Off-shore & submarine fiber",

    "utilities-and-substations": "Utilities & substations",
    "oil-and-gas": "Oil & gas",
    "data-centers": "Data centers",
    "hospitals-and-schools": "Hospitals & schools",
    "government-buildings": "Government buildings",
  } satisfies Record<NavKey, string>,

  navSummary: {
    "telecom-services":
      "Site surveys, mast and tower work, transmission, power and grounding, commissioning.",
    "mission-critical-communication":
      "Land mobile radio, PA/GA, voice evacuation and dispatch, including hazardous areas.",
    networks:
      "Routing, switching, segmentation and industrial Ethernet for IT and OT alike.",
    "ip-telephony":
      "SIP and unified communications, contact centre, DECT and paging integration.",
    "dc-chargers":
      "Substation battery chargers and DC distribution, sized to IEEE 485 and maintained.",
    "fiber-optics":
      "Outside and inside plant design, splicing, OTDR testing, DWDM and restoration.",
    "submarine-fiber-networks":
      "Platform and terminal connectivity, landing stations and subsea route support.",

    "utilities-and-substations":
      "Protection, control and SCADA communications for 13.8 kV to 380 kV substations.",
    "oil-and-gas":
      "Hazardous-area communications and DC power for plants, terminals and offshore.",
    "data-centers":
      "Structured cabling, −48 VDC plant and evacuation messaging under live load.",
    "hospitals-and-schools":
      "Voice evacuation, lockdown messaging and nurse-call integration.",
    "government-buildings":
      "Mass notification, secure networks and standby power for ministries and campuses.",
  } satisfies Record<NavChildKey, string>,

  actions: {
    requestQuote: "Request a Quote",
    downloadCatalog: "Download Company Profile",
    requestCatalog: "Request the Company Profile",
    downloadPrequal: "Prequalification pack available on request",
    email: "Email us",
    learnMore: "Learn more",
    talkToEngineer: "Talk to an engineer",
    backHome: "Back to home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skipToContent: "Skip to main content",
  },

  labels: {
    services: "Services",
    industries: "Industries",
    capabilities: "Capabilities",
    scope: "Scope of work",
    standards: "Standards we work to",
    applications: "Typical applications",
    deliverables: "What you receive",
    relatedIndustries: "Where we do it",
    relatedServices: "Related services",
    faq: "Frequently asked questions",
    breadcrumb: "Breadcrumb",
    home: "Home",
  },

  ctaBand: {
    eyebrow: "Next step",
    title: "Send us a scope, a drawing, or just the problem.",
    body: "We will come back with an approach, the standards we would work to, and a priced proposal — usually within two business days.",
    primary: "Request a Quote",
    secondary: "Email us",
  },

  footer: {
    blurb:
      "A United States engineering company delivering telecom and critical infrastructure across the Gulf — design, installation, commissioning and long-term support.",
    columns: {
      services: "Services",
      industries: "Industries",
      company: "Company",
      contact: "Contact",
    },
    prequalCta: "Prequalification pack available on request",
    addressOnRequest: "Registered office address available on request.",
    rights: "All rights reserved.",
    builtNote:
      "Scope and standards are confirmed per project before any work is priced.",
  },

  trust: {
    usCompany: "US-based engineering company",
    standards: "Work to IEEE, NFPA, TIA and IEC",
    singlePoint: "One accountable contractor",
    hazardous: "Hazardous-area qualified",
    support: "Support beyond handover",
    partnersTitle: "Technology partners",
    partnersPending:
      "Vendor accreditations are published as each agreement is completed. The current list is included in the prequalification pack.",
  },

  meta: {
    defaultDescription:
      "NextLink USA is a United States engineering company delivering telecom and critical infrastructure across the Gulf: networks, mission-critical communications, DC power, fiber optics and off-shore submarine fiber.",
  },

  notFound: {
    code: "404",
    title: "We could not find that page.",
    body: "The link may be outdated. Try the service lines, or tell us what you are looking for and we will point you to the right place.",
  },

  error: {
    title: "Something went wrong.",
    body: "The page failed to load. Please try again, or email us and we will send the information directly.",
    retry: "Try again",
  },
};

export type CommonCopy = typeof common;
