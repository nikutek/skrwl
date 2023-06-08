import React from "react";
import NavButton from "./NavButton";

import {
  faHouse,
  faHistory,
  faGears,
  faRightToBracket,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import NavBarLoginButton from "./NavBarLoginButton";
import NavbarLogoutButton from "./NavbarLogoutButton";
import { useSelector } from "react-redux";
import { selectUserToken } from "../../storage/UserSlice";

const NavBar = () => {
  const token = useSelector(selectUserToken);

  return (
    <nav
      className=" fixed bottom-0 w-full h-1/12 flex flex-row justify-center items-center gap-7 py-3  bg-gray-800 text-center shadow-xl shadow-gray-600
     md:w-1/12 md:h-full md:flex-col"
    >
      <NavButton destination="/" icon={faHouse}></NavButton>
      {token && [
        <NavButton destination="/history" icon={faHistory}></NavButton>,
        <NavButton destination="/options" icon={faGears}></NavButton>,
        <NavbarLogoutButton icon={faRightFromBracket}></NavbarLogoutButton>,
      ]}
      {!token && (
        <NavBarLoginButton icon={faRightToBracket}></NavBarLoginButton>
      )}
    </nav>
  );
};

export default NavBar;
