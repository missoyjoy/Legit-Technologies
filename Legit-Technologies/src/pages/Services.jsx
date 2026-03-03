// src/pages/Services.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiSettings } from "react-icons/fi"; // solutions icon

function Services() {
  const slides = [
    { img: "/Innovate.jpg", text: "Innovate" },
    { img: "/Upskilling.jpg", text: "Empower" },
    { img: "/Transform.jpg", text: "Transform" },
  ];

  const services = [
    {
      title: "Systems Engineering & Digital Innovation",
      path: "/services/systems-innovation",
      desc: "Advanced IT solutions, enterprise systems, full-stack development, and digital innovation tailored to your business.",
      img: "/Infrastructure.jpg",
    },
    {
      title: "Technology & Business Consultancy",
      path: "/services/consultancy",
      desc: "Advisory and implementation services that optimize operations, manage projects, and ensure digital transformation.",
      img: "/Consulting.jpg",
    },
    {
      title: "Education & Upskilling",
      path: "/services/education",
      desc: "Training programs, bootcamps, and mentorship to grow talent in IT, web development, app development, and digital marketing.",
      img: "/Upskilling.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Slide rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Section 1: Slider */}
<section className="relative w-full overflow-hidden h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh]">
  <motion.img
    key={currentSlide}
    src={slides[currentSlide].img}
    alt={slides[currentSlide].text}
    initial={{ opacity: 0, scale: 1.05 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.5 }}
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Soft overlay */}
  <div className="absolute inset-0 bg-black/20 sm:bg-black/30 md:bg-black/35 lg:bg-black/40" />

  <motion.h1
    key={slides[currentSlide].text}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 text-center px-4"
  >
    {slides[currentSlide].text}
  </motion.h1>
</section>



      {/* Section 2: Our Solutions */}
      <section className="py-20 px-6 md:px-12 text-center">
        <div className="flex justify-center items-center mb-6">
          <FiSettings className="text-blue-500 text-5xl mr-3" />
          <h2 className="text-4xl md:text-5xl font-bold text-blue-500">Our Solutions</h2>
        </div>
        <p className="text-gray-300 text-lg max-w-4xl mx-auto mb-12">
          Explore our range of ICT services designed to innovate, optimize, and empower your business.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.3, duration: 1 }}
              className="bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition overflow-hidden flex flex-col"
            >
              <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow justify-between">
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.desc}</p>
                <Link
                  to={service.path}
                  className="text-blue-500 font-semibold hover:underline mb-4"
                >
                  Learn More ▸
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 3: Call Us Today */}
      <section className="py-20 flex justify-center">
        <motion.a
          href="tel:+254XXXXXXXXX"
          initial={{ scale: 0.8, rotate: -15 }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-2xl font-bold shadow-lg cursor-pointer transition"
        >
          Call Us Today
        </motion.a>
      </section>

    </div>
  );
}

export default Services;








