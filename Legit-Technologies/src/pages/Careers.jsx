// src/pages/Careers.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLaptopCode,
  FaShieldAlt,
  FaNetworkWired,
  FaPaintBrush,
  FaHandshake,
  FaGraduationCap,
  FaUsers,
  FaClock,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaEnvelope,
  FaArrowRight,
  FaStore,
} from "react-icons/fa";

// 👉 Change this to your real careers email
const CAREERS_EMAIL = "careers@yourdomain.com";

const filters = ["All", "Engineering", "Security & Hardware", "Sales & Branding", "Internships"];

const perks = [
  {
    icon: FaLaptopCode,
    title: "Learn the Whole Stack",
    text: "Work across software, networking, security systems and branding, not just one narrow corner.",
  },
  {
    icon: FaUsers,
    title: "Real Clients, Real Impact",
    text: "Your work goes live for real businesses and organisations, not into a drawer.",
  },
  {
    icon: FaGraduationCap,
    title: "Grow With Our Academy",
    text: "Mentorship, workshops and hands-on labs to sharpen your skills while you work.",
  },
  {
    icon: FaHandshake,
    title: "Integrity First",
    text: "We live our tagline: honest work, fair dealing and quality customers can trust.",
  },
];

// 👉 SAMPLE ROLES: replace with your real vacancies (add, remove or edit freely)
const openings = [
  {
    id: 1,
    title: "Full-Stack Developer",
    dept: "Engineering",
    type: "Full-time",
    location: "On-site",
    icon: FaLaptopCode,
    summary: "Build web apps, portals and automation tools for our clients, from database to interface.",
    requirements: ["React and Node.js (or similar)", "REST APIs and databases", "Git and clean code habits"],
  },
  {
    id: 2,
    title: "Network Engineer",
    dept: "Engineering",
    type: "Full-time",
    location: "On-site / Field",
    icon: FaNetworkWired,
    summary: "Design, install and maintain LAN/WAN, Wi-Fi and firewall setups for business clients.",
    requirements: ["Routing, switching and structured cabling", "Wi-Fi and VPN configuration", "Network troubleshooting"],
  },
  {
    id: 3,
    title: "CCTV & Access Control Technician",
    dept: "Security & Hardware",
    type: "Full-time",
    location: "Field work",
    icon: FaShieldAlt,
    summary: "Install and support CCTV, biometric and access control systems at client sites.",
    requirements: ["IP camera and NVR installation", "Biometric and access control setup", "Customer-friendly on-site service"],
  },
  {
    id: 4,
    title: "Sales & Account Executive",
    dept: "Sales & Branding",
    type: "Full-time",
    location: "On-site / Field",
    icon: FaStore,
    summary: "Grow relationships with clients buying IT hardware, security systems and POS solutions.",
    requirements: ["Strong communication skills", "Interest in technology products", "Target-driven and organised"],
  },
  {
    id: 5,
    title: "Graphic Designer & Brand Specialist",
    dept: "Sales & Branding",
    type: "Full-time",
    location: "On-site",
    icon: FaPaintBrush,
    summary: "Create logos, signage, print materials and digital creatives for client brands.",
    requirements: ["Adobe Illustrator / Photoshop or Figma", "Print and signage design experience", "A portfolio we can see"],
  },
  {
    id: 6,
    title: "Technical Intern / Attachment",
    dept: "Internships",
    type: "Internship",
    location: "On-site",
    icon: FaGraduationCap,
    summary: "Learn hands-on across software, networking and security systems alongside our team.",
    requirements: ["Student or recent graduate in IT or related field", "Eager to learn and take feedback", "Good attendance and attitude"],
  },
];

const steps = [
  { n: "01", title: "Apply", text: "Send your CV and a short note about the role you want." },
  { n: "02", title: "Screening Call", text: "A quick chat to get to know you and your goals." },
  { n: "03", title: "Practical Interview", text: "Show us your skills with a real, relevant task." },
  { n: "04", title: "Offer & Onboarding", text: "Join the team and start learning from day one." },
];

function Careers() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleJobs =
    activeFilter === "All" ? openings : openings.filter((j) => j.dept === activeFilter);

  const applyLink = (title) =>
    `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent("Application: " + title)}`;

  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-900 dark:bg-[#061A3A] dark:text-white transition-colors duration-300">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12 lg:pt-20 lg:pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          <span className="inline-block px-3.5 py-1 text-xs font-extrabold tracking-widest uppercase rounded-full bg-[#0A4DA2]/10 text-[#0A4DA2] dark:bg-[#19C2FF]/10 dark:text-[#19C2FF]">
            Careers at Legit Technologies
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            Build a Career <br />
            <span className="text-[#0A4DA2] dark:text-[#19C2FF]">That's Truly Legit</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Join a team that builds software, installs security systems, supplies technology and
            shapes brands. Learn fast, work on real projects and grow with us.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-3">
            <a
              href="#openings"
              className="px-7 py-3.5 rounded-xl font-bold text-sm bg-[#0A4DA2] text-white hover:bg-[#061A3A] dark:bg-[#19C2FF] dark:text-[#061A3A] dark:hover:bg-white transition inline-flex items-center gap-2"
            >
              View Open Roles <FaArrowRight size={13} />
            </a>
            <a
              href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent("CV Submission")}`}
              className="px-7 py-3.5 rounded-xl font-bold text-sm border border-[#0A4DA2]/40 text-[#0A4DA2] hover:bg-[#0A4DA2]/10 dark:border-[#19C2FF]/50 dark:text-[#19C2FF] dark:hover:bg-[#19C2FF]/10 transition inline-flex items-center gap-2"
            >
              <FaEnvelope size={14} /> Send Your CV
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= WHY JOIN US ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#0A4DA2] dark:text-[#19C2FF]">
            Why Join Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-black">More Than Just a Job</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white dark:bg-[#0A2350] p-7 rounded-3xl border border-slate-200 dark:border-[#19C2FF]/20 shadow-sm hover:shadow-xl transition space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#0A4DA2]/10 text-[#0A4DA2] dark:bg-[#19C2FF]/10 dark:text-[#19C2FF]">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-extrabold">{perk.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{perk.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ================= OPEN ROLES ================= */}
      <section id="openings" className="max-w-7xl mx-auto px-6 pb-16 scroll-mt-24">
        <div className="text-center mb-8 space-y-2">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#0A4DA2] dark:text-[#19C2FF]">
            Open Roles
          </span>
          <h2 className="text-2xl sm:text-3xl font-black">Find Your Place on the Team</h2>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-bold border transition ${
                activeFilter === f
                  ? "bg-[#0A4DA2] text-white border-[#0A4DA2] dark:bg-[#19C2FF] dark:text-[#061A3A] dark:border-[#19C2FF] shadow-md"
                  : "bg-white dark:bg-[#0A2350] text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-[#0A4DA2]/40"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {visibleJobs.map((job) => {
              const Icon = job.icon;
              return (
                <div
                  key={job.id}
                  className="bg-white dark:bg-[#0A2350] rounded-3xl border border-slate-200 dark:border-[#19C2FF]/20 shadow-sm hover:shadow-xl transition p-8 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center bg-[#0A4DA2]/10 text-[#0A4DA2] dark:bg-[#19C2FF]/10 dark:text-[#19C2FF]">
                        <Icon size={22} />
                      </div>
                      <span className="px-3 py-1 text-xs font-bold rounded-full bg-slate-100 text-[#0A4DA2] dark:bg-[#061A3A] dark:text-[#19C2FF]">
                        {job.dept}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold">{job.title}</h3>

                    <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
                      <span className="inline-flex items-center gap-1.5">
                        <FaClock /> {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <FaMapMarkerAlt /> {job.location}
                      </span>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{job.summary}</p>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        What We're Looking For
                      </p>
                      {job.requirements.map((req) => (
                        <div
                          key={req}
                          className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200"
                        >
                          <FaCheckCircle className="text-[#0A4DA2] dark:text-[#19C2FF] shrink-0" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={applyLink(job.title)}
                    className="w-full py-3 px-5 rounded-xl font-bold text-sm text-center inline-flex items-center justify-center gap-2 transition bg-slate-100 dark:bg-[#061A3A] text-[#0A4DA2] dark:text-[#19C2FF] hover:bg-[#0A4DA2] hover:text-white dark:hover:bg-[#19C2FF] dark:hover:text-[#061A3A]"
                  >
                    <span>Apply for this role</span>
                    <FaArrowRight size={14} />
                  </a>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ================= HOW WE HIRE ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#0A4DA2] dark:text-[#19C2FF]">
            Hiring Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-black">How We Hire</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative bg-white dark:bg-[#0A2350] p-7 rounded-3xl border border-slate-200 dark:border-[#19C2FF]/20 shadow-sm space-y-2"
            >
              <span className="text-4xl font-black text-[#0A4DA2]/20 dark:text-[#19C2FF]/25">{s.n}</span>
              <h3 className="text-lg font-extrabold">{s.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-24 text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#0A4DA2] to-[#061A3A] dark:from-[#0A2350] dark:to-[#061A3A] text-white p-10 sm:p-14 rounded-3xl border border-[#19C2FF]/30 shadow-2xl space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Don't See Your Role?</h2>
          <p className="text-slate-200 text-base sm:text-lg max-w-xl mx-auto">
            We are always looking for talented people. Send us your CV and tell us how you can add
            value, and we will keep you in mind for upcoming openings.
          </p>
          <a
            href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent("General Application")}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-[#19C2FF] text-[#061A3A] hover:bg-white transition transform hover:-translate-y-0.5"
          >
            <FaEnvelope /> Send Your CV
          </a>
        </div>
      </section>
    </div>
  );
}

export default Careers;






