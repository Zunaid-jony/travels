import React,{useState,useEffect} from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddService2 from './AddService2';
import Message from './../../Components/Home/Home/Message/Message';

const AddServices = () => {
    const [service, setServices]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/addServices')
        .then(response => response.json())
        .then(data => setServices(data))
    },[])
    
    return (
        <>
       
        <Grid  container columns={{ xs: 4, sm: 8, md: 12 }}>
       {
              service.map(service => <AddService2
              
              key={service.id}
              service={service}
              
              ></AddService2>)
          }
      </Grid>
      </>
    );
};

export default AddServices;