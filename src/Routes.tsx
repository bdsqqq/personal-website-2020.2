import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Folio from "./pages/Folio";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/folio" component={Folio} />
      </Switch>
    </Router>
  );
};

export default Routes;
