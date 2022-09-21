import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";

const Navbar = () => {
  return (
    <div>
      <div className="main">
        <p>The</p>
      </div>
      <h1 className="siren">Siren</h1>
      <div className="navbar">
        <Link to="/" className="navlink">
          Home
        </Link>
        <Link to="/category/Bollywood" className="navlink">
          Bollywood
        </Link>
        <Link to="/Technology" className="navlink">
          Technology
        </Link>
        <Link to="/Hollywood" className="navlink">
          Hollywood
        </Link>
        <Link to="/Tourism" className="navlink">
        Tourism
        </Link>
        <Link to="/Food" className="navlink">
          Food
        </Link>
        <Link to="/Fitness" className="navlink">
          Fitnesss
        </Link>
      </div>
      <hr />
    </div>
  );
};

export default Navbar