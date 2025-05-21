import React from "react";
import { ButtonTwo } from "../components/Button";

const packageItems = [
  {
    id: 1,
    icon: "/icons/high.svg",
    title: "High Quality ",
    desc: " crafted from top materials",
  },
  {
    id: 2,
    icon: "/icons/protection.svg",
    title: "Warranty Protection",
    desc: "over 2 years",
  },
  {
    id: 3,
    icon: "/icons/free.svg",
    title: "Free Shipping ",
    desc: "order over $150",
  },
  {
    id: 4,
    icon: "/icons/247.svg",
    title: "24/7 Support",
    desc: "Dedicated support",
  },
];

const Packages = ({ onClick }) => {
  return (
    <section className="mb-20">
      <section className="flex flex-col md:flex-row mt-16 bg-bg-two md:bg-bg-one ">
        <div className="w-full md:w-[60%]">
          <img src="/img/peaky.png" alt="package banner" className="h-full w-full"/>
        </div>

        <div className="p-12 w-full md:w-[40%] bg-bg-one">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-poppins text-sm text-gray-500 pb-4">
              Women Collection
            </h2>
            <h1 className="font-volkhov text-xl md:text-2xl text-grey-500 pb-4">
              Peaky Blinders
            </h1>
            <h3 className="font-poppins underline text-grey-500 font-semibold text-sm md:text-base uppercase">
              description
            </h3>
            <p className=" text-xs md:text-sm text-center md:text-start font-poppins text-grey-700 pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices sollicitudin. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Scelerisque duis.
            </p>

            <div className="flex md:flex-col justify-between items-center md:items-start gap-6 md:gap-2">

              <div className="flex flex-row gap-2 pb-4">

              <p className="text-sm font-poppins text-grey-700">size:</p>
              <div className=" flex items-center text-xs md:text-sm font-poppins text-white bg-black px-2 rounded-md">
                M
              </div>
              </div>



              <h2 className=" font-poppins text-lg md:text-xl font-semibold text-grey-500 pb-4">
              $100<span className="text-lg">.00</span>
            </h2>
            </div>

         

            <ButtonTwo text="Buy Now" className="w-30 mb-6" onClick={onClick} />
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 items-start md:items-center justify-between px-8 md:px-24 pt-10">
        {packageItems.map((items) => (
          <div key={items.id} className="flex flex-row gap-2 mb-3">
            <img src={items.icon} alt={items.title} className="w-6 md:w-8" />

            <div className="flex flex-col gap-1">
              <h4 className="font-poppins text-xs md:text-sm text-grey-500 font-semibold">
                {items.title}
              </h4>
              <p className="font-poppins text-[9px] md:text-xs text-grey-500">{items.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
