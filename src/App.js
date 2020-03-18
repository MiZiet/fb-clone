import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faSearch,
  faUserFriends,
  faBell,
  faQuestionCircle,
  faCaretDown,
  faNewspaper,
  faDesktop,
  faStore,
  faEllipsisH,
  faImage,
  faUserTag,
  faGrin,
  faPlus,
  faUsers,
  faFlag,
  faCalendarAlt,
  faCoins,
  faTag,
  faThumbsUp,
  faComment,
  faShare
} from "@fortawesome/free-solid-svg-icons";

import Navbar from "./components/fb-clone/layout/Navbar";
import ProfileMenu from "./components/fb-clone/layout/ProfileMenu";
import ContentList from "./components/fb-clone/layout/ContentList";
import RightMenu from "./components/fb-clone/layout/RightMenu";

function App() {
  library.add(
    fab,
    faSearch,
    faUserFriends,
    faBell,
    faQuestionCircle,
    faCaretDown,
    faNewspaper,
    faDesktop,
    faStore,
    faEllipsisH,
    faImage,
    faUserTag,
    faGrin,
    faPlus,
    faUsers,
    faFlag,
    faCalendarAlt,
    faCoins,
    faTag,
    faThumbsUp,
    faComment,
    faShare
  );
  return (
    <div className="App">
      <Navbar />
      <div className="mainContent">
        <span className="smDispNone">
          <ProfileMenu />
        </span>
        <ContentList />
        <span className="smDispNone">
          <RightMenu />
        </span>
      </div>
    </div>
  );
}

export default App;
