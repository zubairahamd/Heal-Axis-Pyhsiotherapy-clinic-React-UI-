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
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-4 py-1 rounded-full mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trusted Physiotherapy Care
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We combine technology, experience and personalized care.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="absolute left-1/2 top-0 h-full w-[6px] bg-green-200 -translate-x-1/2"></div>

          {/* Items */}
          <div className="flex flex-col space-y-1">
            {data.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start ${
                  item.side === "left" ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Card */}
                <div
                  className={`w-full md:w-5/12 bg-white rounded-2xl shadow-md transition-all
                  ${item.side === "left" ? "md:mr-auto mt-0" : "md:ml-auto mt-3"}`}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-36 object-cover rounded-t-2xl"
                  />

                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6">
                  <div className="w-3 h-3 bg-green-600 rounded-full border-2 border-white"></div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
