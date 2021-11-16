import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import servicePicture from "../../../images/treatment.png";
const OurService = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img src={servicePicture} style={{ width: "70%" }} alt="" />
        </Grid>
        <Grid item xs={12} md={6} sx={{ p: 3, ps: 0 }}>
          <Typography
            variant="h4"
            sx={{
              textAlign: "left",
              mb: 3,
              fontWeight: 600,
            }}>
            Exceptional Dental <br /> Care,On Your terms
          </Typography>
          <Typography
            variant="p"
            sx={{
              textAlign: "left",
              mb: 3,
            }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            modi quaerat minus excepturi laborum, reprehenderit, labore
            accusantium illum voluptates quis dolorem rerum temporibus placeat
            ullam ea est debitis eos voluptate obcaecati nesciunt! Voluptatem,
            ea quo beatae repellendus libero tempora at. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Facilis quisquam necessitatibus
            debitis deserunt, ab optio blanditiis? Nam perferendis iste dicta
            nobis temporibus cupiditate ducimus voluptas omnis consequatur
            numquam veniam at facere aspernatur modi non eius nisi ea dolore, ab
            odio?
          </Typography>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#5CE7ED",
              display: "block",
              marginTop: "10%",
            }}>
            LEARN MORE
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurService;
