import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const linkClass = ({ isActive }) =>
    `relative font-medium transition-all duration-300 text-sm tracking-wide
    ${
      isActive
        ? "text-green-700"
        : "text-gray-700 hover:text-green-700"
    }
    after:content-[''] after:absolute after:-bottom-1 after:left-0
    after:h-[2px] after:bg-green-600 after:transition-all
    ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`;

  return (
    <header
      className={`sticky top-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg py-1"
          : "bg-white py-2"
      } border-b border-gray-100`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 md:gap-3 group flex-shrink-0">

          <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center">
            <img
              src={logo}
              alt="Heal Axis Logo"
              className="w-full h-full object-contain scale-125 md:scale-150 transition-all duration-300 group-hover:scale-[1.6]"
            />
          </div>

          <div className="leading-tight">
            <h1 className="text-sm sm:text-base md:text-xl font-black text-green-800 tracking-tight">
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
            className="bg-green-700 text-white px-6 py-2 rounded-full
            font-semibold text-sm shadow-md shadow-green-200
            hover:bg-green-800 hover:shadow-lg transition-all active:scale-95"
          >
            Book Now
          </NavLink>

        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-900 -mr-2"
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Slide Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-[85%] sm:w-[80%] max-w-sm bg-white shadow-2xl z-50 md:hidden"
            >

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="flex flex-col gap-6 mt-20 px-6 sm:px-8">

                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-lg sm:text-xl font-semibold text-gray-800 hover:text-green-700 transition py-2 border-b border-gray-100"
                  >
                    {link.name}
                  </NavLink>
                ))}

                <NavLink
                  to="/book"
                  onClick={() => setIsOpen(false)}
                  className="bg-green-700 text-white text-center py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-green-800 transition mt-4"
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