import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <div className="h-screen p-10">
        <div className="w-full h-auto justify-items-center font-extrabold">
        <h1 className="text-3xl ">Projects</h1>
      </div>

      <div className="w-full flex flex-row mt-10 space-x-10 justify-center">
        <ProjectCard />
      </div>
      </div>
    </>
  );
};

export default Projects;
