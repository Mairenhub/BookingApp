import { CustomButtonProps } from '@/utils/Calendar.models'
import React from 'react'



const CustomButton = ({title, handleClick}: CustomButtonProps) => {
  return (
    <button
        onClick={handleClick}>
        {title}
    </button>
  )
}

export default CustomButton