import React from "react";
import "./profile.css";
import Navbar from "../../component/nav/Nav";
import topHead from "../../imgs/toop.svg";

const Profile = () => {
  return (
    <>
      <header className="header">
        <Navbar />
        <img src={topHead} alt="Header" />
      </header>
      <div className="container">
        <div className="form-wrapper">
          <h2 className="profile-title">Välkommen till</h2>
          <h2 className="profile-title">AirBean-familjen!</h2>
          <p className="profile-text">
            Genom att skapa ett konto nedan kan du spara och se din
            orderhistorik.
          </p>
          <form>
            <div className="form-group">
              <label htmlFor="name">Namn:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Sixten Kaffelöver"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-post:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="sixten.kaffelover@zocom.se"
              />
            </div>
            <div>
              <input
                type="checkbox"
                id="subscribe"
                name="subscribe"
                className="circle-checkbox"
              />
              <label htmlFor="subscribe">GDPR OK!</label>
            </div>
            <button type="submit">Brew me a cup!</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
