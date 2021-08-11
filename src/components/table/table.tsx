import React, { useEffect } from "react";

// import style and assets
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// redux
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { GetAnimesData } from '~/store/actions/actions';

// anime props
import { AnimeCardProps } from '~/types/animeCard'

// anime cards table
const Table = ({fetchAnimesData, animes}: AnimeCardProps) => {
  useEffect(()=> {
    fetchAnimesData(`?page[limit]=10&page[offset]=1`);
  }, [])

  function stars(rating: number) {
    if (rating <= 25) return "⋆";
    if (rating > 25 && rating <= 50) return "⋆⋆";
    if (rating > 50 && rating <= 75) return "⋆⋆⋆";
    if (rating > 75 && rating <= 90) return "⋆⋆⋆⋆";
    if (rating > 90) return "⋆⋆⋆⋆⋆";

    return "";
  }

  return (
    <div className="tableContent" id="animeSection">
      <div className="tableTitle">
        <FontAwesomeIcon icon="infinity" style={{ color: "FE9800" }} size="2x" aria-label="Infinity image" />
        <p>Veja Animes</p>
      </div>

      {animes.map((data: any) => {
          return (
            <Link key={data.id} to={{ 
              pathname: '/anime', 
              state: {
                animeDetails: { 
                  title: data.attributes.canonicalTitle,
                  synopsis: data.attributes.synopsis,
                  poster: data.attributes.posterImage.small,
                  rating: data.attributes.averageRating,
                  popularity: data.attributes.popularityRank,
                  ageRatingGuide: data.attributes.ageRatingGuide,
                  showType: data.attributes.showType,
                  episodeCount: data.attributes.episodeCount,
                  episodeLenght: data.attributes.episodeLenght
              }
            }}}>
              <div className="tableCard" key={data.id}>
                <div className="animeBoard">
                  <div className="animeGrid">
                    <img className="imageCard" alt="imagem do anime" src={data.attributes.posterImage.small} />
                    <p className="animeName">Nome: {data.attributes.canonicalTitle}</p>
                  </div>

                  <div className="animeGrid">
                    <div className="animeDescriptions">
                      <span className="animeDetails">Episódios: {data.attributes.episodeCount}</span>
                      <span className="animeDetails">Estrelas: {stars(data.attributes.averageRating)}</span>
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
};

// mapState
const mapStateToProps = (state: any) => {
  return {
      animes: state.animesListSuccess,
  };
};

// mapDispatch
const mapDispatchToProps = (dispatch: any) => {

  return {
      fetchAnimesData: (url: string) => dispatch(GetAnimesData(url))
  };
};

// export connect
export default connect(mapStateToProps, mapDispatchToProps)(Table);
