import React from "react";
import Header from "./components/header/Header";
import "./App.css";
import Home from "./components/home/Home";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Home />
    </div>
  );
};
export default App;
