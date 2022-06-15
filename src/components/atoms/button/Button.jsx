import React from "react"

export const Button = ({ label, handleClick }) => {
  return <button onClick={handleClick}>{label}</button>
}
