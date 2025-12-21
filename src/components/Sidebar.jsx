import { NavLink } from "react-router-dom";

/**
 * Sidebar Navigation
 * - Collapsible on mobile
 * - Fixed on desktop
 * - Active route highlighting
 */

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static z-30
          top-0 left-0 h-full w-64
          bg-slate-800 text-white
          sidebar-transition
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Sidebar Header */}
        <div className="px-5 py-4 border-b border-slate-700">
          <h2 className="text-lg font-semibold tracking-wide">
            Compliance Menu
          </h2>
        </div>

        {/* Navigation Links */}
        <nav className="p-4 space-y-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md text-sm font-medium
               ${isActive ? "bg-teal-600" : "hover:bg-slate-700"}`
            }
            onClick={onClose}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/logs"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md text-sm font-medium
               ${isActive ? "bg-teal-600" : "hover:bg-slate-700"}`
            }
            onClick={onClose}
          >
            Compliance Logs
          </NavLink>

          <NavLink
            to="/reports"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md text-sm font-medium
               ${isActive ? "bg-teal-600" : "hover:bg-slate-700"}`
            }
            onClick={onClose}
          >
            Reports
          </NavLink>
        </nav>
      </aside>
    </>
  );
}
