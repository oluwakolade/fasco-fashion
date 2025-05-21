import React from 'react'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";


const SlideBtn = ({handlePrev,handleNext, className}) => {
  return (
    <div className={`flex flex-row gap-2 bottom-4 left-140 ${className} `}>
    <div
      className="rounded-full h-8 w-8 bg-white shadow-lg flex items-center justify-center cursor-pointer"
      onClick={handlePrev}
    >
      <FaChevronLeft />
    </div>
    <div
      className="rounded-full h-8 w-8  bg-white shadow-lg flex items-center justify-center cursor-pointer"
      onClick={handleNext}
    >
      <FaChevronRight />
    </div>
  </div>  )
}

export default SlideBtn