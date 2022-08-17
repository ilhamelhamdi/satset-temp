import React, {useState, useEffect} from "react";
import { ProposalCard } from "../components/ProposalCard";

export const AdminProposal = () => {
    const [searchText, setSearchText] = useState('')
    const [data, setData] = useState(null)

    useEffect(() => {
        fetchData()
          .then(data => setData(data))
    }, []);

    const fetchData = async () => {
        try{
            const res = await fetch('https://api.github.com/users', {
                method: 'get',
                headers: {
                'Content-Type': 'application/json',
                },
            })
        
            const json = await res.json()
            console.log(json)
            return json
        } catch(e) {
            console.log(e)
            throw(e)
        }
    }


    return (
        <div className="container mx-auto pt-5">
            <div className="flex justify-between">
                <h1 className="font-bold text-3xl">Proposal</h1>
                <div className="flex">
                    <select className="mr-2">
                        <option>Instructors</option>
                        <option>Courses</option>
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
            <div className="grid grid-cols-5 mt-5">
                {
                    data ?
                        data.map((val, idx) => (
                            <ProposalCard item={val} key={idx}/>
                        ))
                    :
                        <p>No data</p>
                }
            </div>
        </div>
    )
}