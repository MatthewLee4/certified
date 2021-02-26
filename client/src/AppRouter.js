import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Test from "./components/Test";
import AboutUs from "./components/About";
import ContactUs from "./components/Contact";
import Profile from "./components/Profile";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
              <Signup />
          </Route>
          <Route path="/signin" exact>
              <Signin />
          </Route>

          <Route path="/test" exact>
              <Test />
          </Route>
          <Route path="/profile" exact>
              <Profile />
          </Route> 
          <Route path="/about" exact>
              <AboutUs />
          </Route> 
          <Route path="/contact" exact>
              <ContactUs />
          </Route> 

          
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
