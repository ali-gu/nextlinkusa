export const quote = {
  meta: {
    title: "Request a Quote — telecom, networks, communications and DC power",
    description:
      "Send a scope, a drawing or a description of the problem and receive a priced proposal with the calculations behind it, the standards it is built to, and an honest list of exclusions.",
  },
  eyebrow: "Request a quote",
  title: "Send us the scope. We will send back a priced proposal.",
  lede: "No form to wrestle with. Email the documents you already have — a specification, a single-line diagram, a load schedule — and they reach a technical contact directly.",

  channels: {
    email: {
      title: "Email the request",
      body: "Send a specification, a single-line diagram, a load schedule or a battery data sheet — or simply describe the load you need to hold up. A technical contact is assigned the same working day.",
      cta: "Open a pre-filled email",
      note: "Opens your mail client with a template already filled in. Add your details, attach what you have, and send.",
      subject: "Quotation request",
      /** Pre-filled body. Keep the blank lines — they give people room to type. */
      template: `Please quote the following.

COMPANY
  Company:
  Contact name:
  Phone:
  Site location:

PROJECT
  Service line (telecom / communications / networks / telephony /
                DC power / fiber / off-shore):
  New build, upgrade or fault investigation:
  Industry or facility type:
  Required completion date:

SCOPE
  (What exists today, and what has to be true at the end.)


SITE CONDITIONS
  Hazardous area classification, if any:
  Access constraints, permits or clearances required:
  Can the work be done live, or is an outage available:


Attachments: scope / drawings / specification / photographs
`,
    },
  },

  whatYouGet: {
    title: "What comes back",
    items: [
      "A priced scope of work, with the exclusions stated plainly",
      "The calculations behind it — IEEE 485 sizing, intelligibility modelling, optical budget",
      "The standards each part of the work is built to",
      "A programme, including survey, mobilisation and commissioning",
      "A clause-by-clause compliance statement where you have issued a specification",
    ],
    timing:
      "Usually within two business days. Budgetary numbers faster if that is all you need right now.",
  },

  brief: {
    eyebrow: "Before you send",
    title: "What to include",
    body: "None of this is mandatory — send what you have and we will tell you what is missing. But an enquiry with these details usually comes back as a priced scope rather than a list of questions.",
    groups: [
      {
        title: "For power and communications work",
        items: [
          "Nominal DC bus voltage, loads and the autonomy you need",
          "Building or plant layout with areas and approximate dimensions",
          "Measured or estimated ambient noise in each area",
          "Number of zones and where messages must be initiated from",
          "Interfaces required: fire alarm, PBX, DCS, access control",
          "Monitoring protocol your SCADA, NMS or DCIM expects",
        ],
      },
      {
        title: "For network and fiber work",
        items: [
          "What exists today — equipment, cabling, documentation if any",
          "Availability target, and what the application actually tolerates",
          "Route length, environment and whether ducts already exist",
          "Capacity now and the growth you are planning for",
          "Any segmentation or security requirement already defined",
          "Whether a change window exists, or the work must be live",
        ],
      },
      {
        title: "Site and commercial",
        items: [
          "Hazardous area classification, with zone and gas group",
          "Access constraints, permits, inductions or clearances needed",
          "Required completion date, and whether it is contractual",
          "Whether you have issued a specification we should respond against",
          "Any prequalification documents needed with the proposal",
        ],
      },
    ],
  },

  response: {
    title: "What happens next",
    rows: [
      { label: "Enquiry acknowledged", value: "Same working day" },
      { label: "Technical contact assigned", value: "Same working day" },
      { label: "Budgetary quotation", value: "1–2 working days" },
      { label: "Scoped proposal with calculations", value: "2–5 working days after survey" },
    ],
    note: "Programme and mobilisation dates are confirmed per project and depend on scope, site access and permit lead times.",
  },

  privacyNote:
    "Your details are used only to prepare and follow up the quotation, and are shared with a manufacturer only where that is needed to price or certify the equipment. This site runs no analytics or advertising trackers.",
};

export type QuoteCopy = typeof quote;
