import React, { useState } from "react";
import SlideBtn from "../components/SlideBtn";

const reviews = [
    {
      id: 1,
      name: "Amara Blake",
      review: "Absolutely obsessed with the quality! The fabric feels luxurious and the fit is just *chef’s kiss*. Got so many compliments!",
      role: "Blogger",
      image: "/img/kt.png"
    },
    {
      id: 2,
      name: "Zoe Martinez",
      review: "I was nervous ordering online but everything arrived so fast and fit perfectly. This is my new go-to shop for statement pieces!",
      role: "Stylist",
      image: "/img/kt.png"
    },
    {
      id: 3,
      name: "Leah Kim",
      review: "The details are incredible — from the stitching to the packaging. You can tell they care about their brand and their customers. 10/10.",
      role: "Model",
      image: "/img/kt.png"
    }
  ];
const Reviews = () => {
    const [currentIndex ,setCurrentIndex] = useState(0);

    const prev =() => {
        setCurrentIndex((prev) => prev === 0 ? reviews.length - 1 : prev - 1);
    };

    const next =() => {
        setCurrentIndex((prev) => prev ===  reviews.length - 1? 0 : prev + 1);
    };



  return (
    <section className="bg-bg-two py-8">

    <section className="section mb-20 ">
      <div className="flex items-center flex-col">
        <div>
          <h2 className="font-volkhov text-2xl text-grey-500 mb-16">
            This Is What Out Customers Say{" "}
          </h2>
        </div>

        <div className="relative w-full max-w-4xl h-30 flex justify-center items-center">
        {reviews.map((review, index) => {
          // Determine position
          let position = "hidden"; // default hide
          if (index === currentIndex) {
            position = "z-20 scale-110 opacity-100"; // active middle
          } else if (
            index === (currentIndex + 1) % reviews.length
          ) {
            position = "z-10 translate-x-32 opacity-50";
          } else if (
            index === (currentIndex - 1 + reviews.length) % reviews.length
          ) {
            position = "z-10 -translate-x-32 opacity-50";
          }

          return (
          <ReviewCard
          key={review.id}
          img={review.image}
          review={`"${review.review}"`}
          name={review.name}
          role={review.role}
          positions={position}
          />
          );
        })}
        </div>
        <SlideBtn
        className='mt-20'
          handleNext={next}
          handlePrev={prev}
        />

      </div>
    </section>
    </section>

  );
};

export default Reviews;

const ReviewCard = ({key, img, review, name, role,positions }) => {
  return (
    <div key ={key} className={`bg-white w-full max-w-md mx-auto md:w-3/5 h-auto md:h-40 rounded-lg flex flex-row gap-4 p-4 items-center absolute shadow-md transition-all duration-500 ease-in-out transform ${positions}`}>
      <div className="relative">
        <div className="bg-bg-three w-20 h-20 md:w-24 md:h-24"></div>
        <img src={img} alt={name} className="absolute w-20 h-20 md:w-24 md:h-24 z-20 bottom-2 left-2" />
      </div>

      <div className="flex flex-col items-start gap-2">
        <p className="font-poppins text-[10px] md:text-xs text-grey-500 ">{review}</p>
        <img src="/img/stars.png" alt="star" className="w-12 md:w-16"/>
        <hr className="border-t-1 w-12 md:w-16 border-t-grey" />
        <h4 className="font-volkhov text-sm md:text-lg text-grey-500">{name}</h4>
        <p className="font-poppins text-[10px] md:text-xs text-grey-500 ">{role}</p>
      </div>
    </div>
  );
};
