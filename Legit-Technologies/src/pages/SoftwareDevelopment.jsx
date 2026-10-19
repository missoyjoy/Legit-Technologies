import React from "react";
import ServiceLayout from "../components/ServiceLayout";

export default function SoftwareDevelopment() {
  return (
    <ServiceLayout
      title="Custom Software & Enterprise Web Applications"
      category="Division 01: Software, Cyber & Mobile"
      tagline="Bespoke ERPs, CRMs, automation engines, web portals, and system integration engineered for operational scale."
      image="/App.jpg"
      techStack={["React", "Node.js", "Python", "Flask", "Django", "PostgreSQL", "Docker", "AWS"]}
      branches={[
        {
          title: "Enterprise Web Applications & Dashboards",
          timeline: "3 – 8 Weeks",
          concept: "Custom web-based business portals, management platforms, and operational dashboards engineered for multi-user real-time workflows.",
          features: [
            "Role-Based Access Control (RBAC) & Secure SSO",
            "Real-time operational analytics & exportable reports",
            "Cloud database design optimized for high concurrency",
            "Responsive web interface compatible across all screens",
          ],
          useCase: "Organizations replacing fragmented spreadsheets with centralized web portals.",
        },
        {
          title: "API Pipelines & System Integration",
          timeline: "2 – 4 Weeks",
          concept: "Architecting secure RESTful and GraphQL API bridges that sync isolated software systems, payment gateways, and third-party services.",
          features: [
            "Automated multi-directional data synchronization",
            "Bank & mobile money (M-Pesa, Card) gateway integrations",
            "Legacy database transformation & migration pipelines",
            "Rate-limited, encrypted API security endpoints",
          ],
          useCase: "Companies needing seamless communication between existing legacy systems and modern apps.",
        },
        {
          title: "SaaS Product Engineering",
          timeline: "6 – 12 Weeks",
          concept: "End-to-end development of subscription multi-tenant web products built for market deployment, high speed, and automated billing.",
          features: [
            "Multi-tenant database isolation & security",
            "Automated recurring subscription billing engines",
            "Self-service onboarding & user management",
            "Scalable microservices infrastructure",
          ],
          useCase: "Startups and enterprises launching commercial software products to subscribers.",
        },
        {
          title: "Workflow Automation Engines",
          timeline: "2 – 5 Weeks",
          concept: "Digitizing manual paper-based processes into automated software triggers to eliminate human error and speed up approvals.",
          features: [
            "Digital document creation, signatures, & tracking",
            "Automated email, SMS, & WhatsApp notification alerts",
            "Multi-tier approval workflows & audit logging",
            "Scheduled background task automation execution",
          ],
          useCase: "Operations departments seeking to eliminate manual paperwork and speed up approvals.",
        },
      ]}
    />
  );
}