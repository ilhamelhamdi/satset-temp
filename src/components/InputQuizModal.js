import { useEffect, useState } from "react"
import Icons from "../images/icons"
import Button from "./Button"
import ModalBox from "./ModalBox"


const InputQuizModal = () => {
  const [title, setTitle] = useState('')
  const [questions, setQuestions] = useState([])

  return (
    <ModalBox>
      <h2 className="text-2xl text-teal-700 font-bold text-center">Quiz</h2>
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
      <div id="questions" className="mb-4">
        <h2 className="text-lg  mb-2">Questions</h2>
        <div className="space-y-4">
          <InputQuestion />
        </div>
        <Button>+ Add Question</Button>
      </div>

      <div className="space-x-2 flex justify-end">
        <Button onClick={() => { }} className="font-bold">Cancel</Button>
        <Button className="font-bold">Save</Button>
      </div>
    </ModalBox>
  )
}

const InputQuestion = () => {
  const [question, setQuestion] = useState('')
  const [options, setOptions] = useState([''])

  const questionId = 1

  return (
    <div className="border rounded-lg w-full p-4 space-y-4">
      <div className="w-full flex space-x-2">
        <span>1)</span>
        <textarea
          placeholder="Insert your question"
          value={question}
          onChange={e => setQuestion(e.target.value)}
          className="inline-block flex-auto outline outline-2 outline-slate-200 focus:outline-teal-700 px-4 py-2 rounded-lg"
        />
        <Icons.Delete />
      </div>
      <div className="px-8 space-y-2">
        {options.map((val, idx) => (
          <InputOption key={idx} {...{ idx, options, setOptions, questionId }} />
        ))}
      </div>
      <div className="space-x-4 flex justify-end">
        <Button onClick={() => setOptions([...options, ''])}>+ Add Option</Button>
        {/* <Button>Save</Button> */}
      </div>
    </div >
  )
}

const InputOption = (props) => {
  const [option, setOption] = useState(props.options[props.idx])

  const handleOptionsUpdate = () => {
    const newOptions = props.options.map((val, i) => {
      if (i === props.idx) return option
      return val
    })
    props.setOptions(newOptions)
  }

  const handleRemove = () => {
    const newOptions = props.options
    newOptions.splice(props.idx, 1)
    props.setOptions(newOptions)
    console.log(props.options);
  }


  return (
    <div className="space-x-2 flex items-center">
      <input type="radio" value={option} name={props.questionId} className="h-6 w-6 accent-teal-700" />
      <input
        type="text"
        placeholder="Insert your option"
        value={option}
        onChange={e => setOption(e.target.value)}
        onBlur={handleOptionsUpdate}
        className="inline-block flex-auto outline outline-2 outline-slate-200 focus:outline-teal-700 px-4 py-2 rounded-lg"
      />
      <Icons.Cross
        title="remove"
        onClick={handleRemove}
        className="h-4 cursor-pointer fill-red-700/30 hover:fill-red-700/90"
      />
    </div>
  )
}

export default InputQuizModal