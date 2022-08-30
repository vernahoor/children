import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import DataTable from "react-data-table-component";
import Filter from "../../component/filter/FilterPop";
import { useDispatch, useSelector } from "react-redux";
import { listPop } from "../../redux/actions/populationAction/population";
import ListGroup from "react-bootstrap/ListGroup";
import PopulationArea from "../../component/populations/PopulationArea";
import TransitionAlerts from "../../component/populations/Alert";
import PopulationTotal from "../../component/populations/PopulationTotal";
import TotalAges from "../../component/populations/TotalAges";
const Populations = () => {
  return (
    <Container style={{ marginTop: "20px" }}>
      <TransitionAlerts />
      {/* <PopulationMiddle /> */}
      <PopulationTotal />
      {/*<AgeGroup18 /> */}

      <TotalAges />
      <PopulationArea />
    </Container>
  );
};

export default Populations;
