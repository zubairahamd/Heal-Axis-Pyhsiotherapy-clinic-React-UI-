import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import slide1 from "../../../assets/img/slide1.png";
import slide2 from "../../../assets/img/slide2.png";
import slide3 from "../../../assets/img/slide3.png";

const slides = [
  {
    image: slide1,
    title: "Pain Relief Physiotherapy",
    desc: "Evidence-based physiotherapy to reduce pain, restore movement, and improve quality of life.",
    style: { objectPosition: "center 20%" }
  },
  {
    image: slide2,
    title: "Sports Injury Rehabilitation",
    desc: "Targeted treatment programs designed for faster and safer recovery from sports injuries.",
  },
  {
    image: slide3,
    title: "Post Surgery Rehabilitation",
    desc: "Structured rehabilitation plans to help you recover confidently after surgery.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[60vh] sm:h-[65vh] md:h-[80vh] overflow-hidden">
      
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          alt={slide.title}
          style={slide.style}
          className={`absolute inset-0 w-full h-full 
          object-cover object-center md:object-top
          transition-all duration-1000 ease-in-out ${
            index === current
              ? "opacity-100 scale-100 z-10"
              : "opacity-0 scale-105 z-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-20"></div>

      {/* Content */}
      <div className="relative z-30 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-5 w-full">
          
          <div className="max-w-2xl text-white text-center md:text-left">

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              {slides[current].title}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6">
              {slides[current].desc}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">

              <NavLink
                to="/book"
                className="bg-green-600 hover:bg-green-700 text-white
                px-6 py-3 rounded-md font-semibold transition text-center"
              >
                Book Online
              </NavLink>

              <NavLink
                to="/therapies"
                className="border border-white/70 hover:bg-white hover:text-black
                px-6 py-3 rounded-md font-medium transition text-center"
              >
                View Therapies
              </NavLink>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;