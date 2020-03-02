import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profilePic from "../../../img/default-avatar.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="navDiv1">
        <i className="fbIcon">
          <FontAwesomeIcon icon={["fab", "facebook-square"]} />
        </i>
        <form>
          <input placeholder="Search" type="text"></input>
          <button>
            <i>
              <FontAwesomeIcon icon="search" />
            </i>
          </button>
        </form>
      </div>
      <div className="navDiv2">
        <div className="linkWrapPic">
          <a href="#!">
            <img src={profilePic} alt="Profile Pic" /> <span>Michał</span>
          </a>
        </div>
        <div className="linkWrap">
          <a>Home</a>
        </div>
        <div className="linkWrap">
          <a>Find Friends</a>
        </div>
        <div className="linkWrap">
          <a>Create</a>
        </div>
      </div>
      <div className="navDiv3">
        <i>
          <FontAwesomeIcon icon="user-friends" />
        </i>
        <i>
          <FontAwesomeIcon icon={["fab", "facebook-messenger"]} />
        </i>
        <i>
          <FontAwesomeIcon icon="bell" />
        </i>
      </div>
      <div className="navDiv4">
        <i>
          <FontAwesomeIcon icon="question-circle" />
        </i>
        <i>
          <FontAwesomeIcon icon="caret-down" size="lg" />
        </i>
      </div>
    </div>
  );
};

export default Navbar;
