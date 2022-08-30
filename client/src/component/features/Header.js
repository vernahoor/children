import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigator = useNavigate();
  return (
    <Box sx={{}}>
      <AppBar position="static" style={{ backgroundColor: "gray" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            style={{ marginRight: "30px", cursor: "pointer" }}
            onClick={() => navigator("/")}
          >
            Home
          </Typography>
          <Typography>
            <Dropdown variant="Secondary">
              <Dropdown.Toggle id="dropdown-basic" variant="Secondary">
                Themes
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/populations">Population</Dropdown.Item>
                <Dropdown.Item href="/education">Education</Dropdown.Item>
                <Dropdown.Item href="/child">Chlids</Dropdown.Item>
                <Dropdown.Item href="/culture">Culture</Dropdown.Item>
                <Dropdown.Item href="/env">Environment</Dropdown.Item>
                <Dropdown.Item href="/sport">Sports</Dropdown.Item>
                <Dropdown.Item href="/health">Health</Dropdown.Item>
                <Dropdown.Item href="/work">Work</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
