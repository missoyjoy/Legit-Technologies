import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="bg-gray-900 text-white">

      {/* ================= SECTION 1: HERO IMAGE WITH SLIDING TEXT ================= */}
      <motion.section
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className="relative h-[80vh] w-full flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/TechHome.jpg')" }}
      >
        <div className="bg-gray-900 bg-opacity-60 px-6 md:px-12 lg:px-24 rounded-xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-500 leading-snug tracking-tight">
            Innovating Tomorrow, Today by empowering the globe Through Innovative ICT Solutions
          </h1>
          <p className="text-gray-200 text-xl md:text-2xl max-w-3xl mx-auto mt-6">
            We are a technology-driven ICT company dedicated to delivering innovative, reliable, and scalable solutions that transform businesses and enhance operational efficiency.
          </p>
        </div>
      </motion.section>

      {/* ================= SECTION 2: WHY US ================= */}
      <section className="py-20 px-6 md:px-12">
        <h2 className="text-4xl font-bold text-blue-500 text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Card 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-3">Expertise & Innovation</h3>
            <p className="text-gray-300">
              Our team delivers advanced IT solutions, web & app development, and infrastructure services with unmatched quality and innovation.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-3">Reliability & Trust</h3>
            <p className="text-gray-300">
              We value transparency and professionalism, ensuring your projects are completed on time and to the highest standards.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-3">Tailored Solutions</h3>
            <p className="text-gray-300">
              Every business is unique. We craft personalized systems, applications, and services to meet your exact needs.
            </p>
          </div>

        </div>
      </section>

      {/* ================= SECTION 3: CALL-TO-ACTION ================= */}
      <section className="py-20 px-6 flex flex-col md:flex-row justify-center items-center gap-6 bg-gray-950">
        <Link
          to="/contact"
          className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
        >
          Send an Inquiry
        </Link>
        <Link
          to="/services/infrastructure"
          className="border border-blue-500 text-blue-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-500 hover:text-white transition"
        >
          What We Do
        </Link>
      </section>

    </div>
  )
}

export default Home;



