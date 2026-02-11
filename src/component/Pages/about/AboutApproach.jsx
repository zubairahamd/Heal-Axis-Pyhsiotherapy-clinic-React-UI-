import { FaUserMd, FaClipboardList, FaHome, FaHeartbeat, FaChartLine } from "react-icons/fa";

const steps = [
  {
    icon: <FaUserMd />,
    title: "Initial Assessment",
    desc: "Detailed evaluation of pain, posture, mobility and medical history to understand patient condition.",
  },
  {
    icon: <FaClipboardList />,
    title: "Personalized Therapy Plan",
    desc: "Custom treatment plan based on patient condition including exercises, manual therapy and modalities.",
  },
  {
    icon: <FaHome />,
    title: "Physiotherapy at Home",
    desc: "Professional physiotherapist visits patient’s home with required equipment and guided therapy sessions.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Recovery & Rehabilitation",
    desc: "Focus on pain reduction, strength improvement, mobility enhancement and posture correction.",
  },
  {
    icon: <FaChartLine />,
    title: "Progress Tracking & Follow-up",
    desc: "Regular monitoring of recovery progress with plan adjustments and future care guidance.",
  },
];

const AboutApproach = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="bg-green-100 text-green-800 text-sm font-medium px-4 py-1 rounded-full">
            Our Approach
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
            A Structured Path To Recovery
          </h2>

          <p className="text-gray-600">
            Every treatment follows a systematic, ethical and patient-focused recovery process.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">

          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-green-200 -translate-x-1/2"></div>

          <div className="">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center md:items-start gap-6 
                ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                
                {/* Content */}
                <div className="w-full md:w-5/12 bg-green-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                  <div className="flex items-center gap-4 mb-3">
                    
                    {/* Icon */}
                    <div className="text-white bg-green-600 p-3 rounded-xl text-lg">
                      {step.icon}
                    </div>

                    {/* Step Number */}
                    <span className="text-sm font-semibold text-green-700">
                      Step {index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Dot */}
                <div className="hidden md:block w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow absolute left-1/2 -translate-x-1/2 mt-20"></div>

                {/* Spacer */}
                <div className="hidden md:block md:w-5/12"></div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutApproach;
