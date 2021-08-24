import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import logo from "../../logo-2.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import footerBg from "../../footer-bg.svg";
import Button from "@material-ui/core/Button";

class Footer extends React.Component {
  render() {
    return (
      <Box>
        <img src={footerBg} style={{ marginBottom: "-6px" }} />
        <Box style={{ backgroundColor: "#8a3ffc" }}>
          <Container style={{ paddingBottom: "100px", paddingTop: "50px" }}>
            <Box>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={5}
              >
                <Grid item xs={3}>
                  <img src={logo} style={{ height: "50px" }} />
                  <Box display="flex" alignItems="center">
                    <FacebookIcon />
                    <WhatsAppIcon />
                    <TwitterIcon />
                    <LinkedInIcon />
                    <YouTubeIcon />
                  </Box>
                </Grid>

                <Grid item xs={3}>
                  <Box
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <Typography variant="h5"> Call Us</Typography>
                    <Typography>+1 1234-567-89</Typography>
                  </Box>
                </Grid>

                <Grid item xs={3}>
                  <Box
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <Typography variant="h5"> Email Us</Typography>
                    <Typography>hello@konnectplugins.com</Typography>
                  </Box>
                </Grid>

                <Grid item xs={3}>
                  <Box
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <Typography variant="h5"> Address</Typography>
                    <Typography>#12 cross lane banglore</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
          <Box display="flex" flexDirection="row-reverse">
            <Box>
              <Box>
                <Button variant="contained">Blog</Button>
              </Box>
              <Box>
                <Button variant="contained">Carriers</Button>
              </Box>
              <Box>
                <Button variant="contained">Get free quote</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Footer;
