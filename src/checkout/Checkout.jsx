import React from "react";
import NavBar from "../components/NavBar";
import Subscribe from "../home/Subscribe";
import {Textfield2} from "../components/Textfield";
import { ButtonOne } from "../components/Button";
import Footer from "../components/Footer";

const Checkout = () => {
  return (
    <section className="section">
      <NavBar />

      <h2 className="text-black mt-9 mb-4 font-volkhov text-lg md:text-2xl">
        Checkout
      </h2>
      <hr className="border-t-gray-400 pt-8" />

      <div className="flex flex-col md:flex-row items-start gap-4 justify-evenly">
        <div className="w-full">
          <h4 className="checkout-h">Contact</h4>
          <Textfield2
            inputType="email"
            inputName="email"
            label="Email Address"
          />

          <h4 className="checkout-h">Delivery</h4>
          <Textfield2
            inputType="text"
            inputName="country"
            label="Country"
          />

          <div className="flex flex-row itemm-start  gap-4">
            <Textfield2
              inputType="text"
              inputName="name"
              label="First Name"
            />
            <Textfield2
              inputType="text"
              inputName="name"
              label="Last Name"
            />
          </div>

          <Textfield2
            inputType="text"
            inputName="address"
            label="Address"
          />

          <div className="flex flex-row itemm-center gap-4">
            <Textfield2
              inputType="text"
              inputName="city"
              label="City"
            />
            <Textfield2
              inputType="text"
              inputName="postal"
              label="Postal Code"
            />
          </div>
        </div>

        <div className="w-full">
          <h4 className="checkout-h">Payment</h4>
          <Textfield2
            inputType="number"
            inputName="card"
            label="Credit Card"
          />

            <Textfield2
              inputType="number"
              inputName="card"
              label="Credit Number"
            />

            <div className="flex flex-row itemm-center gap-4">
              <Textfield2
                inputType="number"
                inputName="exp"
                label="EXP"
              />
              <Textfield2
                inputType="number"
                inputName="cvv"
                label="CVV"
              />
            </div>

            <Textfield2
              inputType="text"
              inputName="holder"
              label="Card Holder Name"
            />
        <ButtonOne text="Pay Now" className="mt-4 md:mt-10" />

        </div>

      </div>

      <Subscribe />
      <Footer />
    </section>
  );
};

export default Checkout;
