import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaFingerprint,
  FaPrint,
  FaGraduationCap,
  FaCheckCircle,
  FaBullseye,
  FaEye,
  FaShieldAlt,
  FaUserCheck,
  FaBolt,
  FaClock,
  FaBuilding,
  FaLock,
  FaLaptopCode,
  FaFlagCheckered,
} from "react-icons/fa";

const AboutUs = () => {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: "engineering",
      icon: <FaCode size={20} />,
      title: "01. Full-Stack Systems",
      headline: "Architecting resilient digital infrastructure for modern enterprises.",
      body: "We engineer fault-tolerant web engines, custom API pipelines, enterprise backends, and cloud microservices designed to scale seamlessly.",
      highlights: [
        "Distributed Web Architectures",
        "Custom REST & GraphQL APIs",
        "Cloud-Native Database Systems",
        "Legacy Codebase Modernization",
      ],
    },
    {
      id: "security",
      icon: <FaFingerprint size={20} />,
      title: "02. Smart Automation",
      headline: "Fusing physical facility hardware with digital control protocols.",
      body: "We integrate biometric access terminals, time attendance tracking, and smart AI surveillance straight into cloud dashboards for real-time control.",
      highlights: [
        "Biometric Access & Payroll Sync",
        "AI CCTV Analytics & Motion Logs",
        "IoT Workplace Automation",
        "Centralized Access Dashboards",
      ],
    },
    {
      id: "branding",
      icon: <FaPrint size={20} />,
      title: "03. Physical Branding",
      headline: "Translating digital precision into high-impact physical assets.",
      body: "From large-format signage to precision commercial printing, we produce tangible assets that match the caliber of your technical infrastructure.",
      highlights: [
        "Large Format Printing",
        "Corporate Identity Systems",
        "Commercial Signage",
        "Promotional Materials",
      ],
    },
    {
      id: "academy",
      icon: <FaGraduationCap size={20} />,
      title: "04. Future Academy",
      headline: "Cultivating the next generation of engineers and tech leaders.",
      body: "Our upcoming education division provides intensive technical bootcamps in software engineering, security automation, and digital skills.",
      highlights: [
        "Full-Stack Web Bootcamps",
        "Hardware & Security System Labs",
        "Enterprise IT Infrastructure Workshops",
      ],
    },
  ];

  const milestones = [
    {
      year: "2019",
      icon: <FaBuilding className="text-[#0A4DA2] dark:text-[#19C2FF]" size={24} />,
      title: "Foundation & ICT Supplies",
      desc: "Incorporated in March 2019 to deliver enterprise technology supplies and ICT consulting.",
    },
    {
      year: "2021",
      icon: <FaLock className="text-[#0A4DA2] dark:text-[#19C2FF]" size={24} />,
      title: "Security & Biometrics",
      desc: "Expanded into biometric access control and smart CCTV surveillance systems across commercial facilities.",
    },
    {
      year: "2023",
      icon: <FaLaptopCode className="text-[#0A4DA2] dark:text-[#19C2FF]" size={24} />,
      title: "Full-Stack Software",
      desc: "Formalized custom web engineering, cloud backend, and API integrations for enterprise platforms.",
    },
    {
      year: "Vision 2030",
      icon: <FaFlagCheckered className="text-[#0A4DA2] dark:text-[#19C2FF]" size={24} />,
      title: "National Tech Transformation",
      desc: "Aligned with Kenya Vision 2030 to power regional digital transformation, automation, and upskilling.",
      isVision2030: true,
    },
  ];

  const coreValues = [
    {
      icon: <FaShieldAlt size={22} />,
      title: "Integrity",
      description: "Absolute honesty, transparency, and ethics in code, security, and partnerships.",
    },
    {
      icon: <FaUserCheck size={22} />,
      title: "Professionalism",
      description: "Enterprise-grade competence, accountability, and engineering rigor.",
    },
    {
      icon: <FaBolt size={22} />,
      title: "Effectiveness",
      description: "Innovative solutions engineered to deliver real, measurable operational impact.",
    },
    {
      icon: <FaClock size={22} />,
      title: "Timeliness",
      description: "Strict adherence to deployment schedules without compromising quality.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-900 dark:bg-[#061A3A] dark:text-white transition-colors duration-300">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#0A4DA2] dark:bg-[#19C2FF]"></span>
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#0A4DA2] dark:text-[#19C2FF]">
                The Engineering Standard
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
              Where Technology Meets <br />
              <span className="text-[#0A4DA2] dark:text-[#19C2FF]">
                Operational Mastery.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-2xl">
              Legit Technologies Ltd exists to solve a single problem: the fragmentation of software development, physical security hardware, and brand representation. We engineer unified ecosystems that empower organizations to scale with security and confidence.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div>
                <p className="text-2xl font-black text-[#0A4DA2] dark:text-[#19C2FF]">March 2019</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Founded</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#0A4DA2] dark:text-[#19C2FF]">End-to-End</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Architecture</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#0A4DA2] dark:text-[#19C2FF]">100% Legit</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Execution</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual: PNG Logo + Tech Stack Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div className="w-full max-w-md bg-white dark:bg-[#0A2350] p-8 rounded-3xl border border-slate-200 dark:border-[#19C2FF]/30 shadow-2xl flex flex-col items-center space-y-6">
              <div className="flex justify-center items-center p-4">
                <img
                  src="/logolight.png"
                  alt="Legit Technologies Ltd"
                  className="h-28 w-auto object-contain dark:hidden"
                />
                <img
                  src="/logodark.png"
                  alt="Legit Technologies Ltd"
                  className="h-28 w-auto object-contain hidden dark:block"
                />
              </div>

              <div className="w-full pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400 text-center">
                  Full-Stack Tech Stack
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-[#061A3A] text-[#0A4DA2] dark:text-[#19C2FF] border border-slate-200 dark:border-[#19C2FF]/20">
                    Web & Mobile Apps
                  </span>
                  <span className="px-3 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-[#061A3A] text-[#0A4DA2] dark:text-[#19C2FF] border border-slate-200 dark:border-[#19C2FF]/20">
                    Cloud Backend & APIs
                  </span>
                  <span className="px-3 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-[#061A3A] text-[#0A4DA2] dark:text-[#19C2FF] border border-slate-200 dark:border-[#19C2FF]/20">
                    Database Systems
                  </span>
                  <span className="px-3 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-[#061A3A] text-[#0A4DA2] dark:text-[#19C2FF] border border-slate-200 dark:border-[#19C2FF]/20">
                    DevOps & Cloud
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= 2. INTERACTIVE BLUEPRINT ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#0A4DA2] dark:text-[#19C2FF]">
            Multi-Disciplinary Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold">The Four Pillars of Legit Technologies</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-3">
            {pillars.map((pillar, idx) => (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(idx)}
                className={`w-full text-left p-5 rounded-xl font-bold transition flex items-center justify-between border ${
                  activePillar === idx
                    ? "bg-[#0A4DA2] text-white border-[#0A4DA2] dark:bg-[#19C2FF] dark:text-[#061A3A] dark:border-[#19C2FF] shadow-lg"
                    : "bg-white dark:bg-[#0A2350]/60 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-[#0A4DA2]/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span>{pillar.icon}</span>
                  <span className="text-base">{pillar.title}</span>
                </div>
                <span>→</span>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 bg-white dark:bg-[#0A2350] p-8 sm:p-10 rounded-2xl border border-slate-200 dark:border-[#19C2FF]/20 shadow-xl min-h-[340px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <span className="text-xs uppercase font-extrabold tracking-wider text-[#0A4DA2] dark:text-[#19C2FF]">
                    Division Overview
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold mt-1">
                    {pillars[activePillar].headline}
                  </h3>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                  {pillars[activePillar].body}
                </p>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Core Technical Deliverables
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {pillars[activePillar].highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                        <FaCheckCircle className="text-[#0A4DA2] dark:text-[#19C2FF]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ================= 3. MILESTONE TIMELINE (WITH MATCHING ICONS & VISION 2030) ================= */}
      <section className="bg-slate-100 dark:bg-[#0A2350]/40 py-20 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#0A4DA2] dark:text-[#19C2FF]">
              Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Our Evolution Timeline</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-[#0A2350] p-6 rounded-2xl border border-slate-200 dark:border-[#19C2FF]/20 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#0A4DA2] dark:text-[#19C2FF]">
                      {item.year}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#061A3A]">
                      {item.icon}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Kenya Vision 2030 Badge on the 2030 Card */}
                {item.isVision2030 && (
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                    <span className="text-xs font-bold text-[#0A4DA2] dark:text-[#19C2FF] uppercase tracking-wider">
                      🇰🇪 Kenya Vision 2030 Partner
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. MISSION, VISION & CORE VALUES (AT THE BOTTOM) ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-200 dark:border-slate-800">
        
        {/* Short & Clear Mission + Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="bg-white dark:bg-[#0A2350] p-8 rounded-2xl border border-slate-200 dark:border-[#19C2FF]/20 shadow-sm flex items-start gap-5">
            <div className="p-4 rounded-xl bg-[#0A4DA2]/10 dark:bg-[#19C2FF]/10 text-[#0A4DA2] dark:text-[#19C2FF] shrink-0">
              <FaBullseye size={30} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                To exceed client expectations through our core framework—<strong>Explore, Innovate, and Improve</strong>—delivering reliable software, smart security automation, and high-impact branding.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white dark:bg-[#0A2350] p-8 rounded-2xl border border-slate-200 dark:border-[#19C2FF]/20 shadow-sm flex items-start gap-5">
            <div className="p-4 rounded-xl bg-[#0A4DA2]/10 dark:bg-[#19C2FF]/10 text-[#0A4DA2] dark:text-[#19C2FF] shrink-0">
              <FaEye size={30} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Our Vision</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                To be a recognized technology partner driving high-standard full-stack engineering, facility security automation, and technical education across regional and global markets.
              </p>
            </div>
          </div>
        </div>

        {/* Short & Clear Core Values Grid */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl font-bold">Our Core Values</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">The principles guiding every project we deliver.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#0A2350] p-6 rounded-2xl border border-slate-200 dark:border-[#19C2FF]/20 text-center flex flex-col items-center space-y-3 shadow-sm"
              >
                <div className="p-3.5 rounded-xl bg-[#0A4DA2]/10 dark:bg-[#19C2FF]/10 text-[#0A4DA2] dark:text-[#19C2FF]">
                  {val.icon}
                </div>
                <h4 className="text-base font-bold">{val.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>

    </div>
  );
};

export default AboutUs;









