import React from "react";
import "./Home.css";

const Note = () => {
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
          <div className="note-title">Note title</div>
          <div className="note-category">*Category</div>
        </div>
        <div className="note-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
          voluptates!
        </div>
        <div className="row">
          <button>Select</button>
          <i class="uil uil-trash-alt delete-icon"></i>
        </div>
        {/* ========== Note About End ========== */}
      </div>
    </div>
  );
};

export default Note;
