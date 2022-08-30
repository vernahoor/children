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
import { listSumPop } from "../../redux/actions/populationAction/population";
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement
);
const Chart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listSumPop());
  }, []);
  const sumPopReducer = useSelector((state) => state.sumPopReducer);
  const { data } = sumPopReducer;
  const unemployment = [6, 12, 15, 19, 18];
  const years = [2018, 2019, 2020, 2021, 2022];
  let fields = {
    labels: data.map((x) => x._id),
    datasets: [
      {
        label: "# of Votes",
        data: data.map((x) => x.count),
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
      },
    ],
  };
  let fields1 = {
    labels: years.map((x) => x),
    datasets: [
      {
        label: "# of Votes",
        data: unemployment.map((x) => x),
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
    <div
      style={{
        display: "flex",
        width: "100%",
      }}
    >
      <div style={{ width: "48%", height: "400px" }}>
        <span>Rate Unemployment</span>
        <Line data={fields1} options={options} />
      </div>
      <div style={{ width: "48%", height: "400px", marginLeft: "20px" }}>
        <span>Rate Populations</span>
        <Line data={fields} options={options} />
      </div>
    </div>
  );
};

export default Chart;
