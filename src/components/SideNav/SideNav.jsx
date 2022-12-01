// navigation bar for the left side of the page - should be seen throughout app 

import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';

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
// may be implemented later
//import ListItemButton from '@mui/material/ListItemButton';
//import ListItemText from '@mui/material/ListItemText';


const drawerWidth = 200;

 function SideNav() {
    return(
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar
      backgroundColor= '#00acb0;'
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar >
        <Typography variant="h6" noWrap component="div" >
          Permanent drawer
        </Typography>
      </Toolbar>
    </AppBar>
    <Drawer
      sx={{
        backgroundColor: '#00acb0;',
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
      <Toolbar />
      <Divider />
      <List>
          <ListItem >
            <Link className="navLink" to="/student">
             Students
            </Link>
          </ListItem>

          <ListItem >
            <Link className="navLink" to="/reports">
             Reports
            </Link>
          </ListItem>

          <ListItem>
          <LogOutButton className="navLink" />
          </ListItem>

          </List>
      <Divider />
    </Drawer>
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Typography paragraph>
        
     </Typography>     
    </Box>
  </Box>
    );
 }

export default SideNav;