import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { FaStar } from "react-icons/fa6";
import NavBar from "../components/NavBar";
import { sizes } from "../data/filters";
import Packages from "../home/Packages";
import Deals from "../components/Deals";
import Subscribe from "../home/Subscribe";
import Footer from "../components/Footer";
import { ButtonOne, ButtonTwo } from "../components/Button";
import { useCart } from "../cart/CartContext";
import AppToast from "../components/AppToast";

const ProductPage = () => {
  const { name } = useParams();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const product = products.find((p) => p.name === name);
  const [toast, setToast] = useState(false);
    const [cartToast, setCartToast] = useState(false);


  const handleCart = () => {
    if (!selectedSize || !selectedColor) {
          setCartToast(true);
      // alert("Please select both a size and color.");
      return;
    }
    const cartItem = {
      id: product.name + selectedSize + selectedColor, // unique
      name: product.name,
      img: product.img,
      price: product.price,
      color: selectedColor,
      size: selectedSize,
    };

    addToCart(cartItem);
    setToast(true);
    // alert("");
  };

  const sizeFilters = sizes.map((size, i) => (
    <div
      key={i}
      onClick={() => setSelectedSize(size)}
      className={`filter-body px-4 py-2 border border-black rounded-md cursor-pointer transition-all duration-200 ${
        selectedSize === size ? "bg-black text-white" : "hover:bg-gray-200"
      }`}
    >
      {size}
    </div>
  ));

  const colorFilters = product.colors.map((color, i) => (
    // <div
    //   key={i}
    //   onClick={() => setSelectedColor(color)}
    //   className={`w-6 h-6 rounded-full border border-black flex items-center justify-center cursor-pointer ${
    //     selectedColor === color ? "ring-2 ring-black" : ""
    //   }`}
    // >
    //   <div className={`w-4 h-4 rounded-full bg-${color}`}></div>
    // </div>
    <div
      key={i}
      onClick={() => setSelectedColor(color)}
      className={`w-6 h-6 rounded-full border border-black flex items-center justify-center cursor-pointer ${
        selectedColor === color ? "ring-2 ring-black" : ""
      }`}
    >
      <div
        style={{ backgroundColor: color }}
        className="w-4 h-4 rounded-full"
      ></div>
    </div>
  ));

  return (
    <section>
      <NavBar />

      <div className="pt-12 section">
        {toast && (
          <div className="fixed top-4 right-4 z-20">
            <AppToast message="Added to cart!" />
          </div>
        )}
           {cartToast && (
          <div className="fixed top-4 right-4 z-20">
            <AppToast message="Please select both a size and color" />
          </div>
        )}
        <div className="w-full flex flex-col md:flex-row">
          <div className=" w-full md:w-1/2">
            <img
              src={product.img}
              alt={product.name}
              className="w-screen h-[400px] object-contain"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col">
            <img src="/img/logo.svg" alt="logo" className="w-16 py-8" />
            {/* name */}
            <div className="flex flex-row items-start justify-between">
              <div className="flex flex-col items-start">
                <h2 className="font-volkhov font-black text-xs md:text-base py-4">
                  {product.name}
                </h2>
                <img src="/img/stars.png" alt="stars" />
              </div>
              <FaStar />
            </div>
            {/* details */}
            <h2 className="py-2 font-volkhov font-black text-xs md:text-base">
              {`$${product.price}`}{" "}
            </h2>
            {/* Size */}
            <div className="mb-2">
              <h3 className="filter mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">{sizeFilters}</div>
            </div>
            {/* colors */}
            <h3 className="filter mb-2">Colors</h3>
            <div className="pb-8 flex flex-row items-start justify-start gap-4 mt-4">
              {colorFilters}
            </div>

            {/* quantity */}
            {/* <QuantityBtn
              onAdd={handleAdd}
              onRemove={handleRemove}
              onClick={handleCart}
              quantity={quantity}
            /> */}

            <ButtonOne
              onClick={handleCart}
              text={"Add to Cart"}
              classname="border-black"
            />

            {/* delivery */}
            <div className="flex flex-col py-8">
              <div className="flex flex-row items-center gap-2">
                <img src="/icons/truck.svg" alt="truck icon" />
                <p className="font-volkhov font-black text-[9px]">
                  Estimated Delivery
                </p>
                <p className="font-poppins font-black text-[9px]">May 20-23</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <img src="/icons/box.svg" alt="box icon" />
                <p className="font-volkhov font-black text-[9px]">
                  Free shipping & returns
                </p>
                <p className="font-poppins font-black text-[9px]">
                  on all orders above $75
                </p>
              </div>
            </div>
            {/* payment */}
            <img
              src="/img/options.png"
              alt="payment options"
              className=" w-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* others */}
      <Packages />
      <Deals />
      <Subscribe />
      <Footer />
    </section>
  );
};

export default ProductPage;

const QuantityBtn = ({ onClick }) => {
  return (
    <div className="flex flex-col items-start">
      <div className="flex flex-row w-full ">
        <div
          onClick={onClick}
          className="w-full  font-volkhov text-xs flex items-center p-2 border border-black rounded-md"
        >
          <p>Add to Cart</p>
        </div>
      </div>
    </div>
  );
};

// product.colors?.map((color, i) => (
//   <div
//     key={i}
//     className={`w-10 h-10 rounded-full border border-black`}
//   >
//     <div className={`w-6 h-6 rounded-full bg-${color}`}></div>
//   </div>
// ))
