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
import type { ChartData, ChartOptions } from "chart.js";
import { Line } from "react-chartjs-2";

interface LineProps {
  options: ChartOptions<"line">;
  data: ChartData<"line">;
}

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
  const [chartData, setChartData] = useState<ChartData>();
  const [isLoading, setIsLoading] = useState(true);

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
      return jsonData;
    };

    GetData().then((datapoints) => {
      console.log(datapoints);
      let dates: string[] = Object.entries(datapoints).map((ExerciseData) => {
        return ExerciseData[1].date;
      });
      dates = [...new Set(dates)];
      console.log(dates);

      const scores: number[] = dates.map((date) => {
        let scoreSum = Object.entries(datapoints)
          .filter((entry) => {
            return entry[1].date === date;
          })
          .map((entry) => {
            return entry[1].score;
          });

        return scoreSum.reduce((partialSum, a) => partialSum + a, 0);
      });

      setChartData({
        labels: dates,
        datasets: [
          {
            label: "huj",
            data: scores,
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            tension: 0.4,
          },
        ],
      });

      setIsLoading(false);
    });
  }, [userToken]);

  // const labels = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  // ];

  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: "Dataset 1",
  //       data: [1, 2, 10, 4, 5, 6, 7],
  //       borderColor: "rgb(255, 99, 132)",
  //       backgroundColor: "rgba(255, 99, 132, 0.5)",
  //       tension: 0.4,
  //     },
  //   ],
  // };

  // const options = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: "top" as const,
  //     },
  //     title: {
  //       display: true,
  //       text: "Chart.js Line Chart",
  //     },
  //   },
  // };

  return (
    <div className="w-full">
      <h1>History Page</h1>
      {isLoading && (
        <h1 className="flex h-full w-full items-center justify-center text-4xl">
          Loading...
        </h1>
      )}
      {!isLoading && (
        <div className="flex h-full w-full items-start justify-center p-10">
          {/* <Line options={options} data={chartData} /> */}

          <table className="w-1/2">
            <tr>
              <th className=" py-4 text-2xl font-bold text-sky-500">Date</th>
              <th className=" py-4 text-2xl font-bold text-sky-500">Score</th>
            </tr>
            {chartData?.labels?.map((el, idx) => {
              return (
                <tr className=" border-collapse border-2 border-sky-500 font-light">
                  <th className=" border-collapse border-2 border-sky-500">
                    {el}
                  </th>
                  <th className=" border-collapse border-2 border-sky-500">
                    {chartData.datasets[0].data[idx]}
                  </th>
                </tr>
              );
            })}
          </table>
        </div>
      )}
    </div>
  );
};

export default HistoryPage;
