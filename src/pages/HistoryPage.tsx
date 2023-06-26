import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUserToken } from "../storage/userSlice";
import { useNavigate } from "react-router-dom";

interface training {
  date: string;
  exercise: string;
  score: number;
}

const HistoryPage = () => {
  const [trainings, setTrainings] = useState<training[]>([]);
  const userToken = useSelector(selectUserToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userToken) {
      navigate("/");
    }

    const GetData = async () => {
      const response = await fetch(
        `https://skurwiel-auth-default-rtdb.europe-west1.firebasedatabase.app/trainings/${userToken}.json`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      const jsonData = await response.json();

      console.log(Object.entries(jsonData));
      setTrainings(jsonData);
    };
    GetData();
  }, [userToken]);

  return (
    <div>
      <h1>History Page</h1>
      {Object.entries(trainings).map((training) => {
        return <p>{training[1].exercise}</p>;
      })}
    </div>
  );
};

export default HistoryPage;
