import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';
import AddOrder from "./components/AddOrder/AddOrder";
import AddReview from "./components/AddReview/AddReview";
import AddService from "./components/AddService/AddService";
import CheckOrder from "./components/CheckOrder/CheckOrder";
import DashBoard from "./components/DashBoard/DashBoard/DashBoard";

import Home from "./components/Home/Home/Home";
import Services from "./components/Home/Services/Services";
import Login from "./components/Login/Login";
import Orderlist from "./components/OrderList/Orderlist";
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
        <Route path="/orderList">
         <Orderlist/>
        </Route>
      
        <Route path="/addService">
         <AddService/>
        </Route>
        <Route path="/addReview">
         <AddReview/>
        </Route>
        <Route path="/addOrder">
         <AddOrder/>
        </Route>
          <PrivateRoute path="/service/:serviceId">
            <CheckOrder />
          </PrivateRoute>
       </Switch> 
    </Router>
    </UserContext.Provider>
  );
}

export default App;
