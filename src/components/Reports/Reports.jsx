
import React, { useState } from "react";
import PieChart from "../PieChart/PieChart";
import { useSelector } from "react-redux";


function Reports() {
    const student = useSelector(store => store.student.student);
// // in this page the admin on click will be able to the reports the can give quick 
// // data in regards  to student placement post grad 

// // mui imports 


    import React from 'react';
    import {
        Card,
        CardContent,
        Grid,
    } from '@mui/material';

    import PropTypes from 'prop-types';
    import { Bar } from 'react-chartjs-2';
    
    const CohortEduStats = ({ cohort, classes }) => {
        const chartOptions = {
            title: {
                display: false,
                text: 'Education level',
                align: 'start',
            },
            indexAxis: 'y',
            legend: {
                display: false,
            },
            scales: {
                xAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 5,
                        },
                    },
                ],
            },
        };
    
        const chartData = {};
        
    
        const studentList = cohort.students;
        if (studentList) {
            const counts = [
                { label: 'GED', count: studentList.filter(student => student.education === 'GED').length },
                { label: 'High School', count: studentList.filter(student => student.education === 'High School').length },
                { label: 'Associates Degree', count: studentList.filter(student => student.education === 'Associates Degree').length },
                { label: 'Bachelor\'s Degree', count: studentList.filter(student => student.education === 'Bachelors Degree').length },
                { label: 'Graduate Degree', count: studentList.filter(student => student.education === 'Graduate Degree').length },
                { label: 'Some College', count: studentList.filter(student => student.education === 'Some College').length },
            ];
            counts.sort((a, b) => ((a.count < b.count) ? 1 : -1));
            const sortedData = counts.map(count => count.count);
            const sortedLabels = counts.map(count => count.label);
            chartData.labels = sortedLabels;
            const data = {
                data: sortedData,
                axis: 'y',
                backgroundColor: '#5569D0',
            };
            chartData.datasets = [data];
        }
        return (
            <Grid item style={{ display: 'flex' }} xs={12} sm={6} lg={4}>
                <Card elevation={1} style={{ width: '100%' }}>
                    <CardContent>
                        <span className={classes.statCardTitle}>Education Level</span>
                        <br />
                        <br />
                        <Bar data={chartData} options={chartOptions} />
                    </CardContent>
                </Card>
            </Grid>
        );
    };
    
    CohortEduStats.propTypes = {
        cohort: PropTypes.instanceOf(Object).isRequired,
        classes: PropTypes.instanceOf(Object).isRequired,
    };
    
    // // this allows us to use <App /> in index.js
    export default CohortEduStats;


    const [chartData, setChartData] = useState({
        label: student.map((data) => data.payment_type),
        datasets: [
            {
                label: "Users Gained ",
                data: student.map((data) => data.payment_type),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0"
                  ],
                  borderColor: "black",
                  borderWidth: 2
            }
        ]
    })

    return (<>
        <PieChart chartData={chartData}/>
    </>)
}

export default Reports