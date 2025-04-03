import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import images
import TeamImage from "../assets/Profile/team.jpg";
import banner from "../assets/Profile/Banner.jpg"; // New separate image

const TeamSection = () => {
  const [isFullView, setIsFullView] = useState(false);

  return (
    <>
      {/* Team Section */}
      <section id="ourteam" className="relative w-full h-screen flex flex-col items-center">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${TeamImage})` }}></div>

        {/* Overlay for Readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Content Box - Positioned at the Bottom */}
        <div className="absolute bottom-0 w-full text-white text-center p-6">
          <p className="text-lg md:text-xl mt-2">
            We have skilled professionals dedicated to innovation and excellence.<br />
            We foster a collaborative culture that encourages creativity and teamwork.
          </p>
        </div>
      </section>

      {/* Extra Image Section Below */}
      <div className="w-full flex justify-center mt-10 mb-10">
        <div className="relative">
          <motion.img
            src={banner}
            alt="Extra Team View"
            className="w-80 h-48 object-cover rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setIsFullView(true)}
          />
          <button
            onClick={() => setIsFullView(true)}
            className="absolute bottom-2 right-2 bg-white text-black px-3 py-1 text-sm font-semibold rounded-md shadow-md"
          >
            Enlarge
          </button>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {isFullView && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <motion.img
              src={banner}
              alt="Full Team View"
              className="w-auto h-[80vh] object-contain"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1, transition: { duration: 0.4 } }}
              exit={{ scale: 0.8, transition: { duration: 0.3 } }}
            />

            {/* Close Button */}
            <button
              className="absolute top-5 right-5 bg-white text-black px-3 py-2 text-sm font-semibold rounded-md shadow-md"
              onClick={() => setIsFullView(false)}
            >
              Close ✖
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TeamSection;