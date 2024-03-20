import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import header from "../../imgs/header.svg";
import headerR from "../../imgs/header-r.svg";
import Logo from "../../imgs/logo.svg";
import info from "../../imgs/text.png";

const Home = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMenu(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showMenu) {
      navigate("/menu"); // Navigate to the menu page
    }
  }, [showMenu, navigate]);

  return (
    <div className="splash-container">
      <img src={header} alt="left decoration" className="left-decoration" />
      <img src={headerR} alt="right decoration" className="right-decoration" />
      <div className="logo-container">
        <img src={Logo} alt="logo" className="logo" />
        <img src={info} alt="logo" className="logo" />
      </div>
    </div>
  );
};

export default Home;
