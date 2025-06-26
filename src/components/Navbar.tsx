import logo from "/logo.png"
function Navbar() {
  return (
    <>
    <div>
      <div className="navbar px-10 py-4 bg-white fixed top-0 z-50 w-full shadow-sm flex ">
        <div className="navbar-start">
          <img src={logo} className="h-10 w-10" />
        </div>
        <div className="navbar-center">
          <h1 className="text-2xl">Portfolio</h1>
        </div>
        <div className="navbar-end ">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-18 p-1 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default Navbar;
