import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia, TextField } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ServiceModal = ({ booking,open,handleCloseServicesModal}) => {
    const {name, image, id}= booking;
    const handleBookingSubmit = e =>{
         alert('submit');
         e.preventDefault();
         // close karar jonn ata call karlam   handleCloseServicesModal()
         handleCloseServicesModal();
    }
   
    return (
        <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleCloseServicesModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    style={{width: 'auto', height:'80px', margin:'0 auto'}}
                    alt="green iguana"
          />
                    <Typography>

                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                     <TextField
                     disabled
                     sx={{width: '90%',m:1}}
                      id="outlined-size-small"
                      defaultValue={name}
                      size='small'
                    />
                     <TextField
                 
                     sx={{width: '90%',m:1}}
                      id="outlined-size-small"
                      defaultValue="Your Name"
                      size='small'
                    />
                     <TextField
                    
                     sx={{width: '90%',m:1}}
                      id="outlined-size-small"
                      defaultValue='Your Phone number'
                      size='small'
                    />
                     <TextField
                    
                     sx={{width: '90%',m:1}}
                      id="outlined-size-small"
                      defaultValue="Your Email"
                      size='small'
                    />
                    <Button type='submit' variant="contained" color="primary">
                       Submit
                    </Button>
                    </form>
            
          </Box>
        </Fade>
      </Modal>
    </div>
    );
};

export default ServiceModal;