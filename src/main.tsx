/**
 * main.tsx
 *
 * Entry point of the StudyFlow application.
 * Responsible for mounting the React app to the DOM.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/output.css";

/**
 * Get root DOM element.
 * We assert that it exists using the non-null assertion operator (!).
 * This tells TypeScript:
 * "Trust me, this element will not be null."
 */
const rootElement = document.getElementById("root")!;

/**
 * Create React root and render application.
 */
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
