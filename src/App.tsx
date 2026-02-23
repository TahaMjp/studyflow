/**
 * App.jsx
 *
 * Main layout wrapper for StudyFlow.
 * Responsibilities:
 * 1. Define application routes
 * 2. Wrap pages with global layout components (Navbar, Footer)
 * 3. Maintain consistent structure across all pages
 */

import React from "react";
import { Routes, Route } from "react-router-dom";

// ===== Page Imports =====
// Each route renders one of these components
import HomePage from "./pages/HomePage";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";
import NotFoundPage from "./pages/NotFoundPage";

// ===== Layout Components =====
// These components appear on every page
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";

function App() {
  return (
    /**
     * Root layout container:
     * - flex + flex-col ensures vertical layout
     * - min-h-screen ensures full viewport height
     */
    <div className="flex flex-col min-h-screen">
      {/* ================= GLOBAL NAVBAR ================= */}
      {/* Appears at the top on every route */}
      <Navbar />

      {/* ================= MAIN CONTENT ================= */}
      {/* flex-1 ensures content expands and pushes footer down */}
      <main className="flex-1">
        {/*
          Routes component handles client-side routing.
          Each Route maps a URL path to a React component.
        */}
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={<HomePage />} />

          {/* Features Page Route */}
          <Route path="/features" element={<FeaturesPage />} />

          {/* Pricing Page Route */}
          <Route path="/pricing" element={<PricingPage />} />

          {/* Catch-all Route (404) */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* ================= GLOBAL FOOTER ================= */}
      {/* Appears at the bottom on every route */}
      <Footer />
    </div>
  );
}

export default App;
