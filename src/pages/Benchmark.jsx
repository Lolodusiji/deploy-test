import React from 'react'

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

  // const barColors = ["#1f77b4", "#ff7f0e", "#2ca02c" ,"#7116CB" , "#7116CB", "#fff" , "#9ED56A" ]
  const data = [
    {
      name: "Page C",
      // uv: 1500,
      pv: 50,
      fill : "#2594F2"

    },

    {
      name: "Page C",
      // uv: 11.16,
      pv: 20,
      fill : "#9ED56A"

    },

    {
      name: "Page C",
      // uv: 2000,
      pv: 30,
      fill : "#FA4D5C"
    },

    {
      name: "Page C",
      // uv: 2000,
      pv: 12,
      fill : "#7116CB"
    },

    {
      name: "Page C",
      // uv: 2000,
      pv: 30,
      fill : "#93CFFB"
    },

    {
      name: "Page C",
      // uv: 2000,
      pv: 5,
      fill : "#FA4D5C"
    },

    {
      name: "Page C",
      // uv: 2000,
      pv: 15,
      fill : "#2594F2"
    },
    
  ];
  
  export default function App() {
    return (
      <BarChart
        width={600}
        height={80}
        data={data}
        margin={{
          top: 5,
          // right: 8,
          // left: 20,
          bottom: 5,
        }}
        barSize={80}
      >
        {/* <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} /> */}
        {/* <YAxis /> */}
        {/* <Tooltip /> */}
        {/* <Legend /> */}
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        border-radius={10}
        <Bar dataKey="pv" background={{ fill: "#D9D9D9" }} borderRadius={[10, 10, 10, 10]}
           
        />
    
      </BarChart>
    );
  }