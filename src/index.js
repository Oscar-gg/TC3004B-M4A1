import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const script = document.createElement("script");
script.src = "https://unpkg.com/@tailwindcss/browser@4";
document.head.appendChild(script);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
