import React from "react";
import ServiceLayout from "../components/ServiceLayout";

export default function Cybersecurity() {
  return (
    <ServiceLayout
      title="Cybersecurity & Defense Disciplines"
      category="Division 01: Software, Cyber & Mobile"
      tagline="Multi-layered threat mitigation, penetration testing, compliance frameworks, and infrastructure hardening."
      image="/Cybersec.jpg"
      techStack={["Wireshark", "Metasploit", "Burp Suite", "pfSense", "Snort SIEM", "ISO 27001"]}
      branches={[
        {
          title: "Penetration Testing & Vulnerability Audits",
          timeline: "1 – 3 Weeks",
          concept: "Controlled ethical hacking operations simulated against your web platforms, mobile apps, and servers to identify security gaps.",
          features: [
            "OWASP Top 10 web & API vulnerability assessments",
            "Network infrastructure penetration testing",
            "Detailed executive risk reports & remediation steps",
            "Post-remediation re-testing & clearance certification",
          ],
          useCase: "Financial institutions, e-commerce sites, and firms preparing for compliance audits.",
        },
        {
          title: "Network Threat Intelligence & SIEM",
          timeline: "2 – 4 Weeks",
          concept: "Deployment of Security Information & Event Management (SIEM) systems that log and analyze network traffic in real time to stop intrusions.",
          features: [
            "24/7 automated log collection & traffic monitoring",
            "Intrusion Detection & Prevention Systems (IDS/IPS)",
            "Instant alert mechanisms for suspicious IP activities",
            "Incident response playbooks & mitigation protocols",
          ],
          useCase: "Enterprise networks requiring continuous active surveillance against malware and attacks.",
        },
        {
          title: "Cloud Security & Identity Access Protocols",
          timeline: "1 – 2 Weeks",
          concept: "Enforcing Zero-Trust access rules across cloud infrastructure to ensure only authorized personnel access sensitive corporate data.",
          features: [
            "Multi-Factor Authentication (MFA) enforcement",
            "Role-Based Identity & Access Management (IAM)",
            "Cloud perimeter firewall hardening (AWS/Azure)",
            "Data Loss Prevention (DLP) configuration",
          ],
          useCase: "Companies migrating data to cloud servers or running hybrid remote work setups.",
        },
        {
          title: "Data Encryption & Regulatory Compliance",
          timeline: "2 – 4 Weeks",
          concept: "Structuring company data storage and transit channels to comply with data protection regulations and privacy mandates.",
          features: [
            "End-to-end encryption for stored & in-transit data (AES-256)",
            "Data Protection Impact Assessments (DPIA)",
            "Policy creation for data retention & destruction",
            "Employee security awareness training modules",
          ],
          useCase: "Organizations handling sensitive customer records, financial data, or health details.",
        },
      ]}
    />
  );
}