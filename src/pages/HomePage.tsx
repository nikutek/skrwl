import React from "react";
import { useSelector } from "react-redux";
import { selectUserName } from "../storage/UserSlice";
import TrainingTile from "../components/TrainingTile";

const HomePage = () => {
  const userName: string = useSelector(selectUserName);

  return (
    <div className="  flex h-fit w-full flex-col items-center justify-center ">
      <h1 className=" m-4 text-center text-xl">
        Skurwiel: {userName ? userName.split(" ")[0] : "Guest"}
      </h1>
      <div className="flex h-1/2 w-full flex-col items-center justify-center gap-3 ">
        <TrainingTile
          name="Training Name"
          exercise1={"exercise1"}
          exercise2={"exercise2"}
          exercise3={"exercise3"}
        />
        <TrainingTile
          name="Training Name"
          exercise1={"exercise1"}
          exercise2={"exercise2"}
          exercise3={"exercise3"}
        />
        <TrainingTile
          name="Training Name"
          exercise1={"exercise1"}
          exercise2={"exercise2"}
          exercise3={"exercise3"}
        />
        <TrainingTile
          name="Training Name"
          exercise1={"exercise1"}
          exercise2={"exercise2"}
          exercise3={"exercise3"}
        />
      </div>
    </div>
  );
};

export default HomePage;
