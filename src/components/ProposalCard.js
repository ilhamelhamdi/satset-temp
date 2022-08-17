import React from "react";

export const ProposalCard = ({item}) => {
    return (
        <div className="max-w-sm flex flex-col  border-2 rounded-xl hover:shadow-md m-4 bg-white p-3">
            <div className="flex justify-center mb-5">
                <img src={item.avatar_url} className="rounded-full w-6/12"/>
            </div>
            <h1 className="font-semibold text-lg">{item.login}</h1>
            <h1 className="text-md">{item.type}</h1>
            <div className="flex mt-2">
                <button className="w-full rounded-lg mr-2 py-1 border-2 border-teal-700 bg-white text-teal-700 hover:bg-teal-700 hover:text-white transition">Approve</button>
                <button className="w-full rounded-lg mr-2 py-1 border-2 border-red-700 bg-white text-red-700 hover:bg-red-700 hover:text-white transition">Reject</button>
            </div>
        </div>
    )
}