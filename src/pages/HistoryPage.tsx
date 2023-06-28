import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUserToken } from "../storage/userSlice";
import { json, useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const HistoryPage = () => {
  const [trainings, setTrainings] = useState({});
  const userToken = useSelector(selectUserToken);
  const navigate = useNavigate();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

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

      // Preparowanie danych do wykresu

      const data = [
        {
          labels: ["26.06.2023", "28.06.2023"],
          datasets: [{ labels: "Score", data: [240, 400], tension: 0.4 }],
        },
      ];

      // Object.entries(jsonData).forEach((ExerciseData) => {
      //   if (labels.includes(ExerciseData[1].date)) {
      //     console.log("juz jest");
      //   } else {
      //     labels.push(ExerciseData[1].date);
      //     datasets.push({ label: "Score", data: 0 });
      //   }
      //   // znalezienie indeksu

      //   datasets[labels.indexOf(ExerciseData[1].date)].data +=
      //     ExerciseData[1].score;
      // });

      //   console.log({ labels, datasets });

      //   setTrainings({
      //     labels: labels,
      //     datasets: { labels: "Score", data: [24, 48] },
      //   });
      //   console.log(trainings);
    };

    GetData();
  }, [userToken]);

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [1, 2, 3, 4, 5, 6, 7],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [1, 2, 3, 4, 5, 6, 7],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div>
      <h1>History Page</h1>
      <Line options={options} data={data} />
      {/* {Object.entries(trainings).map((training) => {
        return <p>{training[1].exercise}</p>;
      })} */}
    </div>
  );
};

export default HistoryPage;
