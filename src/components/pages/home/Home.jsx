import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "antd"
import { Header } from "../../organisms/header/Header"

export const Home = () => {
  const navigate = useNavigate()
  function handleChooseQuestion() {
    navigate("settingquestion")
  }
  return (
    <>
      <Header />
      <div className="w-[100vw] h-[90vh] flex justify-center bg-[#91d5ff] p-[25px]">
        <div className="w-[60%] h-[300px] bg-[#fff] p-[10px] rounded-[8px]">
          <h1 className="my-[15px] text-center text-[18px] uppercase">Home Quiz</h1>
          <div className="flex justify-center items-center p-[20px]">
            <Button onClick={handleChooseQuestion} className="w-[200px] h-[50px] text-[18px]">
              Choosen Questions
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
