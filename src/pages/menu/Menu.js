import React, { useState, useEffect } from "react";
import topHead from "../../imgs/toop.svg";
import bottom from "../../imgs/bottom.svg";
import "./menu.css";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://airbean-api-xjlcn.ondigitalocean.app/api/beans/")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setMenuItems(data.menu); // Update to set menuItems to the 'menu' array
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching menu:", error);
        setLoading(false);
      });
  }, []);

  const calculateDots = (title) => {
    const dots = ".........."; // Define the dots string
    const dotLength = 15 - title.length; // Calculate the number of dots needed
    return dots.slice(0, Math.max(0, dotLength)); // Return the dots
  };

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
            <div>
              {menuItems.map((item) => (
                <div key={item.id} className="menu-item">
                  <button className="add-btn">+</button>
                  <div className="menu-item-details">
                    <div>
                      <span className="menu-item-title">{item.title}</span>
                      <span>{calculateDots(item.title)}</span>
                      <span>{item.price}</span>
                    </div>
                    <div className="menu-item-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
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
