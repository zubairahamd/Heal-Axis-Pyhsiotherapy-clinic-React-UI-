import machines from "../../../assets/img/machines.png";
import enviroment from "../../../assets/img/enviroment.png";
import releif from "../../../assets/img/releif.png";
import recovery from "../../../assets/img/recovry.png";

const data = [
  {
    title: "Advanced Technology",
    desc: "Modern physiotherapy machines like ultrasound, TENS and traction ensure faster and safer recovery.",
    img: machines,
    side: "left",
  },
  {
    title: "Professional Environment",
    desc: "Clean, calm and clinic-level environment at home to make patients feel comfortable and safe.",
    img: enviroment,
    side: "right",
  },
  {
    title: "Pain Relief Focused",
    desc: "We focus on root-cause pain relief, not temporary solutions, using ethical treatment methods.",
    img: releif,
    side: "left",
  },
  {
    title: "Recovery Oriented Care",
    desc: "Exercise-based rehabilitation focused on long-term mobility, strength and posture correction.",
    img: recovery,
    side: "right",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 md:py-5 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-green-100 text-green-800 text-xs sm:text-sm font-medium px-4 py-1 rounded-full mb-3">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Trusted Physiotherapy Care
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            We combine technology, experience and personalized care to ensure your well-being.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">

          {/* Center Line - Hidden on Mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-green-200 -translate-x-1/2"></div>

          {/* Items - space-y-8 for mobile gap */}
          <div className="flex flex-col space-y-8 md:space-y-0">
            {data.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center md:mb-12 ${
                  item.side === "left" ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-[45%]">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-40 sm:h-48 md:h-44 object-cover"
                    />

                    <div className="p-5 sm:p-6">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed text-justify sm:text-left">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dot - Hidden on Mobile */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 justify-center items-center w-8 h-8">
                  <div className="w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-sm z-10"></div>
                </div>

                {/* Empty Space for opposite side on Desktop */}
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;