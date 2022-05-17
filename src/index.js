import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PalePage } from "./pages";
import { SaleMainPage, SaleDetailPage } from "./pages/Sale";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sale" element={<SaleMainPage />} />
        <Route path="/sale/detail" element={<SaleDetailPage />} />
        <Route path="/pale" element={<PalePage />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
