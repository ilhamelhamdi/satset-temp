import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import CourseCard from "../components/CourseCard"
import Header from "../components/Header"
import MainLayout from "../components/MainLayout"
import { SummaryCard } from "../components/SummaryCard"
import { AuthContext } from "../context"
import Icons from "../images/icons"

const InstructorDashboard = () => {

  // CHECK AUTHENTICATION
  const { auth } = useContext(AuthContext)
  useEffect(() => {
    if (auth === null) navigate('/')
  }, [])

  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const summaryData = [
    {
      name: 'Course created',
      amount: 50
    },
    {
      name: 'Course verified',
      amount: 29
    },
    {
      name: 'Course pending',
      amount: 9
    },
    {
      name: 'Course rejected',
      amount: 12
    },
  ]

  const courses = [
    {
      title: "Learn Python from Scratch Blablabla Bla Bla Bla",
      status: "Verified",
      students: 18,
    },
    {
      title: "Learn Python from Scratch Blablabla Bla Bla Bla",
      status: "Verified",
      students: 20,
    },
    {
      title: "Learn Python from Scratch Blablabla Bla Bla Bla",
      status: "Pending",
      students: 0,
    },
    {
      title: "Learn Python from Scratch Blablabla Bla Bla Bla",
      status: "Pending",
      students: 0,
    },
    {
      title: "Learn Python from Scratch Blablabla Bla Bla Bla",
      status: "Rejected",
      students: 0,
    },

  ]


  return (
    <MainLayout>
      <Header />
      <div className="container mx-auto xl:max-w-screen-xl mt-4 px-4">
        <div>
          <h1 className="text-3xl font-bold text-teal-700">Summary</h1>
          <div className="flex justify-between">
            {
              summaryData.map((val, idx) => (
                <SummaryCard key={idx} item={val} />
              ))
            }
          </div>
        </div>

        <hr />

        <div className="mt-4">
          <div className="flex flex-wrap justify-between">
            <h1 className="text-3xl font-bold text-teal-700">Your Courses</h1>
            <div className="flex w-1/3 justify-between">
              <select name="course-status" className="rounded-lg px-2 outline outline-2 outline-slate-200 focus:outline-teal-700">
                <option value="all">All</option>
                <option value="verified">Verified</option>
                <option value="pending">Pending</option>
                <option value="rejected">Rejected</option>
              </select>
              <div className="relative flex-auto ml-8 mr-2">
                <div className="absolute inset-y-0 left-2 flex items-center">
                  <Icons.Search className="fill-stone-300" />
                </div>
                <input
                  type="text"
                  id="search-box"
                  placeholder="Search courses..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full text-stone-700 pl-12 py-2 rounded-lg outline outline-2 outline-slate-200 focus:outline-teal-700"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mt-4">
            {courses.map((course, idx) => (
              <CourseCard key={idx} title={course.title} image={course.image}>
                <p className="mb-4 font-semibold text-slate-500">{course.status}</p>
                <div className="text-right text-teal-700">{course.students} students</div>
              </CourseCard>
            ))}
          </div>

          <div className="flex justify-center">
            <Button>Load more...</Button>
          </div>

        </div>
      </div>
    </MainLayout>
  )
}

export default InstructorDashboard