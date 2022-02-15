import * as React from "react";
import MyTable from "../components/MyTable";
import axios from "axios";
import { dataMainUrl } from "../helpers/Url";

const Url = dataMainUrl; /* Put the path here*/
const headCells = [
  {
    numeric: true,
    disablePadding: false,
    label: "",
  },
  {
    numeric: true,
    disablePadding: false,
    label: "買進",
  },
  {
    numeric: true,
    disablePadding: false,
    label: "買進股數",
  },
  {
    numeric: true,
    disablePadding: false,
    label: "賣出",
  },
  {
    numeric: true,
    disablePadding: false,
    label: "賣出股數",
  },
  {
    numeric: true,
    disablePadding: false,
    label: "B+S股數",
  },
  {
    numeric: true,
    disablePadding: false,
    label: "B+S金額",
  },
];
const columns = [["委託"], ["成交"]];
function EntrustDealInquiry({ title }) {
  const newRows = JSON.parse(JSON.stringify(columns));
  React.useEffect(() => {
    (async () => {
      //getAccessInfo from data using userID
      if (!sessionStorage.getItem("userID")) {
        window.location.href = "/Login";
      } /* else if(getAccessInfo) {
        // const response = await axios.get(Url);
          //Get New Data Here
        newRows.forEach((row, index) => {
          //update rows
          row.push("0");
        }); 
      }*/
    })();
  });
  const [rows, setRows] = React.useState(newRows);
  React.useEffect(() => {}, [rows]);
  const update = async () => {
    const newRows = JSON.parse(JSON.stringify(columns));
    //Get New Data Here
    newRows.forEach((row, index) => {
      //Insert it here
      //   row.push();
    });
    setRows(newRows);
  };
  return (
    <div className="table">
      <div className="pageTitle">{title}</div>
      <MyTable headCells={headCells} data={rows} uKey={"a"} />
      <button className="add" onClick={() => update()}>
        更新
      </button>
    </div>
  );
}

export default EntrustDealInquiry;
