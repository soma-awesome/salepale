import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export function SaleItem(props) {
  return (
    <Link to={`./detail?itemID=${props.info.index}`}>
      <div className="sale-item-container">
        <img
          className="sale-item-image"
          src={props.info.img}
          alt="옷 이미지 입니다."
        ></img>
        <h2 className="sale-item-title">{props.info.title}</h2>
        <p className="sale-item-des">{props.info.des}</p>
      </div>
    </Link>
  );
}
