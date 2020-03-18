import React from "react";
import Language from "../rightMenuContent/Language";
import Options from "../rightMenuContent/Options";

const RightMenu = () => {
  return (
    <div
      style={{ position: "fixed", top: "1.5rem", left: "calc(250px + 50vw)" }}
    >
      <Language />
      <Options />
    </div>
  );
};

export default RightMenu;
