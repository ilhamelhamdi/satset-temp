import { useState } from "react"
import Button from "../components/Button"
import Header from "../components/Header"
import InputQuizModal from "../components/InputQuizModal"
import MainLayout from "../components/MainLayout"
import ModalBox from "../components/ModalBox"
import Icons from "../images/icons"

const LectureBox = () => {
  return (
    <div className="shadow-lg border-2 border-solid border-slate-200 p-4 mb-4 rounded-lg">
      <div className="flex justify-between">
        <h2 className="text-2xl"> <em className="text-teal-700">Lecture</em> : <span className="font-bold">This is title</span></h2>
        <div className="flex">
          <Icons.Edit className="fill-teal-700 opacity-70 hover:opacity-100 h-8" />
          <Icons.Delete className="fill-rose-800 opacity-70 hover:opacity-100 h-8" />
        </div>
      </div>
    </div>
  )
}

const QuizBox = () => {
  return (
    <div className="shadow-lg border-2 border-solid border-slate-200 p-4 mb-4 rounded-lg">
      <div className="flex justify-between">
        <h2 className="text-2xl"> <em className="text-teal-700">Quiz</em> : <span className="font-bold">This is title</span></h2>
        <Icons.Delete className="fill-rose-800 opacity-70 hover:opacity-100" />
      </div>
    </div>
  )
}


const InputLecture = ({ setShowInputLecture }) => {
  const [title, setTitle] = useState('')
  const [link, setLink] = useState('')

  return (
    <ModalBox>
      <h2 className="text-2xl text-teal-700 font-bold text-center">Lecture</h2>
      <div id="title" className="mb-4">
        <h2 className="text-lg  mb-2">Title</h2>
        <input
          type="text"
          placeholder="Insert your lecture title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="inline-block w-full outline outline-2 outline-slate-200 focus:outline-teal-700 px-4 py-2 rounded-lg"
        />
      </div>
      <div id="link" className="mb-4">
        <h2 className="text-lg  mb-2">Link</h2>
        <input
          type="text"
          placeholder="Insert your lecture link"
          value={link}
          onChange={e => setLink(e.target.value)}
          className="inline-block w-full outline outline-2 outline-slate-200 focus:outline-teal-700 px-4 py-2 rounded-lg"
        />
      </div>
      <div className="space-x-2 flex justify-end">
        <Button onClick={() => setShowInputLecture(false)} className="font-bold">Cancel</Button>
        <Button className="font-bold">Save</Button>
      </div>
    </ModalBox>
  )
}


const CreateNewCourse = () => {
  const MAX_TITLE = 70
  const MAX_DESC = 2000
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [image, setImage] = useState({ preview: '', raw: '' })
  const [showInputLecture, setShowInputLecture] = useState(false)
  const [showInputQuiz, setShowInputQuiz] = useState(true)

  const handleImage = e => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  }

  const validateTitle = (value) => {
    if (value.length <= MAX_TITLE) setTitle(value)
  }
  const validateDesc = (value) => {
    if (value.length <= MAX_DESC) setDesc(value)
  }

  return (
    <MainLayout>
      <Header />
      <div className="container mx-auto xl:max-w-screen-xl pt-2 mb-12">
        <div>
          <h1 className="text-3xl font-bold text-center">Create New Course</h1>

          <div id="title">
            <h2 className="text-xl font-bold text-teal-700 mb-2">Title</h2>
            <input
              type="text"
              placeholder="Insert your course title"
              value={title}
              onChange={e => validateTitle(e.target.value)}
              className="inline-block w-full outline outline-2 outline-slate-200 focus:outline-teal-700 px-4 py-2 rounded-lg"
            />
            <p className="text-right text-slate-500">{title.length}/{MAX_TITLE}</p>
          </div>

          <div id="title">
            <h2 className="text-xl font-bold text-teal-700 mb-2">Description</h2>
            <textarea
              type="text"
              placeholder="Insert your course description"
              cols={30}
              value={desc}
              onChange={e => validateDesc(e.target.value)}
              className="inline-block w-full outline outline-2 outline-slate-200 focus:outline-teal-700 px-4 py-2 rounded-lg"
            />
            <p className="text-right text-slate-500">{desc.length}/{MAX_DESC}</p>
          </div>

          <div className="flex flex-col mb-4">
            <h2 className="text-xl font-bold text-teal-700 mb-2">Image</h2>
            <div className="w-1/2 self-center">
              <label htmlFor="upload-button" style={{ backgroundImage: image.preview ? 'url(' + image.preview + ')' : '', paddingTop: '56.25%' }} className="w-full block relative cursor-pointer group bg-center bg-no-repeat bg-cover bg-gray-200">
                {
                  !image.preview &&
                  <div className="flex flex-col items-center justify-center absolute inset-0">
                    <Icons.AddImg className="h-1/2 fill-teal-700/75 group-hover:fill-teal-700/100" />
                  </div>
                }
              </label>
              <input className="hidden" type="file" accept=".jpg, .jpeg, .png" id="upload-button" onChange={handleImage} />
              <p className="text-center">Tips: Image format .jpg .jpeg .png and minimum size 400 x 225 px (ratio 16:9)</p>
            </div>
          </div>
        </div>

        <hr />
        <div>
          <h1 className="text-3xl font-bold my-4">Content</h1>

          <LectureBox />
          <QuizBox />

          <div className="flex justify-end space-x-4">
            <Button onClick={() => setShowInputLecture(true)}>+ Add Lecture</Button>
            <Button onClick={() => setShowInputQuiz(true)}>+ Add Quiz</Button>
          </div>
        </div>


      </div>

      {showInputLecture && <InputLecture {...{ setShowInputLecture }} />}
      {showInputQuiz && <InputQuizModal {...{ setShowInputQuiz }} />}

    </MainLayout>
  )
}

export default CreateNewCourse