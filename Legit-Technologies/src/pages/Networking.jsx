import React from "react";
import ServiceLayout from "../components/ServiceLayout";

export default function Networking() {
  return (
    <ServiceLayout
      title="Networking & Infrastructure Disciplines"
      category="Division 01: Software, Cyber & Mobile"
      tagline="End-to-end network topology design, structured cabling, enterprise Wi-Fi, and VPN perimeter configurations."
      image="/networking.jpg"
      techStack={["Cisco", "Ubiquiti UniFi", "MikroTik", "Fortinet", "VLANs", "Fiber Optics"]}
      branches={[
        {
          title: "LAN/WAN Structured Cabling & Fiber",
          timeline: "1 – 3 Weeks",
          concept: "Physical deployment of high-grade network cabling, patch panels, server rack cabinets, and fiber optic backbones for fast data delivery.",
          features: [
            "Category 6A / 7 high-speed copper cabling installation",
            "Multi-mode & single-mode fiber optic splicing",
            "Server rack neatening, labeling, & patch panel mapping",
            "Fluke cable testing & signal loss verification",
          ],
          useCase: "New office buildings, commercial complexes, and industrial warehouses.",
        },
        {
          title: "Enterprise Wireless Mesh & Wi-Fi",
          timeline: "3 – 7 Days",
          concept: "High-density Access Point (AP) installation engineered to cover large physical areas with seamless roaming and zero signal dropouts.",
          features: [
            "RF heat-map site surveys for optimal AP placement",
            "Centralized controller management (UniFi/Cisco)",
            "Isolated Guest Wi-Fi portals with bandwidth limits",
            "Seamless handover roaming across multi-story buildings",
          ],
          useCase: "Hotels, corporate offices, educational institutions, and hospitals.",
        },
        {
          title: "VPN & Multi-Branch SD-WAN Architecture",
          timeline: "3 – 10 Days",
          concept: "Connecting physically distant branch offices together onto a single secure virtual private network so files and systems can be shared.",
          features: [
            "Site-to-Site IPsec & WireGuard encrypted VPN tunnels",
            "Remote worker client-to-site VPN configuration",
            "Software-Defined WAN (SD-WAN) traffic optimization",
            "Redundant dual-ISP failover link setup",
          ],
          useCase: "Businesses with multiple regional branch offices needing shared access to central servers.",
        },
        {
          title: "Firewalls & Bandwidth Management",
          timeline: "2 – 5 Days",
          concept: "Hardware firewall installation and bandwidth shaping to block unauthorized web traffic, prioritize business tools, and prevent bandwidth abuse.",
          features: [
            "Next-Generation Firewall (NGFW) gateway installation",
            "Content filtering (blocking streaming/social media per role)",
            "Quality of Service (QoS) bandwidth shaping for VoIP/video",
            "Deep Packet Inspection & network anti-virus blocking",
          ],
          useCase: "Organizations seeking to secure their internet entry points and boost productive bandwidth.",
        },
      ]}
    />
  );
}