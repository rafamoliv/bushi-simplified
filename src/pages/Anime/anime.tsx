import React from "react";

// import components
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import TableAnimeDetails from "~/components/animeDetails";

// use storage;
import { useHistory } from 'react-router-dom'

// anime details page
function Anime({ location }: any) {
  const history = useHistory()
  if(!location.state) history.push('/')

  const animeState = location.state.animeDetails;

  return (
    <div className="animeContent">
      <Navbar />
        <TableAnimeDetails 
            title={animeState.title} 
            synopsis={animeState.synopsis} 
            poster={animeState.poster} 
            rating={animeState.rating} 
            popularity={animeState.popularity} 
            ageRatingGuide={animeState.ageRatingGuide} 
            showType={animeState.showType}
            episodeCount={animeState.episodeCount}
            />
      <Footer />
    </div>
  );
}

export default Anime;
