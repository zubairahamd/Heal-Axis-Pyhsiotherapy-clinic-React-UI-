import { NavLink } from "react-router-dom";

const BookHeroContent = () => {
  return (
    <div className="relative z-10 h-full flex items-center">
      <div className="max-w-6xl mx-auto px-6 text-white">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3">
          Book Your Physiotherapy Session
        </h1>

        <p className="text-sm sm:text-base text-gray-200 max-w-xl mb-6">
          Expert physiotherapy care to reduce pain, improve mobility,
          and help you live pain free.
        </p>

        <div className="flex flex-wrap gap-4">
          <NavLink
            to="/book-online"
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
  );
};

export default BookHeroContent;
