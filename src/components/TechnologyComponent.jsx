import React, { useState } from "react";
import data from "../data.json";
import rocket1 from "../assets/technology/image-launch-vehicle-landscape.jpg";
import rocket2 from "../assets/technology/image-spaceport-landscape.jpg";
import rocket3 from "../assets/technology/image-space-capsule-landscape.jpg";
import rocket1d from "../assets/technology/image-launch-vehicle-portrait.jpg";
import rocket2d from "../assets/technology/image-spaceport-portrait.jpg";
import rocket3d from "../assets/technology/image-space-capsule-portrait.jpg";

const TechnologyComponent = () => {
  const [index, setindex] = useState(0);
  const filteredData = data.technology;
  return (
    <div className="z-10 text-[white] w-full xs:h-screen dp:h-[29rem] my-5 flex justify-end xs:items-center dp:items-end">
      <div className="dp:w-[90%] xs:w-full h-full flex dp:flex-row xs:flex-col dp:justify-between items-center">
        <img
          className="xs:flex dp:hidden my-10 w-full"
          src={
            (index === 0 && rocket1) ||
            (index === 1 && rocket2) ||
            (index === 2 && rocket3)
          }
          alt=""
        />
        <div className="flex xs:flex-row dp:my-0 xs:my-5 dp:flex-col xs:w-64 dp:h-64 justify-between">
          <button
            onClick={() => setindex(0)}
            className={`md:w-16 md:h-16 xs:w-14 xs:h-14 hover:bg-[white] ${
              index === 0 ? "bg-[white] text-[black] border-none" : ""
            } hover:text-[black] hover:border-none text-xl border rounded-full`}
          >
            1
          </button>
          <button
            onClick={() => setindex(1)}
            className={`md:w-16 md:h-16 xs:w-14 xs:h-14 hover:bg-[white] ${
              index === 1 ? "bg-[white] text-[black] border-none" : ""
            } hover:text-[black] hover:border-none text-xl border rounded-full`}
          >
            2
          </button>
          <button
            onClick={() => setindex(2)}
            className={`md:w-16 md:h-16 xs:w-14 xs:h-14 hover:bg-[white] ${
              index === 2 ? "bg-[white] text-[black] border-none" : ""
            } hover:text-[black] hover:border-none text-xl border rounded-full`}
          >
            3
          </button>
        </div>
        <div className="dp:w-[26rem] md:w-[65%] xs:w-[90%] dp:h-56 xs:h-96 flex flex-col dp:items-start xs:items-center">
          <h1 className="my-2 text-[#D0D6F9]">THE TERMINOLOGY...</h1>
          <h1 className="uppercase my-2 xs:text-3xl md:text-5xl">
            {filteredData[index].name}
          </h1>
          <p className="dp:w-[90%] xs:w-full dp:text-start xs:text-center text-[#D0D6F9]">
            {filteredData[index].description}
          </p>
        </div>
        <img
          className="h-full w-[35rem] xs:hidden dp:flex "
          src={
            (index === 0 && rocket1d) ||
            (index === 1 && rocket2d) ||
            (index === 2 && rocket3d)
          }
          alt="img"
        />
      </div>
    </div>
  );
};

export default TechnologyComponent;
