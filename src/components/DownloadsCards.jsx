import React from "react";

function DownloadsCards({ icon, number, title, subtitle }) {
  return (
    <div>
      <div className="block">
        <div className="">{icon}</div>

        <div className="font-sfpro pt-4">
          <h1 className="font-poppins text-5xl font-bold">{number}</h1>
          <h2 className="font-bold pt-4 text-xl">{title}</h2>
          <p className="text-zinc-500 pt-1">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default DownloadsCards;
