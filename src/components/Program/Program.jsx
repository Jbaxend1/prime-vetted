// Component for the Program type i.e(FSE,UX) and Payment Type(income share v.s vet tech)

// MUI components 
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import  Box  from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import  InputLabel  from '@mui/material/InputLabel';




function Program(){
    return(
        <>
        <Box component='form' display='flex' justifyContent='center'>
            <FormControl variant='outlined' className="formcontrol"  sx={{width: 500, margin:'16px'}}>
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
            </FormControl>
            <FormControl variant='outlined' required className='formcontrol' sx={{width: 500, margin:'16px'}}>
                <InputLabel id='payment_type_label'>Payment Type</InputLabel>
                    <Select 
                    labelId="payment_type_label"
                    id='payment_type'
                    >
                    <MenuItem>All</MenuItem>
                    <MenuItem>Income Share</MenuItem>
                    <MenuItem>Vet Tech</MenuItem>
                    </Select>
            </FormControl>
        </Box>

        </>
    )
}
export default Program;