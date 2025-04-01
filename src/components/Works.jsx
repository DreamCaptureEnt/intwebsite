import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Img01 from "../assets/Profile/Anime/Img01.jpg";
import Img02 from "../assets/Profile/Anime/Img02.jpg";
import Img03 from "../assets/Profile/Anime/Img03.jpg";
import Img04 from "../assets/Profile/Anime/Img04.jpg";
import Img05 from "../assets/Profile/Anime/Img05.jpg";
import Prod01 from "../assets/Profile/Product/Prod01.jpg";
import Prod02 from "../assets/Profile/Product/Prod02.jpg";
import Prod03 from "../assets/Profile/Product/Prod03.jpg";

const works = [
  { image: Img01, description: "A beautifully crafted character animation showcasing fluid motion and dynamic expressions." },
  { image: Img02, description: "A uniquely designed 3D model, blending realism and creativity for a visually striking effect." },
  { image: Img03, description: "A highly detailed concept art, capturing intricate designs and immersive storytelling elements." },
  { image: Img04, description: "A sneak peek into the upcoming animated film 'Veggie Toons,' featuring lively characters and vibrant colors." },
  { image: Img05, description: "An advanced 3D animation visualization with stunning textures and lifelike render quality." },
  { image: Prod01, description: "A high-performance cordless power drill, engineered for durability and efficiency in professional and DIY applications." },
  { image: Prod02, description: "A powerful Bosch pressure washer designed for deep cleaning, featuring a robust motor and user-friendly controls." },
  { image: Prod03, description: "An advanced robotic lawn mower with smart automation, ensuring precision cutting with minimal human intervention." }
];

const WorksSection = () => {
  const [currentWork, setCurrentWork] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentWork((prev) => (prev === 0 ? works.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentWork((prev) => (prev + 1) % works.length);
  };

  return (
    <section className="relative w-fullflex flex-col items-center justify-center text-white text-center">
      <h2 className="text-4xl font-bold pb-8 relative inline-block">
        Our Works
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-[3px] bg-white mt-2 mx-auto"
        />
      </h2>

      <div className="max-w-6xl w-full mx-auto px-4">
        <div className="rounded-lg overflow-hidden shadow-2xl">
        <div className="flex flex-col md:flex-row h-[500px]">
  {/* Image Section */}
  <div className="relative w-full md:w-3/4 overflow-hidden h-full">
    <AnimatePresence custom={direction} mode="popLayout">
      <motion.img
        key={currentWork}
        src={works[currentWork].image}
        alt={`Work sample ${currentWork + 1}`}
        initial={{ x: direction > 0 ? "100%" : "-100%" }}
        animate={{ x: "0%" }}
        exit={{ x: direction > 0 ? "-100%" : "100%" }}
        transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
        className="w-full h-full object-cover"
      />
    </AnimatePresence>
            </div>

            {/* Description Section */}
            <div className="w-full md:w-1/4 p-8 flex flex-col justify-center">
              <motion.div
                key={`desc-${currentWork}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-center"
              >
                <p className="text-lg">{works[currentWork].description}</p>

                {/* Navigation Dots */}
                <div className="mt-8 flex justify-center space-x-2">
                  {works.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > currentWork ? 1 : -1);
                        setCurrentWork(index);
                      }}
                      className={`w-3 h-3 rounded-full ${
                        index === currentWork ? "bg-white" : "bg-gray-600"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Previous/Next Buttons */}
                <div className="mt-4 flex justify-center space-x-4">
                  <button onClick={handlePrevious} className="text-white hover:text-gray-300" aria-label="Previous work">
                    ←
                  </button>
                  <button onClick={handleNext} className="text-white hover:text-gray-300" aria-label="Next work">
                    →
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
