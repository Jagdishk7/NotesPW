import React from "react";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./addNote.css";

const AddNote = () => {
  return (
    <section className="addNote-container">
      {/* buttons */}
      <div className="buttons">
        <Link to="/" className="btn">
          <FaArrowLeft />
          Back
        </Link>
        <Link to="" className="btn">
          <FaSave />
          Save
        </Link>
      </div>

      {/* input section */}
      <div className="input-section">
        <div className="heading">
          <input
            type="text"
            className="noteTitle inps"
            name="noteTitle"
            placeholder="Enter title"
          />
          <input
            type="text"
            className="noteCategory inps"
            name="noteCategory"
            placeholder="Enter category"
          />
        </div>
        <div className="content">
          <textarea
            name="noteContent"
            className="noteContent"
            placeholder="Your note..."
            id="noteContent"
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
    </section>
  );
};

export default AddNote;
