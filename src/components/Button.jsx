import React from 'react'

const ButtonOne = ({icon,text,onClick,type , width, className}) => {
  return (
    <div>
        <button 
        type={type}
        onClick={onClick}
        className={`w-full flex flex-row items-center text-center justify-center font-normal text-sm text-black gap-4 font-poppins rounded-md bg-transparent p-2 border border-blue-50 hover:text-blue-600 cursor-pointer ${className}`}>
            <img src={icon} alt={icon}  
            className={width}
           />
            <span className='text-center'>
            {text}
            </span>
        </button>
    </div>
  )
}


const ButtonTwo = ({text, onClick,type,className}) => {
    return (
      <div>
          <button 

          type={type}
          onClick={onClick}
          className={` ${className} font-normal text-sm text-white font-poppins rounded-md bg-black shadow-md p-3 cursor-pointer hover:text-black hover:bg-white border border-black`}>
              {text}
          </button>
      </div>
    )
  }

export  {ButtonOne, ButtonTwo};
