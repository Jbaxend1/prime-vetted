import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
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
<<<<<<< HEAD
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


//should fetch the student details and display in respective areas
const fetchDetails = () => {
    dispatch({ type: 'FETCH_DETAILS', payload:id });
 
}

useEffect(() => {
    fetchDetails();
  }, [id]);

=======
>>>>>>> fedc9c8a065c703a7b7bab94210201cccaef9187

    const dispatch = useDispatch();

    const store = useSelector(store => store.student.studentDetail);
    const editStudent = useSelector(store => store.student.editStudent);

    const history = useHistory();
    const { id } = useParams();
    
<<<<<<< HEAD
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
                    defaultValue={coe}
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
                    defaultValue={me}
                    label="me"
                    placeholder={me}
                    >
                        <MenuItem value={'Paid'}> Paid </MenuItem>
                        <MenuItem value={'Received'}> Received </MenuItem>
                        <MenuItem value={'Requested'}> Requested </MenuItem>
                        <MenuItem value={'Submitted'}> Submitted to VA </MenuItem>
                    </Select>
                </FormControl>
            </Box>

        {/* //comment section for individual student */}
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
=======
    useEffect(() => {
        fetchDetails();
    }, [id]);


    // const [coe, setCoe] = useState(`${store.coe_status}`);
    // const [me, setMe] = useState(`${store.me_form_status}`);


    const fetchDetails = () => {
        dispatch({ type: 'GET_EDIT_STUDENT', payload: id });
    }

    const handleChangeFor = (key) => (e) => {
        dispatch({ type: 'SET_EDIT_STUDENT', payload: {...editStudent, [key]: e.target.value}});
    }

    const updateStatus = (e, id) => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_STUDENT', payload: {...editStudent, id}})
    }

   

    return (
        <div className="studentContainer">
            <CssBaseline />
            <Container fixed>
                <img
                    className="student-img"
                    height="100"
                    width={100}
                    src="https://www.kindpng.com/picc/m/171-1712282_profile-icon-png-profile-icon-vector-png-transparent.png"
                    alt="placeholder icon" />
                <Card>
                    <CardContent>
                        {JSON.stringify(editStudent)}
                        <Typography variant='h4'>
                            {editStudent.first_name} {editStudent.last_name}
                        </Typography> <br />
                        <Box sx={{ minWidth: 220 }}>
                            <FormControl variant="filled" fullWidth >
                                <InputLabel> COE Status </InputLabel>
                                <Select
                                    value={editStudent.coe_status}
                                    onChange={handleChangeFor('coe_status')}
                                    id='select-coe-status'
                                    label="coe"
                                >
                                    <MenuItem value={'Requested'}> Requested</MenuItem>
                                    <MenuItem value={'Received'}> Received</MenuItem>
                                    <MenuItem value={'Sent'}> Sent </MenuItem>

                                </Select>
                            </FormControl>
                        </Box>
                        <br />


                        <Box sx={{ minWidth: 220 }}>
                            <FormControl variant="filled" fullWidth >
                                <InputLabel> ME status </InputLabel>
                                <Select
                                    value={editStudent.me_form_status}
                                    id='select-coe-status'
                                    label="me"
                                    onChange={handleChangeFor('me_form_status')}
                                    
                                >
                                    <MenuItem value={'Paid'}> Paid </MenuItem>
                                    <MenuItem value={'Received'}> Received </MenuItem>
                                    <MenuItem value={'Requested'}> Requested </MenuItem>
                                    <MenuItem value={'Submitted to VA'}> Submitted to VA </MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                        {/* //comment section for individual student */}
                        <br />
                        <TextField
                            id="outlined-multiline-static"
                            label="Notes"
                            value={editStudent.comment}
                            onChange={handleChangeFor('comment')}
                            multiline
                            rows={4}
                        />
                        <br />
                        <br />

                        {/*  button to save changes */}
                        <Button style={{ color: 'grey', borderColor: 'GrayText' }}
                            variant='outlined'
                            onClick={(e) => updateStatus(e, id)}>
                            Save Note
                        </Button>
                        {/* button to delete comment */}
                        <Button style={{ color: 'red', borderColor: 'GrayText' }}
                            variant='outlined'
                            onClick={() => deleteNote()}>
                            Delete Note
                        </Button>
                    </CardContent>

                </Card>



            </Container>

        </div>
>>>>>>> fedc9c8a065c703a7b7bab94210201cccaef9187
    )
}

export default StudentView;
