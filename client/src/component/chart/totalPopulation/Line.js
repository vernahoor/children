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
const labels = [
  "1996",
  "1997",
  "1998",
  "1999",
  "2000",
  "2001",
  "2002",
  "2003",
  "2004",
  "2005",
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
];

const ChartLine = ({ arr }) => {
  console.log(arr);
  let arr1, arr2, arr3;
  if (arr[0]) {
    arr1 = Object.values(arr ? arr[0] : null)
      .splice(2)
      .sort((a, b) => a - b);
    // console.log(arr1.sort((a, b) => a - b));
    arr2 = Object.values(arr[1])
      .splice(2)
      .sort((a, b) => a - b);
    //console.log(arr2.sort((a, b) => a - b));
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Males & Females",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Males",
        data: arr1?.map((x) => x),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Females",
        data: arr2?.map((x) => x),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};

export default ChartLine;
