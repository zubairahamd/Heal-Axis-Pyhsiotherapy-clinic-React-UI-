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
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <section 
        className="relative bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop')] 
                   bg-fixed bg-center bg-cover text-white py-20 md:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 to-green-700/80 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
            Let's Get in <span className="text-green-300">Touch</span>
          </h1>
          <p className="text-green-50 max-w-2xl mx-auto text-sm sm:text-lg md:text-xl leading-relaxed font-light">
            Trusted physiotherapy care for pain relief and mobility recovery. Reach out today to start your healing journey.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-10 md:py-20 relative z-20 -mt-8">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">

          {/* LEFT - CONTACT INFO & MAP */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8 order-2 lg:order-1">
            {/* Info Card */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b-2 border-green-100 inline-block pb-1">
                Visit Clinic
              </h2>

              <div className="space-y-4 md:space-y-6 text-gray-700">
                <InfoItem icon={<FaMapMarkerAlt />} title="Location" text="Nagla Haveli, Dayal Bagh, Agra" />
                <InfoItem icon={<FaPhoneAlt />} title="Phone" text="+91 96340 82280" />
                <InfoItem icon={<FaEnvelope />} title="Email" text="zubairahmad7866r@gmail.com" />
                <InfoItem icon={<FaClock />} title="Hours" text="6:00 PM – 10:00 PM (Mon-Sat)" />
              </div>
            </div>

            {/* MAP CARD */}
            <div className="bg-white p-2 rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="rounded-2xl overflow-hidden w-full h-56 md:h-64 bg-gray-200">
                <iframe
                  title="location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3547.6329302633036!2d78.0102661!3d27.2307871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974776856037f59%3A0x868b209618b76a03!2sDayal%20Bagh%2C%20Agra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
                  className="w-full h-full border-0 grayscale"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* RIGHT - DYNAMIC FORM */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-white p-7 md:p-12 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Send Us a Message
              </h2>
              <p className="text-sm md:text-base text-gray-500 mb-8">We usually reply within 24 hours.</p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <Input placeholder="Your Name" />
                    <Input type="email" placeholder="Your Email" />
                  </div>
                  <Input type="tel" placeholder="Phone Number" />

                  <textarea
                    rows="4"
                    placeholder="How can we help you?"
                    required
                    className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-2xl px-5 py-4
                               focus:outline-none focus:border-green-500 focus:bg-white
                               focus:ring-4 focus:ring-green-50 transition-all duration-300 resize-none text-sm md:text-base"
                  ></textarea>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-2xl
                               font-semibold shadow-lg hover:shadow-green-300 transition-all duration-300 active:scale-95"
                  >
                    {loading ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FaPaperPlane className="text-xs" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                    <FaCheckCircle className="text-green-600 text-4xl animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 text-sm md:text-base px-4">
                    Thank you. Our team will contact you shortly.
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

/* Reusable Components */
const InfoItem = ({ icon, title, text }) => (
  <div className="flex items-center gap-4 p-2 rounded-2xl">
    <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center bg-green-100 text-green-600 rounded-full shadow-sm">
      {icon}
    </div>
    <div>
      <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-wider">{title}</p>
      <p className="text-sm md:text-base text-gray-800 font-medium break-words leading-tight">{text}</p>
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
               focus:ring-4 focus:ring-green-50 transition-all duration-300 text-sm md:text-base"
  />
);

export default Contact;