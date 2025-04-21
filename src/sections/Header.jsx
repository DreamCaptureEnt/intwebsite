import { useState } from "react";
import { Link } from "react-scroll";
import { Spiral as Hamburger } from "hamburger-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion, AnimatePresence } from "framer-motion";

import logoDark from "../assets/Profile/Logo/INT_Group.png";
import logoLight from "../assets/Profile/Logo/logo-light.png";

export default function Header() {
  const sectionTheme = {
    home: "light",
    services: "dark",
    portfolio: "dark",
    ourteam: "dark",
    contact: "dark",
  };

  const links = [
    { title: "Home", link: "home" },
    { title: "Portfolio", link: "reels" },
    { title: "Services", link: "services" },
    { title: "About", link: "ourteam" },
    { title: "Contact", link: "contact" },
  ];

  const [isOpen, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const theme = sectionTheme[activeSection] || "light";

  // Animate header on load
  useGSAP(() => {
    gsap.from(".header", {
      y: -60,
      opacity: 0,
      ease: "power3.inOut",
      delay: 0.5,
      duration: 1.2,
    });
  });

  return (
    <motion.header className="header fixed top-0 left-0 w-full z-[100] flex items-center justify-between bg-transparent px-4 sm:px-6 md:px-8 h-20">
      {/* Logo */}
      <Link
        to="home"
        onClick={() => setActiveSection("home")}
        className="cursor-pointer z-[110]"
      >
        <img
          src={theme === "light" ? logoDark : logoLight}
          alt="INT Group logo"
          className="w-36 sm:w-44 md:w-48 lg:w-56 object-contain"
        />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 items-center">
        {links.map(({ title, link }) => (
          <div key={link} className="flex flex-col items-center">
            <Link
              to={link}
              spy
              smooth
              duration={500}
              onSetActive={() => setActiveSection(link)}
              onClick={() => setActiveSection(link)}
              className={`text-md font-medium cursor-pointer transition-colors
                ${activeSection === link
                  ? "text-blue-500"
                  : theme === "light"
                  ? "text-black hover:text-blue-500"
                  : "text-white hover:text-blue-300"
                }`}
            >
              {title}
            </Link>
            {activeSection === link && (
              <motion.div
                layoutId="underline"
                className="w-1/2 h-[2px] bg-blue-500 rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </div>
        ))}
      </nav>

      {/* Hamburger Icon (Mobile) */}
      <div className="md:hidden z-[110]">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={24}
          color={isOpen || theme === "dark" ? "white" : "black"}
          rounded
        />
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            style={{ transformOrigin: "top" }}
            className="fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col justify-center items-center space-y-10 z-[105]"
          >
            {links.map(({ title, link }) => (
              <Link
                key={link}
                to={link}
                smooth
                duration={500}
                onClick={() => {
                  setActiveSection(link);
                  setOpen(false);
                }}
                className={`text-3xl sm:text-4xl font-semibold cursor-pointer transition-all
                  ${activeSection === link
                    ? "text-blue-500"
                    : "hover:text-blue-300"
                  }`}
              >
                {title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
