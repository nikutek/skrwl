import { text } from "@fortawesome/fontawesome-svg-core";
import React, { useEffect, useState } from "react";

function RestBar({ setIsRest, duration }) {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState<string | number>(0);
  const [secondsLeft, setSecondsLeft] = useState<string | number>(0);

  const endRest = () => {
    setIsRest(false);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((currentValue) => {
        return currentValue + 1;
      });
      if (elapsedTime >= duration) {
        endRest();
      }

      const timeLeft = duration - elapsedTime;

      setMinutesLeft(
        Math.floor(timeLeft / 60).toString().length == 1
          ? `0${Math.floor(timeLeft / 60)}`
          : Math.floor(timeLeft / 60)
      );

      setSecondsLeft(
        (timeLeft % 60).toString().length == 1
          ? `0${timeLeft % 60}`
          : timeLeft % 60
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [duration, elapsedTime, minutesLeft]);

  return (
    <div>
      <div className="relative h-16 w-screen bg-gray-700">
        <div
          className={`absolute left-0 top-0 z-10 h-full bg-sky-500`}
          style={{ width: `${(elapsedTime / duration) * 100}%` }}
        >
          <p className=" z-20 flex h-full w-screen items-center justify-center text-center text-2xl text-sky-500 mix-blend-difference">
            {`${minutesLeft}:${secondsLeft}`}
          </p>
        </div>
      </div>

      <button className="text-2xl" onClick={endRest}>
        End rest
      </button>
    </div>
  );
}

export default RestBar;
