import React from "react";
import "./Homesub.css";
import circleimg from "./circle-image.svg";
function Homesub() {
  return (
    <div className="subscription-wrapper">
      <div className="circle">
        <img src={circleimg} alt="circle-img" />
      </div>
      <div className="subscription-container">
        <div className="subscription-row">
          <h3 className="content-heading">
            Get monthly money tips and <br /> <b>stay on top of your finance</b>
          </h3>
          <div className="subscription-form-container">
            <form action="">
              <input type="text" placeholder="Your Email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homesub;
