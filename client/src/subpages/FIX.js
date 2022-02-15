import * as React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import MyTable from "../components/MyTable";
import axios from "axios";
import { dataMainUrl } from "../helpers/Url";

const Url = dataMainUrl; /* Put the path here*/

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
const classOption = [
  {
    value: "0",
    label: "普通",
  },
  {
    value: "6",
    label: "借券",
  },
];
const timeOption = [
  {
    value: "0",
    label: "ROD",
  },
  {
    value: "3",
    label: "IOC",
  },
  {
    value: "4",
    label: "FOK",
  },
  {
    value: "self",
    label: "自己",
  },
];

const columns = [
  { label: "選取" },
  { label: "委託書號" },
  { label: "客戶帳號" },
  { label: "處理" },
  { label: "盤別" },
  { label: "股票" },
  { label: "委託別" },
  { label: "買賣別" },
  { label: "委託股數" },
  { label: "刪減後股數+成交" },
  { label: "剩餘有效委託股數" },
  { label: "已成交" },
  { label: "委託價格" },
  { label: "委託有效期間" },
  { label: "刪單" },
  { label: "狀態" },
  { label: "訊息" },
];

function FIX({ title }) {
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
  const [statusOfTrust, setStatusOfTrust] = React.useState("all");

  const handleChange = (event) => {
    setStatusOfTrust(event.target.value);
  };

  const [buyOrSell, setBuyOrSell] = React.useState("all");

  const handleChange2 = (event) => {
    setBuyOrSell(event.target.value);
  };

  const [stock, setStock] = React.useState("all");

  const handleChange3_1 = (event) => {
    setStock(event.target.value);
  };

  const [stock2, setStock2] = React.useState("all");

  const handleChange3_2 = (event) => {
    setStock2(event.target.value);
  };

  const [source, setSource] = React.useState("all");

  const handleChange4 = (event) => {
    setSource(event.target.value);
  };
  const [classType, setClassType] = React.useState("0");

  const handleChange5 = (event) => {
    setClassType(event.target.value);
  };
  const [timeSpan, setTimeSpan] = React.useState("0");

  const handleChange6 = (event) => {
    setTimeSpan(event.target.value);
  };
  const [rows, setRows] = React.useState([]);
  const sendInquiry = async () => {
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

  const fetchData = async () => {
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
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TextField
                style={{ width: "100%" }}
                id="stock"
                select
                label="盤別"
                value={stock}
                onChange={handleChange3_1}
              >
                {stockOption.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </TableCell>
            <TableCell>
              <TextField style={{ width: "100%" }} id="trustNumber" autoComplete="off" label="委託書號" type="search" />
            </TableCell>
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
                id="class"
                select
                label="委託類別"
                value={classType}
                onChange={handleChange5}
              >
                {classOption.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </TableCell>
            <TableCell>
              <TextField
                style={{ width: "100%" }}
                id="timeSpan"
                select
                label="有效期間"
                value={timeSpan}
                onChange={handleChange6}
              >
                {timeOption.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <TextField style={{ width: "100%" }} id="code2" autoComplete="off" label="股票代碼" type="search" />
            </TableCell>
            <TableCell>
              <TextField style={{ width: "100%" }} id="amount" autoComplete="off" label="委託張數" type="search" />
            </TableCell>
            <TableCell>
              <TextField style={{ width: "100%" }} id="price" autoComplete="off" label="價格" type="search" />
            </TableCell>
            <TableCell>
              <TextField style={{ width: "100%" }} id="processor2" autoComplete="off" label="營業員" type="search" />
            </TableCell>
            <TableCell align="center">
              <button style={{ width: "70%" }} onClick={() => sendInquiry()}>
                下單
              </button>
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
      <div className="pageTitle">FIX委託查詢</div>
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
                  value={stock2}
                  onChange={handleChange3_2}
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
                  id="account2"
                  autoComplete="off"
                  label="客戶帳戶(6碼)"
                  type="search"
                />
              </TableCell>
              <TableCell>
                <TextField
                  style={{ width: "100%" }}
                  id="trustNumber2"
                  autoComplete="off"
                  label="委託書號"
                  type="search"
                />
              </TableCell>
              <TableCell>
                <TextField style={{ width: "100%" }} id="code2" autoComplete="off" label="股票代碼" type="search" />
              </TableCell>
              <TableCell>
                <TextField style={{ width: "100%" }} id="processor2" autoComplete="off" label="營業員" type="search" />
              </TableCell>
              <TableCell>
                <button style={{ width: "100%" }} id="searchButton" onClick={() => fetchData()}>
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

export default FIX;
