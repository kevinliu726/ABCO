import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
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
  { id: "account", label: "客戶帳號" },
  { id: "nickname", label: "簡稱" },
  { id: "codename", label: "風控代號" },
  { id: "isControl", label: "0:不控 / 1:控制" },
  { id: "button", label: "修改" },
];

function UsrRiskMngSetting({ title }) {
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
            <TableCell width="25%">
              <TextField
                style={{ width: "100%" }}
                id="outlined-search"
                autoComplete="off"
                label="客戶帳戶(6碼)"
                type="search"
              />
            </TableCell>
            <TableCell width="50%"></TableCell>
            <TableCell width="25%" style={{ textAlign: "center" }}>
              <button style={{ width: "50%" }} onClick={() => sendInquiry()}>
                搜尋
              </button>
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell key={column.id}>{column.label}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <StyledTableRow>
                  {columns.map((column) => {
                    if (column.id === "button") {
                      return (
                        <TableCell>
                          <button style={{ width: "100%" }}>修改</button>
                        </TableCell>
                      );
                    } else if (column.id === "isControl") {
                      return (
                        <TableCell key={column.id} width="20%">
                          <TextField
                            style={{ width: "100%" }}
                            id="outlined-search"
                            autoComplete="off"
                            type="search"
                            defaultValue={row[column.id]}
                          />
                        </TableCell>
                      );
                    } else {
                      return (
                        <TableCell key={column.id} width="20%">
                          {row[column.id]}
                        </TableCell>
                      );
                    }
                  })}
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default UsrRiskMngSetting;
