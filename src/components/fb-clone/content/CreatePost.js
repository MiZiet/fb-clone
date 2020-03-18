import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profilePic from "../../../img/default-avatar.png";
import "./CreatePost.css";

const CreatePost = () => {
  return (
    <div className="createPostContainer">
      <div className="title">Create Post</div>
      <div className="inputField">
        <img src={profilePic} alt="Profile Pic" />
        <span>What's on your mind, Michał?</span>
      </div>
      <div className="addons">
        <div className="addon">
          <FontAwesomeIcon icon="image" color="#285CBC" />{" "}
          <span>Photo/Video</span>
        </div>
        <div className="addon invisAtQuery">
          <FontAwesomeIcon icon="user-tag" color="#285CBC" />{" "}
          <span>Tag Friends</span>
        </div>
        <div className="addon invisAtQuery">
          <FontAwesomeIcon icon="grin" color=" #ffeb3b" />{" "}
          <span>Feeling/Activ...</span>
        </div>
        <div className="addon ">
          <FontAwesomeIcon icon="ellipsis-h" color="#90949C" />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
