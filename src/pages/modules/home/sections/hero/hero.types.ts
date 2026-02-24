/**
 * hero.types.ts
 *
 * Type definitions for the Home Hero section.
 * Keeps UI strictly typed and scalable.
 */

export interface HeroCTA {
  label: string;
  path: string;
  variant: "primary" | "secondary";
}

export interface HeroContent {
  headline: string;
  subtext: string;
  ctas: HeroCTA[];
}
