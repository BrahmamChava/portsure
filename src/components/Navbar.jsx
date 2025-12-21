/**
 * Top Navigation Bar
 * - Mobile responsive
 * - Hamburger menu for sidebar toggle
 * - Fintech professional styling
 */

export default function Navbar({ onMenuClick }) {
  return (
    <header className="bg-slate-900 text-white flex items-center justify-between px-4 md:px-6 py-3 shadow-sm">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={onMenuClick}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* App Title */}
        <h1 className="text-lg md:text-xl font-semibold tracking-wide">
          PortSure
          <span className="text-teal-400 ml-2 hidden sm:inline">
            Compliance Monitoring
          </span>
        </h1>
      </div>

      {/* Right Section */}
      <div className="hidden sm:flex items-center gap-4">
        <span className="text-sm text-slate-300">
          Compliance Officer
        </span>
        <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-sm font-bold">
          CO
        </div>
      </div>
    </header>
  );
}
