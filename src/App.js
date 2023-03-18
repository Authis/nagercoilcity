import React from "react";

import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import { HashRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/Dashboard" component={Dashboard} />
      </Router>
    </div>
  );
}

export default App;
