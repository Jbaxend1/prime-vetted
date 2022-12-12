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
// Dialog imports //
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';


function StudentView() {
    //Redux Stores
    const store = useSelector(store => store.student.studentDetail);
    const editStudent = useSelector(store => store.student.editStudent);
    
    //Utilities
    const history = useHistory();
    const { id } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        fetchDetails();
    }, [id]);

    // Dialog handlers
    const [toggle, setToggle] = useState(false);
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
      });

    //Funcitons
    const fetchDetails = () => {
        dispatch({ type: 'GET_EDIT_STUDENT', payload: id });
    }

    const handleChangeFor = (key) => (e) => {
        dispatch({ type: 'SET_EDIT_STUDENT', payload: { ...editStudent, [key]: e.target.value } });
    }

    const updateStatus = (e, id) => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_STUDENT', payload: { ...editStudent, id } });
        setToggle(true);
    }

    const handleClose = () => {
        setToggle(false);
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

            <Dialog
                open={toggle}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Update Successful!"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Update Comfirmed
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}

export default StudentView;
