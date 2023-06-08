import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../components/Navbar/NavBar";

const RootLayout = () => {
  return (
    <div className=" bg-gray-950 min-h-screen w-screen  flex flex-col-reverse md:flex-row overflow-x-hidden">
      <NavBar />
      <div className="grow mb-[calc(100vh/10)] md:mb-0 md:ml-[calc(100vw/8)] md:w-[calc(100vw-(100vw/8))]">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
