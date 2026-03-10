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
    <section className="w-full py-5 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
          <span className="bg-green-100 text-green-800 text-xs sm:text-sm font-medium px-4 py-1 rounded-full uppercase tracking-wider">
            Our Approach
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4 leading-tight">
            A Structured Path To Recovery
          </h2>

          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            Every treatment follows a systematic, ethical and patient-focused recovery process.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">

          {/* Center Line - Hidden on Mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-green-100 -translate-x-1/2"></div>

          {/* Steps List - space-y-8 maintains vertical gap on mobile */}
          <div className="flex flex-col space-y-8 md:space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center justify-between w-full
                ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                
                {/* Content Card */}
                <div className="w-full md:w-[45%] z-10">
                  <div className="bg-green-50/50 p-6 sm:p-8 rounded-3xl border border-green-100 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      
                      {/* Icon */}
                      <div className="text-white bg-green-600 p-3 rounded-2xl text-xl shadow-lg shadow-green-200">
                        {step.icon}
                      </div>

                      {/* Step Number */}
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-bold text-green-600 tracking-widest">
                          Process
                        </span>
                        <span className="text-sm font-bold text-gray-400">
                          Step 0{index + 1}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify md:text-left">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Center Dot - Hidden on Mobile */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-10 h-10 z-20">
                  <div className="w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-md"></div>
                </div>

                {/* Empty Spacer for Desktop Layout */}
                <div className="hidden md:block md:w-[45%]"></div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutApproach;