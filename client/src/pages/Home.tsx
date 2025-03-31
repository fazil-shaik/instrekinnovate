import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollspy } from "@/hooks/use-scrollspy";

const Home = () => {
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const technologiesRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const activeSection = useScrollspy([
    { id: "home", ref: homeRef },
    { id: "about", ref: aboutRef },
    { id: "services", ref: servicesRef },
    { id: "technologies", ref: technologiesRef },
    { id: "contact", ref: contactRef },
  ]);

  return (
    <div className="font-roboto bg-light text-dark-light">
      <Navbar activeSection={activeSection} />
      <Hero ref={homeRef} />
      <About ref={aboutRef} />
      <Technologies ref={technologiesRef} />
      <Services ref={servicesRef} />
      <CaseStudies />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
};

export default Home;
