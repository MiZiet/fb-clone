import React from "react";
import "./Language.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Language = () => {
  return (
    <div className="languageContainer">
      <div className="Links">
        <span className="activeLink" href="#!">
          English
        </span>
        <span>&bull;</span>
        <a href="#!">Polski</a>
        <span>&bull;</span>
        <a href="#!">Español</a>
        <span>&bull;</span>
        <a href="#!">Português</a>
        <span>&bull;</span>
        <a href="#!">ślōnskŏ gŏdka</a>
      </div>
      <div className="addButton">
        <i>
          <FontAwesomeIcon icon="plus" color="#285CBC" color="#29487d" />
        </i>
      </div>
    </div>
  );
};

export default Language;
