import React from "react";
import NavButton from "../components/NavButton";

import { faHouse, faHistory, faGears } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav className=" h-full flex flex-col justify-center items-center gap-7 py-3 w-1/12 bg-gray-800 text-center shadow-xl shadow-gray-600">
      <NavButton destination="/" icon={faHouse}></NavButton>
      <NavButton destination="/history" icon={faHistory}></NavButton>
      <NavButton destination="/options" icon={faGears}></NavButton>
    </nav>
  );
};

export default NavBar;
