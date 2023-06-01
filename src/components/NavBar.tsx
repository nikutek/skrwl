import React from "react";
import NavButton from "../components/NavButton";

import { faHouse, faHistory, faGears } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav
      className=" w-full h-1/12 flex flex-row justify-center items-center gap-7 py-3  bg-gray-800 text-center shadow-xl shadow-gray-600
     md:w-1/12 md:flex-col"
    >
      <NavButton destination="/" icon={faHouse}></NavButton>
      <NavButton destination="/history" icon={faHistory}></NavButton>
      <NavButton destination="/options" icon={faGears}></NavButton>
    </nav>
  );
};

export default NavBar;
