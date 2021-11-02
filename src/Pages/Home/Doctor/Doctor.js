import CallIcon from "@mui/icons-material/Call";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";

const Doctor = ({ doctor }) => {
  const { doctorImg, doctorName, phone } = doctor;
  return (
    <Card sx={{ maxWidth: 345, border: 0, boxShadow: 0 }}>
      <CardMedia
        component="img"
        height="140"
        image={doctorImg}
        alt={doctorName}
        sx={{ width: "auto", margin: "0 auto" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" sx={{ fontWeight: 500 }}>
          {doctorName}
        </Typography>
        <Typography
          variant="p"
          color="text.secondary"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <CallIcon color="info" /> {phone}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Doctor;
