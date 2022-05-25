import React, { useContext, useState } from "react";

import { QuizContext } from "../helpers/contexts";
import { Questions } from "../data/QuestionBank";
import Time from "./Time";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const { setGameState,score,setScore} = useContext(QuizContext);


  // let TimerInterval
console.log(score);
  function nextQuestion() {

    if(Questions[currentQuestion].answer === optionChosen){
      setScore(score + 1)
    }
    if (currentQuestion >= 0 && currentQuestion < Questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setOptionChosen("")
    }
    setOptionChosen("")
    
  }
  function prevQuestion() {
  
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  function endQuiz() {
    
    if(Questions[currentQuestion].answer === optionChosen){
      setScore(score + 1)
      setOptionChosen("")
    }
    setGameState("end");
  }

  const optionsBtn =
    "text-left px-[20px] py-[16px] border-[1px] rounded-[4px] bg-[#f4f4f4] hover:opacity-[0.8] focus:bg-[#d3fec7]";
  return (
    <div className="w-[100%]">
      <h3 className="text-center mb-[10px] ">Quiz</h3>
      <div className="mb-[20px] flex">
        <p className="flex-1">
          Câu {currentQuestion + 1}: {Questions[currentQuestion].content}
        </p>
        <Time />
      </div>

      <div className="grid grid-rows-2 grid-cols-2 gap-4 mb-[20px]">
        <button className={optionsBtn} onClick={() => setOptionChosen("A")}>
          A. {Questions[currentQuestion].optionA}
        </button>
        <button className={optionsBtn} onClick={() => setOptionChosen("B")}>
          B. {Questions[currentQuestion].optionB}
        </button>
        <button className={optionsBtn} onClick={() => setOptionChosen("C")}>
          C. {Questions[currentQuestion].optionC}
        </button>
        <button className={optionsBtn} onClick={() => setOptionChosen("D")}>
          D. {Questions[currentQuestion].optionD}
        </button>
      </div>

      <div className="flex justify-between m-[10px]">
        <div>
          <button
            className={
              currentQuestion === 0
                ? `hidden`
                : `w-[150px] h-[40px] p-[4px] border-[1px] mx-auto`
            }
            onClick={prevQuestion}
          >
            prev quiz
          </button>
        </div>

        <div>
            <button
              disabled={!optionChosen}
              className={`w-[150px] h-[40px] p-[4px] border-[1px] mx-auto`}
              onClick={nextQuestion}
            >
             {currentQuestion === Questions.length - 1 ? "end quiz" : "next quiz"} 
            </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
