import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTraining, removeExercise } from "../storage/trainingSlice";
import { selectUserToken } from "../storage/userSlice";
import RepInput from "../components/SetInput";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { flushSync } from "react-dom";
import RestBar from "../components/RestBar";

interface setInfo {
  reps: number;
  weight: number;
}

function TrainingPage() {
  const [isRest, setisRest] = useState(false);
  const [set, setSet] = useState(1);
  const [doneSets, setDoneSets] = useState<setInfo[]>([]);
  const [score, setScore] = useState(0);
  const training = useSelector(selectTraining);
  const userToken = useSelector(selectUserToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const EndBtnRef = useRef<null | HTMLButtonElement>(null);

  // Przekierowanie po zrobieniu wszystkich ćwiczeń
  useEffect(() => {
    console.log(training);

    if (!training.length) {
      console.log("koniec");

      navigate("/");
    }

    console.log(doneSets, set, score);
  }, [training, set]);

  // Zakończenie serii
  const submitSet = (reps: number, weight: number) => {
    scrollToBottom();

    setSet((currentValue) => {
      return currentValue + 1;
    });

    setDoneSets((currentValue) => {
      return [...currentValue, { reps: reps, weight: weight }];
    });

    // REST TIME
    setisRest(true);
  };

  // Zakończenie całego ćwiczenia
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

  const scrollToBottom = () => {
    console.log(EndBtnRef.current);
    EndBtnRef?.current?.scrollIntoView();
  };

  if (training.length > 0) {
    return (
      <div className=" mb-[calc(100vh/12)]  flex h-fit grow  flex-col items-center justify-center overflow-scroll md:mb-0 md:h-auto md:w-full md:overflow-x-hidden md:overflow-y-scroll">
        <h1 className=" m-10 text-4xl font-bold text-sky-500">
          {training[0].name}
        </h1>

        <ul className=" flex w-fit grow flex-col items-center justify-center md:w-full md:p-4">
          {doneSets.map((set, idx) => {
            return (
              <li
                className="flex w-full flex-row p-4 brightness-50 md:justify-center"
                key={idx}
              >
                <p className="grow text-xl md:mx-10 md:grow-0">SET {idx + 1}</p>
                <div className="md:text-xl">
                  {set.reps} REPS / {set.weight}kg
                </div>
              </li>
            );
          })}
          {isRest ? (
            <RestBar setIsRest={setisRest} duration={120} />
          ) : (
            <RepInput submitSet={submitSet} set={set} />
          )}
        </ul>
        {doneSets.length >= 3 && (
          <button
            className="m-4  w-1/2 rounded-xl border-2 bg-sky-500 py-1 text-2xl md:w-80"
            onClick={endExerciseBtnHandler}
            ref={EndBtnRef}
          >
            End Training
          </button>
        )}
      </div>
    );
  }
  return;
}

export default TrainingPage;
