import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import axios from 'axios'
//all mui imports
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';


function StudentView() {
const dispatch = useDispatch();
const store = useSelector(store => store.student.studentDetail);
const history = useHistory();
const {id} = useParams();
// this is for the drop down to change the COE/MEstatus
const [coe, setCoe ] = React.useState(`${store.coe_status}`);
const [me, setMe ] = React.useState(`${store.me_form_status}`);

// will handle the changes for the COE and ME status
// const handleChange = (event) => {
//     console.log('changed the COE status', (event.target.value));
//     setCoe(event.target.value);
//     setMe(event.target.value);
// };

// useEffect(() => {
//     if (id) {
//     dispatch({type:'FETCH_DETAILS', payload: id});
//     setCoe(store.coe_status);
//     setMe(store.me_form_status);
//     }

// }, [id])


const fetchDetails = () => {
    dispatch({ type: 'FETCH_DETAILS', payload:id });
 
}

useEffect(() => {
    fetchDetails();
  }, [id]);



// this is what will change the coe and me status 
const handleChange = (event) => {
    axios.post(`api/student/${id}`, 
    {
        coe: newCoe,
        me: newMe,
        
    }).then(() => {
        dispatch({ type: 'SET_DETAILS' });
        setCoe(event.target.value);
        setMe(event.target.value);
    })
    .catch(error => {
        console.log('error with element get request', error);
    });
    
}


// update for note 
const updateNote = (event) => {
    console.log('in the update note function')
    axios.put(`/api/student/${student.id}}`, 
    { 
    
    })
        .then(() => {
            alert('your post was updated!');
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong');
        });
  };

return(
<div className="studentContainer">
    {/* insert container here */}
<CssBaseline />
<Container fixed>
<img
 className="student-img"
height="100"
 width={100}
src="https://www.kindpng.com/picc/m/171-1712282_profile-icon-png-profile-icon-vector-png-transparent.png"
alt="placeholder icon"/>
    <Card>
        <CardContent>
          {JSON.stringify(store)}
            <Typography variant='h4'> {store.first_name} {store.last_name}
            </Typography> <br />
            <Box sx={{minWidth: 220}}>
                <FormControl variant="filled" fullWidth >
                    <InputLabel> COE Status </InputLabel>
                    <Select
                    id='select-coe-status'
                    value={store.coe_status}
                    label="coe"
                    onChange={handleChange}
                    placeholder={coe}
                    >
                        <MenuItem value={'Requested'}> Requested</MenuItem>
                        <MenuItem value={'Received'}> Received</MenuItem>
                        <MenuItem value={'Sent'}> Sent </MenuItem>

                    </Select>
                </FormControl>
            </Box>
            <br/>


            <Box sx={{minWidth: 220}}>
                <FormControl variant="filled" fullWidth >
                    <InputLabel> ME status </InputLabel>
                    <Select
                    id='select-coe-status'
                    value={store.me_form_status}
                    label="me"
                    >
                        <MenuItem value={'Paid'}> Paid </MenuItem>
                        <MenuItem value={'Received'}> Received </MenuItem>
                        <MenuItem value={'Requested'}> Requested </MenuItem>
                        <MenuItem value={'Submitted'}> Submitted to VA </MenuItem>
                       
                    </Select>
                </FormControl>
            </Box>
            <br />
            <TextField
                id="outlined-multiline-static"
                label="Notes"
                multiline
                rows={4}
                defaultValue={store.comment}
                />
                <br />
                <br/>
            {/*  button to save changes */}
            <Button style={{color:'grey', borderColor:'GrayText'}} 
            variant='outlined'
            onClick={() => updateNote()}>
                Save Note
                </Button> 
            {/* button to delete comment */}
            <Button style={{color:'red', borderColor:'GrayText'}} 
            variant='outlined' 
            onClick={() => deleteNote()}>
                Delete Note
                </Button>
        </CardContent>

    </Card>

    

</Container>

</div>
    )
}

export default StudentView;
  