import React, { useContext } from "react"
import Timer from "../../atoms/timer/Timer"
import { QuizContext } from "../../../QuizContext"
export default function InfoTable() {
  const { currentQuestion, questions } = useContext(QuizContext)
  return (
    <>
      <Timer />
      <p>câu hỏi : {currentQuestion + 1}</p>
      <p>tổng câu hỏi : {questions.length}</p>
    </>
  )
}
