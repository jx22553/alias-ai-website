import React from "react";
import { NavLink } from "react-router-dom";
import "../pages/style.css"; // Correct relative path to style.css

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/download" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Download</NavLink>
        </li>
        <li>
          <NavLink to="/installation" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Set Up</NavLink>
        </li>
        <li>
          <NavLink to="/faq" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>FAQ</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
