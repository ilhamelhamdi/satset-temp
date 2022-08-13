import React from "react";

export const ProposalCard = ({item}) => {
    return (
        <div className="max-w-sm flex flex-col  border-2 rounded-xl shadow-md m-4 bg-white p-3">
            <div className="flex justify-center mb-5">
                <img src={item.avatar_url} className="rounded-full w-6/12"/>
            </div>
            <h1 className="font-semibold text-lg">{item.login}</h1>
            <h1 className="text-md">{item.type}</h1>
            <div className="flex mt-2">
                <button className="w-full bg-green-600 text-white rounded-lg mr-2 py-1 hover:bg-green-500">Approve</button>
                <button className="w-full border-red-600 bg-red-600 text-white rounded-lg hover:bg-red-500">Reject</button>
            </div>
        </div>
    )
}