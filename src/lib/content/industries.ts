import type { ServiceSlug } from "@/lib/catalog";

export const industries = {
  index: {
    meta: {
      title: "Industries — utilities, oil & gas, data centers, healthcare, government",
      description:
        "Telecom, communications, network and DC power engineering delivered to substations, oil and gas facilities, data centers, hospitals, schools and government buildings.",
    },
    eyebrow: "Industries",
    title: "The same engineering, five different sets of constraints",
    lede: "A radio system in a refinery and a radio system in a hospital use much the same equipment and almost nothing of the same approach. What changes is the area classification, the maintenance window, the people receiving the message and who has to sign it off.",
  },

  items: {
    "utilities-and-substations": {
      name: "Utilities & substations",
      meta: {
        title: "Substation communications and DC power engineering",
        description:
          "Station DC systems, protection and control communications, IEC 61850 station networks and substation telecom for 13.8 kV to 380 kV installations.",
      },
      tagline: "Everything the protection scheme quietly depends on.",
      summary:
        "Station DC systems, protection and control communications, station bus networks and substation telecom — designed, installed and maintained for distribution and transmission.",
      imageAlt: "Transmission infrastructure against a clear sky",
      intro: [
        "A substation has one job it cannot fail at: clear a fault and tell the control centre it did. Everything behind that — the battery, the charger, the station bus, the teleprotection path — exists to make a few milliseconds work reliably for twenty years.",
        "We build and maintain that supporting infrastructure for 13.8 kV distribution through to 380 kV transmission, and we document it to the standard a utility engineering department expects before it will accept a station.",
      ],
      challenges: [
        {
          title: "Ambient temperature destroys battery life",
          body: "A lead-acid battery loses roughly half its design life for every 10 °C above 25 °C. The sizing has to use switchroom ambient, not outdoor shade temperature, and the charger needs temperature compensation wired to a probe on the battery rather than a guess in firmware.",
        },
        {
          title: "Earth faults are found the hard way",
          body: "An undetected earth fault on a DC bus is benign until the second one arrives and trips a breaker nobody asked to trip. Detection on both polarities is the minimum; branch-circuit location is what lets a technician find it without de-energising the station bus.",
        },
        {
          title: "Remote sites are expensive to visit",
          body: "Where a fault means a four-hour drive, N+1 redundancy and genuine remote alarm reporting pay for themselves on the first avoided call-out. We size spares on travel time, not on list price.",
        },
        {
          title: "The station outlives everyone who built it",
          body: "Stations get extended ten and fifteen years later. Work documented down to part numbers, point lists and configuration backups is what makes a matching extension possible instead of a rebuild.",
        },
      ],
      work: [
        {
          title: "Station DC systems",
          body: "Battery and charger sizing to IEEE 485, DC distribution with earth-fault detection on both polarities, installation, commissioning charge and maintenance trended to IEEE 450.",
          href: "/services/dc-chargers",
        },
        {
          title: "Station networks and teleprotection",
          body: "IEC 61850 station and process bus, redundant ring topologies with verified reconvergence, time distribution, and the fiber paths that carry protection signalling between bays and sites.",
          href: "/services/networks",
        },
        {
          title: "Substation telecom and communications",
          body: "Telecom rooms, microwave and fiber backhaul, control-room to switchyard talk-back and evacuation messaging for manned stations.",
          href: "/services/telecom-services",
        },
      ],
      notes: {
        title: "How we work here",
        items: [
          "Battery sizing to IEEE 485 showing the duty cycle, including momentary trip and close currents.",
          "System architecture and redundancy to IEEE 946; DC protection coordination to IEEE 1375.",
          "Station networks to IEC 61850, with failover times measured at commissioning rather than quoted.",
          "Assemblies built and type-tested to IEC 61439-1 and IEC 61439-2.",
          "Maintenance and acceptance testing to IEEE 450, IEEE 1188 or IEEE 1106 by chemistry.",
          "Work on live stations under permit, with an agreed isolation and rollback plan.",
        ],
      },
      relatedServices: ["dc-chargers", "networks", "telecom-services", "fiber-optics"] as ServiceSlug[],
      faq: [
        {
          q: "Can you work to a utility's own technical specification?",
          a: "Yes, and we prefer to. Send the specification and we return a clause-by-clause compliance statement marking each requirement complied, complied with comment, or not complied. The exceptions are the valuable part of that document — a contractor who marks every clause compliant has usually not read it.",
        },
        {
          q: "Will you work on an energised station?",
          a: "Routinely, under permit, with isolation and a written rollback plan agreed before mobilisation. Where a task genuinely cannot be done live, we say so at proposal stage and plan the outage with you rather than discovering it on the night.",
        },
        {
          q: "Do you handle IEC 61850 station networks?",
          a: "Yes — station bus and process bus design, build and commissioning, including redundancy testing by physically pulling links rather than trusting the protocol timer. For many stations what is actually needed is sound DNP3 or Modbus TCP into the gateway, and we will say so if that is the honest answer.",
        },
      ],
    },

    "oil-and-gas": {
      name: "Oil & gas",
      meta: {
        title: "Hazardous-area communications and infrastructure for oil & gas",
        description:
          "PA/GA, radio coverage, networks and DC power for upstream, midstream, downstream and offshore facilities, installed to IEC 60079-14 with ATEX and IECEx certified devices.",
      },
      tagline: "Certified for the area classification, built for the corrosion.",
      summary:
        "PA/GA, radio coverage, plant networks and DC power for plants, terminals, pipelines and offshore installations — installed and inspected to the hazardous-area codes.",
      imageAlt: "Offshore vessel laying submarine cable at sunset",
      intro: [
        "In a process facility, the communication system is part of the safety case. It has to be audible over a compressor, certified for the zone it sits in, and survive years of salt, sand and hydrogen sulphide without the enclosure giving up first.",
        "We design, install and maintain hazardous-area communications, plant networks and the DC systems behind fire and gas, emergency shutdown and control — with the certification recorded per device rather than per order.",
      ],
      challenges: [
        {
          title: "Area classification drives everything",
          body: "A device that is fine in Zone 2 is not acceptable in Zone 1, and a Division 2 listing does not satisfy a Zone 1 requirement. We record protection concept, gas group and temperature class per item so review is a document check, not an argument.",
        },
        {
          title: "Plant noise defeats ordinary speakers",
          body: "A compressor house at 100 dBA needs a design that targets intelligibility, not sound pressure. That means re-entrant horns on a modelled layout and a measured speech transmission index at commissioning.",
        },
        {
          title: "Corrosion is the real service-life limit",
          body: "Coastal and sour-service environments eat painted mild steel. 316 stainless, glass-reinforced polyester and copper-free aluminium get specified per location rather than applied uniformly to keep a quotation tidy.",
        },
        {
          title: "Turnarounds are the only maintenance window",
          body: "If a device can only be replaced during a shutdown, the spares holding has to anticipate it — built around the turnaround interval and the certification lead time for replacements.",
        },
      ],
      work: [
        {
          title: "Hazardous-area PA/GA and radio",
          body: "Ex d, Ex e and Ex ia loudspeakers, beacons, handsets and call stations for Zone 1, Zone 2, Division 1 and Division 2, with plant-wide radio coverage and control-room dispatch.",
          href: "/services/mission-critical-communication",
        },
        {
          title: "Plant networks and OT segmentation",
          body: "Industrial Ethernet rated for the environment, IEC 62443 zone and conduit segmentation between process and business networks, and the wireless that maintenance teams actually use.",
          href: "/services/networks",
        },
        {
          title: "DC power for safety systems",
          body: "24, 48 and 125 VDC chargers and distribution for fire and gas panels, emergency shutdown, switchgear control and telecom, with earth-fault detection and full alarm mapping.",
          href: "/services/dc-chargers",
        },
        {
          title: "Offshore connectivity",
          body: "Platform and terminal links over submarine fiber, with the resilience design and fallback arrangements a facility that cannot be reached by road actually needs.",
          href: "/services/submarine-fiber-networks",
        },
      ],
      notes: {
        title: "How we work here",
        items: [
          "Field devices certified under IEC 60079 for ATEX and IECEx, or listed to the NEC for Class I Division 1 and 2.",
          "Installation and inspection to IEC 60079-14 by competent personnel, recorded per device.",
          "Certificate number, protection concept, gas group, temperature class and ingress rating stated per device type.",
          "Enclosure material selected per location: 316 stainless, GRP or copper-free aluminium.",
          "Speech intelligibility designed and verified to IEC 60268-16 against measured ambient noise.",
          "Permit-to-work, method statements and risk assessments agreed before mobilisation.",
        ],
      },
      relatedServices: [
        "mission-critical-communication",
        "networks",
        "dc-chargers",
        "submarine-fiber-networks",
      ] as ServiceSlug[],
      faq: [
        {
          q: "Can you work to a client's own engineering standards?",
          a: "Yes. Major operators in the region work to their own engineering standards and material specifications on top of the international codes. Send the applicable documents with the enquiry and we return a compliance statement against them, flagging anything that cannot be met rather than discovering it at inspection.",
        },
        {
          q: "What environmental ratings do you work to as standard?",
          a: "−40 °C to +70 °C operation and NEMA 4X / IP66 as the baseline for outdoor field devices, with material selection driven by location: 316 stainless or GRP for coastal and sour service, copper-free aluminium where weight matters. We state the assumption in the proposal so it can be challenged before the order.",
        },
        {
          q: "Do you mobilise offshore?",
          a: "Yes — platforms, FPSOs and marine terminals, subject to the operator's certification, medical and survival requirements for personnel. Tell us the installation type with the enquiry so mobilisation requirements are in the proposal rather than discovered later.",
        },
      ],
    },

    "data-centers": {
      name: "Data centers",
      meta: {
        title: "Data center cabling, DC power and notification engineering",
        description:
          "Structured fiber and copper to TIA-942, −48 VDC telecom plant, switchgear control DC and evacuation messaging for concurrently maintainable facilities.",
      },
      tagline: "Work done on a building that never has a maintenance window.",
      summary:
        "Structured cabling, network build, −48 VDC plant and evacuation messaging for colocation, hyperscale and enterprise facilities — delivered under live load.",
      imageAlt: "Fibre-optic strands carrying light, representing data center network infrastructure",
      intro: [
        "Data centers are judged on what can be taken out of service without affecting the load. A DC system that cannot be maintained while energised quietly breaks concurrent maintainability, however the UPS topology is drawn.",
        "We build and support the parts around the white space: structured cabling, network infrastructure, telecom DC plant, switchgear control power and the notification systems that have to be intelligible in a hall full of fans.",
      ],
      challenges: [
        {
          title: "Concurrent maintainability has to reach every system",
          body: "Modular rectifiers replaceable live, dual feeds, and distribution arranged so a branch can be isolated without dropping the bus. The single-line has to survive the same scrutiny as the AC side.",
        },
        {
          title: "Growth arrives rack by rack",
          body: "Load comes in increments, not halls. Systems get specified with spare rectifier positions, spare fiber strands and distribution headroom so the next step is a module, not a replacement.",
        },
        {
          title: "Evacuation messaging competes with noise",
          body: "A data hall at 85 dBA with hard surfaces is an intelligibility problem. Speaker density and placement have to be modelled against operating noise, not an empty commissioning-day hall.",
        },
        {
          title: "Everything must land in the existing platform",
          body: "Another standalone monitoring panel helps nobody. Alarm points are exposed over SNMP and Modbus TCP with a published point list issued before equipment ships.",
        },
      ],
      work: [
        {
          title: "Structured cabling and fiber",
          body: "Backbone and horizontal copper and fiber to TIA-568 and TIA-942, MPO trunking, high-density distribution, containment, and certification on every strand and pair.",
          href: "/services/fiber-optics",
        },
        {
          title: "Network infrastructure",
          body: "Core, distribution and access build, segmentation, out-of-band management, and failover verified by pulling links rather than reading timers.",
          href: "/services/networks",
        },
        {
          title: "DC power plant",
          body: "−48 VDC modular rectifier plant with hot-swap modules and low-voltage disconnect, plus 125 VDC switchgear and generator control power with dual feeds.",
          href: "/services/dc-chargers",
        },
        {
          title: "Evacuation and notification",
          body: "IP notification over the facility network with PoE amplified speakers, supervised zones, and interfaces to the fire alarm and very-early-smoke-detection systems.",
          href: "/services/mission-critical-communication",
        },
      ],
      notes: {
        title: "How we work here",
        items: [
          "DC architecture and redundancy documented to IEEE 946, sized to IEEE 485.",
          "Rectifier modules hot-swappable without interrupting the DC bus.",
          "Cabling certified to TIA-568 with full test results, every strand and pair.",
          "Alarm and telemetry exposed over SNMP v2c/v3 and Modbus TCP, with a published point list.",
          "Emergency communications designed to NFPA 72 Chapter 24 and UL 2572 where referenced.",
          "Intelligibility modelled to IEC 60268-16 against as-operating noise, not an empty hall.",
          "All work on live floors under change control with a written rollback plan.",
        ],
      },
      relatedServices: ["fiber-optics", "networks", "dc-chargers", "mission-critical-communication"] as ServiceSlug[],
      faq: [
        {
          q: "Can you work on a live floor?",
          a: "That is most of what we do here. Work proceeds under your change control, with method statements, a rollback plan and agreed abort criteria. Where a task genuinely cannot be done under load we say so at design stage rather than at 2 a.m.",
        },
        {
          q: "Can the DC plant be expanded without downtime?",
          a: "That is the point of specifying modular rectifiers with spare shelf positions — adding capacity becomes inserting a module. We size the initial frame against your stated growth plan and tell you explicitly where the expansion limit sits, so it is a decision rather than a surprise.",
        },
        {
          q: "How do alarms reach our DCIM?",
          a: "SNMP for trap-based platforms and Modbus TCP for building management systems, with potential-free contacts for the few points that justify a hardwired path. The point list is issued before delivery so integration work can start in parallel.",
        },
      ],
    },

    "hospitals-and-schools": {
      name: "Hospitals & schools",
      meta: {
        title: "Voice evacuation and communications for hospitals and schools",
        description:
          "Intelligible voice evacuation, lockdown messaging, nurse-call integration, campus networks and essential-system DC power for healthcare and education facilities.",
      },
      tagline: "Systems for people who are not trained for the emergency.",
      summary:
        "Voice evacuation, lockdown messaging, day-to-day paging, campus networks and essential-system DC power for healthcare and education buildings.",
      imageAlt: "City skyline at dusk, representing the institutional buildings served by these systems",
      intro: [
        "In a hospital or a school, the people receiving the message are patients, visitors and children. They are not trained, some cannot move without help, and nobody is going to interpret an ambiguous tone correctly under stress. Intelligibility and specific instructions do more than volume ever will.",
        "We design and install voice evacuation, lockdown and paging systems for exactly that audience, along with the campus networks and essential-system power behind them.",
      ],
      challenges: [
        {
          title: "Reverberant spaces destroy intelligibility",
          body: "Atria, corridors and sports halls have long reverberation times — where a system that passes a sound-pressure check still fails a speech transmission index measurement. Density and placement have to be modelled against the real surfaces.",
        },
        {
          title: "Not everyone evacuates",
          body: "Healthcare buildings rely on defend-in-place and horizontal evacuation. The system has to address individual compartments with different instructions simultaneously, not broadcast one message to the whole building.",
        },
        {
          title: "Lockdown is a different message to evacuation",
          body: "Schools need a message set covering lockdown and shelter-in-place, initiated quickly from more than one place, with a clearly distinct all-clear.",
        },
        {
          title: "The system has to work on an ordinary Tuesday",
          body: "A life-safety system used only in drills is a system nobody trusts. Lesson bells, routine paging and code announcements on the same infrastructure keep it exercised and familiar.",
        },
      ],
      work: [
        {
          title: "Voice evacuation and mass notification",
          body: "Zoned voice alarm with supervised circuits, pre-recorded message sets, priority handling between fire, lockdown and routine paging, and microphone stations at reception and security.",
          href: "/services/mission-critical-communication",
        },
        {
          title: "Campus networks and wireless",
          body: "Network build across separated buildings with local autonomy, wireless designed from a survey rather than a floor plan, and segmentation between clinical, administrative and guest traffic.",
          href: "/services/networks",
        },
        {
          title: "Telephony and nurse call integration",
          body: "IP telephony with DECT for staff mobility, integration to nurse-call and alarm escalation, and emergency calling handled deliberately rather than by default.",
          href: "/services/ip-telephony",
        },
        {
          title: "Essential-system DC power",
          body: "Battery chargers and DC distribution supporting switchgear control, generator starting and fire alarm panels on the essential electrical system.",
          href: "/services/dc-chargers",
        },
      ],
      notes: {
        title: "How we work here",
        items: [
          "Emergency communications designed to NFPA 72 Chapter 24; mass notification equipment listed to UL 2572.",
          "Loudspeakers and amplifiers listed to UL 1480 and UL 1711, or certified to EN 54-24 and EN 54-16 where the project is written to European standards.",
          "Speech intelligibility target of STI ≥ 0.50 modelled per IEC 60268-16 and verified at commissioning.",
          "Zoning aligned to the fire compartmentation strategy, including horizontal evacuation where applicable.",
          "Message scripts agreed with the operator and the fire consultant before recording.",
          "Final acceptance of the architecture rests with the authority having jurisdiction; assumptions are stated in the design.",
          "Work in occupied clinical areas planned around infection control and departmental access.",
        ],
      },
      relatedServices: ["mission-critical-communication", "networks", "ip-telephony", "dc-chargers"] as ServiceSlug[],
      faq: [
        {
          q: "Can one system handle fire evacuation and routine paging?",
          a: "Usually it should — a system used daily is a system known to work. Routine paging runs at the lowest priority and is pre-empted instantly by fire or lockdown messaging. Where the authority having jurisdiction requires physical separation of the life-safety path, we design that arrangement instead and explain why.",
        },
        {
          q: "Can you work in an occupied hospital?",
          a: "Yes. Work in clinical areas is planned with the estates and infection control teams, with containment, out-of-hours access and staged isolation agreed before mobilisation. Life-safety systems are never left unsupervised without a documented interim arrangement.",
        },
        {
          q: "How do you prove the system is intelligible?",
          a: "Modelled to a speech transmission index target at design using the real room surfaces and occupied noise levels, then measured at commissioning at defined positions in each area, with results recorded. The measurement is the deliverable — the model is just how we get there.",
        },
      ],
    },

    "government-buildings": {
      name: "Government buildings",
      meta: {
        title: "Mass notification, secure networks and standby power for government facilities",
        description:
          "Campus-wide mass notification, secure network infrastructure, communications and DC standby power for ministries, administrative campuses and secure facilities.",
      },
      tagline: "Delivered with the documentation a public tender actually requires.",
      summary:
        "Mass notification, secure network infrastructure, communications and DC standby power for ministries, administrative campuses and secure facilities.",
      imageAlt: "Modern city skyline representing government and institutional buildings",
      intro: [
        "Public-sector work is won and lost on documentation as much as on engineering. Prequalification files, method statements, personnel clearances and a handover pack that survives audit are part of the deliverable, not an afterthought.",
        "We deliver mass notification, network infrastructure and standby power to ministries, campuses and secure facilities, and we keep the prequalification pack current so it can be issued the day it is asked for.",
      ],
      challenges: [
        {
          title: "Prequalification comes before the engineering",
          body: "Entity registration, insurance, past performance, personnel qualifications and financial standing are needed as one coherent file. We maintain it so a request does not become a two-week delay.",
        },
        {
          title: "A campus is many buildings and one message",
          body: "Site-wide notification across separated buildings needs a networked architecture with local autonomy, so a link failure silences nothing.",
        },
        {
          title: "Secure areas restrict connectivity",
          body: "Where a system cannot reach an external network, monitoring, message distribution and support are designed to work entirely on the internal network, with no cloud dependency anywhere in the path.",
        },
        {
          title: "Access is the real programme risk",
          body: "Escorted access, clearance lead times and restricted working hours affect a programme more than the installation itself. We plan around them explicitly rather than discovering them in week two.",
        },
      ],
      work: [
        {
          title: "Campus-wide mass notification",
          body: "Networked zone controllers with local autonomy, indoor and outdoor speakers, visual notification devices, and initiation from security control, reception and internal mobile devices.",
          href: "/services/mission-critical-communication",
        },
        {
          title: "Secure network infrastructure",
          body: "Segmented campus networks with enforced boundaries, out-of-band management, structured cabling certified end to end, and designs that assume no external connectivity where required.",
          href: "/services/networks",
        },
        {
          title: "Telephony and control room",
          body: "IP telephony with survivable local call processing, dispatch positions, recording where the operation requires it, and integration to radio and alarm systems.",
          href: "/services/ip-telephony",
        },
        {
          title: "DC standby power",
          body: "Battery chargers and distribution supporting access control, CCTV head-end, switchgear control and generator starting, with supervised alarms into the building management system.",
          href: "/services/dc-chargers",
        },
      ],
      notes: {
        title: "How we work here",
        items: [
          "Mass notification equipment listed to UL 2572; emergency communications designed to NFPA 72 Chapter 24.",
          "Prequalification pack issued on request, including entity registration, insurance and past performance.",
          "Personnel qualifications and clearances documented ahead of mobilisation.",
          "Systems designed to operate with no external network dependency where the facility requires it.",
          "Structured cabling certified to ANSI/TIA-568 with full results handed over.",
          "Method statements, risk assessments and escorted-access arrangements agreed before work starts.",
        ],
      },
      relatedServices: ["mission-critical-communication", "networks", "ip-telephony", "dc-chargers"] as ServiceSlug[],
      faq: [
        {
          q: "What is in the prequalification pack?",
          a: "Entity registration and tax identification, insurance certificates, personnel qualifications, quality and safety documentation, banking details and a past-performance summary. It is issued as a single PDF on request — email us and it comes back the same working day.",
        },
        {
          q: "Can you work as a subcontractor to a local main contractor?",
          a: "Yes. Many public-sector contracts are held by a locally registered contractor, and we are comfortable delivering the specialist scope behind that contract, including issuing documentation in the main contractor's name where the tender requires it.",
        },
        {
          q: "Can systems run with no internet connection at all?",
          a: "Yes, and for secure facilities that is usually the requirement. Monitoring, message distribution, configuration management and support are designed to work entirely on the internal network. Where a vendor platform assumes cloud connectivity, we will tell you at design stage rather than after installation.",
        },
      ],
    },
  },
};

export type IndustriesCopy = typeof industries;
