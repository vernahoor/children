import React from "react";
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
import { Typography } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const labels = ["2018", "2019", "2020", "2021", "2022"];

const ChartLine = ({ arr }) => {
  let arr1, arr2;
  const arrB = arr.filter((a) => a.sex != "الجملة");
  //console.log(arrB);
  if (arr[0]) {
    arr1 = Object.values(arrB[0])
      .splice(2)
      .sort((a, b) => a - b);

    // console.log(arr1);
    arr2 = Object.values(arrB[1])
      .splice(2)
      .sort((a, b) => a - b);

    //console.log(arr2);
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Rural & Urban",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Rural",
        data: arr1?.map((x) => x),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Urabn",
        data: arr2?.map((x) => x),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <>
      <Typography variant="h4" style={{ marginTop: "40px" }}>
        Children Growth Rate By Residence
      </Typography>
      <hr style={{ width: "160px" }} />
      <Line options={options} data={data} />
    </>
  );
};

export default ChartLine;
