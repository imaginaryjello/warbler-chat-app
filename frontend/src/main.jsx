import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import "./component/Signup.jsx";
import "./component/Home.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
