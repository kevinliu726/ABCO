import * as React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import MyTable from "../components/MyTable";
import axios from "axios";
import { dataMainUrl } from "../helpers/Url";

const Url = dataMainUrl; /* Put the path here*/
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
//ToDo
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
const marketOption = [
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
const columns = [
  { label: "市場別" },
  { label: "股票" },
  { label: "成交股數" },
  { label: "成交價格" },
  { label: "交易所時間" },
  { label: "盤別" },
  { label: "買賣別" },
  { label: "委託書編" },
  { label: "客戶帳號" },
  { label: "委託類別" },
  { label: "流水號" },
  { label: "證商代號" },
  { label: "輸入日期" },
];

function SuccessOrder({ title }) {
  const [buyOrSell, setBuyOrSell] = React.useState("all");

  const handleChange = (event) => {
    setBuyOrSell(event.target.value);
  };

  const [stock, setStock] = React.useState("all");

  const handleChange2 = (event) => {
    setStock(event.target.value);
  };

  const [market, setMarket] = React.useState("all");

  const handleChange3 = (event) => {
    setMarket(event.target.value);
  };
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
  React.useEffect(() => {}, [rows]);
  const sendInquiry = () => {
    console.log(document.getElementById("date").value);
    console.log(buyOrSell);
    console.log(stock);
    console.log(market);
    console.log(document.getElementById("account").value);
    console.log(document.getElementById("trustNumber").value);
    console.log(document.getElementById("code").value);
    console.log(document.getElementById("numberOfInquiry").value);
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
                id="date"
                label="日期"
                type="search"
                autoComplete="off"
                style={{ width: "100%" }}
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
                id="buyOrSell"
                select
                label="買賣別"
                value={buyOrSell}
                onChange={handleChange}
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
                onChange={handleChange2}
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
                id="market"
                select
                label="市場別"
                value={market}
                onChange={handleChange3}
              >
                {marketOption.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </TableCell>
            <TableCell></TableCell>
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
              <TextField style={{ width: "100%" }} id="trustNumber" autoComplete="off" label="委託書號" type="search" />
            </TableCell>
            <TableCell>
              <TextField style={{ width: "100%" }} id="code" autoComplete="off" label="股票代碼" type="search" />
            </TableCell>
            <TableCell>
              <TextField
                style={{ width: "100%" }}
                id="numberOfInquiry"
                autoComplete="off"
                label="筆數"
                type="search"
                defaultValue="10"
              />
            </TableCell>
            <TableCell>
              <button style={{ width: "100%" }} onClick={() => sendInquiry()}>
                搜尋
              </button>
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
      <MyTable sx={{ maxHeight: 440 }} headCells={columns} data={rows} indexs={[]} />
    </div>
  );
}

export default SuccessOrder;
