import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Test from "./components/Test";
import ContactForm from "./components/ContactForm";

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
          <Route path="/contactform" exact>
              <ContactForm />
          </Route> 
       
        </Switch>

      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
