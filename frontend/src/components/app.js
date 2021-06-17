import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";

import MainPage from "./main/main_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import RestaurantListContainer from "./restaurants/restaurant_list_container";
import SplashContainer from "./splash/splash_container"

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <ProtectedRoute exact path="/wheel" component={MainPage} />
      <ProtectedRoute path="/restaurants" component={RestaurantListContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/" component={SplashContainer} />
    </Switch>
  </div>
);

export default App;
