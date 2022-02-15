import React from "react";
import { MonitorList } from "../helpers/MonitorList";
import Item from "../components/Item";
import "../styles/Monitor.css";
import "../App.css";

const Monitor = ({ title }) => {
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
    <div className="monitor">
      <div className="pageTitle">{title}</div>
      <div className="monitorList">
        {MonitorList.map((monitorItem, key) => {
          return <Item key={key} source="monitor" name={monitorItem.name} pathName={monitorItem.pathName} />;
        })}
      </div>
    </div>
  );
};

export default Monitor;
