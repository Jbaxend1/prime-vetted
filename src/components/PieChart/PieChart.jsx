import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import {  useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'


ChartJS.register(ArcElement, Tooltip, Legend);


function PieChart() {
    const allStudents = useSelector(store => store.student.student);
    console.log(allStudents);
    const dispatch = useDispatch();
    const fetchStudents = () => {
    
        dispatch({ type: 'FETCH_ALL_STUDENTS' });
    
    }
    useEffect(() => {
        fetchStudents();
    }, []);

 const data = {
    labels: ['ISA', 'Vet Tech'],
    datasets: [
      {
        label: 'ISA',
        data: [allStudents.filter(student => student.payment_type === 'ISA').length,
               allStudents.filter(student => student.payment_type === 'Vet Tech').length],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const dataPlaced = {
    labels: ['Unplaced', 'Placed'],
    datasets: [
      {
        label: 'Placement',
        data: [allStudents.filter(student => student.placed_at === null && student.payment_type === "Vet Tech").length,
               allStudents.filter(student => student.placed_at !== null && student.payment_type === "Vet Tech").length],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };


    return (
        <Grid item xs={8} >
            <Card elevation={2} style={{ width: '90%', display: 'flex', paddingLeft: '250px',}}>
                <CardContent >
                    <div className="chart-container">
                        <h2 style={{ textAlign: "center" }}>ISA vs Vet Tech</h2>
                        <Pie data={data}/>
                    </div>
                </CardContent>
             </Card>
             <br></br>
             <Card elevation={2} style={{ width: '90%', display: 'flex', paddingLeft: '250px'}}>
                <CardContent>
                    <div>
                        <h2 style={{ textAlign: "center" }}>Vet Tech Placed vs Unplaced</h2>
                        <Pie data={dataPlaced} />
                    </div>
                </CardContent>
            </Card>
            
        </Grid>
        
    )
}

export default PieChart;

// const chartData = {};

//     const studentList = cohort.students;
//     if (studentList) {
//         const counts = [
//             { label: 'GED', count: studentList.filter(student => student.education === 'GED').length },
//             { label: 'High School', count: studentList.filter(student => student.education === 'High School').length },
//             { label: 'Associates Degree', count: studentList.filter(student => student.education === 'Associates Degree').length },
//             { label: 'Bachelor\'s Degree', count: studentList.filter(student => student.education === 'Bachelors Degree').length },
//             { label: 'Graduate Degree', count: studentList.filter(student => student.education === 'Graduate Degree').length },
//             { label: 'Some College', count: studentList.filter(student => student.education === 'Some College').length },
//         ];
//         counts.sort((a, b) => ((a.count < b.count) ? 1 : -1));
//         const sortedData = counts.map(count => count.count);
//         const sortedLabels = counts.map(count => count.label);
//         chartData.labels = sortedLabels;
//         const data = {
//             data: sortedData,
//             axis: 'y',
//             backgroundColor: '#5569D0',
//         };
//         chartData.datasets = [data];
//     }
//     return (
//         <Grid item style={{ display: 'flex' }} xs={12} sm={6} lg={4}>
//             <Card elevation={1} style={{ width: '100%' }}>
//                 <CardContent>
//                     <span className={classes.statCardTitle}>Education Level</span>
//                     <br />
//                     <br />
//                     <HorizontalBar data={chartData} options={chartOptions} />
//                 </CardContent>
//             </Card>
//         </Grid>
//     );
// };

// CohortEduStats.propTypes = {
//     cohort: PropTypes.instanceOf(Object).isRequired,
//     classes: PropTypes.instanceOf(Object).isRequired,
// };

// // this allows us to use <App /> in index.js
// export default withStyles(styles)(CohortEduStats);