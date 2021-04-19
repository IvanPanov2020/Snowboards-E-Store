import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo/1.jpg";
import logoUser from "../logo/3.png";
import logoCart from "../logo/2.png";
import "../App.css";

export default class Navbar extends Component {
  render() {
    const logedInUser = localStorage.getItem("USER");
    const user = logedInUser ? JSON.parse(logedInUser) : null;
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark  text-dark px-sm5 ">
        <Link to="/">
          <img src={logo} alt="store" height="90px" />
        </Link>
        <h2 className="text-white">The Mountains Are Calling And I Must Go</h2>
        <Link to="/cart" className="ml-auto nav-btn">
          <img src={logoCart} className="nav-btn" />
        </Link>
        {user ? (
          <Link to="/singin" className="nav-btn last-item">
            <img src={logoUser} />
            <span className="nav-text">{user.name}</span>
          </Link>
        ) : (
          <Link to="/singin" className="nav-btn last-item">
            <img src={logoUser} />
            <span className="nav-text">Sing In</span>
          </Link>
        )}
      </nav>
    );
  }
}
