import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTraining } from "../storage/trainingSlice";
import RepInput from "../components/SetInput";

interface setInfo {
  reps: number;
  weight: number;
}

function TrainingPage() {
  const [set, setSet] = useState(1);
  const [doneSets, setDoneSets] = useState<setInfo[]>([]);
  const [score, setScore] = useState(0);
  const training = useSelector(selectTraining);

  useEffect(() => {
    if (set === 3) {
      console.log("koniec");
      // zapisanie wynikow if zalogowany
    }

    console.log(doneSets, set, score);
  }, [set]);

  const submitSet = (reps, weight) => {
    setSet((currentValue) => {
      return currentValue + 1;
    });
    setScore((currentValue) => {
      return currentValue + reps * weight;
    });

    setDoneSets((currentValue) => {
      // console.log([...currentValue, { reps: reps, weight: weight }]);
      return [...currentValue, { reps: reps, weight: weight }];
    });
  };

  if (training.length > 0) {
    return (
      <div className="col flex h-fit  flex-col items-center justify-center  overflow-scroll ">
        <h1 className=" m-10 text-4xl font-bold text-sky-500">
          {training[0].name} {set}
        </h1>

        <ul className=" flex w-full flex-col items-center justify-around ">
          {doneSets.map((set, idx) => {
            return (
              <li className="flex w-full flex-row p-4 brightness-50">
                <p className="grow text-xl ">SET {idx + 1}</p>
                <div>
                  {set.reps} REPS / {set.weight}kg
                </div>
              </li>
            );
          })}
          <RepInput submitSet={submitSet} set={set} />
        </ul>
        {doneSets.length >= 3 && (
          <button className="m-4 w-1/2 rounded-xl border-2 bg-sky-500 py-1 text-2xl">
            Training Done
          </button>
        )}
      </div>
    );
  }
  return <div></div>;
}

export default TrainingPage;
