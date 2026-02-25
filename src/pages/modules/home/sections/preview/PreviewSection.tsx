/**
 * PreviewSection.tsx
 *
 * Homepage Product Preview Section.
 *
 * Structure:
 * - GlassTitleBar (section heading)
 * - AppShowcase (glass container with GIF + hook line)
 *
 * Purpose:
 * - Visually demonstrate the product UI
 * - Provide proof after Hero + Highlights
 * - Keep consistent premium glass-morphism design
 */

import React from "react";
import GlassTitleBar from "../../../../../ui/glass/GlassTitleBar";
import AppShowcase from "./components/AppShowcase";
import demoVideo from "../../../../../assets/DemoVideo.mp4";

const PreviewSection: React.FC = () => {
  return (
    <section className="relative z-10 py-32 bg-white/5">
      {/* ===== Section Title ===== */}
      <GlassTitleBar title="See StudyFlow In Action" maxWidth="max-w-6xl" />

      {/* ===== App Showcase Container ===== */}
      <div className="mt-14 flex justify-center px-6">
        <AppShowcase
          videoSrc={demoVideo}
          hookText="Study smarter. Not longer."
        />
      </div>
    </section>
  );
};

export default PreviewSection;
