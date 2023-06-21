import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExercise } from "../storage/trainingSlice";
import { selectTraining } from "../storage/trainingSlice";
import { useNavigate } from "react-router-dom";

interface trainingProps {
  name: string;
  exercise1: string;
  exercise2?: string;
  exercise3?: string;
}

function TrainingTile({
  name,
  exercise1,
  exercise2,
  exercise3,
}: trainingProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const startTraining = (e: React.MouseEvent) => {
    e.preventDefault();
    // TODO: dodanie cwiczen do reduxa
    if (exercise1) dispatch(addExercise({ name: exercise1 }));
    if (exercise2) dispatch(addExercise({ name: exercise2 }));
    if (exercise3) dispatch(addExercise({ name: exercise3 }));

    // TODO: przekierowanie do /training
    navigate("/training");
  };

  return (
    <div className="w-1/2 overflow-hidden rounded-2xl bg-gray-700 text-center">
      <h2 className=" flex items-center justify-center bg-sky-500 p-5 text-lg font-bold">
        {name}
      </h2>

      <div className="p-2">
        <ul className="justify-col items-row flex flex-col gap-2">
          <li>{exercise1}</li>
          <li>{exercise2}</li>
          <li>{exercise3}</li>
        </ul>
      </div>
      <button
        onClick={startTraining}
        className="border- m-2 w-3/4 rounded-xl border-4 border-sky-500 bg-gray-500 p-2 text-lg transition hover:bg-sky-500"
      >
        Start
      </button>
    </div>
  );
}

export default TrainingTile;
