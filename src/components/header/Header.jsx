import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="/"><i class='bx bxs-book logo-icon'></i><p><span>N</span>otes PW</p></a>
      </div>
        <div className="search-bar">
          <input type="search" className="search" name="" id="" />
          <button className="btn-search" type="submit"><i className="uil uil-search "></i></button>
        </div>
    </div>
  );
};

export default Header;
