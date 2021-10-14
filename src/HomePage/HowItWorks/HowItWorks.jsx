import React from "react";
import "./Howitworks.css";
import actualHome from "./actual-home.png";
function HowItWorks() {
  return (
    <div className="howItWorks-wrapper">
      <h3 className="content-heading">HOW IT WORKS?</h3>
      <div className="howItWorks-container">
        <div className="howItWorks-text-container">
          <div className="howItWorks-text-wrapper-left">
            <div className="howItWorks-text-wrapper">
              <h3>BUDGET TRACKING</h3>
              <h4>
                BUDGET TRACKING HAS NEVER BEEN SO EASIER, JUST KEEP ADDING daily
                income and expenses to keep track of them
              </h4>
            </div>
          </div>
          <div className="howItWorks-text-wrapper-right">
            <div className="howItWorks-text-wrapper">
              <h3>track with Voice assistant</h3>
              <h4>
                use our voice assistant to add or delete your daily trasactions
              </h4>
            </div>
          </div>
          <div className="howItWorks-text-wrapper-left">
            <div className="howItWorks-left-text-wrapper">
              <div className="howItWorks-text-wrapper">
                <h3>BUDGET CONTROLLING</h3>
                <h4>
                  as the administrator of a company you can add or delete the
                  budgets
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="howItWorks-image-container">
          <img src={actualHome} alt="howItWorks-img" />
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
