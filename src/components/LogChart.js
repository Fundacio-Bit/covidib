import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  ReferenceLine,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

const LogChart = ({ data }) => {
  // console.log(data);
  const mockData = [
    {
      date: "11/3/2020",
      deaths: 1,
    },
    {
      date: "12/3/2020",
      deaths: 1,
    },
    {
      date: "13/3/2020",
      deaths: 1,
    },
    {
      date: "14/3/2020",
      deaths: 1,
    },
    {
      date: "15/3/2020",
      deaths: 1,
    },
    {
      date: "16/3/2020",
      deaths: 1,
    },
    {
      date: "17/3/2020",
      deaths: 1,
    },
    {
      date: "18/3/2020",
      deaths: 2,
    },
    {
      date: "19/3/2020",
      deaths: 2,
    },
    {
      date: "20/3/2020",
      deaths: 4,
    },
    {
      date: "21/3/2020",
      deaths: 4,
    },
    {
      date: "22/3/2020",
      deaths: 10,
    },
    {
      date: "23/3/2020",
      deaths: 10,
    },
    {
      date: "24/3/2020",
      deaths: 13,
    },
    {
      date: "25/3/2020",
      deaths: 17,
    },
    {
      date: "26/3/2020",
      deaths: 22,
    },
    {
      date: "27/3/2020",
      deaths: 26,
    },
    {
      date: "28/3/2020",
      deaths: 29,
    },
    {
      date: "29/3/2020",
      deaths: 37,
    },
    {
      date: "30/3/2020",
      deaths: 42,
    },
    {
      date: "31/3/2020",
      deaths: 46,
    },
    {
      date: "1/4/2020",
      deaths: 58,
    },
    {
      date: "2/4/2020",
      deaths: 69,
    },
    {
      date: "3/4/2020",
      deaths: 71,
    },
    {
      date: "4/4/2020",
      deaths: 75,
    },
    {
      date: "5/4/2020",
      deaths: 81,
    },
    {
      date: "6/4/2020",
      deaths: 84,
    },
    {
      date: "7/4/2020",
      deaths: 89,
    },
    {
      date: "8/4/2020",
      deaths: 89,
    },
    {
      date: "9/4/2020",
      deaths: 97,
    },
    {
      date: "10/4/2020",
      deaths: 102,
    },
    {
      date: "11/4/2020",
      deaths: 112,
    },
    {
      date: "12/4/2020",
      deaths: 117,
    },
    {
      date: "13/4/2020",
      deaths: 118,
    },
    {
      date: "14/4/2020",
      deaths: 125,
    },
    {
      date: "15/4/2020",
      deaths: 131,
    },
    {
      date: "16/4/2020",
      deaths: 134,
    },
  ];

  return (
    <section>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={mockData}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="deaths" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis
            scale="log"
            ticks={[10, 100, 1000]}
            domain={["dataMin", 1000]}
            allowDataOverflow
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

export default LogChart;
