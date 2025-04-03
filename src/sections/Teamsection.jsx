import React from "react";

// Import your team image (Replace with actual image)
import TeamImage from "../assets/Profile/team.jpg";

const TeamSection = () => {
  return (
    <section id="ourteam" className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${TeamImage})` }}></div>

      {/* Overlay for Better Readability */}
      <div className="absolute inset-0 bg-opacity-30"></div>

      {/* Content Box - Positioned at the Bottom */}
      <div className="absolute bottom-0 w-full  bg-opacity-50 text-white text-center p-6">
{/*         <h2 className="text-3xl md:text-5xl font-bold pb-8">Our Team</h2> */}
        <p className="text-lg md:text-xl mt-2">
          We have skilled professionals dedicated to innovation and excellence.<br />
          We foster a collaborative culture that encourages creativity and teamwork.
        </p>
      </div>
    </section>
  );
};

export default TeamSection;