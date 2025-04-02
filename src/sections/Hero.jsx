import mainImage from "../assets/Profile/Pic01.jpg"; 
import image1 from "../assets/Profile/logo01.jpg";   
import image2 from "../assets/Profile/logo02.jpg";  
import image3 from "../assets/Profile/logo03.png";  

function Hero() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden flex justify-center items-center">
     {/* Full-Screen Main Image with a Soft Grey Blur */}
     <div className="absolute w-full h-full">
        <img src={mainImage} alt="Background" className="w-full h-full object-cover blur-[2px] opacity-95" />
        <div className="absolute inset-0"></div>
      </div>


      {/* Clickable Reference Images Positioned to the Right */}
      <div className="absolute right-10 top-[10%] flex flex-col gap-4">
        {/* Image 1 (INT MEDIA) */}
        <img
          src={image1}
          alt="INT MEDIA"
          className="w-40 h-40 cursor-pointer rounded-lg shadow-lg transition-transform transform hover:scale-105"
          onClick={() => window.open("https://www.youtube.com/channel/UCCNFPBjkrrVqbhZXijKlPNQ", "_blank")}
        />

        {/* Image 2 (INT SYSTEMS) */}
        <img
          src={image2}
          alt="INT SYSTEMS"
          className="w-40 h-40 cursor-pointer rounded-lg shadow-lg transition-transform transform hover:scale-105"
          onClick={() => alert("Show Image Viewer")}
        />

        {/* Image 3 (INT ENTERTAINMENT) */}
        <img
          src={image3}
          alt="INT ENTERTAINMENT"
          className="w-40 h-40 cursor-pointer rounded-lg shadow-lg transition-transform transform hover:scale-105"
          onClick={() => alert("Show Slideshow")}
        />
      </div>
    </section>
  );
}

export default Hero;