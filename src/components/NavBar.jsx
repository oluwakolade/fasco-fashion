import React, { useState } from "react";
import {
  FaCross,
  FaHamburger,
  FaSearch,
  FaShoppingBag,
  FaStar,
} from "react-icons/fa";
import { FaCartShopping, FaPerson } from "react-icons/fa6";
import { useLocation, useNavigate, Link } from "react-router-dom";

const navLinks = ["Home", "Shop", "Subscribe"];

const NavBar = () => {
  // const [activeLink, setActiveLink] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const activeLink = location.pathname.slice(1);

  // const handleNavigation = (link) => {
  //   const lowerCasePath = link.toLowerCase();
  //   navigate(`/${lowerCasePath}`);
  //   setIsOpen(false);
  // };

  const handleNavigation = (link) => {
    const lowerCasePath = link.toLowerCase();

    if (lowerCasePath === "subscribe") {
      const el = document.getElementById("subscribe");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        // If we're not on the homepage, go there *without* hash
        navigate("/");
        // Scroll later (give the component time to load)
        setTimeout(() => {
          const el = document.getElementById("subscribe");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    } else {
      navigate(`/${lowerCasePath}`);
    }

    setIsOpen(false);
  };

  return (
    <div className=" section pt-4 md:pt-8 md:px-8">
      <nav className=" flex flex-row items-center justify-between">
        {/* logo */}
        <img
          src="/img/logo.svg"
          alt="logo"
          className="w-20 cursor-pointer"
          onClick={() => handleNavigation("home")}
        />
        <div>
          {/* links */}
          <div className=" hidden  md:flex flex-row items-center gap-12">
            {navLinks.map((link, index) => {
              const lowerLink = link.toLowerCase();
              return (
                <button
                  key={index}
                  onClick={() => handleNavigation(link)}
                  className={`font-poppins text-base cursor-pointer border-b-2 transition-all duration-300 ${
                    activeLink === lowerLink
                      ? "border-b-grey-500"
                      : "border-b-transparent text-grey-500 hover:border-b-grey-400"
                  }`}
                >
                  {link}
                </button>
              );
            })}
          </div>
        </div>

        {/* icons */}

        <div className="hidden md:flex flex-row gap-6 text-xl text-grey-500">
          <div
            onClick={() => handleNavigation("cart")}
            className={`cursor-pointer p-2 rounded-md border transition-all ${
              activeLink === "cart"
                ? "border-black"
                : "border-transparent hover:border-gray-400"
            }`}
          >
            <FaCartShopping />
          </div>
        </div>

        {/* mobile */}

        {!isOpen && (
          <div className="flex flex-row gap-2 md:hidden">
            <div
              onClick={() => handleNavigation("cart")}
              className="w-9 flex cursor-pointer items-center justify-center p-2 border border-gray-400 rounded-md"
            >
              <FaCartShopping size={12} />
            </div>
            <div
              onClick={() => setIsOpen(true)}
              className="w-9 cursor-pointer flex items-center border justify-center p-2 border-gray-400 rounded-md"
            >
              <FaHamburger size={12} />
            </div>
          </div>
        )}

        {isOpen && (
          <div className="nav-links-mobile  fixed  top-0 right-0 z-40 pr-8">
            <div className="flex flex-col items-start gap-8">
              <button
                onClick={() => setIsOpen(false)}
                className=" w-full pr-0  mr-0 flex flex-col justify-end items-end self-end font-poppins font-black text-base"
              >
                X{" "}
              </button>
              {navLinks.map((link, index) => {
                const lowerLink = link.toLowerCase();
                return (
                  <button
                    key={index}
                    onClick={() => handleNavigation(link)}
                    className={`font-poppins text-base cursor-pointer border-b-2 transition-all duration-300 ${
                      activeLink === lowerLink
                        ? "border-b-grey-500"
                        : "border-b-transparent text-grey-500 hover:border-b-grey-400"
                    }`}
                  >
                    {link}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
