import React from "react";
import { SaleItem } from "../../../components/SaleItem";
import { mockData } from "../../../server/database";
import "./style.css";
export function SaleMainPage() {
  return (
    <div className="sale-main-page-container">
      {mockData.map((item) => {
        return <SaleItem info={item} />;
      })}
    </div>
  );
}
