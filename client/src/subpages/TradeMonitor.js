import * as React from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import MyTable from "../components/MyTable";
import { dataMainUrl } from "../helpers/Url";
import { Redirect, useHistory, useLocation } from "react-router";

const Url = dataMainUrl + "/mcust/990001";

const statusOfTrustOption = [
  {
    value: "all",
    label: "全部",
  },
  {
    value: "new",
    label: "新委託",
  },
  {
    value: "cancel",
    label: "已取消",
  },
  {
    value: "changeAmt",
    label: "已改量",
  },
  {
    value: "changePrice",
    label: "已改價",
  },
  {
    value: "error",
    label: "錯誤",
  },
  {
    value: "partial",
    label: "部分成交",
  },
  {
    value: "whole",
    label: "完全成交",
  },
  {
    value: "live",
    label: "LIVE",
  },
];
const buyOrSellOption = [
  {
    value: "all",
    label: "全部",
  },
  {
    value: "buy",
    label: "買",
  },
  {
    value: "sell",
    label: "賣",
  },
];
const stockOption = [
  {
    value: "all",
    label: "全部",
  },
  {
    value: "full",
    label: "整股",
  },
  {
    value: "intraZero",
    label: "盤中零股",
  },
  {
    value: "afterZero",
    label: "盤後零股",
  },
  {
    value: "fixed",
    label: "定價",
  },
];
const sourceOption = [
  {
    value: "all",
    label: "全部",
  },
  {
    value: "fix",
    label: "FIX",
  },
  {
    value: "web",
    label: "WEB",
  },
  {
    value: "self",
    label: "自己",
  },
];

const columns = [
  { label: "識別碼" },
  { label: "前筆委託識別碼" },
  { label: "委託書號" },
  { label: "客戶帳號" },
  { label: "盤別" },
  { label: "股票" },
  { label: "委託股數" },
  { label: "刪減後股數+成交" },
  { label: "剩餘有效委託股數" },
  { label: "已成交" },
  { label: "委託價格" },
  { label: "委託方式" },
  { label: "買賣別" },
  { label: "委託有效期間" },
  { label: "委託別" },
  { label: "處理" },
  { label: "輸入日期" },
  { label: "輸入時間" },
  { label: "回報時間" },
  { label: "交易所時間" },
  { label: "latency (us)" },
  { label: "內部latency (us)" },
  { label: "狀態" },
  { label: "訊息" },
];

function TradeMonitor({ title, history }) {
  const [statusOfTrust, setStatusOfTrust] = React.useState("all");

  const handleChange = (event) => {
    setStatusOfTrust(event.target.value);
  };

  const [buyOrSell, setBuyOrSell] = React.useState("all");

  const handleChange2 = (event) => {
    setBuyOrSell(event.target.value);
  };

  const [stock, setStock] = React.useState("all");

  const handleChange3 = (event) => {
    setStock(event.target.value);
  };

  const [source, setSource] = React.useState("all");

  const handleChange4 = (event) => {
    setSource(event.target.value);
  };

  const location = useLocation();
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
  const sendInquiry = async () => {
    // const response = await axios.get(Url);
    console.log(document.getElementById("date").value);
    console.log(statusOfTrust);
    console.log(buyOrSell);
    console.log(stock);
    console.log(source);
    console.log(document.getElementById("account").value);
    console.log(document.getElementById("trustNumber").value);
    console.log(document.getElementById("code").value);
    console.log(document.getElementById("processor").value);
  };
  var today = new Date();
  return (
    <div className="table">
      <div className="pageTitle">{title}</div>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TextField
                  id="date"
                  label="日期"
                  type="search"
                  style={{ width: "100%" }}
                  autoComplete="off"
                  defaultValue={
                    today.getFullYear() +
                    (today.getMonth() < 10 ? "0" : "") +
                    (today.getMonth() + 1) +
                    (today.getDate() < 10 ? "0" : "") +
                    today.getDate()
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  style={{ width: "100%" }}
                  id="statusOfTrust"
                  select
                  label="委託狀態"
                  value={statusOfTrust}
                  onChange={handleChange}
                >
                  {statusOfTrustOption.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </TableCell>
              <TableCell>
                <TextField
                  style={{ width: "100%" }}
                  id="buyOrSell"
                  select
                  label="買賣別"
                  value={buyOrSell}
                  onChange={handleChange2}
                >
                  {buyOrSellOption.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </TableCell>
              <TableCell>
                <TextField
                  style={{ width: "100%" }}
                  id="stock"
                  select
                  label="盤別"
                  value={stock}
                  onChange={handleChange3}
                >
                  {stockOption.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </TableCell>
              <TableCell>
                <TextField
                  style={{ width: "100%" }}
                  id="source"
                  select
                  label="來源別"
                  value={source}
                  onChange={handleChange4}
                >
                  {sourceOption.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <TextField
                  style={{ width: "100%" }}
                  id="account"
                  autoComplete="off"
                  label="客戶帳戶(6碼)"
                  type="search"
                />
              </TableCell>
              <TableCell>
                <TextField
                  style={{ width: "100%" }}
                  id="trustNumber"
                  autoComplete="off"
                  label="委託書號"
                  type="search"
                />
              </TableCell>
              <TableCell>
                <TextField style={{ width: "100%" }} id="code" autoComplete="off" label="股票代碼" type="search" />
              </TableCell>
              <TableCell>
                <TextField style={{ width: "100%" }} id="processor" autoComplete="off" label="營業員" type="search" />
              </TableCell>
              <TableCell>
                <button style={{ width: "100%" }} id="searchButton" onClick={() => sendInquiry()}>
                  搜尋
                </button>
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <MyTable
        sx={{ maxHeight: 440 }}
        style={{ fontSize: "5px", minWidth: "25px", maxWidth: "35px", padding: "5px 2px" }}
        headCells={columns}
        data={rows}
        indexs={[]}
      />
    </div>
  );
}

export default TradeMonitor;
