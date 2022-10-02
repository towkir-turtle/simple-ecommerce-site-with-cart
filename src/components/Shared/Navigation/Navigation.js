import React from "react";
import { Link } from "react-router-dom";
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
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="shop">
            Shop
          </Link>
        </li>
        <li>
          <Link className="link" to="orders">
            Orders
          </Link>
        </li>
        <li>
          <Link className="link" to="inventory">
            Inventory
          </Link>
        </li>
        <li>
          <Link className="link" to="contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
