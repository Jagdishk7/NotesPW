import React from "react";
import { FaBars } from "react-icons/fa";
import { GlobalContext } from "../../context/context";
import Sidebar from "../Sidebar/Sidebar";
import "./Home.css";

const Home = () => {
  const { openSidebar, sidebarOpen } = GlobalContext();
  return (
    <div className="main">
      {!sidebarOpen && (
        <button className={`ham-btn`} onClick={openSidebar}>
          <FaBars />
        </button>
      )}
      <Sidebar />
    </div>
  );
};

export default Home;
