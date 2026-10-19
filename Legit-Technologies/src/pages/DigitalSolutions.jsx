import React from "react";
import ServiceLayout from "../components/ServiceLayout";

export default function DigitalSolutions() {
  return (
    <ServiceLayout
      title="Business Emails & Company Websites"
      category="Division 03: Branding, Print & Academy"
      tagline="Secure corporate communication setups, professional domain management, and high-converting web presence."
      image="/Webdesign.jpg"
      techStack={["React", "WordPress", "Google Workspace", "Microsoft 365", "Google Ads", "SEO"]}
      branches={[
        {
          title: "Google Workspace & Microsoft 365 Email Setup",
          timeline: "1 – 3 Days",
          concept: "Provisioning professional domain-branded email addresses (@yourcompany.com) with cloud storage, calendars, and security.",
          features: [
            "Domain verification & DNS setup (MX, SPF, DKIM records)",
            "Migration of existing emails without downtime or data loss",
            "Shared team cloud storage (Google Drive / OneDrive)",
            "Advanced spam, phishing, and malware protection filter",
          ],
          useCase: "Companies modernizing corporate communications and ditching generic free emails.",
        },
        {
          title: "Corporate Web Design & Domain Setup",
          timeline: "2 – 4 Weeks",
          concept: "Designing and deploying fast, search-optimized websites that establish credibility and turn visitors into qualified leads.",
          features: [
            "Custom responsive design tailored for mobile & desktop",
            "Search Engine Optimization (SEO) setup for top Google ranking",
            "Interactive contact forms, live chat, & WhatsApp integration",
            "Fast cloud web hosting with free SSL certificate installation",
          ],
          useCase: "Businesses seeking a professional web presence to attract new clients.",
        },
        {
          title: "Digital Marketing & Targeted Ad Campaigns",
          timeline: "Ongoing / 1 Week Setup",
          concept: "Managing paid search and social ad campaigns (Google Ads, Meta) to put your services directly in front of active buyers.",
          features: [
            "Google Search PPC campaign creation & keyword targeting",
            "Meta (Facebook/Instagram) B2B & B2C lead generation ads",
            "A/B testing ad copy & graphic banners for highest conversion",
            "Monthly ROI performance reporting & budget tuning",
          ],
          useCase: "Companies looking to generate a consistent stream of inbound inquiries.",
        },
        {
          title: "Performance Ad Tracking & Web Analytics",
          timeline: "2 – 4 Days",
          concept: "Installing tracking tools on your site to measure where website visitors come from, what pages they read, and why they buy.",
          features: [
            "Google Analytics 4 (GA4) custom event tracking",
            "Heatmap installation (Hotjar) to view user cursor movements",
            "Conversion tracking for call button clicks & form fills",
            "Automated monthly executive performance dashboards",
          ],
          useCase: "Marketing managers seeking data-driven insights into website lead performance.",
        },
      ]}
    />
  );
}