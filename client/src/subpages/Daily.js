import * as React from "react";
import MyCheckboxTable from "../components/MyCheckboxTable";
import axios from "axios";
import { dataMainUrl } from "../helpers/Url";

const Url = dataMainUrl; /* Put the path here*/

const headCells = [
  {
    name: "code",
    numeric: true,
    disablePadding: false,
    label: "檔案代號",
  },
  {
    name: "name",
    numeric: true,
    disablePadding: false,
    label: "檔名",
  },
  {
    name: "date",
    numeric: true,
    disablePadding: false,
    label: "檔案日期",
  },
  {
    name: "time",
    numeric: true,
    disablePadding: false,
    label: "檔案時間",
  },
  {
    name: "size",
    numeric: true,
    disablePadding: false,
    label: "檔案大小",
  },
  {
    name: "fileNumber",
    numeric: true,
    disablePadding: false,
    label: "檔案比數",
  },
  {
    name: "readNumber",
    numeric: true,
    disablePadding: false,
    label: "讀取比數",
  },
  {
    name: "addNumber",
    numeric: true,
    disablePadding: false,
    label: "新增比數",
  },
  {
    name: "transferDate",
    numeric: true,
    disablePadding: false,
    label: "轉檔日期",
  },
  {
    name: "transferTime",
    numeric: true,
    disablePadding: false,
    label: "轉檔時間",
  },
];

export default function Daily({ title }) {
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
  const sendInquiry = (dataID) => {
    console.log(dataID);
  };
  return (
    <div className="table">
      <div className="pageTitle">{title}</div>
      <MyCheckboxTable
        headCells={headCells}
        data={rows}
        uKey={"code"}
        buttonName={"轉檔"}
        onClickFunction={sendInquiry}
      />
    </div>
  );
}
