import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
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
    <>
      {/* HERO */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-wide">
            Get in Touch
          </h1>
          <p className="text-green-100 max-w-2xl mx-auto leading-relaxed">
            Trusted physiotherapy care for pain relief, mobility recovery
            and posture correction.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* LEFT */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Contact Information
            </h2>

            <div className="space-y-5 text-gray-700">
              <InfoItem icon={<FaMapMarkerAlt />} text="Nagla Haveli, Dayal Bagh, Agra" />
              <InfoItem icon={<FaPhoneAlt />} text="9634082280" />
              <InfoItem icon={<FaEnvelope />} text="zubaira@gmail.com" />
              <InfoItem icon={<FaClock />} text="6:00 PM – 10:00 PM" />
            </div>

            {/* MAP */}
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <iframe
                title="location"
                src="https://www.google.com/maps?q=Dayal%20Bagh%20Agra&output=embed"
                className="w-full h-72 border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* RIGHT - FORM */}
          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Input type="tel" placeholder="Phone Number" />

                <textarea
                  rows="4"
                  placeholder="Your Message"
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3
                             focus:outline-none focus:border-green-600
                             focus:ring-2 focus:ring-green-100 transition"
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-700 text-white py-3 rounded-xl
                             font-medium tracking-wide
                             hover:bg-green-800 hover:scale-[1.02]
                             active:scale-95 transition-all duration-300"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            ) : (
              <div className="text-center py-10">
                <FaCheckCircle className="text-green-600 text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Message Sent Successfully
                </h3>
                <p className="text-gray-600 mt-2">
                  Our physiotherapy team will contact you shortly.
                </p>
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  );
};

/* Small reusable components */

const InfoItem = ({ icon, text }) => (
  <p className="flex items-start gap-4 hover:translate-x-1 transition">
    <span className="text-green-600 mt-1">{icon}</span>
    {text}
  </p>
);

const Input = ({ type = "text", placeholder }) => (
  <input
    type={type}
    placeholder={placeholder}
    required
    className="w-full border border-gray-300 rounded-xl px-4 py-3
               focus:outline-none focus:border-green-600
               focus:ring-2 focus:ring-green-100 transition"
  />
);

export default Contact;
