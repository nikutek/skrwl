import React from "react";
import { Link } from "react-router-dom";
import NavButton from "../components/Navbar/NavButton";

const ErrorPage = () => {
  return (
    <div className=" bg-gray-950 h-screen w-screen text-gray-200 flex items-center justify-center flex-col">
      <h1 className=" text-6xl text-sky-500 font-bold m-4">404</h1>
      <div className=" m-4 text-center">
        <h3 className="text-2xl m-1">Oops...</h3>
        <p>Ta strona nie istnieje</p>
      </div>

      <Link
        to="/"
        className="border-sky-500 border-4 p-2 bg-gray-700  rounded-xl duration-150 ease-in-out hover:bg-sky-500 "
      >
        Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;
