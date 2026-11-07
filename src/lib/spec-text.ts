/**
 * Editable specification text for consultants, in CSI MasterFormat structure.
 *
 * Intentionally not translated: tender specifications in the region are issued
 * in English, and a parallel Arabic version would invite the two to drift.
 * The surrounding page copy explains that and offers translation on request.
 */

export type SpecSection = {
  id: string;
  code: string;
  title: string;
  /** One line describing what the section covers, shown above the text. */
  scope: string;
  /** Square-bracketed blanks are deliberate: they mark project-specific values. */
  body: string;
};

export const specSections: SpecSection[] = [
  {
    id: "dc-battery-chargers",
    code: "26 33 43",
    title: "Stationary Battery Chargers and DC Distribution",
    scope:
      "Switchmode and SCR battery chargers, charge control, DC earth-fault detection, alarms and distribution for substation and plant auxiliary service.",
    body: `PART 1 - GENERAL

1.1 SUMMARY
    A.  This Section covers stationary battery chargers, direct-current
        distribution and associated monitoring for substation and plant
        auxiliary service.

1.2 REFERENCES
    A.  IEEE 485 - Recommended Practice for Sizing Lead-Acid Batteries for
        Stationary Applications.
    B.  IEEE 1115 - Recommended Practice for Sizing Nickel-Cadmium Batteries
        for Stationary Applications.
    C.  IEEE 946 - Recommended Practice for the Design of DC Auxiliary Power
        Systems for Generating Stations and Substations.
    D.  IEEE 1375 - Guide for the Protection of Stationary Battery Systems.
    E.  IEC 61439-1 and IEC 61439-2 - Low-voltage switchgear and controlgear
        assemblies.
    F.  NEMA PE 5 - Utility Type Battery Chargers.
    G.  NFPA 70 (NEC) Article 480 - Storage Batteries.

1.3 SUBMITTALS
    A.  Battery sizing calculation to IEEE 485 or IEEE 1115 for the duty cycle
        scheduled, stating the ageing factor, design margin and the design
        ambient temperature used.
    B.  General arrangement drawing, wiring schematic and terminal schedule.
    C.  Alarm and communications point list.
    D.  Type test certificates and routine test reports.
    E.  Factory acceptance test procedure, submitted for approval before test.
    F.  Operation and maintenance manual, in [English] [Arabic] [both].
    G.  Recommended spares list for [two] years of operation.

1.4 QUALITY ASSURANCE
    A.  Equipment shall be the product of a manufacturer regularly engaged in
        the production of stationary battery chargers for not less than
        [ten] years.
    B.  Conformity certification required for import shall be obtained by the
        supplier prior to shipment.

PART 2 - PRODUCTS

2.1 GENERAL
    A.  Chargers shall be of switchmode construction using modular rectifiers
        arranged for N+1 redundancy. [SCR type may be offered where scheduled.]
    B.  Failure of any single rectifier module shall not interrupt the DC
        output, and a failed module shall be replaceable without de-energising
        the DC bus.

2.2 RATINGS
    A.  AC input: [400] V, [three] phase, [60] Hz, with the charger operating
        within specification over a range of plus or minus 10 percent of
        nominal voltage and plus or minus 5 percent of nominal frequency.
    B.  Input power factor shall be not less than 0.99 at full load, and input
        current distortion shall not exceed 5 percent THD.
    C.  DC output: [125] V nominal, [___] A continuous, suitable for a battery
        of [60] cells of [___] type.
    D.  Output voltage regulation shall not exceed plus or minus 0.5 percent
        from no load to full load over the specified input range.
    E.  Output ripple shall not exceed 1 percent RMS with the battery
        connected. Where operation without a battery is required, filtered
        output shall not exceed [100] mV peak-to-peak.

2.3 CHARGE CONTROL
    A.  Float, boost or equalise, and commissioning charge modes shall be
        provided. Boost shall be initiated manually and terminated on a timer,
        on charge current, or both.
    B.  Charging voltage shall be temperature compensated from a probe mounted
        at the battery, with a compensation slope appropriate to the cell
        chemistry scheduled.
    C.  Output current limit shall be adjustable between 20 and 110 percent of
        rating, with soft start on energisation and on restoration of AC supply.

2.4 PROTECTION AND ALARMS
    A.  DC earth-fault detection shall be provided on both positive and
        negative poles, with an adjustable alarm threshold.
    B.  The following alarms shall be provided as a minimum: AC supply failure;
        charger failure; DC overvoltage; DC undervoltage; DC earth fault;
        battery disconnected or open circuit; fuse or circuit breaker operated;
        high internal temperature.
    C.  Each alarm shall be available as an individually wired potential-free
        changeover contact rated not less than [1] A at [125] VDC.
    D.  Alarms shall be indicated locally and shall latch until manually reset.

2.5 MONITORING AND COMMUNICATIONS
    A.  Local indication shall include DC output voltage and current.
    B.  Modbus RTU over RS-485 and Modbus TCP over Ethernet shall be provided
        as a minimum. [DNP3] [SNMP] [IEC 61850] shall be provided where
        scheduled.
    C.  A complete point list shall be submitted for approval before
        manufacture.

2.6 DC DISTRIBUTION
    A.  Distribution shall be by [fuses] [miniature circuit breakers], sized
        and coordinated in accordance with IEEE 1375.
    B.  Not less than [20] percent spare ways shall be provided, fully wired
        to terminals.

2.7 CONSTRUCTION
    A.  Enclosure shall be [free-standing] [wall-mounted], protection class
        [IP42] to IEC 60529, finished RAL 7035 textured.
    B.  Equipment shall be rated for continuous operation at [50] degrees C
        ambient without derating. A derating curve shall be submitted.
    C.  Cable entry shall be from [the bottom] via a removable gland plate.
    D.  An anti-condensation heater with thermostat shall be fitted.
    E.  [Seismic qualification to IEEE 693 shall be provided.]

PART 3 - EXECUTION

3.1 FACTORY TESTING
    A.  Routine tests shall be carried out on every unit in accordance with
        IEC 61439-1 and the manufacturer's standard procedure.
    B.  A factory acceptance test shall be carried out [in the presence of the
        Engineer] to the approved procedure, covering output regulation,
        ripple, current limit, charge mode transition and every alarm.

3.2 INSTALLATION
    A.  Install in accordance with the manufacturer's instructions and NFPA 70
        Article 480 where applicable.
    B.  Battery and charger shall be installed such that the temperature
        compensation probe senses true battery temperature.

3.3 SITE ACCEPTANCE TESTING
    A.  Verify output voltage and current, charge mode operation, current
        limit setting and every alarm point through to the receiving system.
    B.  Carry out a commissioning charge and record battery float current and
        individual cell or block voltages.
    C.  Record all results on an approved test sheet, countersigned on site.

3.4 TRAINING
    A.  Provide [one] day of operator and maintenance training on site, in
        [English] [Arabic], covering routine checks, alarm interpretation and
        battery maintenance to IEEE 450 or IEEE 1188 as applicable.

END OF SECTION`,
  },
  {
    id: "public-address-mass-notification",
    code: "27 51 16",
    title: "Public Address and Mass Notification Systems",
    scope:
      "IP and constant-voltage line paging, talk-back, voice evacuation and mass notification, including supervision, intelligibility and hazardous-area field devices.",
    body: `PART 1 - GENERAL

1.1 SUMMARY
    A.  This Section covers public address, general alarm, talk-back and mass
        notification systems, including head-end equipment, field devices,
        supervision and interfaces to other systems.

1.2 REFERENCES
    A.  NFPA 72 - National Fire Alarm and Signaling Code, Chapter 24,
        Emergency Communications Systems.
    B.  UL 2572 - Mass Notification Systems.
    C.  UL 1480 - Speakers for Fire Protective Signaling Systems.
    D.  UL 1711 - Amplifiers for Fire Protective Signaling Systems.
    E.  IEC 60268-16 - Objective Rating of Speech Intelligibility by Speech
        Transmission Index.
    F.  IEC 60849 / ISO 7240-19 - Sound Systems for Emergency Purposes.
    G.  IEC 60079 series - Explosive Atmospheres.

1.3 PERFORMANCE REQUIREMENTS
    A.  The system shall achieve a Speech Transmission Index of not less than
        0.50 (Common Intelligibility Scale 0.70) at not less than 90 percent
        of measurement positions in each occupied area.
    B.  Sound pressure level shall be not less than [10] dB above the measured
        ambient noise level referenced to L90, and shall not exceed 110 dBA at
        any normally occupied position.
    C.  The system shall remain operational for not less than [24] hours in
        standby followed by [15] minutes in alarm on battery supply.

1.4 SUBMITTALS
    A.  Zone plan and speaker layout drawing.
    B.  Predicted sound pressure level and speech intelligibility calculation,
        stating the ambient noise levels and surface treatments assumed.
    C.  Amplifier loading schedule and battery autonomy calculation.
    D.  Cable schedule, loop supervision diagram and end-of-line arrangement.
    E.  For hazardous-area devices: certificate number, protection concept,
        gas group, temperature class and ingress rating, per device type.
    F.  Message schedule with scripts, in [English] [Arabic] [both].
    G.  Commissioning and intelligibility test records.

PART 2 - PRODUCTS

2.1 SYSTEM ARCHITECTURE
    A.  The system shall be [IP based over the facility network] [constant
        voltage line at [100] V] [hybrid], with not less than [___] zones and
        capacity for [20] percent expansion without additional head-end racks.
    B.  Message priority shall be assigned such that emergency messaging
        pre-empts all routine paging and background audio without delay.
    C.  Loss of a network link or of any single controller shall not disable
        notification within a building; local autonomy shall be retained.

2.2 HEAD-END EQUIPMENT
    A.  Amplifiers shall be listed to UL 1711 where used for emergency
        communications, with N+1 standby and automatic changeover on failure.
    B.  Every speaker circuit shall be electrically supervised for open
        circuit, short circuit and earth fault, with end-of-line monitoring.
        A supervision fault shall raise an alarm within [200] seconds.
    C.  Standby power shall be by integral charger and sealed battery sized
        for the autonomy specified in Paragraph 1.3.C.

2.3 FIELD DEVICES
    A.  Loudspeakers in life-safety applications shall be listed to UL 1480.
    B.  Outdoor and process-area devices shall be re-entrant horn type, rated
        [15] [25] [30] [60] W, with protection class not less than IP66 or
        NEMA 4X.
    C.  Devices in classified areas shall be certified for [Zone 1] [Zone 2]
        [Class I Division 1] [Class I Division 2], gas group [IIB+H2] [IIC],
        temperature class [T4], with enclosures in [316 stainless steel]
        [glass-reinforced polyester] [copper-free aluminium].
    D.  Visual notification appliances shall be provided where scheduled, and
        shall be synchronised across each field of view.

2.4 INITIATION AND INTERFACES
    A.  Microphone call stations shall be provided at [security control]
        [reception] [control room], with zone selection and all-call.
    B.  An electrically supervised interface shall be provided to the fire
        alarm control panel. The fire alarm system shall hold the highest
        message priority.
    C.  Interfaces to [DCS] [SCADA] [access control] [CCTV] shall be provided
        by [potential-free contacts] [Modbus TCP] [OPC] as scheduled.
    D.  Time synchronisation shall be by NTP from the facility time source.

2.5 MESSAGING
    A.  Pre-recorded message sets shall be provided for evacuation,
        shelter-in-place, lockdown, test and all-clear, in [Arabic and
        English], played in sequence and not simultaneously.
    B.  Scripts shall be approved by the Engineer before recording.

PART 3 - EXECUTION

3.1 INSTALLATION
    A.  Install in accordance with the manufacturer's instructions, NFPA 72
        and the approved layout drawings.
    B.  Hazardous-area devices shall be installed and certified by personnel
        competent under IEC 60079-14.

3.2 COMMISSIONING AND TESTING
    A.  Verify every zone for audibility and correct addressing, and verify
        every supervision condition by simulated fault.
    B.  Measure Speech Transmission Index in accordance with IEC 60268-16 at
        not fewer than [___] positions per area, under representative
        operating noise conditions, and record the results.
    C.  Demonstrate priority and pre-emption between routine paging, the fire
        alarm interface and each emergency message type.
    D.  Demonstrate battery autonomy by test or by calculation verified
        against measured standby and alarm currents.

3.3 TRAINING AND HANDOVER
    A.  Provide operator training in [English] [Arabic] covering initiation,
        message selection, fault indication and routine testing.
    B.  Provide as-built drawings, the final message schedule and all test
        records.

END OF SECTION`,
  },
];
