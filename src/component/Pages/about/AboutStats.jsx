const stats = [
  {
    value: "5+",
    label: "Years of Clinical Experience",
  },
  {
    value: "3,000+",
    label: "Patients Successfully Treated",
  },
  {
    value: "25+",
    label: "Certified Physiotherapists",
  },
  {
    value: "98%",
    label: "Patient Satisfaction Rate",
  },
];

const AboutStats = () => {
  return (
    <section className="w-full bg-gray-50 py-5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section Heading */}
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-medium text-green-700 tracking-wide mb-2">
            OUR IMPACT
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Measurable Results That Reflect Our Commitment
          </h3>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="border-l-2 border-green-600 pl-4"
            >
              <p className="text-3xl md:text-4xl font-bold text-gray-900">
                {item.value}
              </p>
              <p className="mt-2 text-sm text-gray-600 leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutStats;
