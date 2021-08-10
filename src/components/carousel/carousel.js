import React from "react";

// import style and assets
import "./style.scss";
import logo from "~/assets/images/logoWhite.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// main banner and introduction of the site
function Carousel() {
  return (
    <div className="contentCarousel">
      <img className="logoBanner" src={logo} alt="Logo Bushi" aria-label="Character of an anime holding his sword" />
      <p className="bannerCaption">
        monitore os seus animes
        <br />
        preferidos, e não perca mais
        <br />
        nenhum episódio
      </p>

      <a href="#animeSection">
        {/* I couldn't use arrow-down-longer 'cause it was a pro icon with no access :( */}
        <FontAwesomeIcon icon="arrow-down" style={{ color: "#FED500" }} size="2x" className="iconPosition" aria-label="Arrow pointing down" />
      </a>
    </div>
  );
}

export default Carousel;
