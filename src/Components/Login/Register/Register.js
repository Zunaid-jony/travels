import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Register.css'
import { Link , useLocation , useNavigate} from "react-router-dom";

import useAuth from './../../../hooks/useAuth';
import {  CircularProgress } from '@mui/material';
import Alert from '@mui/material/Alert';


const Register = () => {
   const [loginData,setLoginData]= useState({})
   // spinar set karbo
  
   let location = useLocation()
   const history = useNavigate()

//    ***********start *********
  const {user,registerUser, isLoading}= useAuth();
//    ***********start *********

   const handleOnBlur = e =>{
       const field = e.target.name;
       const value = e.target.value;
       const newLoginData ={...loginData};
       newLoginData[field] = value;
       console.log(field,value, newLoginData)
       setLoginData(newLoginData);

   }

    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert('did not match password')
            return

        }
        registerUser(loginData.email, loginData.password , loginData.name,history, location)
        e.preventDefault();
      }
    return (
        <div className='login-areaa'>
           <br></br>
           <br></br>
           <br></br>
           <div className='login-hederr'>
           <h2>Register</h2>
            <br></br>
          { !isLoading &&

                    <form onSubmit={handleLoginSubmit}>
                    <TextField 
                        sx={{width: '70%', m: 1}}
                        name='name'
                        onBlur={handleOnBlur}
                    
                        id="standard-basic" 
                        label="Your Name"
                        variant="standard" />


                    <TextField 
                        sx={{width: '70%', m: 1}}
                        name='email'
                        onBlur={handleOnBlur}
                        // onBlur={handleOnBlur}
                        type='email'
                        id="standard-basic" 
                        
                        label="Your Email"
                        variant="standard" />
                    <br></br>
                    <TextField 
                        sx={{width: '70%', m: 1}}
                        name='password'
                        onBlur={handleOnBlur}
                    //    onBlur={handleOnBlur}
                        id="standard-basic" 
                        label="Your Password"
                        type='password'
                        variant="standard" />
                    <TextField 
                        sx={{width: '70%', m: 1}}
                        name='password2'
                        onBlur={handleOnBlur}
                    //    onBlur={handleOnBlur}
                        id="standard-basic" 
                        label=" ReType-password"
                        type='password'
                        variant="standard" />
                    <br></br>
                    <Button
                        variant="contained"
                        
                        sx={{width: '70%', m: 2}}
                        style={{backgroundColor:'rgb(202, 74, 153)'}}
                        type='submit'

                    >Register</Button>

                        <br></br>
                        
                        <h6>OR</h6>


                    <p>Already have a account?<Link state={{textDecoration:'none'}} to='/login'>Login</Link></p>
                    </form>
          }

                        {isLoading && <CircularProgress></CircularProgress>}

                        {
                            user?.email && <Alert severity="success">This is a success alert — check it out!</Alert>
                        }
                    
           </div>
        </div>
    );
};

export default Register;