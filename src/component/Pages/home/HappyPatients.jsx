import mamta from "../../../assets/img/mamta.png";
import sanket from "../../../assets/img/sanket.png";
import jyoti from "../../../assets/img/jyoti.png";
import monika from "../../../assets/img/monika.png";

const reviews = [
  {
    name: "Mamta",
    issue: "Knee Pain",
    text: "Physiotherapy sessions really helped me reduce pain and walk comfortably again.",
    img: mamta,
  },
  {
    name: "Sanket",
    issue: "Stroke Rehab",
    text: "My father showed visible improvement in movement after regular therapy sessions.",
    img: sanket,
  },
  {
    name: "Jyoti",
    issue: "Lower Back Pain",
    text: "Exercise and machine therapy helped me return to daily work without discomfort.",
    img: jyoti,
  },
  {
    name: "Monika",
    issue: "Shoulder Pain",
    text: "Professional care with noticeable improvement in strength and pain relief.",
    img: monika,
  },
];

const HappyPatients = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-4 py-1 rounded-full mb-3">
            Happy Patients
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Patients Say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl border border-green-200
                         px-6 pt-12 pb-8 shadow-sm hover:shadow-md transition"
            >
              {/* Avatar */}
              <img
                src={item.img}
                alt={item.name}
                className="absolute -top-7 left-1/2 -translate-x-1/2
                           w-14 h-14 rounded-full object-contain
                           bg-white border-4 border-white"
              />

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5 text-center">
                “{item.text}”
              </p>

              {/* Name */}
              <p className="text-green-700 font-medium text-sm text-center">
                — {item.name}
              </p>
              <p className="text-gray-400 text-xs text-center mt-1">
                {item.issue}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HappyPatients;
