import React from "react";
import { useSelector } from "react-redux";
import { selectUserName } from "../storage/UserSlice";
import TrainingTile from "../components/Navbar/TrainingTile";

const HomePage = () => {
  const userName: string = useSelector(selectUserName);

  return (
    <div className="  w-full h-fit flex flex-col justify-center items-center ">
      <h1 className=" text-center m-4 text-xl">
        Skurwiel: {userName ? userName.split(" ")[0] : "Guest"}
      </h1>
      <div className="h-1/2 w-full flex justify-center flex-col items-center gap-3 ">
        <TrainingTile />
        <TrainingTile />
        <TrainingTile />
        <TrainingTile />
      </div>
    </div>
  );
};

export default HomePage;
