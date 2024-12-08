import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.jpg";
import { navItems } from "../constants";
import { AiOutlineMenu } from "react-icons/ai";

import "./navBar.css";

const Navbar = ({sideMenuState, setSideMenuState}) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const showSideMenu = () => {
    setSideMenuState(true)
  }

  console.log("stateNav", sideMenuState)
  // backdrop-blur-lg border-b border-neutral-700/80
  return (
    <div className="mainNav">
      <div className="navContainer">
        <div className="navLeft">
          <span class="Header_bannerMarker__Uwvxz"></span>
          <p>adipisicing eli.</p>
          <div className="navUnderlineLeftHolder">
            <p className="navUnderlineLeft">explore your career</p>
          </div>
        </div>
        <div className="navCenter">
          <div className="navCenterInner">
            <p><b>MI</b><br/>ND</p>
          </div>
        </div>
        <div className="navRight">
        <AiOutlineMenu  size={25} color="white" onClick={() => showSideMenu()}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
