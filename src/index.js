// Import React library for creating and managing components.
import React from "react";

// Import ReactDOM for rendering React components to the DOM.
import ReactDOM from "react-dom/client";

// Import the CSS file for styling the application.
import "./index.css";

// Import the main application component.
import App from "./App";

// Import a function for reporting web vitals.
import reportWebVitals from "./reportWebVitals";

// Import Bootstrap CSS for styling.
import "bootstrap/dist/css/bootstrap.min.css";

// Create a React root for rendering the application.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the main App component within a React Strict Mode.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Use reportWebVitals to measure and log performance metrics.
reportWebVitals();
