import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/css/font/stylesheet.css";
import "../src/css/stylesheet.css";
import "../src/css/Footer.css";
import "../src/css/Responsive.css";
import { Heart } from "./Heart";

function App() {
  return (
    <>
      <Router basename="/thyroid-checkup">
        <Routes>
          <Route exact path="/" element={<Heart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
