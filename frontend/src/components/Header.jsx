import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import './Header.css';
import { RxCross2 } from "react-icons/rx";

const ThinClose=({size,color,className,onClick})=>
(
<svg
onClick={onClick}
xmlns="http://www.w3.org/2000/svg"
width={size}
height={size}
fill="none"
stroke={color}
strokeWidth="0.25"
viewBox="0 0 24 24"
className={className}
style={{ cursor: "pointer" }}
>
<line x1="4" y1="4" x2="20" y2="20"/>
<line x1="20" y1="4" x2="4" y2="20" />
</svg>

);


const Header =()=>
{
  const [isMenuOpen,setIsMenuOpen]=useState(false);
  return(
    <>
    <div className="header-container">
        <div className="header-logo">
        <img src={logo} alt="Logo"/>
        </div>
        <div className="header-menu">
            {isMenuOpen ?
            (
                  <a href="#" className="menu-btn" onClick={() => setIsMenuOpen(false)}>
                  CLOSE
                  </a>
               
            ):
            (
                  <a href="#" className="menu-btn" onClick={() => setIsMenuOpen(true)}>
                  MENU
                  </a>               
            )
            }
        </div>
    </div>
    <div>
      <div className={`overlay ${isMenuOpen ? "overlay-open" : ""}`}>
        <ThinClose size={130} color="white" className="overlay-close" onClick={() => setIsMenuOpen(false)} />
          <ul className="overlay-links">
          <li><span>HOME</span></li>
          <li><span>ABOUT</span></li>
          <li><span>FEATURES</span></li>
          <li><span>CAREERS</span></li>
          <li><span>CONTACT</span></li>
          </ul>

          <div className="overlay-details">
            <p>TRESVANCE SOFTWARES</p>
            <p><FaEnvelope style={{ marginRight: "8px" }}/> contact@tresvance</p>
            <p><FaMapMarkerAlt style={{ marginRight: "8px" }}/>Cochin,India</p>
          </div>
            <video className="overlay-vedio" src="https://cdn.pixabay.com/vimeo/454036780/tech-background-1920x1080-1.mp4?width=1920&hash=somehash" autoPlay loop muted controls />
            <p className="video-caption">Play Video</p>
      </div>
    </div>
    </>
  );
}

export default Header;