import { Button } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  borderRadius: "20px",
  p: 4,
};

const AppointmentModal = ({
  openBooking,
  handleModalClose,
  availableAppointment,
  date,
}) => {
  const { name, time } = availableAppointment;
  const handleBookSubmit = (e) => {
    //collect data from the from and submit to database today
    e.preventDefault();
    handleModalClose();
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBooking}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={openBooking}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <form onSubmit={handleBookSubmit}>
              <TextField
                sx={{ width: "95%", m: 1 }}
                label="Time"
                id="outlined-size-small"
                defaultValue={time}
                disabled
                size="small"
              />
              <TextField
                sx={{ width: "95%", m: 1 }}
                label="Your Name"
                id="outlined-size-small"
                size="small"
              />
              <TextField
                sx={{ width: "95%", m: 1 }}
                label="Phone Number"
                id="outlined-size-small"
                size="small"
              />
              <TextField
                sx={{ width: "95%", m: 1 }}
                label="Email"
                id="outlined-size-small"
                // defaultValue={time}
                disabled
                size="small"
              />
              <TextField
                sx={{ width: "95%", m: 1 }}
                label="Date"
                id="outlined-size-small"
                defaultValue={date.toDateString()}
                disabled
                size="small"
              />
              <Button type="submit" variant="contained">
                SUBMIT
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default AppointmentModal;
