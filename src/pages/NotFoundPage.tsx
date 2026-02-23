/**
 * NotFoundPage.tsx
 *
 * 404 fallback page.
 * Automatically redirects users to the Home page
 * after a short delay.
 */

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * NotFoundPage Component
 *
 * - Displays a 404 message
 * - Redirects user to "/" after 2 seconds
 */
const NotFoundPage: React.FC = () => {
  // Hook used for programmatic navigation
  const navigate = useNavigate();

  useEffect(() => {
    /**
     * Set timeout to redirect after 2 seconds.
     * This improves UX instead of leaving user stuck.
     */
    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 2000);

    /**
     * Cleanup function:
     * Clears timeout if component unmounts
     * to prevent memory leaks.
     */
    return () => clearTimeout(redirectTimer);
  }, [navigate]);

  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      {/* 404 Title */}
      <h1 className="text-6xl font-bold mb-4">404</h1>

      {/* Message */}
      <p className="text-gray-600">Page not found. Redirecting to home...</p>
    </section>
  );
};

export default NotFoundPage;
