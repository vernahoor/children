import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { filterPop } from "../../redux/actions/populationAction/population";
const Filter = () => {
  const dispatch = useDispatch();
  const cities = ["all", "cairo", "giza", "sohag", "aswan", "alex"];
  const years = ["all", "2018", "2019", "2020", "2021", "2022"];

  const listPopReducer = useSelector((state) => state.listPopReducer);
  const { populations } = listPopReducer;
  const [city, setCity] = useState("all");
  const [year, setYear] = useState("all");
  const filterHandler = () => {
    dispatch(filterPop(city, year));
  };

  return (
    <div style={{ display: "flex", marginBottom: "10px" }}>
      <Form.Select
        aria-label="Default select example"
        style={{ marginRight: "10px" }}
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        {cities.map((city) => (
          <option value={city}>{city}</option>
        ))}
      </Form.Select>
      <Form.Select
        aria-label="Default select example"
        style={{ marginRight: "10px" }}
        value={year}
        onChange={(e) => setYear(e.target.value)}
      >
        {years.map((year) => (
          <option value={year}>{year}</option>
        ))}
      </Form.Select>
      <Button variant="primary" size="lg" onClick={filterHandler}>
        Filter
      </Button>
    </div>
  );
};

export default Filter;
