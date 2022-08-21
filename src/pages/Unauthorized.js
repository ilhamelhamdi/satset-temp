import React, { useEffect } from "react";
import Header from "../components/Header";
import MainLayout from "../components/MainLayout";
import Images from "../images"

const Unauthorized = () => {
    useEffect(() => {
        document.title = 'Satset | 403'
    })
    return (
        <MainLayout>
            <Header />
            <div className="flex justify-center items-center container mx-auto max-w-2xl mt-10">
                <img src={Images.Unauthorized} alt='Unauthorized' />
            </div>
        </MainLayout>
    )
}

export default Unauthorized