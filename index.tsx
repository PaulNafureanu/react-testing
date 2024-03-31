import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css";

const DOMNode = document.createElement("div");
document.body.appendChild(DOMNode);
DOMNode.id = "app";

const root = createRoot(DOMNode);

const isDev: boolean = true;

const rootComp = isDev ? (
  <StrictMode>
    <App />
  </StrictMode>
) : (
  <App />
);

root.render(rootComp);
