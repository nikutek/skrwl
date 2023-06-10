import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../components/Navbar/NavBar";

const RootLayout = () => {
  return (
    <div className=" flex min-h-screen w-screen  flex-col-reverse overflow-x-hidden bg-gray-950 md:flex-row">
      <NavBar />
      <div className="mb-[calc(100vh/10)] grow md:mb-0 md:ml-[calc(100vw/8)] md:w-[calc(100vw-(100vw/8))]">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
