/**
 * Navbar.tsx
 *
 * Global navigation bar component.
 * Appears on all pages.
 * Uses react-router-dom for client-side navigation.
 */

import React from "react";
import { Link, NavLink } from "react-router-dom";

/**
 * Navbar Component
 *
 * - Displays logo
 * - Provides navigation links
 * - Highlights active route using NavLink
 */
const Navbar: React.FC = () => {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* ===== Logo / Brand ===== */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          StudyFlow
        </Link>

        {/* ===== Navigation Links ===== */}
        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-600 hover:text-blue-600 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/features"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-600 hover:text-blue-600 transition"
            }
          >
            Features
          </NavLink>

          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-600 hover:text-blue-600 transition"
            }
          >
            Pricing
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
