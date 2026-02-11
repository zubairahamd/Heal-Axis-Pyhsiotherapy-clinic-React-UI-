import { NavLink } from "react-router-dom";
import bookHeroImg from "../../../assets/img/bookheroimg.png";

const BookHero = () => {
  return (
    <section className="relative w-full h-[290px] sm:h-[280px] md:h-[320px] overflow-hidden">
      
      {/* Background Image */}
      <img
        src={bookHeroImg}
        alt="Book Physiotherapy Appointment"
        className="absolute inset-0 w-full  object-cover h-[600px]"
        loading="eager"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-white">

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3">
            Book Your Physiotherapy Session
          </h1>

          <p className="text-sm sm:text-base text-gray-200 max-w-xl mb-6">
            Expert physiotherapy care designed to reduce pain, restore movement,
            and help you live a healthier life.
          </p>

          <div className="flex flex-wrap gap-4">
            <NavLink
              to="/book"
              className="bg-green-600 hover:bg-green-700
                         px-6 py-3 rounded-lg text-sm font-semibold
                         transition-all duration-300 hover:scale-[1.03]"
            >
              Book Appointment
            </NavLink>

            <NavLink
              to="/contact"
              className="border border-white/80
                         hover:bg-white hover:text-gray-900
                         px-6 py-3 rounded-lg text-sm font-semibold
                         transition-all duration-300"
            >
              Contact Us
            </NavLink>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookHero;
