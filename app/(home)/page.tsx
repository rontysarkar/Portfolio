import React from "react";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import Projects from "./component/Projects";
import Footer from "./component/Footer";
import Education from "./component/Education";
import ProfessionalSkills from "./component/Skills";

const page = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative">
        <div className="max-w-7xl mx-auto p-5 ">
          <Navbar className=" lg:hidden"/>
          <HeroSection />
        </div>
        <div className=" h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
      </div>
      <div className=" max-w-7xl mx-auto p-5 mt-20">
        <ProfessionalSkills />  
        <Projects />
        <Education />
        <Footer />
      </div>
    </div>
  );
};

export default page;
