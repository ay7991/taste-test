import React from "react";
import App from "./components/App";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

// index has to be tsx not ts in order to function properly with JSX elements
root.render(<App />);