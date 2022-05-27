import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.css'
import { FcGoogle} from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login-area'>
           <br></br>
           <br></br>
           <br></br>
           <div className='login-heder'>
           <h2>Login</h2>
            <br></br>
           

        <TextField
        sx={{m:1, width:'70%'}}
          required
          type='email'
          label="email"
          defaultValue="email"
          variant="standard"
        />
        <br></br>
          <TextField
          sx={{ width:'70%'}}
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <br></br>
        <Button
                variant="contained"
                 sx={{width: '70%', m: 2}}
                 style={{backgroundColor:'rgb(202, 74, 153)'}}
                 type='submit'

         >Login</Button>

                <br></br>
               
                <h6>OR</h6>
 
        <Button
                variant="contained"
                 sx={{width: '70%', m: 2}}
                 style={{}}
                 type='submit'

         > <FcGoogle></FcGoogle>   Google</Button>
         <p>Don'n have an account?<Link to='/register'>Create an account</Link></p>
           </div>
        </div>
    );
};

export default Login;