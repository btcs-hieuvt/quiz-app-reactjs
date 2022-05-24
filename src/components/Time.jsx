import React,{useContext, useEffect} from 'react'

import { QuizContext } from "../helpers/contexts";

function Time() {
    const {seconds,setSeconds,minutes,setMinutes } = useContext(QuizContext);
    let TimerInterval
    useEffect(()=>{
        TimerInterval= setInterval(()=>{
            
            setSeconds(seconds + 1)
            if(seconds === 59){
                setMinutes(minutes + 1)
                setSeconds(0)
            }
        },1000)
        return ()=>{
            clearInterval(TimerInterval)
        }
    },[seconds,setSeconds])
  return (
    <div> <span className='text-[#fca5a5]'>{`0${minutes}`.slice(-2)} : {`0${seconds}`.slice(-2)}</span>   </div>
    
  )
}

export default Time