import React from "react";
import { useEffect } from "react";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/context";
import "./addNote.css";

const AddNote = () => {
  // imported required states and function from context
  const { state, dispatch } = GlobalContext();

  const { writing, titleValue, categValue, contentValue, date } = state;

  // It shows all the header and background when the mouse moves
  useEffect(() => {
    const setPageBack = () => dispatch({ type: "FILL_PAGE" });
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
        <Link
          to="/"
          className="btn"
          onClick={() => dispatch({ type: "SAVE_NOTE", payload: date })}
        >
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
            onChange={(e) => (
              dispatch({ type: "CLEAR_PAGE" }),
              dispatch({ type: "SET_TITLE_VALUE", payload: e.target.value })
            )}
            value={titleValue}
          />
          <input
            type="text"
            className={`${
              writing ? "noteCategory inps inps-writing" : "noteCategory inps "
            }`}
            name="noteCategory"
            placeholder="Enter category"
            onChange={(e) => (
              dispatch({ type: "CLEAR_PAGE" }),
              dispatch({ type: "SET_CATEG_VALUE", payload: e.target.value })
            )}
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
            onChange={(e) => (
              dispatch({ type: "CLEAR_PAGE" }),
              dispatch({ type: "SET_CONTENT_VALUE", payload: e.target.value })
            )}
            value={contentValue}
          ></textarea>
        </div>
      </div>
    </section>
  );
};

export default AddNote;
