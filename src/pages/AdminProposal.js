import React, {useState, useEffect, useContext} from "react";
import { ProposalCard } from "../components/ProposalCard";
import { AuthContext } from "../context"
import { useNavigate } from "react-router-dom"
import SummaryCardSkeleton from "../components/SummaryCard/skeleton"
import { API_URL } from "../config"
import MainLayout from "../components/MainLayout";
import Header from "../components/Header";

export const AdminProposal = () => {
    const [searchText, setSearchText] = useState('')
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [type, setType] = useState('instructor')
    const [page, setPage] = useState(1)
    const { auth } = useContext(AuthContext)
    const accessToken = JSON.parse(localStorage.getItem('auth')).accessToken.value
    const navigate = useNavigate()

    useEffect(() => {
        if (auth === null) navigate('/')
    }, [])

    useEffect(() => {
        fetchData('instructors', 1)
          .then(data => setData(data.data))
    }, []);

    const fetchData = async (type, page) => {
        setIsLoading(true)
        try{
            const res = await fetch(API_URL + `/proposal-${type}/${page}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accessToken
                },
            })
            const json = await res.json()
            return json
        } catch(e) {
            console.log(e)
            throw(e)
        } finally {
            setIsLoading(false)
        }
    }

    const changeData = val => {
        setType(val.slice(0,-1))
        fetchData(val, 1)
          .then(data => setData(data.data))
    }

    const actionHandler = async (id, action) => {
        const typeOfID = type === 'instructor' ? 'user_id' : 'course_id'
         try{
            const res = await fetch(API_URL + `/verify-${type}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accessToken
                },
                body: JSON.stringify(
                    {
                        [typeOfID]: id,
                        "verified_status": action
                })
            })
            const json = await res.json()
            return json
        } catch(e) {
            console.log(e)
            throw(e)
        } finally {
            setData(data.filter(val => val.id !== id))
            setIsLoading(false)
        }
    }

    return (
        <MainLayout>
            <Header/>
            <div className="container mx-auto pt-10">
                <div className="flex justify-between">
                    <h1 className="font-bold text-3xl text-teal-700">Proposal</h1>
                    <div className="flex">
                        <select className="mr-2" onChange={e => changeData(e.target.value)}>
                            <option value="instructors">Instructors</option>
                            <option value="courses">Courses</option>
                        </select>
                        <div className="relative">
                            <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8487 17.3729 13.551 16.3199 14.9056L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L14.9056 16.3199C13.551 17.3729 11.8487 18 10 18C5.58172 18 2 14.4183 2 10Z" fill="#7D7D7D"/>
                                </svg>
                            </div>
                            <input value={searchText} onChange={e => setSearchText(e.target.value)} type="text" placeholder="Search" className="w-full pl-12 py-3 rounded-xl bg-gray-200"/>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-5 sm:grid-cols-2 mt-5 gap-x-2">
                    {
                        isLoading ?
                            [1,2,3,4,5,6,7,8,9,10].map(i => (
                                <SummaryCardSkeleton key={i}>
                                    <div className="h-16 bg-slate-300 self-center w-16 rounded-full mb-3"/>
                                    <div className="h-6 bg-slate-300 self-center w-full rounded mb-3"/>
                                    <div className="h-6 bg-slate-300 self-center w-full rounded mb-3"/>
                                    <div className="flex justify-between gap-x-1">
                                        <div className="h-6 bg-slate-300 self-center w-full rounded"/>
                                        <div className="h-6 bg-slate-300 self-center w-full rounded"/>
                                    </div>
                                </SummaryCardSkeleton>
                            ))
                        :
                            data.length > 0 ?
                                data.map((val, idx) => (
                                    <ProposalCard
                                        item={val}
                                        key={idx}
                                        action={actionHandler}
                                    />
                                ))
                            :
                                <h1 className="text-lg">No data avalaible</h1>
                    }
                </div>
            </div>
        </MainLayout>
    )
}