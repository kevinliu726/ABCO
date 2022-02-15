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

const columns = [
  ["客戶帳號"],
  ["檢查碼"],
  ["簡稱"],
  ["身份別"],
  ["投信投顧代號"],
  ["劃撥戶狀態"],
  ["徵信狀態"],
  ["最高委託額度"],
  ["控管"],
  ["授權委託"],
  ["TSE DMA 開戶狀態"],
  ["OTC DMA 開戶狀態"],
  ["開戶狀態"],
  ["2(TSE開戶)"],
  ["3(OTC開戶)"],
  ["4(TSE認購(售)權證)"],
  ["5(未使用)"],
  ["8(集保帳戶開戶)"],
  ["13(未使用)"],
  ["14(OTC認購(售)權證)"],
  ["16(第一上市櫃股票)"],
  ["17(以外國證券或指數為標的的權證)"],
  ["20(CB轉換公司債)"],
];
function CustomerBasicInfo({ title }) {
  const [rows, setRows] = React.useState(JSON.parse(JSON.stringify(columns)));
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
              <TextField id="account" autoComplete="off" label="客戶帳戶" type="search" />
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
export default CustomerBasicInfo;
