import "./App.css";
import React, { usestate, useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";

import { useStateValue } from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"
import Payment from "./Payment";
import Orders from "./Orders";

const promise = loadStripe("pk_test_51KsSipSCCbalLSeDOgTASgjQvpyF0dNxLBsJETncVJXX9uJ7w8h4CnbsahBff5BDRwmZclEwVEPSM74A0XudfMIQ00d6AMMmC7");

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will wit until and used logins
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  //can be waiting for basket or user
  return (
    //Bem is being followed
    <div className="app">
      <Router>
        <Routes>
          <Route
            exact
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            exact
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            exact
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                <Payment />

                </Elements>


              </>

            }
          />
          <Route
            exact
            path="/orders"
            element={
              <>
                <Header />
                <Orders/>
               

              </>
            }
            />
            
        </Routes>
      </Router>
    </div>
  );
}

export default App;
