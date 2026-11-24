import type { IconName } from "@/components/ui/icon";

type WhyItem = { id: string; icon: IconName; title: string; body: string };

export const home = {
  meta: {
    title: "Your trusted partner in telecom & critical infrastructure",
    description:
      "NextLink USA engineers resilient voice, data, power and submarine optic networks for extreme, zero-downtime mission environments: telecom, mission-critical communication, networks, IP telephony, DC systems, fiber optics, off-shore comms and submarine fiber.",
  },

  hero: {
    eyebrow: "Land · Sea · Cloud",
    title: "Your trusted partner in telecom & critical infrastructure.",
    subtitle:
      "Engineering resilient voice, data, power and submarine optic networks for extreme, zero-downtime mission environments worldwide.",
    primary: "Request a Quote",
    imageAlt:
      "A telecommunications tower, city towers and fibre-optic strands, representing the critical infrastructure NextLink USA builds and supports",
    highlights: [
      { value: "99.999%", label: "Availability-focused architectures" },
      { value: "8", label: "Core service verticals, one contractor" },
      { value: "24/7", label: "NOC operations and support" },
    ],
  },

  pillars: {
    eyebrow: "Where we work",
    title: "Three ways clients bring us in",
    body: "Most engagements start at one of these three points, then widen as the asset moves from construction into operation.",
    items: [
      {
        id: "build",
        title: "Build it",
        body: "A greenfield network, a new control room, a substation DC system or a fiber route. We survey, design to the applicable standard, install and hand over a commissioned system with the test records to prove it.",
        bullets: [
          "Site survey and detailed design",
          "Installation and supervised commissioning",
          "Site acceptance testing against a written procedure",
        ],
        href: "/services",
        cta: "Service lines",
      },
      {
        id: "fix",
        title: "Fix it",
        body: "Coverage that was never right, intelligibility that fails a drill, a DC bus with an earth fault nobody can find, a fiber route that keeps taking hits. We measure first and tell you what the data says.",
        bullets: [
          "Measured surveys rather than assumptions",
          "Root-cause findings, written down",
          "Remediation priced against what we found",
        ],
        href: "/services/networks",
        cta: "Diagnostics and remediation",
      },
      {
        id: "keep",
        title: "Keep it running",
        body: "The part most contractors lose interest in. Preventive schedules built on the standards that govern the equipment, a spares holding sized on travel time, and an engineer who already knows your site.",
        bullets: [
          "Preventive maintenance to IEEE 450 and 1188",
          "Critical spares sized on response time",
          "A named technical contact, not a ticket queue",
        ],
        href: "/services",
        cta: "Maintenance and support",
      },
    ],
  },

  services: {
    eyebrow: "Services overview",
    title: "Our core service verticals",
    body: "End-to-end telecommunications, industrial power and mission-critical communications, integrated across cellular towers, submarine cables and cloud platforms. Holding them under one contract is what keeps the interfaces from becoming someone else's problem.",
    cta: "All services",
  },

  why: {
    eyebrow: "Strategic advantage",
    title: "Why choose NextLink USA?",
    items: [
      {
        id: "stack",
        icon: "layers",
        title: "End-to-end stack",
        body: "From subsea optical fiber to enterprise cloud VoIP, we manage the full turnkey infrastructure. Under one contract the interfaces are ours to solve, and there is one number to call when something does not work.",
      },
      {
        id: "uptime",
        icon: "gauge",
        title: "Zero-downtime focus",
        body: "Architected for 99.999% availability in harsh industrial and emergency environments, with redundancy tested at commissioning rather than assumed from a datasheet.",
      },
      {
        id: "innovation",
        icon: "sparkle",
        title: "Smart innovation",
        body: "Integrating hybrid renewable power management and real-time smart telemetry, so site health, fuel and battery state are visible before they become an outage.",
      },
      {
        id: "standards",
        icon: "shieldCheck",
        title: "We work to a named standard",
        body: "IEEE 485 for battery sizing, IEC 60268-16 for intelligibility, TIA-568 for cabling, NFPA 72 for emergency communications. Every proposal states which standard governs which part of the work, so there is something to hold us to at handover.",
      },
    ] satisfies WhyItem[],
  },

  industries: {
    eyebrow: "Verticals we work in",
    title: "Offering vertical-specific solutions",
    body: "We deliver turnkey and customized solutions across power and utilities, oil and gas, government authorities and transportation — aligning technology with your core operational demands to keep critical assets connected and secure.",
    cta: "All industries",
  },

  process: {
    eyebrow: "How we work",
    title: "From first call to a system you can hand over",
    body: "Six stages, each with a named owner. Nothing moves on until the documentation for the current stage is signed off.",
    steps: [
      {
        id: "enquiry",
        title: "Enquiry",
        body: "You send a scope, a drawing, or simply describe the problem. A technical contact is assigned the same working day.",
      },
      {
        id: "survey",
        title: "Survey and design",
        body: "We measure what is actually there — noise levels, existing cabling, DC loads, RF conditions — and design against the standard your specification names.",
      },
      {
        id: "proposal",
        title: "Proposal",
        body: "A priced scope with drawings, the calculations behind it, the standards it is built to, and an honest list of what sits outside the price.",
      },
      {
        id: "mobilise",
        title: "Mobilisation",
        body: "Method statements, risk assessments, permits to work and site inductions in place before anyone picks up a tool.",
      },
      {
        id: "install",
        title: "Installation and commissioning",
        body: "Installed by qualified technicians, commissioned to a written procedure, and tested in front of you with the results recorded.",
      },
      {
        id: "support",
        title: "Handover and support",
        body: "As-built drawings, test records, operator training, and a maintenance and spares agreement that starts the day the warranty does.",
      },
    ],
  },

  assurance: {
    eyebrow: "Assurance",
    title: "What a competent handover actually contains",
    body: "A system is not finished when it powers up. These are the documents that let an operator run it, a maintainer fix it, and an auditor accept it — and they are part of the scope, not an extra.",
    items: [
      {
        id: "records",
        title: "Test and commissioning records",
        body: "Every circuit, zone and feeder tested against a written procedure, countersigned on site, with the measured values rather than a tick.",
      },
      {
        id: "asbuilt",
        title: "As-built documentation",
        body: "Drawings that match what was installed, cable schedules, point lists and configuration backups — updated through variations, not frozen at design.",
      },
      {
        id: "hazardous",
        title: "Hazardous-area compliance",
        body: "Where the work enters a classified area, installation and inspection to IEC 60079-14 by competent personnel, with the certification recorded per device.",
      },
      {
        id: "training",
        title: "Operator and maintainer training",
        body: "Delivered on the installed system, not a slide deck: routine checks, alarm interpretation, first-line fault finding and when to call us.",
      },
    ],
  },

  faq: {
    eyebrow: "Questions we get asked",
    title: "Before you send an enquiry",
    items: [
      {
        q: "Are you a contractor or a consultant?",
        a: "Both, depending on what the project needs. We will take a scope from design through installation and commissioning, or we will do the survey and design and hand it to whichever contractor is already on site. Where we design something we will also tell you what it would cost to build, so the two are never confused.",
      },
      {
        q: "Do you supply the equipment as well?",
        a: "We specify and procure what the design needs, and we are not tied to a single manufacturer. Where you have a framework agreement or a preferred vendor, we will work inside it. What we will not do is write a specification around a product and then present it as an open assessment.",
      },
      {
        q: "What does a proposal actually contain?",
        a: "A scope of work, the calculations behind it, the standards each part is built to, the drawings we would issue, a programme, and a clear list of exclusions. The exclusions are the useful part — a proposal with none has usually not been read properly.",
      },
      {
        q: "Can you work to our own engineering standards?",
        a: "Yes, and we prefer to. Major operators work to their own engineering standards and material specifications on top of the international codes. Send them with the enquiry and we will return a compliance statement marking each clause complied, complied with comment, or not complied.",
      },
      {
        q: "Do you work in hazardous areas?",
        a: "Yes. Installation and inspection to IEC 60079-14 by competent personnel, with protection concept, gas group, temperature class and certificate number recorded per device. Tell us the area classification with the enquiry and the proposal will reflect it rather than caveat it.",
      },
      {
        q: "What happens after handover?",
        a: "Whatever you want to happen. Some clients take the test records and run it themselves; most take a maintenance agreement with a defined response time and a spares holding sized on how far the site is from anyone who can help. Both are priced before handover, not after something fails.",
      },
    ],
  },
};

export type HomeCopy = typeof home;
