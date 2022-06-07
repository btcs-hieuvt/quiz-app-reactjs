import React, { useContext, useEffect, useRef } from "react"

import { QuizContext } from "../helpers/contexts"

function Time() {
  const { seconds, setSeconds, minutes, setMinutes } = useContext(QuizContext)
  let TimerInterval = useRef()
  useEffect(() => {
    TimerInterval.current = setInterval(() => {
      setSeconds(seconds + 1)
      if (seconds === 59) {
        setMinutes(minutes + 1)
        setSeconds(0)
      }
    }, 1000)

    return () => {
      clearInterval(TimerInterval.current)
    }
  }, [seconds, setSeconds, minutes, setMinutes])
  return (
    <div>
      {" "}
      <span className="text-[#fca5a5]">
        {`0${minutes}`.slice(-2)} : {`0${seconds}`.slice(-2)}
      </span>{" "}
    </div>
  )
}

export default Time
