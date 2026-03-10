import { NavLink } from "react-router-dom";
import heroImg from "../../../assets/img/therapies-hero.png";

const TherapiesHero = () => {
  return (
    <section className="w-full bg-[#f8faf9] py-5 md:py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT CONTENT - Mobile par Order 1 */}
          <div className="order-1 lg:order-1 text-left">

            <span className="inline-block mb-4 px-4 py-1.5 text-xs sm:text-sm font-medium
                             text-green-700 bg-green-100 rounded-full uppercase tracking-wide">
              Our Therapies
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                           font-bold text-gray-900
                           leading-tight mb-5">
              Physiotherapy Treatments
              <br className="hidden sm:block" />
              <span className="text-green-700"> Focused on Real Recovery</span>
            </h1>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-xl text-justify sm:text-left">
              We provide evidence-based physiotherapy treatments at home,
              designed to relieve pain, restore mobility, and support
              long-term physical recovery — safely and professionally.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 lg:mb-0">
              <NavLink
                to="/book"
                className="inline-flex items-center justify-center
                           bg-green-700 text-white font-medium
                           px-8 py-3.5 rounded-xl text-sm sm:text-base
                           hover:bg-green-800 transition shadow-md active:scale-95"
              >
                Book Online Consultation
              </NavLink>

              <NavLink
                to="/about"
                className="inline-flex items-center justify-center
                           text-green-700 font-medium
                           px-8 py-3.5 rounded-xl text-sm sm:text-base
                           border border-green-200
                           hover:bg-green-50 transition active:scale-95"
              >
                Learn About Our Approach
              </NavLink>
            </div>
          </div>

          {/* RIGHT IMAGE - Mobile par Order 2 aur Short Height */}
          <div className="order-2 lg:order-2 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* background shape decoration */}
              <div className="absolute -top-4 -left-4 w-20 h-20
                              bg-green-100 rounded-full -z-10 blur-xl"></div>
              
              <div className="relative h-[240px] sm:h-[300px] md:h-[400px] lg:h-auto overflow-hidden rounded-3xl shadow-xl">
                <img
                  src={heroImg}
                  alt="Physiotherapy treatment at home"
                  className="w-full h-full object-cover lg:object-contain rounded-3xl"
                />
              </div>

              {/* small floating card design for aesthetic */}
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-xl shadow-lg hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold text-gray-700">Expert Care</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TherapiesHero;