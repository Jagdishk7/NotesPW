import React from "react";
import { FaEdit, FaRegCalendarAlt, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/context";
import "./Home.css";

const Note = ({ id, noteTitle, noteCategory, noteContent, createdAt }) => {
  const { dispatch } = GlobalContext();
  const noteTitleShrinker = (title) => {
    const noteTitleArr = title.split("");

    if (noteTitleArr.length > "14") {
      let titleShorter = noteTitleArr.slice(0, 15).join("");
      return titleShorter + "... ";
    } else {
      return title;
    }
  };

  const noteDescMaker = (content) => {
    const noteDescArr = content.split("");
    if (noteDescArr.length > "85") {
      let noteDesc = noteDescArr.slice(0, 85).join("");
      return noteDesc + "...";
    } else {
      return content;
    }
  };

  return (
    <div className="note card" title={`Title: ${noteTitle}`}>
      {/* ========== Note Card Start ========== */}
      <div className="note-img">
        {/* ========== Note Image Start ========== */}
        <div className="note-img-lines"></div>
        <div className="note-img-lines"></div>
        <div className="note-img-lines"></div>
        <div className="note-img-lines"></div>
        <div className="note-img-lines"></div>
        <div className="note-img-lines"></div>
        <div className="note-img-lines"></div>
        <div className="note-img-lines"></div>
        {/* ========== Note Image End ========== */}
      </div>
      <div className="note-about">
        {/* ========== Note About ========== */}
        <header className="row noteHeader">
          <div className="note-title">
            <strong>{noteTitleShrinker(noteTitle)}</strong>
          </div>
          <div className="note-category">
            <em>*{noteCategory}</em>
          </div>
        </header>
        <div className="note-description">{noteDescMaker(noteContent)}</div>
        <div className="row">
          {/* changed from btn to link so we can navigate to detail pages */}
          <div className="created-date">
            <FaRegCalendarAlt className="dateIcon" />
            <span className="date"> : {createdAt}</span>
          </div>
          <div className="formatting-buttons">
            <Link to={`/note/${id}`} className="select-btn action-btns">
              <FaEdit />
            </Link>
            <button
              className="deleteNote-btn action-btns"
              onClick={() => dispatch({ type: "DELETE_NOTE", payload: id })}
            >
              <FaTrash />
            </button>
          </div>
        </div>
        {/* ========== Note About End ========== */}
      </div>
    </div>
  );
};

export default Note;
