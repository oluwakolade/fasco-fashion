import React from "react";
import Filters from "./Filters";
import NavBar from "../components/NavBar";
import ShopProducts from "./ShopProducts";
import Packages from "../home/Packages";
import Instagram from "../home/Instagram";
import Subscribe from "../home/Subscribe";
import Footer from "../components/Footer";
import { FaChevronRight } from "react-icons/fa";

const ShopHome = () => {
  return (
    <section>
      <div className="w-full">
        <NavBar />

        <div className="flex flex-col items-center justify-center py-8 gap-4">
            <h2 className="font-volkhov text-2xl">Fashion</h2>
            <p className="flex flex-row items-center justify-center gap-4 font-poppins text-base">Home <span><FaChevronRight/> </span> Fashion</p>
        </div>

        <div className="section mt-8 flex flex-col md:flex-row w-full items-start justify-start">
        <Filters />
        <ShopProducts/>
        </div>
        <Packages/>
        <Instagram/>
        <Subscribe/>
        <Footer/>
      </div>
    </section>
  );
};

export default ShopHome;
