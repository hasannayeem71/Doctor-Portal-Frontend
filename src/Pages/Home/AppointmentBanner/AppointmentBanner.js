import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import bgAppointment from "../../../images/appointment-bg.png";
import doctor from "../../../images/doctor.png";
const appointmentBg = {
  background: `url(${bgAppointment})`,
  backgroundColor: "rgba(45, 58, 74, 0.9)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: 175,
  marginBottom: "50px",
};
const AppointmentBanner = () => {
  return (
    <Box sx={{ flexGrow: 1 }} style={appointmentBg}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            src={doctor}
            style={{ width: 400, marginTop: "-110px" }}
            alt=""
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            textAlign: "left",
          }}>
          <Box>
            <Typography sx={{ color: "#5CE7ED" }} variant="h6">
              APPOINTMENT
            </Typography>
            <Typography variant="h4" sx={{ my: 3, color: "white" }}>
              MAKE AN APPOINTMENT TODAY
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "white", fontSize: 14, fontWeight: 300, mb: 5 }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              perferendis quia laudantium rerum, voluptates accusantium delectus
              exercitationem amet eos quos!
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#5CE7ED" }}>
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
