import { Bar, Line, Pie ,Bubble, Doughnut ,PolarArea ,Radar ,Scatter} from "react-chartjs-2";
import Chart, { categoryAxis } from 'chart.js/auto';
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
                label: "Initial Users",
                data: UserData.map((data) => data.initialCount),
                backgroundColor: ["#ff9e00"],
                borderColor: "#240046",
                borderWidth: 1,
            },
            {
                label: "Users Gained",
                data: UserData.map((data) => data.userGain),
                backgroundColor: ["#5E1A89"],
                borderColor: "#adb5bd",
                borderWidth: 1,
            },
            {
                label: "Users Lost",
                data: UserData.map((data) => data.userLost),
                backgroundColor: ["#959595"],
                borderColor: "#d3d3d7",
                borderWidth: 1,
            },
            {
                label: "Total Cost",
                data: UserData.map((data) => data.totalCost),
                backgroundColor: ["#8edf34"],
                borderColor: "#8edf34",
                borderWidth: 1,
            },
            {
                label: "Total Revenue",
                data: UserData.map((data) => data.totalRevenue),
                backgroundColor: ["#d5465c"],
                borderColor: "#d5465c",
                borderWidth: 1,
            },
        ],
        options: {
            scales: {
                x: {
                    beginAtZero: true,
                    plugins: {
                        categoryAxis: {
                            labels: {
                                rotation: 45,
                            },
                        },
                    },
                },
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
    const [coloredData, setColoredData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained",
                data: UserData.map((data) => data.userGain),
                backgroundColor: ["#2e005d","#5c008b","#8e008b","#ff8300","#ff6200"],
                borderColor: "#adb5bd",
                borderWidth: 1,
            },
            {
                label: "Users Lost",
                data: UserData.map((data) => data.userLost),
                backgroundColor: ["#d5c5c8","#9da3a4","#604d53","#db7f8e","#ffdbda"],
                borderColor: "#d3d3d7",
                borderWidth: 1,
            },
        ],
    });
    return (
        <div className="ChartComponent">
            <div className="SelectionBtns">
                <div><button className="WhichChartBtn" onClick={() => handleBtnActive(1)} style={btnActive===1?{color:"#fff",backgroundColor:"#5E1A89"}:{}}>Bar</button></div>
                <div><button className="WhichChartBtn" onClick={() => handleBtnActive(2)} style={btnActive===2?{color:"#fff",backgroundColor:"#5E1A89"}:{}}>Line</button></div>
                <div><button className="WhichChartBtn" onClick={() => handleBtnActive(3)} style={btnActive===3?{color:"#fff",backgroundColor:"#5E1A89"}:{}}>Pie</button></div>
                <div><button className="WhichChartBtn" onClick={() => handleBtnActive(4)} style={btnActive===4?{color:"#fff",backgroundColor:"#5E1A89"}:{}}>Doughnut</button></div>
                <div><button className="WhichChartBtn" onClick={() => handleBtnActive(5)} style={btnActive===5?{color:"#fff",backgroundColor:"#5E1A89"}:{}}>Polar Area</button></div>
                <div><button className="WhichChartBtn" onClick={() => handleBtnActive(6)} style={btnActive===6?{color:"#fff",backgroundColor:"#5E1A89"}:{}}>Radar</button></div>
                <div><button className="WhichChartBtn" onClick={() => handleBtnActive(7)} style={btnActive===7?{color:"#fff",backgroundColor:"#5E1A89"}:{}}>Scatter</button></div>
                {/* <div><button className="WhichChartBtn" onClick={() => handleBtnActive(8)} style={btnActive===8?{color:"#fff",backgroundColor:"#5E1A89"}:{}}>Bubble</button></div> */}
            </div>
            <div>
                <div className="Charts">
                    <div className="EachChart" style={btnActive===1?{}:{display:"none"}}>
                        <BarChart chartData={userData} />
                    </div>
                    <div className="EachChart" style={btnActive===2?{}:{display:"none"}}>
                        <LineChart chartData={userData} />
                    </div>
                    <div className="EachChart" style={btnActive===3?{}:{display:"none"}}>
                        <PieChart chartData={coloredData} />
                    </div>
                    <div className="EachChart" style={btnActive===4?{}:{display:"none"}}>
                        <DoughnutChart chartData={coloredData} />
                    </div>
                    <div className="EachChart" style={btnActive===5?{}:{display:"none"}}>
                        <PolarChart chartData={coloredData} />
                    </div>
                    <div className="EachChart" style={btnActive===6?{}:{display:"none"}}>
                        <RadarChart chartData={userData} />
                    </div>
                    <div className="EachChart" style={btnActive===7?{}:{display:"none"}}>
                        <ScatterChart chartData={userData} />
                    </div>
                    {/* <div className="EachChart" style={btnActive===8?{}:{display:"none"}}>
                        <BubbleChart chartData={userData} />
                    </div> */}
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
    const options = {
        radius: 300,
    };
    return <Pie data={chartData} options={options} />;
}

function DoughnutChart({ chartData }) {
    const options = {
        radius: 300,
    };
    return <Doughnut data={chartData} options={options} />;
}
function PolarChart({ chartData }) {
    return <PolarArea data={chartData} />;
}
function RadarChart({ chartData }) {
    return <Radar data={chartData} />;
}
function ScatterChart({ chartData }) {
    return <Scatter data={chartData} />;
}
// function BubbleChart({ chartData }) {
//     return <Bubble data={chartData} />;
// }