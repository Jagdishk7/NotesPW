import React from "react";
import Note from "./Note";
import "./Home.css";

const Home = () => {
  return (
      <div className="home-container">
        <h1 className="home-title">Welcome User...</h1>
        <div className="home-content">
          <div className="new-note card">
            <i className="uil uil-plus"></i>
          </div>
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
        </div>
      </div>
  );
};

export default Home;
