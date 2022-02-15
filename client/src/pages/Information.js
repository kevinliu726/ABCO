import React from "react";
import { InformationList } from "../helpers/InformationList";
import Item from "../components/Item";
import "../styles/Information.css";
import "../App.css";

function Information({ title }) {
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
    <div className="information">
      <div className="pageTitle">{title}</div>
      <div className="informationList">
        {InformationList.map((informationItem, key) => {
          return (
            <Item key={key} source="information" name={informationItem.name} pathName={informationItem.pathName} />
          );
        })}
      </div>
    </div>
  );
}

export default Information;
