// this will be the component that shows the individual student that was selected 
// get that fetches student with the info and any notes/comments 
// put that allows user to add a new note 
// post that updates the notes 
// delete to get rid of the the note 

import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function StudentView() {
//consts here 

 //get post put deletes here 

//return here 
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
            <Typography> Holly May</Typography>
            {/* here will change depending on student status */}
            <Typography>
                Coe Status <br/>
                M.E Status <br/>


            </Typography>
            
            <CardActions>
            <TextField
                id="outlined-multiline-static"
                label="Notes"
                multiline
                rows={4}
                defaultValue="Notes here"
                />
            </CardActions>
            <Button>Save</Button> <Button>Delete</Button>
        </CardContent>

    </Card>

    

</Container>

</div>
    )
}

export default StudentView;
  