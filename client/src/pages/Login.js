import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import "../styles/Login.css";
const Login = ({ history }) => {
  const classes = makeStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      margin: 8,
    },
  })();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [usernameError, setUError] = useState(false);
  const [passwordError, setPError] = useState(false);
  const [nameExistError, setNEError] = useState(false);
  const [matchError, setMError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const valuesOnChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  function goToMonitor() {
    setUError(values.username === "");
    setPError(values.password === "");
    setMError(false);
    setNEError(false);
    if (values.password !== "" && values.username !== "") {
      //Check Whether the username and password is correct
      /*Set this after success login*/ sessionStorage.setItem("userID", values.username);
      window.location = "/Monitor";
    }
  }

  return (
    <div className="page_container">
      <div className="right_container">
        <div className="input_container">
          <h1 style={{ fontFamily: "Georgia", textAlign: "center" }}>Login</h1>
          <div style={{ height: 20 }} />
          <FormControl className={classes.root} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-username" style={{ backgroundColor: "white" }}>
              Username
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-username"
              type="text"
              autoComplete="off"
              value={values.username}
              name="username"
              error={usernameError || nameExistError}
              onChange={valuesOnChange}
              labelWidth={70}
            />
            {usernameError && <FormHelperText style={{ color: "red" }}>Username can't be empty</FormHelperText>}
            {nameExistError && <FormHelperText style={{ color: "red" }}>Username doesn't exist</FormHelperText>}
          </FormControl>
          <div style={{ height: 20 }} />
          <FormControl className={classes.root} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password" style={{ backgroundColor: "white" }}>
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              autoComplete="off"
              value={values.password}
              error={passwordError}
              name="password"
              onChange={valuesOnChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
            {passwordError && <FormHelperText style={{ color: "red" }}>Password can't be empty</FormHelperText>}
            {matchError && <FormHelperText style={{ color: "red" }}>Wrong username or password.</FormHelperText>}
          </FormControl>
          <div style={{ height: 10 }} />
          <Button id="login_btn" variant="contained" onClick={() => goToMonitor()}>
            Log in
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
