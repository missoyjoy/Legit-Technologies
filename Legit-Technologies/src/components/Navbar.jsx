// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  Info, 
  Wrench, 
  ShoppingBag, 
  Users, 
  Mail, 
  Menu, 
  X,
  ExternalLink
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";

// 👉 Put the address of your shop website here
const SHOP_URL = "https://YOUR-SHOP-LINK";

// Link styling for desktop
const linkClass = "flex items-center gap-1.5 font-medium transition hover:text-[#0A4DA2] dark:hover:text-[#19C2FF]";

// Logo styling
const logoClass = "h-12 lg:h-16 w-auto";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Main navigation links with small icons
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About Us", icon: Info },
    { path: "/services", label: "Services", icon: Wrench },
    { path: "/careers", label: "Careers", icon: Users },
    { path: "/contact", label: "Contact Us", icon: Mail },
  ];

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top bar */}
      <div className="relative bg-[#0A4DA2] text-white text-xs sm:text-sm py-1.5 px-4 sm:px-6 flex justify-center items-center tracking-wide">
        <span className="font-semibold text-center">"ONLY LEGIT FROM LEGIT TECHNOLOGIES"</span>
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <ThemeToggle />
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className="shadow-md border-b transition-colors duration-300
                   bg-white text-slate-900 border-slate-200
                   dark:bg-[#061A3A] dark:text-white dark:border-[#19C2FF]/25"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logolight.png"
              alt="Legit Technologies Ltd"
              className={`${logoClass} dark:hidden`}
            />
            <img
              src="/logodark.png"
              alt="Legit Technologies Ltd"
              className={`${logoClass} hidden dark:block`}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center space-x-8 text-sm">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.path}>
                  <Link to={item.path} className={linkClass}>
                    <Icon className="w-4 h-4 text-[#0A4DA2] dark:text-[#19C2FF]" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}

            {/* Shop Button */}
            <li>
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-semibold transition
                           bg-[#0A4DA2] text-white hover:bg-[#061A3A]
                           dark:bg-[#19C2FF] dark:text-[#061A3A] dark:hover:bg-white
                           hover:shadow-[0_0_12px_rgba(25,194,255,0.6)]"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Our Shop</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A4DA2] dark:focus:ring-[#19C2FF]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7 text-[#0A4DA2] dark:text-[#19C2FF]" />
              ) : (
                <Menu className="w-7 h-7 text-[#0A4DA2] dark:text-[#19C2FF]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Responsive Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-slate-200 dark:border-[#19C2FF]/20 bg-slate-50 dark:bg-[#0A2350]"
            >
              <ul className="flex flex-col space-y-4 px-6 py-5 text-base">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className="flex items-center gap-3 py-1 font-medium hover:text-[#0A4DA2] dark:hover:text-[#19C2FF]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Icon className="w-5 h-5 text-[#0A4DA2] dark:text-[#19C2FF]" />
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  );
                })}

                <li className="pt-2">
                  <a
                    href={SHOP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-2 w-full rounded-md py-2.5 font-semibold text-center
                               bg-[#0A4DA2] text-white hover:bg-[#061A3A]
                               dark:bg-[#19C2FF] dark:text-[#061A3A]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>Our Shop</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Navbar;














