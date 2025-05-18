import React from "react";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <div className="p-4">
        <NavBar />
      </div>
      <section id="hero" className="h-[95vh] ">
        <HeroSection />
      </section>
    </div>
  );
};

export default App;
