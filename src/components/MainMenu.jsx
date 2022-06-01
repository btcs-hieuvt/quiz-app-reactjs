import React, { useContext } from "react"
import { Button } from "antd"
import { QuizContext } from "../helpers/contexts"

function MainMenu() {
  const { setGameState, setMinutes, setSeconds, setOptionChosen } = useContext(QuizContext)
  function handleStart() {
    setGameState("quiz")
    setMinutes(0)
    setSeconds(0)
    setOptionChosen("")
  }
  return (
    <>
      <div className="w-[100%] bg-[#e6f7ff]">
        <h3 className="text-center mb-[10px] text-[22px] font-[600] ">Main Menu</h3>
        <div className="flex justify-center items-center p-[20px] mx-[35px]">
          <Button
            className="w-[150px] h-[40px] p-[4px] border-[1px] mx-auto text-[16px] font-[500] bg-[#2f54eb] text-[#fff]"
            onClick={handleStart}
          >
            Start
          </Button>
        </div>
      </div>
    </>
  )
}

export default MainMenu
