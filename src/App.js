import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faSearch,
  faUserFriends,
  faBell,
  faQuestionCircle,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";

import Navbar from "./components/fb-clone/navbar/Navbar";

function App() {
  library.add(
    fab,
    faSearch,
    faUserFriends,
    faBell,
    faQuestionCircle,
    faCaretDown
  );
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
