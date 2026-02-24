/**
 * hero.config.ts
 *
 * Centralized Hero content configuration.
 * No hardcoded text inside UI components.
 */

import type { HeroContent } from "./hero.types";

export const heroContent: HeroContent = {
  headline: "Study smarter. Stress less.",
  subtext:
    "AI-powered planning that builds your perfect study schedule in seconds.",
  ctas: [
    {
      label: "Get Started Free",
      path: "/signup",
      variant: "primary",
    },
    {
      label: "See How It Works",
      path: "/features",
      variant: "secondary",
    },
  ],
};
