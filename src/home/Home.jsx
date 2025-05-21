import React from "react";
import { ButtonOne, ButtonTwo } from "../components/Button";
import Deals from "../components/Deals";
import Packages from "./Packages";
import Instagram from "./Instagram";
import Subscribe from "./Subscribe";
import Footer from "../components/Footer";
import Reviews from "./Reviews";
import NewArrivals from "./NewArrivals";
import NavBar from "../components/NavBar";

const logos = [
  "/img/logos/logo-2.svg",
  "/img/logos/logo-3.svg",
  "/img/logos/logo-1.svg",
  "/img/logos/logo-4.svg",
  "/img/logos/logo.svg",
];

const Home = () => {
  return (
    <section>
      <NavBar/>
      <section className="section mb-8">
        {/* <Navbar /> */}

        {/* sale */}

        <div className=" flex items-start justify-center gap-6 mb-4  pt-8">
          <img
            src="/img/sale/sale-one.png"
            alt="men clothes"
            className=" w-1/3 md:w-[30%] md:h-176 md:inline"
          />
          <SaleCard />
          <img
            src="/img/sale/sale-two.png"
            alt="men clothes"
            className=" w-1/3 md:w-[30%] md:h-176 md:inline"
          />
        </div>

        {/* logos */}
        <div className="flex items-center justify-center flex-wrap md:flex-row gap-4 md:gap-18 py-8 ">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt="brand logos" className="w-20 md:w-40" />
          ))}
        </div>
      </section>
      <Deals />
      <NewArrivals/>
      <Packages />
      <Instagram />
      <Reviews />
      <Subscribe />
      <Footer />
    </section>
  );
};

export default Home;

const SaleCard = ({ navigate }) => {
  return (
    <div className="flex flex-col  items-center gap-4 md:h-176 justify-between md:w-[30%]">
      <img src="/img/sale/sale-three.png" alt="clothes banner" className=" w-full"/>
      <div className="flex items-center flex-col">
        <img src="/img/sale/ultimate.png" alt="ultimate text" className="w-[80%]"/>
        <img src="/img/sale/sale.png" alt="sale text" className="w-[80%]" />
        <h3 className="uppercase font-poppins font-normal text-base md:text-lg">
          New collection
        </h3>
        <ButtonTwo text="SHOP NOW" onClick={navigate} className="w-38" />
      </div>
      <img src="/img/sale/sale-four.png" alt="clothes banner" className="w-full" />
    </div>
  );
};
