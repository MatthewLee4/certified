import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Test from "./components/Test";
import Protected from './components/Protected';

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
       
        </Switch>

      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
