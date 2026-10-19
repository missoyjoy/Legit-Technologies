import React from "react";
import ServiceLayout from "../components/ServiceLayout";

export default function ItHardware() {
  return (
    <ServiceLayout
      title="Laptops, Desktops & IT Accessories"
      category="Division 02: Hardware, CCTV & POS"
      tagline="Authorized supply of commercial workstations, enterprise laptops, server racks, networking gear, and printers."
      image="/laptops.jpg"
      techStack={["Dell Enterprise", "HP Business", "Lenovo ThinkPad", "APC UPS", "Kyocera"]}
      branches={[
        {
          title: "Commercial Workstations & Enterprise Laptops",
          timeline: "1 – 3 Days",
          concept: "Direct sourcing, staging, and provisioning of commercial-grade laptops and desktop computers built for long operational lifespans.",
          features: [
            "Authorized supply of Dell, HP, and Lenovo business models",
            "Custom OS imaging, software installation, and domain joining",
            "Heavy-duty build quality with original manufacturer warranty",
            "High-performance specs for developers, graphics, & office staff",
          ],
          useCase: "Companies onboarding new employees or upgrading outdated office PCs.",
        },
        {
          title: "Rack Servers & Heavy-Duty Power Backup (UPS)",
          timeline: "2 – 5 Days",
          concept: "Supply and physical mounting of high-capacity rack servers, server cabinets, and uninterruptible power supplies (UPS) to ensure zero downtime.",
          features: [
            "Rackmount server installation (HP ProLiant / Dell PowerEdge)",
            "Online double-conversion UPS backups with battery banks",
            "Temperature-controlled rack server cabinet setups",
            "Power Distribution Units (PDUs) & surge protection",
          ],
          useCase: "Data centers, server rooms, and offices in areas prone to power fluctuations.",
        },
        {
          title: "Multifunction Printers & Scanners",
          timeline: "1 – 2 Days",
          concept: "High-volume commercial laser printers, document scanners, and heavy-duty copiers configured for shared network printing.",
          features: [
            "Networked multi-department printing with PIN access",
            "High-speed duplex scanning to email/network folders",
            "Low-cost-per-page laser printing infrastructure",
            "Scheduled maintenance and genuine toner supply",
          ],
          useCase: "Corporate offices, law firms, and administrative departments with heavy printing needs.",
        },
        {
          title: "Managed Network Switches & Cabinets",
          timeline: "1 – 3 Days",
          concept: "Deployment of Layer 2/3 managed switches, patch panels, and server room hardware accessories to support high-bandwidth traffic.",
          features: [
            "PoE+ managed switches providing data and power on 1 cable",
            "Gigabit & 10G fiber uplink network switch ports",
            "Neat cable management arms and brush panels",
            "Redundant dual-power supply switch units",
          ],
          useCase: "IT departments expanding their physical network port capacity.",
        },
      ]}
    />
  );
}