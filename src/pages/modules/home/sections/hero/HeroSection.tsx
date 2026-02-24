import React from "react";
import { heroContent } from "./hero.config";
import HeroHeadline from "./components/HeroHeadline";
import HeroSubtext from "./components/HeroSubtext";
import HeroCTAGroup from "./components/HeroCTAGroup";
import GlassContainer from "../../../../../ui/glass/GlassContainer";

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-10/12 w-full mx-auto text-center space-y-10">
        <GlassContainer>
          <HeroHeadline text={heroContent.headline} />
          <HeroSubtext text={heroContent.subtext} />
          <HeroCTAGroup ctas={heroContent.ctas} />
        </GlassContainer>
      </div>
    </section>
  );
};

export default HeroSection;
