import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

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

ReactDOM.render(<div>hello world</div>, document.getElementById("root"));

serviceWorker.unregister();
