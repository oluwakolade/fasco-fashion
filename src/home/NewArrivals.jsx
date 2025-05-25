import React, { useState } from "react";

const NewArrivals = () => {
  const [selectedCategory, setSelectedCategory] = useState("mensFashion");

  const handleCLick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className="section flex flex-col items-center md:mt-20">
      <div>
        <h2 className="font-volkhov text-2xl text-grey-500 mb-16">
          New Arrivals{" "}
        </h2>
        <p></p>
      </div>
      {/* butttons */}
      <div className="  flex flex-wrap items-center justify-center object-center md:flex  md:flex-row md:px-20 gap-2 md:gap-12 mb-4 md:mb-6">
        {Object.keys(products).map((category) => (
          <div key={category}>
          <NewArrivalsBtn
            onClick={() => handleCLick(category)}
            label={category
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (str) => str.toUpperCase())}
            isActive={selectedCategory === category}
          />
          </div>
        ))}
        
      </div>

      {/* products */}
      <div className="w-full grid grid-cols-2 md:grid-cols-3  items-center justify-center gap-2 md:gap-6 px-8 md:px-36 transition-all duration-500 ease-in-out ">
        {products?.[selectedCategory]?.map((item, index) => (
          <NewArrivalsCard
            key={index}
            img={item.image}
            product={item.name}
            price={item.price}
            reviews={item.reviews}
            status={item.status.text}
            color={item.status.color}
          />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;

const NewArrivalsBtn = ({ isActive, label, onClick, }) => {
  return (
    <div
      onClick={onClick}
      className={`py-3 cursor-pointer rounded-lg w-28 md:w-36 text-center shadow-md ${
        isActive ? "bg-black" : " bg-grey-50 "
      } `}
    >
      <p
        className={`font-poppins text-[8px] md:text-xs ${
          isActive ? "text-white" : "text-grey-300"
        }`}
      >
        {label}
      </p>
    </div>
  );
};

const NewArrivalsCard = ({
  key,
  img,
  product,
  price,
  reviews,
  status,
  color,
}) => {
  return (
    <div key={key} className=" w-[150px] h-[230px] md:w-[260px] md:h-[300px] bg-white rounded-xl shadow-md p-3 flex flex-col justify-between  transition-all duration-500 ease-in-out ">
        <img
          src={img}
          alt={product}
          className=" h-32 md:h-48 w-full object-cover rounded-lg mb-2 md:mb-4"
        />
      <div>
        <div className="flex justify-between items-center mb-1">
          <h5 className="font-poppins text-[9px] md:text-sm text-grey-500">{product}</h5>
          <img src="/img/stars.png" alt="stars" className=" w-9 md:w-16" />
        </div>
        <p className="font-poppins text-[7px] text-grey-500 ">{reviews}</p>
        <div className="flex flex-row items-center justify-between pt-px ">
          <p className="font-poppins text-[9px] md:text-sm font-semibold text-grey-500">
            {price}
          </p>
          <p className={`font-poppins text-[9px] md:text-xs text-${color}-400`}>{status}</p>
        </div>
      </div>
    </div>
  );
};

const products = {
  mensFashion: [
    {
      name: "Classic Denim Jacket",
      price: "$79.99",
      reviews: "(2.1k) customer reviews",
      status: { text: "In Stock", color: "green" },
      image: "/img/products/men.jpg",
    },
    {
      name: "Slim Fit Chinos",
      price: "$49.99",
      reviews: "(1.8k) customer reviews",
      status: { text: "Almost Sold Out", color: "yellow" },
      image: "/img/products/men2.jpg",
    },
    {
      name: "Cotton Crewneck Tee",
      price: "$19.99",
      reviews: "(3.4k) customer reviews",
      status: { text: "Sold Out", color: "red" },
      image: "/img/products/men3.jpg",
    },
    {
      name: "Leather Bomber Jacket",
      price: "$199.99",
      reviews: "(980) customer reviews",
      status: { text: "In Stock", color: "green" },
      image: "/img/products/men4.jpg",
    },
    {
      name: "Wool Overcoat",
      price: "$159.99",
      reviews: "(720) customer reviews",
      status: { text: "Almost Sold Out", color: "yellow" },
      image: "/img/products/men5.jpg",
    },
    {
      name: "Casual Sneakers",
      price: "$89.99",
      reviews: "(2.7k) customer reviews",
      status: { text: "In Stock", color: "green" },
      image: "/img/products/men6.jpg",
    },
  ],

  womensFashion: [
    {
      name: "Boho Maxi Dress",
      price: "$89.99",
      reviews: "(3.1k) customer reviews",
      status: { text: "In Stock", color: "green" },
      image: "/img/products/w.png",
    },
    {
      name: "High Waist Jeans",
      price: "$59.99",
      reviews: "(2.6k) customer reviews",
      status: { text: "Almost Sold Out", color: "yellow" },
      image: "/img/products/w2.png",
    },
    {
      name: "Silk Blouse",
      price: "$79.99",
      reviews: "(1.2k) customer reviews",
      status: { text: "Sold Out", color: "red" },
      image: "/img/products/w3.png",
    },
    {
      name: "Faux Leather Skirt",
      price: "$49.99",
      reviews: "(1.9k) customer reviews",
      status: { text: "In Stock", color: "green" },
      image: "/img/products/w4.png",
    },
    {
      name: "Summer Romper",
      price: "$39.99",
      reviews: "(1.1k) customer reviews",
      status: { text: "Almost Sold Out", color: "yellow" },
      image: "/img/products/w5.png",
    },
    {
      name: "Ankle Boots",
      price: "$109.99",
      reviews: "(2.3k) customer reviews",
      status: { text: "In Stock", color: "green" },
      image: "/img/products/w6.png",
    },
  ],

  mensAccessories: [
    {
      name: "Leather Belt",
      price: "$34.99",
      reviews: "(900) customer reviews",
      status: { text: "In Stock", color: "green" },
      image: "/img/products/menb.jpg",
    },
    {
      name: "Classic Wristwatch",
      price: "$129.99",
      reviews: "(2.2k) customer reviews",
      status: { text: "Almost Sold Out", color: "yellow" },
      image: "/img/products/menb2.jpg",
    },
    {
      name: "Sunglasses",
      price: "$59.99",
      reviews: "(1.5k) customer reviews",
      status: { text: "In Stock", color: "green" },
      image: "/img/products/menb3.jpg",
    },
    {
      name: "Wool Scarf",
      price: "$29.99",
      reviews: "(580) customer reviews",
      status: { text: "Sold Out", color: "red" },
      image: "/img/products/menb4.jpg",
    },
    {
      name: "Leather Wallet",
      price: "$49.99",
      reviews: "(1.9k) customer reviews",
      status: { text: "Almost Sold Out", color: "yellow" },
      image: "/img/products/menb5.jpg",
    },
    {
      name: "Silver Cufflinks",
      price: "$79.99",
      reviews: "(400) customer reviews",
      status: { text: "In Stock", color: "green" },
      image: "/img/products/menb6.jpg",
    },
  ],

  womensAccessories: [
    {
      name: "Gold Hoop Earrings",
      price: "$44.99",
      reviews: "(1.3k) customer reviews",
      status: { text: "In Stock", color: "green" },
      image: "/img/products/wb.jpg",
    },
    {
      name: "Silk Scarf",
      price: "$39.99",
      reviews: "(890) customer reviews",
      status: { text: "Almost Sold Out", color: "yellow" },
      image: "/img/products/wb2.jpg",
    },
    {
      name: "Luxury Handbag",
      price: "$249.99",
      reviews: "(2.5k) customer reviews",
      status: { text: "Sold Out", color: "red" },
      image: "/img/products/wb3.jpg",
    },
    {
      name: "Fashion Sunglasses",
      price: "$69.99",
      reviews: "(1.7k) customer reviews",
      status: { text: "In Stock", color: "green" },
      image: "/img/products/wb5.jpg",
    },
    {
      name: "Charm Bracelet",
      price: "$59.99",
      reviews: "(980) customer reviews",
      status: { text: "Almost Sold Out", color: "yellow" },
      image: "/img/products/wb4.jpg",
    },
    {
      name: "Pearl Necklace",
      price: "$149.99",
      reviews: "(1.2k) customer reviews",
      status: { text: "In Stock", color: "green" },
      image: "/img/products/wb5.jpg",
    },
  ],

  discountDeals: [
    {
      name: "Graphic Tee Bundle (3 Pack)",
      price: "$29.99",
      reviews: "(3.2k) customer reviews",
      status: { text: "In Stock", color: "green" },
      image: "/img/products/wb.jpg",
    },
    {
      name: "Winter Beanie Set",
      price: "$19.99",
      reviews: "(1.1k) customer reviews",
      status: { text: "Almost Sold Out", color: "yellow" },
      image: "/img/products/men.jpg",
    },
    {
      name: "Men's Dress Shoes",
      price: "$59.99",
      reviews: "(1.6k) customer reviews",
      status: { text: "Sold Out", color: "red" },
      image: "/img/products/menb4.jpg",
    },
    {
      name: "Women's Flats",
      price: "$49.99",
      reviews: "(1.9k) customer reviews",
      status: { text: "In Stock", color: "green" },
      image: "/img/products/w4.png",
    },
    {
      name: "Backpack Sale",
      price: "$39.99",
      reviews: "(2.4k) customer reviews",
      status: { text: "Almost Sold Out", color: "yellow" },
      image: "/img/products/w.png",
    },
    {
      name: "Running Sneakers",
      price: "$69.99",
      reviews: "(2.8k) customer reviews",
      status: { text: "In Stock", color: "green" },
      image: "/img/products/wb5.jpg",
    },
  ],
};
