/**
 * Footer.tsx
 *
 * Global footer component.
 * Appears on all pages.
 * Displays copyright and basic info.
 */

import React from "react";

/**
 * Footer Component
 */
const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t bg-gray-50 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-600">
        {/* Copyright Notice */}
        <p>© {new Date().getFullYear()} StudyFlow. All rights reserved.</p>

        {/* Small tagline */}
        <p className="mt-2">AI-powered study planning for smarter students.</p>
      </div>
    </footer>
  );
};

export default Footer;
