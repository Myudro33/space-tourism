import React, { useState } from "react";
import data from "../data.json";
import comander from "../assets/crew/image-douglas-hurley.png";
import specialist from "../assets/crew/image-mark-shuttleworth.png";
import pilot from "../assets/crew/image-victor-glover.png";
import engineer from "../assets/crew/image-anousheh-ansari.png";

const CrewComponent = () => {
  const [index, setindex] = useState(0);
  const filteredData = data.crew;
  console.log(filteredData);
  return (
    <div className="z-10 text-[white] dp:w-[75%] xs:w-[95%] xs:h-screen dp:h-[27rem] my-5 flex dp:flex-row xs:flex-col justify-between xs:items-center dp:items-end">
      <div className="dp:h-[80%] flex flex-col xs:items-center dp:items-start justify-between dp:w-[55%]">
        <img
          className="dp:h-full h-64 md:hidden xs:flex "
          src={
            (index === 0 && comander) ||
            (index === 1 && specialist) ||
            (index === 2 && pilot) ||
            (index === 3 && engineer)
          }
          alt="img"
        />
        <hr className=" w-full xs:flex md:hidden" />
        <div className="flex md:hidden xs:flex xs:my-8 dp:my-0">
          <button
            onClick={() => setindex(0)}
            className={` cursor-pointer w-3 h-3 mr-3 rounded-full ${
              index === 0 ? "bg-white" : "bg-[gray]"
            } `}
          ></button>
          <button
            onClick={() => setindex(1)}
            className={` cursor-pointer w-3 h-3 mr-3 rounded-full ${
              index === 1 ? "bg-white" : "bg-[gray]"
            }`}
          ></button>
          <button
            onClick={() => setindex(2)}
            className={` cursor-pointer w-3 h-3 mr-3 rounded-full ${
              index === 2 ? "bg-white" : "bg-[gray]"
            }`}
          ></button>
          <button
            onClick={() => setindex(3)}
            className={` cursor-pointer w-3 h-3 mr-3 rounded-full ${
              index === 3 ? "bg-white" : "bg-[gray]"
            }`}
          ></button>
        </div>
        <div className="flex flex-col dp:items-start xs:items-center">
          <h1 className="uppercase xs:text-xl md:text-3xl my-2 text-[#D0D6F9]">
            {filteredData[index].role}
          </h1>
          <h1 className="md:text-[50px] xs:text-3xl uppercase my-4">
            {filteredData[index].name}
          </h1>
          <p className="text-[#D0D6F9] xs:text-center dp:text-start xs:w-[85%] md:w-[60%] dp:w-[75%]">
            {filteredData[index].bio}
          </p>
        </div>
        <div className="flex xs:hidden md:flex xs:my-8 dp:my-0">
          <button
            onClick={() => setindex(0)}
            className={` cursor-pointer w-3 h-3 mr-3 rounded-full ${
              index === 0 ? "bg-white" : "bg-[gray]"
            } `}
          ></button>
          <button
            onClick={() => setindex(1)}
            className={` cursor-pointer w-3 h-3 mr-3 rounded-full ${
              index === 1 ? "bg-white" : "bg-[gray]"
            }`}
          ></button>
          <button
            onClick={() => setindex(2)}
            className={` cursor-pointer w-3 h-3 mr-3 rounded-full ${
              index === 2 ? "bg-white" : "bg-[gray]"
            }`}
          ></button>
          <button
            onClick={() => setindex(3)}
            className={` cursor-pointer w-3 h-3 mr-3 rounded-full ${
              index === 3 ? "bg-white" : "bg-[gray]"
            }`}
          ></button>
        </div>
      </div>
      <img
        className="dp:h-full xs:hidden md:flex "
        src={
          (index === 0 && comander) ||
          (index === 1 && specialist) ||
          (index === 2 && pilot) ||
          (index === 3 && engineer)
        }
        alt="img"
      />
    </div>
  );
};

export default CrewComponent;
