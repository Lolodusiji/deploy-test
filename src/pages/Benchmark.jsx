import React from "react";
import { Bar } from "react-chartjs-2";
import "./Benchmark.css";

const StackedBarsOnTopWithoutScales = () => {
  const chartData = {
    labels: ["A", "B", "C", "D", "E"],
    datasets: [
      {
        // label: 'Stack 1',
        data: [10, 20, 15],
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Background color for stack 1
        borderRadius: "8",
      },
      {
        // label: 'Stack 2',
        data: [5, 15, 10],
        backgroundColor: "rgba(255, 99, 132, 0.6)", // Background color for stack 2
        borderRadius: "8",
      },
      // Add more datasets for additional stacks
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        display: false, // Hide x-axis scale
        stacked: true, // Enable stacking
      },
      y: {
        display: false, // Hide y-axis scale
        stacked: true, // Enable stacking
      },
    },
    plugins: {
      legend: {
        // display: true,
      },
    },
  };

  let data = 30;
  const someRandomHeight = (data / 100) * 100;
  // let barColors = [
    // "#2594F2"
  //   // "#9ED56A",
  //   // "#FA4D5C",
  //   // "#7116CB",
  //   // "#93CFFB",
  //   // "#FA4D5C",
  //   // "#2594F2"
  // ]

return (
  <div>
    {/* <Bar data={chartData} options={chartOptions} /> */}

    {/* CUSTOM BAR CHART SETUP */}
    
    <div className="container1">
    {[
                  { data: "59.97%", background: "#2594F2" },
                  { data: "11.16%", background: "#9ED56A" },
                  { data: "25.5%", background: "#FA4D5C" },
                  { data: "3.2%", background: "#7116CB" },
                  { data: "5.1%", background: "#93CFFB" },
                  { data: "2.2%", background: "#FA4D5C" },
                  { data: "3%", background: "#2594F2"},   
                ]
      .map((item) => (
        <div className="column1">
          <div className="inner1" style={{ height: item.data ,background :item.background }}>
          </div>
        </div>
      ))}
    </div>
  </div>
);
      }
export default StackedBarsOnTopWithoutScales;