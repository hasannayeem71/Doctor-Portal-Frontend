import { Grid } from "@mui/material";
import React from "react";
import Calender from "../../Shared/Calender/Calender";
import UserAppointments from "../UserAppointments/UserAppointments";

const DashboardHome = ({ date, setDate }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Calender date={date} setDate={setDate} />
      </Grid>
      <Grid item xs={12} md={6}>
        <UserAppointments date={date} />
      </Grid>
    </Grid>
  );
};

export default DashboardHome;
