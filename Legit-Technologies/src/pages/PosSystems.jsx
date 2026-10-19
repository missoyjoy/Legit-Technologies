import React from "react";
import ServiceLayout from "../components/ServiceLayout";

export default function PosSystems() {
  return (
    <ServiceLayout
      title="Point of Sale (POS) Systems"
      category="Division 02: Hardware, CCTV & POS"
      tagline="Integrated POS hardware and software packages for retail outlets, supermarkets, and multi-branch hubs."
      image="/legit3logo.png"
      techStack={["Thermal Printers", "Barcode Scanners", "POS Terminals", "Cash Drawers", "Cloud POS"]}
      branches={[
        {
          title: "Touchscreen POS Terminal Units",
          timeline: "1 – 3 Days",
          concept: "Commercial-grade, spill-resistant touchscreen terminal units built for fast cashier checkout speed in busy retail environments.",
          features: [
            "Heavy-duty fanless touchscreen hardware for 24/7 runtimes",
            "Customer-facing secondary display screens for order viewing",
            "Integrated magnetic card and M-Pesa QR code payment steps",
            "Compact footprint space-saving counter design",
          ],
          useCase: "Supermarkets, restaurants, retail shops, and pharmacies.",
        },
        {
          title: "Barcode Scanners & Thermal Receipt Printers",
          timeline: "1 – 2 Days",
          concept: "High-speed 1D/2D omnidirectional barcode readers paired with heavy-duty thermal receipt printing units for rapid item scanning.",
          features: [
            "Hands-free omnidirectional presentation scanners for fast checkout",
            "High-speed 250mm/sec thermal receipt printers",
            "Heavy-gauge steel cash drawers linked to receipt printing",
            "Wireless hand-held scanners for bulky warehouse items",
          ],
          useCase: "High-volume checkout counters requiring rapid transaction speeds.",
        },
        {
          title: "Inventory & Stock Management Software",
          timeline: "2 – 4 Days",
          concept: "Comprehensive software that automatically deducts stock as sales happen, tracks profit margins, and alerts managers when stock runs low.",
          features: [
            "Real-time stock level updates with re-order alerts",
            "Batch number & expiration date tracking for perishable goods",
            "Supplier purchase order generation & cost management",
            "Sales profit margin and tax (VAT) report generation",
          ],
          useCase: "Store managers needing tight control over stock and inventory theft prevention.",
        },
        {
          title: "Multi-Branch Cloud Sales Synchronization",
          timeline: "2 – 5 Days",
          concept: "Centralized cloud portal that aggregates live sales data, stock transfers, and price updates across all your physical store locations.",
          features: [
            "Centralized dashboard showing real-time sales across all branches",
            "Remote price updates pushed to all stores instantly",
            "Inter-branch stock transfer tracking and verification",
            "Offline sale recording with automated cloud sync on reconnection",
          ],
          useCase: "Retail chains operating multiple shops from a single head office.",
        },
      ]}
    />
  );
}