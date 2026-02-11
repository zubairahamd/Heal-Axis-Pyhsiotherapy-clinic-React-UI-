import { NavLink } from "react-router-dom";

import pain from "../../../assets/img/pain.png";
import sports from "../../../assets/img/sports.png";
import surgery from "../../../assets/img/surgery.png";
import joint from "../../../assets/img/joint.png";


const treatments = [
  {
    title: "FUNCTIONAL MANUAL THERAPY®",
    desc: "Functional Manual Therapy® (FMT™) is an integrated evaluation and treatment system that promotes optimum human performance by enhancing total body mobility and Core First® strategies.",
    img: pain,
  },
  {
    title: "PAIN MANAGEMENT",
    desc: "Pain is your brain’s response to perceived threat to the tissues of your body and can occur due to trauma or repetitive stress.",
    img: sports,
  },
  {
    title: "POST-OPERATIVE REHABILITATION",
    desc: "Post-surgical rehabilitation helps restore strength, mobility, and function affected during surgery.",
    img: surgery,
  },
  {
    title: "FMT SERVICES",
    desc: "One-on-one Functional Manual Therapy® sessions with certified therapists including joint and soft tissue mobilization.",
    img: joint,
  },
];

const OurTreatmentSection = () => {
  return (
    <section className="py-2 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-4 py-1 rounded-full mb-3">
            Our Treatment
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trusted Care for{" "}
            <span className="text-green-700">Better Recovery</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Evidence-based physiotherapy treatments focused on pain relief,
            recovery, and long-term wellness.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-12">
          {[0, 2].map((startIndex) => (
            <div
              key={startIndex}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-10"
            >
              {/* Subtle Vertical Line */}
              <span className="hidden md:block absolute left-1/2 top-0 h-full w-px
                                from-transparent via-green-600/40 to-transparent">
              </span>

              {treatments.slice(startIndex, startIndex + 2).map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 bg-white rounded-2xl p-6
                             shadow-sm hover:shadow-md
                             hover:-translate-y-1
                             transition-all duration-300"
                >
                  {/* Image */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-28 h-28 rounded-xl object-cover"
                  />

                  {/* Content */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <NavLink
                      to="/therapies"
                      className="mt-4 inline-flex items-center gap-2
                                 text-green-700 font-medium
                                 hover:text-green-800 transition"
                    >
                      See All Therapies <span>→</span>
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTreatmentSection;
