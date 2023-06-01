import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar";

const RootLayout = () => {
  return (
    <div className=" bg-gray-950 h-screen w-screen flex flex-col-reverse md:flex-row">
      <NavBar />

      <Outlet />
    </div>
  );
};

export default RootLayout;
