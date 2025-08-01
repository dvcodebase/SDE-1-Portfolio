import bookflare from "/bookflare.jpg"
import mic from "/mic.jpg"
const ProjectCard = () => {
  return (
    <>
      <div className=" flex flex-col space-y-2 ">
        <div className="border-2  w-auto flex space-x-4">
          <div className="flex ">
            <a href="https://bookflare.netlify.app/" className=" hover:shadow">
              <img src={bookflare} className="w-md h-60"></img>
            </a> </div><div>
            <p className="w-fit">
              <b>BookFlare – MERN Stack Authentication Web App</b>
              <a href="https://github.com/dvcodebase/BookFlare">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            
              • A secure full-stack book review
              platform enabling user authentication, posting, and reviews for
              50+ books with bcrypt-based password hashing. <br />• Engineered
              RESTful APIs using Express.js and MongoDB for efficient CRUD
              operations, supporting 100 concurrent user sessions in test
              environments without performance degradation. <br />• Optimized
              React front-end for responsive rendering and seamless state
              management with React Hooks, improving load time by 30% compared
              to baseline implementation. <br />• Deployed the app on Netlify
              for front-end and Render for backend with GitHub integration for
              CI/CD.
            </p>
          </div>
        </div>
        <div className="flex border-2 align-middle justify-items-center space-x-4">
          <div className="flex  w-96">
            <a
              href="https://matrixinversecalculator.netlify.app/"
              className="hover:shadow"
            >
              <img src={mic} className="w-md h-60"></img>
            </a></div>  <div>
            <p className="w-fit">
              <b>Matrix Inverse Calculator</b>
              <a href="https://github.com/dvcodebase/matrixInverseCalculator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              
              Programmed a responsive Matrix Inverse Calculator utilizing
              React.js, achieving seamless performance across devices;<br />
              streamlined functionality reduced processing delays during data
              input by up to 5 seconds per operation.
              <br /> It showcases proficiency in React and state management.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
