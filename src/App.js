import "./scss/App.css";
import Container from "./Container/Container";
import React from "react";
import Home from "./HomePage/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Calculator" component={Container} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
