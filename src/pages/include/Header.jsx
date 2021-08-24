import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../../logo-2.png";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar position="static" style={{ backgroundColor: "#ffffff" }}>
          <Container>
            <Toolbar>
              <img src={logo} style={{ height: "50px" }} />
              <div style={{ width: "100%" }}>
                <Box display="flex" justifyContent="center" m={1} p={1}>
                  <Button size="large">Home</Button>
                  <Button size="large">About Us</Button>
                  <Button size="large">Services</Button>
                  <Button size="large">Work With Us</Button>
                  <Button size="large">Gift Cards</Button>
                  <Button size="large">Offers</Button>
                  <Button size="large">Login</Button>
                  <Button size="large">Pages</Button>
                  <Button size="large">Contact Us</Button>
                </Box>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
    </div>
  );
}
