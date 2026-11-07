export const quote = {
  meta: {
    title: "Request a Quote — DC power, paging and mass notification",
    description:
      "Send your specification, single-line diagram or load schedule and receive a sized technical offer with an IEEE 485 calculation, a compliance statement and a delivered price, usually within two business days.",
  },
  eyebrow: "Request a quote",
  title: "Send us the specification. We will send back a sized offer.",
  lede: "No form to wrestle with. Email the documents you already have, or send a photo of a nameplate on WhatsApp — both reach a technical contact, not a shared inbox.",

  channels: {
    email: {
      title: "Email the request",
      body: "Best for anything with an attachment: a specification, a single-line diagram, a load schedule or a battery data sheet.",
      cta: "Open a pre-filled email",
      note: "Opens your mail client with a short template already filled in. Attach what you have and send.",
      subject: "Quotation request",
      /** Pre-filled body. Keep the blank lines — they give people room to type. */
      template: `Please quote the following.

COMPANY
  Company:
  Contact name:
  Phone / WhatsApp:
  Country:

PROJECT
  What you need (new project / spares / maintenance / datasheets):
  Product family (DC power / paging & notification / UPS):
  Industry or application:
  Required delivery date:

TECHNICAL
  (For a DC system: nominal bus voltage, continuous and momentary loads,
   required autonomy, battery chemistry, design ambient temperature.)
  (For a notification system: areas and approximate dimensions, ambient
   noise, hazardous area classification, number of zones, interfaces.)


COMMERCIAL
  Preferred Incoterm:
  Importer of record:
  Is a SABER account already in place?


Attachments: specification / single-line diagram / load schedule
`,
    },
    whatsapp: {
      title: "Message on WhatsApp",
      body: "Best for a quick question, a photograph of an existing charger nameplate, or a site query while you are standing in front of the equipment.",
      cta: "Open WhatsApp",
      note: "Answered in working hours, in English or Arabic.",
      prefill:
        "Hello NextLink USA — I would like to request a quotation. My project is:",
    },
  },

  whatYouGet: {
    title: "What comes back",
    items: [
      "A priced offer against the models that meet your specification",
      "Battery and charger sizing to IEEE 485, or coverage and intelligibility modelling for a notification system",
      "A clause-by-clause compliance statement, including honest exceptions",
      "Lead time confirmed with the manufacturer, and the Incoterm you asked for",
      "The conformity route for SABER registration, priced where it applies",
    ],
    timing:
      "Usually within two business days. Budgetary numbers faster if that is all you need right now.",
  },

  brief: {
    eyebrow: "Before you send",
    title: "What to include",
    body: "None of this is mandatory — send what you have and we will tell you what is missing. But an enquiry with these details usually comes back as a priced offer rather than a list of questions.",
    groups: [
      {
        title: "For a DC power system",
        items: [
          "Nominal DC bus voltage and battery chemistry, if already fixed",
          "Continuous load and any momentary loads, with durations",
          "Required autonomy and minimum end-of-discharge voltage",
          "Design ambient temperature inside the room, not outdoors",
          "Single-line diagram and the project specification, if issued",
          "Monitoring protocol your SCADA or DCIM expects",
        ],
      },
      {
        title: "For a paging or notification system",
        items: [
          "Building or plant layout, with areas and approximate dimensions",
          "Measured or estimated ambient noise in each area",
          "Hazardous area classification, if any, with zone and gas group",
          "Number of zones and where messages need to be initiated from",
          "Interfaces required: fire alarm, PBX, DCS, access control",
          "Languages required for pre-recorded messages",
        ],
      },
      {
        title: "Commercial details",
        items: [
          "Importer of record and whether a SABER account already exists",
          "Preferred Incoterm and destination port or site",
          "Required delivery date, and whether it is contractual",
          "Whether a letter of credit will be used",
          "Any prequalification documents needed with the offer",
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
      { label: "Full offer with sizing and compliance statement", value: "2–5 working days" },
      { label: "Languages", value: "English and Arabic" },
    ],
    note: "Lead times for manufactured equipment are confirmed per order and depend on the range, the configuration and the certification route.",
  },

  privacyNote:
    "Your details are used only to prepare and follow up the quotation, and are shared with a manufacturer only where that is needed to price or certify the equipment. This site runs no analytics or advertising trackers.",
};

export type QuoteCopy = typeof quote;
