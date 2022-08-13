import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export const TopCourseChart = () => {
    const top_courses = [
        {
            "name": "Kotlin Course",
            "students": 25
        },
        {
            "name": "Python for baby",
            "students": 22
        },
        {
            "name": "Cook Like Ramsey",
            "students": 17
        },
        {
            "name": "World War 2 Documentary",
            "students": 12
        },
        {
            "name": "How To Get Rich In 2 Minutes",
            "students": 8
        }
    ]

    const barColors = ["#1f77b4", "#ff7f0e", "#2ca02c", "#f5424e", "#f5ef42"]
    return (
        <div className="w-full max-w-xl flex flex-col  border-2 rounded-xl shadow-md m-4 bg-white">
            <h1 className="p-4 font-semibold text-lg">Top Course</h1>
            <ResponsiveContainer width={500} height={400}>
                <BarChart 
                    width={500} 
                    height={300} 
                    data={top_courses} 
                    layout="vertical"
                    margin={{top: 5, right: 30, left: 60, bottom: 5}}
                >
                    <XAxis type="number"/>
                    <YAxis type="category" dataKey="name" />
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="students" fill="#8884d8">
                    {
                        top_courses.map((val, index) => (
                        <Cell key={`cell-${index}`} fill={barColors[index % 20]} />
                        ))
                    }
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}