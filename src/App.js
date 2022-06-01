import { useState } from "react"
import EndScreen from "./components/EndScreen"

import MainMenu from "./components/MainMenu"
import Quiz from "./components/Quiz"
import Time from "./components/Time"
import { Questions } from "./data/QuestionBank"
import { QuizContext } from "./helpers/contexts"

function App() {
  const [gameState, setGameState] = useState("menu")
  const [score, setScore] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [optionChosen, setOptionChosen] = useState()

  const values = {
    gameState,
    setGameState,
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
  }
  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-r from-[#69c0ff] to-[#91d5ff]">
      <h1 className="text-3xl text-[#f5f8ff] font-bold text-center uppercase py-[20px]">quiz app</h1>
      <QuizContext.Provider value={values}>
        <div className="flex p-[20px] justify-center items-start">
          {gameState === "quiz" && (
            <div className="w-[20%] min-h-[200px] font-[500] rounded items-start flex justify-start flex-col gap-2  p-[10px] bg-[#e6f7ff]">
              <div className=" flex">
                <p>Thời gian :</p>
                <Time />
              </div>
              <div className=" flex">
                <p>
                  Câu hỏi : {currentQuestion + 1}/{Questions.length}
                </p>
              </div>
            </div>
          )}
          <div className="w-[70%] p-[20px] mx-auto border-[0.8px] flex justify-center items-center rounded bg-[#e6f7ff]">
            {gameState === "menu" && <MainMenu />}
            {gameState === "quiz" && <Quiz />}
            {gameState === "end" && <EndScreen />}
          </div>
        </div>
      </QuizContext.Provider>
    </div>
  )
}

export default App
