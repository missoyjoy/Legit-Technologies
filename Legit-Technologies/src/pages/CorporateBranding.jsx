import React from "react";
import ServiceLayout from "../components/ServiceLayout";

export default function CorporateBranding() {
  return (
    <ServiceLayout
      title="Corporate Branding & Signage"
      category="Division 03: Branding, Print & Academy"
      tagline="3D illuminated signage, vehicle wraps, brand guidelines, and visual identity systems built for market authority."
      image="Innovate.jpg"
      techStack={[
        "3D CNC Routers",
        "LED Lighting",
        "Adobe Illustrator",
        "Vinyl Cutting",
        "Acrylic Fabrication",
      ]}
      branches={[
        {
          title: "3D Architectural & Outdoor Signage",
          timeline: "1 – 2 Weeks",
          concept:
            "Custom design, fabrication, and physical mounting of 3D illuminated channel letters and outdoor storefront signs.",
          features: [
            "3D CNC precision-cut acrylic, brass, & stainless steel letters",
            "Energy-efficient internal LED module illumination",
            "Weather-resistant powder-coated exterior metal finishes",
            "Professional structural wall mounting & electrical hookup",
          ],
          useCase:
            "Storefronts, corporate headquarters, and commercial building exteriors.",
        },
        {
          title: "Logo Design & Visual Identity Systems",
          timeline: "1 – 3 Weeks",
          concept:
            "Crafting a memorable corporate visual identity complete with logo variations, typography rules, color palettes, and brand usage guidelines.",
          features: [
            "Vector logo design with full source file ownership",
            "Comprehensive Brand Style Guide book (PDF)",
            "Color codes for Print (CMYK) and Digital (RGB/HEX)",
            "Typography pairing rules and graphic asset libraries",
          ],
          useCase:
            "New business launches and established companies undertaking a brand refresh.",
        },
        {
          title: "Commercial Vehicle Fleet Wraps",
          timeline: "3 – 7 Days",
          concept:
            "Full or partial vinyl wrapping for corporate delivery vans, sales cars, and buses to turn your fleet into mobile billboards.",
          features: [
            "High-durability cast vinyl with UV protective lamination",
            "Precision wrap application with zero paint damage",
            "High-resolution full-color printing technology",
            "Window graphics using perforated one-way vision vinyl",
          ],
          useCase:
            "Logistics companies, field service fleets, and branded delivery vehicles.",
        },
        {
          title: "Corporate Stationery & Staff Badges",
          timeline: "2 – 5 Days",
          concept:
            "Designing and printing essential day-to-day branded business collateral, staff credentials, and corporate identity accessories.",
          features: [
            "Premium business cards with spot-UV & foil embossing",
            "Branded letterheads, envelopes, & presentation folders",
            "PVC staff ID cards with custom printed lanyards",
            "Branded corporate uniforms, polo shirts, & badges",
          ],
          useCase:
            "HR and marketing teams maintaining brand standards across all touchpoints.",
        },
      ]}
    />
  );
}