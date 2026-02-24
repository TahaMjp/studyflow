/**
 * HighlightsSection.tsx
 *
 * Row of 4 mini benefit cards for homepage.
 */

import React from "react";
import HighlightCard from "./components/HighlightCard";
import { FaBolt, FaBrain, FaClock, FaCheckCircle } from "react-icons/fa";
import GlassTitleBar from "../../../../../ui/glass/GlassTitleBar";

const highlightsData = [
  {
    icon: <FaBolt />,
    title: "Boost Productivity",
    description: "Organize your tasks and study smarter, not harder.",
  },
  {
    icon: <FaBrain />,
    title: "AI-Powered Plans",
    description: "Get personalized study schedules tailored to you.",
  },
  {
    icon: <FaClock />,
    title: "Track Progress",
    description: "Visualize your improvements and stay motivated.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Achieve Goals",
    description: "Hit deadlines, crush exams, and feel accomplished.",
  },
];

const HighlightsSection: React.FC = () => {
  return (
    <section className=" bg-white/5 relative z-10">
      <GlassTitleBar
        title="Why StudyFlow Works"
        padding="px-10 py-4"
        maxWidth="max-w-6xl"
      />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {highlightsData.map((item, index) => (
          <HighlightCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;
