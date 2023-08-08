import React from "react";
import { Bar } from "react-chartjs-2";
import "./income.css";

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

  return (
    <div>
      {/* <Bar data={chartData} options={chartOptions} /> */}

      {/* CUSTOM BAR CHART SETUP */}
      <div className="container">
        {[59.97, 31.16, 25.0].map((item) => (
          <div className="columnn">
            <div className="inner" style={{ height: `${item}%` }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackedBarsOnTopWithoutScales;
