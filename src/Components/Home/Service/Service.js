import React from 'react';
import rel from '../../../imgs/train.png'
import air from '../../../imgs/airport-icons .png'
import car from '../../../imgs/car.png'
import BIKE from '../../../imgs/bike.png'
import { Alert, Box, Container, Grid } from '@mui/material';
import Services from './Services';
import { useState } from 'react';


    const booking =[
        {
            id:1,
            name:'RAILWAY SERVICE',
            description :'One of the service quality indicators for rail transportation system is the service evaluation from passenger’s perspective',
            price: 50,
            image: rel
        },
        {
            id:2,
            name:'AIR SERVICE',
            description :'One of the service quality indicators for rail transportation system is the service evaluation from passenger’s perspective',
            price: 200,
            image: air
        },
        {
            id:3,
            name:'CAR SERVICE',
            description :'One of the service quality indicators for rail transportation system is the service evaluation from passenger’s perspective',
            price: 200,
            image: car
        },
        {
            id:4,
            name:'BIKE SERVICE',
            description :'One of the service quality indicators for rail transportation system is the service evaluation from passenger’s perspective',
            price: 40,
            image: BIKE
        },
        {
            id:5,
            name:'ABC SERVICE',
            description :'One of the service quality indicators for rail transportation system is the service evaluation from passenger’s perspective',
            price: 180,
            image: air
        },
        {
            id:6,
            name:'CDF SERVICE',
            description :'One of the service quality indicators for rail transportation system is the service evaluation from passenger’s perspective',
            price: 210,
            image: air
        },

    ]
    const Service = () => {
        // modal a success meassege dibo 

        const [bookingSuccess, setBookingSuccess] = useState(false)
    return (
        <div>
            <h3>Service</h3>
            {bookingSuccess && <Alert severity='success'>submit seccess</Alert>}
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
              booking.map(booking => <Services
              
              key={booking.id}
              booking={booking}
              setBookingSuccess={setBookingSuccess}
              ></Services>)
          }
        
      </Grid>
                </Container>

           
            </Box>
        </div>
    );
};

export default Service;