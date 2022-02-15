import React from "react";
import { InquiryList } from "../helpers/InquiryList";
import Item from "../components/Item";
import "../styles/Inquiry.css";
import "../App.css";

function Inquiry({ title }) {
  React.useEffect(() => {
    (async () => {
      //getAccessInfo from data using userID
      if (!sessionStorage.getItem("userID")) {
        window.location.href = "/Login";
      } /* else if(getAccessInfo) {
        
      }*/
    })();
  });
  return (
    <div className="inquiry">
      <div className="pageTitle">{title}</div>
      <div className="inquiryList">
        {InquiryList.map((inquiryItem, key) => {
          return <Item key={key} source="inquiry" name={inquiryItem.name} pathName={inquiryItem.pathName} />;
        })}
      </div>
    </div>
  );
}

export default Inquiry;
