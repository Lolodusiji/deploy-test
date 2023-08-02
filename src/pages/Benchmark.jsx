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
  
  const data = [
    {
      name: "Page C",
      uv: 2000,
      pv: 4500,
    },

    {
      name: "Page C",
      uv: 2000,
      pm: 4500,
    },

    {
      name: "Page C",
      uv: 2000,
      am: 4500,
    },

    {
      name: "Page C",
      uv: 2000,
      fs: 4500,
    },

    {
      name: "Page C",
      uv: 2000,
      st: 4500,
    },

    {
      name: "Page C",
      uv: 2000,
      pw: 4500,
    },

    {
      name: "Page C",
      uv: 2000,
      pu: 4500,
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
          bottom: 5
        }}
        barSize={80}
      >
        {/* <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} /> */}
        {/* <YAxis /> */}
        {/* <Tooltip /> */}
        {/* <Legend /> */}
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        border-radius={10}
        <Bar dataKey="pv" fill="#2594F2" background={{ fill: "#D9D9D9" }} border-radius="10"
            // dataKey="am" fill="#9ED56A" background={{ fill: "#D9D9D9" }} border-radius="10"
        />
        {/* <Bar dataKey="pv" fill="#B8B8B8" background={{ fill: "#D9D9D9" }} border-radius="10px"/> */}
        {/* <Bar dataKey="pv" fill="#B8B8B8" background={{ fill: "#D9D9D9" }} border-radius="10px"/> */}
        {/* <Bar dataKey="pv" fill="#B8B8B8" background={{ fill: "#D9D9D9" }} border-radius="10px"/> */}
        {/* <Bar dataKey="pv" fill="#B8B8B8" background={{ fill: "#D9D9D9" }} border-radius="10px"/> */}
        {/* <Bar dataKey="pv" fill="#B8B8B8" background={{ fill: "#D9D9D9" }} border-radius="10px"/> */}
        {/* <Bar dataKey="pv" fill="#B8B8B8" background={{ fill: "#D9D9D9" }} border-radius="10px"/> */}

      </BarChart>
    );
  }