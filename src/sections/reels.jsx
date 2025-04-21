import { useEffect, useRef, useState } from "react";
import part1 from "../assets/video/part1.mp4";
import part2 from "../assets/video/part2.mp4";
import part3 from "../assets/video/part3.mp4";

function Reels() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const videoRefs = [useRef(null), useRef(null)];
  const videoSources = [part1, part2, part3];

  const currentRef = videoRefs[0];
  const nextRef = videoRefs[1];

  const handleVideoEnd = () => {
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videoSources.length);
      setIsTransitioning(false);
    }, 300); // Delay for transition
  };

  useEffect(() => {
    setIsTextVisible(false);
    const timeout = setTimeout(() => setIsTextVisible(true), 300);
    return () => clearTimeout(timeout);
  }, [currentVideoIndex]);

  const getNextIndex = () =>
    currentVideoIndex === videoSources.length - 1 ? 0 : currentVideoIndex + 1;

  return (
    <section id="reels" className="relative w-full h-screen overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-b from-[#01092d] via-gray-800 to-[#01092d] opacity-80"></div>
      </div>

      {/* Videos */}
      <div className="relative z-10 w-full h-full">
        {/* Current Video */}
        <video
          ref={currentRef}
          src={videoSources[currentVideoIndex]}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
          autoPlay
          muted
          onEnded={handleVideoEnd}
        />

        {/* Preloaded Next Video (hidden behind) */}
        <video
          ref={nextRef}
          src={videoSources[getNextIndex()]}
          className="absolute inset-0 w-full h-full object-cover opacity-0 pointer-events-none"
          muted
        />
      </div>
    </section>
  );
}

export default Reels;
