export const about = {
  meta: {
    title: "About NextLink USA — a US supplier of power and safety equipment",
    description:
      "NextLink USA is a United States company supplying American-made DC power systems, battery chargers, paging and mass notification equipment to Saudi Arabia, with OEM partnerships and bilingual technical support.",
  },
  eyebrow: "About us",
  title: "A United States company, built around one trade lane",
  lede: "We supply American-made power and safety communication equipment into Saudi Arabia. That narrow focus is deliberate — it is what lets us know both the manufacturer's engineering department and the conformity route into the Kingdom well enough to be useful on both ends.",

  story: {
    title: "Why this company exists",
    paragraphs: [
      "There is no shortage of excellent industrial equipment built in the United States, and no shortage of demand for it in Saudi Arabia. What sits between the two is a documentation problem: a manufacturer who has never heard of SABER, a consultant working to a specification written around IEC references, and an importer who needs a certificate in the right name before a container will move.",
      "NextLink USA exists to close that gap. We represent US manufacturers directly, quote in the standards the specification is written in, arrange the conformity registration before shipment, and stay on the account after commissioning — because the second order usually depends on how the first one was supported.",
      "The alternative, in practice, is a chain of re-exporters: each adding margin, none holding the manufacturer's warranty, and all of them unreachable when a rectifier module fails in year three. A short supply chain is not a marketing position. It is the reason the spares arrive.",
    ],
  },

  focus: {
    title: "What we do, and what we do not",
    doTitle: "What we do",
    does: [
      "Represent US manufacturers of DC power and safety communication equipment",
      "Size systems and issue compliance statements against your specification",
      "Arrange SABER conformity registration and full export documentation",
      "Supply on any Incoterm from EXW to DDP",
      "Supervise installation, commissioning and site acceptance testing",
      "Hold maintenance contracts and recommended spares agreements",
      "Work in English and Arabic, in writing and in person",
    ],
    dontTitle: "What we do not do",
    donts: [
      "Sell equipment we have not been authorised by the manufacturer to sell",
      "Mark a specification fully compliant when it is not",
      "Quote a lead time before the manufacturer has confirmed it",
      "Substitute a component after an approved submittal without raising it",
      "Act as a pass-through for a supplier we cannot reach ourselves",
    ],
  },

  partners: {
    title: "OEM partners",
    body: "We are appointed by United States manufacturers to represent their equipment in the Kingdom. Partner marks are published here as each distribution agreement is signed, and the current manufacturer list — with the authorisation letters — is included in the prequalification pack.",
    pendingNote:
      "Agreements in progress are not listed, because naming a manufacturer before the appointment is signed is exactly the kind of claim that makes a prequalification file worthless.",
    cta: "Request the prequalification pack",
  },

  certifications: {
    title: "Registrations and certifications",
    body: "Two kinds of certification matter on a project: ours as a supplier, and the manufacturer's on the product. Both are issued with the submittal.",
    groups: [
      {
        title: "NextLink USA",
        items: [
          "United States limited liability company, registered and in good standing",
          "Employer Identification Number and D-U-N-S registration",
          "Export documentation prepared in accordance with US Export Administration Regulations",
          "Prequalification pack maintained current for tender submission",
        ],
      },
      {
        title: "Manufacturer and product",
        items: [
          "ISO 9001 quality management certification held by the manufacturers we represent",
          "UL listings and type-test certificates issued against the supplied models",
          "ATEX and IECEx certificates for hazardous-area field devices",
          "SASO technical regulation conformity, registered on SABER before shipment",
        ],
      },
    ],
    note: "Certificates are supplied against the actual models and serial numbers on your order, not as a generic company brochure.",
  },

  coverage: {
    title: "Where we work",
    body: "Our focus is the Kingdom of Saudi Arabia — utilities and substations, oil and gas, data centers, healthcare, education and government. We also quote into the wider GCC where the conformity route is comparable.",
    points: [
      { title: "United States", body: "Manufacturer relationships, order placement, export documentation and freight." },
      { title: "Saudi Arabia", body: "Technical support, conformity registration, commissioning supervision and after-sales." },
      { title: "Languages", body: "All correspondence, submittals and manuals in English or Arabic." },
    ],
  },
};

export type AboutCopy = typeof about;
