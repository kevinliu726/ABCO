import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
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

function SystemParameter({ title }) {
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
  const sendMutation = async () => {
    console.log(document.getElementById("account").value);
    console.log(document.getElementById("stock").value);
    console.log(document.getElementById("advanceReceipt").value);
    console.log(document.getElementById("investLimit").value);
    console.log(document.getElementById("FIPO_RATE").value);
    console.log(document.getElementById("DIPO_RATE").value);
    console.log(document.getElementById("FETF_RATE").value);
    console.log(document.getElementById("DETF_RATE").value);
    console.log(document.getElementById("IPO").value);
    console.log(document.getElementById("ETF").value);
  };
  return (
    <div className="table">
      <div className="pageTitle">{title}</div>
      <TableContainer sx={{ maxHeight: 460 }}>
        <Table align={"center"} style={{ marginTop: "10px", width: "50%" }}>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell variant="head" width="30%">
                {"劃撥戶"}
              </StyledTableCell>
              <TableCell>
                <TextField id="account" autoComplete="off" type="search" />
              </TableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell variant="head" width="30%">
                {"庫存檢核"}
              </StyledTableCell>
              <TableCell>
                <TextField id="stock" autoComplete="off" type="search" />
              </TableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell variant="head" width="30%">
                {"加強預收檢核"}
              </StyledTableCell>
              <TableCell>
                <TextField id="advanceReceipt" autoComplete="off" type="search" />
              </TableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell variant="head" width="30%">
                {"投資上限"}
              </StyledTableCell>
              <TableCell>
                <TextField id="investLimit" autoComplete="off" type="search" />
              </TableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell variant="head" width="30%">
                {"FIPO_RATE"}
              </StyledTableCell>
              <TableCell>
                <TextField id="FIPO_RATE" autoComplete="off" type="search" />
              </TableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell variant="head" width="30%">
                {"DIPO_RATE"}
              </StyledTableCell>
              <TableCell>
                <TextField id="DIPO_RATE" autoComplete="off" type="search" />
              </TableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell variant="head" width="30%">
                {"FETF_RATE"}
              </StyledTableCell>
              <TableCell>
                <TextField id="FETF_RATE" autoComplete="off" type="search" />
              </TableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell variant="head" width="30%">
                {"DETF_RATE"}
              </StyledTableCell>
              <TableCell>
                <TextField id="DETF_RATE" autoComplete="off" type="search" />
              </TableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell variant="head" width="30%">
                {"動態IPO日期"}
              </StyledTableCell>
              <TableCell>
                <TextField id="IPO" autoComplete="off" type="search" />
              </TableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell variant="head" width="30%">
                {"動態ETF日期"}
              </StyledTableCell>
              <TableCell>
                <TextField id="ETF" autoComplete="off" type="search" />
              </TableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <button style={{ width: "20%", alignSelf: "center", marginTop: "10px" }} onClick={() => sendMutation()}>
        修改
      </button>
    </div>
  );
}
export default SystemParameter;
