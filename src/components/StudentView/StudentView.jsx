// this will be the component that shows the individual student that was selected 
// get that fetches student with the info and any notes/comments 
// put that allows user to add a new note 
// post that updates the notes 
// delete to get rid of the the note 

import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import axios from 'axios'

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
//consts here 
const dispatch = useDispatch();
const store = useSelector(store => store);
const history = useHistory();
// this is for the drop down to change the COE/MEstatus
const [coe, setCoe ] = React.useState('');
const [me, setMe ] = React.useState('');



 //get post put deletes here 

 
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
            {/* this eventually will be replaced by the student name of on view click */}
            <Typography variant='h4'> Holly May</Typography> <br />
            {/* here will change depending on student status */}
            <Box sx={{minWidth: 220}}>
                <FormControl fullWidth >
                    <InputLabel>COE status</InputLabel>
                    <Select
                    id='select-coe-status'
                    value={coe}
                    label="coe"
                    //implement functionality later
                    // onChange={handlechange}
                    >
                    {/* menus items still need values */}
                        <MenuItem>Requested</MenuItem>
                        <MenuItem>Received</MenuItem>
                        <MenuItem>Completed</MenuItem>

                    </Select>
                </FormControl>
            </Box>
            <br/>
            <Box sx={{minWidth: 220}}>
                <FormControl fullWidth >
                    <InputLabel>ME Status </InputLabel>
                    <Select
                    id='select-coe-status'
                    value={coe}
                    label="coe"
                    //implement functionality later
                    // onChange={handlechange}
                    >
                    {/* menus items still need values */}
                        <MenuItem> Placed </MenuItem>
                        <MenuItem> Unplaced </MenuItem>
                       
                    </Select>
                </FormControl>
            </Box>
            <br />


            
           
            <TextField
                id="outlined-multiline-static"
                label="Notes"
                multiline
                rows={4}
                defaultValue="Notes here"
                />
                <br />
                <br/>

            <Button style={{color:'grey', borderColor:'GrayText'}} variant='outlined'>Save</Button> <Button style={{color:'red', borderColor:'GrayText'}} variant='outlined'>Delete</Button>
        </CardContent>

    </Card>

    

</Container>

</div>
    )
}

export default StudentView;
  