export const resources = {
  meta: {
    title: "Resources — datasheets, SABER & IEC compliance notes, spec text",
    description:
      "Datasheets on request, a practical guide to SABER and SASO conformity, the IEC, IEEE, NFPA and UL standards that apply, hazardous-area certification notes, and editable CSI-format specification text for consultants.",
  },
  eyebrow: "Resources",
  title: "The documents that make a project move",
  lede: "Specifications get written before anyone contacts a supplier, and customs clearance happens long after the order. These are the reference notes we found ourselves sending often enough to publish.",

  nav: [
    { id: "datasheets", label: "Datasheets" },
    { id: "saber", label: "SABER & SASO" },
    { id: "standards", label: "Standards reference" },
    { id: "hazardous", label: "Hazardous areas" },
    { id: "export", label: "Export documentation" },
    { id: "spec-text", label: "Spec text for consultants" },
    { id: "prequalification", label: "Prequalification pack" },
  ],

  datasheets: {
    title: "Datasheets",
    body: [
      "Datasheets are issued with every quotation, at the revision current on the day the offer is priced. We do not keep a public download library, because a manufacturer's datasheet library goes out of date faster than a website does — and a superseded datasheet attached to a tender submission causes real problems at review.",
      "Tell us the application and we will send the current revision the same working day, along with the certificates that go with it.",
    ],
    categories: [
      {
        title: "DC power systems",
        items: [
          "Switchmode battery chargers, 24–220 VDC",
          "SCR and ferroresonant chargers",
          "DC distribution and earth-fault detection",
          "Battery monitoring and temperature compensation",
          "Telecom −48 VDC rectifier shelves",
        ],
      },
      {
        title: "Paging & mass notification",
        items: [
          "IP and SIP zone controllers and amplifiers",
          "Re-entrant horn loudspeakers and projectors",
          "Ex d / Ex e / Ex ia certified field devices",
          "Beacons, strobes and combination units",
          "Call stations, handsets and guard stations",
        ],
      },
      {
        title: "UPS & power quality",
        items: [
          "Online double-conversion UPS, 1–500 kVA",
          "Industrial DC-link UPS",
          "Active harmonic filters",
          "Static transfer switches and voltage regulators",
        ],
      },
    ],
    cta: "Request datasheets",
  },

  saber: {
    title: "SABER and SASO conformity, in practice",
    lede: "Most delays at a Saudi port are paperwork, not freight. This is how the conformity route works and where it usually goes wrong.",
    body: [
      "SABER is the electronic conformity platform operated by the Saudi Standards, Metrology and Quality Organization (SASO). Regulated products need two things before a consignment can clear customs: a Product Certificate of Conformity covering the model, and a Shipment Certificate of Conformity covering that specific consignment.",
      "The importer of record holds the SABER account. The supplier's job is to provide a technical file good enough for an accredited conformity assessment body to issue against — which is where most of the friction lives.",
    ],
    steps: [
      {
        title: "1. Importer raises the product request",
        body: "The importer registers the product on SABER against its HS code and the applicable SASO technical regulation, and selects a conformity assessment body.",
      },
      {
        title: "2. Supplier provides the technical file",
        body: "Datasheets, test reports from an accredited laboratory, existing certificates such as an IECEE CB report, a declaration of conformity, labelling artwork and product photographs.",
      },
      {
        title: "3. Conformity body reviews and issues the PCoC",
        body: "The Product Certificate of Conformity is issued against the model and is typically valid for one year. First issue usually takes one to three weeks once the file is complete.",
      },
      {
        title: "4. Shipment certificate per consignment",
        body: "For each shipment, the Shipment Certificate of Conformity is issued against the commercial invoice and packing list, naming the same models covered by the PCoC.",
      },
      {
        title: "5. Customs clearance",
        body: "The SCoC is presented with the commercial invoice, packing list, bill of lading or air waybill and certificate of origin.",
      },
    ],
    pitfallsTitle: "Where it goes wrong",
    pitfalls: [
      "Model designation on the commercial invoice does not exactly match the model on the certificate — including suffixes and configuration codes.",
      "HS code chosen at registration does not match the one the broker declares at clearance.",
      "Test reports come from a laboratory without the accreditation scope the conformity body requires.",
      "The PCoC expires between order and shipment on a long-lead item, and nobody renews it.",
      "A consignment is consolidated with items from a different supplier that are not on the same certificate.",
    ],
    note: "We prepare the technical file and track certificate validity against the order's delivery date. Where the importer prefers to run SABER themselves, we supply the complete file and stay available to the conformity body for queries.",
  },

  standards: {
    title: "Standards reference",
    lede: "The codes that come up most often on enquiries, grouped by what they govern. Quoted so a specification can reference them precisely rather than by family.",
    groups: [
      {
        title: "DC power and batteries",
        items: [
          { code: "IEEE 485", title: "Sizing lead-acid batteries for stationary applications" },
          { code: "IEEE 1115", title: "Sizing nickel-cadmium batteries for stationary applications" },
          { code: "IEEE 946", title: "Design of DC auxiliary power systems for generating stations and substations" },
          { code: "IEEE 1375", title: "Protection of stationary battery systems" },
          { code: "IEEE 450", title: "Maintenance, testing and replacement of vented lead-acid batteries" },
          { code: "IEEE 1188", title: "Maintenance, testing and replacement of VRLA batteries" },
          { code: "IEEE 1106", title: "Maintenance, testing and replacement of nickel-cadmium batteries" },
          { code: "IEEE 693", title: "Seismic qualification of substation equipment" },
          { code: "IEC 61439-1/-2", title: "Low-voltage switchgear and controlgear assemblies" },
          { code: "IEC 60146", title: "Semiconductor converters" },
          { code: "UL 1012", title: "Power units other than Class 2" },
          { code: "NEMA PE 5", title: "Utility type battery chargers" },
          { code: "NFPA 70 Art. 480", title: "Storage batteries — National Electrical Code" },
        ],
      },
      {
        title: "Notification and life safety",
        items: [
          { code: "NFPA 72", title: "National Fire Alarm and Signaling Code, Chapter 24 — emergency communications" },
          { code: "UL 2572", title: "Mass notification systems" },
          { code: "UL 1480", title: "Speakers for fire protective signalling systems" },
          { code: "UL 1711", title: "Amplifiers for fire protective signalling systems" },
          { code: "IEC 60268-16", title: "Objective rating of speech intelligibility by speech transmission index" },
          { code: "IEC 60849 / ISO 7240-19", title: "Sound systems for emergency purposes" },
          { code: "EN 54-16", title: "Voice alarm control and indicating equipment" },
          { code: "EN 54-24", title: "Loudspeakers for voice alarm systems" },
        ],
      },
      {
        title: "Hazardous areas",
        items: [
          { code: "IEC 60079-0", title: "Explosive atmospheres — equipment, general requirements" },
          { code: "IEC 60079-1", title: "Equipment protection by flameproof enclosure (Ex d)" },
          { code: "IEC 60079-7", title: "Equipment protection by increased safety (Ex e)" },
          { code: "IEC 60079-11", title: "Equipment protection by intrinsic safety (Ex i)" },
          { code: "IEC 60079-14", title: "Electrical installation design, selection and erection" },
          { code: "NFPA 70 Art. 500–506", title: "Hazardous (classified) locations — Class/Division and Zone systems" },
        ],
      },
      {
        title: "UPS and power quality",
        items: [
          { code: "IEC 62040-1", title: "UPS — general and safety requirements" },
          { code: "IEC 62040-2", title: "UPS — electromagnetic compatibility requirements" },
          { code: "IEC 62040-3", title: "UPS — performance and test requirements, VFI classification" },
          { code: "IEEE 519", title: "Harmonic control in electric power systems" },
          { code: "UL 1778", title: "Uninterruptible power systems" },
        ],
      },
      {
        title: "Enclosures, environment and conformity",
        items: [
          { code: "IEC 60529", title: "Degrees of protection provided by enclosures (IP code)" },
          { code: "NEMA 250", title: "Enclosures for electrical equipment (1000 V maximum)" },
          { code: "IEC 60068", title: "Environmental testing" },
          { code: "SASO technical regulations", title: "Saudi regulations applicable by product category" },
          { code: "SABER", title: "Saudi electronic conformity platform — PCoC and SCoC" },
          { code: "IECEE CB Scheme", title: "Mutual recognition of test reports between national certification bodies" },
        ],
      },
    ],
  },

  hazardous: {
    title: "Hazardous area certification",
    lede: "Specifications in the Kingdom arrive written to either the IEC Zone system or the North American Class and Division system, and occasionally to both in the same document. The two are comparable but not interchangeable.",
    zonesTitle: "Zone and Division, side by side",
    zonesNote:
      "Equivalence is approximate. A Division 1 listing does not automatically satisfy a Zone 1 requirement, and vice versa — the certificate has to name the classification the specification asks for.",
    zones: [
      { zone: "Zone 0", division: "Class I, Division 1", presence: "Explosive atmosphere present continuously or for long periods" },
      { zone: "Zone 1", division: "Class I, Division 1", presence: "Likely to occur in normal operation" },
      { zone: "Zone 2", division: "Class I, Division 2", presence: "Not likely in normal operation, and only for a short period if it does" },
    ],
    groupsTitle: "Gas groups",
    groups: [
      { iec: "IIA", na: "Group D", example: "Propane, petrol vapour, most hydrocarbons" },
      { iec: "IIB", na: "Group C", example: "Ethylene" },
      { iec: "IIB + H₂", na: "Groups C and B", example: "Ethylene and hydrogen" },
      { iec: "IIC", na: "Groups B and A", example: "Hydrogen, acetylene" },
    ],
    conceptsTitle: "Protection concepts you will see on a certificate",
    concepts: [
      { code: "Ex d", title: "Flameproof enclosure — contains an internal explosion and prevents transmission. The usual answer for loudspeaker drivers and beacons." },
      { code: "Ex e", title: "Increased safety — construction prevents arcs and excessive temperature. Common for terminal boxes and junction enclosures." },
      { code: "Ex ia / ib", title: "Intrinsic safety — energy limited below ignition. Used for call stations and signalling circuits." },
      { code: "Ex ec / Ex nA", title: "Non-sparking, for Zone 2 only." },
      { code: "Ex tb", title: "Protection by enclosure, for combustible dust atmospheres." },
    ],
    checklistTitle: "What a complete submittal states per device",
    checklist: [
      "Certificate number and the issuing certification body",
      "Protection concept and equipment protection level",
      "Gas group and, where relevant, dust group",
      "Temperature class and maximum surface temperature",
      "Ambient temperature range the certificate covers",
      "Ingress protection rating and enclosure material",
    ],
  },

  exportDocs: {
    title: "Export documentation",
    lede: "What travels with the goods, and who issues it.",
    items: [
      { title: "Commercial invoice", body: "Issued by NextLink USA, naming the models exactly as they appear on the conformity certificate, with HS codes and the agreed Incoterm." },
      { title: "Packing list", body: "Per package: dimensions, gross and net weight, and contents referenced to the invoice line." },
      { title: "Certificate of origin", body: "Issued against the actual manufacturing location and, where required, attested by the chamber of commerce and legalised." },
      { title: "SABER Shipment Certificate of Conformity", body: "Issued per consignment by the accredited conformity body against the invoice and packing list." },
      { title: "Bill of lading or air waybill", body: "Issued by the carrier or forwarder, consigned as the letter of credit or purchase order requires." },
      { title: "Manufacturer's test certificates", body: "Routine test reports and type-test certificates for the supplied serial numbers." },
      { title: "Export control classification", body: "Stated where the equipment falls under US Export Administration Regulations; most of this catalogue does not require a licence for this destination, and we confirm it per order." },
    ],
    incotermsTitle: "Incoterms we quote",
    incoterms: [
      { code: "EXW", body: "Collected from the manufacturer's facility. Lowest price, all risk and arrangement yours." },
      { code: "FCA / FOB", body: "Delivered to the forwarder or loaded at the US port. Common where you have a freight agreement." },
      { code: "CIF / CIP", body: "Cost, insurance and freight to Dammam, Jeddah or King Khalid International. The usual choice." },
      { code: "DAP / DDP", body: "Delivered to site, with DDP including Saudi duties and clearance. Simplest for the buyer, highest price." },
    ],
  },

  specText: {
    title: "Specification text for consultants",
    lede: "Editable section text in CSI MasterFormat structure, written to be manufacturer-neutral so it survives a competitive tender. Square brackets mark the values a project has to fill in.",
    note: "Specification text is published in English, the language in which tender documents are normally issued in the region. An Arabic translation is available on request. Using this text places you under no obligation to buy from us — if it helps you write a better tender, it has done its job.",
    copyLabel: "Copy section text",
    copiedLabel: "Copied to clipboard",
    scopeLabel: "Covers",
  },

  prequalification: {
    title: "Prequalification pack",
    body: "A single PDF containing entity registration and tax identification, manufacturer authorisation letters, product conformity certificates, the quality certifications held by the manufacturers we represent, banking and insurance details, and a past-performance summary.",
    items: [
      "Certificate of incorporation and tax identification",
      "Manufacturer authorisation and distribution letters",
      "Product conformity certificates and SABER registrations",
      "Manufacturers' ISO 9001 and product listing certificates",
      "Banking details and reference letter",
      "Insurance certificates",
      "Past performance summary",
    ],
    cta: "Request the prequalification pack",
    note: "Issued within one working day of a request from a named company contact.",
  },
};

export type ResourcesCopy = typeof resources;
