import React from "react";
import "./style.scss";
import logo from "~/assets/images/logo.svg";

function Navbar() {
  return (
    <div className="content">
      <img className="logo" src={logo} alt="Bushi Legacy" />
    </div>
  );
}

export default Navbar;
