import React from "react";

function RepInput() {
  return (
    <li className="flex w-full flex-row items-center">
      <h2 className="w-fit whitespace-nowrap text-2xl font-thin">seria 1</h2>
      <div className="grow text-center">
        <p>Repetitions:</p>
        <div className="flex items-center">
          <input
            type="number"
            className="m-4 mx-2 w-1/2 grow rounded-sm border-2 border-sky-500 bg-gray-500 p-1 text-center text-xl"
            value={10}
          />
          <button className=" mx-1 w-1/6 rounded-xl border-2  bg-sky-500 py-1 text-2xl font-extrabold">
            +
          </button>
          <button className="mx-1 w-1/6 rounded-xl border-2 bg-sky-500 py-1 text-2xl font-extrabold">
            -
          </button>
        </div>
        <button className=" w-2/3 rounded-xl border-2 bg-sky-500 py-1 text-2xl">
          Submit
        </button>
      </div>
    </li>
  );
}

export default RepInput;
