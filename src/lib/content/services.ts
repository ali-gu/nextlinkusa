import type { IndustrySlug } from "@/lib/catalog";

export const services = {
  index: {
    meta: {
      title: "Services — telecom, mission-critical, networks, DC systems, fiber and subsea",
      description:
        "Eight core service verticals: telecom services, mission-critical communication, networks, IP telephony, DC systems, fiber optics, off-shore comms and submarine fiber — designed, installed, commissioned and supported.",
    },
    eyebrow: "Services overview",
    title: "Our core service verticals, held under one contract",
    lede: "Each of these stands on its own, but they rarely arrive alone. A control room needs radio, networks, telephony and DC power before it needs anything else, and the interfaces between them are where projects usually come apart. Holding them together is the point.",
    note: "Figures on these pages describe what we routinely deliver. Anything specific to your site is confirmed from a survey before it is priced.",
  },

  delivery: {
    eyebrow: "Every line, every stage",
    title: "What we do on each of them",
    body: "The same five stages apply whichever service line a project sits in. You can take all of them or stop wherever your own team picks up.",
    items: {
      design: {
        name: "Survey & design",
        tagline: "Measure first, then draw",
        body: "Site survey, measured conditions, calculations against the governing standard, and a design package your consultant can review rather than take on trust.",
        includes: [
          "Site survey with measured, recorded conditions",
          "Design calculations against the named standard",
          "Single-line and layout drawings, cable schedules, point lists",
          "Clause-by-clause compliance statement, exceptions included",
          "Budget estimate and programme",
        ],
      },
      install: {
        name: "Installation & commissioning",
        tagline: "Qualified hands, written procedures",
        body: "Installed by qualified technicians under approved method statements, then commissioned and tested to a procedure agreed before anyone mobilises.",
        includes: [
          "Method statements, risk assessments and permits to work",
          "Installation by qualified, hazardous-area competent technicians",
          "Commissioning to an approved written procedure",
          "Site acceptance testing witnessed and countersigned",
          "As-built drawings and configuration backups",
        ],
      },
      maintenance: {
        name: "Maintenance contracts",
        tagline: "A schedule, a record, a predictable cost",
        body: "Preventive maintenance built on the standards that govern the equipment, with findings trended so degradation shows up before it becomes an outage.",
        includes: [
          "Schedules aligned to IEEE 450, IEEE 1188 and manufacturer intervals",
          "Battery impedance and capacity testing, trended against commissioning",
          "Zone-by-zone functional testing with intelligibility spot checks",
          "Fiber re-certification and OTDR comparison against as-built traces",
          "Written condition report with a prioritised action list",
          "Fixed annual price and an agreed response time",
        ],
      },
      spares: {
        name: "Spares & consumables",
        tagline: "The right parts, in the right place",
        body: "Critical spares sized on how long it takes to reach the site, agreed at order stage while lead times are short and the discount is best.",
        includes: [
          "Recommended holding sized on travel time and shutdown windows",
          "Rectifier modules, control cards, radios, optics and patch components",
          "Battery replacement, including removal of the old set",
          "Hazardous-area replacement parts with matching certification",
          "Obsolescence notices passed on as manufacturers issue them",
        ],
      },
      support: {
        name: "Technical support",
        tagline: "Someone who already knows your site",
        body: "Support does not start with you explaining what you have. Project records stay with the account, so the engineer answering has the design and the commissioning results in front of them.",
        includes: [
          "Named technical contact reachable in your working hours",
          "Remote diagnosis before anyone is dispatched",
          "Firmware and configuration changes with a documented record",
          "Warranty administration handled with the manufacturer",
          "Operator and maintenance technician training, on site or remote",
          "24/7 response available under contract",
        ],
      },
    },
  },

  commitments: {
    eyebrow: "What we commit to",
    title: "The things you can hold us to",
    rows: [
      { label: "Acknowledgement of a new enquiry", value: "Same working day" },
      { label: "Budget estimate", value: "1–2 working days" },
      { label: "Scoped proposal with calculations", value: "2–5 working days after survey" },
      { label: "Support response", value: "Within 4 working hours" },
      { label: "Emergency response under contract", value: "By agreement, 24/7 available" },
    ],
    note: "Programme and mobilisation dates are confirmed per project and depend on scope, access and permit lead times.",
  },

  items: {
    "telecom-services": {
      name: "Telecom services",
      meta: {
        title: "Telecom services — RF deployment, site acquisition and 24/7 NOC operations",
        description:
          "Full RF deployment, site acquisition and 24/7 NOC operations, with site surveys, tower works, transmission links, telecom power and grounding for carrier and enterprise networks.",
      },
      tagline: "The physical layer everything else depends on.",
      summary:
        "Full RF deployment, site acquisition and 24/7 NOC operations — with the surveys, tower works, transmission and earthing underneath, built and commissioned to standard.",
      imageAlt: "Telecommunications tower with microwave and panel antennas against a clear sky",
      intro: [
        "Almost every network fault that takes days to find turns out to be physical: a corroded connector, an earth that was never bonded, a mast that moved, a feeder with water in it. The physical layer is the cheapest thing to get right at build and the most expensive to fix later.",
        "We acquire, build, commission and operate telecom infrastructure — site acquisition, RF deployment, towers and masts, transmission links, telecom power and earthing — hand over the sweep traces and earth readings that prove it was done properly, and keep it running from a 24/7 network operations centre.",
      ],
      highlights: [
        {
          title: "Structural work done to a code",
          body: "Tower and mast installations designed and inspected against TIA-222, with loading assessed before anything new is mounted rather than after the structure starts to flex.",
        },
        {
          title: "Earthing that is measured, not assumed",
          body: "Earth electrode resistance measured and recorded, bonding verified to IEEE 1100 practice, and surge protection coordinated through the whole path rather than bolted on at one end.",
        },
        {
          title: "Antenna systems swept and documented",
          body: "Return loss and distance-to-fault sweeps on every feeder at handover, filed as the baseline that future fault-finding gets compared against.",
        },
        {
          title: "Operated around the clock",
          body: "24/7 NOC monitoring of the sites we build and the networks we take over, with alarms triaged and faults dispatched before they turn into outages.",
        },
      ],
      scopeGroups: [
        {
          title: "RF deployment and operations",
          rows: [
            { label: "Site acquisition", value: "Candidate site search, lease and permitting support through to a buildable site" },
            { label: "RF deployment", value: "RF design, installation, integration, drive testing and optimisation from first site to full rollout" },
            { label: "NOC operations", value: "24/7 network operations centre monitoring, alarm handling and fault dispatch" },
          ],
        },
        {
          title: "Survey and assessment",
          rows: [
            { label: "Site surveys", value: "Physical, RF and power surveys with measured, recorded conditions" },
            { label: "Structural assessment", value: "Loading review against TIA-222 before additional mounts are approved" },
            { label: "Coverage and path", value: "RF coverage prediction and microwave path profiling with clearance analysis" },
            { label: "Condition audits", value: "Existing-site audits with photographic records and a prioritised defect list" },
          ],
        },
        {
          title: "Installation",
          rows: [
            { label: "Structures", value: "Monopole, lattice, rooftop and wall-mounted installations" },
            { label: "Antenna systems", value: "Panel, microwave and omnidirectional mounting, alignment and weatherproofing" },
            { label: "Feeders", value: "Coaxial and hybrid feeder routing, grounding kits, sweep testing" },
            { label: "Equipment", value: "Cabinet and shelter fit-out, rack build, cable management and labelling" },
            { label: "Earthing", value: "Electrode systems, bonding networks and coordinated surge protection" },
          ],
        },
        {
          title: "Transmission",
          rows: [
            { label: "Microwave", value: "Licensed and unlicensed links, alignment, capacity and availability verification" },
            { label: "Fiber backhaul", value: "Terminations, patching and end-to-end optical budget verification" },
            { label: "Synchronisation", value: "Timing distribution and verification where the network requires it" },
          ],
        },
        {
          title: "Power and environment",
          rows: [
            { label: "Telecom DC", value: "−48 VDC rectifier plant, distribution and battery installation" },
            { label: "Standby", value: "Generator and transfer-switch interfacing, alarm integration" },
            { label: "Environmental", value: "Cooling, ventilation and temperature alarm installation" },
            { label: "Monitoring", value: "Alarm points mapped to the operator's existing NOC platform" },
          ],
        },
      ],
      standards: [
        { code: "TIA-222", title: "Structural standard for antenna supporting structures" },
        { code: "ANSI/TIA-568", title: "Commercial building telecommunications cabling" },
        { code: "ANSI/TIA-607", title: "Bonding and grounding for telecommunications" },
        { code: "IEEE 1100", title: "Powering and grounding electronic equipment" },
        { code: "IEEE 81", title: "Measuring earth resistivity and ground impedance" },
        { code: "NFPA 70 (NEC)", title: "Electrical installation requirements" },
        { code: "IEC 60529", title: "Degrees of protection provided by enclosures" },
        { code: "IEC 62305", title: "Protection against lightning" },
      ],
      applications: [
        "Full RF deployment, from site acquisition to optimisation",
        "24/7 NOC monitoring and fault management",
        "Greenfield and co-location cell site build",
        "Microwave backhaul links and ring closure",
        "Rooftop and in-building telecom infrastructure",
        "Substation and plant telecom rooms",
        "Remote site power, earthing and environmental works",
        "Site audits and defect remediation programmes",
      ],
      deliverables: [
        "Survey report with measured site conditions and photographs",
        "Structural loading assessment where new mounts are added",
        "Installation drawings, cable schedules and labelling schedule",
        "Feeder sweep traces and antenna alignment records",
        "Earth resistance readings and bonding verification records",
        "Commissioning and site acceptance test records, countersigned",
        "As-built documentation and recommended spares list",
      ],
      relatedIndustries: ["utilities-and-substations", "oil-and-gas", "government-buildings", "transportation"] as IndustrySlug[],
      faq: [
        {
          q: "Can you work on a live site?",
          a: "Usually, yes. Most of our work on operational networks happens under permit with agreed isolation and a rollback plan written before mobilisation. Where a change genuinely cannot be made live we will say so at proposal stage rather than discover it on the night.",
        },
        {
          q: "Do you do the structural work as well as the electronics?",
          a: "We carry out mounting, feeder and antenna works and will assess loading against TIA-222 before adding to a structure. Structural strengthening or foundation design is referred to a qualified structural engineer — we will tell you when that point is reached rather than take a view on it ourselves.",
        },
        {
          q: "What do you hand over at the end?",
          a: "Sweep traces for every feeder, earth resistance readings, alignment records, as-built drawings, a labelling schedule and the commissioning test sheets, countersigned on site. That package is what makes the next fault a half-day job instead of a week.",
        },
      ],
    },

    "mission-critical-communication": {
      name: "Mission-critical communication",
      meta: {
        title: "Mission-critical communication — TETRA, P25 and PA/GA systems",
        description:
          "Zero-downtime TETRA and P25 secure voice and data, public address and general alarm, voice evacuation and mass notification, including ATEX and IECEx hazardous-area devices.",
      },
      tagline: "Messages people can act on, in places that are loud, large or on fire.",
      summary:
        "Zero-downtime TETRA and P25 secure voice and data systems, plus PA/GA, voice evacuation, dispatch and mass notification — including hazardous-area field devices.",
      imageAlt: "Modern towers and a telecommunications mast, representing the facilities served by mission-critical communications",
      intro: [
        "A communication system is only worth what people understand when it is running. Intelligibility, not loudness, moves people to a muster point — which is why the specification that matters is IEC 60268-16, and why coverage is modelled and then measured rather than assumed.",
        "We design, install and commission TETRA and P25 radio, secure voice and data, and voice alarm systems for sites where the message has consequences: plants, terminals, utilities, transport networks and control rooms.",
      ],
      highlights: [
        {
          title: "Intelligibility designed, then proven",
          body: "Coverage modelled to a speech transmission index target before installation, taking plant noise, reverberation and speaker spacing into account, then measured again at commissioning and recorded.",
        },
        {
          title: "Hazardous area as a first-class case",
          body: "Zone 1, Zone 2, Class I Division 1 and 2 devices with ATEX and IECEx certification, installed and inspected to IEC 60079-14 by competent personnel, with certificate numbers recorded per device.",
        },
        {
          title: "Supervised to the last speaker",
          body: "Line supervision detects open circuit, short circuit and earth fault on every zone, with end-of-line monitoring. A failed branch raises an alarm rather than being discovered during a drill.",
        },
        {
          title: "Interfaced to what is already there",
          body: "Fire alarm panels, DCS and ESD, access control, CCTV, PBX and two-way radio. A process event can raise the right message in the right area without an operator in the loop.",
        },
      ],
      scopeGroups: [
        {
          title: "Radio systems",
          rows: [
            { label: "Technologies", value: "TETRA and P25 as standard; DMR and conventional analogue where the site requires" },
            { label: "Secure voice and data", value: "Encryption, authentication and short-data services for field teams" },
            { label: "Coverage", value: "Prediction modelling, drive and walk testing, in-building DAS and bi-directional amplifiers" },
            { label: "Dispatch", value: "Console positions, talkgroup design, recording and interoperability gateways" },
            { label: "Infrastructure", value: "Repeaters, combiners, antenna systems and link planning" },
          ],
        },
        {
          title: "Public address and general alarm",
          rows: [
            { label: "Architecture", value: "IP/SIP over the facility network, 70 V / 100 V constant-voltage line, or hybrid" },
            { label: "Zones", value: "2 to 500+, expandable without replacing the head end" },
            { label: "Amplification", value: "60 W to 1200 W per zone with N+1 standby and automatic changeover" },
            { label: "Supervision", value: "Open, short and earth fault; pilot-tone end-of-line monitoring" },
            { label: "Backup power", value: "Integral charger and battery sized to the project standby and alarm duty" },
          ],
        },
        {
          title: "Field devices",
          rows: [
            { label: "Loudspeakers", value: "Re-entrant horns 15–60 W, paging projectors, ceiling and wall units" },
            { label: "Visual devices", value: "LED beacons, xenon strobes and combination sounder/beacons, synchronised per field of view" },
            { label: "Stations", value: "Weatherproof handsets, noise-cancelling call points, guard and gate stations" },
            { label: "Hazardous area", value: "Ex d, Ex e and Ex ia; 316 stainless, GRP and copper-free aluminium; NEMA 4X / IP66" },
          ],
        },
        {
          title: "Performance and integration",
          rows: [
            { label: "Intelligibility", value: "STI ≥ 0.50 (CIS ≥ 0.70) per IEC 60268-16 for emergency messaging" },
            { label: "Sound pressure", value: "10–15 dB above measured ambient, referenced to L90, capped at 110 dBA at occupied positions" },
            { label: "Life safety", value: "Supervised interface to the fire alarm panel, which holds highest message priority" },
            { label: "Process and security", value: "Modbus TCP, OPC and dry contacts; access control and CCTV event triggers" },
            { label: "Messaging", value: "Pre-recorded sets for evacuation, shelter-in-place, lockdown, test and all-clear" },
          ],
        },
      ],
      standards: [
        { code: "NFPA 72", title: "National Fire Alarm and Signaling Code, Chapter 24 — emergency communications" },
        { code: "NFPA 1221", title: "Installation and maintenance of emergency services communications systems" },
        { code: "UL 2572", title: "Mass notification systems" },
        { code: "UL 1480 / UL 1711", title: "Speakers and amplifiers for fire protective signalling" },
        { code: "IEC 60268-16", title: "Objective rating of speech intelligibility by speech transmission index" },
        { code: "IEC 60849 / ISO 7240-19", title: "Sound systems for emergency purposes" },
        { code: "EN 54-16 / EN 54-24", title: "Voice alarm control equipment and loudspeakers" },
        { code: "TIA-102", title: "P25 digital land mobile radio" },
        { code: "IEC 60079 series", title: "Explosive atmospheres — equipment and installation" },
      ],
      applications: [
        "Plant-wide public address and general alarm (PA/GA)",
        "Evacuation, shelter-in-place and all-clear messaging",
        "Control room to field talk-back",
        "Site-wide radio coverage and in-building DAS",
        "Station, terminal and campus emergency announcement",
        "Terminal, car park and marine berth communications",
        "Control room dispatch and interoperability gateways",
      ],
      deliverables: [
        "Zone plan, speaker layout and device schedule",
        "Predicted sound pressure and speech intelligibility calculation",
        "Amplifier loading schedule and battery autonomy calculation",
        "Cable schedule and loop supervision diagram",
        "Hazardous-area certificate pack, per device type",
        "Measured intelligibility results recorded at commissioning",
        "Message schedule with approved scripts, and operator training",
      ],
      relatedIndustries: ["oil-and-gas", "utilities-and-substations", "government-buildings", "transportation"] as IndustrySlug[],
      faq: [
        {
          q: "How do you prove the system will be intelligible?",
          a: "Coverage is modelled using your room dimensions, surface treatments and measured or estimated ambient noise, targeting a speech transmission index of at least 0.50 for emergency messaging. The model is issued with the design, and the figure is measured again at commissioning so there is a record of the as-built result rather than the intended one.",
        },
        {
          q: "Can the same system handle evacuation and day-to-day paging?",
          a: "Usually it should — a system used daily is a system known to work. Routine paging runs at the lowest priority and is pre-empted instantly by fire or lockdown messaging. Where the authority having jurisdiction requires physical separation of the life-safety path, we design that instead and state why.",
        },
        {
          q: "Do you install Ex-certified devices yourselves?",
          a: "Yes, with installation and inspection to IEC 60079-14 by competent personnel. The submittal records protection concept, gas group, temperature class, ambient range and certificate number for each device type, which is what an inspector will ask for.",
        },
      ],
    },

    networks: {
      name: "Networks",
      meta: {
        title: "Transmission and IP networks — DWDM, IP/MPLS, LAN/WAN and SD-WAN",
        description:
          "Long-haul DWDM, optical amplification, IP/MPLS backbones, scalable LAN/WAN, SD-WAN and zero-trust cybersecurity for carrier, utility and enterprise networks.",
      },
      tagline: "The network the control system is allowed to depend on.",
      summary:
        "Long-haul DWDM, IP/MPLS backbones, scalable LAN/WAN and SD-WAN, secured with zero-trust cybersecurity — designed for availability first and documented well enough to troubleshoot at 3 a.m.",
      imageAlt: "Fibre-optic strands carrying light, representing network backbone infrastructure",
      intro: [
        "An office network that drops for thirty seconds is an annoyance. The same thirty seconds on a network carrying protection signalling, a DCS or a nurse-call system is an incident report. The difference is not equipment — it is topology, segmentation and whether anyone wrote down how it works.",
        "We design, build and support the whole stack — long-haul optical transport, IP/MPLS backbone and aggregation, and the LAN, WAN and SD-WAN at the edge — where availability is the requirement rather than the aspiration.",
      ],
      highlights: [
        {
          title: "Long-haul DWDM",
          body: "High-capacity optical transport with multi-wavelength systems over long distances, with the wavelength plan and optical budget issued at design.",
        },
        {
          title: "Boosters and amplifiers",
          body: "Optical boosters, pre-amplifiers and inline EDFA amplifiers to extend span reach, placed from a calculated power budget rather than a rule of thumb.",
        },
        {
          title: "IP networks",
          body: "Scalable IP/MPLS backbone and aggregation networks for resilient service delivery, with redundant paths tested by pulling links at commissioning.",
        },
        {
          title: "Zero-trust security, IT and OT separated",
          body: "Every user, device and flow authenticated and authorised, with segmentation to IEC 62443 zones and conduits so a compromise on the business network does not reach the control system.",
        },
      ],
      scopeGroups: [
        {
          title: "Transmission",
          rows: [
            { label: "Long-haul DWDM", value: "Multi-wavelength optical transport, wavelength planning and channel commissioning" },
            { label: "Amplification", value: "Optical boosters, pre-amplifiers and inline EDFA amplifiers to extend span reach" },
            { label: "IP/MPLS", value: "Backbone and aggregation design with traffic engineering and fast reroute" },
          ],
        },
        {
          title: "Design",
          rows: [
            { label: "Topology", value: "Core, distribution and access design with redundancy sized to the availability target" },
            { label: "Addressing", value: "IP addressing, VLAN and routing design with a documented plan" },
            { label: "Segmentation", value: "IEC 62443 zone and conduit model for OT and IT separation" },
            { label: "Capacity", value: "Traffic profiling and sizing with headroom stated explicitly" },
          ],
        },
        {
          title: "Infrastructure",
          rows: [
            { label: "LAN/WAN", value: "Layer 2 and Layer 3 campus, enterprise and industrial deployments, vendor-independent" },
            { label: "SD-WAN", value: "Multi-site SD-WAN with application-aware routing and centralised policy" },
            { label: "Industrial Ethernet", value: "DIN-rail switches, ring redundancy, −40 to +75 °C ranges, redundant DC feeds" },
            { label: "Wireless", value: "Site-survey-based Wi-Fi design, deployment and validation survey" },
            { label: "Structured cabling", value: "Copper and fiber to ANSI/TIA-568, tested and certified" },
            { label: "Data centre", value: "Containment, pathways and cabling to TIA-942" },
          ],
        },
        {
          title: "Resilience and security",
          rows: [
            { label: "Redundancy", value: "Ring, mesh and dual-homed designs, with reconvergence verified by test" },
            { label: "Boundary control", value: "Firewalls, DMZ and unidirectional paths where the risk assessment requires" },
            { label: "Zero trust", value: "Identity-based access, micro-segmentation and continuous verification" },
            { label: "Access control", value: "Port security, authentication and role-based management access" },
            { label: "Time", value: "NTP or PTP distribution where event correlation depends on it" },
          ],
        },
        {
          title: "Operations",
          rows: [
            { label: "Monitoring", value: "SNMP and flow data into your existing NMS, with a published point list" },
            { label: "Backups", value: "Automated configuration backup and documented restore procedure" },
            { label: "Change control", value: "Method statements and rollback plans for every change on a live network" },
            { label: "Support", value: "Remote diagnosis, on-site attendance and 24/7 options under contract" },
          ],
        },
      ],
      standards: [
        { code: "ANSI/TIA-568", title: "Commercial building telecommunications cabling" },
        { code: "ANSI/TIA-942", title: "Telecommunications infrastructure for data centers" },
        { code: "IEEE 802.3", title: "Ethernet" },
        { code: "IEEE 802.1Q / 802.1X", title: "VLAN tagging and port-based network access control" },
        { code: "IEEE 802.11", title: "Wireless LAN" },
        { code: "IEC 62443", title: "Industrial communication networks — security for IACS" },
        { code: "IEC 61850", title: "Substation communication networks and systems" },
        { code: "IEEE 1588 (PTP)", title: "Precision time protocol" },
        { code: "ITU-T G.694 / G.698", title: "WDM spectral grids and multichannel optical interfaces" },
        { code: "IETF RFC 3031", title: "Multiprotocol label switching architecture" },
      ],
      applications: [
        "Long-haul DWDM transport and capacity upgrades",
        "IP/MPLS backbone and aggregation networks",
        "Multi-site LAN/WAN and SD-WAN rollouts",
        "Plant and campus network build and refresh",
        "IT and OT segmentation programmes",
        "Substation station bus and process bus networks",
        "Industrial wireless and site-wide Wi-Fi",
        "Network documentation and remediation after acquisition",
      ],
      deliverables: [
        "High- and low-level design with topology diagrams",
        "IP addressing, VLAN and routing plan",
        "Structured cabling test and certification results",
        "Failover test records showing measured reconvergence times",
        "Configuration backups and a documented restore procedure",
        "Monitoring point list delivered before handover",
        "As-built documentation and operator training",
      ],
      relatedIndustries: ["utilities-and-substations", "oil-and-gas", "government-buildings", "transportation"] as IndustrySlug[],
      faq: [
        {
          q: "Are you tied to a particular vendor?",
          a: "No. We design to the requirement and will work inside whatever framework or preferred-vendor agreement you already hold. Where we recommend a platform, the proposal says why, and what the alternative would have cost.",
        },
        {
          q: "Can you migrate a live network without downtime?",
          a: "Often, with dual-running and a staged cutover — and every change carries a written rollback plan. Where genuine downtime is unavoidable we will say so at design stage, quantify the window, and plan it around your operations rather than ours.",
        },
        {
          q: "Do you handle OT security as well as connectivity?",
          a: "We design and implement segmentation, boundary control and access control to the IEC 62443 zone and conduit model, and we document the boundary so it can be audited. Formal risk assessment and certification sit with your security function; we build to its output and tell you where our design assumes something it has not yet confirmed.",
        },
      ],
    },

    "ip-telephony": {
      name: "IP telephony",
      meta: {
        title: "IP telephony — cloud VoIP, UCaaS, SIP trunking and managed voice",
        description:
          "Enterprise cloud VoIP and UCaaS, SIP trunking migration from legacy PBX and ISDN, and managed voice operations with 24/7 support, designed with QoS and survivability.",
      },
      tagline: "Voice that still works when the internet does not.",
      summary:
        "Enterprise cloud VoIP, UCaaS and SIP trunking migration, with managed voice operations and 24/7 support — integrated with paging, radio and emergency systems.",
      imageAlt: "Telecommunications tower with microwave and panel antennas, representing the networks that carry IP telephony",
      intro: [
        "Telephony gets treated as a commodity until the day a site loses its uplink and discovers that the control room phone, the gatehouse and the emergency number all lived in someone else's cloud.",
        "We design and deliver IP telephony for sites where voice is operational rather than administrative: survivable, prioritised on the network, and wired into paging, radio and alarm systems instead of sitting beside them.",
      ],
      highlights: [
        {
          title: "Survivable by design",
          body: "Local call processing or a survivable branch gateway so internal and emergency calling continue through a WAN failure, tested by disconnecting the link at commissioning.",
        },
        {
          title: "Cloud VoIP and UCaaS",
          body: "Enterprise voice, messaging and meetings on one unified cloud platform, with survivable local options for the sites that cannot depend on the WAN.",
        },
        {
          title: "SIP trunking migration",
          body: "Move from legacy PBX and ISDN lines to resilient, cost-efficient SIP, with number porting, dial plan and failover routing planned before cutover.",
        },
        {
          title: "Managed voice operations",
          body: "Call quality monitoring, security and 24/7 support for your IP telephony, from engineers who already have your configuration on file.",
        },
      ],
      scopeGroups: [
        {
          title: "Platform",
          rows: [
            { label: "Call control", value: "Cloud VoIP and UCaaS, or hybrid and on-premise SIP platforms, vendor-independent" },
            { label: "Trunking", value: "SIP trunking migration from legacy PBX and ISDN, failover routing and least-cost policy" },
            { label: "Session border control", value: "SBC deployment for topology hiding, media handling and trunk security" },
            { label: "Survivability", value: "Local survivable gateways with defined behaviour during WAN loss" },
          ],
        },
        {
          title: "Endpoints and mobility",
          rows: [
            { label: "Desk and softphone", value: "Deployment, provisioning and directory integration" },
            { label: "DECT", value: "Site-survey-based multi-cell DECT design with roaming and handover verification" },
            { label: "Industrial", value: "Weatherproof and hazardous-area telephones for plant and perimeter" },
            { label: "Conferencing", value: "Room systems and control-room conference facilities" },
          ],
        },
        {
          title: "Integration",
          rows: [
            { label: "Paging", value: "Zone and all-call paging dialled directly from any handset" },
            { label: "Radio", value: "Gateways between telephony and LMR talkgroups" },
            { label: "Alarms", value: "Automated call-out and escalation triggered from DCS, BMS or fire systems" },
            { label: "Business systems", value: "Directory, presence and CRM integration where required" },
          ],
        },
        {
          title: "Quality and assurance",
          rows: [
            { label: "Network readiness", value: "Pre-deployment assessment of jitter, latency, loss and capacity" },
            { label: "QoS", value: "Voice VLAN, DSCP marking and queuing configured and verified end to end" },
            { label: "Codecs", value: "G.711 and G.729 as bandwidth and quality require, with transcoding where unavoidable" },
            { label: "Emergency calling", value: "Location handling, on-site notification and routing agreed in writing" },
            { label: "Recording", value: "Call recording and retention where the operation or regulator requires it" },
          ],
        },
        {
          title: "Managed voice operations",
          rows: [
            { label: "Monitoring", value: "Call quality monitoring with jitter, latency and loss alerting" },
            { label: "Security", value: "Toll-fraud protection, SBC policy and platform patching" },
            { label: "Support", value: "24/7 support with defined response times" },
          ],
        },
      ],
      standards: [
        { code: "RFC 3261 (SIP)", title: "Session Initiation Protocol" },
        { code: "ITU-T G.711 / G.729", title: "Voice codecs" },
        { code: "ITU-T G.114", title: "One-way transmission time (latency budget)" },
        { code: "IEEE 802.1p / 802.1Q", title: "Traffic class and VLAN tagging for QoS" },
        { code: "IEEE 802.3af/at", title: "Power over Ethernet for endpoints" },
        { code: "ETSI EN 300 175", title: "DECT" },
        { code: "ANSI/TIA-568", title: "Structured cabling supporting the endpoints" },
      ],
      applications: [
        "Cloud VoIP and UCaaS rollout",
        "Legacy PBX and ISDN to SIP trunking migration",
        "Managed voice with 24/7 support",
        "Plant and campus telephony replacement",
        "Control room and dispatch voice",
        "Hazardous-area and weatherproof plant telephones",
        "Multi-cell DECT for maintenance and security teams",
        "Contact centre and switchboard deployment",
        "Telephony-to-paging and telephony-to-radio integration",
      ],
      deliverables: [
        "Network readiness assessment with measured results",
        "Dial plan, numbering and call-routing design",
        "DECT coverage survey and post-installation validation",
        "QoS configuration documented across switching and WAN",
        "Failover test records, including WAN-loss behaviour",
        "Emergency calling and notification policy, agreed in writing",
        "User and administrator training, and as-built configuration",
      ],
      relatedIndustries: ["government-buildings", "transportation", "oil-and-gas", "utilities-and-substations"] as IndustrySlug[],
      faq: [
        {
          q: "Cloud or on-premise?",
          a: "It depends on what happens when the link drops. For an office, cloud is usually the right answer. For a control room, a plant or a transport operations centre, we would want local call processing or a survivable gateway so internal and emergency calling continue regardless. Hybrid covers most sites, and we will show you the failure modes of each before you choose.",
        },
        {
          q: "Can it talk to our paging and radio systems?",
          a: "Yes, and that integration is usually where the value is. Dialling a paging zone from any handset, patching a radio talkgroup into a conference bridge, or escalating a process alarm to a call group are all standard. They are designed in from the start rather than retrofitted.",
        },
        {
          q: "Will it work over our existing network?",
          a: "We assess that before committing — measured jitter, latency, loss and capacity, not a desk estimate. Where the network needs work first, that becomes part of the scope and is priced separately so you can see what is telephony and what is infrastructure.",
        },
      ],
    },

    "dc-chargers": {
      name: "DC systems",
      meta: {
        title: "DC power systems for telecom — rectifiers, chargers, battery backup and EMS",
        description:
          "Industrial AC/DC chargers and rectifiers, lithium-ion and VRLA battery backup, modular UPS and smart energy management for central offices, tower shelters, substations and off-grid sites.",
      },
      tagline: "The supply that keeps the network up when the AC goes away.",
      summary:
        "Industrial AC/DC rectifiers and chargers, lithium-ion and VRLA battery backup, modular UPS and smart energy management — sized, installed and maintained to IEEE standards.",
      imageAlt: "Telecommunications tower against a clear sky, typical of the assets served by DC power systems",
      intro: [
        "When the incoming AC supply fails, the radios, transmission equipment, protection relays and SCADA gateways all run from one place: the DC plant and its battery. The rectifiers and chargers that keep it there are the least visible items in the room and the ones with the least tolerance for being wrong.",
        "We supply, size, install and maintain DC power for central offices, tower shelters, substations and off-grid sites — industrial AC/DC chargers and rectifiers, lithium-ion and VRLA battery backup, modular UPS and smart energy management — against the standards your specification already references, and we issue the calculation rather than asking you to take the rating on trust.",
      ],
      highlights: [
        {
          title: "Industrial AC/DC chargers and rectifiers",
          body: "High-efficiency power conversion units for central offices and tower shelters, with N+1 modular redundancy and hot-swappable rectifiers.",
        },
        {
          title: "Battery backup and modular UPS",
          body: "Lithium-ion and VRLA power systems providing continuous operation during outages, with autonomy sized from your duty cycle to IEEE 485 rather than taken from a catalogue.",
        },
        {
          title: "Smart energy management (EMS)",
          body: "Remote telemetry integration and hybrid solar/grid management for off-grid sites, so rectifier, battery, generator and fuel status are visible from the NOC.",
        },
        {
          title: "Maintained before it fails",
          body: "Impedance or conductance testing trended against the commissioning values, so a cell degrading toward failure shows up on a report rather than during the next outage.",
        },
      ],
      scopeGroups: [
        {
          title: "Design and sizing",
          rows: [
            { label: "Battery sizing", value: "IEEE 485 for lead-acid, IEEE 1115 for nickel-cadmium, against your duty cycle" },
            { label: "System architecture", value: "Redundancy, distribution and protection coordination to IEEE 946 and IEEE 1375" },
            { label: "Ambient derating", value: "Rated against measured room temperature, with the derating curve issued" },
            { label: "Ventilation", value: "Hydrogen evolution assessment and ventilation requirements for the battery room" },
          ],
        },
        {
          title: "Typical ratings supplied",
          rows: [
            { label: "Nominal DC", value: "24, 48, 110, 125 and 220 VDC" },
            { label: "Output current", value: "10 A to 600 A; higher by paralleled modules" },
            { label: "Topology", value: "Switchmode with N+1 redundant rectifiers, or SCR where specified" },
            { label: "AC input", value: "Three-phase or single-phase, matched to the site supply and frequency" },
            { label: "Regulation", value: "± 0.5 % no load to full load; ripple < 1 % RMS with the battery connected" },
            { label: "Charge control", value: "Float, boost/equalise and commissioning charge, temperature compensated at the battery" },
            { label: "Battery chemistry", value: "Lithium-ion and VRLA; nickel-cadmium where specified" },
          ],
        },
        {
          title: "Backup and energy management",
          rows: [
            { label: "Modular UPS", value: "Modular, hot-swappable UPS for AC-critical loads" },
            { label: "EMS telemetry", value: "Remote monitoring of rectifiers, batteries, generators and fuel into the NOC" },
            { label: "Hybrid power", value: "Solar, grid and generator hybrid control for off-grid and weak-grid sites" },
          ],
        },
        {
          title: "Protection and monitoring",
          rows: [
            { label: "Earth-fault detection", value: "Positive and negative bus, adjustable threshold, optional branch location" },
            { label: "Alarms", value: "AC fail, charger fail, DC over/under-voltage, earth fault, battery disconnected, fuse operated" },
            { label: "Contacts", value: "Individually wired potential-free changeover contacts" },
            { label: "Protocols", value: "Modbus RTU and TCP, DNP3, SNMP; IEC 61850 where the station is fully digital" },
            { label: "Battery monitoring", value: "Open-circuit detection, end-of-discharge alarm, optional cell-level monitoring" },
          ],
        },
        {
          title: "Installation and maintenance",
          rows: [
            { label: "Installation", value: "Charger, distribution, battery stands or cabinets, interconnection and labelling" },
            { label: "Commissioning", value: "Full functional test, commissioning charge, cell voltage baseline recorded" },
            { label: "Preventive maintenance", value: "To IEEE 450, IEEE 1188 or IEEE 1106 by chemistry" },
            { label: "Capacity testing", value: "At the interval your insurer or regulator requires, with trended results" },
            { label: "Replacement", value: "Battery replacement programmes including removal of the old set" },
          ],
        },
      ],
      standards: [
        { code: "IEEE 485", title: "Sizing lead-acid batteries for stationary applications" },
        { code: "IEEE 1115", title: "Sizing nickel-cadmium batteries for stationary applications" },
        { code: "IEEE 946", title: "DC auxiliary power systems for generating stations and substations" },
        { code: "IEEE 1375", title: "Protection of stationary battery systems" },
        { code: "IEEE 450 / 1188 / 1106", title: "Maintenance and testing — vented lead-acid, VRLA and nickel-cadmium" },
        { code: "IEC 61439-1/-2", title: "Low-voltage switchgear and controlgear assemblies" },
        { code: "UL 1012", title: "Power units other than Class 2" },
        { code: "NFPA 70 Art. 480", title: "Storage batteries — installation requirements" },
        { code: "IEEE 1679.1", title: "Lithium-based batteries in stationary applications" },
        { code: "UL 9540", title: "Energy storage systems and equipment" },
      ],
      applications: [
        "Telecom central offices and tower shelters",
        "Off-grid and hybrid solar/grid sites",
        "Substation protection and control — trip, close and relay supply",
        "Switchgear spring-charging motors and motorised isolators",
        "SCADA gateways, RTUs and IEDs",
        "Telecom equipment rooms at −48 VDC and +24 VDC",
        "Fire and gas detection and emergency shutdown panels",
        "Generating plant and turbine control systems",
        "Emergency lighting inverter DC input",
      ],
      deliverables: [
        "IEEE 485 or IEEE 1115 sizing calculation for your duty cycle",
        "General arrangement drawing, schematic and terminal schedule",
        "Alarm and communications point list, issued before manufacture",
        "Factory and site acceptance test records, countersigned",
        "Commissioning charge record with individual cell or block voltages",
        "Operation and maintenance documentation and operator training",
        "Recommended two-year spares holding, priced at order stage",
      ],
      relatedIndustries: ["utilities-and-substations", "oil-and-gas", "transportation"] as IndustrySlug[],
      faq: [
        {
          q: "Switchmode or SCR?",
          a: "Switchmode is the default for new work: modular N+1 redundancy, hot-swappable rectifiers, high power factor and a much smaller footprint. SCR remains appropriate where the specification mandates it, where an existing fleet needs to stay consistent, or where the bus feeds unusually noisy inductive loads. If your specification is silent, we propose switchmode and explain the trade-off.",
        },
        {
          q: "Can you work on an existing installation?",
          a: "Yes — extensions, like-for-like replacements and battery changes are routine. Send the nameplate of the existing unit, the battery details and a photograph of the DC distribution section. Matching the alarm contact arrangement usually matters more than matching the physical dimensions.",
        },
        {
          q: "How often should the battery be capacity tested?",
          a: "IEEE 450 suggests an acceptance test, a performance test within the first two years, and then periodically at intervals that shorten as the battery ages — with annual impedance trending in between. The right interval for your site also depends on criticality and what your insurer expects, and we will recommend one rather than default to the longest permissible.",
        },
      ],
    },

    "fiber-optics": {
      name: "Fiber optics",
      meta: {
        title: "Fiber optics — FTTx deployment, precision splicing and OTDR testing",
        description:
          "FTTx deployments, outside and inside plant fiber, precision fusion splicing, OTDR and loss testing, DWDM and restoration, certified to TIA and IEC test standards.",
      },
      tagline: "Light in, light out, and a trace that proves it.",
      summary:
        "FTTx deployments, precision splicing and OTDR testing — plus route design, outside and inside plant and emergency restoration, with test records that stand up years later.",
      imageAlt: "Illuminated fibre-optic strands fanning out against a dark background",
      intro: [
        "A fiber route is cheap to test and expensive to guess at. Most of the cost of a fault is not the splice — it is the hours spent working out where the fault is, on a route nobody documented and nobody baselined.",
        "We design, install, splice and certify fiber, and we hand over the OTDR traces and loss budgets that make the next fault a short job. Where a route is already in the ground and failing, we find out why before anyone proposes replacing it.",
      ],
      highlights: [
        {
          title: "Loss budgeted before it is built",
          body: "End-to-end optical budget calculated at design — splice count, connector count, span loss and margin — so the link is known to work before the first duct is opened, and so the as-built can be compared against an expectation.",
        },
        {
          title: "Every fiber certified, both directions",
          body: "Bidirectional OTDR and insertion loss testing on every fiber, not a sample. Traces are handed over as the baseline that future fault-finding is measured against.",
        },
        {
          title: "Built to survive the route it takes",
          body: "Armoured, rodent-resistant, UV-stable or direct-burial construction chosen for the actual route; duct, sub-duct and blowing where future capacity matters more than today's fiber count.",
        },
        {
          title: "Restoration that is planned in advance",
          body: "Splice enclosures and slack loops placed so a break can be repaired without a second excavation, and restoration procedures agreed before a cable is cut rather than during.",
        },
      ],
      scopeGroups: [
        {
          title: "Design",
          rows: [
            { label: "Route survey", value: "Physical route survey, duct proving and obstruction identification" },
            { label: "Optical budget", value: "End-to-end loss calculation with splice, connector and margin allowances" },
            { label: "Fiber selection", value: "G.652.D, G.655 and bend-insensitive types matched to span and application" },
            { label: "Capacity planning", value: "Fiber count and spare capacity sized against stated growth" },
            { label: "FTTx design", value: "FTTH, FTTB and FTTP — PON architecture, splitter placement and drop design" },
          ],
        },
        {
          title: "Outside plant",
          rows: [
            { label: "Installation", value: "Duct installation, cable blowing, pulling, direct burial and aerial" },
            { label: "FTTx build", value: "Feeder, distribution and drop installation through to the customer premises" },
            { label: "Construction types", value: "Armoured, rodent-resistant, UV-stable and figure-8 aerial as the route requires" },
            { label: "Jointing", value: "Fusion splicing in sealed enclosures with documented slack and loop placement" },
            { label: "Termination", value: "Street cabinets, joint chambers, building entry and fire-stopping" },
          ],
        },
        {
          title: "Inside plant",
          rows: [
            { label: "Structured cabling", value: "Backbone and horizontal fiber to ANSI/TIA-568, tested and certified" },
            { label: "Distribution", value: "Patch panels, splice trays, cassettes and containment" },
            { label: "Data centre", value: "MPO/MTP trunk systems and high-density distribution to TIA-942" },
            { label: "Labelling", value: "Full identification to a schedule issued with the as-builts" },
          ],
        },
        {
          title: "Transmission and testing",
          rows: [
            { label: "DWDM / CWDM", value: "Wavelength plan, mux/demux, amplification and channel commissioning" },
            { label: "OTDR", value: "Bidirectional traces on every fiber, with event tables retained" },
            { label: "Insertion loss", value: "Light-source and power-meter testing against the calculated budget" },
            { label: "Advanced", value: "Chromatic and polarisation-mode dispersion testing on long or high-rate spans" },
            { label: "Restoration", value: "Emergency splicing, fault location and temporary route provision" },
          ],
        },
      ],
      standards: [
        { code: "ANSI/TIA-568", title: "Commercial building telecommunications cabling" },
        { code: "ANSI/TIA-758", title: "Customer-owned outside plant telecommunications infrastructure" },
        { code: "ANSI/TIA-942", title: "Telecommunications infrastructure for data centers" },
        { code: "IEC 61280", title: "Fibre optic communication subsystem test procedures" },
        { code: "IEC 61300", title: "Fibre optic interconnecting devices — test and measurement" },
        { code: "ITU-T G.652 / G.655", title: "Single-mode fibre characteristics" },
        { code: "ITU-T G.694", title: "Spectral grids for WDM applications" },
        { code: "IEC 60794", title: "Optical fibre cables" },
      ],
      applications: [
        "FTTx rollout — FTTH, FTTB and FTTP",
        "Campus and plant backbone fiber",
        "Substation and control-system fiber links",
        "Data centre structured fiber and MPO trunking",
        "Carrier and metro route construction",
        "DWDM capacity upgrades on existing routes",
        "Fault location, emergency restoration and route re-certification",
      ],
      deliverables: [
        "Route survey report and optical loss budget calculation",
        "Installation drawings, duct records and slack-loop locations",
        "Splice schedule and fiber allocation record",
        "Bidirectional OTDR traces and event tables, every fiber",
        "Insertion loss certification against the calculated budget",
        "Labelling schedule and as-built documentation",
        "Restoration procedure and recommended spares",
      ],
      relatedIndustries: ["utilities-and-substations", "transportation", "oil-and-gas", "government-buildings"] as IndustrySlug[],
      faq: [
        {
          q: "Do you test every fiber or a sample?",
          a: "Every fiber, bidirectionally, including dark spares. A spare that was never tested is not a spare — it is an assumption you find out about on the day you need it.",
        },
        {
          q: "Can you find a fault on a route you did not install?",
          a: "Yes. OTDR fault location works regardless of who built the route, though it goes considerably faster where as-built records and baseline traces exist. Where they do not, we will usually recommend re-certifying the route while we are there so the next fault is cheaper.",
        },
        {
          q: "Can you add capacity without laying new cable?",
          a: "Often. If the existing fiber has headroom, CWDM or DWDM can multiply capacity on the strands already in the ground for a fraction of the cost of construction. We will test what is there and tell you honestly whether it will carry the wavelength plan before anyone commits to equipment.",
        },
      ],
    },

    "offshore-communications": {
      name: "Off-shore comms",
      meta: {
        title: "Off-shore communications — maritime VSAT, LTE and rig safety PAGA",
        description:
          "ATEX and IECEx certified offshore communications: maritime and rig VSAT and LTE, microwave links, explosion-proof PAGA, CCTV and safety systems for platforms, rigs, FPSOs and vessels.",
      },
      tagline: "Safety and connectivity where the nearest road is a helicopter ride away.",
      summary:
        "ATEX-certified maritime VSAT, LTE and rig safety PAGA — with the explosion-proof CCTV and emergency systems an offshore installation is certified against.",
      imageAlt: "Offshore vessel at sea at sunset",
      intro: [
        "An offshore installation depends on its communications for two things that cannot wait: running the operation and getting people to safety. Both have to work in a classified area, in salt and vibration, on a link that weather and distance try to take away.",
        "We deliver the communications an offshore operator owns — high-throughput VSAT, LTE and microwave links to shore, and the ATEX and IECEx certified PAGA, CCTV and safety systems on board — installed and inspected to the hazardous-area codes.",
      ],
      highlights: [
        {
          title: "Maritime and rig VSAT / LTE",
          body: "High-throughput satellite and microwave links for offshore platforms, with offshore LTE where coverage allows, and failover between them defined rather than improvised.",
        },
        {
          title: "Explosion-proof hardware",
          body: "ATEX and IECEx certified safety systems, CCTV and emergency PAGA, with protection concept, gas group and temperature class recorded per device.",
        },
        {
          title: "PAGA that is heard over the plant",
          body: "Speaker layouts modelled against measured machinery noise and verified for speech intelligibility at commissioning, so an alarm is understood, not just loud.",
        },
        {
          title: "Built for the marine environment",
          body: "316 stainless, GRP and marine-grade materials, ingress protection and vibration-tolerant mounting chosen for the deck, not the datasheet.",
        },
      ],
      scopeGroups: [
        {
          title: "Connectivity",
          rows: [
            { label: "VSAT", value: "Stabilised maritime and fixed rig terminals, high-throughput satellite service integration" },
            { label: "LTE", value: "Offshore LTE and private LTE where coverage and licensing allow" },
            { label: "Microwave", value: "Platform-to-platform and platform-to-shore links with path and availability analysis" },
            { label: "Failover", value: "Defined priority and failover between fiber, microwave, LTE and satellite paths" },
          ],
        },
        {
          title: "Safety systems",
          rows: [
            { label: "PAGA", value: "Public address and general alarm with redundant A/B amplification and supervision" },
            { label: "CCTV", value: "Explosion-proof cameras for process, deck and perimeter monitoring" },
            { label: "Emergency communications", value: "Alarm tones, muster messaging and interfaces to fire and gas and ESD" },
            { label: "Radio", value: "Onboard UHF/VHF and marine radio integration" },
          ],
        },
        {
          title: "Hazardous area",
          rows: [
            { label: "Certification", value: "ATEX and IECEx certified equipment for Zone 1 and Zone 2" },
            { label: "Installation", value: "Installation and inspection to IEC 60079-14 by competent personnel" },
            { label: "Materials", value: "316 stainless, GRP and copper-free aluminium; IP66 and above" },
          ],
        },
      ],
      standards: [
        { code: "IEC 60079 series", title: "Explosive atmospheres — equipment and installation" },
        { code: "ATEX 2014/34/EU", title: "Equipment for potentially explosive atmospheres" },
        { code: "IECEx", title: "Certification scheme for equipment in explosive atmospheres" },
        { code: "IEC 61892", title: "Mobile and fixed offshore units — electrical installations" },
        { code: "IEC 60268-16", title: "Objective rating of speech intelligibility by speech transmission index" },
        { code: "IEC 60945", title: "Maritime navigation and radiocommunication equipment — environmental requirements" },
      ],
      applications: [
        "Fixed platform and rig communications",
        "FPSO and vessel VSAT connectivity",
        "Platform PAGA and emergency alarm systems",
        "Explosion-proof CCTV for process and deck areas",
        "Offshore LTE and microwave links to shore",
        "Communications upgrades during planned shutdowns",
      ],
      deliverables: [
        "Link budget and availability calculation for each path",
        "PAGA speaker layout and intelligibility calculation",
        "Hazardous-area certificate pack, per device type",
        "Installation drawings and cable schedules",
        "Commissioning records, including measured intelligibility",
        "Failover test records across connectivity paths",
        "Operations documentation and operator training",
      ],
      relatedIndustries: ["oil-and-gas", "utilities-and-substations", "transportation"] as IndustrySlug[],
      faq: [
        {
          q: "Satellite, LTE or fiber?",
          a: "Usually more than one. Fiber where a submarine cable is available, microwave or LTE where the distance allows, and VSAT as the path that always reaches. We design the priority and failover between them so the operation knows which services keep running when a path drops.",
        },
        {
          q: "Is your equipment certified for the zone?",
          a: "Yes. Field equipment is ATEX and IECEx certified for the area classification it is installed in, and the submittal records protection concept, gas group, temperature class and certificate number per device type.",
        },
        {
          q: "Can the work be done during a shutdown window?",
          a: "Yes, and for most PAGA and safety-system work it has to be. We plan pre-fabrication, testing and spares around the shutdown so the time offshore is spent installing, not waiting.",
        },
      ],
    },

    "submarine-fiber-networks": {
      name: "Submarine fiber",
      meta: {
        title: "Submarine fiber — subsea cable landing stations, PFE and seabed surveying",
        description:
          "Subsea cable landing stations, power feed equipment (PFE), terrestrial backhaul and seabed surveying for submarine fiber systems serving offshore platforms, FPSOs and coastal facilities.",
      },
      tagline: "Connectivity for the places a truck cannot reach.",
      summary:
        "Subsea cable landing stations, power feed equipment and seabed surveying — with the terrestrial backhaul and resilience design that make a submarine link dependable.",
      imageAlt: "Offshore vessel laying submarine cable at sunset",
      intro: [
        "An offshore facility on a satellite link is a facility that runs its operations at the mercy of weather and latency. Submarine fiber changes what is possible: real-time control data, remote expert support, condition monitoring and crew welfare on a link that behaves like a terrestrial one.",
        "We work on the parts of that chain an operator actually has to own — the seabed survey, the landing station and its power feed equipment, the terrestrial backhaul, the platform termination and the redundancy design — alongside the marine contractors who lay the cable.",
      ],
      highlights: [
        {
          title: "Designed around a single point of failure that cannot be dug up",
          body: "A subsea break is a vessel mobilisation, not a van. Topology, diverse landings, protection paths and satellite fallback are decided against that reality and the operator's real tolerance for downtime.",
        },
        {
          title: "Subsea cable landing systems",
          body: "Power feed equipment (PFE) and terrestrial backhaul interconnectivity, specified for salt, humidity and power quality, with the earthing and surge coordination a shore landing actually needs.",
        },
        {
          title: "Platform termination done once",
          body: "Hazardous-area classification, structural routing, J-tube entry and terminal equipment coordinated with the platform's own engineering rather than treated as an IT delivery.",
        },
        {
          title: "What rides on it, designed with it",
          body: "Control data, voice, radio over IP, CCTV and crew connectivity prioritised on a link whose capacity and latency are known — rather than contending for it after the fact.",
        },
      ],
      scopeGroups: [
        {
          title: "Planning and design",
          rows: [
            { label: "Requirements", value: "Capacity, latency and availability targets set against the actual operation" },
            { label: "Seabed surveying", value: "Seabed and route survey to plan the cable path, burial and protection" },
            { label: "Route support", value: "Desktop study, permitting input and liaison with marine installation contractors" },
            { label: "Topology", value: "Point-to-point, festoon and branched designs with diverse landing assessment" },
            { label: "Resilience", value: "Protection paths, satellite or microwave fallback and defined failover behaviour" },
          ],
        },
        {
          title: "Landing and terminal",
          rows: [
            { label: "Landing station", value: "Beach manhole, landing chamber, terminal building fit-out" },
            { label: "Power feed equipment", value: "PFE installation, earthing and commissioning at the landing station" },
            { label: "Terminal equipment", value: "Line terminal, DWDM and monitoring" },
            { label: "Power and earthing", value: "DC plant, standby supply, earthing and coordinated surge protection" },
            { label: "Backhaul", value: "Terrestrial onward connectivity and interconnect to the operator's core" },
          ],
        },
        {
          title: "Offshore termination",
          rows: [
            { label: "Platform entry", value: "J-tube routing, hang-off and cable protection coordinated with platform engineering" },
            { label: "Hazardous area", value: "Equipment and installation per IEC 60079 for the classified areas involved" },
            { label: "Termination", value: "Splice enclosures, patching and terminal equipment in the platform equipment room" },
            { label: "Environment", value: "Marine-grade materials, ingress protection and vibration-tolerant mounting" },
          ],
        },
        {
          title: "Services carried",
          rows: [
            { label: "Control and telemetry", value: "SCADA and condition monitoring with latency and determinism understood" },
            { label: "Voice and radio", value: "IP telephony and radio-over-IP extended to shore" },
            { label: "Safety systems", value: "PA/GA and mass notification linked across platform and shore" },
            { label: "Video and welfare", value: "CCTV, remote expert support and crew connectivity, prioritised below operations" },
          ],
        },
      ],
      standards: [
        { code: "ITU-T G.97x series", title: "Optical fibre submarine cable systems" },
        { code: "ICPC recommendations", title: "International Cable Protection Committee practice" },
        { code: "ITU-T G.652 / G.654", title: "Single-mode fibre characteristics for long-haul and submarine use" },
        { code: "IEC 60079 series", title: "Explosive atmospheres — equipment and installation" },
        { code: "IEC 61892", title: "Mobile and fixed offshore units — electrical installations" },
        { code: "IEC 62305", title: "Protection against lightning" },
        { code: "IEC 61280", title: "Fibre optic communication subsystem test procedures" },
      ],
      applications: [
        "Fixed platform and FPSO connectivity to shore",
        "Marine and oil terminal communications",
        "Offshore wind and energy island links",
        "Island and remote coastal facility connectivity",
        "Diverse-path resilience for existing satellite-dependent sites",
        "Landing station build and terminal equipment upgrade",
      ],
      deliverables: [
        "Seabed route survey report",
        "Requirements and availability study with stated assumptions",
        "Topology and resilience design, including failover behaviour",
        "Landing station and platform termination design packages",
        "Optical budget and end-to-end performance calculation",
        "Interface schedule with marine installation contractors",
        "Commissioning and acceptance test records",
        "Operations documentation and fault escalation procedure",
      ],
      relatedIndustries: ["oil-and-gas", "utilities-and-substations", "government-buildings"] as IndustrySlug[],
      faq: [
        {
          q: "Do you lay the cable yourselves?",
          a: "No, and anyone who tells you they do all of it should be asked which vessel. Cable-lay is specialist marine contractor work with its own vessels and permits. We survey the seabed route and deliver the parts the operator owns — landing station, power feed equipment, backhaul, platform termination, resilience and the services carried — and we coordinate the interfaces with the lay contractor so nothing falls between the two scopes.",
        },
        {
          q: "Is submarine fiber realistic for a single platform?",
          a: "Sometimes, and sometimes honestly not. It depends on distance to shore, what the connectivity is worth operationally, and whether the route can be shared with other facilities or an existing system. We will do the study and tell you when the answer is that a microwave link or a better satellite arrangement serves you for a fraction of the cost.",
        },
        {
          q: "What happens when the cable breaks?",
          a: "A repair is a vessel mobilisation measured in weeks, not hours — which is why the design matters more than the response plan. We design assuming a break will happen: diverse landings where the economics allow, a defined fallback path, and agreement in advance about which services keep running on reduced capacity.",
        },
      ],
    },
  },
};

export type ServicesCopy = typeof services;
