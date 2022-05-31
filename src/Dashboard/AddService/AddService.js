import { Button, Input, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const AddService = () => {
    return (
        <div>
            AddService
           <form>
           <TextField
               sx={{width: '40%'}}
                label="ServiceName"
                required
                variant="standard"
                />
                <br></br>
                <br></br>
           
           <TextField
               sx={{width: '40%'}}
                label="Price"
            
                required
                variant="standard"
                />
                <br></br>
                <br></br>
           <TextField
             sx={{width: '40%'}}
                 required
                label="Description "
                multiline
                rows={4}
            
                variant="filled"
                />
                <br></br>
                <br></br>
        
              
                <Input accept="image/*"
                sx={{width: '40%'}}
             
                  multiple type="file" />
                <br></br>
                <br></br>
                <Button variant="contained"
                     sx={{width: '40%'}}
                 type="submit">
                Add Service
                </Button>
              
         
           </form>

           
     
        </div>
    );
};

export default AddService;