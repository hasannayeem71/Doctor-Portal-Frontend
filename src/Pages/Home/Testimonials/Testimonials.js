import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import React from "react";
import people1 from "../../../images/people-1.png";
import people2 from "../../../images/people-2.png";
import people3 from "../../../images/people-3.png";
import Testimonial from "../Testimonial/Testimonial";

const testimonials = [
  {
    _id: 1,
    userName: "Winson Herry",
    sayAbout: `Lizards are a widespread group of squamate reptiles, with over
        6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over
        6,000 species, ranging across all continents except Antarctica`,
    userImg: people1,
    from: `california`,
  },
  {
    _id: 2,
    userName: "Winson Herry",
    sayAbout: `Lizards are a widespread group of squamate reptiles, with over
        6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over
        6,000 species, ranging across all continents except Antarctica`,
    userImg: people2,
    from: `california`,
  },
  {
    _id: 3,
    userName: "Winson Herry",
    sayAbout: `Lizards are a widespread group of squamate reptiles, with over
        6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over
        6,000 species, ranging across all continents except Antarctica`,
    userImg: people3,
    from: `california`,
  },
];

const Testimonials = () => {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          textAlign: "left",
          p: 3,
          background: "url('https://tims.ac.in/img/open.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}>
        <Typography variant="h5" sx={{ color: "#5CE7ED" }}>
          TESTIMONIAL
        </Typography>
        <Typography variant="h3">
          Whats Our Patients <br /> Says
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {testimonials.map((testimonial) => (
          <Grid item xs={12} md={4} key={testimonial._id}>
            <Testimonial testimonial={testimonial} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonials;
