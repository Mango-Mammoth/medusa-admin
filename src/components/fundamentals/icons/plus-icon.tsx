import React from "react"
import IIconProps from "./icon-interface"

const PlusIcon: React.FC<IIconProps> = ({
  size = "24",
  color = "currentColor",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 3.33331V12.6666"
        stroke={color}
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.33301 8H12.6663"
        stroke={color}
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default PlusIcon