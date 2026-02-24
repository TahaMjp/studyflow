/**
 * HeroSubtext.tsx
 *
 * Supporting subtext.
 * Intentionally lower contrast and scale than headline.
 */

import React from "react";

interface HeroSubtextProps {
  text: string;
}

const HeroSubtext: React.FC<HeroSubtextProps> = ({ text }) => {
  return (
    <p
      className="
        text-base md:text-lg
        text-gray-500
        max-w-2xl
        mx-auto
        leading-relaxed
        font-semibold
      "
    >
      {text}
    </p>
  );
};

export default HeroSubtext;
