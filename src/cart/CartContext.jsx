// import { useState } from "react";
// import { createContext, useContext } from "react";

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({children}) => {
//     const [cartItems,setCartItems] = useState ([]);

//     const addToCart = (item) => {
//         setCartItems((prev) => [...prev, item]);
//       };

//       const removeFromCart = (id) => {
//         setCartItems((prev) => prev.filter((item) => item.id !== id));
//       };

//       const updateQuantity = (id, amount) => {
//         setCartItems((prev) =>
//           prev.map((item) =>
//             item.id === id ? { ...item, quantity: item.quantity + amount } : item
//           )
//         );
//       };

//       const getTotal = () =>
//         cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//       return (
//         <CartContext.Provider
//           value={{ cartItems, addToCart, removeFromCart, updateQuantity, getTotal }}
//         >
//           {children}
//         </CartContext.Provider>
//       );

// }

// CartContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Load from localStorage on first render
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Sync cartItems to localStorage on every change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      // Item already in cart, increase quantity
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += 1;
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + change, 1) }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateQuantity, removeFromCart, getTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
