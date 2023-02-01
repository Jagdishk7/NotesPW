import React from "react";
import Note from "./Note";
import "./Home.css";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { GlobalContext } from "../../context/context";
import { FaBars, FaPlus } from "react-icons/fa";

const Home = () => {
  // bringing all required states from context.
  const { state, dispatch } = GlobalContext();
  const { noteList, isSidebarOpen, filteredNotes } = state;

  // displaying all the notes dynamically from localstorage
  const notes = noteList.map((note) => {
    const { id } = note;
    return <Note key={id} {...note} />;
  });

  const filtered = filteredNotes.map((note) => {
    const { id } = note;
    return <Note key={id} {...note} />;
  });

  return (
    <>
      {/* Hamburger icon to toggle sidebar */}
      {!isSidebarOpen && (
        <button
          className={`ham-btn`}
          onClick={() => dispatch({ type: "OPEN_SIDEBAR" })}
        >
          <FaBars />
        </button>
      )}
      <Sidebar />
      <div
        className={`${
          !isSidebarOpen
            ? "home-container home-container-closed-sidebar"
            : "home-container"
        }`}
      >
        <header className="home-header">
          {
            <button
              className="sm-ham"
              onClick={() => dispatch({ type: "OPEN_SIDEBAR" })}
            >
              <FaBars />
            </button>
          }
          <h1 className="home-title">Welcome User...</h1>
        </header>
        <div className="home-content">
          {/* ===========
            Add note btn
          ============ */}
          <Link to="/addnote" className="new-note card" title="Add a new note">
            {/* I've removed every icons which was imported using cdn because in a random utube video I heared that cdn gets problematic in production */}
            <FaPlus />
          </Link>
          {/* reversed the note array so new note will be displayed first. */}
          {filteredNotes.length < 1 ? notes.reverse() : filtered.reverse()}
        </div>
      </div>
    </>
  );
};

export default Home;
