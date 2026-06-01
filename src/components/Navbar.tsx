// ✅ Fixed: visible desktop nav links added
// ✅ Fixed: removed "Portfolio" center text (redundant with logo)
// ✅ Fixed: dropdown links now point to correct sections
import logo from "/logo.svg";

function Navbar() {
  return (
    <div
      className="navbar fixed top-0 z-50 bg-white/90
             backdrop-blur border-b border-gray-100"
    >
      {/* Logo */}
      <div className="navbar-start ml-6 md:ml-16">
        <a href="/">
          <img src={logo} className="h-9 w-9" alt="logo" />
        </a>
      </div>

      {/* Desktop links — ADDED, were missing before */}
      <div className="navbar-center hidden md:flex gap-8">
        {["Skills", "Projects", "Experience", "DSA", "Contact"].map((s) => (
          <a
            key={s}
            href={`#${s.toLowerCase()}`}
            className="text-sm font-medium text-gray-500
                       hover:text-gray-900 uppercase tracking-wider
                       transition-colors"
          >
            {s}
          </a>
        ))}
      </div>

      {/* Mobile hamburger — unchanged but links fixed */}
      <div className="navbar-end mr-6 md:mr-16 md:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            {/* same SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <ul
            className="menu menu-sm dropdown-content bg-base-100
                        rounded-box z-50 w-40 p-2 shadow"
          >
            {["Skills", "Projects", "Experience", "DSA", "Contact"].map((s) => (
              <li key={s}>
                <a href={`#${s.toLowerCase()}`}>{s}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
