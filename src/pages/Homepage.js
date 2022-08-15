import Header from "../components/Header"
import MainLayout from "../components/MainLayout"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../components/Carousel";
import Button from "../components/Button";
import CourseCard from "../components/CourseCard";

const Homepage = () => {
  const courses = [
    {
      title: "Learn Python from Scratch Blablabla Bla Bla Bla",
      instructor: "Hamdi",
      students: 209
    },
    {
      title: "Learn Python from Scratch",
      instructor: "Hamdi",
      students: 209
    },
    {
      title: "Learn Python from Scratch",
      instructor: "Hamdi",
      students: 209
    },
    {
      title: "Learn Python from Scratch",
      instructor: "Hamdi",
      students: 209
    },
    {
      title: "Learn Python from Scratch",
      instructor: "Hamdi",
      students: 209
    },
    {
      title: "Learn Python from Scratch",
      instructor: "Hamdi",
      students: 209
    },
    {
      title: "Learn Python from Scratch",
      instructor: "Hamdi",
      students: 209
    },
    {
      title: "Learn Python from Scratch",
      instructor: "Hamdi",
      students: 209
    },
  ]
  return (
    <MainLayout>
      <Header />
      <div className="container mx-auto xl:max-w-screen-xl px-4 pt-2 mb-8">
        <Carousel />

        <div className="w-full mb-4">
          <h2 className="text-3xl font-bold mb-4 text-teal-700">Popular Courses</h2>
          <div className="flex flex-wrap">
            {
              courses.map((course, i) => (
                <CourseCard title={course.title} image={course.image}>
                  <p className="mb-4 font-semibold text-teal-700">{course.instructor}</p>
                  <p className="text-right ">{course.students} students</p>
                </CourseCard>
              ))
            }
          </div>
          <div className="flex justify-center">
            <Button>Load more...</Button>
          </div>
        </div>

        <hr />

        <div className="w-full my-4">
          <h2 className="text-3xl font-bold mb-4 text-teal-700">Main Features</h2>
          <div className="flex flex-col lg:flex-row space-x-2">
            <div className="w-full lg:w-1/2 flex items-center">
              <img src="lectures.jpg" alt="" className="h-60 w-60 md:h-80 md:w-80 object-cover" />
              <div className="w-1/2 ml-4">
                <h3 className="text-2xl font-bold">Various Lectures</h3>
                <p>Grasp the material from various format you want (text, audio, video, etc)</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex items-center">
              <img src="quiz.jpg" alt="" className="h-60 w-60 md:h-80 md:w-80 object-cover" />
              <div className="w-1/2 ml-4">
                <h3 className="text-2xl font-bold">Interactive Quizzes</h3>
                <p>Check your understanding by taking the quizzes.</p>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="w-full flex my-4">
          <img src="webinar.jpg" alt="" className="w-1/2" />
          <div className="w-1/2 space-y-4 flex flex-col justify-center">
            <h2 className="text-3xl text-teal-700 font-bold">Become An Instructor</h2>
            <p>Be the one who share the knowledge to the others. We provide the tools and skills to teach what you love.</p>
            <Button>Start teaching today</Button>
          </div>
        </div>
      </div>
    </MainLayout >
  )
}

export default Homepage