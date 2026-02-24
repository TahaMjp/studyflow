/**
 * HomePage.tsx
 *
 * Main Home page layout.
 * Responsible only for composing sections.
 */

import React from "react";
import HeroSection from "./sections/hero/HeroSection";
import HighlightsSection from "./sections/highlights/HighlightsSection";

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
    </>
  );
};

export default HomePage;
