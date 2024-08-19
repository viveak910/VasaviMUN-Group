import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" activeClassName="active">
          Register
        </NavLink>
      </li>
      <li>
        <NavLink to="/bus-routes" activeClassName="active">
          Bus Routes
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
