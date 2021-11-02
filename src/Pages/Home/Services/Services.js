import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import cavity from "../../../images/cavity.png";
import fluoride from "../../../images/fluoride.png";
import whitening from "../../../images/whitening.png";
import Service from "../Service/Service";

const services = [
  {
    name: "Fluoride Treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas",
    img: fluoride,
    _id: 1,
  },
  {
    name: "Cavity Filling",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas",
    img: cavity,
    _id: 2,
  },
  {
    name: "Teeth Whitening",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas",
    img: whitening,
    _id: 3,
  },
];
const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          sx={{ color: "success.main", fontWeight: 500, m: 2 }}
          variant="h6"
          component="div">
          OUR SERVICES
        </Typography>
        <Typography sx={{ fontWeight: 600, m: 2 }} variant="h4" component="div">
          SERVICES WE PROVIDE
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}>
          {services.map((service) => (
            <Grid item xs={4} sm={4} md={4} key={service._id}>
              <Service service={service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
