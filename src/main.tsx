import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "milligram/dist/milligram.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
