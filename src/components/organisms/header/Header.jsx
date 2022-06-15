import React from "react"
import { Logo } from "../../atoms/logo/Logo"

export const Header = () => (
  <header>
    <div className="wrapper">
      <div className="w-[100vw] h-[10vh] flex justify-center items-center border-b-[2px] p-[16px] bg-[#e6f7ff]">
        <Logo className="text-[red] text-[24px] font-[700]" />
      </div>
    </div>
  </header>
)
