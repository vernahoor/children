import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import TerrainIcon from "@mui/icons-material/Terrain";
import PanToolIcon from "@mui/icons-material/PanTool";
import LiquorIcon from "@mui/icons-material/Liquor";
import Chart from "../../component/chart/chartCrime/Chart";
const Crime = () => {
  return (
    <Container style={{ marginTop: "30px" }}>
      <Typography>
        The absence of a safe and secure place in which to live can have an
        extremely negative impact on physical and emotional health and
        wellbeing. This report displays data on overall crime and a breakdown of
        crime types for Leeds. Single crime case data have been aggregated for
        Leeds and rates are calculated per 1,000 population. 12-month rolling
        figures use an average of the population monthly figures over the same
        period. Where the dates for the crime data exceed the latest available
        date for population estimates, the latest population figure was used for
        any crime rates after that date (no extrapolating).
      </Typography>
      <Row style={{ marginTop: "15px" }}>
        <Col>
          <Card
            style={{
              padding: "15px",
              textAlign: "center",
              margin: "auto",
            }}
          >
            <Typography>
              <TerrainIcon fontSize="large" />
            </Typography>
            <Typography variant="h2">109,688</Typography>
            <Typography>Total number of crimes (Jun-21 - May-22)</Typography>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              padding: "15px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItem: "center",
            }}
          >
            <Typography>
              <LiquorIcon fontSize="large" />
            </Typography>

            <Typography variant="h2">11,824</Typography>
            <Typography>Anti-social behaviour (Jun-21 - May-22)</Typography>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              padding: "15px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItem: "center",
            }}
          >
            <Typography>
              {" "}
              <PanToolIcon fontSize="large" />
            </Typography>
            <Typography variant="h2">46,978</Typography>
            <Typography>
              Violence and sexual offences (Jun-21 - May-22) 
            </Typography>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Chart />
        </Col>
      </Row>
    </Container>
  );
};

export default Crime;
