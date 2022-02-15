import * as React from "react";
import MyTable from "../components/MyTable";
import axios from "axios";
import AddAccountModal from "../components/AddAccountModal";
import { dataMainUrl } from "../helpers/Url";

const Url = dataMainUrl; /* Put the path here*/
const headCells = [
  {
    numeric: false,
    disablePadding: false,
    label: "使用者代號",
  },
  {
    numeric: false,
    disablePadding: false,
    label: "使用者名稱",
  },
  {
    numeric: true,
    disablePadding: false,
    label: "語系",
  },
  {
    numeric: true,
    disablePadding: false,
    label: "登入日期",
  },
  {
    numeric: true,
    disablePadding: false,
    label: "登入時間",
  },
  {
    numeric: true,
    disablePadding: false,
    label: "群組",
  },
  {
    numeric: true,
    disablePadding: false,
    label: "第一次登入",
  },
  {
    numeric: true,
    disablePadding: false,
    label: "密碼到期日",
  },
];

function UserMaintain({ title }) {
  React.useEffect(() => {
    (async () => {
      //getAccessInfo from data using userID
      if (!sessionStorage.getItem("userID")) {
        window.location.href = "/Login";
      } /* else if(getAccessInfo) {
        // const response = await axios.get(Url);
        //Get New Data Here
      }*/
    })();
  });
  const [rows, setRows] = React.useState([
    /*New Data*/
  ]);
  React.useEffect(() => {}, [rows]);
  const [openChangePassword, setOpenChangePassword] = React.useState(false);
  const handleOpenChangePassword = () => {
    setOpenChangePassword(true);
  };
  const handleCloseChangePassword = () => {
    setOpenChangePassword(false);
  };
  const handleSubmit = (password) => {
    // Submit Change
    setOpenChangePassword(false);
  };
  return (
    <div className="table">
      <div className="pageTitle">{title}</div>
      <AddAccountModal open={openChangePassword} handleClose={handleCloseChangePassword} handleEnter={handleSubmit} />
      <MyTable headCells={headCells} data={rows} indexs={[0, 1]} />
      <button className="add" onClick={() => handleOpenChangePassword()}>
        新增
      </button>
    </div>
  );
}

export default UserMaintain;
