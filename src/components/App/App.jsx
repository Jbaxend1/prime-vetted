import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,

} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

//import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import SideNav from '../SideNav/SideNav';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import StudentView from '../StudentView/StudentView';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';

import './App.css';
import Reports from '../Reports/Reports';

const drawerWidth = 200;

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: drawerWidth, height: '100%', flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
          <SideNav/>
        </Box>
        

        <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: `calc(100% - ${drawerWidth}px)` }}
        >
        <AppBar
          
          position="fixed"
          sx={{   bgcolor: '#00acb0', width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
          <Toolbar >
            <Typography variant="h4" noWrap component="div" >
              Vetted 
              {/* implement later */}
              {/* <Button variant='outlined'>Refresh</Button> */}
            </Typography>
          </Toolbar>
        </AppBar>
        <Box sx={{paddingTop: '50px'}}>
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>



          <Route
            // shows the student page
            exact
            path="/student/:id"
          >
            <StudentView />
          </Route>


          <Route

            exact
            path="/reports"
          >
            <Reports/>
          </Route>


          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>


          <ProtectedRoute
          exact
          path='/home'
          >
            <HomePage/>
          </ProtectedRoute>


          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>



          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        </Box>
        </Box>
        </Box>
        {/* <Footer /> */}
    </Router>
  );
}

export default App;
