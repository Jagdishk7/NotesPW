import "./sidebar.css";
import React from "react";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";
import { GlobalContext } from "../../context/context";

const Sidebar = () => {
  const { state, dispatch } = GlobalContext();
  const { isSidebarOpen, categories } = state;

  const categoryList = categories.map((category, i) => (
    <li
      onClick={() => dispatch({ type: "FILTER_NOTES", payload: category })}
      key={i}
    >
      {category}
    </li>
  ));

  return (
    <div className={`${isSidebarOpen ? "sidebar" : "sidebar close-sidebar"}`}>
      <section className="main-content">
        <header className="sidebar-header">
          <h2 className="sidebar-heading">Categories</h2>
          <span
            className="closeSidebar-btn"
            onClick={() => dispatch({ type: "CLOSE_SIDEBAR" })}
          >
            <FaTimes />
          </span>
        </header>
        {/* category list is brought from context and set up dynamically */}
        <ul className="category-list"> {categoryList} </ul>
      </section>
      {/* social media links. href note set yet. */}
      <footer className="social-icons">
        <a href="/">
          <FaTwitter />
        </a>
        <a href="/">
          <FaLinkedin />
        </a>
        <a href="/">
          <FaFacebook />
        </a>
        <a href="/">
          <FaDiscord />
        </a>
        <a href="/">
          <FaInstagram />
        </a>
      </footer>
    </div>
  );
};

export default Sidebar;
