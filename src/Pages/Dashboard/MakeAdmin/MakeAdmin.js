import { Alert, Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();
  const handleObBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    const user = { email };
    const headers = { Authorization: `Bearer ${token}` };
    axios
      .put("https://doctorportalx.herokuapp.com/users/admin", { headers, user })
      .then((res) => {
        // console.log(res);
        if (res.data.modifiedCount) {
          setSuccess(true);
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <h2>Make An Admin</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ width: "50%" }}
          onBlur={handleObBlur}
          label="Email"
          type="email"
          variant="standard"
        />
        <br />
        <br />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
      {success && (
        <Alert>
          Admin added successfully
          <Button onClick={() => setSuccess(false)}>X</Button>
        </Alert>
      )}
    </div>
  );
};

export default MakeAdmin;
