import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import DataTable from "react-data-table-component";
import Filter from "../../component/filter/FilterEdu";
import { useDispatch, useSelector } from "react-redux";
import { listEdu } from "../../redux/actions/educationsAction/education";
const Education = () => {
  const dispatch = useDispatch();

  const [columnDefs, setColumnDefs] = useState([
    {
      name: "city",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "education",
      selector: (row) => row.education_type,
    },
    {
      name: "type",
      selector: (row) => row.type,
    },

    {
      name: "dependency",
      selector: (row) => row.dependency,
    },
    {
      name: "residence",
      selector: (row) => row.residence,
    },
    {
      name: "level",
      selector: (row) => row.level,
    },
    {
      name: "year",
      selector: (row) => row.year,
    },
    {
      name: "students",
      selector: (row) => row.students,
    },
    {
      name: "teachers",
      selector: (row) => row.teachers,
    },
  ]);
  useEffect(() => {
    dispatch(listEdu());
  }, []);
  const listEduReducer = useSelector((state) => state.listEduReducer);
  const { educations } = listEduReducer;

  return (
    <Container style={{ marginTop: "20px" }}>
      <Filter />
      <div>
        <DataTable
          columns={columnDefs}
          data={educations}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="400px"
          selectableRows
          selectableRowsHighlight
          highlightOnHover
        />
      </div>
    </Container>
  );
};

export default Education;
