import "./error.css";
import React from "react";
import { Link } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";

const Error = () => {
  return (
    <div className="errorContainer">
      <h2 className="errorMessage">404! Page not found.</h2>
      <Link to="/" className="btn errPgBtn">
        <FaArrowLeft />
        Back Home
      </Link>
    </div>
  );
};

export default Error;
