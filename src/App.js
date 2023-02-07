import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import AddNote from "./pages/AddNote";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Error from "./components/Error";
import Editnote from "./pages/Editnote";
import About from "./pages/About";

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
