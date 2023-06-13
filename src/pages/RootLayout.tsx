import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../components/Navbar/NavBar";

const RootLayout = () => {
  return (
    <div className="overflow-hidden bg-gray-950 md:flex-row">
      <NavBar />
      <div className="fixed right-0 h-[calc(100vh*0.9)] w-full md:h-full md:w-[calc(100vw-(100vw/10))]">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
