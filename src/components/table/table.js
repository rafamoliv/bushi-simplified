import React, { useEffect } from "react";

// import style and assets
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imageExample from "~/assets/images/imageExample.png";

// redux
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { GetAnimesList } from "~/store/actions/actions";
import { Link } from "react-router-dom";

function Table({ data }) {
  const dispatch = useDispatch();
  const animes = useSelector((state) => state.animesListReducer.animes);

  function stars(rating) {
    if (rating <= 25) return "*";
    if (rating > 25 && rating <= 50) return "**";
    if (rating > 50 && rating <= 75) return "***";
    if (rating > 75 && rating <= 90) return "****";
    if (rating > 90) return "*****";

    return "";
  }

  useEffect(() => {
    GetAnimesList(dispatch);
  }, []);

  return (
    <div className="tableContent" id="animeSection">
      <div className="tableTitle">
        <FontAwesomeIcon icon="infinity" style={{ color: "FE9800" }} size="2x" aria-label="Infinity image" />
        <p>Veja Animes</p>
      </div>

      {animes &&
        animes.map(({ item }) => {
          return (
            <Link to="/animes">
              <div className="tableCard" key={item.id}>
                <div className="animeBoard">
                  <div className="animeGrid">
                    <img className="imageCard" alt="imagem do anime" src={item.attributes.coverImage} />
                    <p className="animeName">Nome: {item.attributes.canonicalTitle}</p>
                  </div>

                  <div className="animeGrid">
                    <div className="animeDescriptions">
                      <span className="animeDetails">Episódios: {item.attributes.episodeCount}</span>
                      <span className="animeDetails">Estrelas: {stars(item.attributes.averageRating)}</span>
                    </div>
                  </div>

                  <div className="animeGrid">
                    <FontAwesomeIcon icon="caret-right" style={{ color: "494949" }} size="2x" aria-label="Arrow pointing to the right, indicating click" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default Table;
