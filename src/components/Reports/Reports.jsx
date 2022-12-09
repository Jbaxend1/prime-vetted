
import React, { useState } from "react";
import PieChart from "../PieChart/PieChart";
import { useSelector } from "react-redux";


function Reports() {
    const student = useSelector(store => store.student.studentList);

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