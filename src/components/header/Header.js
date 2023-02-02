import React from "react";
import { FaBook, FaSearch } from "react-icons/fa";
import { GlobalContext } from "../../context/context";

const Header = () => {
  const { state, dispatch } = GlobalContext();
  const { writing, searchBarValue } = state;

  const searchNote = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH_NOTE", payload: searchBarValue });
  };

  return (
    <div className={`${writing ? "header header-hidden" : "header "}`}>
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
          value={searchBarValue}
          required
          onChange={(e) =>
            dispatch({
              type: "SEARCH_BAR_VALUE_CHANGE",
              payload: e.target.value,
            })
          }
        />
        <button className="btn-search" onClick={searchNote}>
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Header;
