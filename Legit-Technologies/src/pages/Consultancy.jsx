import React from "react";

function Consultancy() {
  return (
    <div className="bg-slate-950 text-slate-100">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[500px] flex items-center justify-center text-center overflow-hidden">

        {/* Background Image */}
        <img
          src="/Hands.jpg" // replace with your image in public folder
          alt="Consultancy"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Hero Content */}
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 
                         bg-gradient-to-r from-blue-600 to-cyan-500 
                         bg-clip-text text-transparent">
            Technology & Business Consultancy
          </h1>
          <p className="text-white text-lg md:text-xl leading-relaxed">
            We help businesses optimize IT and operational processes with strategic guidance to achieve growth, efficiency, and innovation.
          </p>
        </div>

      </section>

      {/* ================= SERVICES / OFFERINGS ================= */}
      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center
                         bg-gradient-to-r from-blue-500 to-cyan-400 
                         bg-clip-text text-transparent">
            Our Consultancy Services
          </h2>

          <p className="text-slate-400 mb-16 text-center text-lg md:text-xl max-w-3xl mx-auto">
            Our consultancy division guides you to streamline business operations, evaluate IT infrastructure, and ensure projects deliver maximum value.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "IT Infrastructure & Digital Transformation",
                desc: "We assess your IT landscape and design strategies for digital growth, cloud adoption, and modern infrastructure.",
                img: "/Infrastructure.jpg"
              },
              {
                title: "Workflow & Operations Optimization",
                desc: "Our experts identify inefficiencies and optimize workflows to improve productivity and reduce costs.",
                img: "/C3.jpg"
              },
              {
                title: "Project Oversight & Vendor Evaluation",
                desc: "We oversee projects and assess vendors to ensure deliverables meet quality, timeline, and budget expectations.",
                img: "/C4.jpg"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-2xl border border-slate-800 
                           overflow-hidden hover:border-blue-500/40 hover:shadow-xl 
                           hover:shadow-blue-500/10 transition-all duration-300"
              >
                <img
                  src={service.img} // replace with your image
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= APPROACH / PROCESS ================= */}
      <section className="bg-slate-900 py-24 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white">
            Our Approach
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12 space-y-12 md:space-y-0">

            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-lg px-4 text-center">
                Assess
              </div>
              <p className="mt-4 max-w-xs text-slate-300">
                Evaluate your current business processes and IT infrastructure to identify areas of improvement.
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
                Strategize
              </div>
              <p className="mt-4 max-w-xs text-slate-300">
                Develop actionable strategies for digital transformation, operational efficiency, and project success.
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
                Execute
              </div>
              <p className="mt-4 max-w-xs text-slate-300">
                Implement solutions, monitor progress, and ensure projects and processes deliver maximum value.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Consultancy;

