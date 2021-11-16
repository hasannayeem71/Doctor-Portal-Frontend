import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";
const Login = () => {
  const { logIn, logInWithPopUp } = useAuth();
  const [loginData, setLoginData] = useState({});

  const history = useHistory();
  const location = useLocation();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    logIn(
      loginData.email,
      loginData.password,

      location,
      history
    );
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 8 }} variant="body1" gutterBottom>
            LOGIN
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                onBlur={handleOnChange}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Password"
                name="password"
                onBlur={handleOnChange}
                type="password"
                variant="standard"
              />
              <Button
                type="submit"
                sx={{ width: "75%", m: 1 }}
                variant="contained">
                LOGIN
              </Button>{" "}
              <NavLink to="/register" style={{ textDecoration: "none" }}>
                <Button sx={{ width: "75%", m: 1 }} variant="text">
                  New user? Please register
                </Button>
              </NavLink>
            </form>
            <Button
              sx={{ width: 1 / 2, m: 1 }}
              variant="contained"
              onClick={() => logInWithPopUp(location, history)}>
              LOG IN WITH GOOGLE
            </Button>
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <img src={login} alt="" style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
