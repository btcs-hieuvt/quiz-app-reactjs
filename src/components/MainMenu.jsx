import React, { useContext, useEffect } from "react"
import { Button, Select } from "antd"
import { QuizContext } from "../helpers/contexts"
import axios from "axios"

const { Option } = Select
function MainMenu() {
  const {
    setGameState,
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
  function handleStart() {
    if (chosenCategory || chosenDifficulty) {
      setGameState("quiz")
      setMinutes(0)
      setSeconds(0)
      setOptionChosen()
    }
  }
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
  return (
    <>
      <div className="w-[100%] bg-[#e6f7ff] ">
        <h3 className="text-center mb-[10px] text-[22px] font-[600] ">Main Menu</h3>
        <div className="w-[100%] min-h-[150px]  flex flex-col justify-evenly items-center">
          {/* select categories */}
          <div className="w-[50%] flex flex-col">
            <span className="mb-[4px]">Select category</span>
            <Select defaultValue={chosenCategory} onChange={handleChangeCategory}>
              {categories &&
                categories.map((category, index) => (
                  <Option key={index} value={category.id}>
                    {category.name}
                  </Option>
                ))}
            </Select>
          </div>

          {/* select difficulty */}
          <div className="w-[50%] flex flex-col">
            <span className="mb-[4px]">Select difficulty</span>
            <Select defaultValue={chosenDifficulty} onChange={handleChangeDifficulty}>
              <Option value="easy">Easy</Option>
              <Option value="medium">Medium</Option>
              <Option value="hard">Hard</Option>
            </Select>
          </div>
        </div>
        <div className="flex justify-center items-center p-[20px] mx-[35px]">
          <Button
            disabled={chosenCategory === undefined || chosenDifficulty === undefined}
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
