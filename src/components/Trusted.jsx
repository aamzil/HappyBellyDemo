import React from "react";

function Trusted() {
  return (
    <div className="block pt-10 px-10 ">
      <div className="flex justify-center">
        <h1 className="font-poppins text-center font-semibold">
          Trusted by more than 100 restaurants worldwide
        </h1>
      </div>
      <div className="grid grid-cols-1 pt-5 font-sfpro text-lg text-neutral-500 font-semibold space-y-2 text-center md:flex md:justify-around md:text-xl">
        <h2>Mcdonalds</h2>
        <h2>KFC</h2>
        <h2>Starbucks</h2>
        <h2>Burger King</h2>
        <h2>Domino's</h2>
      </div>
    </div>
  );
}

export default Trusted;
