/**
 * HeroSection.tsx
 *
 * Composes Hero components.
 * Fully modular and scalable.
 */

import React from "react";
import { heroContent } from "./hero.config";
import HeroHeadline from "./components/HeroHeadline";
import HeroSubtext from "./components/HeroSubtext";
import HeroCTAGroup from "./components/HeroCTAGroup";

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <HeroHeadline text={heroContent.headline} />
        <HeroSubtext text={heroContent.subtext} />
        <HeroCTAGroup ctas={heroContent.ctas} />
      </div>
    </section>
  );
};

export default HeroSection;
