import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';
import AddService from "./components/AddService/AddService";

import Home from "./components/Home/Home/Home";
import Services from "./components/Home/Services/Services";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <p>Name: {loggedInUser.name}</p>
    <Router >
     <Switch>
      <Route exact path="/">
        <Home/>
        </Route> 
        <Route path="/login">
         <Login/>
        </Route>
        <Route path="/addService">
         <AddService/>
        </Route>
        <PrivateRoute path="/service/:serviceId">
            <Services />
          </PrivateRoute> 
       </Switch> 
    </Router>
    </UserContext.Provider>
  );
}

export default App;
