// HomePage View that shows a list of all students with Vet tech program
import Program from '../Program/Program';
import './HomePage.css'
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
  
  // Function to Create and return the data for student in table
  // lines 40-49 will be replaced with GET request from the DB 
  function createData(name, coeStatus, graduationDate, Status, meFormStatus, cohort, action) {
    return { name,coeStatus, graduationDate, Status, meFormStatus, cohort, action };
  }
  
  const rows = [
    createData('Jon B', ),
    createData('Holly D', ),
    createData('Aubree H', ),
    createData('Alex S', ),
  ];

 
function HomePage() {
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
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.coeStatus}</StyledTableCell>
                <StyledTableCell align="right">{row.graduationDate}</StyledTableCell>
                <StyledTableCell align="right">{row.meFormStatus}</StyledTableCell>
                <StyledTableCell align="right">{row.cohort}</StyledTableCell>
                <StyledTableCell align="right">
                    <Button style={{color:'grey', borderColor:'GrayText'}} variant='outlined'>View</Button>
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