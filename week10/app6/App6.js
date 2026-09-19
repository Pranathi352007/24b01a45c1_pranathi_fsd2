import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import App1 from "./App1";

function App6() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>

        <h1>React Router Example</h1>

        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "15px" }}>
            Home
          </Link>

          <Link to="/about" style={{ marginRight: "15px" }}>
            About
          </Link>

          <Link to="/contact" style={{ marginRight: "15px" }}>
            Contact
          </Link>

          <Link to="/App1">
            App1
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/App1" element={<App1 />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App6;