import React, { useState } from "react";
import hamburgerIcon from "../../imgs/menu.svg"; // Import your SVG file
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
        {/* Add your menu items here */}
      </div>
    </div>
  );
};

export default Navbar;
