import React, { useEffect } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";

// Sare images import jo aapne Grid mein use kiye hain
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

const TherapyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Centralized Data Object - Sabhi therapies ki details yahan hain
  const therapyData = {
    "functional-manual-therapy": {
      title: "Functional Manual Therapy (FMT)",
      fullDesc: "Functional Manual Therapy is a comprehensive approach to physical therapy that goes beyond treating symptoms. It focuses on the mechanical, neuromuscular, and motor control components of movement to restore your body to its peak efficiency.",
      benefits: ["Total Body Mobility", "Efficient Movement Patterns", "Neuromuscular Facilitation", "Postural Optimization"],
      image: fmt,
    },
    "pain-management-therapy": {
      title: "Pain Management Therapy",
      fullDesc: "Our pain management strategy focuses on identifying the root cause of chronic and acute pain. Whether it's back, neck, or shoulder pain, we use evidence-based techniques to provide lasting relief without over-reliance on medication.",
      benefits: ["Chronic Pain Relief", "Reduced Inflammation", "Enhanced Muscle Function", "Trigger Point Release"],
      image: pain,
    },
    "sports-injury-rehabilitation": {
      title: "Sports Injury Rehabilitation",
      fullDesc: "Designed for athletes and active individuals, this program focuses on rapid recovery from muscle strains, ligament tears (ACL/MCL), and joint injuries, ensuring you return to your sport stronger than before.",
      benefits: ["Fast Track Recovery", "Injury Prevention Training", "Sport-Specific Drills", "Strength Restoration"],
      image: sports,
    },
    "post-surgery-rehabilitation": {
      title: "Post-Surgery Rehabilitation",
      fullDesc: "Recovery after surgery is crucial. We provide structured physiotherapy to restore range of motion, build muscle strength, and ensure that the surgical outcome is maximized for your daily activities.",
      benefits: ["Safe Recovery Protocols", "Scar Tissue Management", "Muscle Re-education", "Mobility Restoration"],
      image: surgery,
    },
    "joint-spine-care": {
      title: "Joint & Spine Care",
      fullDesc: "Specialized care for the spine and major joints (Knee, Hip, Shoulder). We address degenerative issues, stiffness, and alignment problems through manual therapy and corrective exercises.",
      benefits: ["Spinal Alignment", "Joint Lubrication Exercises", "Reduced Stiffness", "Better Load Distribution"],
      image: joint,
    },
    "band-syndrome-therapy": {
      title: "Band Syndrome Therapy",
      fullDesc: "Specifically targeting Iliotibial (IT) Band Syndrome and similar overuse injuries. We focus on releasing muscular tension and correcting the biomechanical issues that lead to friction and pain.",
      benefits: ["Reduced Friction Pain", "Lateral Hip Stability", "Improved Running Mechanics", "Muscular Balance"],
      image: band,
    },
    "nerve-related-therapy": {
      title: "Nerve Related Therapy",
      fullDesc: "Nerve pain can be debilitating. We offer specialized care for nerve impingements, numbness, and tingling sensations by improving nerve gliding and reducing surrounding pressure.",
      benefits: ["Reduced Numbness", "Better Nerve Gliding", "Neural Tension Relief", "Sensory Improvement"],
      image: nerve,
    },
    "elderly-physiotherapy": {
      title: "Elderly Physiotherapy & Exercise Care",
      fullDesc: "A gentle yet effective program focused on maintaining independence in older age. We prioritize balance training to prevent falls and mobility exercises to keep joints active and pain-free.",
      benefits: ["Fall Prevention", "Improved Balance", "Bone Density Support", "Greater Independence"],
      image: elderly,
    },
    "corporate-wellness": {
      title: "Corporate Wellness & Posture Correction",
      fullDesc: "Addressing the 'Sitting Disease'. We help professionals correct rounded shoulders, tech-neck, and lower back strain caused by long hours at a desk, improving productivity and comfort.",
      benefits: ["Ergonomic Alignment", "Neck & Back Relief", "Postural Awareness", "Stress Reduction"],
      image: posture,
    },
    "sciatica-pain-relief": {
      title: "Long-Term Relief for Sciatica Pain",
      fullDesc: "Sciatica requires a precise diagnosis. We identify whether the compression is at the spine or muscular level and use targeted decompression techniques to eliminate radiating leg pain.",
      benefits: ["Radiating Pain Relief", "Nerve Decompression", "Spinal Flexibility", "Long-term Prevention"],
      image: sciatica,
    }
  };

  const therapy = therapyData[id];

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!therapy) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Details not found</h2>
        <NavLink to="/therapies" className="text-green-700 mt-4 underline">Go Back to Therapies</NavLink>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Navigation / Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-green-700 mb-10 transition-colors font-medium"
        >
          ← Back to All Therapies
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Image Container */}
          <div className="sticky top-28">
            <img 
              src={therapy.image} 
              alt={therapy.title} 
              className="w-full h-[450px] object-cover rounded-3xl shadow-xl"
            />
          </div>

          {/* Content Container */}
          <div>
            <span className="text-green-700 font-bold text-sm tracking-widest uppercase">Expert Care</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
              {therapy.title}
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              {therapy.fullDesc}
            </p>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Key Benefits:</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {therapy.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                    <span className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs font-bold">✓</span>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-gray-100 mb-10" />

            {/* Booking Card */}
            <div className="bg-green-700 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg shadow-green-100">
              <div>
                <h4 className="text-2xl font-bold">Start Your Recovery</h4>
                <p className="text-green-100 mt-1">Book your consultation with Zubair Ahmad.</p>
              </div>
              <NavLink 
                to="/book" 
                className="bg-white text-green-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-md"
              >
                Book Now
              </NavLink>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapyDetails;