import React from "react";

function Hero() {
  return (
    <div className="block justify-between px-10 lg:h-[100vh] lg:flex pt-32">
      <div className="lg:w-[50%] lg:pt-14">
        <h2 className="text-lg font-poppins font-bold text-orange-600">
          HAPPY BELLY, EAT FREELY.
        </h2>
        <h1 className="uppercase font-semibold text-4xl font-sfpro pt-2 md:text-6xl ">
          Order food to your door now.
        </h1>
        <p className="text-lg font-sfpro font-normal text-zinc-500 pt-2 pb-3 md:text-xl">
          Order your favorite food at any time, our heroes will deliver it right
          to where you are.{" "}
        </p>
        <button className="bg-orange-600 font-sfpro text-neutral-100 px-6 py-3 rounded-3xl hover:bg-opacity-90">
          Download App
        </button>
      </div>

      <div className="pt-10  lg:pt-0  ">
        <img
          src="https://doodleipsum.com/700/outline?i=6af2fcb146f3b99cfa1371242b2eee55"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
