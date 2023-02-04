import React from "react";
import { FaEdit, FaRegCalendarAlt, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/context";

const Note = ({ id, noteTitle, noteCategory, noteContent, createdAt }) => {
  const { dispatch } = GlobalContext();

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
            {/* <strong>{noteTitleShrinker(noteTitle)}</strong> */}
            <strong>
              {noteTitle.length > "14"
                ? noteTitle.split("").slice(0, 14).join("").trim() + "..."
                : noteTitle}
            </strong>
          </div>
          <div className="note-category">
            <em>
              *
              {noteCategory.length > "10"
                ? noteCategory.split("").slice(0, 10).join("").trim() + "..."
                : noteCategory}
            </em>
          </div>
        </header>
        <div className="note-description">
          {noteContent.length > "85"
            ? noteContent.split("").slice(0, 85).join("").trim() + "..."
            : noteContent}
        </div>
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
