import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProfileMenu.css";
import profilePic from "../../../img/default-avatar.png";

const ProfileMenu = () => {
  return (
    <div className="menuContainer">
      <div className="profile">
        <img src={profilePic} alt="Profile Pic" />
        <span>Michał</span>
        <FontAwesomeIcon className="ellipsis" icon="ellipsis-h" />
      </div>
      <div className="menuOptions">
        <div className="menuList active">
          <FontAwesomeIcon
            className="menuListIcon"
            icon="newspaper"
            color="#285CBC"
          />
          <span>News Feed</span>
          <FontAwesomeIcon className="ellipsisVisible" icon="ellipsis-h" />
        </div>
        <div className="menuList">
          <FontAwesomeIcon
            className="menuListIcon"
            icon={["fab", "facebook-messenger"]}
            color="#285CBC"
          />
          <span>Messenger</span>
        </div>
        <div className="menuList">
          <FontAwesomeIcon
            className="menuListIcon"
            icon="desktop"
            color="#285CBC"
          />
          <span>Watch</span>
        </div>
        <div className="menuList">
          <FontAwesomeIcon
            className="menuListIcon"
            icon="store"
            color="#52BAA6"
          />
          <span>Marketplace</span>
        </div>
      </div>
      <div className="menuExplore">
        <div className="explore">Explore</div>
        <div className="menuList">
          <FontAwesomeIcon
            className="menuListIcon"
            icon="users"
            color="#3D8AFD"
          />
          <span>Groups</span>
        </div>
        <div className="menuList">
          <FontAwesomeIcon
            className="menuListIcon"
            icon="flag"
            color="#F9A15B"
          />
          <span>Pages</span>
        </div>
        <div className="menuList">
          <FontAwesomeIcon
            className="menuListIcon"
            icon="calendar-alt"
            color="#EE2150"
          />
          <span>Events</span>
        </div>
        <div className="menuList">
          <FontAwesomeIcon
            className="menuListIcon"
            icon="coins"
            color="#FDD972"
          />
          <span>Fundraisers</span>
        </div>
        <div className="menuList">
          <FontAwesomeIcon className="menuListIcon" icon="tag" color="grey" />
          <span>Buy and Sell Groups</span>
        </div>
        <div className="menuList">
          <FontAwesomeIcon
            className="menuListIcon"
            icon="caret-down"
            color="grey"
          />
          <span>See More</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
