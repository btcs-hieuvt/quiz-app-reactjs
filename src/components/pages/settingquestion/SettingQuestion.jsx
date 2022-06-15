import React, { useContext, useEffect } from "react"
import { Button, Select } from "antd"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { QuizContext } from "../../../QuizContext"
import { Header } from "../../organisms/header/Header"

const { Option } = Select
function SettingQuestion() {
  const navigate = useNavigate()
  const {
    setMinutes,
    setSeconds,
    setOptionChosen,
    categories,
    setCategories,
    chosenCategory,
    setChosenCategory,
    chosenDifficulty,
    setChosenDifficulty,
  } = useContext(QuizContext)
  const urlCategories = "https://opentdb.com/api_category.php"
  useEffect(() => {
    axios.get(urlCategories).then((res) => {
      const dataCategories = res.data.trivia_categories
      setCategories(dataCategories)
    })
  }, [setCategories])

  const handleChangeCategory = (value) => {
    setChosenCategory(value)
  }
  const handleChangeDifficulty = (value) => {
    setChosenDifficulty(value)
  }
  function handleStart() {
    if (chosenCategory || chosenDifficulty) {
      navigate("/question")
      setMinutes(0)
      setSeconds(0)
      setOptionChosen()
    }
  }
  return (
    <>
      <Header />
      <div className="w-[100vw] h-[90vh] flex justify-center bg-[#91d5ff] p-[25px]">
        <div className="w-[60%] h-[300px] bg-[#fff] p-[10px] rounded-[8px]">
          <h1 className="my-[15px] text-center text-[18px] uppercase">Setting Quiz</h1>
          <div className="flex flex-col justify-evenly items-center">
            <div className="w-[50%] flex flex-col mb-[10px]">
              <span className="mb-[6px]">Select category</span>
              <Select defaultValue={chosenCategory} onChange={handleChangeCategory}>
                {categories &&
                  categories.map((category, index) => (
                    <Option key={index} value={category.id}>
                      {category.name}
                    </Option>
                  ))}
              </Select>
            </div>

            <div className="w-[50%] flex flex-col -mb[10px]">
              <span className="mb-[6px]">Select difficulty</span>
              <Select defaultValue={chosenDifficulty} onChange={handleChangeDifficulty}>
                <Option value="easy">Easy</Option>
                <Option value="medium">Medium</Option>
                <Option value="hard">Hard</Option>
              </Select>
            </div>
          </div>
          <div className="flex justify-center items-center p-[20px]">
            <Button
              disabled={chosenCategory === undefined || chosenDifficulty === undefined}
              onClick={handleStart}
              className="w-[150px] h-[50px] text-[18px]"
            >
              Start
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export { SettingQuestion }
