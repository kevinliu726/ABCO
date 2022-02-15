import React from "react";
import { MaintainList } from "../helpers/MaintainList";
import Item from "../components/Item";
import "../styles/Maintain.css";
import "../App.css";

function Maintain({ title }) {
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
    <div className="maintain">
      <div className="pageTitle">{title}</div>
      <div className="maintainList">
        {MaintainList.map((maintainItem, key) => {
          return <Item key={key} source="maintain" name={maintainItem.name} pathName={maintainItem.pathName} />;
        })}
      </div>
    </div>
  );
}

export default Maintain;
