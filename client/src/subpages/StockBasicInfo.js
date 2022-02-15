import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import { TableBody } from "@mui/material";
import axios from "axios";
import { dataMainUrl } from "../helpers/Url";

const Url = dataMainUrl; /* Put the path here*/
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

//ToDo
const columns = [
  ["股票代號"],
  ["股票名稱"],
  ["市場別"],
  ["漲停價"],
  ["平盤價"],
  ["跌停價"],
  ["股票類別"],
  ["交易方式"],
  ["警示類別"],
  ["處置股票註記"],
  ["注意股票註記"],
  ["委託限制註記"],
  ["證券別代碼"],
  ["單筆委託建制數量"],
  ["多筆委託限制數量"],
  ["款券預收%數"],
  ["豁免平盤下借券賣出註記"],
];
function StockBasicInfo({ title }) {
  const [rows, setRows] = React.useState(JSON.parse(JSON.stringify(columns)));
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
  const sendInquiry = async () => {
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
      <Table>
        <TableHead>
          <TableRow>
            <TableCell width="40%">
              <TextField id="account" autoComplete="off" label="股票代碼" type="search" />
            </TableCell>
            <TableCell width="20%" style={{ textAlign: "right" }}>
              <button style={{ width: "50%" }} onClick={() => sendInquiry()}>
                查詢
              </button>
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
      <TableContainer sx={{ maxHeight: 460 }}>
        <Table style={{ marginTop: "10px", width: "60%" }}>
          <TableBody>
            {rows.map((row, idx) => {
              return (
                <StyledTableRow key={idx}>
                  <StyledTableCell variant="head" width="30%">
                    {row[0]}
                  </StyledTableCell>
                  <TableCell>{row[1]}</TableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default StockBasicInfo;
