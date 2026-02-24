import React from "react";

interface GlassContainerProps {
  children: React.ReactNode;
  className?: string;
}

const GlassContainer: React.FC<GlassContainerProps> = ({
  children,
  className = "",
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
          bg-gray-400/50
          border border-gray-400/20
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          w-full
          max-w-6xl
          space-y-10
          py-32
          px-10

          /* Floating animation */
          animate-float
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
