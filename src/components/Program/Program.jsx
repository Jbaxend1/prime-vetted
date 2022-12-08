// Component for the Program type i.e(FSE,UX) and Payment Type(income share v.s vet tech)

// MUI components 
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import  Box  from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import  InputLabel  from '@mui/material/InputLabel';
import  Button  from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



function Program(){
    const dispatch = useDispatch();
    const { studentId } = useParams();
    const [paymentType, setPaymentType] = useState('All');

    const fetchStudents = () => {
        if(paymentType === 'All') {
          dispatch({ type: 'FETCH_ALL_STUDENTS' });
        } else if(paymentType === 'ISA') {
          dispatch({ type: 'FETCH_ISA'});
        } else if(paymentType === 'VET') {
          dispatch({ type: 'FETCH_VET_TEC'});
        };
      }

      const handleChange = (e) => {
        setPaymentType(e.target.value);
        fetchStudents();
        
      };



    return(
        <>
        <Box component='form' display='flex' justifyContent='center'>

            {/* commented out code is search bar and filter for UX and FSE 
            needs a router and saga to implement */}
            {/* <FormControl variant='outlined' className="formcontrol"  sx={{width: 500, margin:'16px'}}>
            <InputLabel id='search_label' placeholder='search'></InputLabel>
            <TextField labelId='search_label' />
            </FormControl>
            
            <FormControl variant='outlined' required className="formcontrol" sx={{width: 500, margin:'16px'}}>
                <InputLabel id='cohort_type_label'>Program Type</InputLabel>
                    <Select 
                    labelId="cohort_type_label"
                    id='cohort_type'
                    >
                    <MenuItem>All Programs</MenuItem>
                    <MenuItem>FSE</MenuItem>
                    <MenuItem>UX</MenuItem>
                    </Select>
            </FormControl> */}

            {/* Filter for Payment type ISA vs Vet Tech */}
            <FormControl variant='outlined' required className='formcontrol' sx={{width: 500, margin:'16px'}}>
                <InputLabel id='payment_type_label'>Payment Type</InputLabel>
                    <Select 
                    onChange={handleChange} 
                    labelId="payment_type_label"
                    id='payment_type'
                    value={paymentType}
                    label='Payment Type'
                    >
                    <MenuItem value='All'>All</MenuItem>
                    <MenuItem value='ISA'>Income Share</MenuItem>
                    <MenuItem value='VET'>Vet Tech</MenuItem>
                    </Select>
            </FormControl>
            <Button onClick={(e) => fetchStudents()} >Filter</Button>
        </Box>

        </>
    )
}
export default Program;