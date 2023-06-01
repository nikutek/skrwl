import React from "react";
import NavButton from "../components/NavButton";

import { faHouse, faHistory } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav className=" h-full flex flex-col justify-center items-center gap-7 py-3 w-1/12 bg-gray-800 text-center">
      <NavButton destination="/" icon={faHouse}></NavButton>
      <NavButton destination="/history" icon={faHistory}></NavButton>
    </nav>
  );
};

export default NavBar;
