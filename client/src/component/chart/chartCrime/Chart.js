import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement
);
const Chart = () => {
  const cities = ["cairo", "giza", "aswan", "alex", "sohag"];
  const data = [15000, 12000, 5000, 14000, 7000];
  let fields = {
    labels: cities.map((x) => x),
    datasets: [
      {
        label: "# of Votes",
        data: data.map((x) => x),
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };
  let options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      labels: {
        fontSize: 20,
      },
    },
  };
  return (
    <div style={{ marginTop: "15px", height: "450px" }}>
      <Bar data={fields} options={options} style={{ height: "100%" }} />
    </div>
  );
};

export default Chart;
