import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <div className="w-screen h-screen justify-items-center font-extrabold">
        <h1 className="text-3xl ">Projects</h1>
        <div className="w-full flex flex-row mt-10 space-x-10 justify-center">
          <ProjectCard />
        </div>
      </div>
    </>
  );
};

export default Projects;
