import React from "react";
import { Outlet } from "react-router-dom";

import NavButton from "../components/NavButton";

import { faHouse, faHistory } from "@fortawesome/free-solid-svg-icons";

const RootLayout = () => {
  return (
    <div className=" bg-gray-950 h-screen w-screen flex flex-row">
      <nav className=" h-full flex flex-col justify-center items-center gap-7 py-3 w-1/12 bg-gray-800 text-center">
        <NavButton destination="/" icon={faHouse}></NavButton>
        <NavButton destination="/history" icon={faHistory}></NavButton>
      </nav>

      <Outlet />
    </div>
  );
};

export default RootLayout;
