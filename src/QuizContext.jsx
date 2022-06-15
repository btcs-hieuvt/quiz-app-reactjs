import { createContext, useState } from "react"
const QuizContext = createContext()

function QuizProvider({ children }) {
  const [questions, setQuestions] = useState()
  const [score, setScore] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [optionChosen, setOptionChosen] = useState()
  const [categories, setCategories] = useState([])
  const [chosenCategory, setChosenCategory] = useState()
  const [chosenDifficulty, setChosenDifficulty] = useState()
  const values = {
    questions,
    setQuestions,
    optionChosen,
    setOptionChosen,
    seconds,
    setSeconds,
    minutes,
    setMinutes,
    score,
    setScore,
    currentQuestion,
    setCurrentQuestion,
    categories,
    setCategories,
    chosenCategory,
    setChosenCategory,
    chosenDifficulty,
    setChosenDifficulty,
  }
  return <QuizContext.Provider value={values}>{children}</QuizContext.Provider>
}

export { QuizContext, QuizProvider }
