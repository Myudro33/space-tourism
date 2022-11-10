import React, { useState } from "react";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";
import data from "../data.json";

const DestinationComponent = () => {
  const [planet, setplanet] = useState("Moon");
  const filteredData = data.destinations.filter((item) => item.name === planet);
  return (
    <div className="z-10 text-[white] dp:w-[75%] xs:w-[95%] xs:h-screen dp:h-[27rem] my-5 flex dp:flex-row xs:flex-col justify-between xs:items-center dp:items-end">
      <img
        className="xs:w-[11rem] xs:h-[11rem] md:w-[19rem] md:h-[19rem] dp:w-[25rem] dp:h-[25rem]"
        src={
          (planet === "Moon" && moon) ||
          (planet === "Mars" && mars) ||
          (planet === "Europa" && europa) ||
          (planet === "Titan" && titan)
        }
        alt="img"
      />
      <div className="dp:w-[46%] xs:w-[85%] h-full flex flex-col xs:justify-center dp:justify-start xs:items-center dp:items-start ">
        <div className="flex dp:justify-start xs:justify-center dp:my-0 xs:my-5">
          <p
            onClick={() => setplanet("Moon")}
            className={`hover:border-b mr-5 text-[#D0D6F9]  ${
              planet === "Moon" ? "border-b" : ""
            }   `}
          >
            MOON
          </p>
          <p
            onClick={() => setplanet("Mars")}
            className={`hover:border-b mr-5 text-[#D0D6F9]  ${
              planet === "Mars" ? "border-b" : ""
            }   `}
          >
            MARS
          </p>
          <p
            onClick={() => setplanet("Europa")}
            className={`hover:border-b mr-5 text-[#D0D6F9]  ${
              planet === "Europa" ? "border-b" : ""
            }   `}
          >
            EUROPA
          </p>
          <p
            onClick={() => setplanet("Titan")}
            className={`hover:border-b mr-5 text-[#D0D6F9]  ${
              planet === "Titan" ? "border-b" : ""
            }   `}
          >
            TITAN
          </p>
        </div>
        <h1 className="dp:text-9xl md:text-7xl xs:text-4xl my-2 uppercase">{filteredData[0].name}</h1>
        <p className=" xs:text-sm md:text-lg text-[#D0D6F9] my-2 dp:text-start xs:text-center">
          {filteredData[0].description}
        </p>
        <hr className="my-8 w-full" />
        <div className="flex md:flex-row xs:flex-col xs:w-1/2 dp:w-[80%] justify-between items-center h-44">
          <span className="text-[#D0D6F9] text-sm">
            AVG. DISTANCE
            <h1 className="text-2xl text-[white] my-2 uppercase">
              {filteredData[0].distance}
            </h1>
          </span>
          <span className="text-[#D0D6F9] text-sm">
            EST. TRAVEL TIME
            <h1 className="text-2xl text-[white] my-2 uppercase">
              {filteredData[0].travel}
            </h1>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DestinationComponent;
