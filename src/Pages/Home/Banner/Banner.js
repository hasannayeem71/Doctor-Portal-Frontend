import { Button, Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import bg from "../../../images/bg.png";
import chair from "../../../images/chair.png";

const bannerBg = {
  background: `url(${bg})`,
};
const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 400,
};
const Banner = () => {
  return (
    <Container sx={{ flexGrow: 1 }} style={bannerBg}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ textAlign: "left" }}
          style={verticalCenter}>
          <Box>
            <Typography variant="h3">
              Your New Smile <br />
              Starts Here
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: 13, fontWeight: 300, color: "gray", my: 3 }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequuntur natus culpa delectus. Esse ab, in unde veniam cumque
              inventore molestias.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#5CE7ED" }}>
              GET APPOINTMENT
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{ width: "400px" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
