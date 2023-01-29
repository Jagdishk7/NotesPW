import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Home.css";

const Note = ({ id, noteTitle, noteCategory, noteContent, deleteNote }) => {
  // console.log(noteContent.length);

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
    <div className="note card">
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
        <div className="row">
          <div className="note-title">
            <strong>{noteTitle}</strong>
          </div>
          <div className="note-category">
            <em>*{noteCategory}</em>
          </div>
        </div>
        <div className="note-description">{noteDescMaker(noteContent)}</div>
        <div className="row">
          {/* changed from btn to link so we can navigate to detail pages */}
          <Link className="select-btn">Select</Link>
          <button className="deleteNote-btn" onClick={() => deleteNote(id)}>
            <FaTrash />
          </button>
        </div>
        {/* ========== Note About End ========== */}
      </div>
    </div>
  );
};

export default Note;
