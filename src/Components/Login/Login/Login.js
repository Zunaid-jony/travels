import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
 const [loginData, setLoginData] = useState()

  const handleOnChange =e =>{
    const field = e.target.name;
    const value = e.target.value;
   const newLoginData = {...loginData};   
   newLoginData[field]=value;
   
   setLoginData(newLoginData);

  }
 
  const handleLoginSubmit = e =>{
    alert('hell')
      
  }
  return (
    <div className="login-area">
      <br></br>
      <br></br>
      <br></br>
      <div className="login-heder">
        <h2>Login</h2>
        <br></br>

        <form onSubmit={handleLoginSubmit}>
          <TextField
            sx={{ m: 1, width: "70%" }}
            required
            type="email"
            name="email"
            onChange={handleOnChange}
            label="email"
            defaultValue="email"
            variant="standard"
          />
          <br></br>
          <TextField
            sx={{ width: "70%" }}
            label="Password"
            type="password"
            name="password"
            onChange={handleOnChange}
            autoComplete="current-password"
            variant="standard"
          />
          <br></br>
          <Button
            variant="contained"
            sx={{ width: "70%", m: 2 }}
            style={{ backgroundColor: "rgb(202, 74, 153)" }}
            type="submit"
          >
            Login
          </Button>

          <br></br>

          <h6>OR</h6>

          <Button
            variant="contained"
            sx={{ width: "70%", m: 2 }}
            style={{}}
            type="submit"
          >
            {" "}
            <FcGoogle></FcGoogle> Google
          </Button>
          <p>
            Don'n have an account?<Link to="/register">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
