import React from "react";
import { useSelector } from "react-redux";
import { selectTraining } from "../storage/trainingSlice";

function TrainingPage() {
  const training = useSelector(selectTraining);
  console.log(training);

  if (training.length > 0) {
    return (
      <div className="col flex h-screen  flex-col items-center justify-center gap-20 overflow-hidden ">
        <h1 className=" text-4xl font-bold text-sky-500">{training[0].name}</h1>

        <ul className=" flex h-1/3 flex-col items-center justify-around">
          <li>
            Seria 1 <input type="number" className="" />
          </li>
          <li>Seria 2</li>
          <li>Seria 3</li>
        </ul>

        <button className="  h-1/12 w-1/3 rounded-lg border-4 border-sky-500 bg-gray-600 p-4 text-2xl transition-all hover:bg-sky-500 hover:font-bold hover:tracking-widest">
          Done
        </button>
      </div>
    );
  }
  return <div></div>;
}

export default TrainingPage;
