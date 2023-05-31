import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className=" bg-gray-950 h-screen w-screen text-gray-200">
      <Outlet />
    </div>
  );
};

export default RootLayout;
