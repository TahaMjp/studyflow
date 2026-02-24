/**
 * HighlightCard.tsx
 *
 * Reusable card for Quick Highlights / Mini Benefits
 * Features:
 * - Glass morph panel
 * - Hover: background contrast + text invert
 * - Slot for icon + headline + subtext
 */

import React from "react";
import GlassContainer from "../../../../../../ui/glass/GlassContainer";

interface HighlightCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <GlassContainer
      padding="px-12 py-12"
      className="group hover:bg-gray-800 cursor-pointer"
    >
      <div className="flex flex-col items-center text-center space-y-4 text-gray-900 group-hover:text-white">
        {/* Icon slot */}
        <div className="text-5xl">{icon}</div>

        {/* Headline */}
        <h3 className="text-xl font-bold tracking-wide">{title}</h3>

        {/* Description */}
        <p className="font-semibold text-gray-700 group-hover:text-white">
          {description}
        </p>
      </div>
    </GlassContainer>
  );
};

export default HighlightCard;
