import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import bookHeroImg from "../../../assets/img/bookheroimg.png";

const BookHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- Logic: 10 Sec Auto-Popup (Senior Dev Strategy) ---
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenBookingPopup");
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
        sessionStorage.setItem("hasSeenBookingPopup", "true");
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <section className="relative w-full h-[450px] md:h-[550px] flex items-center overflow-hidden">
        
        {/* Background Image with subtle Zoom effect */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src={bookHeroImg}
            alt="Zubair Ahmad Physiotherapy"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </motion.div>

        {/* Content Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="bg-green-600 text-[10px] uppercase tracking-[3px] font-bold px-3 py-1 rounded mb-4 inline-block">
              Trusted Physiotherapy Care
            </span>
            
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] mb-6">
              Expert Care to Get You <br /> 
              <span className="text-green-500 italic">Moving Again.</span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
              Recovery starts with a single step. Book a personalized session with 
              <strong> Tanveer Ahmad</strong> to regain your strength and mobility.
            </p>

            <div className="flex flex-wrap gap-5">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl font-bold text-white shadow-lg shadow-green-900/20 transition-all hover:scale-105"
              >
                Book Appointment
              </button>

              <NavLink
                to="/contact"
                className="backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl font-bold transition-all"
              >
                Contact Specialist
              </NavLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Booking Form Modal --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            ></motion.div>

            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Book Your Session</h2>
                    <p className="text-sm text-gray-500 mt-1">Fill in the details to schedule your visit.</p>
                  </div>
                  <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-900 text-2xl">×</button>
                </div>

                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  alert("Booking Submitted Successfully! Our team will contact you.");
                  setIsModalOpen(false);
                }}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase text-gray-400">Full Name</label>
                      <input type="text" required className="w-full bg-gray-50 border-none rounded-xl p-3 focus:ring-2 focus:ring-green-500" placeholder="John Doe" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase text-gray-400">Phone</label>
                      <input type="tel" required className="w-full bg-gray-50 border-none rounded-xl p-3 focus:ring-2 focus:ring-green-500" placeholder="+91 ..." />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-gray-400">Select Therapy</label>
                    <select className="w-full bg-gray-50 border-none rounded-xl p-3 focus:ring-2 focus:ring-green-500">
                      <option>General Consultation</option>
                      <option>Sciatica Pain Relief</option>
                      <option>Sports Injury Rehab</option>
                      <option>Post-Surgery Care</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-gray-400">Preferred Date & Time</label>
                    <input type="datetime-local" className="w-full bg-gray-50 border-none rounded-xl p-3 focus:ring-2 focus:ring-green-500" />
                  </div>

                  <button type="submit" className="w-full bg-green-700 text-white font-bold py-4 rounded-xl mt-4 hover:bg-green-800 transition-all shadow-lg shadow-green-100">
                    Confirm Booking
                  </button>
                </form>

                <p className="text-[10px] text-center text-gray-400 mt-6">
                  By clicking confirm, you agree to our privacy policy and clinic terms.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BookHero;