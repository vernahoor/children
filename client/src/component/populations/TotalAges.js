import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  listPopMiddle,
  listPopTotal,
  listTotalAge,
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
import ChartBar from "../chart/totalAge/Bar";
import ChartLine from "../chart/totalAge/Line";
import ChartPie from "../chart/totalPopulation/Pie";
import CountUp from "react-countup";
import { Typography } from "@mui/material";

const TotalAges = () => {
  const dispatch = useDispatch();
  const listPopTotalAgeReducer = useSelector(
    (state) => state.listPopTotalAgeReducer
  );
  const { popTotalAge, loading, error } = listPopTotalAgeReducer;
  useEffect(() => {
    dispatch(listTotalAge());
  }, []);
  const arr1 = popTotalAge.filter(
    (pop) => pop.sex != "حضر" && pop.sex != "ريف" && pop.sex != "الجملة"
  );
  const arr2 = popTotalAge.filter(
    (pop) => pop.sex != "ذكور" && pop.sex != "إناث" && pop.sex != "الجملة"
  );

  return (
    <div style={{ marginTop: "40px" }}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : popTotalAge ? (
        <>
          <Typography variant="h4">
            Children Under 18 Years For Egypt From 2016 To 2022
          </Typography>
          <hr style={{ width: "240px" }} />
          <Typography variant="p">
            Children under 18 years for Egypt from 2016 to 2022 filter by sex
            boys and girls
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
              {arr1.map((pop, index) => (
                <tr key={index}>
                  <td>{++index}</td>
                  <td>{pop.sex}</td>
                  <td>{pop.total_2016.toLocaleString()}</td>
                  <td>{pop.total_2017.toLocaleString()}</td>
                  <td>{pop.total_2018.toLocaleString()}</td>
                  <td>{pop.total_2019.toLocaleString()}</td>
                  <td>{pop.total_2020.toLocaleString()}</td>
                  <td>{pop.total_2021.toLocaleString()}</td>
                  <td>{pop.total_2022.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Typography variant="p">
            Children under 18 years for Egypt from 2019 to 2022 filter by
            Residence
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
                <th>Residence</th>

                <th>2018</th>
                <th>2019</th>
                <th>2020</th>
                <th>2021</th>
                <th>2022</th>
              </tr>
            </thead>
            <tbody>
              {arr2.map((pop, index) => (
                <tr key={index}>
                  <td>{++index}</td>
                  <td>{pop.sex}</td>

                  <td>{pop.total_2018.toLocaleString()}</td>
                  <td>{pop.total_2019.toLocaleString()}</td>
                  <td>{pop.total_2020.toLocaleString()}</td>
                  <td>{pop.total_2021.toLocaleString()}</td>
                  <td>{pop.total_2022.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <ChartBar arr={arr1} />
          <ChartLine arr={arr2} />
        </>
      ) : null}
    </div>
  );
};

export default TotalAges;
