import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SalePage, PalePage } from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/pale" element={<PalePage />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
