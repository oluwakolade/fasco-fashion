import React from "react";
import { ButtonTwo } from "../components/Button";

const Subscribe = () => {
  return (
    <section id='subscribe' className="section pt-8 mb-20 ">
      <div className="flex md:flex-row items-center justify-center ">
        <div className="w-[25%]">
        <img src="/img/sub.png" alt="women outfit" className="hidden md:inline h-2/5" />

        </div>

        <div className="flex flex-col gap-2 items-center">
          <h2 className="font-volkhov text-center text-xl md:text-2xl text-grey-500 pb-4">
            Subscribe To Our Newsletter{" "}
          </h2>
          <p className="text-xs md:text-sm font-poppins text-grey-300 pb-4 text-center">
            Subscribe  to get recent updates on new products, fresh deals and
            promos.{" "}
          </p>

          <input
            type="email"
            placeholder="michael@gmail.com"
            className="border-none focus:outline-none bg-white shadow-lg rounded-lg w-full text-sm font-poppins text-grey-300 p-3 mb-8"
          />
          <div>
            <ButtonTwo text="Subscribe Now" className="w-38" />
          </div>
        </div>

        <div className="w-[25%]">

        <img src="/img/sub2.png" alt="women outfit" className="hidden md:inline h-2/5" />
        </div>

      </div>
    </section>
  );
};

export default Subscribe;
