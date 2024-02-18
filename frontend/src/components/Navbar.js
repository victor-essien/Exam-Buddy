import React, { useState } from "react";
import Logo from "../images/logo.png";
import Hamburger from "../images/hamburger.svg";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";


function Navbar() {
  const [sidebarOpen, setsidebarOpen] = useState(false);

  const toogleSidebar = () => {
    setsidebarOpen(!sidebarOpen);
    console.log(sidebarOpen);
  };

  return (
    <>
      <div className="nav-cont">
        <div className="logo-cont">
          <Link to="/">
            {" "}
            <img src={Logo} alt="" className="logo" />
          </Link>
          <button onClick={toogleSidebar} className="hamburger-menu">
            <img src={Hamburger} alt="" />
          </button>
        </div>
      </div>

      <Sidebar open={sidebarOpen} />
   
    </>
  );
}

export default Navbar;
