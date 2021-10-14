import React from "react";
import "./Features.css";

function FeatureCard({ heading, logoimg }) {
  return (
    <div className="features-card-container">
      <img src={logoimg} alt="logo" />
      <h4 className="features-card-heading">{heading}</h4>
    </div>
  );
}

export default FeatureCard;
