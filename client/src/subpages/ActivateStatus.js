import * as React from "react";
import axios from "axios";
import MyCheckboxTable from "../components/MyCheckboxTable";
import { dataMainUrl } from "../helpers/Url";
const Url = dataMainUrl; /* Put the path here*/
const headCells = [
  {
    id: "option",
    numeric: true,
    disablePadding: false,
    label: "作業選項",
  },
  {
    id: "classify",
    numeric: true,
    disablePadding: false,
    label: "作業類別",
  },
  {
    id: "code",
    numeric: true,
    disablePadding: false,
    label: "啟動代號",
  },
  {
    id: "program",
    numeric: true,
    disablePadding: false,
    label: "執行程式",
  },
  {
    id: "path",
    numeric: true,
    disablePadding: false,
    label: "設定檔案路徑",
  },
  {
    id: "file",
    numeric: true,
    disablePadding: false,
    label: "作業控制檔",
  },
];

export default function ActivateStatus({ title }) {
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
        buttonName={"送出"}
        onClickFunction={sendInquiry}
      />
    </div>
  );
}
