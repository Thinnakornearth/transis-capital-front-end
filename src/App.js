import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Pages/Home'
import LaunchApp from './components/Pages/Trade'


function App() {
  return (
    <div className="app">
    <Router>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LaunchApp" element={<LaunchApp/>} />
        </Routes>
    </Router>
    </div>
  )
}

export default App;