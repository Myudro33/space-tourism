import React from "react";
import bgDesktop from "../assets/crew/background-crew-desktop.jpg";
import bgTablet from "../assets/crew/background-crew-tablet.jpg";
import bgMobile from "../assets/crew/background-crew-mobile.jpg";
import CrewComponent from "../components/CrewComponent";

const Crew = ({ sethash }) => {
  sethash("#/crew");
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <img
        className="hidden absolute dp:block w-full h-full"
        alt="background"
        src={bgDesktop}
      />
      <img
        className="hidden absolute md:block dp:hidden w-full h-full"
        src={bgTablet}
        alt="background"
      />
      <img
        className="md:hidden absolute w-full h-full"
        src={bgMobile}
        alt="background"
      />
      <h1 className="z-10 md:w-[95%] dp:w-[70%] text-start mt-28 flex text-[white] text-2xl">
        <p className="text-[gray] mr-4 font-semibold">02</p>MEET YOUR CREW
      </h1>
      <CrewComponent/>
    </div>
  );
};

export default Crew;
