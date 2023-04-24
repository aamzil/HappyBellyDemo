import React from "react";

function ServicesCard({ img, title, subtitle }) {
  return (
    <div>
      <div className="border-2 border-black rounded-xl p-3 shadow-lg ease-in duration-300 hover:-translate-y-1">
        <div className="flex justify-center">
          <img src={img} alt="" />
        </div>
        <div className="pt-3">
          <h1 className="text-3xl font-poppins font-bold">{title}</h1>
          <p className=" text-black font-sfpro pt-2">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
