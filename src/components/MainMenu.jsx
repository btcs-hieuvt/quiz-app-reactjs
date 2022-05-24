import React, { useContext } from 'react'
import { QuizContext } from '../helpers/contexts'

function MainMenu() {

  const {setGameState ,setMinutes,setSeconds} = useContext(QuizContext)
  function handleStart(){
    setGameState("quiz")
    setMinutes(0)
    setSeconds(0)
  }
  return (
    <div>
        <h3 className='text-center mb-[10px]'>Main Menu</h3>
        <button 
          className="w-[150px] h-[40px] p-[4px] border-[1px] mx-auto"
          onClick={handleStart}
          >
          Start
        </button>

    </div>
  )
}

export default MainMenu