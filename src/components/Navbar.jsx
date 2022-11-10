import React from "react";
import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";
import "../App.css";


const Navbar = ({ hash,icon,seticon }) => {
  return (
    <div className="text-white absolute z-10 w-full h-20 flex justify-end dp:my-8">
      <div className="md:w-[95%] xs:w-full h-full flex items-center justify-between">
       <Link to={'/'}>
        <img className="ml-5" src={logo} alt="logo" />
       </Link>
        <div
            onClick={() => seticon(true)}
            className={`${icon ? "open" : ""} md:hidden`}
            id="nav-icon4"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        <hr className="text-white w-96 hidden dp:block" />
        <div className=" bg-[#ffffff10] text-white navbar md:w-[36rem] md:px-10  dp:w-[50rem] h-full dp:px-28 hidden md:flex justify-between items-center">
          <Link
            className={`flex ${
              hash === "#/" ? "border-b" : ""
            } hover:border-b h-full items-center`}
            to={"/"}
          >
            <p className="font-semibold mx-1 xs:block dp:block md:hidden">00</p>
            HOME
          </Link>
          <Link
            className={`flex ${
              hash === "#/destinations" ? "border-b" : ""
            } hover:border-b h-full items-center`}
            to={"/destinations"}
          >
            <p className="font-semibold mx-1 xs:block dp:block md:hidden">01</p>{" "}
            DESTINATION
          </Link>
          <Link
            className={`flex ${
              hash === "#/crew" ? "border-b" : ""
            } hover:border-b h-full items-center`}
            to={"/crew"}
          >
            <p className="font-semibold mx-1 xs:block dp:block md:hidden">02</p>{" "}
            CREW
          </Link>
          <Link
            className={`flex ${
              hash === "#/technology" ? "border-b" : ""
            } hover:border-b h-full items-center`}
            to={"/technology"}
          >
            <p className="font-semibold mx-1 xs:block dp:block md:hidden">03</p>{" "}
            TECHNOLOGY
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
