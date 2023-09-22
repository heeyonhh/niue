import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import { Nav } from "./components/data";
import Home from "./route/Home";
import About from "./route/About";
import Booking from "./route/Booking";
import Collection from "./route/Collection";
import Contact from "./route/Contact";

function App() {
  return (
    <div className="app">
      <Link to="/" className="logo">niuekeem</Link>
      <div className="tokakao"></div>
      <nav className="nav">
        {Nav.map((nav, i) => (
          <Link key={i} className="menu" to={nav.id}>
            {nav.title}
          </Link>
        ))}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Booking />} />
        <Route path="/booking" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
