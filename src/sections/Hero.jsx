import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mainImage from "../assets/Profile/About.png";
import image1 from "../assets/Profile/Logo1.jpg";
import image2 from "../assets/Profile/Logo2.jpg";
import image3 from "../assets/Profile/Logo3.jpg";
import intsystem from "../assets/Profile/intsystem.jpg";
import slide1 from "../assets/Profile/Slide/sf01.jpg";
import slide2 from "../assets/Profile/Slide/sf02.jpg";
import slide3 from "../assets/Profile/Slide/sf03.jpg";

function Hero() {
  const [showPopup, setShowPopup] = useState(false);
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [slide1, slide2, slide3];

  useEffect(() => {
    const handleScroll = () => {
      setShowPopup(false);
      setShowSlideshow(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showSlideshow) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [showSlideshow]);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden flex justify-center items-center">
      {/* Background Image */}
      <div className="absolute w-full h-full">
        <img src={mainImage} alt="Background" className="w-full h-full object-cover" />
      </div>

      {/* Clickable Logos */}
      <div className="absolute right-4 sm:right-10 flex flex-col gap-4 z-10">
        {/* INT MEDIA */}
        <motion.img
          src={image1}
          alt="INT MEDIA"
          className="w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-52 xl:h-52 cursor-pointer rounded-lg shadow-md"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => window.open("https://www.youtube.com/channel/UCCNFPBjkrrVqbhZXijKlPNQ", "_blank")}
        />

        {/* INT SYSTEMS */}
        <motion.img
          src={image2}
          alt="INT SYSTEMS"
          className="w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-52 xl:h-52 cursor-pointer rounded-lg shadow-md"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => setShowPopup(true)}
        />

        {/* INT ENTERTAINMENT */}
        <motion.img
          src={image3}
          alt="INT ENTERTAINMENT"
          className="w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-52 xl:h-52 cursor-pointer rounded-lg shadow-md"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => setShowSlideshow(true)}
        />
      </div>

      {/* Popup Modal for INT SYSTEMS */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl w-xl sm:w-[30rem] md:w-[64rem] lg:w-[70rem] xl:w-[74rem] p-6 relative flex flex-col items-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } }}
              exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.3, ease: "easeIn" } }}
            >
              <button
                className="absolute top-4 right-4 bg-gray-900 text-white rounded-full p-2 text-xs"
                onClick={() => setShowPopup(false)}
              >
                ✖
              </button>

              <div className="flex flex-col md:flex-row gap-4 w-full">
                <motion.img
                  src={intsystem}
                  alt="INT Systems Info"
                  className="w-full md:w-1/2 h-auto rounded-lg object-contain"
                />

                <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left px-2">
                  <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">INT Systems</h2>
                  <p className="text-gray-700 text-sm md:text-base">
                    We specialize in high-performance workstations designed specifically for animation,
                    visual effects, and post-production Studios. With seamless collaboration across the
                    country, we sell cutting-edge systems to the most prominent companies, assisting them
                    in achieving industry-leading results through cutting-edge hardware and expert services.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slideshow Viewer for INT ENTERTAINMENT */}
      <AnimatePresence>
        {showSlideshow && (
          <motion.div
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl w-[50rem] p-4 relative flex flex-col items-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } }}
              exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.3, ease: "easeIn" } }}
            >
              <div className="relative w-full h-[18rem] sm:h-[22rem] md:h-[34rem] h-[18rem] sm:h-[22rem] md:h-[34rem] overflow-hidden flex justify-center items-center">
                <button
                  className="absolute top-2 right-2 bg-white text-black rounded-full p-1 text-sm shadow-md z-10"
                  onClick={() => setShowSlideshow(false)}
                >
                  ✖
                </button>
                <motion.div
                  className="flex w-full h-full"
                  initial={{ x: 0 }}
                  animate={{ x: `-${currentSlide * 100}%` }}
                  transition={{ type: "tween", duration: 0.6 }}
                >
                  {slides.map((slide, index) => (
                    <img
                      key={index}
                      src={slide}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Hero;
