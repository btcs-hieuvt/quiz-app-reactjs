import React from "react"
import { Button, Spin } from "antd"
export default function Loading(props) {
  const { handleBackMenu } = props
  return (
    <>
      <Spin className="w-[100%] mx-auto my-[10px]" size="large" />
      <div className="w-[100%] flex items-center justify-center my-[25px]">
        <Button className="w-[30%] bg-[#fff] px-[10px] " onClick={handleBackMenu}>
          Quay lại
        </Button>
      </div>
    </>
  )
}
