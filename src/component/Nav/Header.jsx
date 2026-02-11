import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const Header = () => {
  const linkClass = ({ isActive }) =>
    `relative font-medium transition
     ${isActive ? "text-green-700" : "text-gray-900 hover:text-green-700"}
     after:content-[''] after:absolute after:-bottom-1 after:left-0
     after:h-[2px] after:bg-green-600 after:transition-all
     ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`;

  return (
    <header className="bg-white/90  bg-transparent backdrop-blur border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* Logo + Brand */}
        <div className="flex items-center gap-">
          <img
            src={logo}
            alt="Heal Axis Logo"
            className="h-20 w-20 object-contain"
          />
          <div className="leading-tight">
            <span className="block text-xl font-bold text-green-800">
              Heal Axis
            </span>
            <span className="block text-xs text-gray-500">
              Physiotherapy & Rehab
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>

          <NavLink to="/therapies" className={linkClass}>
            Therapies
          </NavLink>

          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>

          {/* CTA */}
          <NavLink
            to="/book"
            className="ml-4 bg-green-600 text-white px-5 py-2 rounded-full
                       font-semibold text-sm shadow-sm
                       hover:bg-green-700 transition"
          >
            Book Online
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
