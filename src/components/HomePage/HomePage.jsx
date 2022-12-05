// HomePage View that shows a list of all students with Vet tech program
import Program from '../Program/Program';
import './HomePage.css'
// react imports
import {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// axios import
import axios from 'axios';
// MUI components for Students table 
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import  Box from '@mui/material/Box';
import Button  from '@mui/material/Button';

// Styled theme for  student Table
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: 'Grey',
      color: 'White',
      fontSize: 16,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
   
function HomePage() {
 
    const history = useHistory();
    const dispatch = useDispatch();
    
    // uses reducer and saga to get DB information
    const allStudents = useSelector(store => store.student);
    const fetchStudents = () => {
        dispatch({type: 'FETCH_ALL_STUDENTS'});
  
    } 
    
    useEffect(() => {
        fetchStudents();
    },[]);
    
      // formats Graduation Date
      const formatGradDate = (grad) => {
        const date = new Date(grad);
        return (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
      }

 
   

    return (
        <>  
        <Program/>
        <br/>
    <Box display='flex' justifyContent='center'>
      <TableContainer sx={{width:'850px'}} elevation={8} component={Card}>
        <Table sx={{minWidth: 700}} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">COE Status</StyledTableCell>
              <StyledTableCell align="right">Gradutation Date</StyledTableCell>
              <StyledTableCell align="right">M.E Form Status</StyledTableCell>
              <StyledTableCell align="right">Cohort</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* rows.map will be changed to reflect DB information */}
            {allStudents.map((students) => (
              <StyledTableRow key={students.name}>
                <StyledTableCell component="th" scope="allStudents">
                  {students.first_name} {students.last_name}
                </StyledTableCell>
                <StyledTableCell align="right">{students.coe_status}</StyledTableCell>
                <StyledTableCell align="right">{formatGradDate(students.graduation)}</StyledTableCell>
                <StyledTableCell align="right">{students.me_form_status}</StyledTableCell>
                <StyledTableCell align="right">{students.cohort_name}</StyledTableCell>
                <StyledTableCell align="right">
                    <Button component={Link} to='/student' style={{color:'grey', borderColor:'GrayText'}} variant='outlined'>View</Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>

      </>
    );
  }

  export default HomePage;