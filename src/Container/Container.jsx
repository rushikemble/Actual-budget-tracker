import React from "react";
import List from "../List/List";
import Form from "../Form/Form";
import Header from "../Header/Header";
import SecondList from "../SecondList/SecondList";
import { Provider } from "../context/context";
import "./Container.css";
import { SpeechProvider } from "@speechly/react-client";
function Container() {
  return (
    <div className="container_div">
      <Header />
      <div className="grid_container">
        <SpeechProvider
          appId={process.env.REACT_APP_SPEECHLY_APP_ID}
          language="en-US"
        >
          <Provider>
            <Form />
            <SecondList />
            <List />
          </Provider>
        </SpeechProvider>
      </div>
    </div>
  );
}

export default Container;
