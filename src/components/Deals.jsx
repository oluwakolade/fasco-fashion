import React, { useState } from "react";
import { ButtonTwo } from "./Button";
import SlideBtn from "./SlideBtn";

const dealImg = ["/img/deals.png", "/img/deals2.png", "/img/deals3.png"];
const dots = [1, 2, 3];

const Deals = ({ onClick }) => {
  // const [isSelected, setIsSelected] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? dealImg.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === dealImg.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full flex flex-col md:flex-row justify-evenly items-center md:items-start mb-12">
      <div className=" py-8 px-8 md:pl-24 w-full md:w-1/2 flex flex-col items-center md:items-start">
        <h3 className="font-volkhov text-center md:text-start text-grey-500 pb-4 text-xl md:text-2xl font-bold">
          Deals of The Month
        </h3>
        <p className="font-poppins text-grey-300 pb-6 text-sm text-center md:text-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin{" "}
        </p>
        <ButtonTwo text="Buy Now" className="w-30 mb-6" onClick={onClick} />
        <p className="font-poppins text-base text-grey-500 font-medium">
          Hurry,Before it's Too Late!
        </p>

        {/* timer */}
        {/* <div className="flex flex-row ">
          <div className="flex flex-col items-center gap-2">
            <div className="shadow-md h-12 w-12 rounded-md"></div>
            <p className="font-poppins text-sm">timer</p>
          </div>
        </div> */}
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-2 w-1/2">
        {/* chevron buttons */}
        <SlideBtn
          className="md:absolute"
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
        {/* main div */}
        <div className="flex flex-row pt-8 md:pt-0">

        <div className="relative mr-3">
          {/* selected image */}
          <img
            src={dealImg[currentIndex]}
            alt="fashion image"
            className="w-70 h-80 object-cover"
          />
          <div className="bg-white flex flex-col gap-2 p-4 absolute bottom-2 left-2">
            <p className="font-poppins text-grey-500 text-sm flex flex-row items-center">
              01{" "}
              <span>
                <hr className="w-2" />
              </span>{" "}
              Spring Sale
            </p>
            <p className="font-poppins text-grey-500 text-base">30% OFF</p>
          </div>
        </div>

          <div className="flex flex-col items-start gap-4 pl-4 md:pl-0">
            {/* images slide show that get selected when a chevron button is clicked */}
            <div className="flex flex-col md:flex-row gap-4">
              {dealImg.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => setCurrentIndex(index)}
                  className="w-20 h-20 md:w-60 md:h-60 object-contain cursor-pointer transition-all duration-300"
                  alt={`thumb-${index}`}
                />
              ))}{" "}
            </div>
            {/* dots */}
            <div>
              <div className="flex flex-row gap-2">
                {dots.map((dot, index) => (
                  <div
                    key={dot}
                    className={`w-5 h-5 flex items-center justify-center rounded-full border ${
                      currentIndex === index
                        ? "border-black"
                        : "border-transparent"
                    }`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full   ${
                        currentIndex === index ? "bg-black" : "bg-grey-300"
                      } `}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
