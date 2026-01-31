import aboutImg from "../../../assets/img/about.png";
import { NavLink } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="w-full py-24  from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Image Card */}
        <div className="relative">
          <div className="absolute -inset-3 bg-green-200 rounded-3xl blur-xl opacity-40"></div>
          <img
            src={aboutImg}
            alt="Heal Axis Physiotherapy at Home"
            className="relative w-full rounded-3xl shadow-xl object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-4 py-1 rounded-full mb-4">
            About Us
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-snug">
            Trusted Physiotherapy Care <br />
            <span className="text-green-700">At Your Home</span>
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Heal Axis provides professional <strong>physiotherapy at home</strong> and
            <strong> online consultations</strong>. With over
            <strong> 5+ years of clinical experience</strong>, we follow
            ethical and medically approved treatment practices.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Our expert physiotherapists treat pain, sports injuries,
            post-surgery recovery, and mobility issues using
            personalized therapy plans focused on long-term recovery.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-green-700">5+</h3>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-700">1000+</h3>
              <p className="text-sm text-gray-600">Happy Patients</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-700">Home</h3>
              <p className="text-sm text-gray-600">Physio Service</p>
            </div>
          </div>

          <p className="text-gray-800 font-medium mb-8 italic">
            “Your recovery, our responsibility.”
          </p>

          <NavLink
            to="/about"
            className="inline-flex items-center gap-2 bg-green-700 text-white
                       hover:bg-green-800 px-7 py-3 rounded-lg
                       transition font-medium shadow-md"
          >
            Know More
            <span>→</span>
          </NavLink>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
