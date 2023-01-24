import React from "react";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { GlobalContext } from "../../context/context";

const Header = () => {
  const { onlySearchIcon } = GlobalContext();

  return (
    <div className="header">
      <div className="logo">
        <a href="/">
          <i class="bx bxs-book logo-icon"></i>
          <p>
            <span>N</span>otes PW
          </p>
        </a>
      </div>
      <div className="search-bar">
        <input
          type="search"
          className="search"
          name=""
          id=""
          placeholder="Search Notes"
        />
        <button className="btn-search" type="submit">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Header;
