import React from "react";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTimes,
  FaTwitter,
  FaArrowAltCircleRight,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import { GlobalContext } from "../../context/context";

const Sidebar = () => {
  const { state, dispatch } = GlobalContext();
  const { isSidebarOpen, categories } = state;

  const categoryList = categories.map((category, i) => (
    <li
      onClick={() => {
        if (window.innerWidth < "640") {
          return (
            dispatch({ type: "FILTER_NOTES", payload: category }),
            dispatch({ type: "CLOSE_SIDEBAR" })
          );
        } else {
          return dispatch({ type: "FILTER_NOTES", payload: category });
        }
      }}
      key={i}
      title={category}
    >
      {category.length > "15"
        ? category.split("").slice(0, 15).join("").trim() + "..."
        : category}
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
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/pwskills"
          className="pw-social"
        >
          <FaFacebook />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/pwcollegewallah/"
          className="pw-social"
        >
          <FaInstagram />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://t.me/SkillsPW"
          className="pw-social"
        >
          <FaTelegram />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/channel/UCDrf0V4fcBr5FlCtKwvpfwA"
          className="pw-social"
        >
          <FaYoutube />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/pw__skills"
          className="pw-social"
        >
          <FaTwitter />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/company/ineuron-ai/"
          className="pw-social"
        >
          <FaLinkedin />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://discord.com/channels/1029814289420271789/1030556431914643498"
          className="pw-social"
        >
          <FaDiscord />
        </a>

        <Link
          to="/about"
          className="about-link pw-social"
          title="About creators"
        >
          <FaArrowAltCircleRight />
        </Link>
      </footer>
    </div>
  );
};

export default Sidebar;
