import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Stories.css";
import profilePic from "../../../img/default-avatar.png";

const StoryContent = props => (
  <div className="storiesContent">
    <img src={props.pic} alt="Profile Pic" />
    <strong className="contentTitle">{props.content}</strong>
    <div className="contentLogo">{props.logo}</div>
  </div>
);

const Stories = () => {
  const [content, setContent] = useState([
    {
      pic: profilePic,
      content: "Add to Story",
      logo: (
        <i>
          <FontAwesomeIcon icon="plus" color="#285CBC" color="#306CCE" />
        </i>
      )
    },
    {
      pic:
        "https://upload.wikimedia.org/wikipedia/commons/d/d8/Colosseum_in_Rome-April_2007-1-_copie_2B.jpg",
      content: "Jan Kowalski",
      logo: <img src={profilePic} alt="Profile Pic2" />
    },
    {
      pic: "https://altao.pl/foto_hd/1114/A/fot_065_A79.jpg",
      content: "Tom Cruise",
      logo: <img src={profilePic} alt="Profile Pic3" />
    },
    {
      pic:
        "https://www.podrozezklasa.pl/media/k2/items/cache/d4ae67bb81032f6add66be1c1df07be9_XL.jpg",
      content: "Imię Nazwisko",
      logo: <img src={profilePic} alt="Profile Pic4" />
    }
  ]);

  const createContent = () => {
    return content.map((contentProps, index) => {
      return (
        <StoryContent
          pic={contentProps.pic}
          content={contentProps.content}
          logo={contentProps.logo}
          key={index}
        />
      );
    });
  };
  return (
    <div className=" storiesContainer">
      <h1>Stories</h1>
      <a href="#!">See All</a>
      <div className="storiesContentContainer">{createContent()}</div>
    </div>
  );
};

export default Stories;
