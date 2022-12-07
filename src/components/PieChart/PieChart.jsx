import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function PieChart({ chartData }) {
    return (
        <div className="chart-container">
            <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
            <Pie
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Vet Tec vs ISA"
                        }
                    }
                }}
            />
        </div>
    )
}

export default PieChart;