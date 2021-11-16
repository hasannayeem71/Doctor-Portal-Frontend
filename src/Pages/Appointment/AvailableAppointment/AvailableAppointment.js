import { Button, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import AppointmentModal from "../AppointmentModal/AppointmentModal";

const AvailableAppointment = ({
  availableAppointment,
  date,
  setBookingSuccess,
}) => {
  const { name, time, space } = availableAppointment;
  const [openBooking, setOpenBooking] = useState(false);
  const handleModalOpen = () => setOpenBooking(true);
  const handleModalClose = () => setOpenBooking(false);
  return (
    <>
      <Paper elevation="3" sx={{ py: 5 }}>
        <Typography variant="h5" sx={{ color: "info.main", fontWeight: "600" }}>
          {name}
        </Typography>
        <Typography variant="h6">{time}</Typography>
        <Typography variant="caption" display="block">
          {space} SPACES AVAILABLE
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: "primary.main" }}
          onClick={handleModalOpen}>
          BOOK APPOINTMENT
        </Button>
      </Paper>
      <AppointmentModal
        availableAppointment={availableAppointment}
        openBooking={openBooking}
        handleModalClose={handleModalClose}
        date={date}
        setBookingSuccess={setBookingSuccess}
      />
    </>
  );
};

export default AvailableAppointment;
