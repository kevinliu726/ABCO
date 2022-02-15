import React from "react";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";

const Navbar = ({ routes }) => {
  return (
    <div className="navbar">
      <div className="leftSide">
        <div className="logo">ABCO 3.0</div>
      </div>
      <div className="rightSide">
        <Link to="/monitor"> 監控查詢 </Link>
        <Link to="/inquiry"> 下單查詢 </Link>
        <Link to="/maintain"> 檔案維護 </Link>
        <Link to="/information"> 個人資料 </Link>
      </div>
    </div>
  );
};

export default Navbar;
