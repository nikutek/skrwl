import React from "react";

function TrainingTile() {
  return (
    <div className="rounded-2xl bg-gray-700 text-center w-1/2 overflow-hidden">
      <h2 className=" p-5 text-lg bg-sky-500 flex justify-center items-center">
        Training Name
      </h2>
      <h3 className=" font-bold p-2"> Partia mięśniowa</h3>

      <div>
        <ul>
          <li>cwiczenie 1</li>
          <li>cwiczenie 2</li>
          <li>cwiczenie 3</li>
        </ul>
      </div>
      <button className="p-2 border-4 border- border-sky-500 bg-gray-500 w-3/4 m-2 rounded-xl transition hover:bg-sky-500 text-lg">
        Start
      </button>
    </div>
  );
}

export default TrainingTile;
