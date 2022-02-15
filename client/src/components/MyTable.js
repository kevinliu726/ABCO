import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

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

function MyTable({ sx, style, headCells, data, indexs }) {
  const getKeys = function () {
    return Object.keys(data[0]);
  };

  const getRowsData = function () {
    return data.map((row, index) => {
      return (
        <StyledTableRow key={index}>
          <RenderRow key={index} data={row} keys={getKeys()} index={index} indexs={indexs} />
        </StyledTableRow>
      );
    });
  };
  if (style == null) {
    style = { wordBreak: "keep-all" };
  }
  return (
    <div>
      <TableContainer sx={{ maxHeight: "60vh", minWidth: 700 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => (
                <StyledTableCell
                  key={headCell.label}
                  align={headCell.numeric ? "center" : "left"}
                  padding={headCell.disablePadding ? "none" : "normal"}
                  style={style}
                >
                  {headCell.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{getRowsData()}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

const RenderRow = (props) => {
  return props.keys.map((key, index) => {
    return (
      <TableCell key={key + props.index} align={props.indexs && props.indexs.includes(index) ? "left" : "center"}>
        {props.data[key]}
      </TableCell>
    );
  });
};

export default MyTable;
