import React from "react";
import "./Header.css";
import { FaBook, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="/">
          {/* <i class="bx bxs-book logo-icon"></i> CDNs are not good at production level */}
          <FaBook className="logo-icon" />
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
          placeholder="Search note by title"
        />
        <button className="btn-search" type="submit">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Header;
