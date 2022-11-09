import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const SideMenu = ({ icon, seticon }) => {
  var styles = {
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "black",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "rgba(gray,0.5)",
      backdropFilter: "blur(20px)",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <div>
      <Menu
        onClose={() => seticon(false)}
        noOverlay
        disableOverlayClick
        customBurgerIcon={false}
        styles={styles}
        isOpen={icon}
        right
        width={"70%"}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      >
        <Link className="my-5" to={"/"}>
          <p className="font-semibold mr-2 inline">00</p>HOME
        </Link>
        <Link className="my-5" to={"/destinations"}>
        <p className="font-semibold mr-2 inline">01</p>DESTINATIONS
        </Link>
        <Link className="my-5" to={"/crew"}>
        <p className="font-semibold mr-2 inline">02</p>CREW
        </Link>
        <Link className="my-5" to={"/technology"}>
        <p className="font-semibold mr-2 inline">03</p>TECHNOLOGY
        </Link>
      </Menu>
    </div>
  );
};

export default SideMenu;
