import React from "react";
import NavButton from "./NavButton";

import {
  faHouse,
  faHistory,
  faGears,
  faRightToBracket,
  faRightFromBracket,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";
import NavBarLoginButton from "./NavBarLoginButton";
import NavbarLogoutButton from "./NavbarLogoutButton";
import { useSelector } from "react-redux";
import { selectUserToken } from "../../storage/UserSlice";
import { selectTraining } from "../../storage/trainingSlice";

const NavBar = () => {
  const token = useSelector(selectUserToken);
  const training = useSelector(selectTraining);

  return (
    <nav
      className=" h-1/12 fixed bottom-0 z-50 flex w-screen flex-row items-center justify-center gap-7  bg-gray-800 py-3 text-center shadow-xl
     shadow-gray-600 md:h-full md:w-1/12 md:flex-col"
    >
      {training.length !== 0 && (
        <NavButton destination="/training" icon={faDumbbell} />
      )}
      <NavButton destination="/" icon={faHouse}></NavButton>
      {token && [
        <NavButton destination="/history" icon={faHistory} />,
        <NavButton destination="/options" icon={faGears} />,
        <NavbarLogoutButton icon={faRightFromBracket} />,
      ]}
      {!token && (
        <NavBarLoginButton icon={faRightToBracket}></NavBarLoginButton>
      )}
    </nav>
  );
};

export default NavBar;
