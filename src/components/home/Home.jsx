import React from "react";
import Note from "./Note";
import "./Home.css";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { GlobalContext } from "../../context/context";
import { FaBars, FaPlus } from "react-icons/fa";

const Home = () => {
  // bringing all required states from context.
  const { openSidebar, sidebarOpen, noteList, deleteNote } = GlobalContext();

  // displaying all the notes dynamically from localstorage
  const notes = noteList.map((note) => {
    const { id } = note;
    return <Note key={id} {...note} deleteNote={deleteNote} />;
  });

  return (
    <>
      {/* Hamburger icon to toggle sidebar */}
      {!sidebarOpen && (
        <button className={`ham-btn`} onClick={openSidebar}>
          <FaBars />
        </button>
      )}
      <Sidebar />
      <div
        className={`${
          // this class is given so when sidebar is closed the content comes in center
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
            {/* I've removed every icons which was imported using cdn because in a random utube video I heared that cdn gets problematic in production */}
            <FaPlus />
          </Link>
          {/* reversed the note array so new note will be displayed first. */}
          {notes.reverse()}
        </div>
      </div>
    </>
  );
};

export default Home;
