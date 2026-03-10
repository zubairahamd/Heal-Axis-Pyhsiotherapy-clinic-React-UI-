import therapistTeam from "../../../assets/img/therapistteam.png";

const AboutWhoWeAre = () => {
  return (
    <section className="w-full py-5 md:py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Content Section - Mobile par Order 1 (Upar) */}
        <div className="order-1 lg:order-2">
          <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 
                           text-xs sm:text-sm font-semibold tracking-wide
                           bg-green-100 text-green-800 rounded-full">
            Who We Are
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem]
                         font-bold text-gray-900 leading-tight mb-5">
            Dedicated to Your Recovery <br className="hidden sm:block" />
            <span className="text-green-700">
              With Care, Skill & Ethics
            </span>
          </h2>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 text-justify sm:text-left">
            Heal Axis is a trusted physiotherapy brand delivering professional,
            medically approved care directly at your home. We believe recovery
            works best when treatment is provided in a safe, familiar, and
            stress-free environment.
          </p>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-8 text-justify sm:text-left">
            Our physiotherapists are certified, experienced, and patient-focused.
            Every therapy plan is personalized to ensure long-term recovery,
            improved mobility, and better quality of life.
          </p>

          {/* Highlights - Mobile par 1 column, Tablet/Desktop par 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 mb-10 lg:mb-0">
            {[
              "Certified & experienced physiotherapists",
              "Ethical, medically approved practices",
              "Personalized recovery-focused treatment",
              "Comfortable & convenient home visits",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3.5 rounded-xl
                           bg-white shadow-sm border border-green-50 hover:shadow-md
                           transition"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-700 text-xs">✔</span>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section - Mobile par Order 2 (Niche) */}
        <div className="relative order-2 lg:order-1">
          {/* glow effect */}
          <div className="absolute -inset-4 bg-green-300 rounded-[2.5rem] blur-2xl opacity-20"></div>

          {/* image wrapper - Fixed height for mobile */}
          <div className="relative group w-full h-[240px] sm:h-[320px] md:h-[400px] lg:h-[480px]
                          overflow-hidden rounded-[2rem] shadow-xl border-4 border-white">
            <img
              src={therapistTeam}
              alt="Heal Axis physiotherapy team"
              className="w-full h-full object-cover object-center 
                         transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutWhoWeAre;