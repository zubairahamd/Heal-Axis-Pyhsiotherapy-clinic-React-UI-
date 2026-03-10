import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaPhoneAlt,
  FaStethoscope,
  FaCheckCircle,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    service: "",
    customService: "",
    date: "",
    time: "",
    name: "",
    phone: "",
  });

  const [success, setSuccess] = useState(false);

  const services = [
    "Pain Management",
    "Sports Injury",
    "Post-Surgery Rehab",
    "Neurological Care",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      (!formData.service && !formData.customService) ||
      !formData.date ||
      !formData.time ||
      !formData.name ||
      !formData.phone
    ) {
      alert("Please fill all required fields.");
      return;
    }

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  };

  return (
    <section className="py-5 md:py-20 bg-gray-50 relative">
      <div className="max-w-4xl mx-auto px-5 md:px-6">

        <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-green-100/50 border border-green-50 overflow-hidden">

          {/* Header */}
          <div className="bg-green-700 p-6 md:p-8 text-center text-white">
            <h2 className="text-xl md:text-3xl font-bold">
              Book Your Session
            </h2>
            <p className="text-green-100 text-sm mt-2 font-light">
              Fill the details to confirm your home visit.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-5 md:p-10 space-y-6">

            {/* Service */}
            <div>

              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3 ml-1">
                <FaStethoscope className="text-green-600" />
                Select Therapy
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                {services.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, service: s, customService: "" })
                    }
                    className={`py-3 px-4 rounded-xl text-sm font-medium border-2 transition
                    ${
                      formData.service === s
                        ? "border-green-600 bg-green-50 text-green-700"
                        : "border-gray-100 bg-gray-50 text-gray-500 hover:border-green-200"
                    }`}
                  >
                    {s}
                  </button>
                ))}

              </div>

              {/* Custom Therapy Input */}
              <input
                type="text"
                placeholder="Or type your treatment (example: Back Pain Therapy)"
                value={formData.customService}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    customService: e.target.value,
                    service: "",
                  })
                }
                className="w-full mt-4 p-4 bg-gray-50 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
              />

            </div>


            {/* Date Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                  <FaCalendarAlt className="text-green-600" />
                  Preferred Date
                </label>

                <input
                  type="date"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-full p-4 bg-gray-50 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                  <FaClock className="text-green-600" />
                  Preferred Time
                </label>

                <select
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                  className="w-full p-4 bg-gray-50 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                >
                  <option value="">Select Time</option>
                  <option>Evening (4 PM - 6 PM)</option>
                  <option>Evening (6 PM - 8 PM)</option>
                  <option>Evening (8 PM - 10 PM)</option>
                </select>
              </div>

            </div>

            <hr className="border-gray-100" />

            {/* Patient Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                  <FaUser className="text-green-600" />
                  Patient Name
                </label>

                <input
                  type="text"
                  required
                  placeholder="Enter full name"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full p-4 bg-gray-50 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                  <FaPhoneAlt className="text-green-600" />
                  Phone Number
                </label>

                <input
                  type="tel"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full p-4 bg-gray-50 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-4 md:py-5 rounded-xl shadow-lg shadow-green-200 transition active:scale-95 text-base md:text-lg"
            >
              Confirm Appointment
            </button>

          </form>
        </div>
      </div>

      {/* Success Popup */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              exit={{ y: 40 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 max-w-sm w-full text-center"
            >

              <FaCheckCircle className="text-green-600 text-5xl mx-auto mb-4" />

              <h3 className="text-xl font-bold text-gray-800">
                Appointment Confirmed
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                Thank you! Your booking request has been received.
                Our team will contact you shortly.
              </p>

              <div className="flex items-center justify-center gap-2 mt-4 text-green-700 font-semibold">
                <FaPhoneAlt /> We will call you soon
              </div>

              <button
                onClick={() => setSuccess(false)}
                className="mt-6 bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg"
              >
                Close
              </button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default BookingForm;