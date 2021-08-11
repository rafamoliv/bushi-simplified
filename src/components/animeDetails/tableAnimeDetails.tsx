import "./style.scss";
import { animeDetailsProps } from '~/types/animeDetails'

// anime details
function TableAnimeDetails({ title, synopsis, poster, rating, popularity, ageRatingGuide, showType, episodeCount }: animeDetailsProps) {
  return (
      <div className="animeSectionDetails">
        <div className="animeHeader">
          <div className="animeImageDiv">
            <img src={poster} aria-label="Anime poster" />
          </div>

          <div className="animeInformation">
            <p>Nome do anime: {title}</p>
            <p>Sinopse:</p>
            <span>
              <br />
              {synopsis}
            </span>
          </div>
        </div>
        <div className="animeOtherInformation">
          <p>Outras informações da API</p>
          
          <div className="animeOtherInformationDetail">
            <span>IMDB Rating: {rating}</span>
            <span>Popularidade: {popularity}º</span>
            <span>Show: {showType}</span>
            <span>Quantidade de episódios: {episodeCount}</span>
            <span>Classificação etária: {ageRatingGuide}</span>
          </div>
        </div>
      </div>
  );
}

export default TableAnimeDetails;