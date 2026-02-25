/**
 * AppShowcase.tsx
 *
 * Displays:
 * - Large app preview MP4 video
 * - Hook line text under the video
 *
 * Wrapped in a highly customizable GlassContainer.
 *
 * Responsibilities:
 * - Provide visual proof of product
 * - Maintain consistent premium design
 * - Be reusable across pages if needed
 *
 * Why MP4 instead of GIF?
 * - Smaller file size
 * - Better quality
 * - Smoother playback
 * - More performance-friendly
 */

import React from "react";
import GlassContainer from "../../../../../../ui/glass/GlassContainer";
import HookText from "./HookText";

interface AppShowcaseProps {
  videoSrc: string;
  hookText: string;
}

const AppShowcase: React.FC<AppShowcaseProps> = ({ videoSrc, hookText }) => {
  return (
    <GlassContainer
      padding="px-12 py-12"
      spacing="space-y-10"
      maxWidth="max-w-6xl"
      floating={true}
    >
      {/* ===== App Preview Video ===== */}
      <div className="w-full">
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="
            w-full
            rounded-2xl
            shadow-xl
            object-cover
          "
        />
      </div>

      {/* ===== Hook Line Text ===== */}
      <HookText text={hookText} />
    </GlassContainer>
  );
};

export default AppShowcase;
