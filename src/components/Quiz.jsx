import React, { useContext, useState } from "react";

import { QuizContext } from "../helpers/contexts";
import { Questions } from "../data/QuestionBank";
import Time from "./Time";

function Quiz() {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const { setGameState,} = useContext(QuizContext);

  // let TimerInterval

  function nextQuestion() {
    if (currQuestion >= 0 && currQuestion < Questions.length - 1) {
      setCurrQuestion(currQuestion + 1);
    }
  }
  function prevQuestion() {
    if (currQuestion > 0) {
      setCurrQuestion(currQuestion - 1);
    }
  }

  function endQuiz() {
    setGameState("end");
  }

  const optionsBtn =
    "text-left px-[20px] py-[16px] border-[1px] rounded-[4px] bg-[#f4f4f4] hover:opacity-[0.8] focus:bg-[#d3fec7]";
  return (
    <div className="w-[100%]">
      <h3 className="text-center mb-[10px] ">Quiz</h3>
      <div className="mb-[20px] flex">
        <p className="flex-1">
          Câu {currQuestion + 1}: {Questions[currQuestion].content}
        </p>
        <Time />
      </div>

      <div className="grid grid-rows-2 grid-cols-2 gap-4 mb-[20px]">
        <button className={optionsBtn} onClick={() => setOptionChosen("A")}>
          A. {Questions[currQuestion].optionA}
        </button>
        <button className={optionsBtn} onClick={() => setOptionChosen("B")}>
          B. {Questions[currQuestion].optionB}
        </button>
        <button className={optionsBtn} onClick={() => setOptionChosen("C")}>
          C. {Questions[currQuestion].optionC}
        </button>
        <button className={optionsBtn} onClick={() => setOptionChosen("D")}>
          D. {Questions[currQuestion].optionD}
        </button>
      </div>

      <div className="flex justify-between m-[10px]">
        <div>
          <button
            className={
              currQuestion === 0
                ? `hidden`
                : `w-[150px] h-[40px] p-[4px] border-[1px] mx-auto`
            }
            onClick={prevQuestion}
          >
            prev quiz
          </button>
        </div>

        <div>
          {currQuestion === Questions.length - 1 ? (
            <button
              className={`w-[150px] h-[40px] p-[4px] border-[1px] mx-auto`}
              onClick={endQuiz}
            >
              End Quiz
            </button>
          ) : (
            <button
              disabled={!optionChosen}
              className={`w-[150px] h-[40px] p-[4px] border-[1px] mx-auto`}
              onClick={nextQuestion}
            >
              next quiz
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
