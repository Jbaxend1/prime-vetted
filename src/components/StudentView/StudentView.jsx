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
const [coe, setCoe ] = React.useState('');
const [me, setMe ] = React.useState('');
// const[firstName, setFirstName] = React.useState('');
// const [comment, setComment] = React.useState('');
// const [lastName, setLastName] = React.useState('');

useEffect(() => {
    if (id) {
      dispatch({type:'FETCH_DETAILS', payload: id});
    //   setCoe(store.coe_status);
    //   setMe(store.me_form_status);
    //   setFirstName(store.first_name);
    //   setLastName(store.last_name);
    //   setComment(store.comment);
    //
    }

}, [id])


// will handle the changes for the COE and ME status
// consult group if this can handle both the coe and the me in one function 
const handleChange = (event) => {
    console.log('changed the COE status',);
    setCoe(event.target.value);
    setMe(event.target.value);
};

// update for note 
const updateNote = (event) => {
    console.log('in the update note function')
    axios.put(`/api/student/${note.id}}`, 
    { 
    
    })
        .then(() => {
            alert('your post was updated!');
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong');
        });
  };



//delete
//new function to delete a
const deleteNote = () => {
    axios({
      method: 'DELETE',
    //ask what the url should be
    //   url: `/api/student/delete/${note.id}`
    }).then((response) => {
      alert(`your note/comment was properly deleted`);
    }).catch((error) => {
      console.log(error);
      alert('Something went wrong!')
    })
  }

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
            {/* {JSON.stringify(store)} */}
            <Typography variant='h4'> {store.first_name} {store.last_name}
            </Typography> <br />
            {/* here will change depending on student status */}
            <Box sx={{minWidth: 220}}>
                <FormControl variant="filled" fullWidth >
                    <InputLabel> COE Status</InputLabel>
                    <Select
                    id='select-coe-status'
                    value={store.coe_status}
                    label="coe"
                    onChange={handleChange}
                    >
                    {/* menus items still need values */}
                        <MenuItem value={'requested'}>Requested</MenuItem>
                        <MenuItem value={'received'}>Received</MenuItem>
                        <MenuItem value={'completed'}>Completed</MenuItem>

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
                        <MenuItem value={'placed'}> Placed </MenuItem>
                        <MenuItem value={'unplaced'}> Unplaced </MenuItem>
                       
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
            {/*  button to save changes */}
            <Button style={{color:'grey', borderColor:'GrayText'}} 
            variant='outlined'
            onClick={() => updateNote()}>
                Save
                </Button> 
            {/* button to delete comment */}
            <Button style={{color:'red', borderColor:'GrayText'}} 
            variant='outlined' 
            onClick={() => deleteNote()}>
                Delete
                </Button>
        </CardContent>

    </Card>

    

</Container>

</div>
    )
}

export default StudentView;
  