import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const NewUserChart = () => {
    const data = [
        {
          name: '07-08-22',
          student: 12,
          instructor: 20,
        },
        {
          name: '08-08-22',
          student: 30,
          instructor: 13,
        },
        {
          name: '09-08-22',
          student: 2,
          instructor: 9,
        },
        {
          name: '10-08-22',
          student: 2,
          instructor: 3,
        },
        {
          name: '11-08-22',
          student: 18,
          instructor: 48,
        },
        {
          name: '12-08-22',
          student: 23,
          instructor: 38,
        },
        {
          name: '13-08-22',
          student: 34,
          instructor: 43,
        },
      ];

    return (
      <div className="w-full max-w-xl flex flex-col  border-2 rounded-xl shadow-md m-4 bg-white">
        <h1 className="p-4 font-semibold text-lg">New User</h1>
        <ResponsiveContainer width={500} height={400}>
          <LineChart
            width={600}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="student" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="instructor" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
}