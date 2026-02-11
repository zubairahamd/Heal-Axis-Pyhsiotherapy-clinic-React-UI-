import therapistTeam from "../../../assets/img/therapistteam.png";

const AboutWhoWeAre = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* Image Section */}
        <div className="relative order-2 lg:order-1">
          {/* glow */}
          <div className="absolute -inset-6 bg-green-300 rounded-[2.5rem] blur-3xl opacity-30"></div>

          {/* image wrapper */}
          <div className="relative group w-full h-[300px] sm:h-[360px] lg:h-[440px]
                          overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src={therapistTeam}
              alt="Heal Axis physiotherapy team"
              className="w-full h-full object-cover object-center 
                         transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="order-1 lg:order-2">
          <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 
                           text-sm font-semibold tracking-wide
                           bg-green-100 text-green-800 rounded-full">
            Who We Are
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem]
                         font-bold text-gray-900 leading-tight mb-6">
            Dedicated to Your Recovery <br />
            <span className="text-green-700">
              With Care, Skill & Ethics
            </span>
          </h2>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5">
            Heal Axis is a trusted physiotherapy brand delivering professional,
            medically approved care directly at your home. We believe recovery
            works best when treatment is provided in a safe, familiar, and
            stress-free environment.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
            Our physiotherapists are certified, experienced, and patient-focused.
            Every therapy plan is personalized to ensure long-term recovery,
            improved mobility, and better quality of life.
          </p>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              "Certified & experienced physiotherapists",
              "Ethical, medically approved practices",
              "Personalized recovery-focused treatment",
              "Comfortable & convenient home visits",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap- p-4 rounded-xl
                           bg-white shadow-sm hover:shadow-md
                           transition"
              >
                <span className="text-green-700 text-xl leading-none">✔</span>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutWhoWeAre;
