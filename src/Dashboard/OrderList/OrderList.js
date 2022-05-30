import React from 'react';
import useAuth from './../../hooks/useAuth';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './OrderList.css'

const OrderList = () => {
    
    // const {user} =useAuth();
    const [serviceUser, setSarviceUser]= useState([])
   
    useEffect(()=>{
        const url = ` http://localhost:5000/services`
        fetch(url)
        .then(res => res.json())
        .then(data => setSarviceUser(data))

    },[])
    return (
        <div className='body'>
            <h4 style={{color:'tomato'}}>Total Order {serviceUser.length}</h4>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 950 ,m:2}} size="small" aria-label="a dense table">
        <TableHead style={{ backgroundColor:'gray'}}>
          <TableRow>
            <TableCell  >Service Name</TableCell>
            <TableCell align="left">User Name</TableCell>
            <TableCell align="left">Phone</TableCell>
            <TableCell align="left">email</TableCell>
            <TableCell align="left">Order Id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {serviceUser.map((row) => (
            <TableRow 
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
            >
              <TableCell sx={{}} component="th" scope="row">
                {row.serviceName}
              </TableCell>
              <TableCell sx={{m:2}} align="left">{row.userName}</TableCell>
              <TableCell align="left">{row.phone}</TableCell>
              <TableCell align="left">{row.email
         }</TableCell>
              <TableCell align="left">{row._id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default OrderList;