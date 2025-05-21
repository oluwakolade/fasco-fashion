import React from "react";
import { products } from "../data/products";
import { useNavigate } from "react-router-dom";


const ShopProducts = () => {

  const navigate = useNavigate();

  const handleClick = (name) => {
    navigate(`/products/${name}`);
  };

  return (
    <section className="w-3/4">
      <div className="flex flex-col items-start justify-center">
        <div className="flex flex-row items-center justify-between">
          <h4 className="font-volkhov mb-4 text-black">Best Selling</h4>
          <div className="flex flex-col items-center justify-start">
            {/* buttons */}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center md:justify-start">
          {/* products */}
          {products.map((product) => (
            <ShopProductsCard
            key={product.name}
              img={product.img}
              product={product.name}
              price={product.price}
              colors={product.colors}
              onClick={()=>handleClick(product.name)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopProducts;

const ShopProductsCard = ({ key, img, product, price, colors, isSelected , onClick }) => {
  return (
    <div 
key={key}
    className=" cursor-pointer w-[160px] md:w-[200px] h-[300px] flex flex-col items-start gap-2">
      <img 
      onClick={onClick}
      src={img} alt={product} className="w-full h-48" />
      <h4 className="text-sm font-semibold font-volkhov text-grey-500">
        {product}
      </h4>
      <p className="text-sm font-normal font-poppins text-grey-500">
        {`$${price}`}
      </p>
      <div className="flex flex-row items-start justify-start">
        {colors?.map((color) => (
          <div
            className={`w-10 h-10 rounded-full border ${
              isSelected ? "border-black" : "border-transparent"
            }`}
          >
            <div className={`bg-${color} w-4 h-4 rounded-full `}></div>
          </div>
        ))}
      </div>
    </div>
  );
};
