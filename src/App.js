import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Slots from "./pages/Slots";

function App() {
  return (
    <Router>
      <div>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
          <Link to="/slots">Slots</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/slots" element={<Slots />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
