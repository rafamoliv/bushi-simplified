import React from "react";

// import style and assets
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// group with three concepts
function Group() {
  return (
    <div className="contentGroup">
      <p className="groupCaption">O que fazer por aqui?</p>

      <div className="gridLayout">
        <div className="groupLabel">
          {/* I couldn't use correct fire 'cause it was a pro icon with no access :( */}
          <FontAwesomeIcon icon="fire" style={{ color: "#C64750" }} size="4x" aria-label="Fire image" />
          <div className="alignLabelInfo">
            <span className="titleLabel">Os Melhores</span><br/>
            <span className="textLabel">Veja o que esta pegando fogo, no mundo dos animes. Os animes mais bem avaliados pela galera!</span>
          </div>
        </div>

        <div className="groupLabel">
          <FontAwesomeIcon icon="infinity" style={{ color: "FE9800" }} size="4x" aria-label="Infinity image" />
          <div className="alignLabelInfo">
            <span className="titleLabel">Informações</span><br/>
            <span className="textLabel">Procure informações dos seus animes preferidos.</span>
          </div>
        </div>

        <div className="groupLabel">
          <FontAwesomeIcon icon="dragon" style={{ color: "#000" }} size="4x" aria-label="A Dragon" />
          <div className="alignLabelInfo">
            <span className="titleLabel">Sua Lista</span><br/>
            <span className="textLabel">Comece agora mesmo a montar sua lista de animes preferidos, e seja notificado quando um episódio novo for ao ar!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group;
