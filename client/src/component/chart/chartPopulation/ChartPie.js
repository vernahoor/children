import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement,
} from "chart.js";
import { useDispatch, useSelector } from "react-redux";
import { Bar, Line, Pie } from "react-chartjs-2";
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement
);
const ChartPie = ({ males, females }) => {
  const sex = ["Male", "Femal"];
  const total = [males, females];

  let fields = {
    labels: sex.map((x) => x),
    datasets: [
      {
        label: "# of Votes",
        data: total.map((x) => x),
        backgroundColor: ["#1b7ced", "Pink"],
      },
    ],
  };

  return <Pie data={fields} />;
};

export default ChartPie;
