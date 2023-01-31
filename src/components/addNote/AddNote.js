import React from "react";
import { useEffect } from "react";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/context";
import "./addNote.css";

const AddNote = () => {
  // imported required states and function from context
  const {
    writing,
    setWriting,
    clearPage,
    titleValue,
    categValue,
    contentValue,
    setTitleValue,
    setCategValue,
    setContentValue,
    saveNote,
  } = GlobalContext();

  // It shows all the header and background when the mouse moves
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
      {/* Double classes are used. When user type everything disappears and come back when the mouse moves from its position */}
      {/* buttons. used links to navigate also */}
      <div className={`${writing ? "buttons buttons-hidden" : "buttons "}`}>
        {/* back button */}
        <Link to="/" className="btn">
          <FaArrowLeft />
          Back
        </Link>

        {/* save button */}
        <Link to="/" className="btn" onClick={saveNote}>
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
            onChange={(e) => (clearPage(), setTitleValue(e.target.value))}
            value={titleValue}
          />
          <input
            type="text"
            className={`${
              writing ? "noteCategory inps inps-writing" : "noteCategory inps "
            }`}
            name="noteCategory"
            placeholder="Enter category"
            onChange={(e) => (clearPage(), setCategValue(e.target.value))}
            value={categValue}
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
            onChange={(e) => (clearPage(), setContentValue(e.target.value))}
            value={contentValue}
          ></textarea>
        </div>
      </div>
    </section>
  );
};

export default AddNote;
