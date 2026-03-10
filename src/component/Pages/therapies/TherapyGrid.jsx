import React from "react";
import { NavLink } from "react-router-dom";

// Images imports (Aapke existing imports)
import pain from "../../../assets/img/pain.png";
import sports from "../../../assets/img/sports.png";
import surgery from "../../../assets/img/surgery.png";
import joint from "../../../assets/img/joint.png";
import band from "../../../assets/img/bandsyndrom.png";
import fmt from "../../../assets/img/fmtrecovery.png";
import nerve from "../../../assets/img/nearverelated.png";
import posture from "../../../assets/img/posture.png";
import sciatica from "../../../assets/img/sciatica.png";
import elderly from "../../../assets/img/elderlyexersize.png";

const therapies = [
  { id: "functional-manual-therapy", title: "Functional Manual Therapy", desc: "Advanced hands-on therapy to improve total body mobility and movement efficiency.", img: fmt },
  { id: "pain-management-therapy", title: "Pain Management Therapy", desc: "Root-cause based pain relief for back, neck, shoulder and chronic pain conditions.", img: pain },
  { id: "sports-injury-rehabilitation", title: "Sports Injury Rehabilitation", desc: "Specialized rehab programs for muscle strain, ligament injury and sports recovery.", img: sports },
  { id: "post-surgery-rehabilitation", title: "Post-Surgery Rehabilitation", desc: "Structured physiotherapy after surgery to restore strength and normal movement.", img: surgery },
  { id: "joint-spine-care", title: "Joint & Spine Care", desc: "Focused therapy for knee, shoulder, spine and posture-related problems.", img: joint },
  { id: "band-syndrome-therapy", title: "Band Syndrome Therapy", desc: "Targeted treatment for IT band syndrome and overuse-related muscular conditions.", img: band },
  { id: "nerve-related-therapy", title: "Nerve Related Therapy", desc: "Physiotherapy care for nerve pain, sciatica, numbness and neurological issues.", img: nerve },
  { id: "elderly-physiotherapy", title: "Elderly Physiotherapy & Exercise Care", desc: "Gentle, guided exercise programs designed to improve balance, strength, and independence.", img: elderly },
  { id: "corporate-wellness", title: "Corporate Wellness & Posture Correction", desc: "Workplace-focused physiotherapy programs that address posture-related pain and desk injuries.", img: posture },
  { id: "sciatica-pain-relief", title: "Long-Term Relief for Sciatica Pain", desc: "Targeted physiotherapy treatment to identify the root cause of sciatica and recurring nerve pain.", img: sciatica },
];

const TherapyGrid = () => {
  return (
    <section className="py-5 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        
        {/* Heading Section */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block bg-green-100 text-green-800 text-xs sm:text-sm font-semibold px-4 py-1 rounded-full mb-3 uppercase tracking-wider">
            Our Therapies
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Comprehensive Physiotherapy <span className="text-green-700">Treatments</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Personalized, evidence-based physiotherapy treatments designed to
            support recovery, mobility and long-term wellness.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {therapies.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100"
            >
              {/* Image with Link */}
              <NavLink to={`/therapies/${item.id}`} className="block overflow-hidden rounded-xl mb-4 sm:mb-5 aspect-video sm:aspect-auto">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </NavLink>

              {/* Title with Link */}
              <NavLink to={`/therapies/${item.id}`}>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                  {item.title}
                </h3>
              </NavLink>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 flex-grow text-justify sm:text-left">
                {item.desc}
              </p>

              {/* Action Buttons */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                <NavLink
                  to={`/therapies/${item.id}`}
                  className="text-green-700 font-bold text-xs sm:text-sm hover:underline tracking-tight"
                >
                  View Details
                </NavLink>
                
                <NavLink
                  to="/book"
                  className="inline-flex items-center gap-2 text-white bg-green-700 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-green-800 transition shadow-md shadow-green-100"
                >
                  Book <span>→</span>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapyGrid;