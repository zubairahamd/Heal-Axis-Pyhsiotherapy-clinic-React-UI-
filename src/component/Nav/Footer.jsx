import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";

import {
  FaPhoneAlt, 
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaCheckCircle,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-5 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* Brand Info */}
        <div className="md:col-span-2">
          {/* Clickable Logo */}
          <NavLink to="/" className="flex items-center mb-3">
            <img
              src={logo}
              alt="Heal Axis Logo"
              className="w-14 h-14 object-contain"
            />
            <h2 className="text-2xl font-bold text-white">Heal Axis</h2>
          </NavLink>

          {/* <p className="text-sm leading-relaxed">
            <span className="font-semibold text-white">
              Move Better. Live Pain Free.
            </span>{" "}
            Professional physiotherapy care to relieve pain, restore movement,
            and improve quality of life. We focus on safe, result-oriented,
            and patient-centered treatment plans.
          </p> */}

          {/* Trust Points */}
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              Certified Physiotherapy Care
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              Modern Equipment & Techniques
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              Personalized Treatment Plans
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              Pain & Mobility Care
            </li>
          </ul>

          {/* Social */}
          <div className="flex gap-4 mt-6">
            <FaFacebookF className="hover:text-green-500 cursor-pointer" />
            <FaInstagram className="hover:text-green-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-green-500 cursor-pointer" />
            <FaYoutube className="hover:text-green-500 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/" className="hover:text-green-500">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:text-green-500">About Us</NavLink></li>
            <li><NavLink to="/therapies" className="hover:text-green-500">Therapies</NavLink></li>
            <li><NavLink to="/book-online" className="hover:text-green-500">Book Online</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-green-500">Contact</NavLink></li>
          </ul>
        </div>

        {/* Therapies */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Our Therapies
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Pain Relief Physiotherapy</li>
            <li>Sports Injury Treatment</li>
            <li>Post Surgery Rehabilitation</li>
            <li>Joint & Muscle Care</li>
          </ul>

          <p className="mt-4 text-sm">
            <span className="font-semibold text-white">Working Hours:</span><br />
            4:00 PM – 10:00 PM
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>

          <p className="flex items-start gap-3 text-sm mb-3">
            <FaMapMarkerAlt className="mt-1 text-green-500" />
            Nagla Haveli, Dayal Bagh, Agra
          </p>

          <p className="flex items-center gap-3 text-sm mb-3">
            <FaPhoneAlt className="text-green-500" />
            9634082280
          </p>

          <p className="flex items-center gap-3 text-sm mb-4">
            <FaEnvelope className="text-green-500" />
            zubairahmad7866r@gmail.com
          </p>

          <NavLink
            to="/contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md text-sm"
          >
            Send Message
          </NavLink>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 py-4 text-center text-sm">
        © 2026 Heal Axis. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
