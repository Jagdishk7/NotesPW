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
  const { sidebarOpen, closeSidebar } = GlobalContext();
  // const [openSidebar, setOpenSidebar] = useState(true);

  // const closeSidebar = () => {
  //   setOpenSidebar(!openSidebar);
  // };

  return (
    <div className={`${sidebarOpen ? "sidebar" : "sidebar close-sidebar"}`}>
      <section className="main-content">
        <header className="sidebar-header">
          <h2 className="sidebar-heading">Categories</h2>
          <span className="closeNavbar-btn" onClick={closeSidebar}>
            <FaTimes />
          </span>
        </header>
        {/* list items will be added dynamically */}
        <ul className="category-list">
          <li>Category</li>
          <li>Category</li>
          <li>Category</li>
          <li>Category</li>
        </ul>
      </section>
      {/* social media links */}
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
