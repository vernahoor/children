import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  listPopMiddle,
  listPopTotal,
} from "../../redux/actions/populationAction/population";
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
import ChartBar from "../chart/totalPopulation/Bar";
import ChartLine from "../chart/totalPopulation/Line";
import ChartPie from "../chart/totalPopulation/Pie";
import CountUp from "react-countup";
import { Typography } from "@mui/material";

const PopulationTotal = () => {
  const dispatch = useDispatch();
  const listPopTotalReducer = useSelector((state) => state.listPopTotalReducer);
  const { popTotal, loading, error } = listPopTotalReducer;
  useEffect(() => {
    dispatch(listPopTotal());
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : popTotal ? (
        <>
          <Typography variant="h4">
            Total Population From 1996 To 2022
          </Typography>
          <hr style={{ width: "240px" }} />
          <Typography variant="p">
            In 2021, population for Egypt was 104 million persons. Over the last
            50 years, population of Egypt grew substantially from 36.1 million
            to 104 million persons rising at an increasing annual rate that
            reached a maximum of 2.75% in 1987 and then decreased to 1.88% in
            2021
          </Typography>
          <Table
            striped
            bordered
            hover
            style={{
              marginBottom: "30px",
              marginTop: "20px",
            }}
          >
            <thead>
              <tr>
                <th>#</th>
                <th>Sex</th>

                <th>1996</th>
                <th>1997</th>
                <th>1998</th>
                <th>1999</th>
                <th>2000</th>
                <th>2001</th>
                <th>2002</th>
                <th>2003</th>
                <th>2004</th>
                <th>2005</th>
                <th>2006</th>
                <th>2007</th>
                <th>2008</th>
                <th>2009</th>
                <th>2010</th>
              </tr>
            </thead>
            <tbody>
              {popTotal.map((pop, index) => (
                <tr key={index}>
                  <td>{++index}</td>
                  <td>{pop?.sex}</td>
                  <td>{pop?.total_96?.toLocaleString()}</td>
                  <td>{pop?.total_97?.toLocaleString()}</td>
                  <td>{pop?.total_98?.toLocaleString()}</td>
                  <td>{pop?.total_99?.toLocaleString()}</td>
                  <td>{pop?.total_2000?.toLocaleString()}</td>
                  <td>{pop?.total_2001?.toLocaleString()}</td>
                  <td>{pop?.total_2002?.toLocaleString()}</td>
                  <td>{pop?.total_2003?.toLocaleString()}</td>
                  <td>{pop?.total_2004?.toLocaleString()}</td>
                  <td>{pop?.total_2005?.toLocaleString()}</td>
                  <td>{pop?.total_2006?.toLocaleString()}</td>
                  <td>{pop?.total_2007?.toLocaleString()}</td>
                  <td>{pop?.total_2008?.toLocaleString()}</td>
                  <td>{pop?.total_2009?.toLocaleString()}</td>
                  <td>{pop?.total_2010?.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>

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
                <th>2011</th>
                <th>2012</th>
                <th>2013</th>
                <th>2014</th>
                <th>2015</th>
                <th>2016</th>
                <th>2017</th>
                <th>2018</th>
                <th>2019</th>
                <th>2020</th>
                <th>2021</th>
                <th>2022</th>
              </tr>
            </thead>
            <tbody>
              {popTotal.map((pop, index) => (
                <tr key={index}>
                  <td>{++index}</td>
                  <td>{pop?.sex}</td>
                  <td>{pop?.total_2011?.toLocaleString()}</td>
                  <td>{pop?.total_2012?.toLocaleString()}</td>
                  <td>{pop?.total_2013?.toLocaleString()}</td>
                  <td>{pop?.total_2014?.toLocaleString()}</td>
                  <td>{pop?.total_2015?.toLocaleString()}</td>

                  <td>{pop?.total_2016?.toLocaleString()}</td>
                  <td>{pop?.total_2017?.toLocaleString()}</td>
                  <td>{pop?.total_2018?.toLocaleString()}</td>
                  <td>{pop?.total_2019?.toLocaleString()}</td>
                  <td>{pop?.total_2020?.toLocaleString()}</td>
                  <td>{pop?.total_2021?.toLocaleString()}</td>
                  <td>{pop?.total_2022?.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <ChartBar arr={popTotal} />
          <ChartLine arr={popTotal} />
          <ChartPie arr={popTotal} />
        </>
      ) : null}
    </div>
  );
};

export default PopulationTotal;
