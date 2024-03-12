import React, { useState, useEffect } from "react";
import topHead from "../../imgs/toop.svg";
import bottom from "../../imgs/bottom.svg";
import "./menu.css";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://airbean.awesomo.dev/api/beans/")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);

        setMenuItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching menu:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <header className="header">
        <img src={topHead} alt="Header" />
      </header>
      <div className="menu-container">
        <div className="content">
          <h2 className="title">Meny</h2>
          {loading ? (
            <p>Loading menu...</p>
          ) : (
            <ul>
              {menuItems.map((item) => (
                <li key={item.id}>
                  {item.name} - {item.price}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <footer className="footer">
        <img src={bottom} alt="Footer" />
      </footer>
    </div>
  );
};

export default Menu;
