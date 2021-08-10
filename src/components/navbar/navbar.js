import React from "react";

// import styles and assets
import "./style.scss";
import logo from "~/assets/images/logo.svg";

// only shows Bushi logo
function Navbar() {
  return (
    <div className="contentNavbar">
      <a href="#">
        <img className="logo" src={logo} alt="Bushi Legacy" aria-label="Bushi Legacy Logo" />
      </a>
    </div>
  );
}

export default Navbar;
