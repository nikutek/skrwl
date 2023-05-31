import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <h1 className=" absolute top-1/2 w-screen text-center flex items-center content-center gap-3 mx-auto">
        <span className=" w-fit text-zinc-200 bg-zinc-800 border-purple-600 border-2 px-2 py-1 rounded-lg block">
          huj :3
        </span>
        <span className=" w-fit text-zinc-200 bg-zinc-800 border-sky-500 border-2 px-2 py-1 rounded-lg block">
          huj :3
        </span>
        <span className=" w-fit text-zinc-200 bg-zinc-800 border-amber-500 border-2 px-2 py-1 rounded-lg block">
          huj :3
        </span>
      </h1>
    </div>
  );
};

export default HomePage;
