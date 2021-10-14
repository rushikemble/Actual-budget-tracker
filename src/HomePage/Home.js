import React from "react";
import Header from "../Header/Header";
import "./Home.css";
import indicator from "./contactless-indicator.png";
import chip from "./chip.png";
import visa from "./visa.png";
import { Link } from "react-router-dom";
import { ArrowBack } from "@material-ui/icons";
import Features from "./Fetures/Features";
import HowItWorks from "./HowItWorks/HowItWorks";
import Footer from "../Footer/Footer";
import Homesub from "./news/Homesub";

function Home() {
  return (
    <div className="home_container">
      <Header />
      <div className="middle_home_container">
        <div className="heading_wrapper">
          <h4>Personal budget planner</h4>
          <h1>Get more from your budget</h1>
          <div className="heading_button_wrapper">
            <button>
              <Link
                to="/Calculator"
                style={{ textDecoration: "none", color: "black" }}
              >
                Start
                <ArrowBack />
              </Link>
            </button>
          </div>
        </div>
        <div className="card_wrapper">
          <div className="card">
            <div className="card_holder_Wrapper">
              <h3 className="bank">bank</h3>
              <img src={chip} className="chip" alt="chip" />
              <img src={indicator} className="indicator" alt="indicator" />
              <h3 className="number">4100 1234 5678 9010</h3>
              <h5 className="card-holder">
                <span>card holder</span>
                <br />
                Actual
              </h5>
              <h5 className="valid">
                <span>expiry date</span>
                <br />
                20/30
              </h5>
              <img src={visa} className="logo" alt="visa" />
            </div>
          </div>

          <div classNames="card2">
            <div className="card_holder_Wrapper2">
              <h3 className="bank">bank</h3>
              <img src={chip} className="chip" alt="chip" />
              <img src={indicator} className="indicator" alt="indicator" />
              <h3 className="number">4100 1234 5678 9010</h3>
              <h5 className="card-holder">
                <span>card holder</span>
                <br />
                Actual
              </h5>
              <h5 className="valid">
                <span>expiry date</span>
                <br />
                20/30
              </h5>
              <img src={visa} className="logo" alt="logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="home-body-container">
        <div className="home-body-wrapper">
          <Features />
          <HowItWorks />
          <Homesub />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
