import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO SECTION WITH PARALLAX EFFECT */}
      <section 
        className="relative bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop')] 
                   bg-fixed bg-center bg-cover text-white py-32 overflow-hidden"
      >
        {/* Dark Green Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 to-green-700/80 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center transform transition-all duration-700 hover:scale-105">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
            Let's Get in <span className="text-green-300">Touch</span>
          </h1>
          <p className="text-green-50 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light drop-shadow-md">
            Trusted physiotherapy care for pain relief, mobility recovery, and posture correction. Reach out today to start your healing journey.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-20 relative z-20 -mt-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* LEFT - CONTACT INFO & MAP */}
          <div className="lg:col-span-5 space-y-8">
            {/* Info Card */}
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-green-100 inline-block pb-2">
                Visit Clinic
              </h2>

              <div className="space-y-6 text-gray-700">
                <InfoItem icon={<FaMapMarkerAlt />} title="Location" text="Nagla Haveli, Dayal Bagh, Agra" />
                <InfoItem icon={<FaPhoneAlt />} title="Phone" text="+91 96340 82280" />
                <InfoItem icon={<FaEnvelope />} title="Email" text="zubaira@gmail.com" />
                <InfoItem icon={<FaClock />} title="Hours" text="6:00 PM – 10:00 PM (Mon-Sat)" />
              </div>
            </div>

            {/* MAP CARD */}
            <div className="bg-white p-3 rounded-3xl shadow-xl hover:shadow-2xl transition-transform duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="rounded-2xl overflow-hidden w-full h-64 bg-gray-200">
                <iframe
                  title="location"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Nagla%20Haveli,%20Dayal%20Bagh,%20Agra+(Physiotherapy%20Clinic)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* RIGHT - DYNAMIC FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white p-10 md:p-12 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden group">
              {/* Decorative background element */}
              <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-green-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

              <h2 className="text-3xl font-bold text-gray-800 mb-2 relative z-10">
                Send Us a Message
              </h2>
              <p className="text-gray-500 mb-8 relative z-10">We usually reply within 24 hours.</p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input placeholder="Your Name" />
                    <Input type="email" placeholder="Your Email" />
                  </div>
                  <Input type="tel" placeholder="Phone Number" />

                  <textarea
                    rows="5"
                    placeholder="How can we help you?"
                    required
                    className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-2xl px-5 py-4
                               focus:outline-none focus:border-green-500 focus:bg-white
                               focus:ring-4 focus:ring-green-50 transition-all duration-300 resize-none
                               hover:border-green-300"
                  ></textarea>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-2xl
                               font-semibold tracking-wide shadow-lg shadow-green-200
                               hover:shadow-green-300 hover:from-green-700 hover:to-green-800 hover:-translate-y-1
                               active:scale-95 active:translate-y-0 transition-all duration-300"
                  >
                    {loading ? (
                      <span className="animate-pulse">Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FaPaperPlane className="text-sm group-hover:animate-bounce" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-16 animate-fade-in-up">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
                    <FaCheckCircle className="text-green-600 text-5xl animate-bounce" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Thank you. Our physiotherapy team will contact you shortly.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

/* --- Enhanced Reusable Components --- */

const InfoItem = ({ icon, title, text }) => (
  <div className="flex items-center gap-4 group p-3 rounded-2xl hover:bg-green-50 transition-colors duration-300">
    <div className="w-12 h-12 flex items-center justify-center bg-green-100 text-green-600 rounded-full group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm">
      {icon}
    </div>
    <div>
      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{title}</p>
      <p className="text-gray-800 font-medium">{text}</p>
    </div>
  </div>
);

const Input = ({ type = "text", placeholder }) => (
  <input
    type={type}
    placeholder={placeholder}
    required
    className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-2xl px-5 py-4
               focus:outline-none focus:border-green-500 focus:bg-white
               focus:ring-4 focus:ring-green-50 transition-all duration-300
               hover:border-green-300"
  />
);

export default Contact;