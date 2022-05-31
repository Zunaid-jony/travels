import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

import './AddServices.css'
const AddService2 = ({service}) => {
    const {name,price,discription,image}=service;
    return (
        <>
       <Grid className='hover'  sm={4} md={4} >
          
          <Card   style={{height:'300px'}}sx={{ m:2,mt:4 }}>
          <img src={`data:image/*;base64,${image}`} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
         <p style={{color:'#cd60a0'}}>$  {price}</p>
            </Typography>
            <Typography variant="body2" color="text.secondary">
         <p style={{textAlign:'left'}}>{discription}</p>
            </Typography>
          </CardContent>
          <CardActions>
           
        
          </CardActions>
        </Card>
        </Grid>
    
            
        </>
    );
};

export default AddService2;