import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React from "react";
const Testimonial = ({ testimonial }) => {
  const { sayAbout, userImg, from, userName } = testimonial;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {sayAbout}
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar alt="" src={userImg} />
          <Box sx={{ ml: 2 }}>
            <Typography variant="h6" color="#5CE7ED">
              {userName}
            </Typography>
            <Typography
              sx={{ textAlign: "left" }}
              variant="body2"
              color="text.secondary">
              {from}
            </Typography>
          </Box>
        </Box>
      </CardActions>
    </Card>
  );
};

export default Testimonial;
