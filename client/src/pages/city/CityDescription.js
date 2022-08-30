import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import Box from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Table } from "react-bootstrap";
const CityDescription = () => {
  const { id } = useParams();
  const [fill, setFill] = useState([]);
  const [me, setMe] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/api/city/${id}`);
      console.log(res);
      setFill(res.data);
    };
    fetchData();
  }, []);
  const handleClick = () => {
    setMe(!me);
  };
  return (
    <Container sx={{ marginTop: "20px" }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            City: {fill[0]?.name} , Country: {fill[0]?.country}, Iso2: EG
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            lat: {fill[0]?.lat}, long: {fill[0]?.long}
          </Typography>
          <Typography variant="body2">
            Populations_num:{" "}
            <Button variant="contained" color="primary">
              {fill[0]?.populations_num}
            </Button>
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <div style={{ marginTop: "10px" }}>
        {fill[0]?.regions?.map((reg, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{reg.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ marginBottom: "5px" }}>Populations:</Typography>
              <Typography>
                males: {reg.populations.male}-{" "}
                {(reg.populations.male * 100) / reg.populations.total}%,
                females:
                {reg.populations.female}-{" "}
                {(reg.populations.female * 100) / reg.populations.total}%,
              </Typography>
              <hr />
              <Typography>
                schools:{" "}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleClick}
                >
                  {reg.educations.length}
                </Button>
                , hospitals:
                <Button variant="contained" color="primary">
                  {reg.hospitals.length}
                </Button>
              </Typography>
              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "space-betwwen",
                }}
              >
                <Table
                  striped
                  bordered
                  hover
                  style={{ marginRight: "10px", height: "100%" }}
                >
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>name</th>
                      <th>students</th>
                      <th>teachers</th>
                    </tr>
                  </thead>
                  {reg?.educations?.map((edu, index) => (
                    <tbody key={index}>
                      <tr>
                        <td>{++index}</td>
                        <td>{edu.name}</td>
                        <td>{edu.students}</td>
                        <td>{edu.teachers}</td>
                      </tr>
                    </tbody>
                  ))}
                </Table>
                <Table striped bordered hover style={{ height: "100%" }}>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>name</th>
                      <th>doctors</th>
                      <th>patients</th>
                    </tr>
                  </thead>
                  {reg?.hospitals?.map((edu, index) => (
                    <tbody key={index}>
                      <tr>
                        <td>{++index}</td>
                        <td>{edu.name}</td>
                        <td>{edu.doctors}</td>
                        <td>{edu.patients}</td>
                      </tr>
                    </tbody>
                  ))}
                </Table>
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </Container>
  );
};
export default CityDescription;
