import Hero from "./Hero";
import Navbar from "./Navbar";
// import Projects from "./Projects";
import ProjectCard from "./ProjectCard";

import Contact from "./Contact";

const Jump = () => {
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto">
        <Navbar />
        <Hero />
        <ProjectCard /> 
        <Contact/>
      </div>
    </>
  );
};

export default Jump;
