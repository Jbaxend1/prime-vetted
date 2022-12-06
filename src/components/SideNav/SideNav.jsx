// navigation bar for the left side of the page - should be seen throughout app 
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { ReactComponent as Logo } from './logo-prime-horizontal.svg';
// may be implemented later
//import ListItemButton from '@mui/material/ListItemButton';
//import ListItemText from '@mui/material/ListItemText';




 function SideNav({drawerWidth = 200}) {
  const history = useHistory();
  const dispatch = useDispatch();

    return(
    // <Box sx={{ display: 'flex',}}>
    // <CssBaseline />

    <Drawer
      PaperProps={{sx: {backgroundColor: '#222', padding: '20px'}}}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
        
      }}
      variant="permanent"
      anchor="left"
    >

      
      <Logo />
      <List>
          <ListItem >
          
          <Button style={{color:'grey', borderColor:'GrayText'}} variant='outlined' onClick={() => history.push('/home')}> Home </Button>

          </ListItem>

          <ListItem >
          <Button style={{color:'grey', borderColor:'GrayText'}} variant='outlined'>Reports</Button>
          </ListItem>

          <ListItem>
          <Button style={{color:'grey', borderColor:'GrayText'}} variant='outlined'   onClick={() => dispatch({ type: 'LOGOUT' })}>Log out </Button>
          </ListItem>

          </List>

      <Divider />
    </Drawer>
  //   <Box
  //     component="main"
  //     sx={{ flexGrow: 1, p: 3 }}>
  //     <Toolbar />
  //     <Typography paragraph>
        
  //    </Typography>     
  //   </Box>
  // </Box>
    );
 }

export default SideNav;