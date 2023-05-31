import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" bg-gray-950 h-screen w-screen text-gray-200 flex items-center justify-center flex-col">
      <h1 className=" text-6xl text-sky-500 font-bold m-4">404</h1>
      <h3>Oops...</h3>
      <p>Ta strona nie istnieje</p>
      <Link to={"/"} className=" border-sky-500 border-2 rounded-lg p-2 m-2">
        Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;
