import React from "react";
import { Link } from "react-router-dom";
import backgroundVideo from "../assets/MyMovie.mp4";

const Welcome = () => {
  return (
    <div>
      <video autoPlay loop muted id="video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <div className="welcomeFlex">
        <h1 className="logo">
          REAL <span className="logoLight">FAKE</span> STORE
        </h1>
        <h2 className="subLogo">INTERDIMENSIONAL BODEGA</h2>
        <Link id="neonGlow" to="/home">
          ENGAGE WARP DRIVE
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
