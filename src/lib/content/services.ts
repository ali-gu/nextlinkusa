export const services = {
  meta: {
    title: "Services — sales, installation, maintenance, spares and after-sales",
    description:
      "Pre-sales engineering, supply and export logistics, installation and commissioning supervision, maintenance contracts, spares holdings and after-sales support for power and notification equipment in Saudi Arabia.",
  },
  eyebrow: "Services",
  title: "Everything between the enquiry and the end of the warranty",
  lede: "Equipment is the easy part. What determines whether a project goes well is the sizing done before the order, the documentation that clears customs, the commissioning record, and whether anyone answers the phone two years later.",

  items: {
    sales: {
      name: "Sales & technical specification",
      tagline: "Engineering before the order, not after it",
      body: "Every enquiry is handled by someone who can read a single-line diagram. We size the system, challenge the parts of the specification that will cause trouble, and issue a compliance statement that marks the exceptions honestly.",
      includes: [
        "Review of project specification and single-line diagrams",
        "IEEE 485 / IEEE 1115 battery sizing against your duty cycle",
        "Speaker coverage, sound pressure and intelligibility modelling",
        "Clause-by-clause compliance statement, including exceptions",
        "Budgetary and firm quotations with the Incoterm you need",
        "Value-engineering alternatives where the specification over-reaches",
      ],
    },
    installation: {
      name: "Supply, installation & commissioning",
      tagline: "From the factory floor to a signed acceptance test",
      body: "We arrange export packing, conformity certification and freight, then supervise installation and commissioning on site. The deliverable is a system that has been tested against a written procedure, not one that has been switched on.",
      includes: [
        "Export packing specified for sea or air freight and the destination climate",
        "SABER Product and Shipment Certificates of Conformity",
        "Commercial invoice, packing list, certificate of origin and legalisation where required",
        "Freight on any Incoterm from EXW to DDP",
        "Installation supervision and commissioning by manufacturer-trained engineers",
        "Site acceptance testing to a written procedure, with signed records",
        "Battery commissioning charge and capacity verification",
        "Measured speech intelligibility results for notification systems",
      ],
    },
    maintenance: {
      name: "Maintenance contracts",
      tagline: "A schedule, a record, and a predictable cost",
      body: "Preventive maintenance built on the standards that govern the equipment, with findings recorded so degradation is visible before it becomes a failure. Annual, semi-annual and quarterly schedules are available.",
      includes: [
        "Preventive schedules aligned to IEEE 450, IEEE 1188 and IEEE 1106 by battery chemistry",
        "Impedance or conductance testing with trending against commissioning values",
        "Charger output verification, alarm testing and earth-fault circuit check",
        "Notification system functional test, zone-by-zone, with intelligibility spot checks",
        "Battery capacity testing at the interval your insurer or regulator requires",
        "Written condition report with a prioritised action list",
        "Fixed-price annual contracts with an agreed response time",
      ],
    },
    spares: {
      name: "Spares & consumables",
      tagline: "The right parts, held in the right place",
      body: "Recommended spares are priced at order stage, when the discount is best and the lead time is shortest — not two years later when a module has gone obsolete and the plant is waiting.",
      includes: [
        "Recommended two-year spares holding, priced with the original order",
        "Critical-spares list built around travel time and turnaround windows",
        "Rectifier modules, control cards, fuses and contactors",
        "Battery replacement, including disposal of the removed set",
        "Loudspeakers, drivers, beacons and hazardous-area replacement parts",
        "Obsolescence notices passed on as soon as the manufacturer issues them",
        "Consignment stock arrangements for larger installed bases",
      ],
    },
    "after-sales": {
      name: "After-sales & technical support",
      tagline: "A named contact who already knows your site",
      body: "Support does not start with an explanation of what you bought. Project records stay with the account, so the engineer answering has the sizing calculation, the submittal and the commissioning results in front of them.",
      includes: [
        "Named technical contact reachable in your working hours",
        "Warranty administration handled with the manufacturer on your behalf",
        "Return material authorisation and replacement logistics",
        "Fault diagnosis by phone, email or WhatsApp, in English or Arabic",
        "Firmware and configuration updates with a documented change record",
        "Operator and maintenance technician training, on site or remote",
        "As-built documentation kept current through modifications and extensions",
      ],
    },
  },

  engagement: {
    eyebrow: "Working together",
    title: "Three ways customers engage us",
    items: [
      {
        title: "Equipment supply",
        body: "You have a specification and a contractor. We supply the equipment, the documentation and the conformity certification, and stay available through commissioning.",
      },
      {
        title: "Supply and commissioning",
        body: "We supply, then supervise installation and run the acceptance test. Most common on first-of-type installations and on hazardous-area notification systems.",
      },
      {
        title: "Lifecycle agreement",
        body: "Supply, commissioning, a maintenance schedule and a spares holding under one agreement, with a fixed annual cost and an agreed response time.",
      },
    ],
  },

  commitments: {
    eyebrow: "What we commit to",
    title: "The things you can hold us to",
    rows: [
      { label: "Acknowledgement of a new enquiry", value: "Same working day" },
      { label: "Budgetary quotation", value: "1–2 working days" },
      { label: "Full technical offer with sizing and compliance statement", value: "2–5 working days" },
      { label: "Submittal pack after order", value: "To the project programme, agreed at order" },
      { label: "Technical support response", value: "Within 4 working hours" },
      { label: "Languages", value: "English and Arabic, written and spoken" },
    ],
    note: "Lead times for manufactured equipment are confirmed per order and depend on the range, the configuration and the certification route.",
  },
};

export type ServicesCopy = typeof services;
