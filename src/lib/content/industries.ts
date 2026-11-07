import type { ProductSlug } from "@/lib/catalog";

export const industries = {
  index: {
    meta: {
      title: "Industries — utilities, oil & gas, data centers, healthcare, government",
      description:
        "DC power systems and mass notification equipment supplied to Saudi substations, oil and gas facilities, data centers, hospitals, schools and government buildings.",
    },
    eyebrow: "Industries",
    title: "The same equipment, read five different ways",
    lede: "A 125 VDC charger on a transmission substation and a 125 VDC charger in a refinery switchroom are the same product with very different paperwork. These pages set out what changes — the standards, the certification, the environment and the spares strategy.",
  },

  items: {
    "utilities-and-substations": {
      name: "Utilities & substations",
      meta: {
        title: "Substation DC power systems for Saudi utilities",
        description:
          "Station battery chargers, DC distribution and monitoring for 13.8 kV to 380 kV substations in Saudi Arabia, sized to IEEE 485 and IEEE 946 with SABER-ready documentation.",
      },
      tagline: "The DC bus every protection scheme depends on.",
      summary:
        "Station DC systems for distribution and transmission substations — chargers, batteries, distribution and monitoring, sized and documented for utility review.",
      imageAlt: "Transmission infrastructure against a clear sky",
      intro: [
        "A substation DC system has one job and no second chance at it: keep the trip coils, protection relays, control scheme and communications alive through an AC failure long enough for the network to be restored. Everything else about the station is negotiable.",
        "We supply station battery chargers, DC distribution and monitoring for 13.8 kV distribution through to 380 kV transmission, with the calculations and type-test evidence a utility engineering department expects to see before approval.",
      ],
      challenges: [
        {
          title: "Ambient temperature destroys battery life",
          body: "A lead-acid battery loses roughly half its design life for every 10 °C above 25 °C. Switchroom ambient, not outdoor shade temperature, is what the sizing has to use — and the charger needs temperature compensation wired to a probe on the battery, not a guess in firmware.",
        },
        {
          title: "Earth faults are found the hard way",
          body: "An undetected earth fault on a DC bus is benign until the second one arrives and trips a breaker nobody asked to trip. Detection on both polarities is the minimum; branch-circuit location is what lets a technician find it without de-energising the station DC bus.",
        },
        {
          title: "Remote sites are expensive to visit",
          body: "If a charger fault means a four-hour drive, N+1 modular redundancy and remote alarm reporting pay for themselves on the first avoided call-out. We size the spares holding on travel time, not on list price.",
        },
        {
          title: "The specification outlives the supplier",
          body: "Stations get extended ten and fifteen years after they are built. Supplying equipment that is documented down to OEM part numbers is what makes a matching extension possible later.",
        },
      ],
      supply: [
        {
          title: "Station battery chargers",
          body: "110, 125 and 220 VDC switchmode and SCR sets with float, boost and commissioning charge, temperature compensation and adjustable current limit. Dual-redundant configurations where the protection scheme demands it.",
          href: "/products/dc-power-battery-chargers",
        },
        {
          title: "DC distribution and monitoring",
          body: "Fused or MCB distribution sections, earth-fault detection on both polarities, DC voltage supervision and alarm annunciation mapped to potential-free contacts, Modbus, DNP3 or IEC 61850.",
          href: "/products/dc-power-battery-chargers",
        },
        {
          title: "Control building notification",
          body: "Paging and talk-back between control room and switchyard, plus evacuation messaging for manned stations and training centres.",
          href: "/products/paging-mass-notification",
        },
      ],
      notes: {
        title: "Specification notes",
        items: [
          "Battery sizing to IEEE 485 with the duty cycle shown, including momentary trip and close currents.",
          "System architecture and redundancy to IEEE 946; DC protection coordination to IEEE 1375.",
          "Seismic qualification to IEEE 693 where the station specification calls for it.",
          "Assemblies built and type-tested to IEC 61439-1 and IEC 61439-2.",
          "Maintenance regime and acceptance testing to IEEE 450, IEEE 1188 or IEEE 1106 by chemistry.",
          "Regulated items registered on SABER against the applicable SASO technical regulation before shipment.",
        ],
      },
      relatedProducts: ["dc-power-battery-chargers", "paging-mass-notification"] as ProductSlug[],
      faq: [
        {
          q: "Can you supply against a utility's own technical specification?",
          a: "Yes, and we would prefer to. Send the specification and we return a clause-by-clause compliance statement marking each requirement complied, complied with comment, or not complied. The exceptions are the valuable part of that document — a supplier who marks every clause compliant has usually not read it.",
        },
        {
          q: "Do you supply the batteries as well as the charger?",
          a: "We can quote the complete DC system — charger, battery, stand or cabinet, and distribution — or the charger alone where a battery framework agreement is already in place. Where you supply the battery, we need its discharge characteristics and recommended float and boost voltages to set the charger correctly.",
        },
        {
          q: "Is IEC 61850 integration available?",
          a: "On selected ranges, yes. For most stations the standard potential-free contacts plus DNP3 or Modbus TCP into the station gateway is what is actually being asked for, and it is simpler to commission. We will confirm which option the quoted model supports before order.",
        },
      ],
    },

    "oil-and-gas": {
      name: "Oil & gas",
      meta: {
        title: "Hazardous-area paging and DC power for Saudi oil & gas facilities",
        description:
          "ATEX, IECEx and Class I Division 1/2 certified PA/GA and notification devices, plus DC power for fire and gas, ESD and control systems in upstream, midstream and downstream facilities.",
      },
      tagline: "Certified for the area classification, built for the corrosion.",
      summary:
        "Public address and general alarm, talk-back and DC power for plants, terminals, pipelines and offshore installations — with the certification pack to match the hazardous area classification.",
      imageAlt: "Offshore vessel laying submarine cable at sunset",
      intro: [
        "In a process facility, the notification system is part of the safety case. It has to be audible over a compressor, certified for the zone it sits in, and survive years of salt, sand and hydrogen sulphide without the enclosure giving up first.",
        "We supply hazardous-area PA/GA and talk-back equipment and the DC systems behind fire and gas, emergency shutdown and control — with certificate numbers, protection concepts and material specifications quoted per device.",
      ],
      challenges: [
        {
          title: "Area classification drives everything",
          body: "A device that is fine in Zone 2 is not acceptable in Zone 1, and a Division 2 listing does not satisfy a Zone 1 requirement. We quote the protection concept, gas group and temperature class per item so the review is a document check, not an argument.",
        },
        {
          title: "Plant noise defeats ordinary speakers",
          body: "A compressor house at 100 dBA needs a design that targets intelligibility, not just sound pressure. That means re-entrant horns placed on a modelled layout, and a measured speech transmission index at commissioning.",
        },
        {
          title: "Corrosion is the real service life limit",
          body: "Coastal and sour-service environments eat painted mild steel. 316 stainless, glass-reinforced polyester and copper-free aluminium are specified per location, not applied uniformly to keep the quotation tidy.",
        },
        {
          title: "Shutdowns are the only maintenance window",
          body: "If a device can only be replaced during a turnaround, the spares holding has to anticipate it. Recommended holdings are built around the turnaround interval and the certification lead time for replacements.",
        },
      ],
      supply: [
        {
          title: "Hazardous-area PA/GA and talk-back",
          body: "Ex d, Ex e and Ex ia horn loudspeakers, beacons, combination sounder/beacons, weatherproof handsets and noise-cancelling call stations for Zone 1, Zone 2, Division 1 and Division 2.",
          href: "/products/paging-mass-notification",
        },
        {
          title: "Plant-wide notification head-end",
          body: "Zone controllers, supervised amplifiers with N+1 standby, battery backup and interfaces to fire and gas, ESD and the DCS so a process event can raise the right message in the right area.",
          href: "/products/paging-mass-notification",
        },
        {
          title: "DC systems for safety and control",
          body: "24, 48 and 125 VDC chargers and distribution for fire and gas panels, emergency shutdown systems, switchgear control and telecom, with earth-fault detection and full alarm mapping.",
          href: "/products/dc-power-battery-chargers",
        },
      ],
      notes: {
        title: "Specification notes",
        items: [
          "Field devices certified under the IEC 60079 series for ATEX and IECEx, or listed to the NEC for Class I Division 1 and Division 2.",
          "Certificate number, protection concept, gas group, temperature class and ingress rating quoted per device on the submittal.",
          "Enclosure material selected per location: 316 stainless, GRP or copper-free aluminium.",
          "Speech intelligibility designed and verified to IEC 60268-16 against measured ambient noise.",
          "Emergency communications architecture to NFPA 72 and UL 2572 where the project references them.",
          "Operator-facing documentation and panel labelling available in Arabic.",
        ],
      },
      relatedProducts: ["paging-mass-notification", "dc-power-battery-chargers"] as ProductSlug[],
      faq: [
        {
          q: "Can you work to a client's own material and engineering standards?",
          a: "Yes. Major operators in the Kingdom work to their own engineering standards and material specifications on top of the international codes. Send the applicable documents with the enquiry and we will return a compliance statement against them, flagging anything the standard product range does not meet rather than discovering it at inspection.",
        },
        {
          q: "What ambient and corrosion ratings do you quote as standard?",
          a: "−40 °C to +70 °C operation and NEMA 4X / IP66 as the baseline for outdoor field devices, with material selection driven by the location: 316 stainless or GRP for coastal and sour service, copper-free aluminium where weight matters. We state the assumption in the offer so it can be challenged before the order.",
        },
        {
          q: "Do you supply for offshore installations?",
          a: "Yes — platforms, FPSOs and marine terminals. Offshore adds marine certification requirements and, usually, tighter weight and footprint limits, so tell us the installation type with the enquiry and we will confirm what certification the quoted devices carry.",
        },
      ],
    },

    "data-centers": {
      name: "Data centers",
      meta: {
        title: "DC power and notification systems for data centers in Saudi Arabia",
        description:
          "−48 VDC telecom power, 125 VDC switchgear control, and mass notification for evacuation in concurrently maintainable data center facilities.",
      },
      tagline: "Power and messaging for a building that never has a maintenance window.",
      summary:
        "Telecom DC power, switchgear control DC, and evacuation and mass notification for colocation, hyperscale and enterprise facilities.",
      imageAlt: "Fibre-optic strands carrying light, representing data center network infrastructure",
      intro: [
        "Data centers are judged on what can be taken out of service without affecting the load. A DC system that cannot be maintained while energised quietly breaks concurrent maintainability, regardless of how the UPS topology is drawn.",
        "We supply −48 VDC telecom power, 125 VDC switchgear control systems and notification equipment designed around that constraint: modular, hot-swappable, dual-fed and supervised.",
      ],
      challenges: [
        {
          title: "Concurrent maintainability has to reach the DC system",
          body: "Modular rectifiers that can be replaced live, dual input feeds, and distribution arranged so a branch can be isolated without dropping the bus. The single-line has to survive the same scrutiny as the AC side.",
        },
        {
          title: "Growth happens in small steps",
          body: "Load arrives rack by rack, not hall by hall. Systems are specified with spare rectifier positions and distribution capacity so the next increment is a module, not a replacement cabinet.",
        },
        {
          title: "Evacuation messaging competes with noise",
          body: "A data hall at 85 dBA with hard surfaces is an intelligibility problem. Speaker density and placement have to be modelled rather than spaced to a rule of thumb.",
        },
        {
          title: "Monitoring must land in the existing DCIM",
          body: "Another standalone monitoring panel helps nobody. Alarm points are exposed over SNMP and Modbus TCP, with a point list issued before the equipment ships.",
        },
      ],
      supply: [
        {
          title: "−48 VDC telecom power systems",
          body: "Modular rectifier shelves with N+1 redundancy, hot-swap modules, low-voltage disconnect, battery monitoring and SNMP reporting into the building management or DCIM platform.",
          href: "/products/dc-power-battery-chargers",
        },
        {
          title: "125 VDC switchgear control",
          body: "Station-style chargers and distribution for medium-voltage switchgear control, generator control and protection, with earth-fault detection and dual-feed arrangements.",
          href: "/products/dc-power-battery-chargers",
        },
        {
          title: "Evacuation and mass notification",
          body: "IP paging and notification over the facility network with PoE amplified speakers, supervised zones, and an interface to the fire alarm and VESDA systems.",
          href: "/products/paging-mass-notification",
        },
      ],
      notes: {
        title: "Specification notes",
        items: [
          "DC system architecture and redundancy documented to IEEE 946, sized to IEEE 485.",
          "Rectifier modules hot-swappable without interrupting the DC bus.",
          "Alarm and telemetry points exposed over SNMP v2c/v3 and Modbus TCP, with a published point list.",
          "Emergency communications designed to NFPA 72 Chapter 24 and UL 2572 where referenced.",
          "Intelligibility modelled to IEC 60268-16 against the as-operating noise level, not an empty hall.",
          "Regulated items registered on SABER before shipment.",
        ],
      },
      relatedProducts: ["dc-power-battery-chargers", "ups-power-quality", "paging-mass-notification"] as ProductSlug[],
      faq: [
        {
          q: "Can the DC plant be expanded without downtime?",
          a: "That is the point of specifying modular rectifiers with spare shelf positions. Adding capacity becomes inserting a module rather than taking a bus down. We size the initial frame against your stated growth plan and tell you explicitly where the expansion limit sits.",
        },
        {
          q: "How do alarms reach our monitoring platform?",
          a: "Over SNMP for trap-based platforms and Modbus TCP for building management systems, with potential-free contacts available for the small number of points that justify a hardwired path. The point list is issued with the submittal so the integration work can start before delivery.",
        },
      ],
    },

    "hospitals-and-schools": {
      name: "Hospitals & schools",
      meta: {
        title: "Voice evacuation and mass notification for hospitals and schools",
        description:
          "Intelligible voice evacuation, lockdown and emergency messaging to NFPA 72 and UL 2572 for hospitals, clinics, schools and university campuses in Saudi Arabia.",
      },
      tagline: "Messages that work for people who are not trained for the emergency.",
      summary:
        "Voice evacuation, lockdown and day-to-day paging for healthcare and education buildings, plus DC power for essential electrical systems.",
      imageAlt: "City skyline at dusk, representing the institutional buildings served by notification systems",
      intro: [
        "In a hospital or a school, the people receiving the message are patients, visitors and children. They are not trained, they may not speak the same first language, and some of them cannot move without help. Intelligibility and clear, specific instructions do more than volume ever will.",
        "We supply voice evacuation and mass notification systems designed for exactly that audience, with bilingual pre-recorded messaging and the coverage modelling to prove they will be understood in a corridor, an atrium or a sports hall.",
      ],
      challenges: [
        {
          title: "Reverberant spaces destroy intelligibility",
          body: "Atria, corridors and sports halls have long reverberation times, which is where a system passing a sound pressure check still fails a speech transmission index measurement. Density and placement have to be modelled against the real surfaces.",
        },
        {
          title: "Not everyone evacuates",
          body: "Healthcare buildings rely on defend-in-place and horizontal evacuation. The system has to address individual compartments with different instructions at the same time, not broadcast one message to the whole building.",
        },
        {
          title: "Lockdown is a different message to evacuation",
          body: "Schools need a message set that includes lockdown and shelter-in-place, initiated quickly from more than one place, with a defined all-clear.",
        },
        {
          title: "Two languages, one message",
          body: "Pre-recorded messaging in Arabic and English, sequenced so neither overlaps the other, and tested with the real staff who will use it.",
        },
      ],
      supply: [
        {
          title: "Voice evacuation and mass notification",
          body: "Zoned voice alarm with supervised circuits, pre-recorded bilingual message sets, priority handling between fire, lockdown and routine paging, and microphone stations at reception and security.",
          href: "/products/paging-mass-notification",
        },
        {
          title: "Day-to-day paging and bells",
          body: "Scheduled lesson signals, all-call, zone paging and code announcements using the same infrastructure as the life-safety system, with routine traffic held at the lowest priority.",
          href: "/products/paging-mass-notification",
        },
        {
          title: "DC power for essential systems",
          body: "Battery chargers and DC distribution supporting switchgear control, generator starting and fire alarm panels on the essential electrical system.",
          href: "/products/dc-power-battery-chargers",
        },
      ],
      notes: {
        title: "Specification notes",
        items: [
          "Emergency communications designed to NFPA 72 Chapter 24; mass notification equipment listed to UL 2572.",
          "Loudspeakers and amplifiers listed to UL 1480 and UL 1711, or certified to EN 54-24 and EN 54-16 where the project is written to European standards.",
          "Speech intelligibility target of STI ≥ 0.50 modelled per IEC 60268-16 and verified at commissioning.",
          "Message sets recorded in Arabic and English, with scripts agreed with the operator before recording.",
          "Zoning aligned to the fire compartmentation strategy, including horizontal evacuation where applicable.",
          "Final acceptance of the architecture rests with the authority having jurisdiction; assumptions are stated in the submittal.",
        ],
      },
      relatedProducts: ["paging-mass-notification", "dc-power-battery-chargers", "ups-power-quality"] as ProductSlug[],
      faq: [
        {
          q: "Can the same system handle both fire evacuation and routine paging?",
          a: "Yes, and it usually should — a system used every day is a system known to work. Routine paging runs at the lowest priority and is pre-empted instantly by fire or lockdown messaging. Where the authority having jurisdiction requires physical separation of the life-safety path, we quote that arrangement instead and say why.",
        },
        {
          q: "How are bilingual messages sequenced?",
          a: "Arabic and English message pairs play in sequence rather than alternating zones, with the order and the inter-message gap set during commissioning. Scripts are agreed with the operator and the fire consultant before recording, because wording changes after installation are the expensive kind.",
        },
      ],
    },

    "government-buildings": {
      name: "Government buildings",
      meta: {
        title: "Mass notification and standby power for government buildings",
        description:
          "Mass notification, emergency communications and DC standby power for ministries, campuses and secure facilities in Saudi Arabia, with prequalification documentation available.",
      },
      tagline: "Supplied with the paperwork a public tender actually requires.",
      summary:
        "Mass notification and emergency communications for ministries, administrative campuses and secure facilities, with DC power for security, control and standby systems.",
      imageAlt: "Modern city skyline representing government and institutional buildings",
      intro: [
        "Public-sector projects are won and lost on documentation as much as on product. Conformity certificates, country of origin, authorised distributor letters and a prequalification file that stands up to review are part of the deliverable, not an afterthought.",
        "We supply mass notification and DC standby systems to ministries, campuses and secure facilities, and we keep the prequalification pack current so it can be issued the day it is asked for.",
      ],
      challenges: [
        {
          title: "Prequalification comes before the product",
          body: "Entity registration, authorised distributor letters, conformity certificates, past performance and bank details are needed as one coherent file. We maintain it so a request does not become a two-week delay.",
        },
        {
          title: "Country of origin is scrutinised",
          body: "Equipment is built in the United States and documented with a certificate of origin issued against the actual manufacturing location, traceable to the serial numbers on the shipment.",
        },
        {
          title: "Campuses are many buildings, one message",
          body: "Site-wide notification across separated buildings needs a networked architecture with local autonomy, so a link failure does not silence a building.",
        },
        {
          title: "Secure areas restrict connectivity",
          body: "Where a system cannot reach an external network, monitoring and message distribution are designed to work entirely on the internal network, with no cloud dependency.",
        },
      ],
      supply: [
        {
          title: "Campus-wide mass notification",
          body: "Networked zone controllers with local autonomy, indoor and outdoor speakers, visual notification devices, and initiation from security control, reception and mobile devices on the internal network.",
          href: "/products/paging-mass-notification",
        },
        {
          title: "DC standby for security and control",
          body: "Battery chargers and distribution supporting access control, CCTV head-end, switchgear control and generator starting, with supervised alarms into the building management system.",
          href: "/products/dc-power-battery-chargers",
        },
        {
          title: "UPS for critical rooms",
          body: "Online double-conversion UPS for control rooms, communications rooms and security head-end, with maintenance bypass arranged for live servicing.",
          href: "/products/ups-power-quality",
        },
      ],
      notes: {
        title: "Specification notes",
        items: [
          "Mass notification equipment listed to UL 2572; emergency communications designed to NFPA 72 Chapter 24.",
          "Certificate of origin issued against the actual manufacturing location and traceable to shipment serial numbers.",
          "Authorised distributor letters issued by the manufacturer on request for tender submission.",
          "SABER Product and Shipment Certificates of Conformity arranged for every regulated line item.",
          "Prequalification pack issued on request, including entity registration and past performance.",
          "Systems designed to operate without any external network dependency where the facility requires it.",
        ],
      },
      relatedProducts: ["paging-mass-notification", "dc-power-battery-chargers", "ups-power-quality"] as ProductSlug[],
      faq: [
        {
          q: "What is in the prequalification pack?",
          a: "Entity registration and tax identification, manufacturer authorisation letters, product conformity certificates, quality certifications held by the manufacturers we represent, banking details, insurance, and a past-performance summary. It is issued as a single PDF on request — email us or ask through the quote form.",
        },
        {
          q: "Can you supply through a local partner?",
          a: "Yes. Many public-sector contracts are held by a locally registered contractor, and we are comfortable supplying as the equipment vendor behind that contract, including issuing the documentation in the contractor's name where that is what the tender requires.",
        },
      ],
    },
  },
};

export type IndustriesCopy = typeof industries;
