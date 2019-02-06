import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";

import { InputCode } from "./pages/InputCode";
import { PlayerRemote } from "./pages/PlayerRemote";

import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={InputCode} />
        <Route exact path="/:rcid" component={PlayerRemote} />
      </Switch>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
