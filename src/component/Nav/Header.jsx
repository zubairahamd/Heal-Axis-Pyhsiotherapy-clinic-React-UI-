import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import logo from "../../assets/img/logo.png";

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

  // Parallax Effect Setup
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 100], [0, -2]); 
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => setIsOpen(false), [location]);

  const linkClass = ({ isActive }) =>
    `relative font-medium transition-all duration-300 text-sm tracking-wide
    ${
      isActive
        ? "text-green-700"
        : "text-gray-700 hover:text-green-700"
    }
    after:content-[''] after:absolute after:-bottom-1 after:left-0
    after:h-[2px] after:bg-gradient-to-r after:from-green-500 after:to-green-700 after:transition-all
    ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`;

  return (
    <motion.header
      style={{ y: headerY }}
      className={`sticky top-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg py-1"
          : "bg-white py-2"
      } border-b border-gray-100`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">

        {/* Logo Section */}
        <NavLink to="/" className="flex items-center gap-2 md:gap-3 group flex-shrink-0">
          <motion.div style={{ scale: logoScale }} className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center">
            <img
              src={logo}
              alt="Heal Axis Logo"
              className="w-full h-full object-contain scale-125 md:scale-150 transition-all duration-300 group-hover:scale-[1.6]"
            />
          </motion.div>

          <div className="leading-tight">
            <h1 className="text-sm sm:text-base md:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-600 tracking-tight transition-all duration-300">
              HEAL AXIS
            </h1>
            <p className="text-[6px] sm:text-[8px] md:text-[10px] uppercase tracking-widest text-gray-400 font-bold truncate max-w-[80px] sm:max-w-none">
              Physiotherapy & Rehab
            </p>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass}>
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/book"
            className="bg-gradient-to-r from-green-700 to-green-600 text-white px-6 py-2 rounded-full
            font-semibold text-sm shadow-md shadow-green-200
            hover:shadow-lg hover:shadow-green-300 hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
          >
            Book Now
          </NavLink>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-900 -mr-2 z-[130] relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-green-800 transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-full bg-green-800 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-full bg-green-800 transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[110] md:hidden"
            />

            {/* Sliding Drawer - Fixed full height logic */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-[80%] max-w-[300px] bg-gradient-to-br from-green-50 via-white to-green-100 shadow-2xl z-[120] md:hidden rounded-bl-[40px] border-l border-green-200 flex flex-col"
            >
              {/* Decorative Parallax Orbs */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 0.1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="absolute -top-10 -right-10 w-40 h-40 bg-green-500 rounded-full blur-3xl pointer-events-none"
              />
              <motion.div 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 0.1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-700 rounded-full blur-3xl pointer-events-none"
              />

              {/* Drawer Header */}
              <div className="relative z-10 flex items-center p-6 border-b border-green-100/50 mt-2 flex-shrink-0">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-600 font-bold text-base uppercase tracking-wider">
                  Navigation
                </span>
              </div>

              {/* Scrollable Links Container */}
              <div className="relative z-10 flex flex-col gap-2 mt-4 px-5 overflow-y-auto flex-grow pb-10 custom-scrollbar">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.1, type: "spring", stiffness: 100 }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) => 
                        `text-sm sm:text-base font-semibold py-3.5 px-5 rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                          isActive ? "bg-white shadow-md shadow-green-100 text-green-700 border border-green-50" : "text-gray-700 hover:bg-white/60 hover:text-green-800"
                        }`
                      }
                    >
                      {link.name}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-30 group-hover:translate-x-1 group-hover:opacity-100 transition-all text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </NavLink>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  <NavLink
                    to="/book"
                    onClick={() => setIsOpen(false)}
                    className="bg-gradient-to-r from-green-700 to-green-600 text-white text-center py-4 rounded-2xl font-bold text-sm sm:text-base shadow-lg shadow-green-200/50 hover:shadow-green-300 hover:-translate-y-1 transition-all active:scale-95 mt-6 mx-1 block"
                  >
                    Book Appointment
                  </NavLink>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;