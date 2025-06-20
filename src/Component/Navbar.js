import React, { useState, useEffect } from "react";
import "./Navbar.css";
// import logo from "./Assets/ChatGPT Image Jun 19, 2025, 05_06_57 PM.png";
import logo from "./Assets/6a066435-5809-412f-aaeb-dec9f975eb3a.jpg";

// import logo from "./Assets/logo.png";
import arrowR from "./Assets/arrowR.png";
import arrowL from "./Assets/Group-1.png";



import sliderImage1 from "./Assets/mehndi-wedding-ornament-hands-drawn-by-henna.jpg";
import sliderImage2 from "./Assets/indian-wedding-bangles-mehandi-henna-coloured-hands-with-reflective-ornament.jpg";
import sliderImage3 from "./Assets/download.jpg";
import sliderImage4 from "./Assets/download (1).jpg";


import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigateP = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [sliderImage1, sliderImage2, sliderImage3, sliderImage4];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => nextImage(), 3000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  const goToImage = (index) => setCurrentImageIndex(index);

  const handleClick = (label) => {
    setIsOpen(false);
    setTimeout(() => {
      if (label === "About Us") {
        document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" });

      } else if (label === "Services") {
        document.getElementById("services-section")?.scrollIntoView({ behavior: "smooth" });
      } 
      else if (label === "Contact Us") {
        document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  const menuItems = [
    { id_C: 1, label: "About Us", command: () => handleClick("About Us") },
    { id_C: 2, label: "Services", command: () => handleClick("Services") },
    { id_C: 4, label: "Contact Us", command: () => handleClick("Contact Us") },
  ];

  return (
    <div>
      <nav className="navbar">
        <div className="logoParent">
<img src={logo} alt="Logo" className="logo" />

        </div>

        <ul className={`nav-links ${isOpen ? "mobile-nav open" : ""}`}>
          {menuItems.map((item) => (
            <li key={item.id_C}>
              <div className="menu-box" onClick={item.command}>
                {item.label}
              </div>
            </li>
          ))}
        </ul>

        {windowWidth <= 800 && (
          <div className="hamburger-menu" onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? <RxHamburgerMenu className="hamburger-icon" /> : <CgClose className="hamburger-icon" />}
          </div>
        )}
      </nav>

      {/* Image Slider */}
      <div className="image-slider">
        <img src={images[currentImageIndex]} alt="Slider" className="image-size" />
        <div className="dots-container">
          {images.map((_, index) => (
            <span key={index} className={`dot ${currentImageIndex === index ? "active" : ""}`} onClick={() => goToImage(index)} />
          ))}
        </div>
        <span className="arrowRs" onClick={nextImage}>
          <img src={arrowR} alt="Arrow Right" />
        </span>
        <span className="arrowLs" onClick={prevImage}>
          <img src={arrowL} alt="Arrow Left" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
