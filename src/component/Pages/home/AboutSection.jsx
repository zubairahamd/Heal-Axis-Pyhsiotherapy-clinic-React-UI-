import aboutImg from "../../../assets/img/about.png";
import { NavLink } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="w-full py-10 md:py-16 from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* Content - Mobile par Order 1 (Upar) */}
        <div className="order-1 md:order-2 text-left">
          <span className="inline-block bg-green-100 text-green-800 text-xs sm:text-sm font-medium px-4 py-1 rounded-full mb-4">
            About Us
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
            Trusted Physiotherapy Care <br className="hidden sm:block" />
            <span className="text-green-700">At Your Home</span>
          </h2>

          {/* Mobile par text-justify se zigzag khatam ho jayega */}
          <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed text-justify md:text-left">
            Heal Axis provides professional <strong>physiotherapy at home</strong> and
            <strong> online consultations</strong>. With over
            <strong> 5+ years of clinical experience</strong>, we follow
            ethical and medically approved treatment practices.
          </p>

          <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed text-justify md:text-left">
            Our expert physiotherapists treat pain, sports injuries,
            post-surgery recovery, and mobility issues using
            personalized therapy plans focused on long-term recovery.
          </p>

          {/* Stats - Grid layout for mobile */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-green-700">5+</h3>
              <p className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-wide">Years Exp.</p>
            </div>
            <div className="text-center md:text-left border-x border-gray-200">
              <h3 className="text-xl sm:text-2xl font-bold text-green-700">1000+</h3>
              <p className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-wide">Patients</p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-green-700">Home</h3>
              <p className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-wide">Service</p>
            </div>
          </div>

          <p className="text-gray-800 font-medium mb-8 italic text-sm sm:text-base">
            “Your recovery, our responsibility.”
          </p>

          <NavLink
            to="/about"
            className="inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-green-700 text-white
                       hover:bg-green-800 px-7 py-3 rounded-lg
                       transition font-medium shadow-md"
          >
            Know More <span>→</span>
          </NavLink>
        </div>

        {/* Image Card - Mobile par Order 2 (Niche) aur Height Kam */}
        <div className="order-2 md:order-1 relative">
          <div className="absolute -inset-2 bg-green-200 rounded-3xl blur-lg opacity-30"></div>

          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[540px] overflow-hidden rounded-3xl shadow-lg">
            <img
              src={aboutImg}
              alt="Heal Axis Physiotherapy at Home"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;