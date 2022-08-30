import React, { useState, useEffect } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../features/Loader";
import Error from "../features/Error";
import { listPop } from "../../redux/actions/populationAction/population";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Typography } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);
const PopulationArea = () => {
  const dispatch = useDispatch();
  const listPopReducer = useSelector((state) => state.listPopReducer);
  const { populations, error, loading } = listPopReducer;
  useEffect(() => {
    dispatch(listPop());
  }, []);

  const data = {
    datasets: [
      {
        data: [93.2, 6.8],
        backgroundColor: ["rgb(255,232,157)", "rgb(195,233,151)"],
      },
    ],

    text: "23%",
    width: "40%",
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : populations ? (
        <>
          <Row style={{ marginTop: "40px" }}>
            <h4>Total Area For Egypt</h4>
            <Col>
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
                    <th>Gov</th>
                    <th>Total Area Km2</th>
                    <th>Populated Area Km2</th>
                    <th>Populated Density Km</th>
                    <th>Total Population</th>
                    <th>Populated Area for Total Area%</th>
                    <th>Total Children Under 18 Years </th>
                    <th>Denisty km/in2</th>
                  </tr>
                </thead>
                <tbody>
                  {populations.map((pop, index) => (
                    <tr key={index}>
                      <td>{++index}</td>
                      <td>{pop.gov}</td>
                      <td>{pop.total_area_km2}</td>
                      <td>{pop.populated_area_km2}</td>
                      <td>{pop.populated_density_km}</td>
                      <td>{pop.total_population}</td>
                      <td>{pop.populated_area_of_total}</td>
                      <td>{pop.total_children}</td>
                      <td>{pop.density}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row className="row-col-pie-can">
            <Col
              style={{ width: "100%", height: "790px" }}
              className="col-pie-can"
            >
              <Pie
                data={data}
                className="pie-can"
                style={{
                  display: "block",
                  height: "790px",
                  width: "790px",
                  margin: "auto",
                }}
              />
            </Col>
          </Row>
        </>
      ) : null}
    </>
  );
};

export default PopulationArea;
