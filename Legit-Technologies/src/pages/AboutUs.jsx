import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaShieldAlt, FaUserTie, FaChartLine, FaClock } from "react-icons/fa";

const AboutUs = () => {
  const coreValues = [
    {
      icon: <FaShieldAlt size={40} className="text-blue-500" />,
      title: "Integrity",
      description:
        "We uphold honesty, transparency, and strong ethical principles in all our engagements with clients and partners.",
    },
    {
      icon: <FaUserTie size={40} className="text-blue-500" />,
      title: "Professionalism",
      description:
        "We maintain high standards of competence, responsibility, and respect in delivering our ICT solutions and services.",
    },
    {
      icon: <FaChartLine size={40} className="text-blue-500" />,
      title: "Effectiveness",
      description:
        "We provide innovative, technology-driven solutions that produce measurable results and real impact.",
    },
    {
      icon: <FaClock size={40} className="text-blue-500" />,
      title: "Timeliness",
      description:
        "We value time and ensure that all projects and services are delivered promptly without compromising quality.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white">

      {/* ================= SECTION 1 — ABOUT US ================= */}
      <section className="py-32 px-6 md:px-20 lg:px-32 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* TEXT */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-6 leading-tight">
            About Legit Technologies
          </h2>

          <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
            Legit Technologies is a forward-thinking technology company specializing in quality modern technology, innovations, supplies, and high-end solutions. Since its inception in March 2019, Legit has been committed to delivering innovative computer-related products, ICT solutions for corporate clients, and comprehensive computer literacy programs.
          </p>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src="/LegitLogo.jpeg" // <-- local tech photo from public
            alt="Modern ICT Technology"
            className="rounded-2xl shadow-2xl w-full max-w-lg object-cover"
          />
        </div>

      </section>

      {/* ================= SECTION 1.5 — FULL-WIDTH SLIDING STATEMENT ================= */}
      <motion.section
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }} // longer duration
        className="w-full py-32 bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: "url('/TechHome.jpg')" }}
      >
        <div className="bg-gray-900 bg-opacity-70 px-6 md:px-12 lg:px-24 rounded-xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 leading-snug tracking-tight">
            We are advisors, implementors, suppliers, and tech engineers.<br />
            Ready to empower your businesses through innovative ICT solutions
          </h2>
        </div>
      </motion.section>

      {/* ================= SECTION 2 — MISSION & VISION ================= */}
      <section className="py-20 px-6 md:px-20 lg:px-32 bg-gray-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Mission */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border-t-4 border-blue-500 hover:shadow-2xl transition duration-300">
            <div className="flex items-center gap-4 mb-4 text-blue-500">
              <FaBullseye size={35} />
              <h3 className="text-2xl font-semibold">Our Mission</h3>
            </div>
            <p className="text-gray-200 text-lg leading-relaxed">
              To strive to exceed our clients' expectations by delivering innovative solutions and services anchored on the principles of Explore, Innovate, and Improve. We are committed to achieving customer satisfaction through high-quality, technology-driven solutions and services.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border-t-4 border-blue-500 hover:shadow-2xl transition duration-300">
            <div className="flex items-center gap-4 mb-4 text-blue-500">
              <FaEye size={35} />
              <h3 className="text-2xl font-semibold">Our Vision</h3>
            </div>
            <p className="text-gray-200 text-lg leading-relaxed">
              Our vision is to emerge as a leader in providing the best ICT products and services that meet both local and international standards while fostering innovation, excellence, and sustainable technological growth.
            </p>
          </div>

        </div>
      </section>

      {/* ================= SECTION 3 — CORE VALUES ================= */}
      <section className="py-24 px-6 md:px-20 lg:px-32 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-500">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.3, duration: 0.7, type: "spring" }}
                viewport={{ once: true }}
                className="bg-gray-800 p-6 rounded-xl shadow-lg text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <div className="mb-4 flex justify-center text-blue-500">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-500">{value.title}</h3>
                <p className="text-gray-200 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;









