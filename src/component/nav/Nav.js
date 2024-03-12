import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>{" "}
        {/* If using React Router */}
        <li>
          <Link to="/about">About</Link>
        </li>{" "}
        {/* If using React Router */}
        {/* Add more navigation items as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
