import Details from "../Details/Details";
import Details2 from "../Details/Details2";
import React from "react";
import "./SecondList.css";

import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  ErrorPanel,
} from "@speechly/react-ui";
import DonutChart from "./DonutChart";

function SecondList() {
  return (
    <div className="secondList_container">
      <div className="speekText_wrapper">
        <h2>Set Up Monthly Budget</h2>
      </div>
      <div className="pnl_wrapper">
        <div className="pnl_btn_wrapper">
          <h3>Monthly overview</h3>
          <div className="details_Component_wrapper">
            <Details title="Income" />
            <Details2 title="Expense" />
          </div>
        </div>
      </div>
      <div className="category_list_wrapper">
        <DonutChart />
        <PushToTalkButtonContainer>
          <PushToTalkButton />
          <ErrorPanel />
        </PushToTalkButtonContainer>
      </div>
    </div>
  );
}

export default SecondList;
