import React from "react";
import {SummaryCard} from '../components/SummaryCard'
import {NewUserChart} from '../components/NewUserChart'
import { TopCourseChart } from "../components/TopCourseChart";

export const AdminDashboard = () => {
    const summaryData = [
        {
         "name": "students",
         "amount": 110,
        },
        {
         "name": "instructors",
         "amount": 5,
        },
        {
         "name": "courses",
         "amount": 25,
        },
    ];

    return (
        <div className="container mx-auto pt-5">
            <h1 className="font-bold text-3xl">Summary</h1>
            <div className="flex flex-row justify-between">
                {
                    summaryData.map((val, idx) => (
                        <SummaryCard key={idx} item={val}/>
                    ))
                }
            </div>
            <div className="flex justify-between mt-5">
                <NewUserChart/>
                <TopCourseChart/>
            </div>
        </div>
    )
}