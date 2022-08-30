import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import HouseIcon from "@mui/icons-material/House";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import PaidIcon from "@mui/icons-material/Paid";
import SportsIcon from "@mui/icons-material/Sports";
import WorkIcon from "@mui/icons-material/Work";
import { Link } from "react-router-dom";
import popImg from "../../img/population.png";
import eduImg from "../../img/edu.png";
import childImg from "../../img/child.png";
import culImg from "../../img/culture.png";
import envImg from "../../img/env.png";
import workImg from "../../img/manpower.png";
const Category = () => {
  return (
    <>
      <Row style={{ marginBottom: "10px" }}>
        <Col>
          <Card
            className="categories-content-card"
            style={{
              background: "none",
              color: "gray",
              border: "1px solid gray",
            }}
          >
            <Card.Body>
              <Card.Title>Populations</Card.Title>
              <Card.Text className="categories-content-card-text">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Link
                    to="/populations"
                    style={{ marginTop: "10px", color: "gray" }}
                  >
                    Click to view this theme
                  </Link>

                  <img src={popImg} style={{ width: "40%" }} />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            className="categories-content-card"
            style={{
              background: "none",
              color: "gray",
              border: "1px solid gray",
            }}
          >
            <Card.Body>
              <Card.Title>Education</Card.Title>
              <Card.Text className="categories-content-card-text">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Link
                    to="/education"
                    style={{ marginTop: "10px", color: "gray" }}
                  >
                    Click to view this theme
                  </Link>
                  <img src={eduImg} style={{ width: "24%" }} />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            className="categories-content-card"
            style={{
              background: "none",
              color: "gray",
              border: "1px solid gray",
            }}
          >
            <Card.Body>
              <Card.Title>Childs</Card.Title>
              <Card.Text className="categories-content-card-text">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link
                    to="/child"
                    style={{ marginTop: "10px", color: "gray" }}
                  >
                    Click to view this theme
                  </Link>
                  <img src={childImg} style={{ width: "24%" }} />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginBottom: "10px" }}>
        <Col>
          <Card
            className="categories-content-card"
            style={{
              background: "none",
              color: "gray",
              border: "1px solid gray",
            }}
          >
            <Card.Body>
              <Card.Title>Culture</Card.Title>
              <Card.Text className="categories-content-card-text">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link
                    to="/culture"
                    style={{ marginTop: "10px", color: "gray" }}
                  >
                    Click to view this theme
                  </Link>
                  <img src={culImg} style={{ width: "24%" }} />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            className="categories-content-card"
            style={{
              background: "none",
              color: "gray",
              border: "1px solid gray",
            }}
          >
            <Card.Body>
              <Card.Title>Environment & Housing </Card.Title>
              <Card.Text className="categories-content-card-text">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link
                    to="/house"
                    style={{ marginTop: "10px", color: "gray" }}
                  >
                    Click to view this theme
                  </Link>
                  <img src={envImg} style={{ width: "24%" }} />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            className="categories-content-card"
            style={{
              background: "none",
              color: "gray",
              border: "1px solid gray",
            }}
          >
            <Card.Body>
              <Card.Title>Sports</Card.Title>
              <Card.Text className="categories-content-card-text">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link
                    to="/sport"
                    style={{ marginTop: "10px", color: "gray" }}
                  >
                    Click to view this theme
                  </Link>
                  <img
                    src={
                      "https://cdn-icons-png.flaticon.com/512/857/857455.png"
                    }
                    style={{ width: "24%" }}
                  />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginBottom: "10px" }}>
        <Col>
          <Card
            className="categories-content-card"
            style={{
              background: "none",
              color: "gray",
              border: "1px solid gray",
            }}
          >
            <Card.Body>
              <Card.Title>Health</Card.Title>
              <Card.Text className="categories-content-card-text">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link
                    to="/health"
                    style={{ marginTop: "10px", color: "gray" }}
                  >
                    Click to view this theme
                  </Link>
                  <img
                    src={
                      "https://www.pngfind.com/pngs/m/85-858511_health-icon-hd-png-download.png"
                    }
                    style={{ width: "24%" }}
                  />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            className="categories-content-card"
            style={{
              background: "none",
              color: "gray",
              border: "1px solid gray",
            }}
          >
            <Card.Body>
              <Card.Title>Work</Card.Title>
              <Card.Text className="categories-content-card-text">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link to="/work" style={{ marginTop: "10px", color: "gray" }}>
                    Click to view this theme
                  </Link>
                  <img src={workImg} style={{ width: "20%" }} />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
};

export default Category;
