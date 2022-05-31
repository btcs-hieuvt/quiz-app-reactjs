import React, { useContext } from "react"

import { QuizContext } from "../helpers/contexts"
import { Questions } from "../data/QuestionBank"

function EndScreen() {
  const { setGameState, minutes, seconds, score, setScore } = useContext(QuizContext)

  function handlePlayAgain() {
    setGameState("menu")
    setScore(0)
  }
  return (
    <div>
      <h3 className="text-center mb-[10px]">Result</h3>
      <div>
        <p>
          Điểm số : {score} / {Questions.length}
        </p>
        <p>
          Thời gian hoàn thành : {`0${minutes}`.slice(-2)} phút {`0${seconds}`.slice(-2)} giây
        </p>
        <p>Trạng thái : {score >= 15 ? "Đạt" : "Không đạt"}</p>
      </div>

      <button className="w-[150px] h-[40px] p-[4px] border-[1px] mx-auto" onClick={handlePlayAgain}>
        Again
      </button>
    </div>
  )
}

export default EndScreen
