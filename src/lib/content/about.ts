export const about = {
  meta: {
    title: "About NextLink USA — a US telecom and infrastructure engineering company",
    description:
      "NextLink USA is a United States engineering company delivering telecom and critical infrastructure across the Gulf: survey, design, installation, commissioning and long-term support.",
  },
  eyebrow: "About us",
  title: "A United States engineering company, working where the networks are",
  lede: "We design, build, commission and support telecom and critical infrastructure. American engineering practice, applied on site, by people who are still reachable a year after handover.",

  story: {
    title: "Why this company exists",
    paragraphs: [
      "Most critical infrastructure projects do not fail on equipment. They fail at the seams — between the radio contractor and the network contractor, between the design that was approved and the one that got installed, between the day the warranty starts and the day anyone tests the batteries again.",
      "NextLink USA was set up to hold those seams. We take radio, networks, telephony, DC power and fiber under one contract, work to named standards rather than custom and practice, and measure what we built so there is a record to hold us to. When something goes wrong at three in the morning, the engineer who answers has the design and the commissioning results in front of them.",
      "That is a less exciting proposition than most contractors lead with. It is also, in our experience, the entire difference between a system that is handed over and a system that still works in year five.",
    ],
  },

  focus: {
    title: "What we do, and what we do not",
    doTitle: "What we do",
    does: [
      "Survey and measure before designing anything",
      "Design to a named standard and say which one",
      "Install and commission with qualified, hazardous-area competent technicians",
      "Test to a written procedure and hand over the results",
      "Hold maintenance contracts with defined response times",
      "Stay reachable, with the project records still on the account",
    ],
    dontTitle: "What we do not do",
    donts: [
      "Price a scope we have not surveyed and call it fixed",
      "Write a specification around one product and present it as an open assessment",
      "Mark a client specification fully compliant when it is not",
      "Leave the interfaces between trades for someone else to discover",
      "Disappear once the warranty period ends",
    ],
  },

  partners: {
    title: "Technology partners",
    body: "We are vendor-independent by design: the right platform depends on the requirement, the existing estate and what your team can support. Where we hold manufacturer accreditations and training certifications, they are published here and included in the prequalification pack.",
    pendingNote:
      "Accreditations in progress are not listed, because naming a manufacturer before the certification is held is exactly the kind of claim that makes a prequalification file worthless.",
    cta: "Request the prequalification pack",
  },

  certifications: {
    title: "Credentials",
    body: "Two kinds of credential matter on a project: the company's, and the individual qualifications of the people who turn up. Both are issued with the prequalification pack.",
    groups: [
      {
        title: "NextLink USA",
        items: [
          "United States company, registered and in good standing",
          "Employer Identification Number and D-U-N-S registration",
          "Professional indemnity and public liability insurance",
          "Prequalification pack maintained current for tender submission",
        ],
      },
      {
        title: "People on site",
        items: [
          "Hazardous-area competence for installation and inspection to IEC 60079-14",
          "Manufacturer training certifications for the platforms we commission",
          "Fiber splicing and OTDR certification",
          "Working-at-height, confined-space and offshore survival where the work requires it",
        ],
      },
    ],
    note: "Qualifications are evidenced for the named personnel who will attend your site, not as a generic company claim.",
  },

  coverage: {
    title: "Where we work",
    body: "A United States company delivering across the Gulf — Saudi Arabia, the UAE, Qatar, Kuwait, Bahrain and Oman — in utilities, oil and gas, data centers, healthcare, education and government.",
    points: [
      {
        title: "United States",
        body: "Engineering, design authority, manufacturer relationships and commercial contracting.",
      },
      {
        title: "Gulf region",
        body: "Survey, installation, commissioning supervision, maintenance and support on site.",
      },
      {
        title: "Offshore",
        body: "Platforms, FPSOs and marine terminals, subject to operator certification and survival requirements.",
      },
    ],
  },
};

export type AboutCopy = typeof about;
