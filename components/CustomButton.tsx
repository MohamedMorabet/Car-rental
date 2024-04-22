"use client";

import Image from "@/node_modules/next/image"
import { CustomButtonProps } from "@/types/index";

const CustomButton = ({ title, containerStyles, hundleClick, btnType, textStyles, rightIcon }: CustomButtonProps) => {
  return (
    <button disabled={false} type={btnType || "button"} className={`custom-btn ${containerStyles}`}
      onClick={() => { }}>
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image  src={rightIcon} 
                  alt="right icon" fill 
                  className="object-contain" />
        </div>
      )}
    </button>
  )
}

export default CustomButton