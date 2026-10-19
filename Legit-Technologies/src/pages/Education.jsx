import React from "react";
import ServiceLayout from "../components/ServiceLayout";

export default function Education() {
  return (
    <ServiceLayout
      title="Technical Upskilling & Education (Academy)"
      category="Division 03: Branding, Print & Academy"
      tagline="Hands-on bootcamps, workshops, and technical mentorship in full-stack software, security, and digital skills."
      image="/Upskilling.jpg"
      techStack={["Full-Stack Labs", "Networking Labs", "CCTV Labs", "Mentorship", "Certifications"]}
      branches={[
        {
          title: "Full-Stack Web & Mobile Coding Bootcamps",
          timeline: "8 – 16 Weeks",
          concept: "Practical coding courses teaching modern software engineering using real client projects rather than theoretical lectures.",
          features: [
            "Full-stack web stack training (React, Node.js, Python/Django)",
            "Mobile development with Flutter & cross-platform tools",
            "Git version control, code reviews, & GitHub portfolio building",
            "Job interview prep & technical resume guidance",
          ],
          useCase: "Individuals breaking into tech and developers leveling up their stack.",
        },
        {
          title: "Hardware & Security Systems Physical Labs",
          timeline: "2 – 4 Weeks",
          concept: "Hands-on installation workshops where students physically wire CCTV cameras, program biometric terminals, and splice fiber optics.",
          features: [
            "IP camera wiring, NVR setup, & mobile connection labs",
            "Biometric access control lock wiring & software integration",
            "Fiber optic cable splicing & OTDR testing practice",
            "Structured Cat6 cabling & patch panel termination labs",
          ],
          useCase: "Field technicians, electricians, and security installers wanting physical technical skills.",
        },
        {
          title: "Enterprise Network & Security Infrastructure Labs",
          timeline: "4 – 8 Weeks",
          concept: "Training corporate IT staff on enterprise router configuration, firewall rules, network monitoring, and cyber defense protocols.",
          features: [
            "Cisco & MikroTik router & switch CLI command training",
            "VLAN segmenting, routing protocols, & firewall rule building",
            "Wireshark packet analysis & network troubleshooting",
            "Penetration testing basics & threat response exercises",
          ],
          useCase: "Companies upskilling internal IT staff to handle enterprise networks.",
        },
        {
          title: "Digital Skills & Corporate Workforce Upskilling",
          timeline: "1 – 2 Weeks",
          concept: "Custom short-course training for non-technical company staff to increase productivity with modern digital tools.",
          features: [
            "Google Workspace & M365 productivity masterclasses",
            "Data analysis & visualization using Excel & BI tools",
            "Cybersecurity awareness training to spot phishing emails",
            "Customer CRM & automated workflow software utilization",
          ],
          useCase: "Organizations seeking to increase workforce digital literacy.",
        },
      ]}
    />
  );
}