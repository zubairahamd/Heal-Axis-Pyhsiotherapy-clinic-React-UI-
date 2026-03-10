import { NavLink } from "react-router-dom";
import heroImg from "../../../assets/img/therapies-hero.png";

const TherapiesHero = () => {
  return (
    <section className="w-full bg-[#f8faf9]">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>

            <span className="inline-block mb-4 px-4 py-1.5 text-sm font-medium
                             text-green-700 bg-green-100 rounded-full">
              Our Therapies
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl
                           font-semibold text-gray-900
                           leading-tight mb-6">
              Physiotherapy Treatments
              <br />
              <span className="text-green-700">
                Focused on Real Recovery
              </span>
            </h1>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              We provide evidence-based physiotherapy treatments at home,
              designed to relieve pain, restore mobility, and support
              long-term physical recovery — safely and professionally.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <NavLink
                to="/book"
                className="inline-flex items-center justify-center
                           bg-green-700 text-white font-medium
                           px-8 py-3 rounded-lg
                           hover:bg-green-800 transition shadow-sm"
              >
                Book Online Consultation
              </NavLink>

              <NavLink
                to="/about"
                className="inline-flex items-center justify-center
                           text-green-700 font-medium
                           px-8 py-3 rounded-lg
                           border border-green-200
                           hover:bg-green-50 transition"
              >
                Learn About Our Approach
              </NavLink>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* subtle background shape */}
              <div className="absolute -top-6 -left-6 w-full h-full
                              bg-green-100 rounded-3xl -z-10"></div>

              <img
                src={heroImg}
                alt="Physiotherapy treatment at home"
                className="w-full max-w-md
                           rounded-3xl shadow-lg"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TherapiesHero;
