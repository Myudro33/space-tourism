import React from "react";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  return (
    <div className="dp:-translate-y-[27rem] w-full h-80 xs:-translate-y-[40rem] md:-translate-y-[50rem]  flex xs:flex-col xs:items-center dp:flex-row dp:justify-around">
      <div className="dp:w-96 xs:w-[90%] md:w-[70%] dp:text-start xs:text-center h-full text-[#D0D6F9] ">
        <h1 className="md:text-2xl xs:text-xl dp:my-0 xs:my-3">SO, YOU WANT TO TRAVEL TO</h1>
        <h1 className="md:text-9xl xs:text-8xl">SPACE</h1>
        <p className="dp:w-full xs:w-[90%] md:w-[80%] m-auto dp:my-0 xs:my-3">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="dp:w-96 xs:w-[70%] h-full flex xs:justify-center items-center dp:items-end">
        <div className="w-64 h-64 rounded-full hover:bg-[#D0D6F950] flex justify-center items-center">
          <div className="w-44 h-44 rounded-full bg-[#FFFFFF] flex justify-center items-center">
            <Link to={"/destinations"} className="text-[#0B0D17] text-xl">
              EXPLORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
