import { NavLink } from "react-router-dom";
import therapistAtHome from "../../../assets/img/therapistathome.png";

const AboutHero = () => {
  return (
    <section className="w-full py-10 md:py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 
      grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

        {/* Content - Mobile par Order 1 (Upar) */}
        <div className="order-1 lg:order-1 text-left max-w-xl mx-auto lg:mx-0">
          
          <span className="inline-block mb-4 px-4 py-1 text-xs sm:text-sm font-medium 
          bg-green-100 text-green-800 rounded-full">
            About Heal Axis
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
          font-bold text-gray-900 leading-tight mb-4">
            Professional Physiotherapy
            <br className="hidden sm:block" />
            <span className="text-green-700"> Care at Your Home</span>
          </h1>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg 
          leading-relaxed mb-4 text-justify sm:text-left">
            Heal Axis provides trusted and professional physiotherapy
            services designed to help patients recover safely and
            comfortably in their own homes.
          </p>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg 
          leading-relaxed mb-7 text-justify sm:text-left">
            Our experienced physiotherapists create personalized
            rehabilitation plans to reduce pain, improve mobility,
            and support long-term health and recovery.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 lg:mb-0">
            <NavLink
              to="/book"
              className="bg-green-700 hover:bg-green-800 text-white 
              px-6 py-3 rounded-lg font-medium shadow-md text-center transition"
            >
              Book Home Physiotherapy
            </NavLink>

            <NavLink
              to="/contact"
              className="border border-green-700 text-green-700 
              hover:bg-green-50 px-6 py-3 rounded-lg 
              font-medium text-center transition"
            >
              Contact Us
            </NavLink>
          </div>
        </div>

        {/* Image - Mobile par Order 2 (Niche) */}
        <div className="order-2 lg:order-2 flex justify-center">
          <div className="relative w-full max-w-md 
          h-[220px] sm:h-[280px] md:h-[350px] lg:h-[450px]
          rounded-2xl overflow-hidden shadow-lg border-4 border-white">
            <img
              src={therapistAtHome}
              alt="Physiotherapist treating patient at home"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutHero;