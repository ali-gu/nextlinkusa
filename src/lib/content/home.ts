import type { IconName } from "@/components/ui/icon";

type WhyItem = { id: string; icon: IconName; title: string; body: string };

export const home = {
  meta: {
    title: "American-made power & safety communication equipment for Saudi Arabia",
    description:
      "Utility-grade DC chargers, paging and mass notification systems from US manufacturers, supplied to Saudi Arabia in 230/400 V 60 Hz variants with SABER-ready documentation and bilingual support.",
  },

  hero: {
    eyebrow: "US manufacturer supply · Kingdom of Saudi Arabia",
    title: "American-made power and safety communication equipment, delivered to Saudi Arabia.",
    subtitle:
      "Utility-grade DC chargers, paging, and notification systems, backed by US manufacturers and local support.",
    primary: "Request a Quote",
    secondary: "Download Product Catalog",
    imageAlt:
      "Riyadh skyline, a telecommunications tower and fibre-optic strands, representing critical infrastructure served by NextLink USA",
    highlights: [
      { value: "230/400 V", label: "60 Hz variants built for Saudi distribution" },
      { value: "2 days", label: "Typical turnaround on a technical quote" },
      { value: "EN / AR", label: "Submittals and support in both languages" },
    ],
  },

  pillars: {
    eyebrow: "Where we work",
    title: "Three ways customers use us",
    body: "Most projects start in one of these three places, then grow into the others as the asset moves from construction into operation.",
    items: [
      {
        id: "utilities",
        title: "Utilities and substations",
        body: "Station battery chargers, DC distribution and monitoring for protection, control and SCADA — sized to IEEE 485 and supplied with the calculations your consultant needs for approval.",
        bullets: [
          "24, 48, 110, 125 and 220 VDC systems",
          "Switchmode N+1 and SCR topologies",
          "Earth-fault detection and battery monitoring",
        ],
        href: "/industries/utilities-and-substations",
        cta: "Substation DC systems",
      },
      {
        id: "public-safety",
        title: "Buildings and public safety",
        body: "Paging, talk-back and mass notification that stays intelligible in plant noise and in an evacuation — from an IP zone controller down to the Ex-rated horn on the pipe rack.",
        bullets: [
          "IP/SIP and 70 V / 100 V line systems",
          "Class I Div 1/2 and ATEX/IECEx field devices",
          "NFPA 72 ECS and voice-evacuation architectures",
        ],
        href: "/products/paging-mass-notification",
        cta: "Paging and notification",
      },
      {
        id: "support",
        title: "Spares and support",
        body: "The part of the deal most suppliers forget. Recommended spares holdings, battery replacement programmes and a named technical contact who answers in your time zone.",
        bullets: [
          "Recommended spares lists priced at order stage",
          "Preventive maintenance to IEEE 450 / 1188",
          "Warranty administration and RMA handling",
        ],
        href: "/services",
        cta: "Services and support",
      },
    ],
  },

  products: {
    eyebrow: "Product range",
    title: "Equipment that has to work when everything else has stopped",
    body: "We represent US manufacturers whose equipment sits behind the protection relay, the evacuation speaker and the control room — the things that matter most on the worst day.",
    cta: "View all products",
  },

  why: {
    eyebrow: "Why NextLink USA",
    title: "A short supply chain, and engineers on both ends of it",
    items: ([
      {
        id: "direct",
        icon: "truck",
        title: "Direct from US manufacturers",
        body: "No re-export middlemen stacking margin on a factory price. You buy at the manufacturer's commercial terms, the warranty stays with the OEM, and the serial numbers trace back to the plant that built them.",
      },
      {
        id: "saudi-spec",
        icon: "plug",
        title: "Built for Saudi networks",
        body: "230/400 V, 60 Hz input variants as standard, 50 °C ambient ratings, and enclosure options rated for coastal and desert installations. We confirm the derating in writing before you order, not after.",
      },
      {
        id: "fast-quotes",
        icon: "gauge",
        title: "Fast technical quotes",
        body: "Send a single-line diagram, a battery data sheet or a spec clause. You get back a sized offer with the IEEE 485 calculation, a clause-by-clause compliance statement and a delivered price — usually inside two business days.",
      },
      {
        id: "bilingual",
        icon: "language",
        title: "English and Arabic support",
        body: "Submittals, O&M manuals and correspondence in either language. Your consultant reviews in English, your operator reads the panel label in Arabic, and nobody is waiting on a translation.",
      },
    ] satisfies WhyItem[]),
  },

  industries: {
    eyebrow: "Industries",
    title: "Specified by consultants, operated by maintenance teams",
    body: "The same equipment is read very differently by the engineer writing the specification and the technician replacing a fuse at 2 a.m. We write for both.",
    cta: "All industries",
  },

  process: {
    eyebrow: "How we work",
    title: "From enquiry to commissioned asset",
    body: "Six steps, with a named owner at each one. Nothing moves to the next step until the documentation for the current one is signed off.",
    steps: [
      {
        id: "enquiry",
        title: "Enquiry",
        body: "You send a specification, a single-line, or simply the load you need to hold up. A technical contact is assigned the same day.",
      },
      {
        id: "sizing",
        title: "Technical sizing",
        body: "We size the charger and battery to IEEE 485, confirm ambient derating, and flag anything in the specification the standard range cannot meet.",
      },
      {
        id: "quotation",
        title: "Quotation and submittals",
        body: "A priced offer with GA drawings, schematics, a clause-by-clause compliance statement and the Incoterm you asked for.",
      },
      {
        id: "order",
        title: "Order and conformity",
        body: "Purchase order placed with the OEM, SABER product and shipment certificates arranged, export documentation and certificate of origin prepared.",
      },
      {
        id: "delivery",
        title: "Delivery",
        body: "Export packing suited to sea or air freight, consolidated where it saves money, delivered on the Incoterm agreed — EXW through DDP.",
      },
      {
        id: "commissioning",
        title: "Commissioning and after-sales",
        body: "Commissioning supervision, site acceptance testing, operator training, and a spares holding agreed before the warranty starts.",
      },
    ],
  },

  compliance: {
    eyebrow: "Conformity",
    title: "Documentation that clears customs and passes review",
    body: "Equipment that cannot be registered on SABER does not reach site, and equipment without a compliance statement does not pass consultant review. Both are handled before the order is placed, not after the container lands.",
    items: [
      {
        id: "saber",
        title: "SABER registration",
        body: "Product Certificate of Conformity and Shipment Certificate of Conformity arranged through an accredited conformity body for every regulated line item.",
      },
      {
        id: "standards",
        title: "IEC, IEEE and NFPA alignment",
        body: "Equipment supplied against IEC 61439, IEC 62040, IEEE 485, IEEE 946, NFPA 72 and UL listings, with the certificates attached to the submittal.",
      },
      {
        id: "hazardous",
        title: "Hazardous area certification",
        body: "ATEX, IECEx and NEC Class I Division 1/2 certified field devices for plant, terminal and offshore installations, with certificate numbers quoted on the datasheet.",
      },
      {
        id: "export",
        title: "Export and customs documentation",
        body: "Commercial invoice, packing list, certificate of origin and, where required, legalisation — prepared to match the letter of credit or the purchase order exactly.",
      },
    ],
    cta: "Compliance notes and spec text",
  },

  faq: {
    eyebrow: "Questions we get asked",
    title: "Before you send an enquiry",
    items: [
      {
        q: "Is your equipment certified for the Saudi market?",
        a: "Regulated products are registered on SABER before shipment. We arrange the Product Certificate of Conformity against the applicable SASO technical regulation and the Shipment Certificate of Conformity for each consignment, through an accredited conformity assessment body. Certificates are issued in the importer's name, so your customs broker has what they need at the port.",
      },
      {
        q: "Are your products available in 230/400 V at 60 Hz?",
        a: "Yes. Saudi Arabia runs at 60 Hz and is standardising on 230/400 V distribution, so we quote that input as the default rather than as a special. DC output voltages of 24, 48, 110, 125 and 220 V are all standard, and 50 Hz variants remain available where a site still needs them.",
      },
      {
        q: "What do you need in order to quote a DC system?",
        a: "At minimum: nominal DC bus voltage, the continuous and momentary loads, the autonomy you need, and the battery chemistry if it is already fixed. A single-line diagram and the project specification let us go further and return a full IEEE 485 sizing calculation with the offer. If you only have a spec clause, send that — we will tell you what is missing.",
      },
      {
        q: "Do you handle shipping and customs into Saudi Arabia?",
        a: "We quote on any Incoterm from EXW through DDP. Most customers take CIF Dammam or Jeddah and clear with their own broker; others prefer DDP to site. Export packing, certificate of origin, commercial invoice and the SABER shipment certificate are prepared to match the purchase order and, where applicable, the letter of credit.",
      },
      {
        q: "Can you provide specification text for consultants?",
        a: "Yes. We publish editable specification text in CSI MasterFormat structure for DC power equipment and for public address and mass notification systems, written to be manufacturer-neutral so it survives a tender review. It is free to use and does not oblige you to buy from us.",
      },
      {
        q: "Do you support Arabic-language documentation?",
        a: "Submittals, operation and maintenance manuals and correspondence are available in Arabic and English. Panel labelling, mimic diagrams and operator training can be delivered in Arabic where the project requires it.",
      },
    ],
  },
};

export type HomeCopy = typeof home;
