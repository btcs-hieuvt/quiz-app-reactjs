import React, { useContext, useEffect, useState } from "react"
import { Button, Spin } from "antd"
import { QuizContext } from "../helpers/contexts"
import { Questions } from "../data/QuestionBank"
import axios from "axios"

function Quiz() {
  const {
    setGameState,
    optionChosen,
    setOptionChosen,
    score,
    setScore,
    currentQuestion,
    setCurrentQuestion,
    chosenCategory,
    chosenDifficulty,
    questions,
    setQuestions,
  } = useContext(QuizContext)
  const [options, setOptions] = useState()
  const optionsBtn = `min-h-[40px] text-left w-[80%]  px-[20px] py-[16px] border-[1px] rounded-[4px] hover:opacity-[0.8] bg-[#fff] min-h-[35px] font-[500] `
  useEffect(() => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=20&category=${chosenCategory}&difficulty=${chosenDifficulty}&type=multiple`
      )
      .then((res) => {
        const data = res.data
        if (data.response_code !== 1) {
          setQuestions(data.results)
        } else {
          setQuestions()
        }
      })
  }, [])
  useEffect(() => {
    setOptions(
      questions &&
        handleShuffer([questions[currentQuestion]?.correct_answer, ...questions[currentQuestion]?.incorrect_answers])
    )
  }, [questions, currentQuestion])
  function handleShuffer(options) {
    return options.sort(() => Math.random() - 0.5)
  }
  function nextQuestion() {
    if (questions[currentQuestion].correct_answer === optionChosen) {
      setScore(score + 1)
    }
    if (currentQuestion >= 0 && currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setOptionChosen()
    } else {
      setGameState("end")
    }
    setOptionChosen()
  }
  function prevQuestion() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }
  function endQuiz() {
    if (questions[currentQuestion].correct_answer === optionChosen) {
      setScore(score + 1)
    }
    if (currentQuestion >= 0 && currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setOptionChosen()
      setGameState("end")
      setQuestions()
    }
  }
  function handleBackMenu() {
    setGameState("menu")
    setQuestions()
  }
  function handleChosenAnswer(answer) {
    setOptionChosen(answer)
  }

  return (
    <>
      <div className="w-[100%]">
        {questions ? (
          <>
            <div className="mb-[20px] flex ">
              <h1 className="flex-1 text-[18px] ">
                <strong>Câu {currentQuestion + 1}:</strong>
                <p
                  dangerouslySetInnerHTML={{
                    __html: questions[currentQuestion] && questions[currentQuestion].question,
                  }}
                />
              </h1>
            </div>

            <div className="flex flex-col gap-4 mb-[30px] items-center">
              {options &&
                options.map((option, index) => (
                  <button
                    key={index}
                    id="answer"
                    className={option === optionChosen ? optionsBtn + "bg-[#91d5ff]" : optionsBtn}
                    onClick={() => handleChosenAnswer(option)}
                  >
                    <h4 className="flex items-center ">
                      {index === 0 ? "A" : index === 1 ? "B" : index === 2 ? "C" : "D"}.{" "}
                      <p className="mb-0" dangerouslySetInnerHTML={{ __html: option }} />
                    </h4>
                  </button>
                ))}
            </div>

            <div className="flex justify-between m-[10px] ">
              <div>
                <Button
                  className={
                    currentQuestion === 0
                      ? `hidden`
                      : `w-[150px] h-[40px] p-[4px] border-[1px] mx-auto text-[16px] font-[500] bg-[#2f54eb] text-[#fff]`
                  }
                  onClick={prevQuestion}
                >
                  Previous Quiz
                </Button>
              </div>
              {currentQuestion < Questions.length - 1 && (
                <div>
                  <Button
                    className="w-[150px] h-[40px] p-[4px] border-[1px] mx-auto text-[16px] font-[500] bg-[#2f54eb] text-[#fff] "
                    onClick={endQuiz}
                  >
                    End Quiz
                  </Button>
                </div>
              )}

              <div>
                <Button
                  disabled={optionChosen === undefined}
                  className={`w-[150px] h-[40px] p-[4px] border-[1px] mx-auto text-[16px] font-[500] bg-[#2f54eb] text-[#fff] `}
                  onClick={nextQuestion}
                >
                  {currentQuestion === Questions.length - 1 ? "End Quiz" : "Next Quiz"}
                </Button>
              </div>
            </div>
          </>
        ) : (
          <>
            <Spin className="w-[100%] mx-auto my-[10px]" size="large" />
            {!questions && (
              <div className="w-[100%] flex items-center justify-center my-[25px]">
                <Button className="w-[30%] bg-[#fff] px-[10px] " onClick={handleBackMenu}>
                  Quay lại
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  )
}

export default Quiz
