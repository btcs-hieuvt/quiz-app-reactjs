import React, { useContext } from "react"
import { Button } from "antd"
import { QuizContext } from "../helpers/contexts"
import { Questions } from "../data/QuestionBank"

function EndScreen() {
  const { setGameState, minutes, seconds, score, setScore,setCurrentQuestion } = useContext(QuizContext)

  function handlePlayAgain() {
    setGameState("menu")
    setScore(0)
    setCurrentQuestion(0)
  }
  return (
    <>
      <div>
        <h3 className="text-center mb-[10px] text-[22px] font-[600] text-[#262626]">Kết Quả</h3>
        <div className="flex flex-col justify-center items-start bg-[#fff] text-[18px] p-[20px] mx-[35px] border-[1px] rounded-md border-[#fff] ">
          <p>
            Điểm số : {score} / {Questions.length}
          </p>
          <p>
            Thời gian hoàn thành : {`0${minutes}`.slice(-2)} phút {`0${seconds}`.slice(-2)} giây
          </p>
          <p>
            Trạng thái : <span className={score >= 15 ? "text-[#73d13d]" : "text-[#ff4d4f]"}> {score >= 15 ? "Đạt" : "Không đạt"}</span>
          </p>
        </div>
        <div className="flex justify-center items-center p-[20px] mx-[35px]">
          <Button
            className="w-[150px] h-[40px] p-[4px] border-[1px] mx-auto text-[16px] font-[500] bg-[#2f54eb] text-[#fff]"
            onClick={handlePlayAgain}
          >
            Again
          </Button>
        </div>
      </div>
    </>
  )
}

export default EndScreen
