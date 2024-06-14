import React from "react";

const HomeBanner = () => {
  return (
    <div className="banner">
      <div className="flex flex-col flex-wrap justify-center items-center text-white bg-black opacity-80  gap-10 h-2/5 text-center pt-5">
        <h1 className="text-5xl font-extrabold  ">
          Save big with our cheap car rental!
        </h1>
        <h2 className="text-2xl font-bold pb-5">
          Top Airports. Local Suppliers.{" "}
          <span className="text-orange-700">24/7</span> Support.
        </h2>
      </div>
    </div>
  );
};

export default HomeBanner;
