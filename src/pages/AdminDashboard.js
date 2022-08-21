import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom"
import { SummaryCard } from '../components/SummaryCard/SummaryCard'
import { NewUserChart } from '../components/Chart/NewUserChart'
import { TopCourseChart } from "../components/Chart/TopCourseChart";
import MainLayout from "../components/MainLayout";
import Header from "../components/Header"
import { API_URL } from "../config"
import { AuthContext } from "../context"
import useSWR from "swr";
import SummaryCardSkeleton from "../components/SummaryCard/skeleton";
import ChartSkeleton from "../components/Chart/skeleton";


export const DashboardData = () => {
    const accessToken = JSON.parse(localStorage.getItem('auth')).accessToken.value

    const fetchData = async (url, token) => {
        const res = await fetch(url, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        const data = ((await res.json()).data)
        return data
    }

    const { data, error } = useSWR([`${API_URL}/admin-dashboard`, accessToken], fetchData)

    if (!data && !error) {
        return (
            <div>
                <div className="flex flex-row justify-between">
                    {
                        [1, 2, 3].map(i => (
                            <SummaryCardSkeleton key={i}>
                                <div className="h-10 bg-slate-300 self-center w-16 rounded mb-3" />
                                <div className="h-6 bg-slate-300 self-center w-64 rounded" />
                            </SummaryCardSkeleton>
                        ))
                    }
                </div>
                <div className="flex justify-between mt-5">
                    {
                        [1, 2].map(i => (
                            <ChartSkeleton key={i} />
                        ))
                    }
                </div>
            </div>
        )
    }

    if (data) {
        return (
            <div>
                <div className="flex flex-row justify-between">
                    {
                        data.data.map((val, i) => (
                            <SummaryCard key={i} item={val} />
                        ))
                    }
                </div>
                <div className="flex justify-between mt-5 flex-col lg:flex-row">
                    <NewUserChart data={data.new_user} />
                    <TopCourseChart top_courses={data.top_courses} />
                </div>
            </div>
        )
    }
}

const AdminDashboard = () => {
    const { auth } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        document.title = 'Satset | Dashboard'
        if (auth === null) navigate('/')
    }, [])

    return (
        <MainLayout>
            <Header />
            <div className="container mx-auto xl:max-w-screen-xl  px-4 pt-2 mb-8">
                <h1 className="font-bold text-3xl text-teal-700 mt-5">Summary</h1>
                <DashboardData />
            </div>
        </MainLayout>
    )
}

export default AdminDashboard