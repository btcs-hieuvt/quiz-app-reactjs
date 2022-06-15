import React from "react"
import { Routes, Route } from "react-router-dom"
import { Home } from "./components/pages/home/Home"
import { SettingQuestion } from "./components/pages/settingquestion/SettingQuestion"
import { Question } from "./components/pages/question/Question"
import { Score } from "./components/pages/score/Score"
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settingquestion" element={<SettingQuestion />} />
        <Route path="/question" element={<Question />} />
        <Route path="/score" element={<Score />} />
      </Routes>
    </>
  )
}
