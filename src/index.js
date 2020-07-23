import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import Dashboard from "./components/dashboard/dashboard";
import "./index.css";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyB3O6WaN0jRcs7fqhDFDrejXETodTx3kZk",
  authDomain: "my-messenger-99c12.firebaseapp.com",
  databaseURL: "https://my-messenger-99c12.firebaseio.com",
  projectId: "my-messenger-99c12",
  storageBucket: "my-messenger-99c12.appspot.com",
  messagingSenderId: "595226245835",
  appId: "1:595226245835:web:3fda36e765cd59a72a794e",
  measurementId: "G-L80MXLN9HF",
});

const routing = (
  <Router>
    <div id="routing-container">
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
