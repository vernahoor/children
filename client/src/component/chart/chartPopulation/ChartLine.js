import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
import { useDispatch, useSelector } from "react-redux";
import { Bar, Line } from "react-chartjs-2";
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement
);
const ChartLine = ({ arr2 }) => {
  const years = ["2017", "2018", "2019"];
  const arr17 = arr2.reduce((acc, val) => acc + val.total_2017, 0);
  const arr18 = arr2.reduce((acc, val) => acc + val.total_2018, 0);
  const arr19 = arr2.reduce((acc, val) => acc + val.total_2019, 0);
  const total = [arr17, arr18, arr19];

  let fields = {
    labels: years.map((x) => x),
    datasets: [
      {
        label: "# of Votes",
        data: total.map((x) => x),
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
      },
    ],
  };

  return <Line data={fields} />;
};

export default ChartLine;
