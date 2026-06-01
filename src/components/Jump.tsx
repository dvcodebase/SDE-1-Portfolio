import Hero from "./Hero";
import Navbar from "./Navbar";
import Contact from "./Contact";
// Uncomment as you build each section:
import Skills from "./Skills";      // new
import Projects from "./Projects";
import Experience from "./Experience";  // build this next
import DSA from "./DSA"  // DSA Problem Solving

const Jump = () => {
     {/* ✅ Fixed: removed redundant container wrapper Navbar is fixed, each section gets its own id */}   
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <DSA/>
        <Contact />
      </main>
    </>
  );
};

export default Jump;