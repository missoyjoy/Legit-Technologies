import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaPhoneAlt,
  FaCalendarAlt,
  FaClock,
  FaCogs,
  FaLayerGroup,
} from "react-icons/fa";

export default function ServiceLayout({
  title,
  category,
  tagline,
  image,
  description,
  branches,
  techStack,
}) {
  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-900 dark:bg-[#061A3A] dark:text-white transition-colors duration-300 pb-24">
      
      {/* ================= BACK TO SERVICES TOGGLE ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-8">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-black bg-white dark:bg-[#0A2350] text-[#0A4DA2] dark:text-[#19C2FF] border border-slate-200 dark:border-[#19C2FF]/30 shadow-md hover:bg-[#0A4DA2] hover:text-white dark:hover:bg-[#19C2FF] dark:hover:text-[#061A3A] transition-all"
        >
          <FaArrowLeft /> ← Back to Main Services Catalog
        </Link>
      </section>

      {/* ================= DISCIPLINE HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-[#0A2350] p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-[#19C2FF]/20 shadow-sm">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 space-y-5"
          >
            <span className="inline-block px-3.5 py-1 text-xs font-extrabold tracking-widest uppercase rounded-full bg-[#0A4DA2]/10 text-[#0A4DA2] dark:bg-[#19C2FF]/10 dark:text-[#19C2FF]">
              {category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              {tagline}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-[#0A4DA2] text-white hover:bg-[#061A3A] dark:bg-[#19C2FF] dark:text-[#061A3A] dark:hover:bg-white transition inline-flex items-center gap-2"
              >
                <FaCalendarAlt /> Schedule Technical Audit
              </Link>
              <a
                href="tel:+254XXXXXXXXX"
                className="px-6 py-3.5 rounded-xl font-bold text-sm border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-white/5 transition inline-flex items-center gap-2"
              >
                <FaPhoneAlt /> Call Technical Team
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5 h-72 sm:h-80 rounded-2xl overflow-hidden bg-slate-200 dark:bg-[#061A3A]"
          >
            <img
              src={image}
              alt={title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80";
              }}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= DISCIPLINE BRANCHES (INDIVIDUAL CARDS) ================= */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black">Specialized Service Branches</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Detailed breakdown of specialized capabilities offered under this discipline.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#0A4DA2] dark:text-[#19C2FF] bg-[#0A4DA2]/5 dark:bg-[#19C2FF]/10 px-4 py-2 rounded-xl">
            <FaLayerGroup />
            <span>{branches.length} Dedicated Branches</span>
          </div>
        </div>

        {/* Detailed Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {branches.map((branch, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white dark:bg-[#0A2350] rounded-3xl border border-slate-200 dark:border-[#19C2FF]/20 p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Branch Badge & Title */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-[#0A4DA2] dark:text-[#19C2FF] bg-[#0A4DA2]/10 dark:bg-[#19C2FF]/10 px-3 py-1 rounded-lg">
                    Branch 0{idx + 1}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold">
                    <FaClock className="text-[#0A4DA2] dark:text-[#19C2FF]" />
                    <span>Est: {branch.timeline}</span>
                  </div>
                </div>

                <h3 className="text-xl font-extrabold">{branch.title}</h3>
                
                {/* Concept Description */}
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {branch.concept}
                </p>

                {/* Key Features/Deliverables */}
                <div className="pt-2 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Branch Features & Specifications
                  </p>
                  <ul className="space-y-2">
                    {branch.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200">
                        <FaCheckCircle className="text-[#0A4DA2] dark:text-[#19C2FF] mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Use Cases Footer */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <span className="text-xs font-extrabold text-[#0A4DA2] dark:text-[#19C2FF] block">
                  Best Suited For:
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                  {branch.useCase}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TECH STACK & CTA ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-[#0A2350] p-8 rounded-3xl border border-slate-200 dark:border-[#19C2FF]/20 shadow-sm space-y-4">
          <div className="flex items-center gap-2 font-extrabold text-lg">
            <FaCogs className="text-[#0A4DA2] dark:text-[#19C2FF]" />
            <h3>Technology Stack & Tools Utilized</h3>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-[#061A3A] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#0A4DA2] to-[#061A3A] text-white p-8 rounded-3xl shadow-xl space-y-4">
          <h3 className="text-xl font-black">Need a Custom Branch Solution?</h3>
          <p className="text-slate-200 text-xs leading-relaxed">
            We provide custom scope assessments and technical estimations tailored to your exact business requirements.
          </p>
          <Link
            to="/contact"
            className="block w-full py-3.5 text-center font-bold text-xs bg-[#19C2FF] text-[#061A3A] hover:bg-white rounded-xl transition"
          >
            Request Official Proposal
          </Link>
        </div>
      </section>

    </div>
  );
}