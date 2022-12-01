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
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';


function StudentView() {
//consts here 

 //get post put deletes here 

//return here 
return(
<div className="studentContainer">
    {/* insert container here */}
<CssBaseline />
<Container fixed>
<Box sx={{ bgcolor: '#00acb0', height: '50vh' }}>
    <Card>
        <CardContent>
            <img
                    component="img"
                    height="100"
                    width={100}
                    src="https://www.kindpng.com/picc/m/171-1712282_profile-icon-png-profile-icon-vector-png-transparent.png"
                    alt="placeholder icon"/>
            <Typography> Student Name</Typography>
            <Typography>Placed</Typography>


        </CardContent>

    </Card>

    
</Box>
</Container>

</div>
    )
}

export default StudentView;
  