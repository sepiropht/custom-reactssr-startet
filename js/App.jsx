import React from "react";
import { Route } from "react-router-dom";
import Landing from "./Landing";

const App = () => (
  <div className="app">
    <Route exact path="/" component={Landing} />
  </div>
);

export default App;
