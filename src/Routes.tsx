import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./components/Landing";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </Router>
  );
};

export default Routes;
