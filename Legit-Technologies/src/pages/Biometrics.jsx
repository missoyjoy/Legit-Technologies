import React from "react";
import ServiceLayout from "../components/ServiceLayout";

export default function Biometrics() {
  return (
    <ServiceLayout
      title="Biometrics & Access Control"
      category="Division 02: Hardware, CCTV & POS"
      tagline="Hardware-software integrated access control terminals for facility security and automated payroll time-attendance."
      image="/cctv.jpg"
      techStack={["ZKTeco", "Hikvision Access", "Wiegand", "RFID", "TimeNet Software"]}
      branches={[
        {
          title: "Fingerprint & Facial Recognition Terminals",
          timeline: "2 – 5 Days",
          concept: "High-speed biometric wall units featuring contactless facial recognition, palm reading, and anti-spoof fingerprint sensors.",
          features: [
            "Sub-second recognition speed with live-body detection",
            "Thermal fever detection & mask compliance options",
            "Vandal-proof outdoor IP65 terminal housing",
            "Local offline storage during power outages",
          ],
          useCase: "High-security building entrances, server rooms, and corporate office doors.",
        },
        {
          title: "Automated Time-Attendance & Payroll Export",
          timeline: "3 – 7 Days",
          concept: "Linking physical biometric clock-in terminals directly to HR management software to automate shift logging, lateness tracking, and payroll.",
          features: [
            "Automated shift, overtime, and leave calculations",
            "Direct data export to standard payroll formats (CSV, Excel)",
            "Multi-location synchronization to central HR server",
            "Employee self-service attendance mobile log options",
          ],
          useCase: "Factories, construction firms, retail chains, and large corporate workforces.",
        },
        {
          title: "Smart Turnstiles & Magnetic Door Locks",
          timeline: "3 – 7 Days",
          concept: "Heavy-duty mechanical barrier systems including tripod turnstiles, speed gates, and 500kg electromagnetic door locks.",
          features: [
            "High-torque turnstiles for high-throughput pedestrian traffic",
            "Electromagnetic locks linked to emergency fire alarms",
            "Break-glass emergency override exit switches",
            "Interlocking door systems (airlock doors)",
          ],
          useCase: "Commercial building lobbies, industrial parks, and gym access control.",
        },
        {
          title: "Centralized RFID Gate & Barrier Access",
          timeline: "2 – 5 Days",
          concept: "Proximity card and long-range RFID tag reader systems for managing employee cards, visitor badges, and vehicle parking gates.",
          features: [
            "Long-range windshield tag readers for vehicle boom barriers",
            "Encrypted RFID smart cards and keyfob programming",
            "Temporary visitor badge registration software",
            "Audit trail logging of all entry & exit movements",
          ],
          useCase: "Gated communities, corporate parking lots, and logistics yards.",
        },
      ]}
    />
  );
}