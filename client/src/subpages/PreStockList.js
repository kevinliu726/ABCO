import * as React from "react";
import MyTable from "../components/MyTable";
import axios from "axios";
import { dataMainUrl } from "../helpers/Url";

const Url = dataMainUrl; /* Put the path here*/
const headCells = [
  {
    numeric: true,
    disablePadding: false,
    label: "股票代號",
  },
  {
    numeric: true,
    disablePadding: false,
    label: "市場別",
  },
  {
    numeric: true,
    disablePadding: false,
    label: "交易方式",
  },
  {
    numeric: true,
    disablePadding: false,
    label: "處置股票",
  },
  {
    numeric: true,
    disablePadding: false,
    label: "注意股票",
  },
  {
    numeric: true,
    disablePadding: false,
    label: "委託限制",
  },
  {
    numeric: true,
    disablePadding: false,
    label: "單筆委託限制數量交易單位",
  },
  {
    numeric: true,
    disablePadding: false,
    label: "多筆委託限制數量交易單位",
  },
  {
    numeric: true,
    disablePadding: false,
    label: "款券%預收成數",
  },
];

function PreStockList({ title }) {
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
      <p>處置股票 0-正常 其他處置 | 注意股票 0-正常 1-注意(警示) | 委託股票 0-正常 1-受限股票</p>
      <MyTable headCells={headCells} data={rows} />
    </div>
  );
}
export default PreStockList;
