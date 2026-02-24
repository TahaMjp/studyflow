/**
 * GlassContainer.tsx
 *
 * Highly customizable glass morph container for premium UI.
 * Props allow tweaking:
 * - Padding & spacing
 * - Max width
 * - Background color & opacity
 * - Border & shadow
 * - Floating animation
 * - Additional classNames
 */

import React from "react";

interface GlassContainerProps {
  children: React.ReactNode;
  className?: string;

  /** Padding inside the container (Tailwind) */
  padding?: string; // e.g., "px-10 py-32"

  /** Vertical spacing between children */
  spacing?: string; // e.g., "space-y-10"

  /** Max width of the container */
  maxWidth?: string; // e.g., "max-w-6xl"

  /** Background color with opacity */
  bgColor?: string; // e.g., "bg-gray-400/50"

  /** Border classes */
  borderClass?: string; // e.g., "border border-gray-400/20"

  /** Shadow classes */
  shadowClass?: string; // e.g., "shadow-[0_20px_60px_rgba(0,0,0,0.08)]"

  /** Toggle floating animation */
  floating?: boolean;
}

const GlassContainer: React.FC<GlassContainerProps> = ({
  children,
  className = "",
  padding = "px-10 py-32",
  spacing = "space-y-10",
  maxWidth = "max-w-6xl",
  bgColor = "bg-gray-400/50",
  borderClass = "border border-gray-400/20",
  shadowClass = "shadow-[0_20px_60px_rgba(0,0,0,0.08)]",
  floating = true,
}) => {
  return (
    <div className="relative w-full flex justify-center">
      {/* ===== Radial Glow Background ===== */}
      <div
        className="
          absolute
          -inset-10
          bg-[radial-gradient(circle_at_50%_30%,rgba(209,213,219,0.4),transparent)]
          blur-3xl
          opacity-70
          pointer-events-none
        "
      />

      {/* ===== Noise Overlay ===== */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          [background-image:radial-gradient(rgba(255,255,255,0.02) 1px,transparent 1px)]
          bg-size-[20px_20px]
          rounded-3xl
        "
      />

      {/* ===== Glass Panel ===== */}
      <div
        className={`
          relative
          rounded-3xl
          backdrop-blur-2xl
          ${bgColor}
          ${borderClass}
          ${shadowClass}
          w-full
          ${maxWidth}
          ${spacing}
          ${padding}
          ${floating ? "animate-float" : ""}
          transition-transform duration-500
          ${className}
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default GlassContainer;
