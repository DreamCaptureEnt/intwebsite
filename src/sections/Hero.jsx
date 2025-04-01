import { useEffect, useState } from "react";
import image1 from "../assets/Profile/Pic01.jpg";
import image2 from "../assets/Profile/Pic04.jpg";
// import image3 from "../assets/Profile/Pic09.jpg";

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden flex justify-center items-center">
      {/* Image Slideshow with adjusted size */}
      <div className="relative w-full h-full flex justify-center items-center overflow-hidden rounded-lg shadow-lg opacity-80" > 
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Slideshow"
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
