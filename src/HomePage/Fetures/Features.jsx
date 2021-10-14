import React from "react";
import FeatureCard from "./FeatureCard";
import moneyBag from "./money-bag.png";
import income from "./incomes.png";
import voiceassistant from "./voice-assistant.png";
import "./Features.css";

function Features() {
  return (
    <div className="fetures-container">
      <div className="features-content-container">
        <h3 className="content-heading">FEATURES</h3>
        <h4 className="content-subHeading">
          Track your income & expenses with over 20+ categories
        </h4>
        <div className="features-content-wrapper">
          <FeatureCard
            heading={"communicate with your actual with Voice assistant"}
            logoimg={voiceassistant}
          />
          <FeatureCard
            heading={"budget and track your money with pay analytics"}
            logoimg={moneyBag}
          />
          <FeatureCard
            heading={"Control your income and expenses in one app"}
            logoimg={income}
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
