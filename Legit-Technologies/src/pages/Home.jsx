import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  ShieldCheck,
  Palette,
  GraduationCap,
  Settings,
  FolderCheck,
  Activity,
  Building2,
  Headphones,
  CheckCircle2,
  Share2,
  Target,
  ArrowUpRight,
} from "lucide-react";

// Helper component to handle animated counting up to target values
function StatCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Extract numeric part from target (e.g. "150+" -> 150, "99.9%" -> 99.9)
  const numericTarget = parseFloat(target.replace(/[^0-9.]/g, "")) || 0;
  const isFloat = target.includes(".");

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // Animation duration in ms
    const steps = 60;
    const stepTime = duration / steps;
    const increment = numericTarget / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, numericTarget]);

  return (
    <span ref={ref}>
      {isFloat ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function Homepage() {
  const services = [
    {
      title: "Full-Stack Software & Cloud",
      description:
        "High-performance web and mobile platforms, resilient microservices, cloud infrastructure, and custom enterprise databases.",
      icon: Code2,
      link: "/services/systems-innovation",
      tag: "Software Engineering",
    },
    {
      title: "Smart Security & Biometrics",
      description:
        "Biometric access control, time attendance integration, AI surveillance systems, and hardware-software IoT automation.",
      icon: ShieldCheck,
      link: "/services/systems-innovation",
      tag: "Hardware & IoT",
    },
    {
      title: "Branding & Commercial Print",
      description:
        "End-to-end corporate identity design, large-format printing, signage, and physical promotional marketing assets.",
      icon: Palette,
      link: "/services/consultancy",
      tag: "Design & Print",
    },
    {
      title: "Technical Upskilling",
      description:
        "Hands-on bootcamps and engineering workshops covering modern software development, security systems, and digital skills.",
      icon: GraduationCap,
      link: "/services/education",
      tag: "Coming Soon",
      isComingSoon: true,
    },
  ];

  const stats = [
    { target: "150", suffix: "+", label: "Projects Delivered", icon: FolderCheck },
    { target: "99.9", suffix: "%", label: "System Uptime & Reliability", icon: Activity },
    { target: "10", suffix: "+", label: "Enterprise Clients", icon: Building2 },
    { target: "24", suffix: "/7", label: "Engineering Support", icon: Headphones },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-900 dark:bg-[#061A3A] dark:text-white transition-colors duration-300">
      {/* ------------------- 1. HERO SECTION ------------------- */}
      <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full bg-[#0A4DA2]/10 text-[#0A4DA2] dark:bg-[#19C2FF]/10 dark:text-[#19C2FF]">
            Legit Technologies Ltd
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Full-Stack Tech <br />
            <span className="text-[#0A4DA2] dark:text-[#19C2FF]">
              From Web Apps to Cloud.
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl">
            We deliver real software engineering—building custom web applications, scalable cloud infrastructure, biometric automation, and physical branding engineered to power modern enterprise operations.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-lg font-semibold text-white bg-[#0A4DA2] hover:bg-[#061A3A] dark:bg-[#19C2FF] dark:text-[#061A3A] dark:hover:bg-white transition shadow-md hover:shadow-lg"
            >
              Book an Appointment
            </Link>
            <Link
              to="/services"
              className="px-6 py-3.5 rounded-lg font-semibold border border-slate-300 dark:border-[#19C2FF]/40 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-[#0A2350] transition"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>

        {/* Right Side: Visual Graphic */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          <div className="w-full max-w-md h-80 sm:h-96 rounded-2xl bg-gradient-to-tr from-[#0A4DA2] to-[#19C2FF] p-1 shadow-2xl">
            <div className="w-full h-full bg-white dark:bg-[#0A2350] rounded-xl p-6 flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-[#0A4DA2]/10 dark:bg-[#19C2FF]/20 flex items-center justify-center text-[#0A4DA2] dark:text-[#19C2FF]">
                  <Settings className="w-6 h-6 animate-spin-slow" />
                </div>
                <h3 className="text-xl font-bold">Real Software Engineering</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Full-lifecycle development spanning modern web stacks, cloud APIs, microservice architectures, biometric IoT integrations, and commercial print assets.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-200 dark:border-slate-700 text-center text-xs font-semibold">
                <div className="p-2 rounded bg-slate-100 dark:bg-[#061A3A]/60">Full-Stack</div>
                <div className="p-2 rounded bg-slate-100 dark:bg-[#061A3A]/60">Cloud & IoT</div>
                <div className="p-2 rounded bg-slate-100 dark:bg-[#061A3A]/60">Branding</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ------------------- 2. WHY CHOOSE US ------------------- */}
      <section className="bg-white dark:bg-[#0A2350] py-20 border-y border-slate-200 dark:border-[#19C2FF]/20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl font-bold sm:text-4xl">Why Choose Legit Technologies?</h2>
            <p className="text-slate-600 dark:text-slate-300">
              One trusted engineering team for your web platforms, physical security automation, and visual brand presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-slate-50 dark:bg-[#061A3A] border border-slate-200 dark:border-[#19C2FF]/20 space-y-3">
              <div className="w-12 h-12 rounded-lg bg-[#0A4DA2]/10 dark:bg-[#19C2FF]/20 flex items-center justify-center text-[#0A4DA2] dark:text-[#19C2FF]">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Production-Grade Software</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Custom web solutions and cloud architectures engineered using industry-standard backend and frontend practices.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 dark:bg-[#061A3A] border border-slate-200 dark:border-[#19C2FF]/20 space-y-3">
              <div className="w-12 h-12 rounded-lg bg-[#0A4DA2]/10 dark:bg-[#19C2FF]/20 flex items-center justify-center text-[#0A4DA2] dark:text-[#19C2FF]">
                <Share2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Integrated Hardware & Software</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Directly connect physical biometric access control and surveillance with web applications and cloud databases.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 dark:bg-[#061A3A] border border-slate-200 dark:border-[#19C2FF]/20 space-y-3">
              <div className="w-12 h-12 rounded-lg bg-[#0A4DA2]/10 dark:bg-[#19C2FF]/20 flex items-center justify-center text-[#0A4DA2] dark:text-[#19C2FF]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">End-to-End Brand Presence</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                High-quality commercial printing and physical identity solutions aligned with your digital platform appearance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- 3. GLIMPSE OF SERVICES ------------------- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl font-bold sm:text-4xl">Our Service Offerings</h2>
          <p className="text-slate-600 dark:text-slate-300">
            A complete ecosystem of software, security automation, and print branding services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-white dark:bg-[#0A2350] border border-slate-200 dark:border-[#19C2FF]/20 shadow-sm hover:shadow-lg transition flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-lg bg-[#0A4DA2]/10 dark:bg-[#19C2FF]/20 flex items-center justify-center text-[#0A4DA2] dark:text-[#19C2FF]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-[#061A3A] text-[#0A4DA2] dark:text-[#19C2FF]">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
                </div>

                <div className="pt-6">
                  <Link
                    to={item.link}
                    className="text-sm font-semibold text-[#0A4DA2] dark:text-[#19C2FF] hover:underline inline-flex items-center gap-1 group"
                  >
                    <span>{item.isComingSoon ? "Learn More" : "View Details"}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ------------------- 4. ANIMATED KEY STATS ------------------- */}
      <section className="bg-[#0A4DA2] text-white dark:bg-[#0A2350] py-16 border-y border-transparent dark:border-[#19C2FF]/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => {
            const StatIcon = stat.icon;
            return (
              <div key={i} className="space-y-2 flex flex-col items-center">
                <div className="p-2.5 rounded-full bg-white/10 text-[#19C2FF] mb-1">
                  <StatIcon className="w-6 h-6" />
                </div>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#19C2FF]">
                  <StatCounter target={stat.target} suffix={stat.suffix} />
                </p>
                <p className="text-sm sm:text-base font-medium text-slate-200 dark:text-slate-300">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ------------------- 5. FINAL CTA ------------------- */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#0A4DA2] to-[#061A3A] dark:from-[#0A2350] dark:to-[#061A3A] text-white p-10 sm:p-14 rounded-3xl border border-[#19C2FF]/30 shadow-2xl space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to Upgrade Your Operations?</h2>
          <p className="text-slate-200 text-base sm:text-lg max-w-xl mx-auto">
            Schedule a session with our engineering team to discuss your software, security, or branding project requirements.
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 rounded-xl font-bold bg-[#19C2FF] text-[#061A3A] hover:bg-white hover:shadow-[0_0_20px_rgba(25,194,255,0.8)] transition transform hover:-translate-y-0.5"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


