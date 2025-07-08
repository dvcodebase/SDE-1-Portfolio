import downloadcv from "/cv.svg";
import cvpdf from "/cv.pdf";
import github from "/github.svg";
import linkedin from "/linkedin.svg";
import hero from "/hero.png";

function Hero() {
  return (
    <>
      <div className="hero-content min-h-screen container mx-auto px-4 flex flex-col  md:flex-row items-center cursor-default">
        <div className="hero-left p-4 justify-items-center">
          <h1 className="text-2xl md:text-5xl font-bold">
            Hi, I'm Dheeraj - SDE1
          </h1>
          <h3 className="text-sm md:text-2xl">
            <i>Aspiring SDE | MERN Stack Developer | AI/ML Enthusiast</i>
          </h3>

          <p className="mt-4 text-sm md:text-xl  max-w-2xl">
            B.Tech CSE (AI/ML) student with hands-on experience in full-stack
            development, data analytics (SQL, Power BI), and machine learning.
            Strong in DSA (LeetCode max: 1425). Exploring GenAI, AWS, and
            open-source. Seeking full-time SDE roles.
          </p>

          <div className="flex flex-row space-x-10 mt-6 align-middle items-center max-w-2xl">
            <div className="px-24">
              {/* <a
            href="#projects" 
            className=" px-6 py-3 bg-gray-300 text-white rounded-lg hover:bg-blue-100 transition font-bold"
          >
            Explore My Work
          </a> */}
            </div>
            <a href={cvpdf} title="save icons" download>
              <img src={downloadcv} className="h-10 w-10" />
            </a>
            <a href="https://github.com/dvcodebase">
              <img src={github} className="w-10 h-10" />
            </a>
            <a href="https://www.linkedin.com/in/-dheeraj-verma/">
              <img src={linkedin} className="w-10 h-10" />
            </a>
          </div>
        </div>
        <div className="hero-right flex flex-col items-center justify-center p-4">
          <div>
            <img src={hero} className="h-100 w-100" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
