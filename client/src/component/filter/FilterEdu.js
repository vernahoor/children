import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { filterEdu } from "../../redux/actions/educationsAction/education";
const Filter = () => {
  const dispatch = useDispatch();
  const cities = ["all", "cairo", "giza", "sohag", "aswan", "alex"];
  const years = ["all", "2018", "2019", "2020", "2021", "2022"];
  const types = ["all", "azhar", "ministry"];
  const levels = ["all", "primary", "middle", "high"];
  const dependencies = ["all", "private", "public"];

  const listEduReducer = useSelector((state) => state.listEduReducer);
  const { educations } = listEduReducer;
  const [city, setCity] = useState("all");
  const [year, setYear] = useState("all");
  const [education, setEducation] = useState("all");
  const [level, setLevel] = useState("all");
  const [dependency, setDependency] = useState("all");
  const filterHandler = () => {
    dispatch(filterEdu(city, year, education, level, dependency));
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
      <Form.Select
        aria-label="Default select example"
        style={{ marginRight: "10px" }}
        value={education}
        onChange={(e) => setEducation(e.target.value)}
      >
        {types.map((type) => (
          <option value={type}>{type}</option>
        ))}
      </Form.Select>
      <Form.Select
        aria-label="Default select example"
        style={{ marginRight: "10px" }}
        value={level}
        onChange={(e) => setLevel(e.target.value)}
      >
        {levels.map((level) => (
          <option value={level}>{level}</option>
        ))}
      </Form.Select>
      <Form.Select
        aria-label="Default select example"
        style={{ marginRight: "10px" }}
        value={dependency}
        onChange={(e) => setDependency(e.target.value)}
      >
        {dependencies.map((dep) => (
          <option value={dep}>{dep}</option>
        ))}
      </Form.Select>
      <Button variant="primary" size="lg" onClick={filterHandler}>
        Filter
      </Button>
    </div>
  );
};

export default Filter;
