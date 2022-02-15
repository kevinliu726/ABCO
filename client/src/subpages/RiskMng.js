import * as React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import MyTable from "../components/MyTable";
import axios from "axios";
import { dataMainUrl } from "../helpers/Url";

const Url = dataMainUrl; /* Put the path here*/
const columns = [
  { label: "帳號" },
  { label: "TNL" },
  { label: "股票代號" },
  { label: "DUMMY" },
  { label: "整股BQTY" },
  { label: "整股BAMT" },
  { label: "整股SQTY" },
  { label: "整股SAMT" },
  { label: "整股SSQTY" },
  { label: "整股SSAMT" },
  { label: "盤後零BQTY" },
  { label: "盤後零BAMT" },
  { label: "盤後零SQTY" },
  { label: "盤後零SAMT" },
  { label: "盤後零SSQTY" },
  { label: "盤後零SSAMT" },
  { label: "定價BQTY" },
  { label: "定價BAMT" },
  { label: "定價SQTY" },
  { label: "定價SAMT" },
  { label: "定價SSQTY" },
  { label: "定價SSAMT" },
  { label: "盤中零BQTY" },
  { label: "盤中零BAMT" },
  { label: "盤中零SQTY" },
  { label: "盤中零SAMT" },
  { label: "盤中零SSQTY" },
  { label: "盤中零SSAMT" },
];

function RiskMng({ title }) {
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
    console.log(document.getElementById("SMOTC").checked);
    console.log(document.getElementById("SMOCU").checked);
    console.log(document.getElementById("SMMTC").checked);
    console.log(document.getElementById("SMMCU").checked);
    console.log(document.getElementById("account").value);
    console.log(document.getElementById("code").value);
  };
  return (
    <div className="table">
      <div className="pageTitle">{title}</div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ width: "25%" }}>
              <FormControlLabel control={<Checkbox id="SMOTC" />} label="SMOTC" />
            </TableCell>
            <TableCell style={{ width: "25%" }}>
              <FormControlLabel control={<Checkbox id="SMOCU" />} label="SMOCU" />
            </TableCell>
            <TableCell style={{ width: "25%" }}>
              <FormControlLabel control={<Checkbox id="SMMTC" />} label="SMMTC" />
            </TableCell>
            <TableCell style={{ width: "25%" }}>
              <FormControlLabel control={<Checkbox id="SMMCU" />} label="SMMCU" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <TextField id="account" label="帳戶" type="search" />
            </TableCell>
            <TableCell>
              <TextField id="code" label="股票代碼" type="search" />
            </TableCell>
            <TableCell></TableCell>
            <TableCell align="center">
              <button style={{ width: "70%" }} onClick={() => sendInquiry()}>
                搜尋
              </button>
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
      <MyTable
        sx={{ maxHeight: 440 }}
        style={{
          fontSize: "5px",
          maxWidth: "45px",
          padding: "5px 3px",
          border: "0.1px solid rgba(224, 224, 224, 0)",
          borderBottom: "1px solid rgba(224, 224, 224, 1)",
        }}
        headCells={columns}
        data={rows}
        indexs={[]}
      />
    </div>
  );
}

export default RiskMng;
