// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-8">

        {/* 1st Div: Logo and Choose Us */}
        <div className="flex flex-col space-y-4">
          <img src="/LegitLogo.jpeg" alt="Legit Technologies Logo" className="w-32" />
          <Link
            to="/services"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition w-max text-center"
          >
            Choose Us
          </Link>
        </div>

        {/* 2nd Div: Links */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-bold text-blue-500 mb-2">Explore</h3>
          <Link to="/projects" className="hover:text-blue-400 transition">Projects Done</Link>
          <Link to="/company-profile" className="hover:text-blue-400 transition">Company Profile</Link>
          <Link to="/newsletter" className="hover:text-blue-400 transition">Newsletter</Link>
        </div>

        {/* 3rd Div: Social Media */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-bold text-blue-500 mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* 4th Div: Contact Info */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-bold text-blue-500 mb-2">Contact Us</h3>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt />
            <span>+254 700 000 000</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt />
            <span>Plaza 2000, Nairobi, Kenya</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <span>info@legittechnologies.com</span>
          </div>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-gray-700 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Legit Technologies. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
