import React from "react";
import { Link } from "react-router-dom";
import "./status.css";
import DroneSVG from "../../imgs/dron.svg";

const Status = () => {
  return (
    <div className="order-container">
      <div className="centered">
        <div>Ordernummer #12DV23F</div>
        <img src={DroneSVG} alt="Drone" />
        <div>Din beställning är på väg</div>
        <div>13 minuter</div>
        <button className="btn-cool">
          <Link to="/menu">Ok, Cool</Link>
        </button>
      </div>
    </div>
  );
};

export default Status;
