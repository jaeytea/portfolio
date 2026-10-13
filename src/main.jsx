import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/tokens.css"; // keep first: it holds the font @import
import "./styles/base.css";
import "./styles/buttons.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
