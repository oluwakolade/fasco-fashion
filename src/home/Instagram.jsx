import React from "react";

const Instagram = () => {
  return (
    <section className="flex flex-col items-center justify-center mb-20">
      <div className="flex flex-col pb-12 md:w-1/2 items-center justify-center">
        <h2 className="font-volkhov text-xl md:text-2xl text-grey-500 pb-4">Follow Us on Instagram</h2>
        <p className="text-xs md:text-sm font-poppins text-grey-300 pb-4 px-8 text-center">
          Follow us to get recent updates on new products, fresh deals and
          promos.You can also browse through our feed for style inspirations{" "}
        </p>
      </div>

      <div className="w-screen">
        <img src="/img/ig/ig.png" alt="picture slide" className="w-full" />
      </div>
    </section>
  );
};

export default Instagram;
