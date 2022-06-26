import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Styles
// import "./App.css";

// Components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
