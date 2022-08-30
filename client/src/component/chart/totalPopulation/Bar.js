import React from "react";
import { Typography } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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

const ChartBar = ({ arr }) => {
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
    arr3 = Object.values(arr[2])
      .splice(2)
      .sort((a, b) => a - b);
    //console.log(arr3.sort((a, b) => a - b));
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Total Population",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Males",
        data: arr1?.map((x) => x),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Females",
        data: arr2?.map((x) => x),
        backgroundColor: "rgba(255, 99, 132, 0.5) ",
      },
    ],
  };

  return (
    <>
      <Typography variant="h4" style={{ marginTop: "40px" }}>
        Population Growth Rate
      </Typography>
      <hr style={{ width: "160px" }} />
      <Typography variant="p">
        Annual population growth rate from 1996 to 2022 is the exponential rate
        of growth of midyear , expressed as a percentage . Population is based
        on the de facto definition of population, which counts all residents
        regardless of legal status or citizenship--except for refugees not
        permanently settled in the country of asylum, who are generally
        considered part of the population of the country of origin.
      </Typography>
      <Bar options={options} data={data} />
    </>
  );
};
export default ChartBar;
