export const contact = {
  meta: {
    title: "Contact NextLink USA",
    description:
      "Reach NextLink USA by email for telecom, communications, network, DC power and fiber engineering. Enquiries go to a technical contact, not a shared inbox.",
  },
  eyebrow: "Contact",
  title: "Talk to someone who can read your drawing",
  lede: "Email reaches a technical contact directly. Send a scope, a single-line, a site photograph, or just describe what is not working.",

  channels: {
    title: "How to reach us",
    email: {
      label: "Email",
      note: "Best for scopes, drawings and anything with an attachment.",
    },
    quote: {
      label: "Request a quote",
      note: "A pre-filled email template and a checklist of what lets us price the work.",
      cta: "Request a Quote",
    },
  },

  hours: {
    title: "What to expect",
    items: [
      "Prompt acknowledgement of every new enquiry",
      "A named technical contact for your project",
      "A scoped proposal once the site has been surveyed",
      "Responsive technical support",
      "Office hours Monday to Friday",
    ],
    note: "Emergency response outside these hours is available to clients under a maintenance agreement.",
  },

  brief: {
    title: "What to include in an enquiry",
    body: "Send what you have and we will tell you what is missing. The quote page lists exactly what lets us come back with a priced scope rather than a list of questions.",
    cta: "See what to include",
  },

  offices: {
    title: "Company details",
    legalLabel: "Registered entity",
    addressLabel: "Address",
    coverageLabel: "Coverage",
    coverageValue: "United States",
    prequalNote: "Prequalification pack available on request.",
  },

  privacy: {
    title: "What we do with your details",
    body: "Enquiry details are used to prepare and follow up your proposal, and are shared with a manufacturer or partner only where that is needed to price or certify the work. We do not sell or rent contact details, and this site runs no third-party advertising or analytics trackers.",
  },
};

export type ContactCopy = typeof contact;
