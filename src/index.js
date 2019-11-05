import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import GameContainer from "./Containers/GameContainer";
import { Router, Switch, Redirect, Route } from "react-router-dom";
import { PrivateRoute } from "./Components/PrivateRoute";
import { store } from "./Helpers";
import LoginContainer from "./Containers/LoginContainer";
import RegisterContainer from "./Containers/RegisterContainer";
import { history } from "./Helpers";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <PrivateRoute path="/" exact component={GameContainer}></PrivateRoute>
        <Route path="/login" exact component={LoginContainer}></Route>
        <Route path="/register" exact component={RegisterContainer}></Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
