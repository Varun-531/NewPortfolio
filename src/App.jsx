import React from "react";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import ContactSection from "./components/ContactSection";
import Portfolio from "./components/Portfolio";
import { Pointer } from "@/components/magicui/pointer";
const App = () => {
  return (
    <div>
      <Pointer></Pointer>
      <div className="p-4">
        <NavBar />
      </div>
      <section id="hero" className="h-[95vh] ">
        <HeroSection />
      </section>
      <section id="portfolio" className="h-[95vh] ">
        <Portfolio />
      </section>
      <section
        id="contact"
        className="h-[100vh]  flex justify-center items-center"
      >
        <ContactSection />
      </section>
    </div>
  );
};

export default App;
