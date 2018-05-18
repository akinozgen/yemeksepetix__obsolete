import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import Basla from "./pages/basla";
import IlceSec from "./pages/ilce_sec";
import Oneri from "./pages/oneri";
import "./index.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/basla" component={Basla} />
          <Route path="/ilce-sec" component={IlceSec} />
          <Route path="/oneri" component={Oneri} />
        </Switch>
      </Router>
    );
  }
}

export default App;
