import React from "react";
import ServiceLayout from "../components/ServiceLayout";

export default function CommercialPrinting() {
  return (
    <ServiceLayout
      title="Commercial & Large-Format Printing"
      category="Division 03: Branding, Print & Academy"
      tagline="Precision high-resolution physical printing for marketing materials, catalogues, and promotional collateral."
      image="/Infrastructure.jpg"
      techStack={["Large Format Plotters", "UV Flatbed Printers", "Sublimation", "Digital Offset"]}
      branches={[
        {
          title: "Banners, Teardrops & Roll-Up Displays",
          timeline: "1 – 3 Days",
          concept: "Heavy-duty outdoor promotional banners, retractable roll-up stands, and teardrop flags printed at crisp high resolutions.",
          features: [
            "Weatherproof & tear-resistant PVC banner material",
            "Aluminum roll-up display stands with carrying cases",
            "Sublimation-printed teardrop flags with outdoor spike bases",
            "Vibrant UV-resistant ink preventing color fading",
          ],
          useCase: "Trade shows, outdoor events, product launches, and storefront promotions.",
        },
        {
          title: "Company Catalogues, Flyers & Brochures",
          timeline: "2 – 5 Days",
          concept: "High-volume print production of product catalogs, tri-fold brochures, and promotional flyers with custom finishing options.",
          features: [
            "High-gloss or matte paper stock options (130gsm – 350gsm)",
            "Saddle-stitched or perfect-bound booklet binding",
            "Precision folding (bi-fold, tri-fold, z-fold)",
            "Spot-UV coating and metallic foil stamping details",
          ],
          useCase: "Sales teams distributing product sheets and corporate overview material.",
        },
        {
          title: "Custom Branded Merchandise & Gifts",
          timeline: "3 – 7 Days",
          concept: "Printing corporate logos and artwork onto promotional items like notebooks, water bottles, mugs, and USB drives.",
          features: [
            "Direct-to-Object UV printing and laser engraving",
            "Custom corporate notebooks & executive pen sets",
            "Branded ceramic mugs, thermal flasks, & water bottles",
            "Custom packaged corporate gift hampers",
          ],
          useCase: "Client appreciation gifts, end-of-year giveaways, and conference merchandise.",
        },
        {
          title: "High-Volume Document & Report Printing",
          timeline: "1 – 2 Days",
          concept: "Fast print production for long-page manuals, training booklets, financial reports, and architectural blueprints.",
          features: [
            "Rapid digital offset printing for high page counts",
            "Spiral, wire-o, and comb binding options",
            "Clear protective front covers and heavy backboard covers",
            "Large-format blueprint and CAD drawing plotting",
          ],
          useCase: "Annual general meetings (AGMs), legal teams, and construction engineering firms.",
        },
      ]}
    />
  );
}