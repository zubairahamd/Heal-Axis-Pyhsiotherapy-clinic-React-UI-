import { NavLink } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="w-full py-16 bg-green-700">
      <div className="max-w-7xl mx-auto px-6 text-center text-white">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Start Your Recovery Journey Today
        </h2>

        {/* Sub text */}
        <p className="text-green-100 max-w-2xl mx-auto mb-8 text-base md:text-lg">
          Professional physiotherapy at your home with ethical, personalized
          and recovery-focused care.
        </p>

        {/* CTA Button */}
        <NavLink
          to="/book-online"
          className="inline-flex items-center justify-center
                     bg-white text-green-700 font-semibold
                     px-8 py-3 rounded-xl
                     hover:bg-green-100 transition
                     shadow-lg"
        >
          Book Online Consultation
        </NavLink>

      </div>
    </section>
  );
};

export default AboutCTA;
