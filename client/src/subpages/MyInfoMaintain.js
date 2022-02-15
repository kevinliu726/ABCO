import * as React from "react";
import MyTable from "../components/MyTable";
import ChangePasswordModal from "../components/ChangePasswordModal";
import axios from "axios";
import { dataMainUrl } from "../helpers/Url";

const Url = dataMainUrl; /* Put the path here*/

const headCells = [
  {
    numeric: true,
    disablePadding: false,
    label: "使用者代號",
  },
  {
    numeric: true,
    disablePadding: false,
    label: "使用者名稱",
  },
  {
    id: "b",
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

function MyInfoMaintain({ title }) {
  const [openChangePassword, setOpenChangePassword] = React.useState(false);
  const handleOpenChangePassword = () => {
    setOpenChangePassword(true);
  };
  const handleCloseChangePassword = () => {
    setOpenChangePassword(false);
  };
  const handleSubmit = (password) => {
    // Submit Change Password
    setOpenChangePassword(false);
  };
  const logout = () => {
    sessionStorage.removeItem("userID");
    window.location = "/login";
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
  return (
    <div className="table">
      <div className="pageTitle">{title}</div>
      <ChangePasswordModal
        open={openChangePassword}
        handleClose={handleCloseChangePassword}
        handleEnter={handleSubmit}
      />
      <MyTable headCells={headCells} data={rows} />
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
        <button style={{ width: "10%" }} onClick={() => handleOpenChangePassword()}>
          修改密碼
        </button>
        <button style={{ width: "10%" }} onClick={() => logout()}>
          登出
        </button>
      </div>
    </div>
  );
}

export default MyInfoMaintain;
