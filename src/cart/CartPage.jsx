import NavBar from "../components/NavBar";
import Subscribe from "../home/Subscribe";
import Footer from "../components/Footer";
import { ButtonOne } from "../components/Button";
import { useCart } from "./CartContext";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotal } = useCart();

  const navigate = useNavigate();
  const handleCheckout= () => {
 
        navigate("/checkout");
    
  };

  return (
    <section className="section">
      <NavBar />

      <div className="flex flex-col items-center justify-center py-8 gap-2 md:gap-4">
        <h2 className="font-volkhov text-lg md:text-2xl"> Shopping Cart</h2>
        <p className="flex flex-row items-center justify-center gap-4 font-poppins text-sm md:text-base">
          Home{" "}
          <span>
            <FaChevronRight />{" "}
          </span>{" "}
          Your Shopping Cart
        </p>
      </div>

      <div className="flex flex-col">
        <h4 className="font-volkhov mb-4 text-black">Your Products</h4>
        {/* cart slide scrollable*/}
        <div className="flex h-[500px] flex-col overflow-y-auto gap-4 py-4">{
          cartItems.map((item) => (
            <CartCard
              key={item.id}
              {...item}
              onRemove={() => updateQuantity(item.id, -1)}
              onAdd={() => updateQuantity(item.id, 1)}
              remove={() => removeFromCart(item.id)}
              quantity={item.quantity}
            />
          ))
          }</div>
      </div>
      {/* not scroolable */}
      <div className="flex flex-col w-full md:w-[40%] mb-8">
        <hr className="w-full border-t border-t-gray-400 " />
        <div className="flex flex-row py-4 gap-4  items-center justify-between">
          <p className="font-volkhov text-black text-sm">Subtotal</p>
          <p className="font-volkhov text-black text-sm">${getTotal().toFixed(2)}</p>
        </div>
        <ButtonOne text={"Checkout"} 
        onClick={handleCheckout}
        />
      </div>

      <Subscribe />
      <Footer />
    </section>
  );
};

export default CartPage;

const CartCard = ({
  img,
  name,
  color,
  size,
  price,
  remove,
  onRemove,
  quantity,
  onAdd,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-1/2 md:w-full max-w-xl gap-4 p-4 border border-gray-200 rounded-2xl shadow-sm transition hover:shadow-md bg-white">
      
      {/* Remove Button */}
      <button
        onClick={remove}
        className=" cursor-pointer self-start md:self-center text-red-500 hover:text-red-700 font-bold text-lg"
        title="Remove item"
      >
        ×
      </button>

      {/* Product Image */}
      <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-grow text-left">
        <h3 className="font-volkhov text-base text-black">{name}</h3>
        <p className="font-poppins text-xs text-gray-500">{`Color: ${color}`}</p>
        <p className="font-poppins text-xs text-gray-500">{`Size: ${size}`}</p>
        <p className="font-poppins text-sm font-semibold text-black mt-1">{`$${price}`}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3 border border-gray-300 rounded-md px-3 py-1">
        <button
          onClick={onRemove}
          className="text-lg font-bold text-gray-700 hover:text-black cursor-pointer"
        >
          −
        </button>
        <span className="font-poppins text-sm">{quantity}</span>
        <button
          onClick={onAdd}
          className="text-lg font-bold text-gray-700 hover:text-black cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );
};


// const CartCard = ({
//   img,
//   name,
//   color,
//   size,
//   price,
//   remove,
//   onRemove,
//   quantity,
//   onAdd,
// }) => {
//   return (
//     <div className="flex flex-col md:flex-row  md:justify-between items-center min-w-[250px] max-w-[300px] flex-shrink-0">
//       <div
//         onClick={remove}
//         className="flex-1 md:flex-3 border border-gray-400 p-3 rounded-md w-8"
//       >
//         <p>X</p>
//       </div>

//       <div className="flex-3 md:flex-2 w-1/4 flex flex-row items-center border border-gray-200 rounded-md p-2 ml-2 gap-2 font-poppins text-black font-xs ">
//         <span onClick={onRemove}>-</span>
//         <p>{quantity}</p>
//         <span onClick={onAdd}>+</span>
//       </div>

//       <div className="flex flex-row w-full p-2 flex-2 md:flex-1">
//         <img src={img} alt={name} className="w-1/4" />
//         <div className="flex flex-col">
//           <h3 className="font-volkhov text-black text-sm">{name}</h3>
//           <p className="font-poppins text-xs text-gray-400">{`Color: ${color}`}</p>
//           <p className="font-poppins text-xs text-gray-400">{`Size: ${size}`}</p>
//           <p className="font-poppins text-xs text-black">{`$${price}`}</p>
//         </div>
//       </div>
//     </div>
//   );
// };
