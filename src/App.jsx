import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./auth/SignUp";
import Home from "./home/Home";
import Login from "./auth/Login";
import ShopHome from "./shop/ShopHome";
import ProductPage from "./products/ProductPage";
import { CartProvider } from "./cart/CartContext";
import CartPage from "./cart/CartPage";
import ScrollToHashElement from "./components/Scroll";
import Checkout from "./checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <main className="relative min-h-screen w-screen overflow-x-hidden">
          <ScrollToHashElement />
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="shop" element={<ShopHome />} />
            <Route path="/products/:name" element={<ProductPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
