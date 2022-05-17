import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { mockData } from "../../../server/database";
import "./style.css";

export function SaleDetailPage() {
  const location = useLocation();
  const params = queryString.parse(location.search);
  const itemID = params.itemID;
  const item = mockData[parseInt(itemID)];
  return (
    <div className="sale-detail-container">
      <img
        width={"50%"}
        height={"50%"}
        className="sale-detail-image"
        src={item.img}
        alt="옷 이미지"
      />
      <div className="sale-detail-words-container">
        <h3 className="sale-detail-words-title">{item.title}</h3>
        <p className="sale-detail-words-des">{item.des}</p>
      </div>
    </div>
  );
}
