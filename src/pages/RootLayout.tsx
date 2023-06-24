import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../components/Navbar/NavBar";

const RootLayout = () => {
  return (
    <div className="h-full w-full overflow-hidden bg-gray-950 md:flex-row">
      <NavBar />
      <div className="fixed right-0 flex h-[calc(100vh*0.9)] w-full flex-row overflow-scroll md:h-screen md:w-[calc(100vw-(100vw/10))] md:overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
