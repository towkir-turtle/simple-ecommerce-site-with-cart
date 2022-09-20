import React from "react";
import logo from "../../../images/Logo.svg";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={logo} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
