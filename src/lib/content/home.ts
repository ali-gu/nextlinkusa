import type { IconName } from "@/components/ui/icon";

type WhyItem = { id: string; icon: IconName; title: string; body: string };

export const home = {
  meta: {
    title: "American engineering for telecom and critical infrastructure",
    description:
      "NextLink USA designs, installs, commissions and supports telecom and critical infrastructure across the Gulf: networks, mission-critical communications, DC power, fiber optics and off-shore submarine fiber.",
  },

  hero: {
    eyebrow: "United States engineering · Gulf delivery",
    title: "American engineering for telecom and critical infrastructure.",
    subtitle:
      "Networks, mission-critical communications, DC power and submarine fiber — designed, installed, commissioned and supported by one accountable contractor.",
    primary: "Request a Quote",
    imageAlt:
      "City skyline, a telecommunications tower and fibre-optic strands, representing the critical infrastructure NextLink USA builds and supports",
    highlights: [
      { value: "7", label: "Service lines under one contract" },
      { value: "2 days", label: "Typical turnaround on a scoped proposal" },
      { value: "24/7", label: "Support options after handover" },
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
    eyebrow: "Service lines",
    title: "Seven capabilities, one contractor",
    body: "Most of our work spans two or three of these at once — a control room needs radio, networks and DC power before it needs anything else. Holding them under one contract is what keeps the interfaces from becoming someone else's problem.",
    cta: "All services",
  },

  why: {
    eyebrow: "Why NextLink USA",
    title: "American engineering practice, applied on site",
    items: [
      {
        id: "standards",
        icon: "shieldCheck",
        title: "We work to a named standard",
        body: "IEEE 485 for battery sizing, IEC 60268-16 for intelligibility, TIA-568 for cabling, NFPA 72 for emergency communications. Every proposal states which standard governs which part of the work, so there is something to hold us to at handover.",
      },
      {
        id: "measure",
        icon: "gauge",
        title: "We measure before we quote",
        body: "Coverage modelled against real ambient noise. Harmonics sized from a logged spectrum rather than a nameplate. OTDR traces before and after. A proposal built on a guess costs more than the survey would have.",
      },
      {
        id: "single",
        icon: "network",
        title: "One accountable contractor",
        body: "Radio, network, telephony and DC power usually arrive as four subcontractors and four sets of excuses. Under one contract the interfaces are ours to solve, and there is one number to call when something does not work.",
      },
      {
        id: "after",
        icon: "support",
        title: "We stay after handover",
        body: "Project records live with the account, so the engineer who answers already has the design, the commissioning results and the as-builts in front of them. Maintenance and spares are agreed before the warranty starts, not after it lapses.",
      },
    ] satisfies WhyItem[],
  },

  industries: {
    eyebrow: "Industries",
    title: "Specified by consultants, operated by maintenance teams",
    body: "The same system is read very differently by the engineer writing the specification and the technician diagnosing it at 2 a.m. We design for both.",
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
        a: "Yes, and we prefer to. Major operators in the region work to their own engineering standards and material specifications on top of the international codes. Send them with the enquiry and we will return a compliance statement marking each clause complied, complied with comment, or not complied.",
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
