// src/pages/Careers.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

function Careers() {
  const openPositions = [
    {
      title: "Junior Project Manager",
      department: "Consultancy",
      closesOn: "25-02-2026",
      description: "Manage small to medium IT projects, coordinate teams, and ensure timely delivery of solutions.",
      requirements: [
        "Basic understanding of project management methodologies",
        "Excellent communication and team coordination skills",
        "Ability to manage timelines and resources effectively",
      ],
      qualifications: [
        "Bachelor’s degree in IT, Business or related field",
        "1+ year experience in project or operations management",
        "Analytical mindset and problem-solving skills",
      ],
    },
    {
      title: "Software Engineer",
      department: "Development",
      closesOn: "15-03-2026",
      description: "Develop and maintain enterprise systems, web applications, and ensure code quality and security.",
      requirements: [
        "Proficient in JavaScript, React, Node.js",
        "Experience with REST APIs and database design",
        "Familiarity with DevOps and CI/CD pipelines",
      ],
      qualifications: [
        "Bachelor’s degree in Computer Science or related field",
        "2+ years experience in software development",
        "Strong problem-solving skills",
      ],
    },
    {
      title: "IT Support & Systems Administrator",
      department: "Infrastructure",
      closesOn: "01-03-2026",
      description: "Manage IT systems, troubleshoot issues, and provide technical support for all departments.",
      requirements: [
        "Experience in system administration (Windows/Linux)",
        "Knowledge of networking, firewalls, and endpoint security",
        "Strong troubleshooting and communication skills",
      ],
      qualifications: [
        "Diploma or degree in IT, Computer Science or related",
        "1-3 years experience in IT support",
        "Certifications (CCNA, MCSA) preferred",
      ],
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleReadMore = (index) => setExpandedIndex(expandedIndex === index ? null : index);

  return (
    <div className="bg-gray-900 text-white min-h-screen">

      {/* Section 1: Hero Slider */}
      <motion.section
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/Career.jpg')" }}
      >
        <div className="bg-gray-900 bg-opacity-70 px-6 md:px-12 rounded-xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-500">
            Shape the Future Of Technology With Us,Your Next Big Tech Adnenture Starts Here.
          </h1>
        </div>
      </motion.section>

      {/* Section 2: Open Positions */}
      <section className="py-20 px-6 md:px-12">
        <h2 className="text-4xl font-bold text-blue-500 text-center mb-12">Open Positions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {openPositions.map((pos, i) => (
            <motion.div
              key={pos.title}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.3, duration: 1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition flex flex-col justify-between"
            >
              <div className="mb-4">
                <p className="text-blue-400 font-semibold">Department: {pos.department}</p>
                <p className="text-gray-200 font-semibold">Position: {pos.title}</p>
                <p className="text-gray-400 text-sm">Closes on: {pos.closesOn}</p>
              </div>

              <p className="text-gray-300 mb-2">{pos.description}</p>

              {expandedIndex === i && (
                <div className="text-gray-300 mb-4">
                  <strong>Requirements:</strong>
                  <ul className="list-disc list-inside mb-2">
                    {pos.requirements.map((req, idx) => <li key={idx}>{req}</li>)}
                  </ul>
                  <strong>Qualifications:</strong>
                  <ul className="list-disc list-inside">
                    {pos.qualifications.map((qual, idx) => <li key={idx}>{qual}</li>)}
                  </ul>
                </div>
              )}

              <span
                onClick={() => toggleReadMore(i)}
                className="text-blue-500 hover:underline cursor-pointer mb-2"
              >
                {expandedIndex === i ? "Show Less" : "Read More"}
              </span>

              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 3: Upskilling & Mentorship */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="py-20 px-6 md:px-12 bg-gray-950 flex flex-col md:flex-row items-center gap-10"
      >
        {/* Left side: text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-blue-500 mb-6 flex items-center gap-2">
            <span>🎓</span> Upskilling & Mentorship
          </h2>
          <p className="text-gray-300 text-lg">
            We invest in our team’s growth through structured training programs in web development, app development, graphic design, digital marketing, and hands-on bootcamps. Our mentorship ensures talent reaches its full potential and is ready to tackle real-world challenges.
          </p>
        </div>

        {/* Right side: image with rolling effect */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-start"
          animate={{
            rotate: [0, 15, -15, 10, -10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <img 
            src="/Degree.jpg" 
            alt="Tech AI Illustration" 
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.section>

      {/* Section 4: Our Values (single line full-width text) */}
      <section className="py-10 px-6 bg-gray-900 text-gray-300 text-center text-lg">
        At Legit Technologies, we uphold gender equality, integrity, and a corruption-free workplace as the foundation of everything we do.
      </section>

    </div>
  );
}

export default Careers;






