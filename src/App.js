import { useState } from "react";
import EndScreen from "./components/EndScreen";

import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import { QuizContext } from "./helpers/contexts";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0)
  const [seconds,setSeconds] =useState(0)
  const [minutes,setMinutes] =useState(0)


  const values ={gameState ,setGameState,seconds,setSeconds,minutes,setMinutes,score,setScore}
  return (
    <div className="w-[100vw] h-[100vh] bg-slate-50">
      <h1 className="text-3xl font-bold text-center uppercase py-[20px]">
        quiz app
      </h1>
      <QuizContext.Provider value={values}>
        <div className="w-[70%] p-[20px] mx-auto border-[0.8px] flex justify-center items-center bg-white">
          {gameState === "menu" && <MainMenu />}
          {gameState === "quiz" && <Quiz />}
          {gameState === "end" && <EndScreen />}
        </div>
      </QuizContext.Provider>
    </div>
  );
}

export default App;
