import * as React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import MyTable from "../components/MyTable";
import axios from "axios";
import { dataMainUrl } from "../helpers/Url";

const Url = dataMainUrl; /* Put the path here*/
const columns = [
  { label: "客戶帳號" },
  { label: "股票代號" },
  { label: "預收股數" },
  { label: "預收金額" },
  { label: "借券預收股數" },
];

function ModifySetting({ title }) {
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {}, [rows]);
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
  const sendInquiry = () => {
    console.log(document.getElementById("account").value);
    console.log(document.getElementById("code").value);
  };
  const sendMutation = () => {
    console.log(document.getElementById("preStock").value);
    console.log(document.getElementById("preAmount").value);
    console.log(document.getElementById("lendStock").value);
    setRows((rows) => [
      ...rows,
      [
        document.getElementById("account").value,
        document.getElementById("code").value,
        document.getElementById("preStock").value,
        document.getElementById("preAmount").value,
        document.getElementById("lendStock").value,
      ],
    ]);
  };
  return (
    <div className="table">
      <div className="pageTitle">{title}</div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TextField style={{ width: "100%" }} id="account" autoComplete="off" label="客戶帳戶(6碼)" />
            </TableCell>
            <TableCell>
              <TextField style={{ width: "100%" }} id="code" autoComplete="off" label="股票代碼" />
            </TableCell>
            <TableCell></TableCell>
            <TableCell>
              <button style={{ width: "100%" }} onClick={() => sendInquiry()}>
                搜尋
              </button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <TextField style={{ width: "100%" }} id="preStock" autoComplete="off" label="預收股票" />
            </TableCell>
            <TableCell>
              <TextField style={{ width: "100%" }} id="preAmount" autoComplete="off" label="預收金額" />
            </TableCell>
            <TableCell>
              <TextField style={{ width: "100%" }} id="lendStock" autoComplete="off" label="借券預收股數" />
            </TableCell>
            <TableCell>
              <button style={{ width: "100%" }} onClick={() => sendMutation()}>
                新增
              </button>
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
      <MyTable sx={{ maxHeight: 440 }} headCells={columns} data={rows} uKey={"b"} indexs={[0, 1, 2, 3, 4]} />
    </div>
  );
}

export default ModifySetting;
