import React from "react";
import { useEffect } from "react";
import "./alert.css";

const Alert = ({ alertMsg, alertBg, closeAlert }) => {
  useEffect(() => {
    setTimeout(() => {
      closeAlert();
    }, 2000);
  });

  return (
    <div style={{ backgroundColor: alertBg }} className="alert-box">
      {alertMsg}
    </div>
  );
};

export default Alert;
