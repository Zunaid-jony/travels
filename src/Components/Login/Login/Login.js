import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { Link , useLocation , useNavigate} from "react-router-dom";
import useAuth from './../../../hooks/useAuth';
import { Alert, CircularProgress } from "@mui/material";


const Login = () => {
 const [loginData, setLoginData] = useState({})
 const {user, loginUser, isLoading,signInWithGoogle}= useAuth()

 let location = useLocation();
 const history = useNavigate();

  const handleOnChange =e =>{
    const field = e.target.name;
    const value = e.target.value;
   const newLoginData = {...loginData};   
   newLoginData[field]=value;
   
   setLoginData(newLoginData);
   loginUser(loginData.email, loginData.password,location,history)

  }
 
  const handleLoginSubmit = e =>{
    loginUser(loginData.email, loginData.password,location,history);
    //alert('hell')
    e.preventDefault()
      
  }
  const handleLoginGoogle =() =>{
   signInWithGoogle(location, history)
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
          onClick={handleLoginGoogle }
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
           
        
         {isLoading && <CircularProgress></CircularProgress>}

{
    user?.email && <Alert severity="success">This is a success alert — check it out!</Alert>
}
    
      </div>
    </div>
  );
};

export default Login;
