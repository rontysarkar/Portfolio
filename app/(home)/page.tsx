import React from "react";
import Navbar from "./componet/Navbar";
import HeroSection from "./componet/HeroSection";

const page = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto">
        <Navbar/>
        <HeroSection/>
      </div>
    </div>
  );
};

export default page;
