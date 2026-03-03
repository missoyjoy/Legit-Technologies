import React from "react";

function Education() {
  return (
    <div className="bg-slate-950 text-slate-100">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[500px] flex items-center justify-center text-center overflow-hidden">

        {/* Background Image */}
        <img
          src="/Degree.jpg" // replace with your image in public folder
          alt="Education & Upskilling"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Hero Content */}
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 
                         bg-gradient-to-r from-blue-600 to-cyan-500 
                         bg-clip-text text-transparent">
             We Teach the Future, Turning Learners into Innovators
          </h1>
          <p className="text-white text-lg md:text-xl leading-relaxed">
            Empowering individuals with skills that shape the world of tomorrow.Our Tomorrow is tech ,allow us to take you there .
          </p>
        </div>

      </section>

      {/* ================= COURSES / PROGRAMS ================= */}
      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center
                         bg-gradient-to-r from-blue-500 to-cyan-400 
                         bg-clip-text text-transparent">
            Our Training Programs
          </h2>

          <p className="text-slate-400 mb-16 text-center text-lg md:text-xl max-w-3xl mx-auto">
            Gain practical, hands-on experience in technology and creative skills to advance your career.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Computer Packages",
                desc: "Learn Microsoft Office, Google Workspace, and other essential software for business productivity.",
                img: "/networking.jpg"
              },
              {
                title: "Web Development",
                desc: "Master HTML, CSS, JavaScript, React, and Node.js to build modern web applications.",
                img: "/Webdesign.jpg"
              },
              {
                title: "App Development",
                desc: "Develop iOS and Android apps with hands-on projects and real-world examples.",
                img: "/ios.jpg"
              },
              {
                title: "Graphic Design & Branding",
                desc: "Learn design principles, branding strategies, and tools like Photoshop and Figma.",
                img: "/course4.jpg"
              },
              {
                title: "Digital Marketing & Tech Tools",
                desc: "Master SEO, social media marketing, analytics, and other tech-driven marketing skills.",
                img: "/SEO.jpg"
              },
              {
                title: "Bootcamps & Certificates",
                desc: "Hands-on intensive programs with certificates to showcase your skills to employers.",
                img: "/CERTIFICATES.jpg"
              }
            ].map((course, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-2xl border border-slate-800 
                           overflow-hidden hover:border-blue-500/40 hover:shadow-xl 
                           hover:shadow-blue-500/10 transition-all duration-300"
              >
                <img
                  src={course.img} // replace with your image
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{course.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{course.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= LEARNING PROCESS ================= */}
      <section className="bg-slate-900 py-24 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white">
            Our Learning Process
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12 space-y-12 md:space-y-0">

            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-lg px-4 text-center">
                Learn
              </div>
              <p className="mt-4 max-w-xs text-slate-300">
                Gain foundational knowledge in technology and software tools with guided instruction.
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
                Practice
              </div>
              <p className="mt-4 max-w-xs text-slate-300">
                Apply your skills in hands-on projects, exercises, and real-world scenarios.
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
                Apply
              </div>
              <p className="mt-4 max-w-xs text-slate-300">
                Implement your knowledge in practical projects, gain certificates, and advance your career.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Education;

