import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Folio from "./pages/Folio";
import Contact from "./pages/Contact";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/folio" component={Folio} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default Routes;
