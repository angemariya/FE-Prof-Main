import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { About } from "./About.jsx";
import { Card } from "./Card";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <About />
    <Card />
  </React.StrictMode>
);
