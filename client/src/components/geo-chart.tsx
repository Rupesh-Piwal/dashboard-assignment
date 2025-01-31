"use client";

import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["India", 700],
  ["Australia", 800],
  ["China", 900],
];

export function GeoChart() {
  return (
    <Chart
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={data}
      options={{
        colorAxis: {
          colors: ["#4A90E2", "#8E44AD"],
        },
        backgroundColor: "#0A0F1A",
        datalessRegionColor: "#2D3748",
        defaultColor: "#2D3748",
        legend: {
          textStyle: {
            color: "#F7FAFC",
          },
        },
        tooltip: {
          textStyle: {
            color: "#F7FAFC",
          },
        },
      }}
    />
  );
}
