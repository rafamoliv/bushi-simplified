import React from "react";
import { Link } from "react-router-dom";

// import styles and assets
import "./style.scss";
import logo from "~/assets/images/logo.svg";

// only shows Bushi logo
function Navbar() {
  return (
    <div className="contentNavbar">
      <Link to="/">
        <img className="logo" src={logo} alt="Bushi Legacy" aria-label="Bushi Legacy Logo" />
      </Link>
    </div>
  );
}

export default Navbar;
