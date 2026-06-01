import cvpdf from "/cv.pdf";
import github from "/github.svg";
import linkedin from "/linkedin.svg";
import hero from "/hero.gif";

function Hero() {
  return (
    <section id="home" className="min-h-screen md:px-16 flex items-center pt-16">
      <div
        className="container mx-auto px-6 md:px-16 flex flex-col
                   md:flex-row items-center gap-12"
      >
        {/* LEFT */}
        <div className="flex-1 order-2 md:order-1">
          {/* Tag line */}
          <p
            className="text-xs font-mono uppercase tracking-widest
                       text-orange-600 mb-4 flex items-center gap-2"
          >
            <span className="inline-block w-6 h-px bg-orange-600"></span>
            Machine Learning Engineer
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-2">
            Hi👋🏻,
            <br /> I'm{" "}
            <em className="not-italic text-orange-600">Dheeraj verma</em>
          </h1>

          <p
            className="font-mono text-sm text-gray-400 border-l-2
                       border-orange-500 pl-3 mb-6"
          >
            AI/ML · MLOps · Generative AI · Problem Solver
          </p>

          <p
            className="text-gray-600 text-base md:text-lg leading-relaxed
                       max-w-xl mb-8"
          >
            Machine Learning Engineer focused on building scalable AI
            applications. Experienced in MLOps, NLP, Generative AI, and cloud
            deployment, with projects spanning sentiment analysis, image
            processing, and intelligent automation.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {/* PRIMARY BUTTON — was gray-300 (invisible white text) */}
            <a
              href="#projects"
              className="px-6 py-3 bg-gray-900 !text-white text-sm
                         font-semibold tracking-wide uppercase rounded-sm
                         hover:bg-orange-600 transition-colors"
            >
              EXPLORE PROJECTS
            </a>

            {/* GHOST BUTTON — new CV download with text */}
            <a
              href={cvpdf}
              download
              className="px-6 py-3 border border-gray-300 !text-gray-700
                         text-sm font-semibold tracking-wide uppercase rounded-sm
                         hover:border-gray-900 transition-colors flex items-center gap-2"
            >
              Download CV
            </a>

            {/* Social icons */}
            <div className="flex gap-3 ml-1">
              <a
                href="https://github.com/dvcodebase"
                className="w-10 h-10 border border-gray-200 rounded-sm
                           flex items-center justify-center
                           hover:border-gray-900 transition-colors"
              >
                <img src={github} className="w-5 h-5" alt="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/-dheeraj-verma/"
                className="w-10 h-10 border border-gray-200 rounded-sm
                           flex items-center justify-center
                           hover:border-gray-900 transition-colors"
              >
                <img src={linkedin} className="w-5 h-5" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT — hero image with subtle ring */}
        <div className="flex-1 order-1 md:order-2 flex justify-center">
          <div className="relative">
            <img
              src={hero}
              className="h-64 w-64 md:h-96 md:w-96 object-contain"
              alt="ML engineer terminal animation"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
