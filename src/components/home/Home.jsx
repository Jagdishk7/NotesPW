import React from "react";
import Note from "./Note";
import "./Home.css";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { GlobalContext } from "../../context/context";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const { openSidebar, sidebarOpen } = GlobalContext();

  return (
    <>
      {!sidebarOpen && (
        <button className={`ham-btn`} onClick={openSidebar}>
          <FaBars />
        </button>
      )}
      <Sidebar />
      <div
        className={`${
          !sidebarOpen
            ? "home-container home-container-closed-sidebar"
            : "home-container"
        }`}
      >
        <header className="home-header">
          {
            <button className="sm-ham" onClick={openSidebar}>
              <FaBars />
            </button>
          }
          <h1 className="home-title">Welcome User...</h1>
        </header>
        <div className="home-content">
          {/* ===========
            Add note btn
          ============ */}
          <Link to="/addnote" className="new-note card">
            <i className="uil uil-plus"></i>
          </Link>
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
        </div>
      </div>
    </>
  );
};

export default Home;
