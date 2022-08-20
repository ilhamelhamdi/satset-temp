import { useContext, useEffect, useState } from "react"
import useSWR from "swr"

import Button from "../components/Button"
import Header from "../components/Header"
import InputQuizModal from "../components/CreateCourse/InputQuizModal"
import MainLayout from "../components/MainLayout"
import QuizBox from "../components/CreateCourse/QuizBox"
import Icons from "../images/icons"
import LectureBox from "../components/CreateCourse/LectureBox"
import InputLectureModal from "../components/CreateCourse/InputLectureModal"
import { API_URL } from "../config"
import { AuthContext } from "../context"
import { useNavigate, useParams } from "react-router-dom"
import Toast from "../components/Toast"
import ContentBoxSkeleton from "../components/CreateCourse/ContentBoxSkeleton"


const EditCourse = () => {
  // CHECK AUTHENTICATION
  const { auth } = useContext(AuthContext)
  useEffect(() => {
    if (auth === null) navigate('/')
    if (auth.user.role !== 'instructor') navigate('/403', { replace: true })
  }, [])


  const [contents, setContents] = useState([])
  const [showInputLecture, setShowInputLecture] = useState(false)
  const [showInputQuiz, setShowInputQuiz] = useState(false)
  const [indexEdit, setIndexEdit] = useState(-1)
  const [submitLoading, setSubmitLoading] = useState(false)
  const [fetchLoading, setFetchLoading] = useState(true)

  const navigate = useNavigate()

  // FETCH COURSE DETAIL
  const courseId = (useParams()).id

  const fetcher = async (url, token) => {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      referrerPolicy: 'no-referrer'
    })
    if (res.status === 403) {
      navigate('/403')
    } else if (res.status === 401) {
      navigate('/register')
    }
    const data = await res.json()
    return data
  }

  const fetchCourse = async (url, token) => {
    return (await fetcher(url, token)).data
  }

  const fetchOrder = async (url, token) => {
    return (await fetcher(url, token)).order
  }

  const { data: course, error: errorCourse } = useSWR([`${API_URL}/course/${courseId}`, auth.accessToken.value], fetchCourse)
  const { data: courseOrder, error: errorOrder } = useSWR([`${API_URL}/course-order/${courseId}`, auth.accessToken.value], fetchOrder)

  const handleSubmit = () => { }

  useEffect(() => {
    // SAVE Data to Local Storage
    if (course && courseOrder) {

      const newContents = courseOrder.map(type => {
        if (type === 'l') {
          const content = course.lectures.slice(0, 1)[0]
          course.lectures.splice(0, 1)
          return {
            type: 'l',
            data: content
          }
        }
        if (type === 'q') {
          const content = course.quizzes.slice(0, 1)[0]
          course.quizzes.splice(0, 1)
          return {
            type: 'q',
            data: content
          }
        }
      })

      console.log(course)
      localStorage.setItem('contents:' + courseId, JSON.stringify(newContents))
      setContents(newContents)
      setFetchLoading(false)
    }
  }, [course, courseOrder])

  useEffect(() => {
    if (fetchLoading && (errorCourse || errorOrder)) Toast('error', 'Something wrong')
  }, [errorCourse, errorOrder])

  useEffect(() => {
    localStorage.setItem('contents:' + courseId, JSON.stringify(contents))
  }, [contents])

  useEffect(() => {
    localStorage.removeItem('temp')
  }, [])


  return (
    <MainLayout>
      <Header />
      <div className="container mx-auto xl:max-w-screen-xl pt-2 mb-12">
        <div className="mb-6">
          <h1 className="text-3xl font-bold my-4">Content</h1>
          {
            fetchLoading ?
              <div>
                <ContentBoxSkeleton />
                <ContentBoxSkeleton />
                <ContentBoxSkeleton />
              </div> :
              contents.map((content, idx) => {
                if (content === undefined) return null
                if (content.type === 'l') return <LectureBox key={idx} {...{ contents, setContents, setShowInputLecture, setIndexEdit, idx }} />
                if (content.type === 'q') return <QuizBox key={idx} {...{ contents, setContents, setShowInputQuiz, setIndexEdit, idx }} />
              })
          }
          <div className="flex justify-end space-x-4">
            <Button onClick={() => setShowInputLecture(true)}>+ Add Lecture</Button>
            <Button onClick={() => setShowInputQuiz(true)}>+ Add Quiz</Button>
          </div>
        </div>


        {submitLoading ?
          <Button className="w-full bg-teal-700 text-white text-xl font-bold cursor-not-allowed">
            <Icons.Loading className="animate-spin h-5 w-5 mr-3 inline-block" />
            Loading...
          </Button> :
          <Button onClick={handleSubmit} className="w-full bg-teal-700 text-white text-xl font-bold">Submit</Button>
        }
      </div>

      {showInputLecture && <InputLectureModal {...{ setShowInputLecture, contents, setContents, indexEdit, setIndexEdit }} />}
      {showInputQuiz && <InputQuizModal {...{ setShowInputQuiz, contents, setContents, indexEdit, setIndexEdit }} />}

    </MainLayout>
  )
}

export default EditCourse