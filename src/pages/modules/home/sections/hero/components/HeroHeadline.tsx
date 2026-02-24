/**
 * HeroHeadline.tsx
 *
 * Large animated matte-gray headline.
 * Subtle left-to-right shine effect.
 */

import React from "react";

interface HeroHeadlineProps {
  text: string;
}

const HeroHeadline: React.FC<HeroHeadlineProps> = ({ text }) => {
  return (
    <h1
      className="
        text-5xl md:text-7xl
        font-extrabold
        tracking-wide
        text-transparent
        bg-clip-text
        bg-linear-to-r
        from-gray-700 via-gray-400 to-gray-700
        animate-shine
      "
    >
      {text}
    </h1>
  );
};

export default HeroHeadline;
