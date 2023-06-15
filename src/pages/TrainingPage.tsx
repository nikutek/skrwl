import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTraining, removeExercise } from "../storage/trainingSlice";
import { selectUserToken } from "../storage/UserSlice";
import RepInput from "../components/SetInput";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface setInfo {
  reps: number;
  weight: number;
}

function TrainingPage() {
  const [set, setSet] = useState(1);
  const [doneSets, setDoneSets] = useState<setInfo[]>([]);
  const [score, setScore] = useState(0);
  const training = useSelector(selectTraining);
  const userToken = useSelector(selectUserToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(training);
    if (!training.length) {
      console.log("koniec");

      navigate("/");
    }

    console.log(doneSets, set, score);
  }, [training, set]);

  const submitSet = (reps: number, weight: number) => {
    setSet((currentValue) => {
      return currentValue + 1;
    });

    setDoneSets((currentValue) => {
      return [...currentValue, { reps: reps, weight: weight }];
    });
  };

  const endExerciseBtnHandler = () => {
    // zapisanie wynikow if zalogowany
    if (userToken) {
      let scoreSum = 0;
      doneSets.forEach((set) => {
        scoreSum += set.reps * set.weight;
      });
      setScore((currentValue) => {
        return currentValue + scoreSum;
      });
    }

    // Cleanup
    setSet(1);
    setDoneSets([]);
    dispatch(removeExercise());
  };

  if (training.length > 0) {
    return (
      <div className=" flex h-fit grow  flex-col items-center justify-center  overflow-scroll ">
        <h1 className=" m-10 text-4xl font-bold text-sky-500">
          {training[0].name} {set}
        </h1>

        <ul className=" flex w-fit grow flex-col items-center justify-center ">
          {doneSets.map((set, idx) => {
            return (
              <li className="flex w-full flex-row p-4 brightness-50" key={idx}>
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
          <button
            className="m-4 w-1/2 rounded-xl border-2 bg-sky-500 py-1 text-2xl"
            onClick={endExerciseBtnHandler}
          >
            End Training
          </button>
        )}
      </div>
    );
  }
  return <div></div>;
}

export default TrainingPage;
