import React from "react";

function SystemsInnovation() {
  return (
    <div className="bg-slate-950 text-slate-100">
<section className="relative w-full h-[600px] md:h-[500px] flex items-center justify-center text-center overflow-hidden">

  {/* Background Image */}
  <img
    src="/Transform.jpg" // Make sure this is in public folder
    alt="Digital Innovation"
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  />

  {/* Hero Content */}
  <div className="relative z-10 px-6 max-w-4xl">
    <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 
                   bg-gradient-to-r from-blue-600 to-cyan-500 
                   bg-clip-text text-transparent">
      Engineering Intelligent Digital Systems
    </h1>
    <p className="text-white text-lg md:text-xl leading-relaxed">
      We design, develop, and scale secure digital infrastructure, enterprise applications, 
      and innovative platforms that power modern businesses.
    </p>
  </div>

</section>

<section className="py-24 bg-slate-950">
  <div className="max-w-[1600px] mx-auto px-6 lg:px-12">

    {/* Section Heading */}
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center
                   bg-gradient-to-r from-blue-500 to-cyan-400 
                   bg-clip-text text-transparent">
      Systems Engineering & Digital Innovation
    </h2>

    <p className="text-slate-400 mb-16 text-center text-lg md:text-xl max-w-3xl mx-auto">
      Legit Technologies delivers advanced digital systems built for performance, scalability, and long-term growth.
      We combine modern engineering practices with strategic innovation to help businesses operate smarter and more securely.
    </p>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          title: "Enterprise Web Applications",
          desc: "Custom-built internal platforms and automation systems that streamline operations and increase efficiency.",
          img: "/techInfrastructure.jpg"
        },
        {
          title: "Mobile Applications",
          desc: "Scalable and high-performance iOS and Android applications designed for modern user experiences.",
          img: "/App.jpg"
        },
        {
          title: "Cloud & Backend Infrastructure",
          desc: "Secure, resilient, and optimized backend systems built with cloud-native technologies.",
          img: "/cloud.jpg"
        },
        {
          title: "Cybersecurity & Data Protection",
          desc: "Comprehensive security architecture and data protection strategies to safeguard digital assets.",
          img: "/Cybersec.jpg"
        },
        {
          title: "Managed IT Services",
          desc: "Ongoing technical support, monitoring, and infrastructure management for seamless operations.",
          img: "/Techical.jpg"
        },
        {
          title: "Digital Transformation Consulting",
          desc: "Strategic technology advisory to modernize business systems and drive innovation.",
          img: "/consult2.jpg"
        }
      ].map((service, index) => (
        <div
          key={index}
          className="bg-slate-900 rounded-2xl border border-slate-800 
                     overflow-hidden hover:border-blue-500/40 hover:shadow-xl 
                     hover:shadow-blue-500/10 transition-all duration-300"
        >
          {/* Card Image */}
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-48 object-cover"
          />

          {/* Card Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-slate-400 leading-relaxed">{service.desc}</p>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>
<section className="bg-slate-900 py-24 px-6 md:px-20">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white">
      Our Process
    </h2>

    <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12 space-y-12 md:space-y-0">

      {/* Step 1 */}
      <div className="flex flex-col items-center">
        <div className="w-40 h-40 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-lg px-4 text-center">
          Discover
        </div>
        <p className="mt-4 max-w-xs text-slate-300">
          Analyze your business objectives, identify system requirements, and design a strategic technical roadmap.
        </p>
      </div>

      {/* Arrow */}
      <div className="hidden md:block">
        <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>

      {/* Step 2 */}
      <div className="flex flex-col items-center">
        <div className="w-40 h-40 rounded-full bg-cyan-500 flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-lg px-4 text-center">
          Engineer
        </div>
        <p className="mt-4 max-w-xs text-slate-300">
          Build scalable, secure, and high-performance systems using modern frameworks and cloud technologies.
        </p>
      </div>

      {/* Arrow */}
      <div className="hidden md:block">
        <svg className="w-16 h-16 text-cyan-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>

      {/* Step 3 */}
      <div className="flex flex-col items-center">
        <div className="w-40 h-40 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-lg px-4 text-center">
          Scale & Support
        </div>
        <p className="mt-4 max-w-xs text-slate-300">
          Deploy, optimize, and continuously support your digital infrastructure for long-term growth.
        </p>
      </div>

    </div>
  </div>
</section>

    </div>
  );
}

export default SystemsInnovation;

