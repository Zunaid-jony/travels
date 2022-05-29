import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Register.css'

import { Link } from 'react-router-dom';


const Register = () => {
   const [loginData,setLoginData]= useState({})

   const handleOnChange = e =>{
       const field = e.target.name;
       const value = e.target.value;
       const newLoginData ={...loginData};
       newLoginData [field] = value;
       setLoginData(newLoginData);

   }

    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert('did not match password')
            return

        }
        alert('ok')
        e.preventDefault();
      }
    return (
        <div className='login-areaa'>
           <br></br>
           <br></br>
           <br></br>
           <div className='login-hederr'>
           <h2>Login</h2>
            <br></br>
           <form onSubmit={handleLoginSubmit}>
           <TextField 
                sx={{width: '70%', m: 1}}
                name='name'
                onChange={handleOnChange}
              
                id="standard-basic" 
                label="Your Name"
                variant="standard" />
           

           <TextField 
                sx={{width: '70%', m: 1}}
                name='email'
                onChange={handleOnChange}
                // onBlur={handleOnBlur}
                type='email'
                id="standard-basic" 
               
                label="Your Email"
                variant="standard" />
        <br></br>
        <TextField 
               sx={{width: '70%', m: 1}}
               name='password'
               onChange={handleOnChange}
            //    onBlur={handleOnBlur}
                id="standard-basic" 
                label="Your Password"
                type='password'
                variant="standard" />
          <TextField 
               sx={{width: '70%', m: 1}}
               name='password2'
               onChange={handleOnChange}
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
 
       
          <p>Already have a account?<Link to='/login'>Login</Link></p>
           </form>
           </div>
        </div>
    );
};

export default Register;