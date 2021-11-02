import { CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";

const Service = ({ service }) => {
  const { name, img, description } = service;
  return (
    <Card sx={{ minWidth: 275, border: "0", boxShadow: "0" }}>
      <CardMedia
        component="img"
        style={{ width: "auto", height: "80px", margin: "0px auto" }}
        image={img}
        alt={name}
      />
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom></Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Service;
