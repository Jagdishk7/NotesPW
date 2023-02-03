import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import AddNote from "./components/addNote/AddNote";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Error from "./components/Error/Error";
import Editnote from "./components/editNote/Editnote";
import About from "./components/About";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addnote" element={<AddNote />} />
        <Route path="/about" element={<About />} />
        <Route path="/note/:id" element={<Editnote />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};
export default App;
