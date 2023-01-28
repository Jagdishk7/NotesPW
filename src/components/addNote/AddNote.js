import React from "react";
import { useEffect } from "react";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/context";
import "./addNote.css";

const AddNote = () => {
  const { writing, setWriting, clearPage } = GlobalContext();
  useEffect(() => {
    const setPageBack = () => {
      setWriting(false);
    };
    window.addEventListener("mousemove", setPageBack);

    return () => {
      window.removeEventListener("mousemove", setPageBack);
    };
  });

  return (
    <section className="addNote-container">
      {/* buttons */}
      <div className={`${writing ? "buttons buttons-hidden" : "buttons "}`}>
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
      <div
        className={`${
          writing ? "input-section input-section-transparent" : "input-section "
        }`}
      >
        <div className="heading">
          <input
            type="text"
            className={`${
              writing ? "noteTitle inps inps-writing" : "noteTitle inps "
            }`}
            name="noteTitle"
            placeholder="Enter title"
            onChange={clearPage}
          />
          <input
            type="text"
            className={`${
              writing ? "noteCategory inps inps-writing" : "noteCategory inps "
            }`}
            name="noteCategory"
            placeholder="Enter category"
            onChange={clearPage}
          />
        </div>
        <div className="content">
          <textarea
            name="noteContent"
            className={`${
              writing ? "noteContent noteContent-writing" : "noteContent "
            }`}
            placeholder="Your note..."
            id="noteContent"
            onChange={clearPage}
          ></textarea>
        </div>
      </div>
    </section>
  );
};

export default AddNote;
