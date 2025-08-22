import downloadcv from "/cv.svg";
import cvpdf from "/cv.pdf";
import github from "/github.svg";
import linkedin from "/linkedin.svg";
import hero from "/hero.png";

function Hero() {
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto hero-content min-h-screen flex flex-col  md:flex-row items-center cursor-default">
        <div className="order-2 md:order-1 md:mt-10 flex flex-col hero-left p-4 justify-items-center">
          <h1 className="text-2xl md:text-5xl font-bold">
            Hi, I'm Dheeraj - SDE1
          </h1>
          <h3 className="text-sm md:text-2xl">
            <i>Aspiring SDE | MERN Stack Developer | AI/ML Enthusiast</i>
          </h3>

          <p className="mb-2 md:mt-4 text-sm md:text-xl  max-w-2xl">
            B.Tech CSE (AI/ML) student with hands-on experience in full-stack
            development, data analytics (SQL, Power BI), and machine learning.
            Strong in DSA (LeetCode max: 1425). Exploring GenAI, AWS, and
            open-source. Seeking full-time SDE roles.
          </p>

          <div className="flex flex-col md:flex-row md:space-x-10 md:mt-6 align-middle items-center justify-center">
            <div className="m-5">
              <a
                href="#projects"
                className="text-sm px-6 py-3 bg-gray-300 text-white rounded-lg hover:bg-blue-100 transition font-bold"
              >
                Explore My Work
              </a>
            </div>

            <div className="flex flex-row mt-5 mb-5 space-x-5 items-center justify-center">
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
        </div>
        <div className="order-1 mt-12 hero-right flex flex-col items-center justify-center">
          <img src={hero} className="h-80 w-50 md:h-100 md:w-100" />
        </div>
      </div>
    </>
  );
}

export default Hero;
