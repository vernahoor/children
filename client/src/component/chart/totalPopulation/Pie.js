import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Typography } from "@mui/material";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import {
  Form,
  Button,
  Container,
  Card,
  Row,
  Col,
  Table,
} from "react-bootstrap";
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Female", "Male"],
  datasets: [
    {
      label: "# of Votes",
      data: [49, 51],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const ChartPie = () => {
  return (
    <div>
      <Typography variant="h4" style={{ marginTop: "40px" }}>
        Total Populations: 102872283 (persons) in 1/1/2022
      </Typography>
      <hr style={{ width: "160px" }} />
      <Row style={{ marginTop: "40px" }}>
        <Col
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h6>Male Population </h6>
          <div style={{ color: "#1b7ced" }}>
            <ManIcon style={{ fontSize: "50px" }} />
            <ManIcon style={{ fontSize: "50px" }} />
            <ManIcon style={{ fontSize: "50px" }} />
            <ManIcon style={{ fontSize: "50px" }} />
            <ManIcon style={{ fontSize: "50px" }} />
          </div>
          <h6>51%</h6>
        </Col>
      </Row>

      <Row style={{ marginTop: "40px", marginBottom: "20px", width: "100%" }}>
        <Col
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h6>Female Population </h6>
          <div style={{ color: "pink" }}>
            <WomanIcon style={{ fontSize: "50px" }} />
            <WomanIcon style={{ fontSize: "50px" }} />
            <WomanIcon style={{ fontSize: "50px" }} />
            <WomanIcon style={{ fontSize: "50px" }} />
            <WomanIcon style={{ fontSize: "50px" }} />
          </div>
          <h6>49%</h6>
        </Col>
      </Row>
      <Row style={{ width: "100%", height: "100%" }}>
        <Col style={{ width: "100%", height: "100%" }}>
          <Pie
            data={data}
            className="pie-can"
            style={{
              display: "block",
              height: "800px",
              width: "800px",
              margin: "auto",
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ChartPie;
