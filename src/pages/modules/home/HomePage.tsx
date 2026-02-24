/**
 * HomePage.tsx
 *
 * Main Home page layout.
 * Responsible only for composing sections.
 */

import React from "react";
import HeroSection from "./sections/hero/HeroSection";

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      {/* Future sections go here */}
    </>
  );
};

export default HomePage;
