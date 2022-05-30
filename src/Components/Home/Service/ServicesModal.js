import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia, TextField } from '@mui/material';
import useAuth from './../../../hooks/useAuth';
import { useState } from 'react';


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

const ServiceModal = ({ booking,open,handleCloseServicesModal,setBookingSuccess}) => {
    const {name, image, id}= booking;
    const {user} = useAuth();


    // datapas sarver 

const initialInfo = {serviceName: name, userName:user.userName, email: user.email, phone:''}
const [bookingInfo, setBookingInfo] = useState(initialInfo);
const handleOnBlur = e =>{
  const field = e.target.name;
  const value = e.target.value;
  const newInfo = {...bookingInfo}
  newInfo[field]= value;
  console.log(newInfo);
  setBookingInfo(newInfo);

}

    const handleBookingSubmit = e =>{
        const bookApponenmet = {
          ...bookingInfo,
        }
        //send to server
        fetch('http://localhost:5000/services',{
          method:'POST',
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(bookApponenmet)
          
        })
        .then(res =>res.json())
        .then(data => {
         if(data.insertedId){
          setBookingSuccess(true)
           
         }
        })
     
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
                     <p style={{textAlign: 'center'}}> {name}</p>
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                 <TextField
                     disabled
                     sx={{width: '90%',m:1}}
                      id="outlined-size-small"
                      name='serviceName'
                      onBlur={handleOnBlur}
                      defaultValue={name}
                      size='small'
                    />
                     <TextField
                 
                     sx={{width: '90%',m:1}}
                      id="outlined-size-small"
                      defaultValue="Your Name"
                      onBlur={handleOnBlur}
                      name='userName'

                      size='small'
                    />
                     <TextField
                    
                     sx={{width: '90%',m:1}}
                      id="outlined-size-small"
                      name='phone'
                      onBlur={handleOnBlur}
                      defaultValue='Your Phone number'
                      size='small'
                    />
                     <TextField
                    
                     sx={{width: '90%',m:1}}
                      id="outlined-size-small"
                      name='email'
                      onBlur={handleOnBlur}
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