import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLaptopCode,
  FaDesktop,
  FaPrint,
  FaCheckCircle,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";

function Services() {
  const [activeTab, setActiveTab] = useState("software");

  // Catalog with explicit local image paths and route landing pages
  const serviceCategories = {
    software: {
      title: "Technology Engineering, Mobile & Cybersecurity",
      icon: <FaLaptopCode size={22} />,
      tagline: "Custom software architecture, mobile engineering, cloud ops, network disciplines, and deep cybersecurity defense.",
      services: [
        {
          name: "Custom Software & Enterprise Web Applications",
          desc: "Bespoke ERPs, CRMs, automation engines, web portals, and system integration engineered for operational scale.",
          img: "App.jpg",
          path: "/services/software-development",
          deliverables: [
            "Enterprise Web Applications",
            "API Pipelines & System Integration",
            "SaaS Product Engineering",
            "Workflow Automation Engines",
          ],
        },
        {
          name: "Mobile App Development (iOS & Android)",
          desc: "High-performance native iOS, Android, and cross-platform mobile applications with offline-first sync and cloud APIs.",
          img: "/Phone.jpg",
          path: "/services/mobile-apps",
          deliverables: [
            "Native iOS (Swift) Apps",
            "Native Android (Kotlin) Solutions",
            "Cross-Platform (Flutter / React Native)",
            "Mobile Hardware & Biometric Sync",
          ],
        },
        {
          name: "Cybersecurity & Defense Disciplines",
          desc: "Multi-layered threat mitigation, penetration testing, compliance frameworks, and infrastructure hardening.",
          img: "Cybersec.jpg",
          path: "/services/cybersecurity",
          deliverables: [
            "Penetration Testing & Audits",
            "Network Threat Intelligence & SIEM",
            "Cloud Security & IAM Protocols",
            "Data Encryption & Compliance",
          ],
        },
        {
          name: "Networking & Infrastructure Disciplines",
          desc: "End-to-end network topology design, structured cabling, enterprise Wi-Fi, and VPN perimeter configurations.",
          img: "networking.jpg",
          path: "/services/networking",
          deliverables: [
            "LAN/WAN Structured Cabling & Fiber",
            "Wireless Mesh & Enterprise Wi-Fi",
            "VPN & SD-WAN Architecture",
            "Firewalls & Bandwidth Control",
          ],
        },
      ],
    },

    hardware: {
      title: "Technology Products, Physical Security & POS",
      icon: <FaDesktop size={22} />,
      tagline: "Commercial-grade IT hardware supplies, surveillance arrays, biometric access control, and POS retail systems.",
      services: [
        {
          name: "Biometrics & Access Control",
          desc: "Hardware-software integrated access control terminals for facility security and automated payroll time-attendance.",
          img: "/cctv.jpg",
          path: "/services/biometrics",
          deliverables: [
            "Fingerprint & Facial Recognition",
            "Automated Attendance & Payroll Export",
            "Smart Turnstiles & Magnetic Locks",
            "Centralized RFID Gate Access",
          ],
        },
        {
          name: "CCTV & Surveillance Systems",
          desc: "AI-driven high-definition camera arrays with thermal detection, license plate reading, and mobile cloud surveillance.",
          img: "cctv.jpg",
          path: "/services/cctv-surveillance",
          deliverables: [
            "AI Motion-Detecting IP CCTV",
            "Thermal & ANPR License Plate Readers",
            "NVR & Redundant Cloud Storage",
            "Remote Mobile View Setup",
          ],
        },
        {
          name: "Laptops, Desktops & IT Accessories",
          desc: "Authorized supply of commercial workstations, enterprise laptops, server racks, networking gear, and printers.",
          img: "laptops.jpg",
          path: "/services/it-hardware",
          deliverables: [
            "High-Performance Workstations",
            "Server Racks & Heavy-Duty UPS Backups",
            "Printers, Scanners & Accessories",
            "Networking Equipment & Switches",
          ],
        },
        {
          name: "Point of Sale (POS) Systems",
          desc: "Integrated POS hardware and software packages for retail outlets, supermarkets, and multi-branch hubs.",
          img: "legit3logo.png",
          path: "/services/pos-systems",
          deliverables: [
            "Barcode Scanners & Thermal Printers",
            "Touchscreen POS Terminal Units",
            "Inventory & Stock Tracking Software",
            "Multi-Branch Cloud Sales Sync",
          ],
        },
      ],
    },

    branding: {
      title: "Business Solutions, Branding & Media",
      icon: <FaPrint size={22} />,
      tagline: "Physical signage, commercial printing, digital marketing, corporate email systems, and company web design.",
      services: [
        {
          name: "Corporate Branding & Signage",
          desc: "3D illuminated signage, vehicle wraps, brand guidelines, and visual identity systems built for market authority.",
          img: "Innovate.jpg",
          path: "/services/corporate-branding",
          deliverables: [
            "Logo Design & Visual Identity",
            "3D Architectural & Outdoor Signage",
            "Vehicle Wraps & Company Uniforms",
            "Corporate Stationery & Badges",
          ],
        },
        {
          name: "Commercial & Large-Format Printing",
          desc: "Precision high-resolution physical printing for marketing materials, catalogues, and promotional collateral.",
          img: "Infrastructure.jpg",
          path: "/services/commercial-printing",
          deliverables: [
            "Banners, Teardrops & Roll-Ups",
            "Company Catalogues & Flyers",
            "Custom Branded Merchandise",
            "High-Volume Document Printing",
          ],
        },
        {
          name: "Business Emails & Company Websites",
          desc: "Secure corporate communication setups, professional domain management, and high-converting web presence.",
          img: "Webdesign.jpg",
          path: "/services/digital-solutions",
          deliverables: [
            "Google Workspace / M365 Email Setup",
            "Corporate Web Design & Domain Setup",
            "Digital Marketing & SEO Campaigns",
            "Performance Ad Tracking",
          ],
        },
        {
          name: "Technical Upskilling & Education (Academy)",
          desc: "Hands-on bootcamps, workshops, and technical mentorship in full-stack software, security, and digital skills.",
          img: "Upskilling.jpg",
          path: "/services/education",
          deliverables: [
            "Full-Stack Web & Mobile Bootcamps",
            "Hardware & Security System Labs",
            "Enterprise Network Infrastructure",
            "Digital Skills Mentorship",
          ],
        },
      ],
    },
  };

  const currentTab = serviceCategories[activeTab];

  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-900 dark:bg-[#061A3A] dark:text-white transition-colors duration-300">
      
      {/* ================= HERO HEADER ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-10 lg:pt-20 lg:pb-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          <span className="inline-block px-3.5 py-1 text-xs font-extrabold tracking-widest uppercase rounded-full bg-[#0A4DA2]/10 text-[#0A4DA2] dark:bg-[#19C2FF]/10 dark:text-[#19C2FF]">
            Legit Technologies Solutions Catalog
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            Our Complete <br />
            <span className="text-[#0A4DA2] dark:text-[#19C2FF]">
              Tech, Security & Brand Solutions
            </span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Select a division below to explore our hardware, software, security, and branding disciplines.
          </p>
        </motion.div>
      </section>

      {/* ================= DIVISION SELECTOR TABS ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          
          <button
            onClick={() => setActiveTab("software")}
            className={`p-5 rounded-2xl font-bold transition flex items-center justify-between border text-left ${
              activeTab === "software"
                ? "bg-[#0A4DA2] text-white border-[#0A4DA2] dark:bg-[#19C2FF] dark:text-[#061A3A] dark:border-[#19C2FF] shadow-lg"
                : "bg-white dark:bg-[#0A2350] text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-[#0A4DA2]/40"
            }`}
          >
            <div className="flex items-center gap-3">
              <FaLaptopCode size={24} />
              <div>
                <p className="text-sm font-black">Division 01</p>
                <p className="text-xs opacity-90">Software, Cyber & Mobile</p>
              </div>
            </div>
            <span>→</span>
          </button>

          <button
            onClick={() => setActiveTab("hardware")}
            className={`p-5 rounded-2xl font-bold transition flex items-center justify-between border text-left ${
              activeTab === "hardware"
                ? "bg-[#0A4DA2] text-white border-[#0A4DA2] dark:bg-[#19C2FF] dark:text-[#061A3A] dark:border-[#19C2FF] shadow-lg"
                : "bg-white dark:bg-[#0A2350] text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-[#0A4DA2]/40"
            }`}
          >
            <div className="flex items-center gap-3">
              <FaDesktop size={24} />
              <div>
                <p className="text-sm font-black">Division 02</p>
                <p className="text-xs opacity-90">Hardware, CCTV & POS</p>
              </div>
            </div>
            <span>→</span>
          </button>

          <button
            onClick={() => setActiveTab("branding")}
            className={`p-5 rounded-2xl font-bold transition flex items-center justify-between border text-left ${
              activeTab === "branding"
                ? "bg-[#0A4DA2] text-white border-[#0A4DA2] dark:bg-[#19C2FF] dark:text-[#061A3A] dark:border-[#19C2FF] shadow-lg"
                : "bg-white dark:bg-[#0A2350] text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-[#0A4DA2]/40"
            }`}
          >
            <div className="flex items-center gap-3">
              <FaPrint size={24} />
              <div>
                <p className="text-sm font-black">Division 03</p>
                <p className="text-xs opacity-90">Branding, Print & Academy</p>
              </div>
            </div>
            <span>→</span>
          </button>

        </div>
      </section>

      {/* ================= ACTIVE DIVISION DISCIPLINE CARDS ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-10"
          >
            {/* Division Banner */}
            <div className="bg-white dark:bg-[#0A2350] p-8 rounded-3xl border border-slate-200 dark:border-[#19C2FF]/20 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="space-y-2">
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#0A4DA2] dark:text-[#19C2FF]">
                  Selected Division
                </span>
                <h2 className="text-2xl sm:text-3xl font-black">{currentTab.title}</h2>
                <p className="text-slate-600 dark:text-slate-300 text-sm max-w-2xl">
                  {currentTab.tagline}
                </p>
              </div>

              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-[#0A4DA2] text-white hover:bg-[#061A3A] dark:bg-[#19C2FF] dark:text-[#061A3A] dark:hover:bg-white transition whitespace-nowrap"
              >
                Book an Appointment
              </Link>
            </div>

            {/* Service Cards with Image & Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentTab.services.map((srv, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#0A2350] rounded-3xl border border-slate-200 dark:border-[#19C2FF]/20 shadow-sm hover:shadow-xl transition overflow-hidden flex flex-col justify-between"
                >
                  {/* Card Image Header */}
                  <div className="w-full h-52 bg-slate-200 dark:bg-[#061A3A] relative overflow-hidden">
                    <img
                      src={srv.img}
                      alt={srv.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80";
                      }}
                      className="w-full h-full object-cover transition transform hover:scale-105 duration-500"
                    />
                  </div>

                  {/* Card Content Body */}
                  <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                    <div className="space-y-3">
                      <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                        {srv.name}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>

                    {/* Deliverables List */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Key Capabilities & Deliverables
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {srv.deliverables.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200"
                          >
                            <FaCheckCircle className="text-[#0A4DA2] dark:text-[#19C2FF] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Link Button to Sub-Page */}
                    <div className="pt-4">
                      <Link
                        to={srv.path}
                        className="w-full py-3 px-5 rounded-xl font-bold text-sm text-center inline-flex items-center justify-center gap-2 transition bg-slate-100 dark:bg-[#061A3A] text-[#0A4DA2] dark:text-[#19C2FF] hover:bg-[#0A4DA2] hover:text-white dark:hover:bg-[#19C2FF] dark:hover:text-[#061A3A]"
                      >
                        <span>Explore {srv.name.split(" ")[0]} Discipline</span>
                        <FaArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ================= FINAL CTA & CALL BUTTON ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-24 text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#0A4DA2] to-[#061A3A] dark:from-[#0A2350] dark:to-[#061A3A] text-white p-10 sm:p-14 rounded-3xl border border-[#19C2FF]/30 shadow-2xl space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to Start Your Technical Project?</h2>
          <p className="text-slate-200 text-base sm:text-lg max-w-xl mx-auto">
            Speak directly with our technical team to schedule a site audit or discuss custom software, hardware, and branding packages.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl font-bold bg-[#19C2FF] text-[#061A3A] hover:bg-white transition transform hover:-translate-y-0.5"
            >
              Book an Appointment
            </Link>
            <a
              href="tel:+254XXXXXXXXX"
              className="px-8 py-4 rounded-xl font-bold border border-[#19C2FF]/50 text-white hover:bg-white/10 transition inline-flex items-center gap-2"
            >
              <FaPhoneAlt /> Call Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;








