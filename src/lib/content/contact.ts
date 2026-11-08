export const contact = {
  meta: {
    title: "Contact NextLink USA",
    description:
      "Reach NextLink USA by email for DC power systems, battery chargers, paging and mass notification equipment. Enquiries answered by a technical contact, not a shared inbox.",
  },
  eyebrow: "Contact",
  title: "Talk to someone who can read your single-line",
  lede: "Email reaches a technical contact directly, not a shared inbox that routes it on later. Write in English or Arabic, whichever is easier.",

  channels: {
    title: "How to reach us",
    email: {
      label: "Email",
      note: "Best for specifications, drawings and anything with an attachment.",
    },
    quote: {
      label: "Request a quote",
      note: "A pre-filled email template and a checklist of what we need to price the job.",
      cta: "Request a Quote",
    },
  },

  hours: {
    title: "Hours and response times",
    rows: [
      { label: "New enquiry acknowledged", value: "Same working day" },
      { label: "Technical quotation", value: "Typically 2 working days" },
      { label: "Support response", value: "Within 4 working hours" },
      { label: "Working week", value: "Sunday to Thursday for Saudi customers; Monday to Friday US" },
      { label: "Languages", value: "English and Arabic" },
    ],
    note: "Urgent breakdown support is handled outside these hours for customers under a maintenance agreement.",
  },

  brief: {
    title: "What to include in an enquiry",
    body: "Send what you have and we will tell you what is missing. The quote page lists exactly what lets us come back with a priced offer rather than a list of questions.",
    cta: "See what to include",
  },

  offices: {
    title: "Company details",
    legalLabel: "Registered entity",
    addressLabel: "Address",
    coverageLabel: "Coverage",
    coverageValue: "Kingdom of Saudi Arabia and the wider GCC",
    prequalNote: "Prequalification pack available on request.",
  },

  privacy: {
    title: "What we do with your details",
    body: "Enquiry details are used to prepare and follow up your quotation, and are shared with the relevant manufacturer only where they are needed to price or certify the equipment. We do not sell or rent contact details, and we do not run third-party advertising or analytics trackers on this site.",
  },
};

export type ContactCopy = typeof contact;
