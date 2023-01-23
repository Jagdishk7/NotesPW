import React from 'react'
import Header from './components/header/Header';
import Home from './components/home/Home';
import "./App.css";


const App = () =>{
  return(
    <div className="container">
      <Header />
      <Home />
    </div>
  )
};
export default App;