import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import doctor from "../../../images/doctor-small.png";
import Doctor from "../Doctor/Doctor";
const doctors = [
  {
    _id: 1,
    doctorName: "Dr. Caudi",
    doctorImg: doctor,
    phone: "+61 4452 200 126",
  },
  {
    _id: 2,
    doctorName: "Dr. Caudi",
    doctorImg: doctor,
    phone: "+61 4452 200 126",
  },
  {
    _id: 3,
    doctorName: "Dr. Caudi",
    doctorImg: doctor,
    phone: "+61 4452 200 126",
  },
];
const Doctors = () => {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "500", color: "#5CE9F2", py: 5 }}>
        Our Doctors
      </Typography>
      <Grid container spacing={2}>
        {doctors.map((doctor) => (
          <Grid item xs={12} md={4} key={doctor._id}>
            <Doctor doctor={doctor} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Doctors;
