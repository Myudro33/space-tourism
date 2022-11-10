import React from "react";
import bgDesktop from "../assets/destination/background-destination-desktop.jpg";
import bgTablet from "../assets/destination/background-destination-tablet.jpg";
import bgMobile from "../assets/destination/background-destination-mobile.jpg";
import DestinationComponent from "../components/DestinationComponent";

const Destinations = ({ sethash }) => {
  sethash("#/destinations");
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
      <h1 className="z-10 dp:w-[70%] mt-28 flex text-[white] text-2xl">
        <p className="text-[gray] mr-4 font-semibold">01</p>PICK YOUR
        DESTINATION
      </h1>
      <DestinationComponent />
    </div>
  );
};

export default Destinations;
