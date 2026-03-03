// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);

  const dropdownItems = [
    { path: "/services/systems-innovation", label: "Systems Engineering & Digital Innovation" },
    { path: "/services/consultancy", label: "Technology & Business Consultancy" },
    { path: "/services/education", label: "Education & Upskilling" },
  ];

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-blue-200 text-white text-sm py-1 px-6 flex justify-center items-center">
        <span>"ONLY LEGIT FROM LEGIT TECHNOLOGIES"</span>
      </div>

      {/* Main navbar */}
      <nav className="bg-gray-950 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">

          {/* Logo (left) */}
          <Link to="/" className="flex items-center">
            <img
              src="/LegitLogo.jpeg"
              alt="Legit Technologies Logo"
              className="h-16 w-auto 
                         transition-all duration-500 ease-in-out
                         animate-[float_4s_ease-in-out_infinite]
                         hover:scale-110
                         hover:drop-shadow-[0_0_18px_rgba(37,99,235,0.8)]"
            />
          </Link>

          {/* Menu (right) */}
          <ul className="flex space-x-8 items-center">

            <li>
              <Link to="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-blue-400 transition">
                About Us
              </Link>
            </li>

            {/* Services menu with dropdown */}
            <li className="relative">
              <div className="flex items-center space-x-1">
                {/* Services link */}
                <Link
                  to="/services"
                  className="font-semibold hover:text-blue-400 transition"
                >
                  Services
                </Link>

                {/* Dropdown toggle arrow */}
                <motion.span
                  className="cursor-pointer font-semibold hover:text-blue-400 transition"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  animate={{ rotate: servicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▾
                </motion.span>
              </div>

              {/* Dropdown items */}
              <AnimatePresence>
                {servicesOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-0 mt-2 bg-gray-900 text-white rounded-lg shadow-lg w-72 z-20 p-3 space-y-1"
                  >
                    {dropdownItems.map((item, i) => (
                      <motion.li
                        key={item.path}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: [ -10, 0, -3, 0 ] }}
                        transition={{ delay: i * 0.1, duration: 0.35, type: "spring", stiffness: 200 }}
                        whileHover={{ scale: 1.05, backgroundColor: "#2563eb", color: "#fff" }}
                        className="rounded"
                      >
                        <Link
                          to={item.path}
                          className="block px-4 py-2 rounded transition-colors"
                          onClick={() => setServicesOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li>
              <Link to="/careers" className="hover:text-blue-400 transition">
                Careers
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-blue-400 transition">
                Contact Us
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;














