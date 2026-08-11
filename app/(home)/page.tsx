;
import Education from "./component/education";
import Footer from "./component/footer";
import HeroSection from "./component/hero-section";
import Navbar from "./component/navbar";
import ProjectsSection from "./component/projects-section";
import ProfessionalSkills from "./component/skills-section";

const page = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative">
        <div className="max-w-6xl mx-auto p-5 ">
          <Navbar className=" lg:hidden" />
          <HeroSection />
        </div>
        <div className=" h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
      </div>
      <div className=" max-w-6xl mx-auto p-5 mt-20">
        <ProfessionalSkills />
        <ProjectsSection />
        <Education />
        <Footer />
      </div>
    </div>
  );
};

export default page;
