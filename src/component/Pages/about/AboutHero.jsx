import { NavLink } from "react-router-dom";
import therapistAtHome from "../../../assets/img/therapistathome.png";

const AboutHero = () => {
  return (
    <section className="w-full py-10 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-sm font-medium 
                           bg-green-100 text-green-800 rounded-full">
            About Heal Axis
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold 
                         text-gray-900 leading-tight mb-6">
            Professional Physiotherapy <br />
            <span className="text-green-700">At Your Home</span>
          </h1>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5">
            Heal Axis is committed to providing trusted and professional
            physiotherapy services at home and through online consultations.
            Our focus is on safe, ethical, and medically approved treatment.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
            With experienced physiotherapists and personalized care plans,
            we help patients recover from pain, injuries, and mobility issues
            comfortably at home.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <NavLink to="/book"
              className="bg-green-700 hover:bg-green-800 text-white 
                         px-6 py-3 rounded-lg font-medium transition shadow-md"
            >
              Book Home Physiotherapy
            </NavLink>


            <NavLink to="/contact"
              className="border border-green-700 text-green-700 
                         hover:bg-green-50 px-6 py-3 rounded-lg 
                         font-medium transition"
            >
              Contact Us
            </NavLink>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="absolute -inset-4 bg-green-200 
                          rounded-3xl blur-2xl opacity-40"></div>

          <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[440px]
                          overflow-hidden rounded-3xl shadow-xl">
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
