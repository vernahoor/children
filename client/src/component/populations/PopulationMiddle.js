import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  Button,
  Container,
  Card,
  Row,
  Col,
  Table,
} from "react-bootstrap";
import DataTable from "react-data-table-component";
import Error from "../features/Error";
import Loader from "../features/Loader";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import ChartBar from "../chart/chartPopulation/ChartBar";
import ChartLine from "../chart/chartPopulation/ChartLine";
import ChartPie from "../chart/chartPopulation/ChartPie";
import CountUp from "react-countup";
const PopulationMiddle = () => {
  const dispatch = useDispatch();

  let arr1 = popMiddle.filter((pop) => pop._id.Sex !== "جملة");
  let arr2 = popMiddle.filter((pop) => pop._id.Sex == "جملة");
  let arrFemale = popMiddle.filter((pop) => pop._id.Sex == "اناث");
  let arrMale = popMiddle.filter((pop) => pop._id.Sex == "ذكور");
  let totalMales = arrMale.reduce((acc, val) => acc + val.total_2019, 0);
  let totalFemales = arrFemale.reduce((acc, val) => acc + val.total_2019, 0);
  let totalTotal = arr1.reduce((acc, val) => acc + val.total_2019, 0);
  //console.log(totalTotal);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : popMiddle ? (
        <>
          <Table
            striped
            bordered
            hover
            style={{
              marginBottom: "30px",
            }}
          >
            <thead>
              <tr>
                <th>#</th>
                <th>Sex</th>
                <th>Residence</th>
                <th>2017</th>
                <th>2018</th>
                <th>2019</th>
              </tr>
            </thead>
            <tbody>
              {arr1.map((pop, index) => (
                <tr key={index}>
                  <td>{++index}</td>
                  <td>{pop._id.Sex}</td>
                  <td>{pop._id.Urban}</td>
                  <td>{pop.total_2017}</td>
                  <td>{pop.total_2018}</td>
                  <td>{pop.total_2019}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Row style={{ marginTop: "40px" }}>
            <Col>
              <ChartLine arr2={arr2} />
            </Col>
          </Row>
          <Row style={{ marginTop: "40px" }}>
            <h5 style={{ marginBottom: "15px" }}>
              Population by sex for Egypt (2019)
            </h5>

            <Col>
              <Card
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  color: "pink",
                }}
              >
                <Card.Body>
                  <Card.Title>Female</Card.Title>
                  <Card.Text>
                    <WomanIcon fontSize="large" />
                  </Card.Text>
                </Card.Body>
                <Card.Body style={{ textAlign: "right", marginTop: "10px" }}>
                  <h2>
                    <CountUp end={totalFemales} duration={20} />
                  </h2>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  color: "#1b7ced",
                }}
              >
                <Card.Body>
                  <Card.Title>Male</Card.Title>
                  <Card.Text>
                    <ManIcon fontSize="large" />
                  </Card.Text>
                </Card.Body>
                <Card.Body style={{ textAlign: "right", marginTop: "10px" }}>
                  <h2>
                    <CountUp end={totalMales} duration={20} />
                  </h2>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row style={{ marginTop: "40px" }}>
            <Col>
              <ChartBar totalMales={totalMales} totalFemales={totalFemales} />
            </Col>
          </Row>
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
                <ManIcon fontSize="large" />
                <ManIcon fontSize="large" />
                <ManIcon fontSize="large" />
                <ManIcon fontSize="large" />
                <ManIcon fontSize="large" />
              </div>
              <h6>{Math.round((totalMales * 100) / totalTotal)}%</h6>
            </Col>
          </Row>

          <Row style={{ marginTop: "40px" }}>
            <Col
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <h6>Female Population </h6>
              <div style={{ color: "pink" }}>
                <WomanIcon fontSize="large" />
                <WomanIcon fontSize="large" />
                <WomanIcon fontSize="large" />
                <WomanIcon fontSize="large" />
                <WomanIcon fontSize="large" />
              </div>
              <h6>{Math.round((totalFemales * 100) / totalTotal)}%</h6>
            </Col>
          </Row>
          <Row style={{ marginTop: "40px" }}>
            <Col>
              <ChartPie
                males={Math.round((totalMales * 100) / totalTotal)}
                females={Math.round((totalFemales * 100) / totalTotal)}
              />
            </Col>
          </Row>
        </>
      ) : null}
    </div>
  );
};

export default PopulationMiddle;
