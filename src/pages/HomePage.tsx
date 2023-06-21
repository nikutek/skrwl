import React from "react";
import { useSelector } from "react-redux";
import { selectUserName } from "../storage/userSlice";
import TrainingTile from "../components/TrainingTile";

const HomePage = () => {
  const userName: string = useSelector(selectUserName);

  return (
    <div className="  my-3 flex h-fit w-full flex-col items-center justify-center">
      <h1 className=" m-4 text-center text-xl">
        Skurwiel: {userName ? userName.split(" ")[0] : "Guest"}
      </h1>
      <div className="flex h-1/2 w-full flex-col items-center justify-center gap-5 ">
        <TrainingTile
          name="Plecy"
          exercise1={"Wiosłowanie"}
          exercise2={"Wiosłowanie"}
        />
        <TrainingTile
          name="Biceps"
          exercise1={"Bicep curl"}
          exercise2={"Młotki"}
        />
        <TrainingTile
          name="Barki"
          exercise1={"Wzniosy bokiem"}
          exercise2={"Shoulder press"}
        />
        <TrainingTile
          name="Triceps"
          exercise1={"Overhead extension"}
          exercise2={"Skull crusher"}
          exercise3={"Kickbacks"}
        />

        <TrainingTile
          name="Brzuch"
          exercise1={"Plank"}
          exercise2={"Sit up"}
          exercise3={"Ab wheel"}
        />

        <TrainingTile
          name="Klatka piersiowa"
          exercise1={"Floor chest press"}
          exercise2={"Floor fly"}
          exercise3={"Upward fly"}
        />
      </div>
    </div>
  );
};

export default HomePage;
