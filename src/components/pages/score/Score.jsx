import React, { useContext } from "react"
import { Button } from "antd"
import { useNavigate } from "react-router-dom"
import { QuizContext } from "../../../QuizContext"
import { Header } from "../../organisms/header/Header"

function Score() {
  const { questions, minutes, seconds, score, setScore, setCurrentQuestion, setOptionChosen } = useContext(QuizContext)
  const navigate = useNavigate()
  function handlePlayAgain() {
    navigate("/")
    setScore(0)
    setCurrentQuestion(0)
    setOptionChosen()
  }
  return (
    <>
      <Header />
      <div className="bg-[#91d5ff] flex items-center flex-col h-[90vh] p-[20px]">
        <div className="w-[40%] flex flex-col justify-center  items-start bg-[#fff] text-[18px] p-[20px] mx-[35px] border-[1px] rounded-md border-[#fff] ">
          <p>
            Điểm số : {score} / {questions && questions.length}
          </p>
          <p>
            Thời gian hoàn thành : {`0${minutes}`.slice(-2)} phút {`0${seconds}`.slice(-2)} giây
          </p>
          <p>
            Trạng thái :{" "}
            <span className={score >= 15 ? "text-[#73d13d]" : "text-[#ff4d4f]"}>
              {" "}
              {score >= 15 ? "Đạt" : "Không đạt"}
            </span>
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

export { Score }
