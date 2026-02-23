/**
 * Navbar.tsx
 *
 * Minimal Apple-style floating navigation bar.
 * Now using gray textured glass morphism so it stands out on light backgrounds.
 *
 * Features:
 * - Data-driven via nav.config.ts
 * - Fully modular and reusable
 * - Floating centered with rounded corners
 * - Glass morphism effect with blur + subtle shadow
 * - Smooth hover underline animation handled in NavItem.tsx
 */

import React from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import { navItems } from "./nav.config";

const Navbar: React.FC = () => {
  return (
    // ===== Floating Container =====
    // Uses 'fixed' + top margin to float over the page
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      {/* ===== Navigation Bar ===== */}
      <nav
        className="
          w-[95%] max-w-6xl
          px-8 py-4
          flex items-center justify-between
          rounded-2xl
          
          /* Glass morphism styling */
          backdrop-blur-xl
        bg-gray-400/50        /* stronger gray + translucent */
          border border-gray-400/20
          shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          
          transition-all duration-300
        "
      >
        {/* ===== Brand / Logo ===== */}
        <Link
          to="/"
          className="
            text-lg font-semibold tracking-tight
            text-black
            transition-opacity duration-200
            hover:opacity-70
          "
        >
          StudyFlow
        </Link>

        {/* ===== Navigation Links ===== */}
        <div className="flex items-center gap-10">
          {navItems.map((item) => (
            <NavItem key={item.path} item={item} />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
