/**
 * HeroCTAGroup.tsx
 *
 * Renders CTA buttons dynamically.
 */

import React from "react";
import { Link } from "react-router-dom";
import type { HeroCTA } from "../hero.types";

interface HeroCTAGroupProps {
  ctas: HeroCTA[];
}

const HeroCTAGroup: React.FC<HeroCTAGroupProps> = ({ ctas }) => {
  return (
    <div className="flex justify-center gap-4 flex-wrap">
      {ctas.map((cta) => (
        <Link
          key={cta.label}
          to={cta.path}
          className={`
            px-7 py-3
            rounded-full
            text-sm font-medium
            transition-all duration-300
            ${
              cta.variant === "primary"
                ? "bg-black text-white hover:opacity-80"
                : "border border-gray-300 text-black hover:bg-gray-100"
            }
          `}
        >
          {cta.label}
        </Link>
      ))}
    </div>
  );
};

export default HeroCTAGroup;
