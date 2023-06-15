import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

function RepInput({ submitSet, set }) {
  const [reps, setReps] = useState(10);
  const [weight, setWeight] = useState(8);

  const submitButtonHandler = () => {
    console.log("submit");
    submitSet(reps, weight);
  };

  const incrementRepBtnHandler = () => {
    setReps((currentValue) => {
      return currentValue + 0.5;
    });
  };
  const decrementRepBtnHandler = () => {
    setReps((currentValue) => {
      return currentValue > 0 ? currentValue - 0.5 : 0;
    });
  };

  const incrementWeightBtnHandler = () => {
    setWeight((currentValue) => {
      return currentValue + 0.5;
    });
  };
  const decrementWeightBtnHandler = () => {
    setWeight((currentValue) => {
      return currentValue > 0 ? currentValue - 0.5 : 0;
    });
  };

  return (
    <li className="my-10 flex w-full grow flex-col items-center">
      <h2 className="w-fit whitespace-nowrap text-2xl font-thin">SET {set}</h2>
      <div className="grow text-center">
        <div className="mx-2 flex items-center">
          <label className=" grow text-xl">Repetitions:</label>
          <input
            type="number"
            className="m-4 mx-2 w-1/4  rounded-sm border-2 border-sky-500 bg-gray-500 p-1 text-center text-xl"
            value={reps}
            onChange={(e) => {
              setReps(parseInt(e.target.value));
            }}
            required
          />

          <button
            className=" mx-1 w-10 rounded-xl border-2  bg-sky-500 py-1 text-lg font-extrabold"
            onClick={incrementRepBtnHandler}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>

          <button
            className="mx-1 w-10 rounded-xl border-2 bg-sky-500 py-1 text-lg font-extrabold"
            onClick={decrementRepBtnHandler}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>

        <div className="mx-2 flex items-center">
          <label className="grow text-xl ">Weight:</label>
          <input
            type="number"
            className="m-4 mx-2 w-1/4 rounded-sm border-2 border-sky-500 bg-gray-500 p-1 text-center text-xl"
            value={weight}
            onChange={(e) => {
              setWeight(parseInt(e.target.value));
            }}
            required
          />

          <button
            className=" mx-1 w-10 rounded-xl border-2  bg-sky-500 py-1 text-lg font-extrabold"
            onClick={incrementWeightBtnHandler}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>

          <button
            className="mx-1 w-10 rounded-xl border-2 bg-sky-500 py-1 text-lg font-extrabold"
            onClick={decrementWeightBtnHandler}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>

        <button
          className=" w-2/3 rounded-xl border-2 bg-sky-500 py-1 text-2xl"
          onClick={submitButtonHandler}
        >
          Submit
        </button>
      </div>
    </li>
  );
}

export default RepInput;
