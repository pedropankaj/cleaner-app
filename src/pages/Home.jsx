import React  from "react";
import Header from "./include/Header";
import Footer from "./include/Footer";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import HomeIcon from "@material-ui/icons/Home";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import MessageIcon from "@material-ui/icons/Message";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  shape1: {
    position: "absolute",
    width: "500px",
    top: "1vw",
    left: "-3vw",
    opacity: 0.1,
    transform: "scale(2.3) rotate( 45deg )",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Container>
        <Box display="flex" alignItems="center" style={{ height: "90vh" }}>
          <Box style={{ flex: 1 }}>
            <img
              src="https://via.placeholder.com/470x230/dddddd/845EC2"
              className="githubIcon"
              style={{ height: "200px" }}
              alt-text=""
            />
          </Box>
          <Box style={{ flex: 1 }}>
            <Typography variant="h3">
              Nothing inspires cleanliness more than an unexpected guest.
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Send
            </Button>
            {/* <img src={shape1} alt="shape" className={classes.shape1}/> */}
          </Box>
        </Box>
        <Box style={{ height: "500px" }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={5}
          >
            <Grid item xs={12}>
              <Typography align="center" color="primary">
                Our Services
              </Typography>
              <Typography align="center" variant="h4">
                What We Do?
              </Typography>
              <Typography align="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Box
                border={2}
                borderColor="#8a3ffc"
                borderRadius={20}
                style={{ padding: "30px" }}
              >
                <HomeIcon />
                <Typography variant="h5">Residential</Typography>
                <Typography>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                border={2}
                borderColor="#8a3ffc"
                borderRadius={20}
                style={{ padding: "30px" }}
              >
                <AccountBalanceIcon />
                <Typography variant="h5">Commercial</Typography>
                <Typography>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box style={{ minHeight: "60vh" }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={7}
          >
            <Grid item xs={6}>
              <img
                src="https://via.placeholder.com/470x230/dddddd/845EC2"
                className="githubIcon"
                style={{ height: "280px" }}
                alt-text=""
              />
            </Grid>
            <Grid item xs={6}>
              <Box>
                <Typography variant="h4">Cleaniness is a state of</Typography>
                <Typography variant="h4">Purity and Clarity</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. .
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Send
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box display="flex" alignItems="center" style={{ height: "500px" }}>
        <Box
          display="flex"
          alignItems="center"
          style={{ minHeight: "350px", backgroundColor: "#845ec2" }}
          flexGrow={1}
        >
          <Container>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={5}
            >
              <Grid item xs={12}>
                <Box
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <HomeIcon />
                    <Typography align="center" variant="h3">
                      15425
                    </Typography>
                    <Typography align="center">HOMES</Typography>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <HomeIcon />
                    <Typography align="center" variant="h3">
                      15425
                    </Typography>
                    <Typography align="center">HOMES</Typography>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <HomeIcon />
                    <Typography align="center" variant="h3">
                      15425
                    </Typography>
                    <Typography align="center">HOMES</Typography>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <HomeIcon />
                    <Typography align="center" variant="h3">
                      15425
                    </Typography>
                    <Typography align="center">HOMES</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>

      <Box style={{ height: "500px" }}>
        <Typography align="center" color="primary">
          estimonial
        </Typography>
        <Typography align="center" variant="h4">
          Customer says
        </Typography>

        <Container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={5}
          >
            <Grid item xs={3}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                style={{
                  height: "300px",
                  width: "300px",
                  backgroundColor: "rgb(132 94 194 / 10%)",
                }}
              >
                <Typography style={{ padding: "5px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris non tellus nec ante congue pellentesque. Vestibulum
                  vitae varius lectus. Lorem ipsum dolor sit amet.
                </Typography>

                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={5}
                >
                  <Grid item xs={6}>
                    <MessageIcon />
                  </Grid>
                  <Grid item xs={6}>
                    <PersonIcon />
                    Kiran Jeo
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                style={{
                  height: "300px",
                  width: "300px",
                  backgroundColor: "rgb(132 94 194 / 10%)",
                }}
              >
                <Typography style={{ padding: "5px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris non tellus nec ante congue pellentesque. Vestibulum
                  vitae varius lectus. Lorem ipsum dolor sit amet.
                </Typography>

                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={5}
                >
                  <Grid item xs={6}>
                    <MessageIcon />
                  </Grid>
                  <Grid item xs={6}>
                    <PersonIcon />
                    Kiran Jeo
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                style={{
                  height: "300px",
                  width: "300px",
                  backgroundColor: "rgb(132 94 194 / 10%)",
                }}
              >
                <Typography style={{ padding: "5px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris non tellus nec ante congue pellentesque. Vestibulum
                  vitae varius lectus. Lorem ipsum dolor sit amet.
                </Typography>

                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={5}
                >
                  <Grid item xs={6}>
                    <MessageIcon />
                  </Grid>
                  <Grid item xs={6}>
                    <PersonIcon />
                    Kiran Jeo
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                style={{
                  height: "300px",
                  width: "300px",
                  backgroundColor: "rgb(132 94 194 / 10%)",
                }}
              >
                <Typography style={{ padding: "5px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris non tellus nec ante congue pellentesque. Vestibulum
                  vitae varius lectus. Lorem ipsum dolor sit amet.
                </Typography>

                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={5}
                >
                  <Grid item xs={6}>
                    <MessageIcon />
                  </Grid>
                  <Grid item xs={6}>
                    <PersonIcon />
                    Kiran Jeo
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </div>
  );
}
