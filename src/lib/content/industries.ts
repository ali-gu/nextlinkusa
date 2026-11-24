import type { ServiceSlug } from "@/lib/catalog";

export const industries = {
  index: {
    meta: {
      title: "Industries — power & utilities, oil & gas, government and transportation",
      description:
        "Turnkey and customized telecom, communications, network and DC power solutions for power and utilities, oil and gas, government authorities and transportation.",
    },
    eyebrow: "Verticals we work in",
    title: "Offering vertical-specific solutions",
    lede: "We deliver turnkey and customized solutions across power and utilities, oil and gas, government authorities and transportation. Leveraging decades of domain experience, we align technology with your core operational demands to keep critical assets connected and secure.",
  },

  items: {
    "utilities-and-substations": {
      name: "Power & utilities",
      meta: {
        title: "Telecom, communications and DC power for power and utilities",
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
          title: "Offshore communications",
          body: "Maritime and rig VSAT and LTE, ATEX-certified PAGA and CCTV, and submarine fiber links for platforms and terminals that cannot be reached by road.",
          href: "/services/offshore-communications",
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
        "offshore-communications",
        "submarine-fiber-networks",
      ] as ServiceSlug[],
      faq: [
        {
          q: "Can you work to a client's own engineering standards?",
          a: "Yes. Major operators work to their own engineering standards and material specifications on top of the international codes. Send the applicable documents with the enquiry and we return a compliance statement against them, flagging anything that cannot be met rather than discovering it at inspection.",
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

    "government-buildings": {
      name: "Government authorities",
      meta: {
        title: "Mission-critical communications, secure networks and standby power for government authorities",
        description:
          "Mission-critical radio, mass notification, secure network infrastructure and DC standby power for government authorities, agencies, administrative campuses and secure facilities.",
      },
      tagline: "Delivered with the documentation a public tender actually requires.",
      summary:
        "Mission-critical radio, mass notification, secure network infrastructure and DC standby power for government authorities, agencies and secure facilities.",
      imageAlt: "Modern towers and a telecommunications mast, representing government and institutional buildings",
      intro: [
        "Public-sector work is won and lost on documentation as much as on engineering. Prequalification files, method statements, personnel clearances and a handover pack that survives audit are part of the deliverable, not an afterthought.",
        "We deliver mission-critical radio, mass notification, network infrastructure and standby power to government authorities, agencies and secure facilities, and we keep the prequalification pack current so it can be issued the day it is asked for.",
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

    transportation: {
      name: "Transportation",
      meta: {
        title: "Communications, networks and power for transportation",
        description:
          "Mission-critical radio, corridor fiber and IP networks, passenger and emergency communications, and DC power for rail, metro, airports, ports and highways.",
      },
      tagline: "Keeping people and assets moving, connected and safe.",
      summary:
        "Operational radio, corridor fiber and IP networks, passenger and emergency communications, and DC power for rail, metro, airports, ports and highways.",
      imageAlt: "Modern towers and a telecommunications mast, representing the transport networks these systems serve",
      intro: [
        "A transport network runs on communications: drivers and controllers talking, signalling and SCADA data moving along the corridor, and passengers hearing the right message in a station when something goes wrong. When any of it fails, services stop.",
        "We design, build and maintain the communications, networks and power behind rail, metro, airports, ports and highways, and we plan the work around possessions, traffic windows and live operations.",
      ],
      challenges: [
        {
          title: "Access is measured in possessions",
          body: "Trackside and airside work happens in short, pre-booked windows. Pre-fabrication, testing off site and a programme built around possessions are what keep a project on schedule.",
        },
        {
          title: "Linear assets, long distances",
          body: "A corridor network spans tens or hundreds of kilometres. Fiber routes, DWDM, amplifier placement and power at remote equipment rooms have to be designed for the distance, not a single site.",
        },
        {
          title: "Radio has to work everywhere",
          body: "Tunnels, cuttings, terminals and depots each defeat coverage differently. TETRA or P25 coverage is designed per location, with in-building and tunnel systems where the open network cannot reach.",
        },
        {
          title: "Passengers need messages they understand",
          body: "Stations and terminals are loud and reverberant. Voice evacuation and passenger announcements are designed for intelligibility and verified at commissioning.",
        },
      ],
      work: [
        {
          title: "Operational radio",
          body: "TETRA and P25 secure voice and data for controllers, drivers and maintenance teams, with tunnel and in-building coverage and dispatch positions.",
          href: "/services/mission-critical-communication",
        },
        {
          title: "Corridor networks",
          body: "Fiber along the route, DWDM transport and IP/MPLS backbones carrying signalling, SCADA, CCTV and passenger systems on one resilient network.",
          href: "/services/networks",
        },
        {
          title: "Passenger and emergency communications",
          body: "PA and voice evacuation for stations, terminals and depots, integrated with fire alarm and operations control.",
          href: "/services/mission-critical-communication",
        },
        {
          title: "Trackside and equipment-room power",
          body: "Rectifiers, chargers and battery backup for trackside cabinets and telecom rooms, with remote monitoring into the operations centre.",
          href: "/services/dc-chargers",
        },
      ],
      notes: {
        title: "How we work here",
        items: [
          "Programmes built around possessions, traffic management and airside access windows.",
          "TETRA and P25 coverage designed per tunnel, station and depot, then verified by measurement.",
          "Corridor fiber and DWDM designed against calculated optical budgets.",
          "Emergency communications designed to NFPA 72 and verified for intelligibility to IEC 60268-16.",
          "DC power sized to IEEE 485, with alarms mapped into the operations control centre.",
          "Method statements and safety documentation agreed with the operator before mobilisation.",
        ],
      },
      relatedServices: ["mission-critical-communication", "networks", "fiber-optics", "dc-chargers"] as ServiceSlug[],
      faq: [
        {
          q: "Can you work within possessions and live operations?",
          a: "Yes. We plan work around booked possessions and access windows, pre-test equipment off site, and carry a rollback plan so the network is back in service when the window closes.",
        },
        {
          q: "Do you cover tunnels and underground stations?",
          a: "Yes. Radio coverage in tunnels and underground stations is designed with radiating cable, DAS and bi-directional amplifiers as needed, and measured at commissioning.",
        },
        {
          q: "Can one network carry signalling, CCTV and passenger systems?",
          a: "Often, with proper segmentation and quality of service. Where the signalling authority requires physical separation, we design that instead and say why.",
        },
      ],
    },
  },
};

export type IndustriesCopy = typeof industries;
