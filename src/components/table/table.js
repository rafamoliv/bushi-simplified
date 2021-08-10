import React from "react";

// import style and assets
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imageExample from "~/assets/images/imageExample.png";

function Table() {
  return (
    <div className="tableContent" id="animeSection">
      <div className="tableTitle">
        <FontAwesomeIcon icon="infinity" style={{ color: "FE9800" }} size="2x" aria-label="Infinity image" />
        <p>Veja Animes</p>
      </div>

      <div className="tableCard">
        <div className="animeBoard">
          <div className="animeGrid">
            <img className="imageCard" alt="imagem do anime" src={imageExample} />
            <p className="animeName">Nome: Anime teste weeeee</p>
          </div>

          <div className="animeGrid">
            <div className="animeDescriptions">
              <span className="animeDetails">Episódios: 12</span>
              <span className="animeDetails">Estrelas: **</span>
            </div>
          </div>

          <div className="animeGrid">
            <FontAwesomeIcon icon="caret-right" style={{ color: "494949" }} size="2x" aria-label="Arrow pointing to the right, indicating click" />
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Table;
