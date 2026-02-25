/**
 * HookText.tsx
 *
 * Displays a bold hook line under the app preview.
 *
 * Design Intent:
 * - Confident but not louder than section title
 * - Clean typography
 * - Slight tracking for premium feel
 * - Centered alignment
 *
 * Reusable in:
 * - CTA sections
 * - Hero variations
 * - Marketing banners
 */

import React from "react";

interface HookTextProps {
  text: string;
  className?: string;
}

const HookText: React.FC<HookTextProps> = ({ text, className = "" }) => {
  return (
    <p
      className={`
        text-center
        text-xl md:text-xl
        font-bold
        tracking-wide
        text-gray-900
        ${className}
      `}
    >
      {text}
    </p>
  );
};

export default HookText;
