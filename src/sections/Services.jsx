import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPenNib, FaCubes, FaUsers, FaBoxOpen, FaPaintBrush, FaCube, FaTheaterMasks, FaLightbulb } from "react-icons/fa";
import banner from "../assets/Profile/Banner.jpg";

const services = [
  {
    icon: <FaPenNib size={50} className="text-blue-500" />,
    category: "Pre-Production Services",
    items: [
      { icon: <FaPaintBrush />, name: "Storyboard Design" },
      { icon: <FaTheaterMasks />, name: "Animatics Preview" },
      { icon: <FaLightbulb />, name: "Concept Art" },
      { icon: <FaCube />, name: "Character Design" },
      { icon: <FaPenNib />, name: "Technical Drawings" },
      { icon: <FaPaintBrush />, name: "Environment Art" },
      { icon: <FaCubes />, name: "3D Prototyping" }
    ]
  },
  {
    icon: <FaCubes size={50} className="text-blue-500" />,
    category: "3D Production & Animation",
    items: [
      { icon: <FaCube />, name: "3D Modeling" },
      { icon: <FaPaintBrush />, name: "High-Quality Textures" },
      { icon: <FaTheaterMasks />, name: "Facial Capture" },
      { icon: <FaCubes />, name: "Rigging Skinning" },
      { icon: <FaLightbulb />, name: "Cinematic Animation" },
      { icon: <FaPenNib />, name: "Lighting Optimization" },
      { icon: <FaCube />, name: "Final Rendering" }
    ]
  },
  {
    icon: <FaUsers size={50} className="text-blue-500" />,
    category: "Business & Client Solutions",
    items: [
      { icon: <FaUsers />, name: "Custom Content" },
      { icon: <FaCube />, name: "Workstation Rentals" },
      { icon: <FaLightbulb />, name: "Client Consultation" },
      { icon: <FaUsers />, name: "Project Management" },
      { icon: <FaCube />, name: "Industry Solutions" },
      { icon: <FaLightbulb />, name: "Content Optimization" },
      { icon: <FaBoxOpen />, name: "Business Strategy" } // New Item
    ]
  },
  {
    icon: <FaBoxOpen size={50} className="text-blue-500" />,
    category: "Premium Creative Services",
    items: [
      { icon: <FaPaintBrush />, name: "Branding Solutions" },
      { icon: <FaLightbulb />, name: "Marketing Materials" },
      { icon: <FaUsers />, name: "Creative Execution" },
      { icon: <FaBoxOpen />, name: "Interactive Media" },
      { icon: <FaPaintBrush />, name: "Product Design" },
      { icon: <FaLightbulb />, name: "AR Integration" },
      { icon: <FaCubes />, name: "Visual Storytelling" } // New Item
    ]
  }
];



const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleService = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id='services' className="relative w-full pt-24 overflow-hidden">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold pb-10 text-white relative inline-block">Our Services
           <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-[3px] bg-white mt-2 mx-auto"
            />
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-12 px-6 md:px-12 relative">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center relative">
             {/* Glowing Animation Wrapper */}
             <div className="glow-circle">
            <motion.div 
              className="flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
           
            >
              {service.icon}
            </motion.div>
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-2 text-white">{service.category}</h3>
            <AnimatePresence>
              {/* {activeIndex === index && ( */}
                <motion.div 
                  className="top-full left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg mt-4 w-60"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.items.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-gray-700 py-2 w-full">
                      <div className="w-6 flex-shrink-0">{item.icon}</div>
                      <div className="flex-grow text-left min-w-[120px] max-w-[200px]">{item.name}</div>
                    </div>                  
                  ))}
                </motion.div>
              {/* )} */}
            </AnimatePresence>
          </div>
        ))}
      </div>
    {/* Bottom Section with Heading & Image */}
    <div className="mt-12 flex flex-col items-center text-center">
      {/* Heading with Breathing Effect */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white mb-6"
        animate={{ opacity: [1, 0.7, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
{/*         Upcoming Works... */}
      </motion.h2>

      {/* Bottom Image */}
      <img
        src={banner} // Replace with your actual image variable
        alt="Showcase"
        className="w-full max-w-4xl h-auto rounded-lg shadow-lg px-10"
      />
    </div>

    </section>
  );
};

export default Services;
