// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
// Standard UI icons from lucide-react
import { 
  Home, 
  Info, 
  Wrench, 
  Users, 
  Mail, 
  ShoppingBag, 
  MapPin, 
  Send, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  PhoneCall
} from "lucide-react";

// Social media brand icons from react-icons/fa6
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTiktok, 
  FaLinkedinIn, 
  FaXTwitter, 
  FaWhatsapp 
} from "react-icons/fa6";

const SHOP_URL = "https://YOUR-SHOP-LINK";
const PHONE_NUMBER = "+254796182880";
const WHATSAPP_NUMBER = "254796182880";

function Footer() {
  const quickLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About Us", icon: Info },
    { path: "/services", label: "Services Catalog", icon: Wrench },
    { path: "/careers", label: "Careers", icon: Users },
    { path: "/contact", label: "Contact Us", icon: Mail },
  ];

  const serviceRoutes = [
    { name: "Software & Web Apps", path: "/services/software-development" },
    { name: "Mobile App Engineering", path: "/services/mobile-apps" },
    { name: "Cybersecurity & Defense", path: "/services/cybersecurity" },
    { name: "Biometrics & Access Control", path: "/services/biometrics" },
    { name: "CCTV & Surveillance", path: "/services/cctv-surveillance" },
    { name: "POS & Retail Systems", path: "/services/pos-systems" },
    { name: "Corporate Branding & Signage", path: "/services/corporate-branding" },
    { name: "Technical Academy & Upskilling", path: "/services/education" },
  ];

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Legit%20Technologies,%20I%20would%20like%20to%20inquire%20about%20your%20services.`,
      color: "hover:bg-[#25D366] hover:text-white"
    },
    {
      name: "Facebook",
      icon: FaFacebookF,
      url: "https://facebook.com",
      color: "hover:bg-[#1877F2] hover:text-white"
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://instagram.com",
      color: "hover:bg-[#E4405F] hover:text-white"
    },
    {
      name: "TikTok",
      icon: FaTiktok,
      url: "https://tiktok.com",
      color: "hover:bg-black hover:text-white"
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: "https://linkedin.com",
      color: "hover:bg-[#0A66C2] hover:text-white"
    },
    {
      name: "X / Twitter",
      icon: FaXTwitter,
      url: "https://x.com",
      color: "hover:bg-black hover:text-white"
    }
  ];

  return (
    <footer className="w-full bg-[#061A3A] text-slate-300 border-t border-[#19C2FF]/20 select-none">
      
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: Brand Info & Social Icons */}
        <div className="space-y-4">
          <Link to="/" className="inline-block">
            <img
              src="/logodark.png"
              alt="Legit Technologies Ltd"
              className="h-16 w-auto"
            />
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed">
            Delivering cutting-edge enterprise software, cybersecurity defense, biometric access, CCTV surveillance, and commercial branding across Kenya.
          </p>
          
          <div className="flex items-center gap-2 text-xs text-[#19C2FF] font-semibold tracking-wide">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>ONLY LEGIT FROM LEGIT TECHNOLOGIES</span>
          </div>

          {/* Social Icons Strip */}
          <div className="pt-3">
            <p className="text-xs font-semibold text-slate-400 mb-2.5">Follow & Chat With Us</p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`p-2.5 rounded-lg bg-[#0A2350] border border-[#19C2FF]/20 text-slate-300 transition-all duration-300 ${social.color}`}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4 border-b border-[#19C2FF]/20 pb-2 inline-block">
            Quick Navigation
          </h3>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-2 hover:text-[#19C2FF] transition-colors group"
                  >
                    <Icon className="w-4 h-4 text-[#19C2FF] group-hover:translate-x-0.5 transition-transform" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
            <li className="pt-1">
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#19C2FF] hover:underline font-medium"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Our Shop</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Key Disciplines */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4 border-b border-[#19C2FF]/20 pb-2 inline-block">
            Key Disciplines
          </h3>
          <ul className="space-y-2 text-xs text-slate-400">
            {serviceRoutes.map((srv, index) => (
              <li key={index}>
                <Link
                  to={srv.path}
                  className="flex items-center gap-1.5 hover:text-[#19C2FF] transition-colors group"
                >
                  <ChevronRight className="w-3 h-3 text-[#19C2FF] group-hover:translate-x-0.5 transition-transform" />
                  <span>{srv.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Our Contact & Newsletter */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold text-lg border-b border-[#19C2FF]/20 pb-2 inline-block">
            Our Contact
          </h3>
          
          <div className="space-y-2.5 text-sm text-slate-400">
            {/* Location */}
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#19C2FF] mt-1 shrink-0" />
              <span>Plaza 2000, Mombasa Road, Nairobi</span>
            </div>

            {/* Direct Phone Call */}
            <div className="flex items-center gap-2.5">
              <PhoneCall className="w-4 h-4 text-[#19C2FF] shrink-0" />
              <a 
                href={`tel:${PHONE_NUMBER}`} 
                className="hover:text-[#19C2FF] transition-colors font-medium"
              >
                0796182880
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#19C2FF] shrink-0" />
              <a 
                href="mailto:info@legittechnologies.com" 
                className="hover:text-[#19C2FF] transition-colors"
              >
                info@legittechnologies.com
              </a>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-2.5">
              <FaWhatsapp className="text-[#25D366] text-base shrink-0" />
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#25D366] transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Newsletter Form */}
          <form onSubmit={(e) => e.preventDefault()} className="pt-2">
            <label className="block text-xs font-medium text-slate-400 mb-1.5">
              Subscribe for IT & Security Updates
            </label>
            <div className="flex items-center bg-[#0A2350] border border-[#19C2FF]/30 rounded-lg overflow-hidden focus-within:border-[#19C2FF]">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#19C2FF] text-[#061A3A] px-3 py-2 hover:bg-white transition-colors"
                aria-label="Subscribe"
              >
                <Send className="w-3.5 h-3.5 font-bold" />
              </button>
            </div>
          </form>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-[#041228] border-t border-slate-800/80 py-4 px-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© {new Date().getFullYear()} Legit Technologies Ltd. All rights reserved.</p>
          <div className="flex space-x-6 text-slate-400">
            <Link to="/privacy" className="hover:text-[#19C2FF] transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#19C2FF] transition">Terms of Service</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
