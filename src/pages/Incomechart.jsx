// import "./styles.css";
import React from "react";
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
    
    // amt: 2400
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    
    // amt: 2210
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    // amt: 2290
  },
  
];

export default function App() {
  return (
    <BarChart
      width={600}
      height={200}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
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
      <Bar dataKey="pv" fill="#B8B8B8" background={{ fill: "#D9D9D9" }} border-radius="10px"/>
    </BarChart>
  );
}
