import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css"; // Import your navbar styles here

const Navbar = () => {
  const [burger_class, setBurger_class] = useState("burger-bar unclicked");
  const [menu_class, setMenu_class] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  //toggle burger menu :
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurger_class("burger-bar clicked");
      setMenu_class("menu visible");
    } else {
      setBurger_class("burger-bar unclicked");
      setMenu_class("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const closeMenu = () => {
    setBurger_class("burger-bar unclicked");
    setMenu_class("menu hidden");
    setIsMenuClicked(false);
  };
  return (
    <div>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}> </div>
          <div className={burger_class}> </div>
          <div className={burger_class}> </div>
        </div>
      </nav>
      <div className={menu_class}>
        <button className="close-btn" onClick={closeMenu}>
          X
        </button>
        <Link to="/menu" className="menu-items" onClick={closeMenu}>
          Meny
        </Link>
        <Link to="/about" className="menu-items" onClick={closeMenu}>
          Vårt kaffe
        </Link>
        <Link to="/profile" className="menu-items" onClick={closeMenu}>
          Min profil
        </Link>
        <Link to="/order-status" className="menu-items" onClick={closeMenu}>
          Orderstatus
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
