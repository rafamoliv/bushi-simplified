import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

// import styles and assets
import "./style.scss";
import logo from "~/assets/images/logo.svg";

// only shows Bushi logo
export default function Navbar() {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const windowScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = (windowScroll / height) * 100

    setScrollTop(scrolled)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="contentNavbar">
      <div className="progressMainWrapper">
        <div className="progressMainStyle" style={{width: `${scrollTop}%`}}></div>
      </div>
      <Link to="/">
        <img className="logo" src={logo} alt="Bushi Legacy" aria-label="Bushi Legacy Logo" />
      </Link>
    </div>
  );
}
