import type { IndustrySlug } from "@/lib/catalog";

export const products = {
  index: {
    meta: {
      title: "Products — DC power, battery chargers, paging and mass notification",
      description:
        "American-made substation battery chargers and DC systems, IP and analogue paging, mass notification and Ex-rated field devices, supplied to Saudi Arabia with SABER-ready documentation.",
    },
    eyebrow: "Product range",
    title: "Three ranges, one standard of documentation",
    lede: "Every line we represent is built in the United States and supplied with the submittal pack a Saudi consultant or utility actually asks for: sizing calculations, a clause-by-clause compliance statement, type-test certificates and the conformity registration.",
    note: "Specifications on these pages are indicative of the standard ranges. Final figures always come from the manufacturer's current datasheet, which is issued with the quotation.",
  },

  items: {
    "dc-power-battery-chargers": {
      name: "DC power systems & battery chargers",
      shortName: "DC power & chargers",
      meta: {
        title: "Substation DC power systems & battery chargers for Saudi Arabia",
        description:
          "24–220 VDC switchmode and SCR battery chargers sized to IEEE 485, with earth-fault detection, Modbus/DNP3 monitoring, 230/400 V 60 Hz input and SABER-ready documentation.",
      },
      tagline: "The supply that holds the protection system up when the AC goes away.",
      summary:
        "Switchmode and SCR battery chargers, battery stands and DC distribution for substations, generating plants, telecom rooms and process facilities — from 24 VDC telecom racks to 220 VDC transmission switchgear.",
      imageAlt: "Telecommunications tower against a clear sky, typical of the assets served by substation DC power systems",
      intro: [
        "When the incoming AC supply fails, the protection relays, trip coils, SCADA gateways and emergency lighting on a substation are all running from one place: the station battery. The charger that keeps it there is the least visible item in the switchroom and the one with the least tolerance for being wrong.",
        "We supply American-built DC systems against the standards your specification already references — IEEE 485 for battery sizing, IEEE 946 for the system architecture, IEEE 1375 for DC protection — and we send the calculation with the quotation rather than after the order.",
      ],
      highlights: [
        {
          title: "Switchmode or SCR, chosen on the duty",
          body: "Switchmode modules give you N+1 redundancy, hot-swap repair and a power factor above 0.99. SCR sets remain the right answer where the specification demands them or where the site already runs a fleet of them. We will tell you which one the duty actually needs.",
        },
        {
          title: "Earth-fault detection that finds the fault",
          body: "Positive and negative bus earth-fault detection with adjustable threshold, plus optional branch-circuit location so a maintenance team can isolate the faulted feeder without switching the station DC bus off to find it.",
        },
        {
          title: "Sized for 50 °C, not 25 °C",
          body: "Standard ratings are confirmed against the real ambient inside the building, with forced ventilation, anti-condensation heating and derating stated in writing before you order.",
        },
        {
          title: "Monitoring your SCADA can actually read",
          body: "Potential-free contacts as standard, plus Modbus RTU and TCP, DNP3 and SNMP. IEC 61850 is available on selected ranges where the station is fully digital.",
        },
      ],
      specGroups: [
        {
          title: "AC input",
          rows: [
            { label: "Nominal voltage", value: "230/400 V, 3-phase 4-wire (120/208 V, 480 V and single-phase variants available)" },
            { label: "Frequency", value: "60 Hz standard; 50 Hz on request" },
            { label: "Tolerance", value: "±10 % voltage, ±5 % frequency" },
            { label: "Power factor", value: "> 0.99 at full load (switchmode with active PFC)" },
            { label: "Input current distortion", value: "< 5 % THDi (switchmode)" },
          ],
        },
        {
          title: "DC output",
          rows: [
            { label: "Nominal voltages", value: "24, 48, 110, 125 and 220 VDC" },
            { label: "Output current", value: "10 A to 600 A; higher ratings by paralleled modules" },
            { label: "Voltage regulation", value: "± 0.5 % from no load to full load, over the input range" },
            { label: "Ripple", value: "< 1 % RMS with battery connected; filtered output available for battery-less operation" },
            { label: "Charge modes", value: "Float, boost/equalise, commissioning charge; timed and manual initiation" },
            { label: "Temperature compensation", value: "Battery-mounted probe, −3 to −5 mV/°C/cell for lead-acid" },
            { label: "Current limit", value: "Adjustable 20–110 % of rating, with soft start" },
          ],
        },
        {
          title: "Battery compatibility",
          rows: [
            { label: "Chemistries", value: "Valve-regulated lead-acid, vented (flooded) lead-acid, vented and sealed nickel-cadmium" },
            { label: "Sizing basis", value: "IEEE 485 for lead-acid, IEEE 1115 for nickel-cadmium" },
            { label: "Autonomy", value: "Typically 3, 5, 8 or 10 hours; duty-cycle driven" },
            { label: "Battery supervision", value: "Open-circuit detection, end-of-discharge alarm, optional cell-level monitoring" },
          ],
        },
        {
          title: "Protection, alarms & monitoring",
          rows: [
            { label: "Earth-fault detection", value: "Positive and negative bus, adjustable threshold; optional branch location" },
            { label: "Standard alarms", value: "AC fail, charger fail, DC over/under-voltage, earth fault, battery disconnected, fuse/MCB trip, high temperature" },
            { label: "Contacts", value: "Potential-free changeover contacts, individually or commoned" },
            { label: "Serial & network", value: "Modbus RTU (RS-485), Modbus TCP, DNP3, SNMP; IEC 61850 on selected ranges" },
            { label: "Local indication", value: "Digital voltmeter and ammeter, alarm annunciator, optional graphical HMI" },
          ],
        },
        {
          title: "Construction & environment",
          rows: [
            { label: "Enclosure", value: "Free-standing, wall-mounted or 19-inch rack" },
            { label: "Protection class", value: "IP21 to IP55 / NEMA 1, 12, 3R and 4X options" },
            { label: "Ambient", value: "Rated for 50 °C operation; derating curve supplied with the offer" },
            { label: "Cable entry", value: "Top or bottom, with gland plate" },
            { label: "Finish", value: "RAL 7035 textured as standard; customer colour on request" },
            { label: "Seismic", value: "IEEE 693 qualification available for substation installations" },
          ],
        },
      ],
      standards: [
        { code: "IEEE 485", title: "Sizing lead-acid batteries for stationary applications" },
        { code: "IEEE 1115", title: "Sizing nickel-cadmium batteries for stationary applications" },
        { code: "IEEE 946", title: "DC auxiliary power systems for generating stations and substations" },
        { code: "IEEE 1375", title: "Protection of stationary battery systems" },
        { code: "IEEE 450 / 1188 / 1106", title: "Maintenance and testing — vented lead-acid, VRLA and nickel-cadmium" },
        { code: "IEEE 693", title: "Seismic qualification of substation equipment" },
        { code: "IEC 61439-1/-2", title: "Low-voltage switchgear and controlgear assemblies" },
        { code: "IEC 60146", title: "Semiconductor converters" },
        { code: "UL 1012", title: "Power units other than Class 2" },
        { code: "NFPA 70 (NEC) Art. 480", title: "Storage batteries — installation requirements" },
        { code: "NEMA PE 5", title: "Utility type battery chargers" },
        { code: "SASO / SABER", title: "Saudi conformity registration for regulated electrical equipment" },
      ],
      applications: [
        "Substation protection and control — trip, close and relay supply",
        "Switchgear spring-charging motors and motorised isolators",
        "SCADA gateways, RTUs and IEDs",
        "Telecom equipment rooms at −48 VDC and +24 VDC",
        "Generating plant and turbine control systems",
        "Fire and gas detection panels",
        "Emergency lighting inverter DC input",
        "Pipeline SCADA and cathodic protection control",
      ],
      deliverables: [
        "IEEE 485 or IEEE 1115 battery sizing calculation for your duty cycle",
        "General arrangement drawing, wiring schematic and terminal schedule",
        "Bill of materials with OEM part numbers for spares traceability",
        "Type-test certificates and routine test reports",
        "Factory acceptance test procedure, witnessed on request",
        "Operation and maintenance manual in English or Arabic",
        "Recommended two-year spares holding, priced at order stage",
      ],
      relatedIndustries: ["utilities-and-substations", "oil-and-gas", "data-centers"] as IndustrySlug[],
      faq: [
        {
          q: "Switchmode or SCR — which should we specify?",
          a: "Switchmode is the default for new work: modular N+1 redundancy, hot-swappable rectifiers, high power factor and a far smaller footprint. SCR remains appropriate where the specification mandates it, where an existing fleet needs to stay consistent, or where the DC bus feeds unusually noisy inductive loads. If your specification is silent, we quote switchmode and explain the trade-off in the offer.",
        },
        {
          q: "How do you size the battery?",
          a: "To IEEE 485 for lead-acid and IEEE 1115 for nickel-cadmium. We need the duty cycle — continuous load, momentary loads and their durations — plus the required autonomy, the minimum acceptable end-of-discharge voltage and the design ambient temperature. The calculation is issued with the quotation so your consultant can review the assumptions rather than take the rating on trust.",
        },
        {
          q: "Can you match a charger to an existing installation?",
          a: "Usually, yes. Send the nameplate of the existing unit, the battery details and a photograph of the DC distribution section. Extensions and like-for-like replacements are common, and matching the alarm contact arrangement is often more important than matching the physical dimensions.",
        },
        {
          q: "Which alarms can be mapped into our SCADA?",
          a: "Every standard alarm is available as a potential-free changeover contact, and the same points are exposed over Modbus RTU, Modbus TCP, DNP3 and SNMP. A point list is issued with the submittal so the SCADA integrator can build the database before the panel ships. IEC 61850 is offered on selected ranges for fully digital substations.",
        },
      ],
    },

    "paging-mass-notification": {
      name: "Paging & mass notification",
      shortName: "Paging & notification",
      meta: {
        title: "Paging & mass notification systems for Saudi Arabia — IP, PA/GA and Ex-rated",
        description:
          "IP/SIP and 70 V / 100 V line paging, talk-back and mass notification to NFPA 72 and UL 2572, with ATEX/IECEx and Class I Div 1/2 field devices for plants, hospitals, schools and government buildings.",
      },
      tagline: "Announcements people can act on, in places that are loud, large or on fire.",
      summary:
        "IP and analogue paging, talk-back, public address and general alarm, and mass notification — from the zone controller in the rack to the explosion-proof horn on the pipe rack.",
      imageAlt: "Illuminated fibre-optic strands representing the IP backbone behind a modern paging and notification system",
      intro: [
        "A notification system is only worth what people understand when it is running. Intelligibility, not loudness, is what moves people to a muster point — which is why the specification that matters is IEC 60268-16, and why coverage is modelled before anything is ordered.",
        "We supply head-end equipment, field devices and hazardous-area products from US manufacturers, with the certification pack and the coverage calculation your authority having jurisdiction will ask for.",
      ],
      highlights: [
        {
          title: "Intelligibility designed, not hoped for",
          body: "Coverage is modelled to a speech transmission index target before the order, taking plant noise, reverberation and speaker spacing into account. The calculation is issued with the submittal and verified again during commissioning.",
        },
        {
          title: "Hazardous area as a first-class case",
          body: "Class I Division 1 and 2, Zone 1 and Zone 2 field devices with ATEX and IECEx certification, in 316 stainless, glass-reinforced polyester and copper-free aluminium enclosures rated to NEMA 4X / IP66.",
        },
        {
          title: "Supervised down to the last speaker",
          body: "Line supervision detects open circuit, short circuit and earth fault on every zone, with pilot-tone monitoring to the end-of-line. A failed branch raises an alarm instead of being discovered during a drill.",
        },
        {
          title: "Talks to the systems already on site",
          body: "SIP and VoIP integration with the PBX, dry-contact or protocol interface to the fire alarm panel, two-way radio gateway, and Modbus/OPC into the DCS so a process event can trigger a message.",
        },
      ],
      specGroups: [
        {
          title: "System architecture",
          rows: [
            { label: "Topologies", value: "IP/SIP over existing LAN, 70 V / 100 V constant-voltage line, or hybrid" },
            { label: "Zones", value: "2 to 500+, expandable by adding controllers" },
            { label: "Call types", value: "All-call, group, zone page, talk-back, pre-recorded message, tone and alarm broadcast" },
            { label: "Priority", value: "Multi-level priority with pre-emption and message queueing" },
            { label: "Scheduling", value: "Time-of-day broadcasts and shift signals with NTP synchronisation" },
          ],
        },
        {
          title: "Head-end equipment",
          rows: [
            { label: "Amplifiers", value: "60 W to 1200 W per zone, 70 V and 100 V line" },
            { label: "Redundancy", value: "N+1 amplifier standby with automatic changeover" },
            { label: "Line supervision", value: "Open, short and earth fault; 20 kHz pilot-tone end-of-line monitoring" },
            { label: "Backup power", value: "Integral 24 VDC or 48 VDC charger and battery, autonomy to the project standard" },
            { label: "Mounting", value: "19-inch rack or wall cabinet, IP21 to IP55" },
          ],
        },
        {
          title: "Field devices",
          rows: [
            { label: "Horn loudspeakers", value: "15, 25, 30 and 60 W re-entrant and paging projectors" },
            { label: "Indoor speakers", value: "Ceiling and wall-mount, 6 W, with fire-rated back boxes where required" },
            { label: "IP speakers", value: "Amplified PoE / PoE+ units with onboard DSP" },
            { label: "Visual devices", value: "LED beacons, xenon strobes and combination sounder/beacons" },
            { label: "Call stations", value: "Weatherproof handsets, noise-cancelling microphones, guard and gate stations" },
          ],
        },
        {
          title: "Hazardous area certification",
          rows: [
            { label: "North American", value: "Class I Division 1 and Division 2, Groups B, C and D" },
            { label: "IEC / ATEX", value: "Zone 1 and Zone 2, Group IIB + H₂ and IIC; Ex d, Ex e and Ex ia protection concepts" },
            { label: "Enclosure materials", value: "316 stainless steel, glass-reinforced polyester, copper-free aluminium" },
            { label: "Ingress & temperature", value: "NEMA 4X / IP66 or IP67; T4 and T5 classes; −40 °C to +70 °C" },
          ],
        },
        {
          title: "Performance & integration",
          rows: [
            { label: "Intelligibility target", value: "STI ≥ 0.50 (CIS ≥ 0.70) per IEC 60268-16 for emergency messaging" },
            { label: "SPL design", value: "10–15 dB above measured ambient, referenced to L90" },
            { label: "Telephony", value: "SIP / VoIP PBX registration, DECT paging, analogue trunk options" },
            { label: "Life safety", value: "Interface to fire alarm control panel for NFPA 72 emergency communications" },
            { label: "Process & security", value: "Modbus TCP, OPC, dry contacts; access control and CCTV event triggers" },
          ],
        },
      ],
      standards: [
        { code: "NFPA 72", title: "National Fire Alarm and Signaling Code — emergency communications systems" },
        { code: "UL 2572", title: "Mass notification systems" },
        { code: "UL 1480", title: "Speakers for fire protective signalling" },
        { code: "UL 1711", title: "Amplifiers for fire protective signalling" },
        { code: "IEC 60849 / ISO 7240-19", title: "Sound systems for emergency purposes" },
        { code: "IEC 60268-16", title: "Objective rating of speech intelligibility by speech transmission index" },
        { code: "EN 54-16 / EN 54-24", title: "Voice alarm control equipment and loudspeakers" },
        { code: "IEC 60079 series", title: "Explosive atmospheres — equipment protection concepts" },
        { code: "IEC 60529 / NEMA 250", title: "Degrees of protection provided by enclosures" },
        { code: "SASO / SABER", title: "Saudi conformity registration for regulated electrical equipment" },
      ],
      applications: [
        "Plant-wide public address and general alarm (PA/GA)",
        "Evacuation, shelter-in-place and all-clear messaging",
        "Process-area talk-back between field and control room",
        "School lockdown, all-call and bell scheduling",
        "Hospital code announcements, paging and wayfinding",
        "Terminal, car park and campus paging",
        "Offshore platform and marine terminal communications",
        "Perimeter and gatehouse announcement for secure sites",
      ],
      deliverables: [
        "Zone plan and speaker layout drawing",
        "Sound pressure level and speech intelligibility coverage calculation",
        "Amplifier loading schedule and battery autonomy calculation",
        "Cable schedule and loop supervision diagram",
        "Hazardous-area certificate pack with certificate numbers quoted per device",
        "Commissioning records including measured intelligibility results",
        "Operation and maintenance manual in English or Arabic",
      ],
      relatedIndustries: [
        "oil-and-gas",
        "hospitals-and-schools",
        "government-buildings",
        "data-centers",
      ] as IndustrySlug[],
      faq: [
        {
          q: "How do you prove the system will be intelligible?",
          a: "Coverage is modelled in the manufacturer's prediction software using your room dimensions, surface treatments and measured or estimated ambient noise, targeting a speech transmission index of at least 0.50 for emergency messaging. The model is issued with the submittal, and the figure is measured again at commissioning so there is a record of the as-built result.",
        },
        {
          q: "Can the system use our existing network?",
          a: "IP systems run over standard switched Ethernet with QoS applied to the voice VLAN, and PoE or PoE+ powers the amplified speakers. Where the network is not under your control, or where availability requirements rule it out, we quote a parallel 70 V / 100 V line system instead. Hybrid designs — IP backbone, analogue field distribution — are common on large sites.",
        },
        {
          q: "Do you supply explosion-proof devices for a Zone 1 area?",
          a: "Yes. Horn loudspeakers, beacons, call stations and handsets are available with ATEX and IECEx certification for Zone 1 and Zone 2, and with Class I Division 1 and Division 2 listings for projects written to the NEC. Certificate numbers, protection concept, gas group and temperature class are quoted per device on the submittal.",
        },
        {
          q: "How does it interface with the fire alarm system?",
          a: "The usual arrangement is a supervised dry-contact interface from the fire alarm control panel into the notification head-end, with the panel holding the highest message priority. Protocol-level integration is available where the two systems come from compatible families. Which architecture is acceptable is ultimately a question for the authority having jurisdiction, and we will state the assumption in the submittal.",
        },
      ],
    },

    "ups-power-quality": {
      name: "UPS & power quality",
      shortName: "UPS & power quality",
      meta: {
        title: "UPS & power quality equipment for Saudi Arabia — online double conversion",
        description:
          "Online double-conversion UPS, industrial DC-link UPS, active harmonic filters, static transfer switches and voltage regulation to IEC 62040 and IEEE 519. Range currently expanding.",
      },
      tagline: "Clean, continuous AC for the loads that cannot ride through a dip.",
      summary:
        "Online double-conversion UPS, industrial UPS fed from the station battery, and the power-quality equipment that keeps harmonics and voltage variation inside specification.",
      imageAlt: "Riyadh skyline at dusk, representing the commercial and industrial loads served by UPS and power-quality equipment",
      status: {
        label: "Range expanding",
        body: "This line is being added as manufacturer agreements are completed. We can already quote from our partners' current catalogues — tell us the load and the ride-through you need and we will come back with a sized offer and a lead time.",
      },
      intro: [
        "A battery charger holds the DC system up. A UPS holds everything that still expects clean, continuous AC: the control room workstations, the DCS, the fire and gas panel, the network core and the security system.",
        "This range is being built out through our existing manufacturer relationships. The documentation standard is the same as the rest of the catalogue — sized offer, compliance statement, conformity registration — and the lead time is confirmed before you commit.",
      ],
      highlights: [
        {
          title: "True online double conversion",
          body: "VFI-SS-111 classification under IEC 62040-3: the load is isolated from input voltage and frequency variation at all times, not only during an outage.",
        },
        {
          title: "Industrial UPS from the station battery",
          body: "Where a substation or plant already has a sized DC system, a DC-link UPS avoids a second battery, a second charger and a second maintenance regime.",
        },
        {
          title: "Harmonics inside IEEE 519",
          body: "Low input distortion as standard, plus active harmonic filters where existing non-linear load already pushes the point of common coupling out of limits.",
        },
        {
          title: "Parallel redundancy that scales",
          body: "Units parallel for capacity or redundancy, with maintenance bypass arranged so a module can be isolated without dropping the critical bus.",
        },
      ],
      specGroups: [
        {
          title: "UPS — typical ratings",
          rows: [
            { label: "Power range", value: "1 kVA to 500 kVA; larger by parallel configuration" },
            { label: "Topology", value: "Online double conversion, VFI-SS-111 per IEC 62040-3" },
            { label: "Input", value: "230/400 V, 3-phase, 60 Hz (50 Hz available); wide input window" },
            { label: "Input distortion", value: "< 3 % THDi at full linear load" },
            { label: "Output distortion", value: "< 2 % THDu linear, < 5 % non-linear" },
            { label: "Efficiency", value: "Up to 96.5 % in double conversion; higher in eco mode where the load permits" },
            { label: "Parallel", value: "Up to 4 units for capacity or N+1 redundancy" },
            { label: "Bypass", value: "Static and maintenance bypass as standard" },
          ],
        },
        {
          title: "Power quality equipment",
          rows: [
            { label: "Active harmonic filters", value: "Shunt-connected, sized on measured spectrum at the point of common coupling" },
            { label: "Static transfer switches", value: "Sub-cycle transfer between two independent sources" },
            { label: "Voltage regulation", value: "Automatic voltage regulators and stabilisers for weak or long feeders" },
            { label: "Isolation transformers", value: "K-rated and electrostatically screened options for sensitive loads" },
          ],
        },
      ],
      standards: [
        { code: "IEC 62040-1", title: "UPS — general and safety requirements" },
        { code: "IEC 62040-2", title: "UPS — electromagnetic compatibility" },
        { code: "IEC 62040-3", title: "UPS — performance and test requirements, VFI classification" },
        { code: "IEEE 519", title: "Harmonic control in electric power systems" },
        { code: "UL 1778", title: "Uninterruptible power systems" },
        { code: "IEC 61000 series", title: "Electromagnetic compatibility" },
        { code: "SASO / SABER", title: "Saudi conformity registration for regulated electrical equipment" },
      ],
      applications: [
        "Control room workstations, DCS and SCADA servers",
        "Fire and gas detection and emergency shutdown panels",
        "Network core, access layer and telecom rooms",
        "Security, access control and CCTV head-end",
        "Laboratory and medical equipment on essential supplies",
        "Harmonic mitigation at the point of common coupling",
      ],
      deliverables: [
        "Load schedule review and UPS sizing with autonomy calculation",
        "Single-line diagram showing bypass and maintenance isolation",
        "Harmonic study where an active filter is proposed",
        "Battery sizing and layout, including ventilation requirements",
        "Compliance statement against the project specification",
        "Operation and maintenance manual in English or Arabic",
      ],
      relatedIndustries: ["data-centers", "hospitals-and-schools", "government-buildings"] as IndustrySlug[],
      faq: [
        {
          q: "When is this range available to order?",
          a: "We can quote now from our manufacturers' current catalogues; the published range on this page is being finalised as distribution agreements complete. Send the load schedule and the required autonomy and we will confirm model, price and lead time in writing.",
        },
        {
          q: "Should we use a UPS or extend the DC system?",
          a: "If the loads are native DC — relays, SCADA gateways, telecom — extending the station DC system is usually cheaper and simpler to maintain. If they expect clean AC and cannot tolerate a transfer notch, a true online UPS is the right answer. On sites that already have a sized station battery, a DC-link industrial UPS gives you AC output without a second battery room.",
        },
        {
          q: "Do you size active harmonic filters from a measurement?",
          a: "Yes. A filter sized from a nameplate assumption rather than a measured spectrum at the point of common coupling is a gamble. We would rather see a week of power-quality logging before quoting, and we will say so in the offer if the data is not available.",
        },
      ],
    },
  },
};

export type ProductsCopy = typeof products;
