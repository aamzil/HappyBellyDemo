import React from "react";
import ServicesCard from "./ServicesCard";

function Services() {
  return (
    <div className="px-10  py-32 ">
      <div className="text-center max-w-lg ml-auto mr-auto">
        <h1 className="text-4xl font-poppins font-bold lg:text-5xl ">
          Services
        </h1>
        <p className="text-xl text-zinc-500 font-sfpro pt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 pt-10 sm:grid-cols-2 lg:grid-cols-4   ">
        <ServicesCard
          img="https://doodleipsum.com/299/avatar-2?i=b4253a17437663180b54953f9360f43c"
          title="Friendly App"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        />
        <ServicesCard
          img="https://doodleipsum.com/300/avatar-2?i=b6e8132afe703c04288ddce533f224df"
          title="Fast Delivery"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        />
        <ServicesCard
          img="https://doodleipsum.com/300/avatar-2?i=aea46cbcaac8b9152022a23280ef4f3e"
          title="Hot Food"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        />
        <ServicesCard
          img="https://doodleipsum.com/300/avatar-2?i=2c732bfc345f7d7938347d0514a0e2ec"
          title="Happy Belly"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        />
      </div>
    </div>
  );
}

export default Services;
