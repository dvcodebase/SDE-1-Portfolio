import ProjectCard from "./ProjectCard";

const Projects = () => {
  {/* ✅ id="projects" enables anchor scroll from navbar ✅ removed w-screen h-screen — was clipping content */}
  return (
    
    <section id="projects" className="py-24 px-6 md:px-16 bg-white">

    <div className="max-w-5xl mx-auto">

        {/* Section heading — consistent with Skills/Contact style */}
        <p className="text-xs font-mono uppercase tracking-widest
                       text-orange-600 mb-3 flex items-center gap-2">
          <span className="inline-block w-6 h-px bg-orange-600"></span>
          Work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Selected Projects
        </h2>
      <ProjectCard />

      </div>
    </section>

    );
};

export default Projects;