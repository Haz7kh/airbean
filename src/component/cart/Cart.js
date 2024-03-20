// Cart.js
import React, { useState } from "react";
import Navbar from "../../component/nav/Nav";
import topHead from "../../imgs/toop.svg";

const Cart = () => {
  return (
    <>
      <header className="header">
        <Navbar />
        <img src={topHead} alt="Header" />
      </header>
      <div className="profile-container">
        <div className="form-wrapper">
          <h2>Din oreder:</h2>
        </div>
      </div>
    </>
  );
};

export default Cart;
