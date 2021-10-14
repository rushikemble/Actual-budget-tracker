import { IconButton } from "@material-ui/core";
import { AccountCircle, HomeRounded, TrendingUp } from "@material-ui/icons";
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="nav_wrapper">
      <div className="header_wrapper">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logo_wrapper">
            <TrendingUp />
            <h3>Actual</h3>
          </div>
        </Link>
        <div className="mainIcon_wrapper">
          <div className="homeIcon_wrapper">
            <Link to="/" style={{ textDecoration: "none" }}>
              <IconButton>
                <HomeRounded />
              </IconButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
