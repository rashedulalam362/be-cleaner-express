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
import ListShow from "./components/ListShow/ListShow";
import Login from "./components/Login/Login";
import Orderlist from "./components/OrderList/Orderlist";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
export const UserContext = createContext();
 export const OrderContext = createContext();
function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  const [order, setOrder] = useState({});
  return (
    <OrderContext.Provider value={[order, setOrder]}>
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
          <Route path="/List">
          <ListShow/>
        </Route>
       </Switch> 
    </Router>
    </UserContext.Provider>
    </OrderContext.Provider>
  );
}

export default App;
