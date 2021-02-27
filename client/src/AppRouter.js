import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Test from "./components/Test";
import Protected from './components/Protected';
import AboutUs from "./components/About";
import ContactUs from "./components/Contact";
import Profile from "./components/Profile";

const AppRouter = (props) => {
  
const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
              <Signup />
          </Route>
          <Route path="/signin" exact>
              <Signin setIsLoggedIn={setIsLoggedIn} />
          </Route>
          <Protected isLoggedIn={isLoggedIn}>
            <Route path="/test" exact>
                <Test />
            </Route> 
          </Protected>
          
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
