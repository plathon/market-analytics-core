import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signin">signin</Link>
            </li>
            <li>
              <Link to="/signup">signup</Link>
            </li>
            <li>
              <Link to="/password/reset">reset password</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/password/reset">
            <ResetPassword />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
