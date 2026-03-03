import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen w-full">

      {/* Section 1: Hero Image */}
      <motion.section
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className="relative h-[70vh] w-full flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/TechContact.jpg')" }}
      >
        <div className="bg-gray-900 bg-opacity-70 px-6 md:px-12 rounded-xl text-center">
             <h1 className="text-4xl md:text-5xl font-bold text-blue-500 leading-snug tracking-tight">
               Start Your Digital Transformation Today
             </h1>
          <p className="text-gray-200 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            Reach out to Legit Technologies—let’s discuss how our cutting-edge ICT solutions can take your business to the next level.
          </p>
        </div>

      </motion.section>

      {/* Section 2: Contact Info */}
      <section className="py-20 px-6 md:px-12 bg-gray-950 w-full">
        <div className="grid md:grid-cols-3 gap-8 w-full">
          {/* Email */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition w-full"
          >
            <FaEnvelope className="text-blue-500 text-4xl mb-4" />
            <p className="text-gray-200 font-semibold">Email</p>
            <p className="text-gray-400 mt-1">info@legittechnologies.com</p>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition w-full"
          >
            <FaPhoneAlt className="text-blue-500 text-4xl mb-4" />
            <p className="text-gray-200 font-semibold">Phone</p>
            <p className="text-gray-400 mt-1">+254 700 000 000</p>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition w-full"
          >
            <FaMapMarkerAlt className="text-blue-500 text-4xl mb-4" />
            <p className="text-gray-200 font-semibold">Location</p>
            <p className="text-gray-400 mt-1">Plaza 2000, Nairobi, Kenya</p>
          </motion.div>
        </div>

        {/* Section 3: Full-Width Contact Form */}
        <section className="w-full mt-20 px-6 md:px-12">
          <form
            onSubmit={handleSubmit}
            className="w-full bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
              Send Us a Message
            </h2>
            <div className="mb-4">
              <label className="block text-gray-200 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-200 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-200 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition w-full"
            >
              Submit
            </button>
          </form>
        </section>

        {/* Section 4: Google Map */}
        <section className="py-20 w-full">
          <iframe
            title="Legit Technologies Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7406927706566!2d36.8622758!3d-1.3316962999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11f0d0310323%3A0x13fac0d96ed6745d!2sPlaza%202000!5e0!3m2!1sen!2ske!4v1772270693685!5m2!1sen!2ske"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </div>
  );
}

export default ContactUs;




