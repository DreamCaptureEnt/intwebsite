import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Services from "./sections/Services"
import TeamSection from "./sections/Teamsection";
import ReelSection from "./sections/reels";
import { ReactLenis } from "@studio-freight/react-lenis";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";
import transition from "./components/transition";


function App() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <ReactLenis root>
      {isLoading &&
        <Preloader />
      }
          <Header />
          <Hero />
          <ReelSection />
          {/* <About /> */}
          <Services/>
          <Portfolio />
          <TeamSection/>
          <Contact />
          {/* <Chatbot/> */}
    </ReactLenis>
  );
}

export default transition(App);


