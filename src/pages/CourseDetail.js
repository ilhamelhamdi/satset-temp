import React, { useState } from "react";

export const CourseDetail = () => {
    const [showMoreDesc, setShowMoreDesc] = useState(false)
    const [showContent, setShowContent] = useState(false)

    const description = `Disini kita akan belajar Pemrograman JavaScript dari tingkat dasar sampai tingkat mahir, disertai dengan studi kasus.
    Materi akan selalu di update secara berkala, dan ketika materi di update, harga course pun akan diupdate dengan harga baru. Jadi pastikan untuk secepatnya membeli course ini, makin cepat, makin murah harga pembelian course ini.
    Course ini juga didukung dengan private group DISCORD sehingga kita bisa berdiskusi sesama member ketika terjadi masalah di course ini.
    Fokus pemrograman JavaScript ini akan mengarah Disini kita akan belajar Pemrograman JavaScript dari tingkat dasar sampai tingkat mahir, disertai dengan studi kasus.
    Materi akan selalu di update secara berkala, dan ketika materi di update, harga course pun akan diupdate dengan harga baru. Jadi pastikan untuk secepatnya membeli course ini, makin cepat, makin murah harga pembelian course ini.
    Course ini juga didukung dengan private group DISCORD sehingga kita bisa berdiskusi sesama member ketika terjadi masalah di course ini.
    Fokus pemrograman JavaScript ini akan mengarahke frontend, sedangkan untuk materi javascript backend akan dibuat dalam course terpisah dengan tema NodeJS.
    Pada materi ini, kita tidak akan membahas tentang HTML dan CSS, jadi pastikan teman-teman sudah menguasai tentang HTML dan juga CSS, karena pada course ini, tidak akan membahas HTML dan CSS.`
    
    return (
        <div className="container mx-auto mt-10">
            <div className="grid grid-cols-3 mb-10">
                <div className="col-span-1">
                    <img src="course_js_basic.jpeg" className="border-2 col-span-1"/>
                    {/* <div className="flex justify-center mt-2">
                        <button className="py-2 px-5 border-green-600 bg-green-600 text-white rounded-xl hover:bg-green-500">Enroll</button>
                    </div> */}
                </div>
                <div className="ml-10 col-span-2">
                    <h1 className="font-bold text-3xl">Pemrograman JavaScript : Pemula sampai Mahir</h1>
                    <div className="flex justify-between items-center mb-2">
                        <h1 className="font-semibold text-lg">Instructor: Eko Kurniawan Khannedy</h1>
                        <h1 className="text-sm text-gray-500">Updated at June 20, 2022</h1>
                    </div>
                    <h1 className="font-semibold italic">Description</h1>
                    <p>
                        { showMoreDesc ? description : description.substring(0, 630) + '...'}
                        <button className="text-blue-400 font-semibold ml-1" onClick={() => setShowMoreDesc(!showMoreDesc)}>
                            { showMoreDesc ? 'Show Less' : 'Show More'}
                        </button>
                    </p>
                </div>
            </div>
            <div className="rounded-xl shadow-md bg-white border-2 p-5">
                <div className="flex justify-between items-center">
                    <h1 className="font-semibold text-xl">Content</h1>
                    <button className="cursor-pointer" onClick={() => setShowContent(!showContent)}>
                        {
                            showContent ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                </svg>
                            :
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                </svg>
                        }
                    </button>
                </div>
                {
                    showContent ?
                        <div className="px-5 pt-5">
                            <div className="flex items-center py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                                </svg>
                                <a className="ml-2 text-blue-600" href="https://www.udemy.com/course/pemrograman-javascript-pemula-sampai-mahir/">Pendahuluan</a>
                            </div>
                            <div className="flex items-center py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                                </svg>
                                <a className="ml-2" href="https://www.udemy.com/course/pemrograman-javascript-pemula-sampai-mahir/">Pengenalan Javascript</a>
                            </div>
                            <div className="flex items-center py-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-task" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"/>
                                <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z"/>
                                <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"/>
                            </svg>
                                <a className="ml-2 text-blue-600" href="/quiz">Quiz 1</a>
                            </div>
                        </div>
                    :
                        <></>
                }
                
            </div>
        </div>
    )
}