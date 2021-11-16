import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const UserAppointments = ({ date }) => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://doctorportalx.herokuapp.com/appointments?email=${
          user.email
        }&date=${date.toLocaleDateString()}`
      )
      .then((res) => setAppointments(res.data));
  }, [user, date]);
  return (
    <div>
      <h2>Appointment </h2>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">Service name</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow
                key={appointment._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row" align="right">
                  {appointment?.patientName}
                </TableCell>
                <TableCell align="right">{appointment?.time}</TableCell>
                <TableCell align="right">{appointment?.serviceName}</TableCell>
                <TableCell align="right">{appointment.payment? 'Paid':
                <Link to={`/dashboard/payment/${appointment._id}`}><button>Pay</button></Link>
                }</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserAppointments;
