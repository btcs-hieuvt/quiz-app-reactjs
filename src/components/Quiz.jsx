import React, { useContext, useState } from "react"
import { Button, Typography } from "antd"
import { QuizContext } from "../helpers/contexts"
import { Questions } from "../data/QuestionBank"

const { Text } = Typography
function Quiz() {
  const { setGameState, optionChosen, setOptionChosen, score, setScore, currentQuestion, setCurrentQuestion } =
    useContext(QuizContext)

  function nextQuestion() {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1)
    }
    if (currentQuestion >= 0 && currentQuestion < Questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setOptionChosen("")
    } else {
      setGameState("end")
    }
    setOptionChosen("")
  }
  function prevQuestion() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }
  function endQuiz() {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1)
    }
    if (currentQuestion >= 0 && currentQuestion < Questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setOptionChosen("")
      setGameState("end")
    }
  }

  const optionsBtn =
    "min-h-[40px] text-left w-[60%]  px-[20px] pb-[16px] border-[1px] rounded-[4px] hover:opacity-[0.8] bg-[#fff] min-h-[35px] font-[500] "
  return (
    <div className="w-[100%]">
      <div className="mb-[20px] flex ">
        <p className="flex-1 text-[18px] ">
          Câu {currentQuestion + 1}: {Questions[currentQuestion].content}
        </p>
      </div>

      <div className="flex flex-col gap-4 mb-[30px] items-center">
        <Button className={optionsBtn} onClick={() => setOptionChosen("A")}>
          <Text>A. {Questions[currentQuestion].optionA}</Text>
        </Button>
        <Button className={optionsBtn} onClick={() => setOptionChosen("B")}>
          <Text>B. {Questions[currentQuestion].optionB}</Text>
        </Button>
        <Button className={optionsBtn} onClick={() => setOptionChosen("C")}>
          <Text>C. {Questions[currentQuestion].optionC}</Text>
        </Button>
        <Button className={optionsBtn} onClick={() => setOptionChosen("D")}>
          <Text> D. {Questions[currentQuestion].optionD}</Text>
        </Button>
      </div>

      <div className="flex justify-between m-[10px] ">
        <div>
          <Button
            className={currentQuestion === 0 ? `hidden` : `w-[150px] h-[40px] p-[4px] border-[1px] mx-auto text-[16px] font-[500] bg-[#2f54eb] text-[#fff]`}
            onClick={prevQuestion}
          >
            Previous Quiz
          </Button>
        </div>
        {currentQuestion < Questions.length - 1 && (
          <div>
            <Button className="w-[150px] h-[40px] p-[4px] border-[1px] mx-auto text-[16px] font-[500] bg-[#2f54eb] text-[#fff] " onClick={endQuiz}>
              End Quiz
            </Button>
          </div>
        )}

        <div>
          <Button
            disabled={!optionChosen}
            className={`w-[150px] h-[40px] p-[4px] border-[1px] mx-auto text-[16px] font-[500] bg-[#2f54eb] text-[#fff] `}
            onClick={nextQuestion}
          >
            {currentQuestion === Questions.length - 1 ? "End Quiz" : "Next Quiz"}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Quiz
