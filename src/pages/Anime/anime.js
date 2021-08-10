import React from "react";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import narutin from "~/assets/images/narutin.png";
import "./style.scss";

function Anime() {
  return (
    <div className="animeContent">
      <Navbar />
      <div className="animeSectionDetails">
        <div className="animeHeader">
          <div className="animeImageDiv">
            <img src={narutin} />
          </div>

          <div className="animeInformation">
            <p>Nome do anime: Naruto</p>
            <p>Sinopse:</p>
            <span>
              <br />
              oioa sh f kdjshfak jdhfa kjshdfkajsdhfkajdaj dkajshddakljdflkadjflkasdjflkasdjflka dfkjasdlfkjasl doasjdalkjdlakdjflkajsdflkajsdf
              dlkjalkdjfaldjfalskd daskjdalksjlkjkdasçdlaksldasjdlakjldas dlkjdalskdjalsjdkalskj
            </span>
          </div>
        </div>
        <div className="animeOtherInformation">
          <p>Outras informações da API</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Anime;
