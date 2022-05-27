import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Register.css'
import { FcGoogle} from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login-areaa'>
           <br></br>
           <br></br>
           <br></br>
           <div className='login-hederr'>
           <h2>Login</h2>
            <br></br>
            <TextField 
                sx={{width: '70%', m: 1}}
                name='name'
                
              
                id="standard-basic" 
                label="Your Name"
                variant="standard" />
           

           <TextField 
                sx={{width: '70%', m: 1}}
                name='email'
                // onBlur={handleOnBlur}
                type='email'
                id="standard-basic" 
                label="Your Email"
                variant="standard" />
        <br></br>
        <TextField 
               sx={{width: '70%', m: 1}}
               name='password'
            //    onBlur={handleOnBlur}
                id="standard-basic" 
                label="Your Password"
                type='password'
                variant="standard" />
          <TextField 
               sx={{width: '70%', m: 1}}
               name='password2'
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
           </div>
        </div>
    );
};

export default Register;