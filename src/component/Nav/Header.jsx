import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/img/logo.png";

// Senior Dev Tip: Maintain a config for links
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Therapies", path: "/therapies" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for a premium feel
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [location]);

  const linkClass = ({ isActive }) =>
    `relative font-medium transition-all duration-300 text-sm tracking-wide
     ${isActive ? "text-green-700" : "text-gray-700 hover:text-green-700"}
     after:content-[''] after:absolute after:-bottom-1 after:left-0
     after:h-[2px] after:bg-green-600 after:transition-all
     ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`;

  return (
    <header 
      className={`sticky top-0 z-[100] transition-all duration-500 ${
        scrolled 
        ? "bg-white/80 backdrop-blur-md shadow-lg py-2" 
        : "bg-white py-4"
      } border-b border-gray-100`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo Section */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="Heal Axis Logo"
            className="h-12 w-12 md:h-14 md:w-14 object-contain transition-transform group-hover:scale-105"
          />
          <div className="leading-tight">
            <h1 className="text-xl md:text-2xl font-black text-green-800 tracking-tight">
              HEAL AXIS
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
              Physiotherapy & Rehab
            </p>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass}>
              {link.name}
            </NavLink>
          ))}
          
          <NavLink
            to="/book"
            className="bg-green-700 text-white px-7 py-2.5 rounded-full
                       font-bold text-sm shadow-md shadow-green-200
                       hover:bg-green-800 hover:shadow-lg transition-all active:scale-95"
          >
            Book Now
          </NavLink>
        </nav>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden text-gray-900 focus:outline-none p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-green-800 transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-full h-0.5 bg-green-800 transition-all ${isOpen ? "opacity-0" : ""}`} />
            <span className={`w-full h-0.5 bg-green-800 transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1] md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-[75%] bg-white shadow-2xl z-50 md:hidden p-8"
            >
              <div className="flex flex-col gap-8 mt-12">
                {navLinks.map((link) => (
                  <NavLink 
                    key={link.path} 
                    to={link.path} 
                    className="text-2xl font-bold text-gray-800 hover:text-green-700 transition"
                  >
                    {link.name}
                  </NavLink>
                ))}
                <NavLink
                  to="/book"
                  className="bg-green-700 text-white text-center py-4 rounded-2xl font-bold text-lg shadow-lg"
                >
                  Book Appointment
                </NavLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;