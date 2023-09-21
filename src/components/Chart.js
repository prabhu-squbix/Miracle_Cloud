import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import UserData from "../Data/ChartData.json";
import { useState } from "react";
import '../styles/ChartFlows.css';
export default function ChartFlows() {
    const [btnActive, setBtnActive] = useState(1);
    function handleBtnActive(id)
    {
        setBtnActive(id);
    }

    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained",
                data: UserData.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });
    return (
        <div>
            <div className="SelectionBtns">
                <div><button className="WhichChartBtn" onClick={() => handleBtnActive(1)} style={btnActive===1?{color:"#fff",backgroundColor:"#5E1A89"}:{}}>Bar</button></div>
                <div><button className="WhichChartBtn" onClick={() => handleBtnActive(2)} style={btnActive===2?{color:"#fff",backgroundColor:"#5E1A89"}:{}}>Line</button></div>
                <div><button className="WhichChartBtn" onClick={() => handleBtnActive(3)} style={btnActive===3?{color:"#fff",backgroundColor:"#5E1A89"}:{}}>Pie</button></div>
            </div>
            <div>
                <div className="Charts">
                    <div className="EachChart" style={btnActive===1?{}:{display:"none"}}>
                        <BarChart chartData={userData} />
                    </div>
                    <div className="EachChart" style={btnActive===2?{}:{display:"none"}}>
                        <LineChart chartData={userData} />
                    </div>
                    <div  className="EachChart" style={btnActive===3?{}:{display:"none"}}>
                        <PieChart chartData={userData} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function BarChart({ chartData }) {
    return <Bar data={chartData} />;
}
function LineChart({ chartData }) {
    return <Line data={chartData} />;
}
function PieChart({ chartData }) {
    const options = {radius: "20%",
    plugins: {
        legend: {
            position: "top", // You can change the legend position if needed
        },
    },
    layout: {
        padding: {
            left: 20, // Adjust the left padding to move the labels away from the chart
            right: 20, // Adjust the right padding if necessary
            top: 0, // You can adjust the top padding as needed
            bottom: 0, // Adjust the bottom padding to control the distance
        },
    },
};

    return <Pie data={chartData} options={options} />;
}