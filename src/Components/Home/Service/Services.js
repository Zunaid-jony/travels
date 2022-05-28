import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';

import React from 'react';
import ServiceModal from './ServicesModal';

const Services = ({booking}) => {
    const {id,name,image,description,price}= booking;

    const [open, setOpen] = React.useState(false);
    const handleOpenServicesModal = () => setOpen(true);
    const handleCloseServicesModal = () => setOpen(false);
    return (
      
           
            <>
            <Grid item xs={2} sm={4} md={4} >
                <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    style={{width: 'auto', height:'80px', margin:'0 auto'}}
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography   gutterBottom variant="h6" component="div">
                        <p style={{}}>$ {price}</p>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    <p> {description}</p>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    <Button onClick={handleOpenServicesModal} variant="contained">Add Booking</Button>
                    </Typography>
                    
                    </CardContent>
                </CardActionArea>
                </Card>
          </Grid>
          <ServiceModal
         booking={booking}
         open={open}
          handleCloseServicesModal={handleCloseServicesModal}
          
          ></ServiceModal>

            </>
        
    );
};

export default Services;