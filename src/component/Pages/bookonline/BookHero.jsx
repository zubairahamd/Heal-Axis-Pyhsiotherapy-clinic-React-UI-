import { useState, useEffect } from "react";
import bookHeroImg from "../../../assets/img/bookheroimg.png";

const BookHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto popup after 4 seconds
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenBookingPopup");

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
        sessionStorage.setItem("hasSeenBookingPopup", "true");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <section className="w-full py-10 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
              Book Physiotherapy
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Book Your <br />
              <span className="text-green-700">Physiotherapy Session</span>
            </h1>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5">
              Schedule a professional physiotherapy session from the comfort of
              your home. Our experienced therapists provide safe, personalized,
              and effective treatment for pain relief and mobility recovery.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
              Simply fill the booking form and our team will contact you shortly
              to confirm your appointment and guide you through the next steps.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-medium transition shadow-md"
            >
              Book Appointment
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-green-200 rounded-3xl blur-2xl opacity-40"></div>

            <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[440px] overflow-hidden rounded-3xl shadow-xl">
              <img
                src={bookHeroImg}
                alt="Book Physiotherapy Session"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          
          {/* Overlay */}
          <div
            onClick={() => setIsModalOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          ></div>

          {/* Modal */}
          <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl p-8">
            
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Book Your Session
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Fill the form and our team will contact you.
                </p>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-900 text-2xl"
              >
                ×
              </button>
            </div>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Booking Submitted Successfully! Our team will contact you."
                );
                setIsModalOpen(false);
              }}
            >
              <div className="grid grid-cols-2 gap-4">
                
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-gray-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-gray-50 rounded-xl p-3 focus:ring-2 focus:ring-green-500"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-gray-400">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-gray-50 rounded-xl p-3 focus:ring-2 focus:ring-green-500"
                    placeholder="+91..."
                  />
                </div>

              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-gray-400">
                  Select Therapy
                </label>
                <select className="w-full bg-gray-50 rounded-xl p-3 focus:ring-2 focus:ring-green-500">
                  <option>General Consultation</option>
                  <option>Sciatica Pain Relief</option>
                  <option>Sports Injury Rehab</option>
                  <option>Post Surgery Care</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-gray-400">
                  Preferred Date & Time
                </label>
                <input
                  type="datetime-local"
                  className="w-full bg-gray-50 rounded-xl p-3 focus:ring-2 focus:ring-green-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-700 text-white font-bold py-4 rounded-xl hover:bg-green-800 transition"
              >
                Confirm Booking
              </button>
            </form>

            <p className="text-[10px] text-center text-gray-400 mt-6">
              By confirming booking you agree to our clinic policies.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default BookHero;