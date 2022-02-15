import MyTable from "../components/MyTable";
import * as React from "react";
import axios from "axios";
import { dataMainUrl } from "../helpers/Url";

const Url = dataMainUrl; /* Put the path here*/

const headCells = [
  {
    numeric: false,
    disablePadding: false,
    label: "Queue名稱",
  },
  {
    numeric: true,
    disablePadding: false,
    label: "Queue說明",
  },
  {
    numeric: true,
    disablePadding: false,
    label: "Queue流量",
  },
];

function Market({ title }) {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      //getAccessInfo from data using userID
      if (!sessionStorage.getItem("userID")) {
        window.location.href = "/Login";
      } /* else if(getAccessInfo) {
        // const response = await axios.get(Url);
      }*/
    })();
  });
  return (
    <div className="table">
      <div className="pageTitle">{title}</div>
      <MyTable headCells={headCells} data={rows} indexs={[0]} />
    </div>
  );
}

export default Market;
