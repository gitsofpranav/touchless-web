import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Slots from "./pages/Slots";
import About from "./pages/About";
import DemoGestures from "./pages/DemoGestures";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation Bar */}
        <nav className="navbar">
          <h2>Touchless Web</h2>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/slots">Slots</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/demo">Demo Gestures</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/slots" element={<Slots />} />
          <Route path="/about" element={<About />} />
          <Route path="/demo" element={<DemoGestures />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
