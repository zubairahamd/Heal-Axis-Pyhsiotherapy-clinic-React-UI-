import drAli from "../../../assets/img/draliirani.png";
import drAnjana from "../../../assets/img/dranjanalaungani.png";
import drAsha from "../../../assets/img/drashamenon.png";
import drJaspal from "../../../assets/img/drjaspalsingh.png";
import drTanveer from "../../../assets/img/drtanveerahmad.png";

const doctors = [
  {
    name: "Dr. Ali Irani",
    role: "Senior Physiotherapist",
    about: "Specialist in pain management and functional rehabilitation with patient-first approach.",
    img: drAli,
  },
  {
    name: "Dr. Anjana Laungani",
    role: "Orthopedic Specialist",
    about: "Expert in joint care, posture correction and orthopedic rehabilitation programs.",
    img: drAnjana,
  },
  {
    name: "Dr. Asha Menon",
    role: "Neuro Physiotherapist",
    about: "Focused on neurological rehabilitation and mobility restoration therapies.",
    img: drAsha,
  },
  {
    name: "Dr. Jaspal Singh",
    role: "Sports Rehab Expert",
    about: "Experienced in sports injuries, muscle recovery and performance enhancement.",
    img: drJaspal,
  },
  {
    name: "Dr. Tanveer Ahmad",
    role: "Post Surgery Rehab",
    about: "Helps patients regain strength and confidence after major surgeries.",
    img: drTanveer,
  },
];

// repeat for infinite marquee
const marqueeData = [...doctors, ...doctors];

const OurExperts = () => {
  return (
    <section className="py-24 bg-[#eef6f4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-4 py-1 rounded-full mb-3">
            Our Experts
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Meet Our Specialists
          </h2>
        </div>

        {/* Marquee */}
        <div className="relative">
          <div className="flex gap-10 animate-marquee">

            {marqueeData.map((doc, index) => (
              <div
                key={index}
                className={`relative group min-w-[240px]
                  ${index % 2 === 0 ? "mt-0" : "mt-14"}
                `}
              >
                {/* Card */}
                <div className="relative rounded-3xl overflow-hidden shadow-md bg-white">

                  {/* IMAGE FIXED */}
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="w-full h-64 object-cover object-top"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0
                                  group-hover:opacity-100 transition"></div>

                  {/* Hover Content */}
                  <div
                    className="absolute bottom-0 left-0 w-full
                               translate-y-full group-hover:translate-y-0
                               transition-all duration-500
                               bg-white px-4 py-4"
                  >
                    <h3 className="text-base font-semibold text-gray-800">
                      {doc.name}
                    </h3>

                    <p className="text-sm text-green-700 font-medium">
                      {doc.role}
                    </p>

                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      {doc.about}
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* marquee animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 28s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default OurExperts;
