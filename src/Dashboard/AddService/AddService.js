import { Button, Input, TextField } from '@mui/material';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const AddService = () => {
    const [name, setName] = useState('')
    const [price, setPrice]=useState('')
    const [discription, setDiscription]=useState('')
    const [image, setImage]=useState(null)

    const handleSubmit = e =>{
        e.preventDefault();
        if(!image){
            return;
        }
        const formData = new FormData();
        formData.append('name',name);
        formData.append('price',price)
        formData.append('discription',discription)
        formData.append('image',image)
                fetch('http://localhost:5000/addServices', {
        method: 'POST',
        body: formData
        })
        .then(response => response.json())
        .then(data => {
        if(data.insertedId){
            console.log('add Service')

        }
        })
        .catch(error => {
        console.error('Error:', error);
        });
            }
   
    return (
        <div>
            AddService
           <form onSubmit={handleSubmit}>
           <TextField
               sx={{width: '40%'}}
                label="ServiceName"
                onChange={e=> setName(e.target.value)}
                required
                variant="standard"
                />
                <br></br>
                <br></br>
           
           <TextField
               sx={{width: '40%'}}
                label="Price"
                onChange={e =>setPrice(e.target.value)}
                required
                variant="standard"
                />
                <br></br>
                <br></br>
           <TextField
             sx={{width: '40%'}}
                 required
                label="Description "
                onChange={ e => setDiscription(e.target.value)}
                multiline
                rows={4}
            
                variant="filled"
                />
                <br></br>
                <br></br>
        
              
                <Input accept="image/*"
             
                sx={{width: '40%'}}
             
                  multiple type="file" 
                  onChange={e=> setImage(e.target.files[0])}
                  />
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