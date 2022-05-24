import React, { useContext } from "react";

import { QuizContext } from "../helpers/contexts";

function EndScreen() {

  const {setGameState,minutes,seconds} =useContext(QuizContext)
  return (
    <div>
      <h3 className="text-center mb-[10px]">End Quiz</h3>
      <p>Time : {`0${minutes}`.slice(-2)} : {`0${seconds}`.slice(-2)} </p>
      <button 
        className="w-[150px] h-[40px] p-[4px] border-[1px] mx-auto"
        onClick={()=>setGameState("menu")}
        >
        Again
      </button>
    </div>
  );
}

export default EndScreen;
