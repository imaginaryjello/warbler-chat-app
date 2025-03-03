import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import "./Components/Signup.jsx";
import "./Pages/Home.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
