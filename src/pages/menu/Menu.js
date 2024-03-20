import React, { useState, useEffect } from "react";

import "./menu.css";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

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
    const dots = "..........";
    const dotLength = 20 - title.length;
    return dots.slice(0, Math.max(0, dotLength));
  };

  const addToCart = (item) => {
    console.log("Item added to cart:", cart);
    setCart([...cart, item]);
  };

  return (
    <div className="container">
      <div className="menu-container">
        <div className="content">
          <h2 className="title">Meny</h2>
          {loading ? (
            <p>Loading menu...</p>
          ) : (
            <div>
              {menuItems.map((item) => (
                <div key={item.id} className="menu-item">
                  <button className="add-btn" onClick={() => addToCart(item)}>
                    +
                  </button>
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
    </div>
  );
};

export default Menu;
