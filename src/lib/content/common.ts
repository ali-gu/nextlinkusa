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
    "dc-chargers": "DC systems",
    "fiber-optics": "Fiber optics",
    "offshore-communications": "Off-shore comms",
    "submarine-fiber-networks": "Submarine fiber",

    "utilities-and-substations": "Power & utilities",
    "oil-and-gas": "Oil & gas",
    "government-buildings": "Government authorities",
    transportation: "Transportation",
  } satisfies Record<NavKey, string>,

  navSummary: {
    "telecom-services":
      "Full RF deployment, site acquisition and 24/7 NOC operations.",
    "mission-critical-communication":
      "Zero-downtime TETRA and P25 secure voice and data systems.",
    networks:
      "Scalable LAN/WAN, SD-WAN, DWDM transport and zero-trust cybersecurity.",
    "ip-telephony":
      "Enterprise cloud VoIP, UCaaS and SIP trunking migration.",
    "dc-chargers":
      "Industrial AC/DC rectifiers, chargers and EMS battery backup.",
    "fiber-optics":
      "FTTx deployments, precision splicing and OTDR testing.",
    "offshore-communications":
      "ATEX-certified maritime VSAT, LTE and rig safety PAGA.",
    "submarine-fiber-networks":
      "Subsea cable landing stations, PFE and seabed surveying.",

    "utilities-and-substations":
      "Protection, control, SCADA communications and DC power for grids and substations.",
    "oil-and-gas":
      "Hazardous-area communications and DC power for plants, terminals and offshore.",
    "government-buildings":
      "Mission-critical radio, secure networks and standby power for public agencies.",
    transportation:
      "Operational radio, corridor networks and passenger communications for transport.",
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
    title: "Let’s build a connected tomorrow.",
    body: "Contact our engineering team to design, upgrade or manage your critical telecom infrastructure. Send a scope, a drawing or just the problem — we usually come back with a priced proposal within two business days.",
    primary: "Request a Quote",
    secondary: "Email us",
  },

  footer: {
    blurb:
      "Your trusted partner in telecom and critical infrastructure — end-to-end telecommunications, industrial power and mission-critical communications from a United States engineering company.",
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
      "NextLink USA engineers resilient voice, data, power and submarine optic networks for zero-downtime mission environments: telecom services, mission-critical communication, networks, IP telephony, DC systems, fiber optics, off-shore comms and submarine fiber.",
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
