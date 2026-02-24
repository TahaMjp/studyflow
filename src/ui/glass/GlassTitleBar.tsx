/**
 * GlassTitleBar.tsx
 *
 * Flexible reusable glass-morphism title bar for sections.
 * Now fully customizable via props:
 * - Padding, spacing, maxWidth
 * - Background color, border, shadow
 * - Floating animation toggle
 * - Extra classNames
 */

import React from "react";
import GlassContainer from "./GlassContainer";

interface GlassTitleBarProps {
  /** The text displayed in the title bar */
  title: string;

  /** Extra classes for fine-tuning */
  className?: string;

  /** Padding inside the container */
  padding?: string; // e.g., "px-8 py-6"

  /** Vertical spacing inside the container (usually 0 for title) */
  spacing?: string; // e.g., "space-y-0"

  /** Maximum width of the container */
  maxWidth?: string; // e.g., "max-w-5xl"

  /** Background color + opacity */
  bgColor?: string; // e.g., "bg-gray-400/50"

  /** Border classes */
  borderClass?: string; // e.g., "border border-gray-400/20"

  /** Shadow classes */
  shadowClass?: string; // e.g., "shadow-[0_20px_60px_rgba(0,0,0,0.08)]"

  /** Toggle floating animation */
  floating?: boolean;
}

const GlassTitleBar: React.FC<GlassTitleBarProps> = ({
  title,
  className = "",
  padding = "px-8 py-6",
  spacing = "space-y-0",
  maxWidth = "max-w-5xl",
  bgColor,
  borderClass,
  shadowClass,
  floating = true,
}) => {
  return (
    <div className="flex justify-center mb-12">
      <GlassContainer
        className={`flex justify-center items-center ${className}`}
        padding={padding}
        spacing={spacing}
        maxWidth={maxWidth}
        bgColor={bgColor}
        borderClass={borderClass}
        shadowClass={shadowClass}
        floating={floating}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
          {title}
        </h2>
      </GlassContainer>
    </div>
  );
};

export default GlassTitleBar;
