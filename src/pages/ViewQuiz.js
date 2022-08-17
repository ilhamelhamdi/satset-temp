import React, { useEffect, useState } from "react";

export const ViewQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState()
    const [currentNumber, setCurrentNumber] = useState()
    const [currentAnswer, setCurrentAnswer] = useState()
    const [answer, setAnswer] = useState([])
    const [isResult, setIsResult] = useState(false)
    const [submittedAnswer, setSubmittedAnswer] = useState([])
    const quiz =   {
        "id": 1,
        "title":  "Membuat Goggle",
        "questions": [
            {
                "question":  "Siapakah pembuat Python?",
                "opt_true":  "Guido Van Rossum",
                "opt":  ["Guido Van Rossum", "Larry Page", "Sergey Brin", "Elon Musk"],
            },
            {
                "question":  "Siapakah pembuat C++?",
                "opt_true":  "Guido Van Rossum",
                "opt": ["Guido Van Rossum", "Larry Page", "Sergey Brin", "Elon Musk"],
            },
        ]
    }

    const quizFeedback = {
        "quiz_id": 1,
        "course_id": 3,
        "title":  "Membuat Goggle",
        "score":  50,
        "answer_feedback": [1,1]
    }
     

    useEffect(() => {
        changeQuestion(1)
    }, [])

    const changeQuestion = (number) => {
        const question = quiz.questions[number-1]
        const idxOfExist = answer.findIndex(el => el.number === (number))
        if(idxOfExist !== -1){
            setCurrentAnswer(answer[idxOfExist].answer)
        } else{
            setCurrentAnswer('')
        }
        setCurrentQuestion(question)
        setCurrentNumber(number)
    }

    const answerQuestion = (ans) => {
        const idxOfExist = answer.findIndex(el => el.number === currentNumber)
        if(idxOfExist !== -1){
            answer.splice(idxOfExist, 1, {number: currentNumber, answer: ans})
            setAnswer(answer)
        } else {
            setAnswer([...answer, {
                number: currentNumber,
                answer: ans
            }])
        }
        setCurrentAnswer(ans)
    }

    const isAnswerExist = (number) => {
        const idxOfExist = answer.findIndex(el => el.number === number)
        if(idxOfExist !== -1){
            return true
        }
        return false
    }

    const submitQuiz = () => {
        for(let i=0;i<quiz.questions.length;i++){
            const idxOfAns = answer.findIndex(el => el.number === i+1)
            submittedAnswer.push(answer[idxOfAns].answer)
            // setSubmittedAnswer([...submittedAnswer, answer[idxOfAns].answer])
        }
        setIsResult(true)
    }
   
    return (
        <div className="container mx-auto xl:max-w-screen-xl px-4 pt-2 mb-8 mt-10">
            <h1 className="font-semibold text-3xl">Quiz 1</h1>
            <div className="flex w-full mt-2">
                <div className="w-3/12 border-2 rounded-xl p-3 mr-5 h-full">
                    {
                        isResult ?
                            <div>
                                <h1 className="font-semibold text-5xl text-center">{quizFeedback.score}</h1>
                                <h1 className="text-center mb-3">Score</h1>
                                {
                                    quizFeedback.answer_feedback.map((val, idx) => (
                                        <button
                                            className="border-2 py-2 px-3 rounded-lg hover:border-gray-400 mr-1 text-white"
                                            key={idx}
                                            style={{backgroundColor: val ? "#0D9488" : "#dc2626"}}
                                            >
                                                {idx+1}
                                        </button>
                                    ))
                                }
                            </div>

                        :
                            quiz.questions.map((val, idx) => (
                                <button
                                    className="border-2 py-2 px-3 rounded-lg hover:border-gray-400 mr-1"
                                    key={idx}
                                    style={{
                                        backgroundColor: isAnswerExist(idx+1) ? "#0D9488" : (currentNumber === idx+1 ? "#E5E7EB" : "white"),
                                        color: isAnswerExist(idx+1) ? "white" : "black"
                                    }}
                                    onClick={() => changeQuestion(idx+1)}
                                    >
                                        {idx+1}
                                </button>
                            ))
                    }
                </div>
                <div className="w-9/12 border-2 rounded-xl p-3 h-full">
                    {
                        isResult ?
                            <div className="p-3">
                                {
                                    quiz.questions.map((val, idx) => (
                                        <div className="mb-2">
                                            <h1 className="font-semibold text-xl">
                                                {idx+1 + '. ' + val.question}
                                            </h1>
                                            <div className="ml-6 grid grid-cols-2 gap-2 mt-2">
                                                {
                                                    val.opt.map((opt, index) => (
                                                        <a
                                                            className="p-2 border-2 border-gray-200 hover:border-gray-400 w-full rounded-md text-start mr-1"
                                                            key={index}
                                                            style={{
                                                                backgroundColor: submittedAnswer[idx] === opt ? (quizFeedback.answer_feedback[idx] ? "#0D9488" : "#dc2626") : "white",
                                                                color: submittedAnswer[idx] === opt ? "white" : "black"
                                                            }}
                                                            >{opt}
                                                        </a>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        :
                            <div className="p-3">
                                <h1 className="font-semibold text-xl">
                                    {currentQuestion ? 
                                        currentNumber + '. ' + currentQuestion.question
                                    : <></>
                                    }
                                </h1>
                                <div className="ml-6 grid grid-cols-2 gap-2 mt-5">
                                    {
                                        currentQuestion ?
                                            currentQuestion.opt.map((val, idx) => (
                                                <button
                                                    className="p-2 border-2 border-gray-200 hover:border-gray-400 w-full rounded-md text-start mr-1"
                                                    key={idx}
                                                    onClick={e => answerQuestion(val)}
                                                    style={{
                                                        backgroundColor: currentAnswer === val ? "#0D9488" : "white",
                                                        color: currentAnswer === val ? "white" : "black"
                                                    }}
                                                    >{val}
                                                </button>
                                            ))
                                        :
                                            <></>
                                    }
                                </div>
                                <div className="flex justify-between mt-5">
                                    {
                                        currentNumber !== 1 ?
                                            <button className="border-2 rounded-md py-2 px-4 hover:bg-teal-600 hover:text-white" onClick={() => changeQuestion(currentNumber-1)}>Previous</button>
                                        :
                                            <div></div>
                                    }
                                    {
                                        currentNumber !== quiz.questions.length ?
                                            <button className="border-2 rounded-md py-2 px-4 hover:bg-teal-600 hover:text-white" onClick={() => changeQuestion(currentNumber+1)}>Next</button>
                                        :
                                            (answer.length === quiz.questions.length ?
                                                <button className="border-2 rounded-md py-2 px-4 hover:bg-teal-600 bg-teal-700 text-white" onClick={() => submitQuiz()}>Submit</button>
                                            :
                                                <button className="border-2 rounded-md py-2 px-4 cursor-no-drop" disabled>Submit</button>    
                                            )
                                        
                                    }
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}