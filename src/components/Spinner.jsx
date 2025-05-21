import { Spinner } from "flowbite-react";
import React from "react";

const SpinnerComponent = () => {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 bg-black opacity-20 flex items-center justify-center">
      <Spinner aria-label="Default status example" />;
    </div>
  );
};

const SpinnerLoader = () => {
  return (
      <Spinner aria-label="Default status example" />
  );
};

export { SpinnerComponent, SpinnerLoader };
