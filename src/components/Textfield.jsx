import React from "react";


const Textfield = ({ label,onChange , inputName, inputValue, inputType, errorText, isError }) => {
    return (
      <div className="flex flex-col items-start gap-3">
        {/* <label className="font-poppins text-grey font-normal text-base ">
          {label}
        </label> */}
        <input
          type={inputType}
          name={inputName}
          value={inputValue}
          onChange={onChange}
          placeholder={label}
          className={`py-2 border-b-2 border-b-grey-300 font-poppins text-gray-800 font-normal text-base w-full pb-2 focus:border-b-blue-50 focus:outline-none ${isError ? 'border-b-red-600' : '' }`}
        />
        <p className={`text-red-600 text-xs pb-2 mb-2 font-poppins invisible ${isError ? 'visible' : ' ' } `}>{errorText}</p>
      </div>
    );
  };

  const Textfield2 = ({ label,onChange , inputName, inputValue, inputType, errorText, isError }) => {
    return (
      <div className="flex flex-col items-start gap-3">
        {/* <label className="font-poppins text-grey font-normal text-base ">
          {label}
        </label> */}
        <input
          type={inputType}
          name={inputName}
          value={inputValue}
          onChange={onChange}
          placeholder={label}
          className={`pl-2 py-2 border rounded-md border-grey-300 font-poppins text-gray-800 font-normal text-base w-full pb-2 focus:border-b-blue-50 focus:outline-none  ${isError ? 'border-red-600' : '' }`}
        />
        <p className={`text-red-600 text-xs pb-2 mb-2 font-poppins invisible ${isError ? 'visible' : ' ' } `}>{errorText}</p>
      </div>
    );
  };




  
  export  { Textfield ,Textfield2 } ;